import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { cidades } from "@/data/cidades";
import hero from "@/assets/hero-granite.webp";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/marmoraria")({
  head: () => ({
    meta: [
      { title: "Marmoraria perto de mim: encontre por cidade no Brasil" },
      { name: "description", content: "Marmoraria em São Paulo, Rio de Janeiro, BH, Curitiba, Porto Alegre, Brasília, Salvador, Recife, Fortaleza e mais 15 capitais. Encontre marmoraria perto de você." },
      { name: "keywords", content: "marmoraria perto de mim, marmoraria no Brasil, marmoraria por cidade, marmoraria capital, melhor marmoraria do Brasil, marmoraria nacional" },
      { property: "og:title", content: "Marmoraria perto de mim — Marmorarias.shop" },
      { property: "og:description", content: "Marmoraria em todas as capitais brasileiras. Granito, mármore e quartzo com entrega e instalação." },
      { property: "og:url", content: "https://marmorarias.shop/marmoraria" },
      { property: "og:image", content: `https://marmorarias.shop${hero}` },
      { name: "twitter:image", content: `https://marmorarias.shop${hero}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/marmoraria" }],
  }),
  component: MarmoriaIndex,
});

function MarmoriaIndex() {
  const porRegiao = cidades.reduce<Record<string, typeof cidades>>((acc, c) => {
    (acc[c.regiao] ||= []).push(c);
    return acc;
  }, {});

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Marmoraria por cidade" }]} />
      <PageHero
        eyebrow="Cobertura Nacional"
        title="Marmoraria perto de você"
        subtitle="Selecione sua cidade e veja preços, prazos e bairros atendidos pela marmoraria mais completa do Brasil."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Atendimento por Região"
          title="Encontre marmoraria na sua cidade"
          description="Bancadas de granito, mármore e quartzo entregues e instaladas em todo o Brasil. Confira a cobertura por região."
        />

        {Object.entries(porRegiao).map(([regiao, lista]) => (
          <div key={regiao} className="mt-16">
            <h2 className="font-serif text-3xl text-foreground">{regiao}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lista.map((c) => (
                <Link
                  key={c.slug}
                  to="/marmoraria/$cidade"
                  params={{ cidade: c.slug }}
                  className="group flex items-start gap-4 border border-border bg-card p-6 transition-colors hover:border-gold"
                >
                  <MapPin className="mt-1 h-5 w-5 text-gold" strokeWidth={1.4} />
                  <div>
                    <p className="font-serif text-xl text-foreground group-hover:text-gold">
                      Marmoraria em {c.nome}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {c.uf} • {c.bairros.slice(0, 3).join(" • ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageLayout>
  );
}
