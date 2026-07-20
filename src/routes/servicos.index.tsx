import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { SERVICOS } from "@/data/servicos";
import hero from "@/assets/kitchen-luxury.webp";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços de Marmoraria: Bancadas, Cubas e Instalação" },
      { name: "description", content: "Serviços completos de marmoraria: bancada de cozinha, bancada de banheiro, churrasqueira gourmet e pia esculpida em granito, mármore e quartzo com instalação em todo o Brasil." },
      { name: "keywords", content: "serviços de marmoraria, bancada sob medida, cuba esculpida, instalação de granito, marmoraria brasil" },
      { property: "og:title", content: "Serviços de Marmoraria — Marmorarias.shop" },
      { property: "og:description", content: "Bancadas, cubas esculpidas e churrasqueiras em pedra natural sob medida." },
      { property: "og:image", content: `https://marmorarias.shop${hero}` },
      { property: "og:url", content: "https://marmorarias.shop/servicos" },
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
        eyebrow="Serviços"
        title="Marmoraria Completa Sob Medida"
        subtitle="Do gabarito à instalação. Bancadas, cubas esculpidas, churrasqueiras e revestimentos em pedra natural com garantia."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Nossos Serviços"
          title="Execução artesanal com tecnologia CNC"
          description="Combinamos corte automatizado de alta precisão com acabamento manual — o melhor dos dois mundos para pedras naturais."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {SERVICOS.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group block overflow-hidden bg-card transition-all hover:shadow-elegant"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={s.imagem}
                  alt={s.nome}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h2 className="font-serif text-2xl group-hover:text-gold">{s.nome}</h2>
                <p className="mt-3 text-muted-foreground">{s.resumo}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">{s.precoInicial}</p>
                <span className="mt-4 inline-flex text-xs uppercase tracking-[0.2em] text-foreground group-hover:text-gold">
                  Ver detalhes →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
