import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-granite.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import kitchen from "@/assets/kitchen-luxury.webp";
import siena from "@/assets/granite-siena.webp";
import escadaCover from "@/assets/blog-escada-granito-cover.jpg";
import piaCover from "@/assets/blog-pia-esculpida-cover.jpg";
import gourmetCover from "@/assets/blog-area-gourmet-cover.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/blog" },
      { title: "Blog de Marmoraria: Guias de Granito, Mármore e Quartzo" },
      { name: "description", content: "Guias e tendências de marmoraria: como escolher granito, mármore Carrara ou quartzo, manutenção de pedras naturais e tendências 2026." },
      { name: "keywords", content: "blog marmoraria, como escolher granito, manutenção de mármore, tendências marmoraria 2026, guia pedras naturais" },
      { property: "og:title", content: "Blog de Marmoraria — Marmorarias.shop" },
      { property: "og:description", content: "Guias práticos sobre granito, mármore, quartzo e tendências de marmoraria." },
      { property: "og:image", content: `https://marmorarias.shop${hero}` },
      { name: "twitter:image", content: `https://marmorarias.shop${hero}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { slug: "pedra-para-escada-granito-marmore-travertino" as const, title: "Pedra para Escada: Granito, Mármore ou Travertino — Guia Definitivo 2026", desc: "Guia completo para escolher pedra de escada: tipos, medidas, antiderrapância, preço por degrau e tendências atemporais.", img: escadaCover, cat: "Guia de Escolha" },
  { slug: "como-escolher-granito-marmore-quartzo" as const, title: "Como escolher entre granito, mármore e quartzo", desc: "Guia completo para decidir o material ideal para sua bancada de cozinha, banheiro ou área gourmet.", img: siena, cat: "Guia de Escolha" },
  { slug: "manutencao-pedras-naturais" as const, title: "Manutenção de pedras naturais: o guia definitivo", desc: "Como limpar, selar e preservar granito, mármore e quartzo por décadas.", img: kitchen, cat: "Manutenção" },
  { slug: "tendencias-marmoraria-2026" as const, title: "Tendências de marmoraria 2026: cores, acabamentos e estilos", desc: "Quartzitos exóticos, Calacatta, levigados e bancadas monolíticas dominam o ano.", img: calacatta, cat: "Tendências" },
  { slug: "quartzito-taj-mahal-preco-m2" as const, title: "Quartzito Taj Mahal: preço por m² e onde aplicar", desc: "Preço atualizado, comparativo com Calacatta Gold e dicas de aplicação.", img: calacatta, cat: "Quartzito" },
  { slug: "diferenca-granito-marmore-quartzo-quartzito" as const, title: "Granito, mármore, quartzo ou quartzito: qual é o melhor?", desc: "Comparativo completo entre resistência, preço, manutenção e aplicação.", img: hero, cat: "Guia de Escolha" },
  { slug: "como-medir-bancada-cozinha" as const, title: "Como medir bancada de cozinha para orçamento", desc: "Passo a passo para tirar medidas e receber orçamento preciso de marmoraria.", img: kitchen, cat: "Guia Prático" },
  { slug: "preco-marmoraria-2026-tabela" as const, title: "Quanto custa marmoraria em 2026? Tabela atualizada", desc: "Tabela de preços de granito, mármore, quartzo, instalação, recortes e frete.", img: hero, cat: "Preços" },
  { slug: "granito-ou-porcelanato-bancada" as const, title: "Granito ou porcelanato na bancada da cozinha", desc: "Comparativo completo: resistência, preço, espessura, manutenção e prós e contras.", img: siena, cat: "Comparativo" },
  { slug: "como-limpar-marmore-manchado" as const, title: "Como tirar mancha de mármore: guia completo", desc: "Receitas testadas para vinho, café, óleo, ferrugem e amarelado no mármore branco.", img: calacatta, cat: "Manutenção" },
  { slug: "quanto-custa-reformar-cozinha-2026" as const, title: "Quanto custa reformar a cozinha em 2026", desc: "Tabela por tamanho — cozinha pequena, média e gourmet, com bancadas e marcenaria.", img: kitchen, cat: "Reforma" },
  { slug: "ilha-de-cozinha-medidas-ideais" as const, title: "Ilha de cozinha: medidas ideais e distâncias", desc: "Medidas mínimas, altura padrão, espessura da pedra e erros mais comuns.", img: kitchen, cat: "Projeto" },
  { slug: "cuba-de-apoio-ou-sob-bancada" as const, title: "Cuba sob bancada, de apoio ou embutida", desc: "Diferenças entre os tipos de cuba: estética, preço e instalação.", img: kitchen, cat: "Projeto" },
  { slug: "calacatta-gold-vs-carrara" as const, title: "Calacatta Gold ou Carrara: qual mármore branco", desc: "Comparativo entre os dois mármores mais desejados do mundo.", img: calacatta, cat: "Comparativo" },
  { slug: "porcelanato-que-imita-marmore" as const, title: "Porcelanato que imita mármore: vale a pena?", desc: "Análise honesta sobre marcas, padrões, preços e durabilidade real.", img: calacatta, cat: "Comparativo" },
  { slug: "marmore-no-banheiro-vale-a-pena" as const, title: "Mármore no banheiro vale a pena?", desc: "Prós, contras, cuidados e melhores tipos de mármore para banheiro.", img: calacatta, cat: "Banheiro" },
  { slug: "bancada-cozinha-gourmet-projeto" as const, title: "Cozinha gourmet: projeto completo 2026", desc: "Medidas mínimas, bancadas em quartzito, ilha com cooktop e eletrodomésticos.", img: kitchen, cat: "Projeto" },
  { slug: "tipos-de-acabamento-de-pedra" as const, title: "Acabamentos de pedra: polido, levigado, flameado", desc: "Quando usar cada acabamento em bancadas e revestimentos.", img: siena, cat: "Guia Técnico" },
  { slug: "fachada-pedra-natural" as const, title: "Fachada com pedra natural: granito ou quartzito", desc: "Melhores granitos, técnicas de fixação e custo por m².", img: hero, cat: "Fachada" },
  { slug: "churrasqueira-em-pedra" as const, title: "Churrasqueira em pedra: granito, ardósia ou Goiás", desc: "Melhores materiais para churrasqueira, resistência ao calor e custo.", img: hero, cat: "Área Externa" },
  { slug: "soleira-de-granito-cores-medidas" as const, title: "Soleira de granito: cores, medidas e instalação", desc: "Medidas padrão, cores mais vendidas e preço por metro linear.", img: siena, cat: "Acabamento" },
  { slug: "pedra-para-piscina-revestimento" as const, title: "Pedra para piscina: bordas e revestimento", desc: "Hijau, São Tomé, Miracema e granito flameado para borda de piscina.", img: hero, cat: "Área Externa" },
];

function BlogPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <PageHero eyebrow="Blog" title="Insights de Marmoraria" subtitle="Guias, tendências e dicas de manutenção para você escolher e preservar a pedra ideal." image={hero} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader eyebrow="Artigos em Destaque" title="Aprenda com quem entende de pedra" />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-6 eyebrow text-gold">{p.cat}</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight group-hover:text-gold transition-colors">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground">Ler artigo <ArrowRight className="h-3.5 w-3.5" /></span>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
