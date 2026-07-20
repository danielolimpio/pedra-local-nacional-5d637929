import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { PEDRAS } from "@/data/pedras";
import hero from "@/assets/hero-granite.webp";

export const Route = createFileRoute("/pedras/")({
  head: () => ({
    meta: [
      { title: "Pedras Naturais: Granito, Mármore, Quartzito e Quartzo" },
      { name: "description", content: "Catálogo completo de pedras naturais para bancadas e revestimentos: granito, mármore Carrara, Calacatta Gold, quartzito Taj Mahal e quartzo. Preços por m² e ficha técnica de cada pedra." },
      { name: "keywords", content: "catálogo de pedras, granito, mármore, quartzito, quartzo, preço por m2, ficha técnica pedra natural" },
      { property: "og:title", content: "Catálogo de Pedras Naturais — Marmorarias.shop" },
      { property: "og:description", content: "Fichas técnicas, cores, acabamentos e preços de granito, mármore, quartzito e quartzo." },
      { property: "og:image", content: `https://marmorarias.shop${hero}` },
      { property: "og:url", content: "https://marmorarias.shop/pedras" },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/pedras" }],
  }),
  component: PedrasIndex,
});

function PedrasIndex() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Pedras" }]} />
      <PageHero
        eyebrow="Catálogo Técnico"
        title="Pedras Naturais para Cada Projeto"
        subtitle="Fichas completas de granito, mármore, quartzito e quartzo — cores, acabamentos, aplicações, cuidados e preço por metro quadrado."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Fichas Técnicas"
          title="Escolha a pedra certa para sua obra"
          description="Cada pedra tem propriedades únicas de resistência, porosidade e visual. Compare antes de decidir."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PEDRAS.map((p) => (
            <Link
              key={p.slug}
              to="/pedras/$slug"
              params={{ slug: p.slug }}
              className="group block overflow-hidden bg-card transition-all hover:shadow-elegant"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.imagem}
                  alt={`${p.nome} — ${p.tipo} de ${p.origem}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow text-gold">{p.tipo}</p>
                <h2 className="mt-2 font-serif text-2xl">{p.nome}</h2>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  A partir de {p.precoM2}/m²
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">{p.resumo}</p>
                <span className="mt-5 inline-flex text-xs uppercase tracking-[0.2em] text-foreground group-hover:text-gold">
                  Ver ficha técnica →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 rounded-lg bg-muted/40 p-10 text-center">
          <h2 className="font-serif text-3xl">Não encontrou a pedra que procura?</h2>
          <p className="mt-4 text-muted-foreground">Temos mais de 60 variedades em estoque — nacionais e importadas.</p>
          <Link to="/galeria" className="mt-6 inline-flex bg-foreground px-8 py-3 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">
            Ver Coleção Completa
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
