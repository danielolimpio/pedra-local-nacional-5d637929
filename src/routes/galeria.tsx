import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { FAQ } from "@/components/FAQ";
import { useState, useMemo } from "react";
import { colecao, type Origem, type Tipo } from "@/data/colecao";
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
      { title: "Galeria de Projetos: Bancadas em Granito, Mármore e Quartzo" },
      { name: "description", content: "Galeria de projetos de marmoraria: bancadas de cozinha, banheiros, churrasqueiras e revestimentos em granito, mármore Carrara e quartzo." },
      { name: "keywords", content: "projetos de marmoraria, fotos de bancada de granito, galeria de mármore Calacatta, bancada de quartzo branco fotos, churrasqueira em granito" },
      { property: "og:title", content: "Galeria de Projetos — Marmorarias.shop" },
      { property: "og:description", content: "Inspire-se com bancadas, pias esculpidas e revestimentos em pedras nobres." },
      { property: "og:image", content: `https://marmorarias.shop${kitchen}` },
      { name: "twitter:image", content: `https://marmorarias.shop${kitchen}` },
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
      <Breadcrumbs items={[{ label: "Galeria" }]} />
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

      <ColecaoCompleta />

      <FAQ
        title="Perguntas sobre nossos projetos"
        items={[
          { q: "Posso visitar o showroom para ver as pedras pessoalmente?", a: "Sim, recomendamos a visita para escolher a chapa exata. Atendemos com hora marcada de segunda a sábado. Agende pelo WhatsApp (12) 98251-9116." },
          { q: "Vocês entregam projetos em outras cidades?", a: "Sim, atendemos todo o Brasil com logística própria e parceira. Já executamos projetos em São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Brasília e Salvador." },
          { q: "Quanto tempo leva do orçamento até a entrega?", a: "Em média 15 a 25 dias úteis: 3 dias para o gabarito após aprovação, 7-12 dias para corte e acabamento, 1-2 dias para instalação. Projetos com pedras importadas podem ter prazo maior." },
          { q: "Os projetos têm garantia?", a: "Todos os projetos têm 5 anos de garantia para defeitos de fabricação e instalação, e 24 meses de garantia para a selagem hidrofugante." },
          { q: "Qual o valor médio de um projeto completo de cozinha?", a: "Cozinhas completas (bancada principal + ilha + churrasqueira) variam entre R$ 8.000 e R$ 35.000 dependendo do material escolhido, área e complexidade dos recortes." },
        ]}
      />
    </PageLayout>
  );
}

const ORIGENS: (Origem | "Todas")[] = ["Todas", "Nacionais", "Importadas", "Ultra Potenza", "Vitta"];
const TIPOS: (Tipo | "Todos")[] = ["Todos", "Granito", "Mármore", "Quartzo", "Quartzito"];

function ColecaoCompleta() {
  const [origem, setOrigem] = useState<Origem | "Todas">("Todas");
  const [tipo, setTipo] = useState<Tipo | "Todos">("Todos");

  const filtradas = useMemo(
    () =>
      colecao.filter(
        (p) => (origem === "Todas" || p.origem === origem) && (tipo === "Todos" || p.tipo === tipo),
      ),
    [origem, tipo],
  );

  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Catálogo de Pedras"
          title="Coleção Completa"
          description="Explore nosso acervo de granitos, mármores, quartzos e quartzitos por origem e tipo. Pedras nacionais brasileiras, importadas e linhas exclusivas Ultra Potenza e Vitta."
        />

        <div className="mt-12 space-y-6">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Origem</p>
            <div className="flex flex-wrap gap-2">
              {ORIGENS.map((o) => (
                <button
                  key={o}
                  onClick={() => setOrigem(o)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                    origem === o ? "bg-onyx text-cream" : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Tipo de pedra</p>
            <div className="flex flex-wrap gap-2">
              {TIPOS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTipo(t)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                    tipo === t ? "bg-onyx text-cream" : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtradas.length === 0 ? (
          <p className="mt-16 text-center text-sm text-muted-foreground">Nenhuma pedra encontrada com esses filtros.</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtradas.map((p) => (
              <figure key={p.nome} className="group overflow-hidden border border-border bg-background">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.nome} — ${p.tipo} ${p.origem}`}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="space-y-2 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold">{p.tipo}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.origem}</span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground">{p.nome}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{p.descricao}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Exibindo {filtradas.length} de {colecao.length} pedras • Novas variedades adicionadas continuamente
        </p>
      </div>
    </section>
  );
}
