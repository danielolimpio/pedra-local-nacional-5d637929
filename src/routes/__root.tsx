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
      { title: "Marmorarias.shop" },
      { name: "description", content: "Marmoraria premium especializada em granito São Gabriel, mármore Carrara, Calacatta e quartzo. Bancadas para cozinha, banheiro e churrasqueira sob medida. Atendemos todo o Brasil." },
      { name: "keywords", content: "marmoraria, marmorarias, marmoraria perto de mim, marmoraria São Paulo, marmoraria Rio de Janeiro, marmoraria online, granito para cozinha, mármore para bancada, granito São Gabriel, mármore Carrara, mármore Calacatta Gold, quartzo branco bancada, quartzito Taj Mahal, bancada de granito sob medida, pia de mármore cozinha, preço granito m2, tabela de preços marmoraria 2026, churrasqueira em granito, soleira de granito" },
      { name: "author", content: "Marmorarias.shop" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "Marmorarias.shop" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/icon-512.png" },
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
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-HQGVRWEG85",
      },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HQGVRWEG85');`,
      },
      {
        children: `
(function(){
  if (typeof window === 'undefined') return;
  var h = window.location.hostname;
  var inIframe = false; try { inIframe = window.self !== window.top; } catch(e) { inIframe = true; }
  var isPreview = h.indexOf('lovable.app') !== -1 || h.indexOf('lovableproject.com') !== -1 || h.indexOf('id-preview--') !== -1 || h === 'localhost' || h === '127.0.0.1';
  if (inIframe || isPreview) return;
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('/sw.js').catch(function(){});
    });
  }
  var deferredPrompt = null;
  var promptShown = false;
  window.addEventListener('beforeinstallprompt', function(e){
    e.preventDefault();
    deferredPrompt = e;
  });
  function tryPrompt(){
    if (promptShown || !deferredPrompt) return;
    promptShown = true;
    try { deferredPrompt.prompt(); } catch(err) { promptShown = false; return; }
    deferredPrompt.userChoice && deferredPrompt.userChoice.finally(function(){ deferredPrompt = null; });
  }
  ['click','touchend','keydown'].forEach(function(ev){
    window.addEventListener(ev, tryPrompt, { capture: true, passive: true });
  });
  window.addEventListener('appinstalled', function(){ deferredPrompt = null; promptShown = true; });
})();
        `,
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
