// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const staticPages = [
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
];

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 2,
      failOnError: true,
    },
    pages: staticPages.map((path) => ({ path })),
    spa: {
      enabled: false,
    },
  },
});
