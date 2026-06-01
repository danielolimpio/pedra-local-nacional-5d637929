import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "./granito";
import { StoneCard } from "@/components/StoneCard";
import { cidades } from "@/data/cidades";
import hero from "@/assets/hero-granite.webp";
import saoGabriel from "@/assets/granite-sao-gabriel.webp";
import carrara from "@/assets/marble-carrara.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import quartz from "@/assets/quartz-white.webp";

export const Route = createFileRoute("/marmoraria/$cidade")({
  loader: ({ params }) => {
    const cidade = cidades.find((c) => c.slug === params.cidade);
    if (!cidade) throw notFound();
    return { cidade };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.cidade;
    if (!c) return { meta: [{ title: "Marmoraria" }] };
    const url = `https://marmorarias.shop/marmoraria/${c.slug}`;
    const title = `Marmoraria em ${c.nome} — Granito, Mármore e Quartzo | ${c.uf}`;
    const desc = `Marmoraria em ${c.nome}/${c.uf} com bancadas de granito São Gabriel, mármore Carrara, Calacatta Gold e quartzo branco sob medida. Orçamento rápido, entrega e instalação em ${c.nome} e região.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `marmoraria ${c.nome}, marmoraria em ${c.nome}, marmoraria perto de mim ${c.nome}, marmoraria ${c.uf}, granito ${c.nome}, mármore ${c.nome}, bancada de granito ${c.nome}, pia de mármore ${c.nome}, marmoraria no ${c.uf}, marmoraria mais próxima ${c.nome}, orçamento marmoraria ${c.nome}, marmoraria barata ${c.nome}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:image", content: `https://marmorarias.shop${hero}` },
        { property: "og:type", content: "website" },
        { name: "twitter:image", content: `https://marmorarias.shop${hero}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Marmorarias.shop — ${c.nome}`,
            image: `https://marmorarias.shop${hero}`,
            url,
            telephone: "+55-12-98251-9116",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressLocality: c.nome,
              addressRegion: c.uf,
              addressCountry: "BR",
            },
            areaServed: { "@type": "City", name: c.nome },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://marmorarias.shop/" },
              { "@type": "ListItem", position: 2, name: "Marmoraria por cidade", item: "https://marmorarias.shop/marmoraria" },
              { "@type": "ListItem", position: 3, name: `Marmoraria em ${c.nome}`, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-5xl">Cidade não encontrada</h1>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 text-gold">← Voltar ao início</Link>
      </div>
    </PageLayout>
  ),
  component: CidadePage,
});

function CidadePage() {
  const { cidade: c } = Route.useLoaderData();

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Marmoraria por cidade" }, { label: c.nome }]} />
      <PageHero
        eyebrow={`Marmoraria — ${c.uf}`}
        title={`Marmoraria em ${c.nome}`}
        subtitle={`Granito São Gabriel, mármore Carrara, Calacatta Gold, quartzo branco e quartzito Taj Mahal para bancadas, pias e revestimentos em ${c.nome} e região.`}
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow={`Atendimento em ${c.nome}`}
          title={`Marmoraria de confiança em ${c.nome}/${c.uf}`}
          description={c.diferencial + ". Trabalhamos com pedras nacionais e importadas, instalação profissional e garantia de 5 anos."}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StoneCard image={saoGabriel} name="Granito São Gabriel" category="Granito" price="R$ 480" to="/granito" alt={`Granito São Gabriel para bancada em ${c.nome}`} />
          <StoneCard image={carrara} name="Mármore Carrara" category="Mármore" price="R$ 890" to="/marmore" alt={`Mármore Carrara para banheiro em ${c.nome}`} />
          <StoneCard image={calacatta} name="Calacatta Gold" category="Mármore" price="R$ 1.450" to="/marmore" alt={`Mármore Calacatta Gold em ${c.nome}`} />
          <StoneCard image={quartz} name="Quartzo Branco" category="Quartzo" price="R$ 1.180" to="/quartzo" alt={`Bancada de quartzo branco em ${c.nome}`} />
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <article>
            <h2 className="font-serif text-3xl">Marmoraria em {c.nome}: serviço completo</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Procurando uma <strong>marmoraria em {c.nome}</strong> que entrega bancada de granito,
              pia de mármore, ilha de quartzo e churrasqueira gourmet com qualidade de showroom?
              A Marmorarias.shop atende {c.nome} e região com pedras nobres direto da cantaria,
              corte CNC milimétrico e instalação profissional.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cobrimos bancada de cozinha sob medida, pia esculpida em pedra natural,
              soleira de granito para porta, peitoril de janela, escada em mármore branco,
              churrasqueira em granito flameado e revestimento de fachada — tudo com
              orçamento detalhado por m² e entrega em {c.nome}.
            </p>
            <h3 className="mt-8 font-serif text-2xl">Bairros atendidos em {c.nome}</h3>
            <p className="mt-4 text-muted-foreground">
              {c.bairros.join(" • ")} e demais regiões de {c.nome}.
            </p>
          </article>

          <aside className="bg-secondary p-10">
            <p className="eyebrow">Orçamento para {c.nome}</p>
            <h3 className="mt-4 font-serif text-3xl">Receba o valor em até 24h</h3>
            <p className="mt-4 text-muted-foreground">
              Envie as medidas da sua bancada e o tipo de pedra desejada. Calculamos o
              metro quadrado, recortes, instalação e frete para {c.nome}.
            </p>
            <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">
              Pedir Orçamento em {c.nome}
            </Link>
            <a href="https://wa.me/5512982519116" className="mt-4 inline-flex items-center bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-onyx hover:bg-cream">
              Falar no WhatsApp
            </a>
          </aside>
        </div>
      </section>

      <FAQ
        title={`Perguntas frequentes — Marmoraria em ${c.nome}`}
        items={[
          { q: `Vocês são marmoraria perto de mim em ${c.nome}?`, a: `Sim. Atendemos ${c.nome} e toda a região com entrega e instalação. ${c.diferencial}. Solicite o orçamento pelo WhatsApp (12) 98251-9116 com as medidas da sua bancada.` },
          { q: `Quanto custa bancada de granito em ${c.nome}?`, a: `Em ${c.nome}, o granito São Gabriel parte de R$ 480/m², o Branco Siena R$ 520/m² e o Preto Absoluto R$ 590/m². Recortes para cooktop e cuba, instalação e frete para ${c.nome} são orçados à parte conforme o projeto.` },
          { q: `Qual o prazo de entrega para ${c.nome}?`, a: `O prazo médio para ${c.nome} é de 12 a 20 dias úteis: 3 dias para o gabarito após aprovação, 7-12 dias para corte e acabamento, e 1-2 dias para a instalação no local.` },
          { q: `Vocês fazem pia esculpida em mármore em ${c.nome}?`, a: `Sim. Esculpimos pias diretamente na chapa de mármore Carrara, Calacatta Gold ou granito — acabamento monolítico sem emendas, entregue e instalado em ${c.nome}.` },
          { q: `Quais bairros de ${c.nome} vocês atendem?`, a: `Atendemos toda ${c.nome}, incluindo ${c.bairros.slice(0, 5).join(", ")} e demais regiões. Para áreas mais distantes, calculamos o frete por km.` },
          { q: `Qual a garantia da bancada instalada em ${c.nome}?`, a: `5 anos para defeitos de fabricação e instalação, e 24 meses para a selagem hidrofugante — válida em todo o Brasil, incluindo ${c.nome}.` },
        ]}
      />
    </PageLayout>
  );
}
