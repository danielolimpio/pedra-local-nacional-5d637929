import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Marmorarias.shop — Granito, Mármore e Quartzo Premium Sob Medida" },
      { name: "description", content: "Marmoraria premium especializada em granito São Gabriel, mármore Carrara, Calacatta e quartzo. Bancadas para cozinha, banheiro e churrasqueira sob medida. Atendemos todo o Brasil." },
      { name: "keywords", content: "marmoraria, marmorarias, granito para cozinha, mármore para bancada, granito São Gabriel, mármore Carrara, quartzo branco bancada, bancada de granito, pia de mármore cozinha, preço granito m2, marmoraria online" },
      { name: "author", content: "Marmorarias.shop" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "Marmorarias.shop" },
      { property: "og:title", content: "Marmorarias.shop — Granito, Mármore e Quartzo Premium" },
      { property: "og:description", content: "Granito, mármore e quartzo sob medida para cozinhas, banheiros e churrasqueiras. Atendemos todo o Brasil." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "https://marmorarias.shop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Marmorarias.shop — Granito, Mármore e Quartzo Premium" },
      { name: "twitter:description", content: "Granito, mármore e quartzo sob medida. Atendemos todo o Brasil." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://marmorarias.shop" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Marmorarias.shop",
          url: "https://marmorarias.shop",
          logo: "https://marmorarias.shop/logo.png",
          sameAs: [
            "https://instagram.com",
            "https://facebook.com",
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55-12-98251-9116",
            contactType: "sales",
            areaServed: "BR",
            availableLanguage: ["Portuguese"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Marmorarias.shop",
          url: "https://marmorarias.shop",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://marmorarias.shop/galeria?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Toaster position="top-center" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
