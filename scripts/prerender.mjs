#!/usr/bin/env node
// Prerender estático: faz fetch nas rotas usando o handler SSR construído
// e salva o HTML resultante em dist/client/<rota>/index.html
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
const SERVER_ENTRY_DIRS = [path.resolve("dist/server"), path.resolve(".output/server")];

async function collectServerFiles(dir) {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return collectServerFiles(fullPath);
      if (/\.(mjs|js)$/.test(entry.name)) return [fullPath];
      return [];
    }),
  );
  return files.flat();
}

async function getServerEntryCandidates() {
  const explicitEntry = process.env.PRERENDER_SERVER_ENTRY
    ? [path.resolve(process.env.PRERENDER_SERVER_ENTRY)]
    : [];

  const preferredEntries = SERVER_ENTRY_DIRS.flatMap((dir) => [
    path.join(dir, "index.mjs"),
    path.join(dir, "index.js"),
    path.join(dir, "server.mjs"),
    path.join(dir, "server.js"),
    path.join(dir, "main.mjs"),
    path.join(dir, "main.js"),
    path.join(dir, "entry.mjs"),
    path.join(dir, "entry.js"),
  ]);

  const discoveredEntries = (await Promise.all(SERVER_ENTRY_DIRS.map(collectServerFiles))).flat();
  const uniqueEntries = [...new Set([...explicitEntry, ...preferredEntries, ...discoveredEntries])];
  const existingEntries = [];

  for (const entry of uniqueEntries) {
    try {
      const info = await stat(entry);
      if (info.isFile()) existingEntries.push(entry);
    } catch {
      // Ignore missing candidate paths. The build output name changes between
      // TanStack/Nitro versions, so absence of any single filename is expected.
    }
  }

  return existingEntries;
}

async function loadServerEntry() {
  const candidates = await getServerEntryCandidates();

  if (candidates.length === 0) {
    console.error("[prerender] Nenhum arquivo SSR encontrado em dist/server ou .output/server.");
    console.error("[prerender] Execute o build antes do prerender e confirme se ele gerou o bundle server.");
    process.exit(1);
  }

  const importErrors = [];
  for (const candidate of candidates) {
    try {
      const mod = await import(pathToFileURL(candidate).href);
      const handler = mod.default ?? mod;
      if (handler && typeof handler.fetch === "function") {
        console.log(`[prerender] Usando server entry: ${path.relative(process.cwd(), candidate)}`);
        return handler;
      }
      importErrors.push(`${path.relative(process.cwd(), candidate)} não exporta { fetch }`);
    } catch (err) {
      importErrors.push(`${path.relative(process.cwd(), candidate)}: ${err?.message ?? err}`);
    }
  }

  console.error("[prerender] Nenhum server entry válido foi encontrado.");
  console.error("[prerender] Candidatos testados:");
  for (const error of importErrors) console.error(`- ${error}`);
  process.exit(1);
}

// Polyfills mínimos para o Worker rodar em Node
globalThis.navigator ??= { userAgent: "node" };

const handler = await loadServerEntry();

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
