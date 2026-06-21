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
              {p.aplicacoes.map((a: string) => <li key={a}>• {a}</li>)}
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
          { q: `Qual o preço do ${p.nome} por m² em 2026?`, a: `O ${p.nome} parte de R$ ${p.precoMin.toLocaleString("pt-BR")}/m² no acabamento polido (chapa 2cm). Em acabamentos escovado, flameado ou levigado e em chapas de 3cm o valor sobe entre 8% e 22%. Recortes para cooktop, cuba, instalação e frete são orçados à parte conforme o projeto.` },
          { q: `Quanto custa ${p.nome} instalado por m²?`, a: `O valor de ${p.nome} instalado por m² normalmente fica 18% a 30% acima do preço da chapa, somando recortes, frisos, rodabanca, deslocamento e mão de obra de instalação. Para uma bancada média de cozinha (6 a 8m²) o custo final do ${p.nome} instalado parte de R$ ${Math.round(p.precoMin * 1.25).toLocaleString("pt-BR")}/m².` },
          { q: `${p.nome} é resistente? Mancha ou risca?`, a: `${p.categoria === "Granito" || p.categoria === "Quartzito" ? `Sim. ${p.nome} é altamente resistente — suporta calor direto, impacto e uso intenso na cozinha. Com selagem hidrofugante a cada 24 meses, não mancha e não absorve líquidos.` : p.categoria === "Quartzo" ? `Sim. O ${p.nome} é quartzo engenheirado: não porta, não mancha, não risca com facilidade e dispensa selagem. Não suporta calor direto (use sempre descanso de panela).` : `O ${p.nome} é um mármore — exige selagem hidrofugante e cuidado com produtos ácidos (limão, vinagre, refrigerante). Com manutenção correta dura décadas mantendo a beleza.`} Todas as nossas chapas são entregues com selagem premium.` },
          { q: `${p.nome} qual o valor da chapa inteira?`, a: `A chapa inteira de ${p.nome} mede em média 2,80m x 1,70m (≈4,7m²) e é vendida fechada por R$ ${(p.precoMin * 4.7).toLocaleString("pt-BR", { maximumFractionDigits: 0 })} a R$ ${(p.precoMin * 5.5).toLocaleString("pt-BR", { maximumFractionDigits: 0 })} dependendo da espessura e desenho. Comprar a chapa inteira costuma sair 10% a 15% mais barato por m² do que comprar a metragem fracionada.` },
          { q: `Onde aplicar o ${p.nome}?`, a: `As aplicações recomendadas para o ${p.nome} são: ${p.aplicacoes.join(", ")}. ${p.categoria === "Mármore" ? "Não é indicado para bancada de cozinha de uso intenso por ser poroso." : p.categoria === "Granito" ? "Excelente para cozinhas, áreas gourmet e churrasqueiras." : ""}` },
          { q: `Quais acabamentos existem no ${p.nome}?`, a: `Os principais acabamentos do ${p.nome} são: polido (brilho espelhado), escovado (toque acetinado), levigado (fosco aveludado), flameado (rústico antiderrapante) e amaciado. O acabamento polido é o mais usado em bancadas internas, enquanto flameado e levigado são preferidos em áreas externas e pisos.` },
          { q: `${p.nome} combina com cozinha branca?`, a: `${p.cor.toLowerCase().includes("branc") || p.cor.toLowerCase().includes("beg") || p.cor.toLowerCase().includes("crem") ? `Sim — o ${p.nome} tem fundo claro (${p.cor.toLowerCase()}) e combina perfeitamente com armários brancos, off-white e madeira clara, mantendo a cozinha luminosa.` : `O ${p.nome} é ${p.cor.toLowerCase()}, então combina com cozinha branca criando contraste marcante — funciona muito bem em ilhas, bancadas e backsplashes onde a pedra é o ponto focal.`}` },
          { q: `Vocês entregam ${p.nome} em todo o Brasil?`, a: `Sim. Atendemos as principais capitais e regiões metropolitanas — São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba, Porto Alegre, Salvador, Recife, Fortaleza, Goiânia, Campinas e mais de 300 cidades. Frete e prazo de entrega são calculados conforme o CEP. Confira sua cidade em /marmoraria.` },
          { q: `Qual a garantia da bancada de ${p.nome}?`, a: `Garantia padrão de 5 anos contra defeitos de fabricação e instalação, e 24 meses para a selagem hidrofugante. Após esse período, a re-selagem profissional custa entre R$ 18 e R$ 35/m² conforme a cidade.` },
          { q: `${p.nome} pode ser usado em área externa?`, a: `${p.categoria === "Granito" || p.categoria === "Quartzito" ? `Sim. O ${p.nome} é excelente para áreas externas — fachadas, churrasqueiras, áreas gourmet cobertas, escadas e peitoris. Recomendamos acabamento flameado ou levigado para áreas molhadas (antiderrapante).` : p.categoria === "Mármore" ? `O ${p.nome} pode ser usado em área externa coberta, mas perde brilho com chuva ácida e raios UV. Prefira granito ou quartzito em áreas descobertas.` : `Quartzo engenheirado não é recomendado para área externa descoberta — o sol amarela a resina ao longo do tempo. Use apenas em áreas cobertas.`}` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 bg-secondary/40">
        <h2 className="font-serif text-3xl text-foreground">{p.nome}: variações de preço, acabamento e aplicação</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          O <strong>{p.nome}</strong> é um {p.categoria.toLowerCase()} {p.origem.toLowerCase().includes("itália") || p.origem.toLowerCase().includes("espanha") || p.origem.toLowerCase().includes("grécia") || p.origem.toLowerCase().includes("turquia") ? "importado" : "nacional"} de {p.origem}, com cor predominante {p.cor.toLowerCase()} e preço inicial de <strong>R$ {p.precoMin.toLocaleString("pt-BR")}/m²</strong>. Abaixo reunimos as principais variações de preço, acabamento e aplicação para você comparar com outras pedras e fechar o melhor orçamento.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl text-foreground">Preço por acabamento</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• {p.nome} polido: R$ {p.precoMin.toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} escovado: R$ {Math.round(p.precoMin * 1.08).toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} levigado: R$ {Math.round(p.precoMin * 1.12).toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} flameado: R$ {Math.round(p.precoMin * 1.18).toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} chapa 3cm: R$ {Math.round(p.precoMin * 1.22).toLocaleString("pt-BR")}/m²</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-foreground">Preço instalado por ambiente</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• Bancada de cozinha (6m²): R$ {(p.precoMin * 6 * 1.25).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</li>
              <li>• Bancada de banheiro (1,5m²): R$ {(p.precoMin * 1.5 * 1.3).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</li>
              <li>• Ilha de cozinha (3m²): R$ {(p.precoMin * 3 * 1.3).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</li>
              <li>• Churrasqueira gourmet (4m²): R$ {(p.precoMin * 4 * 1.25).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}</li>
              <li>• Soleira (m linear): R$ {Math.round(p.precoMin * 0.18).toLocaleString("pt-BR")}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-foreground">{p.nome} em capitais</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>• {p.nome} São Paulo: a partir de R$ {p.precoMin.toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} Rio de Janeiro: a partir de R$ {Math.round(p.precoMin * 1.05).toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} Belo Horizonte: a partir de R$ {Math.round(p.precoMin * 0.96).toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} Brasília: a partir de R$ {Math.round(p.precoMin * 1.04).toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} Salvador: a partir de R$ {Math.round(p.precoMin * 1.02).toLocaleString("pt-BR")}/m²</li>
              <li>• {p.nome} Curitiba: a partir de R$ {Math.round(p.precoMin * 1.01).toLocaleString("pt-BR")}/m²</li>
            </ul>
          </div>
        </div>

        <h3 className="mt-12 font-serif text-2xl text-foreground">{p.nome}: comparativos mais buscados</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          Antes de fechar o orçamento, muita gente compara o {p.nome} com outras pedras populares: <strong>{p.nome} vs Granito São Gabriel</strong>, <strong>{p.nome} vs Granito Preto Absoluto</strong>, <strong>{p.nome} vs Mármore Carrara</strong>, <strong>{p.nome} vs Calacatta Gold</strong>, <strong>{p.nome} vs Quartzito Taj Mahal</strong> e <strong>{p.nome} vs Quartzo Branco</strong>. Cada comparativo tem suas vantagens — em geral granitos vencem em resistência ao calor, mármores em sofisticação visual, quartzitos em equilíbrio entre beleza e dureza, e quartzos engenheirados em manutenção zero.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="font-serif text-2xl text-foreground">Termos buscados sobre {p.nome}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Resumo das principais dúvidas e variações de busca atendidas por esta página — preços, acabamentos, aplicações, comparativos e regiões de entrega.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {p.keywords.map((k: string) => (
            <li key={k} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              {k}
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
