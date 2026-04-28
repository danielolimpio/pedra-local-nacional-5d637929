import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { StoneCard } from "@/components/StoneCard";
import sieva from "@/assets/granite-siena.webp";
import saoGabriel from "@/assets/granite-sao-gabriel.webp";
import hero from "@/assets/hero-granite.webp";

export const Route = createFileRoute("/granito")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/granito" },
      { title: "Granito para Cozinha: Preços, Cores e Modelos | Marmorarias.shop" },
      { name: "description", content: "Granito São Gabriel, Branco Siena, Preto Absoluto, Cinza Andorinha. Bancada de granito sob medida para cozinha com preço por m². Solicite orçamento." },
      { name: "keywords", content: "granito para cozinha, granito São Gabriel, granito branco siena, granito preto absoluto, granito cinza andorinha, bancada de granito, preço granito m2" },
      { property: "og:title", content: "Granito para Cozinha — Marmorarias.shop" },
      { property: "og:description", content: "Granitos premium para bancadas e pias. Preço por m² e instalação inclusa." },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/granito" }],
  }),
  component: GranitoPage,
});

const granitos = [
  { name: "Granito São Gabriel", img: saoGabriel, price: "R$ 480", desc: "Preto profundo com finos pontos brancos. Resistente, não mancha facilmente — o queridinho das cozinhas brasileiras." },
  { name: "Granito Branco Siena", img: sieva, price: "R$ 520", desc: "Tons claros com sutis veios bege. Elegante para bancadas de cozinhas amplas e ambientes iluminados." },
  { name: "Granito Preto Absoluto", img: hero, price: "R$ 590", desc: "Preto uniforme, brilho espelhado. Ideal para projetos contemporâneos e churrasqueiras gourmet." },
];

function GranitoPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Materiais — Granito"
        title="Granito para Cozinha"
        subtitle="Granito São Gabriel, Branco Siena, Preto Absoluto e Cinza Andorinha — pedras resistentes para bancadas, pias e churrasqueiras."
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Coleção de Granitos"
          title="Os granitos mais procurados do Brasil"
          description="Trabalhamos com chapas selecionadas direto de fábrica. Veja preços por metro quadrado, acabamentos polido, escovado e flameado."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {granitos.map((g) => (
            <StoneCard key={g.name} image={g.img} name={g.name} category="Granito" price={g.price} alt={`${g.name} para bancada de cozinha`} />
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <article className="prose prose-stone max-w-none">
            <h3 className="font-serif text-3xl">Granito ou mármore: qual o melhor para bancada de cozinha?</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              O <strong>granito</strong> é a pedra mais resistente para bancada de cozinha — não mancha
              facilmente com vinho, café ou limão, suporta calor de panelas quentes e tem acabamento
              durável. O <strong>granito São Gabriel</strong> e o <strong>preto absoluto</strong> são os
              campeões em cozinhas com cooktop. Para áreas externas e churrasqueiras, recomendamos o
              acabamento <strong>flameado</strong>, que é antiderrapante.
            </p>
            <h4 className="mt-8 font-serif text-2xl">Acabamentos disponíveis</h4>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>• <strong>Polido</strong> — brilho espelhado, ideal para cozinhas internas</li>
              <li>• <strong>Escovado</strong> — toque suave e antiderrapante para bancadas e box de banheiro</li>
              <li>• <strong>Flameado</strong> — rústico e antiderrapante para área externa e churrasqueira</li>
              <li>• <strong>Levigado</strong> — fosco aveludado, contemporâneo</li>
            </ul>
          </article>
          <aside className="bg-secondary p-10">
            <p className="eyebrow">Orçamento Personalizado</p>
            <h4 className="mt-4 font-serif text-3xl">Faça as medidas e receba o valor</h4>
            <p className="mt-4 text-muted-foreground">
              Envie as medidas da sua bancada e o tipo de granito desejado. Calculamos o
              metro quadrado, recortes para cooktop, cuba e instalação.
            </p>
            <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">
              Pedir Orçamento de Granito
            </Link>
          </aside>
        </div>

        {/* Por que escolher granito */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {[
            { t: "Resistência ao calor", d: "Suporta panelas direto da boca do fogão sem deformar ou perder o brilho." },
            { t: "Antibacteriano natural", d: "Superfície densa e impermeável após selagem — ideal para preparo de alimentos." },
            { t: "Durabilidade de décadas", d: "Manutenção simples com pano úmido e sabão neutro. Vida útil acima de 30 anos." },
          ].map(b => (
            <div key={b.t} className="border border-border bg-card p-8">
              <p className="eyebrow text-gold">Vantagem</p>
              <h4 className="mt-3 font-serif text-xl">{b.t}</h4>
              <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <SectionHeader eyebrow="Dúvidas Frequentes" title="Perguntas sobre granito" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { q: "Granito mancha com vinho ou café?", a: "Não, desde que receba a selagem hidrofugante. Aplicamos resina premium em toda chapa antes da entrega." },
              { q: "Posso colocar panela quente direto?", a: "Sim. O granito resiste a temperaturas acima de 300°C sem deformação ou marcas." },
              { q: "Qual a espessura ideal para bancada?", a: "Trabalhamos com chapas de 2cm e 3cm. Para ilhas e cooktops, 3cm é o recomendado." },
              { q: "Granito amarela com o tempo?", a: "Granitos polidos não amarelam. Apenas mármores claros sem manutenção podem oxidar." },
            ].map(f => (
              <div key={f.q}>
                <h4 className="font-serif text-lg">{f.q}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: string; subtitle: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-onyx text-cream">
      <img src={image} alt="" loading="eager" decoding="async" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/60 to-onyx/90" />
      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
        <p className="eyebrow flex items-center justify-center gap-3"><span className="gold-rule" />{eyebrow}<span className="gold-rule" /></p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-cream/80">{subtitle}</p>
      </div>
    </section>
  );
}
