import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Mapa do Site — Marmorarias.shop | Todas as Páginas" },
      { name: "description", content: "Mapa do site Marmorarias.shop. Acesse todas as páginas: granito, mármore, quartzo, bancadas para cozinha, banheiro, preços, galeria e blog." },
      { property: "og:title", content: "Mapa do Site — Marmorarias.shop" },
      { property: "og:description", content: "Navegue por todas as páginas da nossa marmoraria online." },
      { property: "og:url", content: "https://marmorarias.shop/sitemap" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/sitemap" }],
  }),
  component: SitemapPage,
});

const sections = [
  {
    title: "Páginas Principais",
    items: [
      { to: "/", label: "Início — Marmoraria Premium" },
      { to: "/precos", label: "Tabela de Preços por m²" },
      { to: "/galeria", label: "Galeria de Projetos" },
      { to: "/contato", label: "Solicitar Orçamento" },
    ],
  },
  {
    title: "Materiais",
    items: [
      { to: "/granito", label: "Granito (São Gabriel, Siena, Preto Absoluto)" },
      { to: "/marmore", label: "Mármore (Carrara, Calacatta, Travertino)" },
      { to: "/quartzo", label: "Quartzo (Silestone, Nanoglass, Dekton)" },
    ],
  },
  {
    title: "Aplicações / Ambientes",
    items: [
      { to: "/cozinha", label: "Bancada de Cozinha e Churrasqueira" },
      { to: "/banheiro", label: "Bancada de Banheiro e Lavabo" },
    ],
  },
  {
    title: "Blog — Pedras Naturais",
    items: [
      { to: "/blog", label: "Blog — Insights de Marmoraria" },
      { to: "/blog/como-escolher-granito-marmore-quartzo", label: "Como escolher entre granito, mármore e quartzo" },
      { to: "/blog/manutencao-pedras-naturais", label: "Manutenção de pedras naturais — guia definitivo" },
      { to: "/blog/tendencias-marmoraria-2026", label: "Tendências de marmoraria 2026" },
    ],
  },
] as const;

function SitemapPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Mapa do Site" }]} />
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="eyebrow flex items-center gap-3"><span className="gold-rule" />Mapa do Site</p>
        <h1 className="mt-4 font-serif text-5xl">Todas as páginas da Marmorarias.shop</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Encontre rapidamente o que procura: materiais (granito, mármore, quartzo),
          ambientes (cozinha, banheiro, churrasqueira), tabela de preços, galeria de
          projetos e nosso blog com guias e tendências de marmoraria.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2 className="text-xs uppercase tracking-[0.25em] text-gold">{sec.title}</h2>
              <ul className="mt-6 space-y-3">
                {sec.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to as any}
                      className="font-serif text-lg text-foreground hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            Para crawlers e ferramentas SEO, consulte também o{" "}
            <a href="/sitemap.xml" className="text-gold hover:underline">sitemap.xml</a> e o{" "}
            <a href="/robots.txt" className="text-gold hover:underline">robots.txt</a>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
