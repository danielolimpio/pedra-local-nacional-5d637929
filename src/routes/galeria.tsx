import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "./granito";
import kitchen from "@/assets/kitchen-luxury.webp";
import bathroom from "@/assets/bathroom-luxury.webp";
import churrasqueira from "@/assets/churrasqueira.webp";
import carrara from "@/assets/marble-carrara.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import sao from "@/assets/granite-sao-gabriel.webp";
import siena from "@/assets/granite-siena.webp";
import quartz from "@/assets/quartz-white.webp";
import hero from "@/assets/hero-granite.webp";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/galeria" },
      { title: "Galeria de Projetos: Cozinha, Banheiro e Churrasqueira em Pedra | PedraNobre" },
      { name: "description", content: "Galeria de projetos em granito, mármore e quartzo. Inspire-se em bancadas de cozinha, banheiros, churrasqueiras e revestimentos executados pela PedraNobre." },
      { property: "og:title", content: "Galeria — PedraNobre" },
      { property: "og:image", content: kitchen },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/galeria" }],
  }),
  component: GaleriaPage,
});

const projetos = [
  { src: kitchen, alt: "Cozinha de luxo com bancada de mármore Calacatta", tag: "Cozinha" },
  { src: bathroom, alt: "Banheiro com bancada de mármore preto absoluto", tag: "Banheiro" },
  { src: churrasqueira, alt: "Área gourmet com churrasqueira em granito", tag: "Gourmet" },
  { src: calacatta, alt: "Detalhe de mármore Calacatta Gold", tag: "Mármore" },
  { src: hero, alt: "Bancada em granito preto premium", tag: "Granito" },
  { src: carrara, alt: "Mármore Carrara para revestimento", tag: "Mármore" },
  { src: sao, alt: "Granito São Gabriel polido", tag: "Granito" },
  { src: siena, alt: "Granito Branco Siena para cozinha", tag: "Granito" },
  { src: quartz, alt: "Quartzo branco para bancada moderna", tag: "Quartzo" },
];

function GaleriaPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Portfólio" title="Galeria de Projetos" subtitle="Inspirações em granito, mármore e quartzo — antes e depois de cozinhas, banheiros e áreas gourmet." image={calacatta} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Projetos Executados" title="Inspire-se com pedras nobres" description="Cada projeto é único. Veja exemplos de bancadas, pias esculpidas e revestimentos entregues em todo o Brasil." />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p, i) => (
            <figure key={i} className="group relative overflow-hidden bg-muted">
              <div className="aspect-square">
                <img src={p.src} alt={p.alt} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-onyx/90 to-transparent p-4 text-cream opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm">{p.alt}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold">{p.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
