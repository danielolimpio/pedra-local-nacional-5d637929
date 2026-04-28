import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { FAQ } from "@/components/FAQ";
import bathroom from "@/assets/bathroom-luxury.webp";
import carrara from "@/assets/marble-carrara.webp";
import calacatta from "@/assets/marble-calacatta.webp";

export const Route = createFileRoute("/banheiro")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/banheiro" },
      { title: "Bancada de Mármore para Banheiro com Cuba Esculpida" },
      { name: "description", content: "Bancada de mármore Carrara para banheiro, pia esculpida, soleira de granito e revestimento de box em pedra natural. Projetos sob medida." },
      { name: "keywords", content: "bancada de mármore para banheiro, pia esculpida em pedra, bancada com cuba embutida, pedra para box de banheiro, soleira de granito para porta, revestimento de mármore banheiro" },
      { property: "og:title", content: "Bancada de Mármore para Banheiro — Cuba Esculpida" },
      { property: "og:description", content: "Mármore Carrara, Calacatta e granito para banheiros e lavabos sob medida." },
      { property: "og:image", content: `https://marmorarias.shop${bathroom}` },
      { name: "twitter:image", content: `https://marmorarias.shop${bathroom}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/banheiro" }],
  }),
  component: BanheiroPage,
});

function BanheiroPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Aplicações" }, { label: "Banheiro" }]} />
      <PageHero eyebrow="Aplicações" title="Banheiro & Lavabo" subtitle="Bancada de mármore Carrara, cuba esculpida, soleira de granito e revestimento de box em pedra natural." image={bathroom} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Sofisticação no Banheiro" title="Mármore que transforma o ambiente" description="Bancadas com cuba embutida ou esculpida, revestimento de box, soleiras e peitoris em granito ou mármore." />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <BathBlock image={carrara} title="Bancada com cuba embutida" desc="Mármore Carrara com cuba esculpida — visual contínuo, sem emendas." />
          <BathBlock image={bathroom} title="Mármore preto para lavabo" desc="Mármore preto absoluto com torneira dourada. Projeto de alto luxo." />
          <BathBlock image={calacatta} title="Revestimento de box" desc="Mármore Calacatta como painel de fundo do box — efeito visual incomparável." />
        </div>

        <div className="mt-24 bg-secondary p-12">
          <h2 className="font-serif text-3xl">Soleiras e peitoris em granito</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Trabalhamos também com soleira de granito para porta (2 metros), peitoris de janela
            em granito, escada em mármore branco e revestimento de pedra para fachada.
            Solicite o orçamento incluindo medidas e acabamento desejado.
          </p>
          <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">Pedir Orçamento</Link>
        </div>
      </section>

      <FAQ
        title="Perguntas sobre bancada de banheiro"
        items={[
          { q: "Qual mármore é mais indicado para bancada de banheiro?", a: "O mármore Carrara (R$ 890/m²) é o mais usado pela elegância e custo equilibrado. Para projetos de alto luxo, o Calacatta Gold (R$ 1.450/m²) entrega veios dourados marcantes. Mármore preto absoluto é ideal para lavabos contemporâneos." },
          { q: "Mármore mancha com produtos de higiene?", a: "Mármores são porosos. Aplicamos resina hidrofugante premium que protege contra perfumes, esmaltes, hidratantes e produtos ácidos. Limpeza imediata em caso de respingo é recomendada." },
          { q: "Quanto custa uma cuba esculpida em mármore?", a: "A cuba esculpida diretamente na chapa custa entre R$ 1.200 e R$ 2.800 dependendo do tamanho e do mármore escolhido. Inclui o desenho, escultura e acabamento polido interno." },
          { q: "Vocês fazem soleira e peitoril de granito?", a: "Sim. Soleira de granito para porta padrão (até 1 metro) sai a partir de R$ 180. Peitoris de janela e revestimentos de fachada são orçados por m² conforme acabamento." },
          { q: "Qual a garantia da bancada de banheiro?", a: "5 anos contra defeitos de fabricação e instalação. A selagem hidrofugante é garantida por 24 meses — após esse período recomendamos reaplicação para manter a proteção contra manchas." },
          { q: "Posso usar mármore branco no box do banheiro?", a: "Sim, com revestimento de chapa polida e selagem adequada o mármore Carrara ou Calacatta funciona muito bem em box, criando um painel de fundo de altíssimo padrão." },
        ]}
      />
    </PageLayout>
  );
}

function BathBlock({ image, title, desc }: { image: string; title: string; desc: string }) {
  return (
    <div>
      <div className="aspect-square overflow-hidden bg-muted">
        <img src={image} alt={title} loading="lazy" width={800} height={800} className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-5 font-serif text-xl">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
