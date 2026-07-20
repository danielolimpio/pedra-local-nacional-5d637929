import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { getServico, SERVICOS } from "@/data/servicos";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const s = getServico(params.slug);
    if (!s) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData ? getServico(loaderData.slug) : undefined;
    if (!s) return { meta: [{ title: "Serviço não encontrado" }] };
    const url = `https://marmorarias.shop/servicos/${s.slug}`;
    return {
      meta: [
        { title: `${s.nome} | Marmorarias.shop` },
        { name: "description", content: s.resumo },
        { property: "og:title", content: s.nome },
        { property: "og:description", content: s.resumo },
        { property: "og:image", content: `https://marmorarias.shop${s.imagem}` },
        { property: "og:url", content: url },
        { property: "og:type", content: "service" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.nome,
            description: s.descricao,
            image: `https://marmorarias.shop${s.imagem}`,
            provider: { "@type": "Organization", name: "Marmorarias.shop" },
            areaServed: "BR",
            url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-5xl">Serviço não encontrado</h1>
        <Link to="/servicos" className="mt-8 inline-flex text-gold">← Ver serviços</Link>
      </div>
    </PageLayout>
  ),
  component: ServicoDetail,
});

function ServicoDetail() {
  const { slug } = Route.useLoaderData();
  const s = getServico(slug)!;
  const outros = SERVICOS.filter((x) => x.slug !== s.slug);

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Serviços", to: "/servicos" }, { label: s.nome }]} />

      <header className="relative isolate overflow-hidden bg-onyx text-cream">
        <img src={s.imagem} alt={s.nome} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 to-onyx/95" />
        <div className="relative mx-auto max-w-4xl px-6 py-24">
          <p className="eyebrow text-gold">Serviço</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{s.nome}</h1>
          <p className="mt-6 max-w-2xl text-cream/80">{s.resumo}</p>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-lg leading-relaxed text-muted-foreground">{s.descricao}</p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded border border-border p-6">
            <p className="eyebrow text-gold">Prazo médio</p>
            <p className="mt-2 font-serif text-xl">{s.prazoMedio}</p>
          </div>
          <div className="rounded border border-border p-6">
            <p className="eyebrow text-gold">Investimento</p>
            <p className="mt-2 font-serif text-xl">{s.precoInicial}</p>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-serif text-3xl">Materiais indicados</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            {s.materiaisIndicados.map((m) => <li key={m}>• {m}</li>)}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-3xl">Como funciona</h2>
          <div className="mt-6 space-y-6">
            {s.etapas.map((e) => (
              <div key={e.titulo}>
                <h3 className="font-serif text-xl text-foreground">{e.titulo}</h3>
                <p className="mt-2 text-muted-foreground">{e.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16">
          <FAQ items={s.faq} title="Perguntas frequentes" />
        </div>

        <div className="mt-16 text-center border-t border-border pt-10">
          <h2 className="font-serif text-3xl">Pronto para começar seu projeto?</h2>
          <p className="mt-3 text-muted-foreground">Envie as medidas pelo WhatsApp e receba orçamento na hora.</p>
          <Link to="/contato" className="mt-6 inline-flex bg-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">
            Solicitar Orçamento
          </Link>
        </div>

        <div className="mt-20">
          <h2 className="font-serif text-2xl">Outros serviços</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {outros.map((o) => (
              <Link key={o.slug} to="/servicos/$slug" params={{ slug: o.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={o.imagem} alt={o.nome} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-3 font-serif text-lg group-hover:text-gold">{o.nome}</h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
