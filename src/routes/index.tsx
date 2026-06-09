import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { StoneCard } from "@/components/StoneCard";
import { FAQ } from "@/components/FAQ";
import { ArrowRight, Award, Truck, Hammer, ShieldCheck } from "lucide-react";
import heroGranite from "@/assets/hero-granite.webp";
import kitchen from "@/assets/kitchen-luxury.webp";
import bathroom from "@/assets/bathroom-luxury.webp";
import churrasqueira from "@/assets/churrasqueira.webp";
import carraraGioia from "@/assets/marble-carrara-gioia.webp";
import marromImperial from "@/assets/marble-marrom-imperial.webp";
import marbleBronze from "@/assets/marble-bronze.webp";
import neroChines from "@/assets/marble-nero-chines.webp";
import verdeGuatemala from "@/assets/marble-verde-guatemala.webp";
import calacatta from "@/assets/marble-calacatta.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marmoraria Premium — Granito, Mármore e Quartzo" },
      { name: "description", content: "Bancadas em granito São Gabriel, mármore Carrara e quartzo branco. Preço por m², instalação profissional e entrega em todo o Brasil. Peça orçamento." },
      { name: "keywords", content: "marmoraria, marmoraria perto de mim, bancada de granito, mármore Carrara, quartzo branco, granito São Gabriel, Calacatta Gold, quartzito Taj Mahal, marmoraria São Paulo" },
      { property: "og:title", content: "Marmoraria Premium — Granito, Mármore e Quartzo" },
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
          <StoneCard image={carraraGioia} name="Mármore Carrara Gioia" category="Mármore" price="R$ 950" to="/marmore" alt="Mármore Carrara Gioia branco com veios cinza" />
          <StoneCard image={marromImperial} name="Mármore Marrom Imperial" category="Mármore" price="R$ 720" to="/marmore" alt="Mármore Marrom Imperial com veios brancos" />
          <StoneCard image={marbleBronze} name="Mármore Bronze" category="Mármore" price="R$ 780" to="/marmore" alt="Mármore Bronze marrom claro com veios brancos" />
          <StoneCard image={neroChines} name="Mármore Nero Chinês" category="Mármore" price="R$ 690" to="/marmore" alt="Mármore Nero Chinês preto com veios brancos" />
          <StoneCard image={verdeGuatemala} name="Mármore Verde Guatemala" category="Mármore" price="R$ 890" to="/marmore" alt="Mármore Verde Guatemala com tons profundos" />
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

      {/* FAQ — head terms primárias */}
      <FAQ
        eyebrow="Dúvidas Frequentes"
        title="Perguntas sobre marmoraria, granito e mármore"
        items={[
          { q: "O que faz uma marmoraria?", a: "Uma marmoraria seleciona, corta, acaba e instala pedras naturais (granito, mármore, quartzito) e sintéticas (quartzo, Silestone, Dekton) sob medida. Na Marmorarias.shop entregamos bancada de granito para cozinha, pia de mármore para banheiro, churrasqueira em granito flameado, soleira, peitoril e revestimentos em todo o Brasil." },
          { q: "Tem marmoraria perto de mim?", a: "Atendemos todo o Brasil. Showroom presencial em São Paulo com cobertura completa em Grande SP, ABC, Campinas e São José dos Campos. Para Rio de Janeiro, Porto Alegre, Belo Horizonte, Curitiba, Brasília, Salvador, Goiânia, Recife e Florianópolis fazemos entrega e instalação via logística parceira." },
          { q: "Qual a melhor pedra para bancada de cozinha?", a: "Para uso intenso, granito São Gabriel (R$ 480/m²) e quartzo branco (R$ 1.180/m²) são os mais indicados — resistem a calor, manchas e impacto. Mármore Carrara e Calacatta Gold entregam visual premium com cuidados de manutenção. Veja a tabela completa de preços por m²." },
          { q: "Quanto custa o metro quadrado de granito?", a: "Em 2026: granito Cinza Andorinha R$ 420/m², São Gabriel R$ 480/m², Branco Siena R$ 520/m², Preto Absoluto R$ 590/m². Mármore Carrara R$ 890/m² e Calacatta Gold R$ 1.450/m². Quartzo branco a partir de R$ 1.180/m². Recortes e instalação são orçados à parte." },
          { q: "Como solicitar orçamento de marmoraria online?", a: "Envie as medidas da bancada (largura x profundidade), tipo de aplicação (cozinha, banheiro, churrasqueira) e quantidade de recortes pelo nosso formulário ou WhatsApp (12) 98251-9116. Retornamos em até 24h com tabela de preço e sugestão de pedra." },
          { q: "A marmoraria faz a instalação no Brasil todo?", a: "Sim. Temos equipe própria em São Paulo e parceiros credenciados nas principais capitais. O frete é calculado por região e a instalação inclui transporte, nivelamento e selagem hidrofugante. Garantia de 5 anos para defeitos de fabricação e instalação." },
        ]}
      />

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-onyx text-cream">
        <img src={calacatta} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="eyebrow flex items-center justify-center gap-3"><span className="gold-rule" />Atendemos todo o Brasil<span className="gold-rule" /></p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl">
            Seu projeto merece a <em className="text-gold not-italic">pedra certa</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-cream/90">
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
          <p className="mt-2 text-sm text-cream/90">{kw}</p>
        </div>
      </div>
    </Link>
  );
}
