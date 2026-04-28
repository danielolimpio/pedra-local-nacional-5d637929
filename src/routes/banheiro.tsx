import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "./granito";
import bathroom from "@/assets/bathroom-luxury.jpg";
import carrara from "@/assets/marble-carrara.jpg";
import calacatta from "@/assets/marble-calacatta.jpg";

export const Route = createFileRoute("/banheiro")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/banheiro" },
      { title: "Bancada de Mármore para Banheiro com Cuba Esculpida | PedraNobre" },
      { name: "description", content: "Bancada de mármore para banheiro, pia esculpida em pedra, soleira de granito, revestimento de mármore para box. Projetos sob medida." },
      { name: "keywords", content: "bancada de mármore para banheiro, pia esculpida em pedra, bancada com cuba embutida, pedra para box de banheiro, soleira de granito para porta, revestimento de mármore banheiro" },
      { property: "og:title", content: "Bancadas de Banheiro em Mármore" },
      { property: "og:image", content: bathroom },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/banheiro" }],
  }),
  component: BanheiroPage,
});

function BanheiroPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Aplicações" title="Banheiro & Lavabo" subtitle="Bancada de mármore Carrara, cuba esculpida, soleira de granito e revestimento de box em pedra natural." image={bathroom} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Sofisticação no Banheiro" title="Mármore que transforma o ambiente" description="Bancadas com cuba embutida ou esculpida, revestimento de box, soleiras e peitoris em granito ou mármore." />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <BathBlock image={carrara} title="Bancada com cuba embutida" desc="Mármore Carrara com cuba esculpida — visual contínuo, sem emendas." />
          <BathBlock image={bathroom} title="Mármore preto para lavabo" desc="Mármore preto absoluto com torneira dourada. Projeto de alto luxo." />
          <BathBlock image={calacatta} title="Revestimento de box" desc="Mármore Calacatta como painel de fundo do box — efeito visual incomparável." />
        </div>

        <div className="mt-24 bg-secondary p-12">
          <h3 className="font-serif text-3xl">Soleiras e peitoris em granito</h3>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Trabalhamos também com soleira de granito para porta (2 metros), peitoris de janela
            em granito, escada em mármore branco e revestimento de pedra para fachada.
            Solicite o orçamento incluindo medidas e acabamento desejado.
          </p>
          <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">Pedir Orçamento</Link>
        </div>
      </section>
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
