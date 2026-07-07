#!/usr/bin/env node
// Prerender estático: faz fetch nas rotas usando o handler SSR construído
// e salva o HTML resultante em dist/client/<rota>/index.html.
// O TanStack/Cloudflare pode variar o nome/local do entry entre versões
// (index.mjs, index.js, _ssr/index.mjs, .output/server...). Por isso o
// script detecta o entry real em vez de depender de um único caminho fixo.
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
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
  "/sitemap",
];

const DIST_CLIENT = path.resolve("dist/client");
const SERVER_ENTRY_CANDIDATES = [
  process.env.PRERENDER_SERVER_ENTRY,
  "dist/server/index.mjs",
  "dist/server/index.js",
  "dist/server/_ssr/index.mjs",
  "dist/server/_ssr/index.js",
  ".output/server/index.mjs",
  ".output/server/index.js",
  ".output/server/chunks/nitro/nitro.mjs",
].filter(Boolean);

const SERVER_ENTRY = SERVER_ENTRY_CANDIDATES.map((entry) => path.resolve(entry)).find(existsSync);

if (!SERVER_ENTRY) {
  console.error("[prerender] Server entry não encontrado em nenhum caminho conhecido.");
  console.error("[prerender] Candidatos testados:");
  for (const entry of SERVER_ENTRY_CANDIDATES) console.error(`  - ${path.resolve(entry)}`);
  await printBuildTree();
  process.exit(1);
}

console.log(`[prerender] Usando server entry: ${path.relative(process.cwd(), SERVER_ENTRY)}`);

// Polyfills mínimos para o Worker rodar em Node
globalThis.navigator ??= { userAgent: "node" };

let mod;
try {
  mod = await import(pathToFileURL(SERVER_ENTRY).href);
} catch (err) {
  console.error("[prerender] Falha ao importar server entry:", err);
  process.exit(1);
}

const handler = mod.default;
const fetchHandler = getFetchHandler(mod);
if (!fetchHandler) {
  console.error("[prerender] Server entry não exporta um handler fetch válido. Export keys:", Object.keys(mod));
  process.exit(1);
}

const env = { ...process.env };
const ctx = { waitUntil() {}, passThroughOnException() {} };

let failed = 0;
for (const route of ROUTES) {
  const url = `https://localhost${route}`;
  const req = new Request(url, { method: "GET", headers: { "user-agent": "prerender" } });
  try {
    const res = await fetchHandler(req, env, ctx);
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

function getFetchHandler(moduleExports) {
  const candidates = [
    moduleExports.default,
    moduleExports.server,
    moduleExports.cloudflareModule,
    moduleExports,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === "function") return candidate;
    if (candidate && typeof candidate.fetch === "function") return candidate.fetch.bind(candidate);
  }

  return undefined;
}

async function printBuildTree() {
  const roots = ["dist", ".output"];
  for (const root of roots) {
    const absoluteRoot = path.resolve(root);
    if (!existsSync(absoluteRoot)) {
      console.error(`[prerender] ${root}/ não existe.`);
      continue;
    }

    console.error(`[prerender] Arquivos encontrados em ${root}/:`);
    const files = await listFiles(absoluteRoot, 4);
    for (const file of files.slice(0, 120)) {
      console.error(`  - ${path.relative(process.cwd(), file)}`);
    }
    if (files.length > 120) console.error(`  ... mais ${files.length - 120} arquivo(s)`);
  }
}

async function listFiles(directory, maxDepth, currentDepth = 0) {
  if (currentDepth > maxDepth) return [];

  const entries = await readdir(directory).catch(() => []);
  const files = [];
  for (const entry of entries) {
    const absoluteEntry = path.join(directory, entry);
    const info = await stat(absoluteEntry).catch(() => undefined);
    if (!info) continue;
    if (info.isDirectory()) {
      files.push(...(await listFiles(absoluteEntry, maxDepth, currentDepth + 1)));
    } else {
      files.push(absoluteEntry);
    }
  }
  return files.sort();
}
