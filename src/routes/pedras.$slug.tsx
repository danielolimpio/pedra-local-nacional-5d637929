import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { getPedra, PEDRAS } from "@/data/pedras";

export const Route = createFileRoute("/pedras/$slug")({
  loader: ({ params }) => {
    const pedra = getPedra(params.slug);
    if (!pedra) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const pedra = loaderData ? getPedra(loaderData.slug) : undefined;
    if (!pedra) return { meta: [{ title: "Pedra não encontrada" }] };
    const url = `https://marmorarias.shop/pedras/${pedra.slug}`;
    return {
      meta: [
        { title: `${pedra.nome}: Preço, Cores e Aplicações | Marmorarias.shop` },
        { name: "description", content: `${pedra.nome} — ${pedra.tipo} de ${pedra.origem}. ${pedra.resumo.slice(0, 110)}` },
        { property: "og:title", content: pedra.nome },
        { property: "og:description", content: pedra.resumo.slice(0, 160) },
        { property: "og:image", content: `https://marmorarias.shop${pedra.imagem}` },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: pedra.nome,
            image: `https://marmorarias.shop${pedra.imagem}`,
            description: pedra.resumo,
            brand: { "@type": "Brand", name: "Marmorarias.shop" },
            category: pedra.tipo,
            offers: {
              "@type": "Offer",
              priceCurrency: "BRL",
              price: pedra.precoM2.replace(/[^\d]/g, ""),
              availability: "https://schema.org/InStock",
              url,
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-5xl">Pedra não encontrada</h1>
        <Link to="/pedras" className="mt-8 inline-flex text-gold">← Ver catálogo</Link>
      </div>
    </PageLayout>
  ),
  component: PedraDetail,
});

function PedraDetail() {
  const { slug } = Route.useLoaderData();
  const pedra = getPedra(slug)!;
  const relacionadas = PEDRAS.filter((p) => p.slug !== pedra.slug).slice(0, 3);

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Pedras", to: "/pedras" }, { label: pedra.nome }]} />

      <article>
        <header className="relative isolate overflow-hidden bg-onyx text-cream">
          <img src={pedra.imagem} alt={pedra.nome} className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 to-onyx/95" />
          <div className="relative mx-auto max-w-4xl px-6 py-24">
            <p className="eyebrow text-gold">{pedra.tipo} • {pedra.origem}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{pedra.nome}</h1>
            <p className="mt-6 max-w-2xl text-cream/80">{pedra.resumo}</p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-gold">A partir de {pedra.precoM2}/m² instalado</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <section>
              <h2 className="font-serif text-2xl">Cores e Padrões</h2>
              <p className="mt-3 text-muted-foreground">{pedra.cores}</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl">Acabamentos disponíveis</h2>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {pedra.acabamentos.map((a) => <li key={a}>• {a}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="font-serif text-2xl">Aplicações</h2>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {pedra.aplicacoes.map((a) => <li key={a}>• {a}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="font-serif text-2xl">Vantagens</h2>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {pedra.vantagens.map((v) => <li key={v}>• {v}</li>)}
              </ul>
            </section>
            <section className="md:col-span-2">
              <h2 className="font-serif text-2xl">Cuidados e manutenção</h2>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                {pedra.cuidados.map((c) => <li key={c}>• {c}</li>)}
              </ul>
            </section>
          </div>

          <div className="mt-16">
            <FAQ items={pedra.faq} title={`Perguntas frequentes sobre ${pedra.nome}`} />
          </div>

          <div className="mt-16 text-center border-t border-border pt-10">
            <h2 className="font-serif text-3xl">Solicite um orçamento com {pedra.nome}</h2>
            <p className="mt-3 text-muted-foreground">Envie as medidas e receba orçamento pelo WhatsApp em minutos.</p>
            <Link to="/contato" className="mt-6 inline-flex bg-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">
              Solicitar Orçamento
            </Link>
          </div>

          <div className="mt-20">
            <h2 className="font-serif text-2xl">Veja outras pedras</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {relacionadas.map((r) => (
                <Link key={r.slug} to="/pedras/$slug" params={{ slug: r.slug }} className="group block">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={r.imagem} alt={r.nome} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="mt-3 eyebrow text-gold">{r.tipo}</p>
                  <h3 className="font-serif text-lg group-hover:text-gold">{r.nome}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
