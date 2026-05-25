import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { StoneCard } from "@/components/StoneCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import carrara from "@/assets/marble-carrara.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import bathroom from "@/assets/bathroom-luxury.webp";

const marmoreFaq = [
  { q: "Mármore branco mancha com vinho?", a: "É poroso, mas a aplicação de resina hidrofugante reduz drasticamente a absorção. Limpeza imediata evita manchas." },
  { q: "Mármore Carrara é importado?", a: "Sim, vem da região de Carrara, na Itália. Trabalhamos com chapas selecionadas direto de cantaria." },
  { q: "Diferença entre Carrara e Calacatta?", a: "Calacatta tem fundo mais branco e veios dourados marcantes. Carrara tem veios cinza mais sutis." },
  { q: "Pode usar mármore em cozinha?", a: "Sim, com cuidados de manutenção e selagem profissional. Para uso intenso, granito ou quartzo são mais práticos." },
];

export const Route = createFileRoute("/marmore")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/marmore" },
      { title: "Mármore Carrara, Calacatta Gold e Travertino: Preços por m²" },
      { name: "description", content: "Mármore branco Carrara, Calacatta Gold, Travertino Romano e Onix. Bancadas, pias esculpidas e revestimentos sob medida com instalação." },
      { name: "keywords", content: "mármore para bancada, mármore branco carrara, mármore calacatta gold, travertino romano, mármore preto, pia de mármore cozinha, preço mármore m2" },
      { property: "og:title", content: "Mármore Premium — Marmorarias.shop" },
      { property: "og:description", content: "Mármore Carrara, Calacatta Gold e Travertino para projetos sofisticados." },
      { property: "og:image", content: `https://marmorarias.shop${calacatta}` },
      { name: "twitter:image", content: `https://marmorarias.shop${calacatta}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/marmore" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: marmoreFaq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: MarmorePage,
});


function MarmorePage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Materiais" }, { label: "Mármore" }]} />
      <PageHero eyebrow="Materiais — Mármore" title="Mármore para Bancada" subtitle="Carrara, Calacatta Gold, Travertino Romano e Onix translúcido — sofisticação eterna." image={calacatta} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Coleção de Mármores" title="A elegância das pedras importadas" description="Mármores brancos, beges e exóticos selecionados para bancadas de cozinha, banheiros e revestimentos de fachada." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StoneCard image={carrara} name="Mármore Branco Carrara" category="Mármore" price="R$ 890" alt="Mármore branco Carrara para bancada" />
          <StoneCard image={calacatta} name="Mármore Calacatta Gold" category="Mármore" price="R$ 1.450" alt="Mármore Calacatta Gold com veios dourados" />
          <StoneCard image={bathroom} name="Mármore Preto" category="Mármore" price="R$ 980" alt="Mármore preto absoluto para banheiro" />
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <article>
            <h2 className="font-serif text-3xl">Mármore branco é poroso? Como cuidar</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
...
            </p>
            <h3 className="mt-8 font-serif text-2xl">Para qual ambiente cada mármore é indicado?</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• <strong>Carrara</strong> — banheiros, lavabos e ilhas decorativas</li>
              <li>• <strong>Calacatta Gold</strong> — bancadas premium, projetos de alto padrão</li>
              <li>• <strong>Travertino Romano</strong> — fachadas, pisos e revestimentos rústicos</li>
              <li>• <strong>Onix</strong> — bares e painéis retroiluminados translúcidos</li>
            </ul>
          </article>
          <aside className="bg-secondary p-10">
            <p className="eyebrow">Pia esculpida em mármore</p>
            <h3 className="mt-4 font-serif text-3xl">Sob medida para seu projeto</h3>
            <p className="mt-4 text-muted-foreground">Esculpimos pias e cubas direto na chapa de mármore, garantindo acabamento contínuo e visual de altíssimo padrão.</p>
            <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">Pedir Orçamento de Mármore</Link>
          </aside>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <SectionHeader eyebrow="Dúvidas Frequentes" title="Perguntas sobre mármore" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {marmoreFaq.map(f => (
              <div key={f.q}>
                <h3 className="font-serif text-lg">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
