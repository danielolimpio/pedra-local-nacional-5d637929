import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { servicos } from "@/data/servicos";
import hero from "@/assets/hero-granite.webp";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de Marmoraria: Bancadas, Pias, Soleiras e Mais" },
      { name: "description", content: "20 serviços de marmoraria: bancada de cozinha, bancada de banheiro, pia esculpida, ilha, churrasqueira gourmet, soleira, peitoril, escada de mármore, lavatório, mesa, lareira e mais." },
      { name: "keywords", content: "serviços marmoraria, bancada sob medida, bancada cozinha, bancada banheiro, pia esculpida, ilha cozinha, churrasqueira gourmet, soleira, peitoril, escada marmore, lavatório marmore, mesa marmore, tampo mesa, fachada pedra, piso marmore, lareira, instalação marmore, polimento granito" },
      { property: "og:title", content: "Serviços — Marmorarias.shop" },
      { property: "og:description", content: "Bancadas, pias, soleiras, escadas, lareiras e mais — sob medida em granito, mármore e quartzo." },
      { property: "og:url", content: "https://marmorarias.shop/servicos" },
      { property: "og:image", content: `https://marmorarias.shop${hero}` },
      { name: "twitter:image", content: `https://marmorarias.shop${hero}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/servicos" }],
  }),
  component: ServicosIndex,
});

function ServicosIndex() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Serviços" }]} />
      <PageHero
        eyebrow="Marmoraria Completa"
        title="Serviços sob medida"
        subtitle="Bancadas, pias, soleiras, escadas, lareiras, ilhas, churrasqueiras — 20 categorias em granito, mármore, quartzo e quartzito."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="O que fazemos"
          title="Catálogo completo de serviços"
          description="Da bancada de cozinha à lareira em mármore Calacatta — tudo com corte CNC, instalação inclusa e garantia de 5 anos."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group block border border-border bg-card p-6 transition-colors hover:border-gold"
            >
              <h3 className="font-serif text-2xl text-foreground group-hover:text-gold">{s.nome}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.resumo}</p>
              <p className="mt-4 text-sm font-medium text-gold">{s.precoBase}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
