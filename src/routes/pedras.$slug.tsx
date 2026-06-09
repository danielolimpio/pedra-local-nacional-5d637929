import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "./granito";
import { pedras } from "@/data/pedras";
import hero from "@/assets/hero-granite.webp";

export const Route = createFileRoute("/pedras/$slug")({
  loader: ({ params }) => {
    const pedra = pedras.find((p) => p.slug === params.slug);
    if (!pedra) throw notFound();
    return { pedra };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.pedra;
    if (!p) return { meta: [{ title: "Pedra" }] };
    const url = `https://marmorarias.shop/pedras/${p.slug}`;
    const title = `${p.nome}: Preço, Cores e Aplicações (R$ ${p.precoMin}/m²)`;
    const desc = `${p.nome} — ${p.resumo} Preço a partir de R$ ${p.precoMin}/m². Aplicações: ${p.aplicacoes.join(", ")}. Orçamento em 24h.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: p.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
        { property: "og:image", content: `https://marmorarias.shop${hero}` },
        { name: "twitter:image", content: `https://marmorarias.shop${hero}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Product",
          name: p.nome, description: p.resumo, category: p.categoria,
          brand: { "@type": "Brand", name: "Marmorarias.shop" },
          offers: { "@type": "Offer", priceCurrency: "BRL", price: p.precoMin, url, availability: "https://schema.org/InStock" },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <PageLayout><div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-5xl">Pedra não encontrada</h1>
      <Link to="/pedras" className="mt-8 inline-flex text-gold">← Ver catálogo</Link>
    </div></PageLayout>
  ),
  component: PedraPage,
});

function PedraPage() {
  const { pedra: p } = Route.useLoaderData();
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Pedras" }, { label: p.nome }]} />
      <PageHero
        eyebrow={`${p.categoria} — ${p.origem}`}
        title={p.nome}
        subtitle={p.resumo}
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow={`Preço a partir de R$ ${p.precoMin.toLocaleString("pt-BR")}/m²`}
          title={`${p.nome} sob medida`}
          description={`${p.resumo} Trabalhamos com chapas selecionadas e instalação inclusa em todo o Brasil.`}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <article>
            <h2 className="font-serif text-3xl">Sobre o {p.nome}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{p.resumo}</p>
            <h3 className="mt-8 font-serif text-2xl">Aplicações recomendadas</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {p.aplicacoes.map((a) => <li key={a}>• {a}</li>)}
            </ul>
            <h3 className="mt-8 font-serif text-2xl">Características</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li><strong>Categoria:</strong> {p.categoria}</li>
              <li><strong>Origem:</strong> {p.origem}</li>
              <li><strong>Cor predominante:</strong> {p.cor}</li>
              <li><strong>Preço base:</strong> R$ {p.precoMin.toLocaleString("pt-BR")}/m² (polido)</li>
            </ul>
          </article>

          <aside className="bg-secondary p-10">
            <p className="eyebrow">Orçamento</p>
            <h3 className="mt-4 font-serif text-3xl">{p.nome} sob medida</h3>
            <p className="mt-4 text-muted-foreground">
              Envie as medidas da sua bancada. Calculamos m², recortes, instalação e frete.
            </p>
            <Link to="/contato" className="mt-8 inline-flex items-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">
              Pedir Orçamento
            </Link>
            <a href="https://wa.me/5512982519116" className="mt-4 inline-flex items-center bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-onyx hover:bg-cream">
              WhatsApp
            </a>
          </aside>
        </div>
      </section>

      <FAQ
        title={`Perguntas frequentes — ${p.nome}`}
        items={[
          { q: `Qual o preço do ${p.nome} por m²?`, a: `O ${p.nome} parte de R$ ${p.precoMin.toLocaleString("pt-BR")}/m² no acabamento polido. Recortes para cooktop, cuba, instalação e frete são orçados à parte conforme o projeto.` },
          { q: `${p.nome} é resistente?`, a: `Sim. ${p.categoria === "Granito" || p.categoria === "Quartzito" ? "Suporta calor, impacto e uso intenso na cozinha." : p.categoria === "Quartzo" ? "Quartzo engenheirado não porta, não mancha e dispensa selagem." : "Mármore exige selagem hidrofugante e atenção a produtos ácidos."} Entregamos com selagem premium.` },
          { q: `Onde aplicar o ${p.nome}?`, a: `${p.aplicacoes.join(", ")}. Para outras aplicações, consulte nossa equipe.` },
          { q: `Vocês entregam ${p.nome} em todo o Brasil?`, a: `Sim. Atendemos as principais capitais e regiões metropolitanas com entrega e instalação inclusas. Confira sua cidade em /marmoraria.` },
        ]}
      />
    </PageLayout>
  );
}
