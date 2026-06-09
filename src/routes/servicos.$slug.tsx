import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "./granito";
import { servicos } from "@/data/servicos";
import { pedras } from "@/data/pedras";
import hero from "@/assets/hero-granite.webp";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const servico = servicos.find((s) => s.slug === params.slug);
    if (!servico) throw notFound();
    return { servico };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.servico;
    if (!s) return { meta: [{ title: "Serviço" }] };
    const url = `https://marmorarias.shop/servicos/${s.slug}`;
    const title = `${s.titulo} — ${s.precoBase}`;
    const desc = `${s.resumo} ${s.precoBase}. Orçamento em 24h com entrega e instalação em todo o Brasil.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: s.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:image", content: `https://marmorarias.shop${hero}` },
        { name: "twitter:image", content: `https://marmorarias.shop${hero}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          name: s.titulo, description: s.resumo,
          provider: { "@type": "LocalBusiness", name: "Marmorarias.shop", telephone: "+55-12-98251-9116" },
          areaServed: "BR",
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <PageLayout><div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-5xl">Serviço não encontrado</h1>
      <Link to="/servicos" className="mt-8 inline-flex text-gold">← Ver serviços</Link>
    </div></PageLayout>
  ),
  component: ServicoPage,
});

function ServicoPage() {
  const { servico: s } = Route.useLoaderData();
  const recomendadas = pedras.filter((p) => s.pedrasRecomendadas.includes(p.slug));

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Serviços" }, { label: s.nome }]} />
      <PageHero eyebrow="Serviço" title={s.titulo} subtitle={s.resumo} image={hero} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow={s.precoBase}
          title={s.titulo}
          description={s.resumo}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <article>
            <h2 className="font-serif text-3xl">{s.nome}: o que está incluso</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{s.resumo}</p>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Visita técnica e gabarito profissional</li>
              <li>• Corte CNC milimétrico em chapa selecionada</li>
              <li>• Acabamento polido, escovado ou flameado</li>
              <li>• Selagem hidrofugante premium (mármores e granitos)</li>
              <li>• Transporte e instalação por equipe própria</li>
              <li>• Garantia de 5 anos para defeitos de fabricação</li>
            </ul>
            {recomendadas.length > 0 && (
              <>
                <h3 className="mt-8 font-serif text-2xl">Pedras recomendadas</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {recomendadas.map((p) => (
                    <Link key={p.slug} to="/pedras/$slug" params={{ slug: p.slug }}
                      className="border border-border bg-card px-4 py-2 text-sm hover:border-gold hover:text-gold">
                      {p.nome}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </article>

          <aside className="bg-secondary p-10">
            <p className="eyebrow">Orçamento</p>
            <h3 className="mt-4 font-serif text-3xl">{s.nome}</h3>
            <p className="mt-4 text-muted-foreground">{s.precoBase} — envie as medidas para receber o orçamento detalhado em até 24h.</p>
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
        title={`Perguntas frequentes — ${s.nome}`}
        items={[
          { q: `Quanto custa ${s.nome.toLowerCase()}?`, a: `${s.precoBase}. O valor final depende do tipo de pedra, dimensões, recortes e cidade de entrega — orçamos em até 24h.` },
          { q: `Qual o prazo para ${s.nome.toLowerCase()}?`, a: `Em média 12 a 20 dias úteis: 3 dias para gabarito após aprovação, 7-12 dias para corte e acabamento, 1-2 dias para instalação.` },
          { q: `Vocês entregam ${s.nome.toLowerCase()} em todo o Brasil?`, a: `Sim. Atendemos as principais capitais e regiões metropolitanas — confira sua cidade em /marmoraria.` },
          { q: `Qual a garantia?`, a: `5 anos para defeitos de fabricação e instalação, 24 meses para a selagem hidrofugante.` },
        ]}
      />
    </PageLayout>
  );
}
