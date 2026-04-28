import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "./granito";
import kitchen from "@/assets/kitchen-luxury.webp";
import churrasqueira from "@/assets/churrasqueira.webp";
import sieva from "@/assets/granite-siena.webp";

export const Route = createFileRoute("/cozinha")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/cozinha" },
      { title: "Bancada de Cozinha em Granito, Mármore e Quartzo Sob Medida | PedraNobre" },
      { name: "description", content: "Bancada de granito para cozinha, ilha em mármore Calacatta, churrasqueira gourmet, pia esculpida com cooktop. Projeto sob medida em todo o Brasil." },
      { name: "keywords", content: "bancada de granito para cozinha, pia de mármore com cooktop, balcão de cozinha em granito, bancada quartzo branco cozinha, pia esculpida em granito, bancada para ilha de cozinha" },
      { property: "og:title", content: "Bancadas de Cozinha Premium — PedraNobre" },
      { property: "og:image", content: kitchen },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/cozinha" }],
  }),
  component: CozinhaPage,
});

function CozinhaPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Aplicações" title="Bancadas para Cozinha" subtitle="Bancada de granito, ilha de mármore Calacatta, pia esculpida com cooktop e churrasqueira gourmet — projetos sob medida." image={kitchen} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Cozinha & Gourmet" title="O coração da casa em pedra nobre" description="Bancadas para cozinha americana, ilhas, churrasqueiras e áreas gourmet com recortes para cooktop, cuba e torneira." />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ApplyBlock image={kitchen} title="Cozinha americana" desc="Ilhas amplas em mármore Calacatta Gold ou granito Branco Siena, com bordas chanfradas e recorte para cooktop. O ponto de encontro da casa." kw="bancada para ilha de cozinha, bancada gourmet em granito" />
          <ApplyBlock image={sieva} title="Pia esculpida em pedra" desc="Pia esculpida diretamente na chapa, sem emendas — visual monolítico em granito São Gabriel ou mármore. Sofisticação em cada detalhe." kw="pia esculpida em granito, pia de mármore com cooktop" />
          <ApplyBlock image={churrasqueira} title="Churrasqueira gourmet" desc="Granito flameado para área externa: antiderrapante, resistente ao calor e à intempérie. Perfeito para áreas de churrasqueira e pisos externos." kw="bancada gourmet em granito, granito flameado para área externa" />
          <ApplyBlock image={kitchen} title="Cozinha planejada" desc="Bancadas em quartzo branco para cozinhas modernas — superfície uniforme, zero porosidade, fácil manutenção." kw="bancada quartzo branco cozinha, balcão de cozinha em granito" />
        </div>

        <div className="mt-24 bg-onyx p-12 text-center text-cream md:p-16">
          <p className="eyebrow text-gold">Pronto para começar?</p>
          <h3 className="mt-4 font-serif text-4xl">Receba o orçamento da sua bancada de cozinha</h3>
          <Link to="/contato" className="mt-8 inline-flex items-center bg-gold px-10 py-4 text-xs uppercase tracking-[0.25em] text-onyx hover:bg-cream">Solicitar Orçamento</Link>
        </div>
      </section>
    </PageLayout>
  );
}

function ApplyBlock({ image, title, desc, kw }: { image: string; title: string; desc: string; kw: string }) {
  return (
    <div className="group">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={image} alt={`${title} — ${kw}`} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <h3 className="mt-6 font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  );
}
