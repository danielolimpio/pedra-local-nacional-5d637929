import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHero } from "./granito";
import { FAQ } from "@/components/FAQ";
import hero from "@/assets/hero-granite.webp";

export const Route = createFileRoute("/precos")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/precos" },
      { title: "Tabela de Preços de Granito e Mármore por m² — Atualizada 2026 | Marmorarias.shop" },
      { name: "description", content: "Quanto custa bancada de granito São Gabriel? Veja preços por metro quadrado de granito, mármore e quartzo. Tabela atualizada 2026 com instalação inclusa." },
      { name: "keywords", content: "preço granito m2, preço granito são gabriel m2, valor do metro de mármore branco, quanto custa bancada de quartzo, tabela de preço granito 2026, orçamento pia de granito sob medida" },
      { property: "og:title", content: "Tabela de Preços 2026 — Marmorarias.shop" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/precos" }],
  }),
  component: PrecosPage,
});

const tabela = [
  { mat: "Granito São Gabriel", acab: "Polido", preco: "R$ 480 / m²" },
  { mat: "Granito Branco Siena", acab: "Polido", preco: "R$ 520 / m²" },
  { mat: "Granito Preto Absoluto", acab: "Polido", preco: "R$ 590 / m²" },
  { mat: "Granito Cinza Andorinha", acab: "Polido", preco: "R$ 420 / m²" },
  { mat: "Granito Via Láctea", acab: "Polido", preco: "R$ 650 / m²" },
  { mat: "Mármore Branco Carrara", acab: "Polido", preco: "R$ 890 / m²" },
  { mat: "Mármore Calacatta Gold", acab: "Polido", preco: "R$ 1.450 / m²" },
  { mat: "Mármore Travertino Romano", acab: "Bujardado", preco: "R$ 720 / m²" },
  { mat: "Quartzo Branco", acab: "Polido", preco: "R$ 1.180 / m²" },
  { mat: "Quartzo Calacata", acab: "Polido", preco: "R$ 1.490 / m²" },
  { mat: "Quartzito Taj Mahal", acab: "Polido", preco: "R$ 1.690 / m²" },
];

function PrecosPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Tabela 2026" title="Preço por Metro Quadrado" subtitle="Valores atualizados de granito, mármore e quartzo — instalação e recortes podem ser orçados à parte." image={hero} />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeader eyebrow="Tabela de Referência" title="Quanto custa bancada de granito por m²" description="Os valores abaixo são referência para projetos a partir de 3m². Inclui chapa polida; recortes para cooktop, cuba e instalação são orçados conforme o projeto." />

        <div className="mt-12 overflow-hidden border border-border">
          <table className="w-full text-sm">
            <thead className="bg-onyx text-cream">
              <tr>
                <th className="px-6 py-4 text-left font-normal uppercase tracking-[0.18em]">Material</th>
                <th className="px-6 py-4 text-left font-normal uppercase tracking-[0.18em]">Acabamento</th>
                <th className="px-6 py-4 text-right font-normal uppercase tracking-[0.18em]">Preço</th>
              </tr>
            </thead>
            <tbody>
              {tabela.map((row, i) => (
                <tr key={row.mat} className={i % 2 ? "bg-secondary/40" : "bg-background"}>
                  <td className="px-6 py-4 font-serif text-lg">{row.mat}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.acab}</td>
                  <td className="px-6 py-4 text-right font-medium text-gold">{row.preco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">* Preços referência atualizados em 2026. Variam conforme estoque e localização da entrega. Solicite orçamento personalizado para o valor final do seu projeto.</p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card title="Recortes" desc="Cooktop, cuba dupla, torneira — orçados por unidade conforme complexidade." />
          <Card title="Instalação" desc="Equipe própria de instaladores especializados. Inclui transporte e nivelamento." />
          <Card title="Entrega Brasil" desc="Atendemos todo o território nacional. Frete calculado por região." />
        </div>

        <div className="mt-16 text-center">
          <Link to="/contato" className="inline-flex items-center bg-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">Solicitar Orçamento Sob Medida</Link>
        </div>
      </section>

      <FAQ
        title="Perguntas sobre preços e orçamento"
        items={[
          { q: "Como é calculado o preço por m² do granito?", a: "O valor por metro quadrado considera o tipo de pedra, a espessura (2cm ou 3cm) e o acabamento (polido, escovado, flameado). A medida final é calculada pela área da bancada arredondada para cima conforme o aproveitamento da chapa." },
          { q: "O preço da tabela inclui instalação?", a: "Os valores da tabela são para a chapa polida. Instalação, recortes para cooktop, cuba, torneira e transporte são orçados à parte conforme o projeto e a localidade." },
          { q: "Qual o granito mais barato para cozinha?", a: "Granito Cinza Andorinha a partir de R$ 420/m² e Granito São Gabriel a R$ 480/m² são os mais econômicos com excelente resistência. Ambos têm padrão visual aprovado para cozinhas residenciais." },
          { q: "Quanto custa um mármore Calacatta Gold por m²?", a: "O mármore Calacatta Gold importado da Itália custa R$ 1.450/m² polido. É o mármore mais nobre da categoria, indicado para projetos de alto padrão." },
          { q: "Há garantia sobre o preço orçado?", a: "Os orçamentos têm validade de 15 dias. Após confirmação do pedido e medição definitiva, o valor é congelado e não sofre reajuste durante a execução." },
          { q: "Como manter a bancada limpa para preservar a garantia?", a: "Limpe diariamente com pano úmido e sabão neutro. Não use produtos abrasivos, ácidos (limão, vinagre) ou álcool puro. Reaplique resina hidrofugante a cada 24 meses." },
          { q: "Vocês parcelam o pagamento?", a: "Sim. Trabalhamos com parcelamento em até 6x sem juros no cartão e até 12x com juros. Também aceitamos PIX com 5% de desconto à vista." },
        ]}
      />
    </PageLayout>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-border bg-card p-8">
      <p className="eyebrow">{title}</p>
      <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
