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

export const Route = createFileRoute("/blog/")({
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
  {
    slug: "como-escolher-granito-marmore-quartzo" as const,
    title: "Como escolher entre granito, mármore e quartzo",
    desc: "Guia completo para decidir o material ideal para sua bancada de cozinha, banheiro ou área gourmet.",
    img: siena,
    cat: "Guia de Escolha",
  },
  {
    slug: "manutencao-pedras-naturais" as const,
    title: "Manutenção de pedras naturais: o guia definitivo",
    desc: "Como limpar, selar e preservar granito, mármore e quartzo por décadas. Produtos certos e o que evitar.",
    img: kitchen,
    cat: "Manutenção",
  },
  {
    slug: "tendencias-marmoraria-2026" as const,
    title: "Tendências de marmoraria 2026: cores, acabamentos e estilos",
    desc: "Quartzitos exóticos, mármore Calacatta, acabamentos levigados e bancadas monolíticas dominam o ano.",
    img: calacatta,
    cat: "Tendências",
  },
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
