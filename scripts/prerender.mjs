#!/usr/bin/env node
// Prerender estático: faz fetch nas rotas usando o handler SSR construído
// e salva o HTML resultante em dist/client/<rota>/index.html
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROUTES = [
  "/",
  "/cozinha",
  "/banheiro",
  "/precos",
  "/galeria",
  "/contato",
  "/granito",
  "/marmore",
  "/quartzo",
  "/blog",
  "/blog/como-escolher-granito-marmore-quartzo",
  "/blog/manutencao-pedras-naturais",
  "/blog/tendencias-marmoraria-2026",
  "/pedras",
  "/pedras/quartzito-taj-mahal",
  "/pedras/marmore-calacatta-gold",
  "/pedras/marmore-carrara",
  "/pedras/granito-sao-gabriel",
  "/pedras/granito-branco-siena",
  "/pedras/quartzo-branco",
  "/servicos",
  "/servicos/bancada-de-cozinha",
  "/servicos/bancada-de-banheiro",
  "/servicos/churrasqueira-gourmet",
  "/servicos/pia-esculpida",
  "/sitemap",
];


const DIST_CLIENT = path.resolve("dist/client");

async function findServerEntry() {
  const candidates = [
    "dist/server/index.mjs",
    "dist/server/index.js",
    ".output/server/index.mjs",
    ".output/server/index.js",
    "dist/_worker.js/index.js",
    "dist/_worker.js/index.mjs",
  ].map((candidate) => path.resolve(candidate));

  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }

  for (const root of [path.resolve("dist"), path.resolve(".output")]) {
    if (!existsSync(root)) continue;
    const matches = await findFetchHandlers(root);
    const entry = matches.find((file) => /index\.(mjs|js)$/.test(file)) ?? matches[0];
    if (entry) return entry;
  }

  return undefined;
}

async function findFetchHandlers(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findFetchHandlers(fullPath)));
      continue;
    }

    if (!entry.isFile() || !/\.(mjs|js)$/.test(entry.name)) continue;
    const fileStat = await stat(fullPath);
    if (fileStat.size === 0 || fileStat.size > 10_000_000) continue;

    const source = await readFile(fullPath, "utf8");
    if (source.includes("fetch(request") || source.includes("fetch:function") || source.includes("fetch:async")) {
      results.push(fullPath);
    }
  }

  return results;
}

const SERVER_ENTRY = await findServerEntry();

if (!SERVER_ENTRY) {
  console.error("[prerender] Server entry não encontrado. Arquivos gerados:");
  await printGeneratedFiles([path.resolve("dist"), path.resolve(".output")]);
  process.exit(1);
}

console.log(`[prerender] Usando server entry: ${path.relative(process.cwd(), SERVER_ENTRY)}`);

async function printGeneratedFiles(roots) {
  for (const root of roots) {
    if (!existsSync(root)) {
      console.error(`[prerender] Diretório ausente: ${path.relative(process.cwd(), root)}`);
      continue;
    }

    const files = await listFiles(root, 3);
    for (const file of files) {
      console.error(`[prerender] - ${path.relative(process.cwd(), file)}`);
    }
  }
}

async function listFiles(dir, depth) {
  if (depth < 0) return [];

  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFiles(fullPath, depth - 1)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

// Polyfills mínimos para o Worker rodar em Node
globalThis.navigator ??= { userAgent: "node" };

let mod;
try {
  mod = await import(pathToFileURL(SERVER_ENTRY).href);
} catch (err) {
  console.error("[prerender] Falha ao importar server entry:", err);
  process.exit(1);
}

const handler = mod.default ?? mod;
if (!handler || typeof handler.fetch !== "function") {
  console.error("[prerender] Server entry não exporta { fetch }. Export keys:", Object.keys(mod));
  process.exit(1);
}

const env = { ...process.env };
const ctx = { waitUntil() {}, passThroughOnException() {} };

let failed = 0;
for (const route of ROUTES) {
  const url = `https://localhost${route}`;
  const req = new Request(url, { method: "GET", headers: { "user-agent": "prerender" } });
  try {
    const res = await handler.fetch(req, env, ctx);
    if (!res.ok) {
      console.error(`[prerender] ${route} -> HTTP ${res.status}`);
      failed++;
      continue;
    }
    const html = await res.text();
    if (!html.includes("<html") && !html.includes("<!DOCTYPE")) {
      console.error(`[prerender] ${route} -> resposta não parece HTML (len=${html.length})`);
      failed++;
      continue;
    }
    const outDir =
      route === "/" ? DIST_CLIENT : path.join(DIST_CLIENT, route.replace(/^\//, ""));
    await mkdir(outDir, { recursive: true });
    const outFile = path.join(outDir, "index.html");
    await writeFile(outFile, html, "utf8");
    console.log(`[prerender] ${route} -> ${path.relative(process.cwd(), outFile)} (${html.length}b)`);
  } catch (err) {
    console.error(`[prerender] ${route} falhou:`, err);
    failed++;
  }
}

if (failed > 0) {
  console.error(`[prerender] ${failed} rota(s) falharam`);
  process.exit(1);
}
console.log("[prerender] OK");
