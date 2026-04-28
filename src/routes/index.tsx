import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { StoneCard } from "@/components/StoneCard";
import { ArrowRight, Award, Truck, Hammer, ShieldCheck } from "lucide-react";
import heroGranite from "@/assets/hero-granite.webp";
import kitchen from "@/assets/kitchen-luxury.webp";
import bathroom from "@/assets/bathroom-luxury.webp";
import churrasqueira from "@/assets/churrasqueira.webp";
import sieva from "@/assets/granite-siena.webp";
import saoGabriel from "@/assets/granite-sao-gabriel.webp";
import carrara from "@/assets/marble-carrara.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import quartzWhite from "@/assets/quartz-white.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marmorarias.shop — Granito, Mármore e Quartzo Sob Medida | Marmoraria Premium" },
      { name: "description", content: "Bancadas, pias e pisos em granito São Gabriel, mármore Carrara e quartzo. Preço justo, instalação profissional e entrega em todo o Brasil. Solicite seu orçamento." },
      { property: "og:title", content: "Marmorarias.shop — Marmoraria Premium" },
      { property: "og:description", content: "Granito, mármore e quartzo sob medida. Marmoraria premium com entrega nacional." },
      { property: "og:url", content: "https://marmorarias.shop/" },
      { property: "og:image", content: `https://marmorarias.shop${heroGranite}` },
      { name: "twitter:image", content: `https://marmorarias.shop${heroGranite}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Marmorarias.shop",
          image: `https://marmorarias.shop${heroGranite}`,
          "@id": "https://marmorarias.shop",
          url: "https://marmorarias.shop",
          telephone: "+55-12-98251-9116",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "São José dos Campos",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          areaServed: "BR",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify([
          { "@context": "https://schema.org", "@type": "SiteNavigationElement", name: "Granito", url: "https://marmorarias.shop/granito" },
          { "@context": "https://schema.org", "@type": "SiteNavigationElement", name: "Mármore", url: "https://marmorarias.shop/marmore" },
          { "@context": "https://schema.org", "@type": "SiteNavigationElement", name: "Quartzo", url: "https://marmorarias.shop/quartzo" },
          { "@context": "https://schema.org", "@type": "SiteNavigationElement", name: "Cozinha", url: "https://marmorarias.shop/cozinha" },
          { "@context": "https://schema.org", "@type": "SiteNavigationElement", name: "Banheiro", url: "https://marmorarias.shop/banheiro" },
          { "@context": "https://schema.org", "@type": "SiteNavigationElement", name: "Preços", url: "https://marmorarias.shop/precos" },
          { "@context": "https://schema.org", "@type": "SiteNavigationElement", name: "Galeria", url: "https://marmorarias.shop/galeria" },
          { "@context": "https://schema.org", "@type": "SiteNavigationElement", name: "Contato", url: "https://marmorarias.shop/contato" },
        ]),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-onyx text-cream">
        <img
          src={heroGranite}
          alt="Bancada de granito preto premium com veios dourados"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-32">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-3"><span className="gold-rule" />Marmoraria Premium</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">
              Bancadas em <em className="text-gold not-italic">granito</em>, mármore e quartzo sob medida
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
              Da seleção da chapa à instalação final. Granito São Gabriel, mármore branco Carrara,
              Calacatta Gold e quartzo premium para cozinhas, banheiros e churrasqueiras
              em todo o Brasil.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contato" className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-onyx transition-all hover:bg-cream">
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/galeria" className="inline-flex items-center gap-3 border border-cream/30 px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-colors hover:border-gold hover:text-gold">
                Ver Galeria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {[
            { icon: Award, label: "Pedras de primeira linha" },
            { icon: Hammer, label: "Instalação especializada" },
            { icon: Truck, label: "Entrega em todo Brasil" },
            { icon: ShieldCheck, label: "Garantia em todo serviço" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
              <span className="text-sm tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIAIS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Coleção de Materiais"
          title="Granito, mármore e quartzo selecionados"
          description="Trabalhamos apenas com pedras de primeira linha — granito São Gabriel, Branco Siena, Preto Absoluto, mármore Carrara, Calacatta Gold, quartzo branco e os exóticos como Taj Mahal e Onix."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StoneCard image={saoGabriel} name="Granito São Gabriel" category="Granito" price="R$ 480" to="/granito" alt="Granito São Gabriel preto polido para cozinha" />
          <StoneCard image={sieva} name="Granito Branco Siena" category="Granito" price="R$ 520" to="/granito" alt="Granito Branco Siena para bancada de cozinha" />
          <StoneCard image={carrara} name="Mármore Carrara" category="Mármore" price="R$ 890" to="/marmore" alt="Mármore branco Carrara importado para bancada" />
          <StoneCard image={calacatta} name="Mármore Calacatta Gold" category="Mármore" price="R$ 1.450" to="/marmore" alt="Mármore Calacatta Gold com veios dourados" />
          <StoneCard image={quartzWhite} name="Quartzo Branco" category="Quartzo" price="R$ 1.180" to="/quartzo" alt="Quartzo branco para bancada de cozinha moderna" />
          <Link to="/galeria" className="group flex aspect-[4/5] items-center justify-center border border-dashed border-border bg-card p-8 text-center transition-all hover:border-gold">
            <div>
              <p className="eyebrow">Mais opções</p>
              <p className="mt-3 font-serif text-2xl">Ver coleção completa</p>
              <ArrowRight className="mx-auto mt-4 h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* APLICACOES */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Aplicações"
            title="Pedras nobres para cada ambiente"
            description="Pia esculpida em granito, bancada gourmet em mármore, churrasqueira em pedra natural ou banheiro com cuba embutida — entregamos projetos sob medida."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <ApplicationCard
              image={kitchen}
              title="Cozinha"
              kw="Bancada de granito para cozinha, ilha, cooktop"
              to="/cozinha"
            />
            <ApplicationCard
              image={bathroom}
              title="Banheiro"
              kw="Bancada de mármore com cuba esculpida"
              to="/banheiro"
            />
            <ApplicationCard
              image={churrasqueira}
              title="Churrasqueira"
              kw="Área gourmet em granito resistente ao calor"
              to="/cozinha"
            />
          </div>
        </div>
      </section>

      {/* CIDADES ATENDIDAS — SEO LOCAL */}
      <section className="border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="eyebrow flex items-center justify-center gap-3"><span className="gold-rule" />Marmoraria com entrega nacional<span className="gold-rule" /></p>
          <h2 className="mt-6 font-serif text-3xl md:text-4xl">Atendemos as principais capitais e cidades do Brasil</h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Marmoraria em <strong>São Paulo</strong>, <strong>Rio de Janeiro</strong>, <strong>Belo Horizonte</strong>, <strong>Curitiba</strong>,{" "}
            <strong>Porto Alegre</strong>, <strong>Brasília</strong>, <strong>Salvador</strong>, <strong>Florianópolis</strong>,{" "}
            <strong>Campinas</strong>, <strong>São José dos Campos</strong>, <strong>Goiânia</strong> e <strong>Recife</strong>.
            Quartzito Taj Mahal, granito São Gabriel, mármore Calacatta Gold e quartzo branco com instalação profissional.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-onyx text-cream">
        <img src={calacatta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="eyebrow flex items-center justify-center gap-3"><span className="gold-rule" />Atendemos todo o Brasil<span className="gold-rule" /></p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl">
            Seu projeto merece a <em className="text-gold not-italic">pedra certa</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-cream/75">
            Solicite um orçamento gratuito. Nossa equipe envia tabela de preços, sugestões de
            material para sua aplicação e estimativa por metro quadrado.
          </p>
          <Link to="/contato" className="mt-10 inline-flex items-center gap-3 bg-gold px-10 py-4 text-xs uppercase tracking-[0.25em] text-onyx transition-all hover:bg-cream">
            Solicitar Orçamento
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}

function ApplicationCard({ image, title, kw, to }: { image: string; title: string; kw: string; to: "/cozinha" | "/banheiro" }) {
  return (
    <Link to={to} className="group relative block overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden bg-onyx">
        <img src={image} alt={`${title} — ${kw}`} loading="lazy" width={1280} height={1280} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
          <p className="eyebrow text-gold">Aplicação</p>
          <h3 className="mt-2 font-serif text-3xl">{title}</h3>
          <p className="mt-2 text-sm text-cream/75">{kw}</p>
        </div>
      </div>
    </Link>
  );
}
