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
import { MapPin, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/marmoraria/$cidade")({
  loader: ({ params }) => {
    const cidade = cidades.find((c) => c.slug === params.cidade);
    if (!cidade) throw notFound();
    return { cidade };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.cidade;
    if (!c) return { meta: [{ title: "Guia de Marmorarias" }] };
    const url = `https://marmorarias.shop/marmoraria/${c.slug}`;
    const title = `Marmorarias em ${c.nome} (${c.uf}): preço m², granito, mármore, quartzo e quartzito`;
    const desc = `Guia de marmorarias em ${c.nome}/${c.uf}: preço por m² de granito São Gabriel, Preto Absoluto, Branco Siena, mármore Carrara, Calacatta Gold, Nero Marquina, quartzo branco e quartzito Taj Mahal. Bancada de cozinha, banheiro, ilha, churrasqueira, soleira e pia esculpida. Prazos, bairros e como achar marmoraria perto de você em ${c.nome}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `marmoraria ${c.nome}, marmorarias em ${c.nome}, marmoraria perto de mim ${c.nome}, marmoraria ${c.uf}, melhor marmoraria ${c.nome}, marmoraria barata ${c.nome}, orçamento marmoraria ${c.nome}, preço marmoraria ${c.nome} m2, granito ${c.nome}, granito sao gabriel ${c.nome}, granito preto absoluto ${c.nome} preço m2, granito branco siena ${c.nome}, granito verde ubatuba ${c.nome}, granito amarelo ${c.nome}, mármore ${c.nome}, mármore carrara ${c.nome}, mármore calacatta gold ${c.nome}, mármore nero marquina preço m2 ${c.nome}, mármore travertino ${c.nome}, quartzo ${c.nome}, quartzo branco ${c.nome}, silestone ${c.nome}, quartzito ${c.nome}, quartzito taj mahal ${c.nome}, bancada de granito ${c.nome}, bancada de cozinha ${c.nome}, bancada de banheiro ${c.nome}, pia de mármore ${c.nome}, pia esculpida ${c.nome}, soleira de granito ${c.nome}, peitoril ${c.nome}, escada de granito ${c.nome}, ilha de cozinha ${c.nome}, churrasqueira em pedra ${c.nome}, fachada de pedra ${c.nome}, ${c.bairros.slice(0, 4).map((b: string) => `marmoraria ${b}`).join(", ")}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:image", content: `https://marmorarias.shop${hero}` },
        { property: "og:type", content: "article" },
        { name: "twitter:image", content: `https://marmorarias.shop${hero}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: desc,
            image: `https://marmorarias.shop${hero}`,
            author: { "@type": "Organization", name: "Marmorarias.shop" },
            publisher: { "@type": "Organization", name: "Marmorarias.shop" },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: "https://marmorarias.shop/" },
              { "@type": "ListItem", position: 2, name: "Marmorarias por cidade", item: "https://marmorarias.shop/marmoraria" },
              { "@type": "ListItem", position: 3, name: `Marmorarias em ${c.nome}`, item: url },
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
  const mapsHref = `https://www.google.com/maps/search/marmoraria+em+${encodeURIComponent(c.nome + " " + c.uf)}`;
  const mapsBairros = c.bairros.slice(0, 4);

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Marmorarias por cidade", to: "/marmoraria" }, { label: c.nome }]} />
      <PageHero
        eyebrow={`Guia ${c.uf}`}
        title={`Marmorarias em ${c.nome}`}
        subtitle={`Preços médios de granito, mármore, quartzo e quartzito em ${c.nome}, prazos típicos de execução, bairros atendidos e como escolher a melhor marmoraria perto de você.`}
        image={hero}
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
          <div>
            <p className="eyebrow text-gold">Encontrar marmoraria em {c.nome}</p>
            <h2 className="mt-4 font-serif text-3xl">Veja marmorarias ativas em {c.nome} no Google Maps</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              O jeito mais rápido de encontrar uma marmoraria perto de você em {c.nome} é
              consultar o Google Maps — você vê avaliações reais, fotos de bancadas já
              instaladas, horário de funcionamento e endereço atualizado de cada empresa
              em {c.nome}/{c.uf}. Selecione pelos comentários recentes e pelo número de
              estrelas para escolher com segurança.
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gold px-8 py-4 text-xs uppercase tracking-[0.25em] text-onyx hover:bg-cream"
            >
              <MapPin className="h-4 w-4" />
              Ver marmorarias em {c.nome} no Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <div className="mt-6 flex flex-wrap gap-2">
              {mapsBairros.map((b: string) => (
                <a
                  key={b}
                  href={`https://www.google.com/maps/search/marmoraria+${encodeURIComponent(b + " " + c.nome)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.18em] border border-border px-3 py-2 hover:border-gold hover:text-gold"
                >
                  Marmoraria em {b}
                </a>
              ))}
            </div>
          </div>
          <aside className="border border-border bg-secondary p-8">
            <p className="eyebrow">Aviso de transparência</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Marmorarias.shop é um <strong>portal informativo</strong> sobre pedras
              naturais, preços e tendências de marmoraria. Não somos uma marmoraria
              física em {c.nome} — quando você clicar em "Ver no Google Maps", será
              direcionado para a busca oficial do Google com as marmorarias reais
              da sua região.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <SectionHeader
          eyebrow="Catálogo de Referência"
          title={`Pedras mais procuradas em ${c.nome}`}
          description={`As pedras mais pedidas em marmorarias de ${c.nome}/${c.uf}. ${c.diferencial}.`}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StoneCard image={saoGabriel} name="Granito São Gabriel" category="Granito" price="R$ 480" to="/granito" alt={`Granito São Gabriel para bancada em ${c.nome}`} />
          <StoneCard image={carrara} name="Mármore Carrara" category="Mármore" price="R$ 890" to="/marmore" alt={`Mármore Carrara para banheiro em ${c.nome}`} />
          <StoneCard image={calacatta} name="Calacatta Gold" category="Mármore" price="R$ 1.450" to="/marmore" alt={`Mármore Calacatta Gold em ${c.nome}`} />
          <StoneCard image={quartz} name="Quartzo Branco" category="Quartzo" price="R$ 1.180" to="/quartzo" alt={`Bancada de quartzo branco em ${c.nome}`} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <article>
            <h2 className="font-serif text-3xl">Como escolher marmoraria em {c.nome}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Procurando a melhor marmoraria em <strong>{c.nome}</strong>? Antes de
              fechar com qualquer empresa, vale comparar pelo menos 3 orçamentos.
              Marmorarias em {c.nome} variam bastante de preço por m² conforme a
              localização, o tipo de pedra (granito, mármore, quartzo ou quartzito)
              e os recortes necessários para a sua bancada.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Use o Google Maps para ver as marmorarias mais bem avaliadas perto
              de você, leia comentários recentes e confira fotos de projetos
              entregues em {c.nome} e bairros como {c.bairros.slice(0, 3).join(", ")}.
              Prefira empresas com mais de 4 estrelas, com atendimento físico e
              que mostrem portfólio de bancadas instaladas.
            </p>
            <h3 className="mt-8 font-serif text-2xl">Bairros de {c.nome} com mais marmorarias</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-muted-foreground">
              {c.bairros.map((b: string) => (
                <li key={b} className="text-sm">• Marmoraria em {b}</li>
              ))}
            </ul>
          </article>

          <aside className="bg-secondary p-10">
            <p className="eyebrow">Faixa de preços em {c.nome}</p>
            <h3 className="mt-4 font-serif text-3xl">Quanto custa a bancada por m² em {c.nome}</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>• Granito São Gabriel: R$ 480 – R$ 580/m²</li>
              <li>• Granito Branco Siena: R$ 520 – R$ 640/m²</li>
              <li>• Granito Preto Absoluto: R$ 590 – R$ 720/m²</li>
              <li>• Mármore Carrara: R$ 890 – R$ 1.180/m²</li>
              <li>• Mármore Calacatta Gold: R$ 1.450 – R$ 1.890/m²</li>
              <li>• Quartzo Branco: R$ 1.180 – R$ 1.490/m²</li>
              <li>• Quartzito Taj Mahal: R$ 1.690 – R$ 2.300/m²</li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Valores médios pesquisados em marmorarias de {c.nome}/{c.uf} para
              referência. Confirme com a marmoraria escolhida no Google Maps —
              recortes, instalação e frete são orçados à parte.
            </p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx"
            >
              Comparar marmorarias em {c.nome}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </aside>
        </div>
      </section>

      <FAQ
        title={`Perguntas frequentes — Marmorarias em ${c.nome}`}
        items={[
          { q: `Como encontrar marmoraria perto de mim em ${c.nome}?`, a: `O caminho mais rápido é usar o Google Maps: busque por "marmoraria em ${c.nome}" e filtre por avaliações, distância e bairro. Empresas com mais de 4 estrelas e comentários recentes costumam ser as mais ativas. Use também nosso botão "Ver no Google Maps" para abrir a busca já configurada para ${c.nome}/${c.uf}.` },
          { q: `Quanto custa bancada de granito em ${c.nome}?`, a: `Em ${c.nome}, o granito São Gabriel parte de R$ 480/m², o Branco Siena R$ 520/m² e o Preto Absoluto R$ 590/m². São faixas de referência praticadas pelas marmorarias da região. Recortes para cooktop e cuba, instalação e frete dentro de ${c.nome} são orçados à parte e variam conforme a empresa escolhida.` },
          { q: `Qual o preço do granito Preto Absoluto por m² em ${c.nome}?`, a: `O granito Preto Absoluto em ${c.nome} fica entre R$ 590 e R$ 720/m² para chapa polida de 2cm. Em 3cm o valor sobe para R$ 720 a R$ 860/m². Acabamento escovado ou flameado tem acréscimo de 10% a 18%.` },
          { q: `Quanto custa mármore Carrara em ${c.nome}?`, a: `O mármore Carrara polido em ${c.nome} fica entre R$ 890 e R$ 1.180/m². O Calacatta Gold parte de R$ 1.450/m² e o Nero Marquina de R$ 1.180/m². Mármores importados têm 60 a 90 dias de prazo se a chapa não estiver no estoque local.` },
          { q: `Quanto custa bancada de quartzo em ${c.nome}?`, a: `Quartzo engenheirado (Silestone, Caesarstone, Nanoglass) em ${c.nome} parte de R$ 1.180/m² no branco e R$ 1.220/m² no preto. Modelos imitando Calacatta com veios chegam a R$ 1.380/m². Por ter zero porosidade, dispensa selagem.` },
          { q: `Qual o prazo médio de uma marmoraria em ${c.nome}?`, a: `O prazo típico em ${c.nome} é de 12 a 20 dias úteis: cerca de 3 dias para o gabarito após aprovação, 7 a 12 dias para corte e acabamento, e 1 a 2 dias para a instalação. Marmorarias maiores costumam ter prazo mais previsível.` },
          { q: `É possível fazer pia esculpida em mármore em ${c.nome}?`, a: `Sim — várias marmorarias em ${c.nome} executam pias esculpidas direto na chapa de mármore Carrara, Calacatta Gold ou granito, com acabamento monolítico sem emendas. Peça portfólio fotográfico antes de fechar.` },
          { q: `Quais bairros de ${c.nome} têm marmoraria?`, a: `Marmorarias estão distribuídas por toda ${c.nome}, com concentração maior em ${c.bairros.slice(0, 5).join(", ")} e demais regiões comerciais. Para encontrar a mais próxima de você, use o filtro de distância no Google Maps.` },
          { q: `Qual a garantia padrão das marmorarias em ${c.nome}?`, a: `A garantia padrão de mercado é de 5 anos para defeitos de fabricação e instalação, e 24 meses para a selagem hidrofugante. Sempre confirme as condições por escrito antes de aprovar o orçamento.` },
          { q: `Quanto custa quartzito Taj Mahal em ${c.nome}?`, a: `O quartzito Taj Mahal em ${c.nome} parte de R$ 1.690/m² (chapa polida 2cm) e chega a R$ 2.300/m² em 3cm com veios premium. É o quartzito mais procurado para cozinhas de alto padrão por unir beleza de mármore com resistência de granito.` },
          { q: `Marmoraria em ${c.nome} faz instalação no mesmo dia?`, a: `Instalação no mesmo dia da entrega só é possível para projetos pequenos pré-medidos (uma soleira, um peitoril). Bancadas precisam de gabarito prévio, corte e acabamento — fluxo padrão de 12 a 20 dias úteis em ${c.nome}.` },
          { q: `Vale a pena comprar chapa inteira em ${c.nome}?`, a: `Sim, quando o projeto consome mais de 4m² da mesma pedra. A chapa inteira em ${c.nome} sai 10% a 15% mais barata por m² do que comprar fracionado, e você fica com sobras para futuros reparos.` },
          { q: `O Marmorarias.shop é uma marmoraria em ${c.nome}?`, a: `Não. O Marmorarias.shop é um portal informativo sobre pedras, preços e tendências de marmoraria. Não realizamos venda nem instalação — direcionamos você para o Google Maps, onde estão listadas as marmorarias reais que atendem em ${c.nome}/${c.uf}.` },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="font-serif text-2xl text-foreground">Termos relacionados a marmorarias em {c.nome}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Variações de busca cobertas por esta página — pedras, serviços, faixas de preço e bairros de {c.nome}.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {[
            `marmoraria ${c.nome}`, `marmoraria em ${c.nome}`, `marmorarias ${c.nome}`,
            `marmoraria perto de mim ${c.nome}`, `marmoraria ${c.nome} ${c.uf}`,
            `melhor marmoraria ${c.nome}`, `marmoraria barata ${c.nome}`,
            `marmoraria 24h ${c.nome}`, `marmoraria online ${c.nome}`,
            `orçamento marmoraria ${c.nome}`, `preço marmoraria ${c.nome}`,
            `bancada de granito ${c.nome}`, `bancada de mármore ${c.nome}`,
            `bancada de quartzo ${c.nome}`, `bancada de quartzito ${c.nome}`,
            `granito ${c.nome}`, `granito sao gabriel ${c.nome}`,
            `granito preto absoluto ${c.nome}`, `granito branco siena ${c.nome}`,
            `granito verde ubatuba ${c.nome}`, `granito amarelo ${c.nome}`,
            `mármore ${c.nome}`, `mármore carrara ${c.nome}`,
            `mármore calacatta ${c.nome}`, `mármore nero marquina ${c.nome}`,
            `mármore travertino ${c.nome}`, `quartzo ${c.nome}`,
            `quartzo branco ${c.nome}`, `silestone ${c.nome}`,
            `quartzito ${c.nome}`, `quartzito taj mahal ${c.nome}`,
            `pia de mármore ${c.nome}`, `pia esculpida ${c.nome}`,
            `soleira de granito ${c.nome}`, `peitoril de granito ${c.nome}`,
            `escada de granito ${c.nome}`, `churrasqueira em pedra ${c.nome}`,
            `ilha de cozinha ${c.nome}`, `bancada cozinha gourmet ${c.nome}`,
            `fachada de pedra ${c.nome}`, `revestimento de pedra ${c.nome}`,
            ...c.bairros.flatMap((b: string) => [
              `marmoraria ${b}`, `marmoraria ${b} ${c.nome}`,
              `bancada de granito ${b}`, `marmoraria perto ${b}`,
            ]),
          ].map((k) => (
            <li key={k} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              {k}
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}
