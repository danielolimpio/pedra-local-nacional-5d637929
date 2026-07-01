import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { StoneCard } from "@/components/StoneCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import quartz from "@/assets/quartz-white.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import kitchen from "@/assets/kitchen-luxury.webp";

export const Route = createFileRoute("/quartzo")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/quartzo" },
      { title: "Quartzo Branco para Bancada: Silestone, Nanoglass e Dekton" },
      { name: "description", content: "Quartzo branco para bancada de cozinha: Silestone, Nanoglass, Dekton e Corian. Pedra sintética premium, zero porosidade e alta resistência." },
      { name: "keywords", content: "quartzo branco para bancada, silestone cozinha, nanoglass branco, dekton bancada cozinha, corian, quartzo calacata, pedra sintética para pia" },
      { property: "og:title", content: "Quartzo Branco para Bancada — Silestone e Dekton" },
      { property: "og:description", content: "Quartzo, Silestone, Nanoglass e Dekton para bancadas premium de cozinha." },
      { property: "og:image", content: `https://marmorarias.shop${quartz}` },
      { name: "twitter:image", content: `https://marmorarias.shop${quartz}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/quartzo" }],
  }),
  component: QuartzoPage,
});

function QuartzoPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Materiais" }, { label: "Quartzo" }]} />
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
            <h2 className="font-serif text-3xl">Quartzo vs Granito: qual a melhor durabilidade?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
...
            </p>
            <h3 className="mt-8 font-serif text-2xl">Vantagens do quartzo na cozinha</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• Não mancha com vinho, café, azeite ou limão</li>
              <li>• Visual uniforme — sem variação entre chapas</li>
              <li>• Perfeito para bancadas grandes sem emendas visíveis</li>
              <li>• Manutenção zero, basta pano úmido</li>
            </ul>
          </article>
          <aside className="bg-secondary p-10">
            <p className="eyebrow">Marcas premium</p>
            <h3 className="mt-4 font-serif text-3xl">Silestone, Nanoglass e Dekton</h3>
            <p className="mt-4 text-muted-foreground">Trabalhamos com as melhores marcas de quartzo do mercado mundial. Solicite a tabela com cores e acabamentos disponíveis.</p>
            <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">Pedir Orçamento de Quartzo</Link>
          </aside>
        </div>

        {/* Comparativo */}
        <div className="mt-24 border border-border">
          <table className="w-full text-sm">
            <thead className="bg-onyx text-cream">
              <tr>
                <th className="px-6 py-4 text-left font-normal uppercase tracking-[0.18em]">Característica</th>
                <th className="px-6 py-4 text-center font-normal uppercase tracking-[0.18em]">Quartzo</th>
                <th className="px-6 py-4 text-center font-normal uppercase tracking-[0.18em]">Granito</th>
                <th className="px-6 py-4 text-center font-normal uppercase tracking-[0.18em]">Mármore</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Porosidade", "Zero", "Baixa", "Alta"],
                ["Resistência manchas", "Excelente", "Boa", "Regular"],
                ["Resistência calor", "Boa", "Excelente", "Regular"],
                ["Manutenção", "Mínima", "Baixa", "Média"],
                ["Visual uniforme", "Sim", "Variável", "Variável"],
              ].map((r,i)=>(
                <tr key={r[0]} className={i%2?"bg-secondary/40":""}>
                  <td className="px-6 py-4 font-serif">{r[0]}</td>
                  <td className="px-6 py-4 text-center text-gold">{r[1]}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{r[2]}</td>
                  <td className="px-6 py-4 text-center text-muted-foreground">{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageLayout>
  );
}
