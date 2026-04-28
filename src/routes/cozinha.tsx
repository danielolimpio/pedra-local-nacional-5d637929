import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "./granito";
import { FAQ } from "@/components/FAQ";
import kitchen from "@/assets/kitchen-luxury.webp";
import churrasqueira from "@/assets/churrasqueira.webp";
import sieva from "@/assets/granite-siena.webp";

export const Route = createFileRoute("/cozinha")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/cozinha" },
      { title: "Bancada de Cozinha em Granito, Mármore e Quartzo Sob Medida | Marmorarias.shop" },
      { name: "description", content: "Bancada de granito para cozinha, ilha em mármore Calacatta, churrasqueira gourmet, pia esculpida com cooktop. Projeto sob medida em todo o Brasil." },
      { name: "keywords", content: "bancada de granito para cozinha, pia de mármore com cooktop, balcão de cozinha em granito, bancada quartzo branco cozinha, pia esculpida em granito, bancada para ilha de cozinha" },
      { property: "og:title", content: "Bancadas de Cozinha Premium — Marmorarias.shop" },
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

      <FAQ
        title="Perguntas sobre bancada de cozinha"
        items={[
          { q: "Qual o melhor material para bancada de cozinha?", a: "Para uso intenso, granito São Gabriel e quartzo branco são os mais indicados — resistem a calor, manchas e impacto. Mármore Calacatta entrega visual premium, mas exige selagem hidrofugante e cuidados na limpeza." },
          { q: "Quanto custa uma bancada de cozinha em granito por m²?", a: "O granito São Gabriel custa em média R$ 480/m² instalado, o Branco Siena R$ 520/m² e o Preto Absoluto R$ 590/m². Recortes para cooktop e cuba são orçados à parte. Veja a tabela completa em nossa página de Preços." },
          { q: "Quanto tempo demora a instalação de uma bancada nova?", a: "Após a aprovação do orçamento, o gabarito é feito em até 3 dias úteis e a instalação acontece em 7 a 12 dias úteis, dependendo do material e da localidade." },
          { q: "A pia esculpida em pedra é mais cara que a pia de inox?", a: "Sim, a pia esculpida diretamente na chapa custa em média 40% a mais que uma cuba de inox embutida, mas entrega acabamento monolítico sem emendas e valoriza o imóvel." },
          { q: "Existe garantia para bancada e pia?", a: "Oferecemos 5 anos de garantia para defeitos de fabricação e instalação (trincas estruturais, falhas de selagem, problemas de fixação). Riscos por mau uso e manchas por falta de manutenção não são cobertos." },
          { q: "Como fazer a manutenção da bancada de granito?", a: "Limpeza diária com pano úmido e sabão neutro. Evite produtos ácidos (limão, vinagre, desinfetante forte). A cada 2 anos recomendamos reaplicar a resina hidrofugante para preservar o brilho." },
        ]}
      />
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
