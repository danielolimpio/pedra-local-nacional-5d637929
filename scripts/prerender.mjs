#!/usr/bin/env node
// Prerender estático: faz fetch nas rotas usando o handler SSR construído
// e salva o HTML resultante em dist/client/<rota>/index.html
import { mkdir, writeFile } from "node:fs/promises";
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
const SERVER_ENTRY = path.resolve("dist/server/index.mjs");

if (!existsSync(SERVER_ENTRY)) {
  console.error(`[prerender] Server entry não encontrado: ${SERVER_ENTRY}`);
  process.exit(1);
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

const handler = mod.default;
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
