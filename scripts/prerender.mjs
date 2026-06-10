#!/usr/bin/env node
// Prerender estático: faz fetch nas rotas usando o handler SSR construído
// e salva o HTML resultante em dist/client/<rota>/index.html
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

// Importa as listas dinâmicas direto do source (Node consegue ler TS via import? não — vamos espelhar manualmente)
// Mantemos espelho simples: lê os arquivos e extrai os slugs com regex (sem ts-loader).
import { readFileSync } from "node:fs";

function extractSlugs(file) {
  const src = readFileSync(file, "utf8");
  return [...src.matchAll(/\bslug:\s*"([^"]+)"|\b(?:mk|g|m|q|qz)\(\s*"([^"]+)"/g)]
    .map((m) => m[1] || m[2])
    .filter(Boolean);
}

const CIDADES = [...new Set(extractSlugs("src/data/cidades.ts"))];
const PEDRAS = [...new Set(extractSlugs("src/data/pedras.ts"))];
const SERVICOS = [...new Set(extractSlugs("src/data/servicos.ts"))];

const ROUTES = [
  "/", "/cozinha", "/banheiro", "/precos", "/galeria", "/contato",
  "/granito", "/marmore", "/quartzo",
  "/blog",
  "/blog/como-escolher-granito-marmore-quartzo",
  "/blog/manutencao-pedras-naturais",
  "/blog/tendencias-marmoraria-2026",
  "/blog/quartzito-taj-mahal-preco-m2",
  "/blog/diferenca-granito-marmore-quartzo-quartzito",
  "/blog/como-medir-bancada-cozinha",
  "/blog/preco-marmoraria-2026-tabela",
  "/blog/granito-ou-porcelanato-bancada",
  "/blog/como-limpar-marmore-manchado",
  "/blog/quanto-custa-reformar-cozinha-2026",
  "/blog/ilha-de-cozinha-medidas-ideais",
  "/blog/cuba-de-apoio-ou-sob-bancada",
  "/blog/calacatta-gold-vs-carrara",
  "/blog/porcelanato-que-imita-marmore",
  "/blog/marmore-no-banheiro-vale-a-pena",
  "/blog/bancada-cozinha-gourmet-projeto",
  "/blog/tipos-de-acabamento-de-pedra",
  "/blog/fachada-pedra-natural",
  "/blog/churrasqueira-em-pedra",
  "/blog/soleira-de-granito-cores-medidas",
  "/blog/pedra-para-piscina-revestimento",
  "/marmoraria",
  ...CIDADES.map((c) => `/marmoraria/${c}`),
  "/pedras",
  ...PEDRAS.map((p) => `/pedras/${p}`),
  "/servicos",
  ...SERVICOS.map((s) => `/servicos/${s}`),
  "/sitemap",
];


const DIST_CLIENT = path.resolve("dist/client");
const SERVER_CANDIDATES = [
  "dist/server/server.js",
  "dist/server/index.js",
];
const SERVER_ENTRY = SERVER_CANDIDATES.map((p) => path.resolve(p)).find((p) => existsSync(p)) || path.resolve(SERVER_CANDIDATES[0]);

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
    const relativeRoute = route.replace(/^\//, "");
    const outDir = route === "/" ? DIST_CLIENT : path.join(DIST_CLIENT, relativeRoute);
    await mkdir(outDir, { recursive: true });
    const outFile = path.join(outDir, "index.html");
    await writeFile(outFile, html, "utf8");
    if (route !== "/") {
      const flatFile = path.join(DIST_CLIENT, `${relativeRoute}.html`);
      await mkdir(path.dirname(flatFile), { recursive: true });
      await writeFile(flatFile, html, "utf8");
    }
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
