import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { StoneCard } from "@/components/StoneCard";
import { PageHero } from "./granito";
import quartz from "@/assets/quartz-white.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import kitchen from "@/assets/kitchen-luxury.webp";

export const Route = createFileRoute("/quartzo")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/quartzo" },
      { title: "Quartzo Branco para Bancada: Silestone, Nanoglass e Dekton | PedraNobre" },
      { name: "description", content: "Quartzo branco para bancada de cozinha, Silestone, Nanoglass, Dekton e Corian. Pedra sintética premium com alta resistência e zero porosidade." },
      { name: "keywords", content: "quartzo branco para bancada, silestone cozinha, nanoglass branco, dekton bancada cozinha, corian, quartzo calacata, pedra sintética para pia" },
      { property: "og:title", content: "Quartzo e Pedras Sintéticas — PedraNobre" },
      { property: "og:image", content: quartz },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/quartzo" }],
  }),
  component: QuartzoPage,
});

function QuartzoPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Materiais — Quartzo" title="Quartzo para Bancada" subtitle="Silestone, Nanoglass, Dekton e Corian — pedras de engenharia com performance superior." image={quartz} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Coleção de Quartzo" title="Engenharia, beleza e durabilidade" description="O quartzo é a pedra sintética mais procurada para cozinhas modernas: zero porosidade, alta resistência a manchas e visual contemporâneo." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StoneCard image={quartz} name="Quartzo Branco Liso" category="Quartzo" price="R$ 1.180" alt="Quartzo branco para bancada" />
          <StoneCard image={calacatta} name="Quartzo Calacata" category="Quartzo" price="R$ 1.490" alt="Quartzo Calacata com veios dourados" />
          <StoneCard image={kitchen} name="Quartzo Cinza" category="Quartzo" price="R$ 1.120" alt="Quartzo cinza para cozinha moderna" />
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <article>
            <h3 className="font-serif text-3xl">Quartzo vs Granito: qual a melhor durabilidade?</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              O <strong>quartzo</strong> é uma pedra de engenharia (93% quartzo natural + resinas) com
              <strong> zero porosidade</strong>, o que significa que não absorve líquidos e
              <strong> não mancha</strong>. O granito é mais resistente ao calor direto, mas o quartzo
              vence em uniformidade visual e baixa manutenção. Para cozinhas modernas com cores
              uniformes, o quartzo é imbatível.
            </p>
            <h4 className="mt-8 font-serif text-2xl">Vantagens do quartzo</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Não mancha com vinho, café, azeite ou limão</li>
              <li>• Visual uniforme — sem variação entre chapas</li>
              <li>• Perfeito para bancadas grandes sem emendas visíveis</li>
              <li>• Manutenção zero, basta pano úmido</li>
            </ul>
          </article>
          <aside className="bg-secondary p-10">
            <p className="eyebrow">Marcas premium</p>
            <h4 className="mt-4 font-serif text-3xl">Silestone, Nanoglass e Dekton</h4>
            <p className="mt-4 text-muted-foreground">Trabalhamos com as melhores marcas de quartzo do mercado mundial. Solicite a tabela com cores e acabamentos disponíveis.</p>
            <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">Pedir Orçamento de Quartzo</Link>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}
