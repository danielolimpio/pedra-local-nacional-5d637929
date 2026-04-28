import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { StoneCard } from "@/components/StoneCard";
import { PageHero } from "./granito";
import carrara from "@/assets/marble-carrara.jpg";
import calacatta from "@/assets/marble-calacatta.jpg";
import bathroom from "@/assets/bathroom-luxury.jpg";

export const Route = createFileRoute("/marmore")({
  head: () => ({
    meta: [
      { title: "Mármore para Bancada: Carrara, Calacatta Gold e Travertino | PedraNobre" },
      { name: "description", content: "Mármore branco Carrara, Calacatta Gold, Travertino Romano e Onix. Bancadas, pias esculpidas e revestimentos sob medida com instalação." },
      { name: "keywords", content: "mármore para bancada, mármore branco carrara, mármore calacatta gold, travertino romano, mármore preto, pia de mármore cozinha, preço mármore m2" },
      { property: "og:title", content: "Mármore Premium — PedraNobre" },
      { property: "og:description", content: "Mármore Carrara, Calacatta Gold e Travertino para projetos sofisticados." },
      { property: "og:image", content: calacatta },
    ],
  }),
  component: MarmorePage,
});

function MarmorePage() {
  return (
    <PageLayout>
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
            <h3 className="font-serif text-3xl">Mármore branco é poroso? Como cuidar</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              O <strong>mármore branco Carrara</strong> e o <strong>Calacatta Gold</strong> são pedras
              naturais sofisticadas, porém porosas. Para uso em bancada de cozinha aplicamos resina
              hidrofugante de alta performance que protege contra manchas de vinho, café e azeite.
              Limpeza diária com pano úmido e sabão neutro mantém o brilho por décadas.
            </p>
            <h4 className="mt-8 font-serif text-2xl">Para qual ambiente cada mármore é indicado?</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• <strong>Carrara</strong> — banheiros, lavabos e ilhas decorativas</li>
              <li>• <strong>Calacatta Gold</strong> — bancadas premium, projetos de alto padrão</li>
              <li>• <strong>Travertino Romano</strong> — fachadas, pisos e revestimentos rústicos</li>
              <li>• <strong>Onix</strong> — bares e painéis retroiluminados translúcidos</li>
            </ul>
          </article>
          <aside className="bg-secondary p-10">
            <p className="eyebrow">Pia esculpida em mármore</p>
            <h4 className="mt-4 font-serif text-3xl">Sob medida para seu projeto</h4>
            <p className="mt-4 text-muted-foreground">Esculpimos pias e cubas direto na chapa de mármore, garantindo acabamento contínuo e visual de altíssimo padrão.</p>
            <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">Pedir Orçamento de Mármore</Link>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
