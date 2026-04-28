import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft } from "lucide-react";
import hero from "@/assets/hero-granite.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import kitchen from "@/assets/kitchen-luxury.webp";
import siena from "@/assets/granite-siena.webp";

type Post = {
  title: string;
  desc: string;
  img: string;
  cat: string;
  date: string;
  body: { h?: string; p?: string; ul?: string[] }[];
};

const POSTS: Record<string, Post> = {
  "como-escolher-granito-marmore-quartzo": {
    title: "Como escolher entre granito, mármore e quartzo",
    desc: "Guia completo para decidir o material ideal para sua bancada, banheiro ou área gourmet.",
    img: siena,
    cat: "Guia de Escolha",
    date: "10 de abril de 2026",
    body: [
      { p: "Escolher entre granito, mármore e quartzo é a decisão mais importante de qualquer projeto de marmoraria. Cada pedra tem características únicas de resistência, beleza e manutenção que impactam diretamente o uso diário e o investimento a longo prazo." },
      { h: "Granito: a pedra mais resistente para cozinha" },
      { p: "O granito é uma rocha ígnea formada pelo resfriamento lento do magma, o que garante alta densidade e dureza. É a escolha número um para bancadas de cozinha porque suporta calor direto, resiste a riscos e, quando selado, não absorve líquidos." },
      { ul: [
        "Cores mais vendidas: São Gabriel, Branco Siena, Preto Absoluto, Cinza Andorinha",
        "Acabamentos: polido, escovado, flameado e levigado",
        "Indicado para: cozinhas, churrasqueiras, áreas externas",
      ] },
      { h: "Mármore: sofisticação atemporal" },
      { p: "O mármore é uma rocha metamórfica de calcário cristalizado. Seus veios únicos transformam qualquer ambiente em um espaço de luxo. É mais poroso que o granito, exigindo selagem e cuidados, mas o resultado visual é inigualável." },
      { ul: [
        "Cores mais vendidas: Branco Carrara, Calacatta Gold, Travertino, Onix",
        "Indicado para: banheiros, lavabos, ilhas decorativas, fachadas",
        "Atenção: evitar contato direto com ácidos (limão, vinagre)",
      ] },
      { h: "Quartzo: engenharia e zero manutenção" },
      { p: "O quartzo é uma pedra de engenharia composta por 93% de quartzo natural e 7% de resinas e pigmentos. Tem zero porosidade, visual uniforme e dispensa selagem. É a queridinha das cozinhas modernas." },
      { ul: [
        "Marcas premium: Silestone, Caesarstone, Nanoglass, Dekton",
        "Indicado para: bancadas grandes sem emendas, cozinhas corridas",
        "Vantagem: praticamente não mancha e tem visual contínuo",
      ] },
      { h: "Comparativo rápido" },
      { p: "Para máxima resistência ao calor → granito. Para o visual mais sofisticado → mármore. Para zero manutenção → quartzo. Em projetos mistos é comum combinar materiais: granito na bancada de cozinha, mármore no banheiro e quartzo na ilha." },
      { h: "Conclusão" },
      { p: "Não existe pedra ‘melhor’ — existe a pedra certa para o seu projeto. Antes de decidir, considere o uso (cozinha intensa, decorativo, área molhada), o estilo arquitetônico e o orçamento. Solicite nosso orçamento para receber sugestões personalizadas." },
    ],
  },
  "manutencao-pedras-naturais": {
    title: "Manutenção de pedras naturais: o guia definitivo",
    desc: "Como limpar, selar e preservar granito, mármore e quartzo por décadas.",
    img: kitchen,
    cat: "Manutenção",
    date: "5 de abril de 2026",
    body: [
      { p: "Pedras naturais bem cuidadas duram décadas mantendo o brilho do primeiro dia. O segredo está na rotina simples de limpeza e em produtos adequados — alguns produtos comuns no mercado podem causar danos irreversíveis." },
      { h: "Limpeza diária" },
      { ul: [
        "Use pano úmido com sabão neutro ou detergente diluído",
        "Seque imediatamente para evitar marcas de água",
        "Evite esponjas abrasivas e palhas de aço",
      ] },
      { h: "O que NUNCA usar" },
      { ul: [
        "Ácido muriático, água sanitária pura, removedores de calcário",
        "Produtos com amônia em mármores claros",
        "Esponja com lado verde — risca o polimento",
      ] },
      { h: "Selagem: a cada quanto tempo?" },
      { p: "Granito: a cada 2 a 3 anos. Mármore: anualmente. Quartzo: dispensa selagem. A selagem profissional aplica resina hidrofugante que preenche os micro-poros da pedra, impedindo a absorção de líquidos." },
      { h: "Removendo manchas comuns" },
      { ul: [
        "Vinho/café no mármore: pasta de bicarbonato + água oxigenada por 24h",
        "Gordura: detergente neutro morno + pano macio",
        "Cal/sabão: limpador específico para pedra natural (pH neutro)",
      ] },
      { h: "Brilho restaurador" },
      { p: "Para devolver o brilho original, aplicamos polimento técnico com discos diamantados. Indicado a cada 5 a 10 anos em bancadas de uso intenso. O serviço é feito sem remoção da peça." },
    ],
  },
  "tendencias-marmoraria-2026": {
    title: "Tendências de marmoraria 2026: cores, acabamentos e estilos",
    desc: "Quartzitos exóticos, Calacatta, levigados e bancadas monolíticas dominam o ano.",
    img: calacatta,
    cat: "Tendências",
    date: "1 de abril de 2026",
    body: [
      { p: "O ano de 2026 marca a consolidação da pedra natural como elemento central da arquitetura residencial de alto padrão. Bancadas monolíticas, quartzitos exóticos e acabamentos foscos são protagonistas dos projetos mais premiados." },
      { h: "1. Quartzitos exóticos" },
      { p: "Taj Mahal, Patagônia e Mont Blanc são os mais procurados. Combinam a beleza visual do mármore com a resistência do granito — ideais para bancadas de luxo em cozinhas gourmet." },
      { h: "2. Mármore Calacatta Gold" },
      { p: "Os veios dourados em fundo branco continuam sendo a estrela dos projetos sofisticados. Aplicação em bancadas, painéis de TV, lareiras e fachadas de móveis." },
      { h: "3. Bancadas monolíticas (waterfall)" },
      { p: "A tendência de descer o tampo até o piso, criando o efeito ‘cachoeira’, está em alta. Exige veios contínuos e execução precisa de marmorista experiente." },
      { h: "4. Acabamentos levigados e amanteigados" },
      { p: "O brilho espelhado dá lugar ao toque aveludado. Acabamentos levigado e leather (couro) trazem sofisticação minimalista." },
      { h: "5. Cores escuras com veios marcantes" },
      { p: "Mármore Nero Marquina, granito Preto Absoluto e quartzitos azuis estão em todos os mood boards de 2026. Combinam com metais dourados e madeiras claras." },
      { h: "6. Pias esculpidas direto na chapa" },
      { p: "Sem emendas visíveis, a pia esculpida é o ponto alto dos banheiros premium. Demanda chapa única e talhamento manual." },
      { h: "Conclusão" },
      { p: "2026 valoriza autenticidade, materiais nobres e execução artesanal. A pedra deixa de ser apenas funcional para se tornar protagonista escultural do projeto." },
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Artigo não encontrado" }] };
    const url = `https://marmorarias.shop/blog/${loaderData.slug}`;
    return {
      meta: [
        { title: `${post.title} | Blog Marmorarias.shop` },
        { name: "description", content: post.desc },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.desc },
        { property: "og:image", content: `https://marmorarias.shop${post.img}` },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:image", content: `https://marmorarias.shop${post.img}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.desc,
            image: `https://marmorarias.shop${post.img}`,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Marmorarias.shop" },
            publisher: {
              "@type": "Organization",
              name: "Marmorarias.shop",
              logo: { "@type": "ImageObject", url: "https://marmorarias.shop/logo.png" },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-5xl">Artigo não encontrado</h1>
        <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-gold">← Voltar ao Blog</Link>
      </div>
    </PageLayout>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
      <article>
        <header className="relative isolate overflow-hidden bg-onyx text-cream">
          <img src={post.img} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/60 to-onyx/95" />
          <div className="relative mx-auto max-w-4xl px-6 py-32">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-cream">
              <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao Blog
            </Link>
            <p className="mt-8 eyebrow text-gold">{post.cat} • {post.date}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-cream/80">{post.desc}</p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-20">
          {post.body.map((b, i) => {
            if (b.h) return <h2 key={i} className="mt-12 font-serif text-3xl text-foreground">{b.h}</h2>;
            if (b.ul) return (
              <ul key={i} className="mt-6 space-y-2 text-muted-foreground">
                {b.ul.map((li) => <li key={li}>• {li}</li>)}
              </ul>
            );
            return <p key={i} className="mt-6 leading-relaxed text-muted-foreground">{b.p}</p>;
          })}

          <div className="mt-16 border-t border-border pt-10 text-center">
            <p className="eyebrow text-gold">Pronto para começar?</p>
            <h3 className="mt-4 font-serif text-3xl">Solicite seu orçamento</h3>
            <Link to="/contato" className="mt-6 inline-flex items-center bg-foreground px-10 py-4 text-xs uppercase tracking-[0.25em] text-background hover:bg-gold hover:text-onyx">
              Falar com Especialista
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
