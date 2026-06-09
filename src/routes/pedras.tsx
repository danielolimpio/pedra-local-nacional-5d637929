import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { pedras } from "@/data/pedras";
import hero from "@/assets/hero-granite.webp";

export const Route = createFileRoute("/pedras")({
  head: () => ({
    meta: [
      { title: "Tipos de Pedras: Granito, Mármore, Quartzo e Quartzito" },
      { name: "description", content: "Catálogo completo de pedras naturais e quartzo engenheirado: Granito São Gabriel, Mármore Carrara, Calacatta Gold, Quartzito Taj Mahal, Nero Marquina, Travertino e mais 30 modelos com preço por m²." },
      { name: "keywords", content: "tipos de pedras, pedras naturais, granito, marmore, quartzo, quartzito, taj mahal, calacatta, carrara, sao gabriel, preto absoluto, nero marquina, travertino, mont blanc, azul bahia, branco siena, verde ubatuba, catalogo pedras, preço pedras m2" },
      { property: "og:title", content: "Catálogo de Pedras — Marmorarias.shop" },
      { property: "og:description", content: "Granito, mármore, quartzo e quartzito com preço por m² — 30+ modelos." },
      { property: "og:url", content: "https://marmorarias.shop/pedras" },
      { property: "og:image", content: `https://marmorarias.shop${hero}` },
      { name: "twitter:image", content: `https://marmorarias.shop${hero}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/pedras" }],
  }),
  component: PedrasIndex,
});

function PedrasIndex() {
  const porCat = pedras.reduce<Record<string, typeof pedras>>((acc, p) => {
    (acc[p.categoria] ||= []).push(p); return acc;
  }, {});

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Pedras" }]} />
      <PageHero
        eyebrow="Catálogo Completo"
        title="Tipos de Pedras"
        subtitle="Granito, mármore, quartzo e quartzito — mais de 30 modelos selecionados com preço por m² e aplicações recomendadas."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Por Categoria"
          title="Encontre a pedra ideal para seu projeto"
          description="De clássicos brasileiros como Granito São Gabriel a importados raros como Calacatta Gold e Nero Marquina."
        />

        {Object.entries(porCat).map(([cat, lista]) => (
          <div key={cat} className="mt-16">
            <h2 className="font-serif text-3xl text-foreground">{cat}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lista.map((p) => (
                <Link
                  key={p.slug}
                  to="/pedras/$slug"
                  params={{ slug: p.slug }}
                  className="group block border border-border bg-card p-6 transition-colors hover:border-gold"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.categoria} • {p.origem}</p>
                  <h3 className="mt-2 font-serif text-2xl text-foreground group-hover:text-gold">{p.nome}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.resumo}</p>
                  <p className="mt-4 text-sm font-medium text-gold">A partir de R$ {p.precoMin.toLocaleString("pt-BR")}/m²</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageLayout>
  );
}
