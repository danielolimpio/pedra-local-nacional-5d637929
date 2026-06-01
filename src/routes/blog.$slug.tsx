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
  "quartzito-taj-mahal-preco-m2": {
    title: "Quartzito Taj Mahal: preço por m², características e onde aplicar",
    desc: "Tudo sobre o quartzito Taj Mahal — preço atualizado, comparativo com Calacatta Gold e dicas de aplicação em bancadas e ilhas.",
    img: calacatta,
    cat: "Quartzito",
    date: "25 de maio de 2026",
    body: [
      { p: "O quartzito Taj Mahal é a pedra mais procurada de 2026 para bancadas de luxo. Combina o visual delicado do mármore Calacatta Gold com a resistência mecânica do granito, sem a porosidade típica dos mármores. Neste guia você descobre o preço por m², onde aplicar e como diferenciar do mármore." },
      { h: "Quanto custa o quartzito Taj Mahal por m²?" },
      { p: "Em 2026 o quartzito Taj Mahal polido custa entre R$ 1.690 e R$ 2.300 por metro quadrado, dependendo da espessura (2cm ou 3cm), do desenho dos veios e da origem da chapa. Taj Mahal Premium (chapas com veios mais marcantes) chega a R$ 2.800/m²." },
      { h: "Quartzito Taj Mahal x Mármore Calacatta Gold" },
      { ul: [
        "Resistência a manchas: Taj Mahal é muito superior — menor porosidade",
        "Visual: Calacatta tem veios dourados mais marcantes; Taj Mahal tem fundo bege/dourado uniforme",
        "Preço: Taj Mahal custa em média 15-20% mais que o Calacatta importado",
        "Manutenção: Taj Mahal exige menos cuidados que o mármore",
      ] },
      { h: "Onde aplicar o Taj Mahal" },
      { p: "Ideal para bancadas de cozinha gourmet, ilhas de cozinha americana, lavabos de alto padrão, painéis de TV e revestimento de lareiras. Sua resistência permite uso intenso sem comprometer o visual." },
      { h: "Como cuidar do quartzito Taj Mahal" },
      { p: "Selagem hidrofugante a cada 24 meses, limpeza diária com pano úmido e sabão neutro, e evitar contato direto com ácidos fortes. Diferente do mármore, suporta vinho e café sem manchas profundas se limpo rapidamente." },
    ],
  },
  "diferenca-granito-marmore-quartzo-quartzito": {
    title: "Granito, mármore, quartzo ou quartzito: qual é o melhor?",
    desc: "Comparativo completo entre as 4 pedras mais usadas em bancadas: resistência, preço, manutenção e aplicação ideal.",
    img: hero,
    cat: "Guia de Escolha",
    date: "20 de maio de 2026",
    body: [
      { p: "A confusão entre granito, mármore, quartzo e quartzito é a dúvida número um de quem está reformando a cozinha. Cada pedra tem origem diferente, propriedades distintas e indicação específica. Veja qual é a melhor para o seu projeto." },
      { h: "Granito (rocha natural ígnea)" },
      { p: "Formado pelo resfriamento do magma. É a pedra mais resistente para cozinhas — suporta calor direto, baixa porosidade e custo acessível (R$ 420-650/m²). Ideal para bancadas, pias e churrasqueiras." },
      { h: "Mármore (rocha natural metamórfica)" },
      { p: "Calcário cristalizado. Tem o visual mais sofisticado com veios únicos, mas é poroso e sensível a ácidos. Indicado para banheiros, lavabos e revestimentos decorativos. Preço de R$ 720 a R$ 1.450/m²." },
      { h: "Quartzo (pedra sintética de engenharia)" },
      { p: "Composto por 93% de quartzo natural + 7% de resinas. Zero porosidade, visual uniforme, dispensa selagem. Não suporta calor direto. Ideal para bancadas modernas longas. Preço de R$ 1.120 a R$ 1.490/m²." },
      { h: "Quartzito (rocha natural metamórfica)" },
      { p: "Areia cristalizada sob altíssima pressão. Combina o visual do mármore com a resistência do granito. É o premium dos premiums. Preço de R$ 1.690 a R$ 2.800/m². Ideal para bancadas de alto luxo." },
      { h: "Comparativo final" },
      { ul: [
        "Mais resistente ao calor: Granito",
        "Visual mais sofisticado: Mármore Calacatta Gold ou Quartzito Taj Mahal",
        "Menor manutenção: Quartzo",
        "Melhor custo-benefício: Granito São Gabriel",
        "Para projetos premium: Quartzito Taj Mahal",
      ] },
    ],
  },
  "como-medir-bancada-cozinha": {
    title: "Como medir bancada de cozinha corretamente para orçamento",
    desc: "Passo a passo para tirar as medidas da bancada e receber um orçamento preciso de marmoraria.",
    img: kitchen,
    cat: "Guia Prático",
    date: "15 de maio de 2026",
    body: [
      { p: "Medir a bancada de cozinha corretamente é o primeiro passo para receber um orçamento real de marmoraria. Erros de medida geram retrabalho, custo extra e atraso na entrega. Veja como medir como um profissional." },
      { h: "Materiais necessários" },
      { ul: [
        "Trena de pelo menos 5 metros",
        "Caneta e bloco de anotações (ou app de celular)",
        "Esquadro pequeno para verificar cantos",
      ] },
      { h: "Passo 1: meça largura e profundidade" },
      { p: "Anote o comprimento total da bancada em centímetros, em pelo menos 3 pontos diferentes (início, meio e fim) — paredes raramente são 100% retas. Use a maior medida. Profundidade padrão é 60cm, mas confirme." },
      { h: "Passo 2: identifique recortes" },
      { ul: [
        "Cooktop: anote modelo e medida do vão (geralmente 56x49 cm)",
        "Cuba: simples (40x34cm) ou dupla (80x40cm)",
        "Torneira: posição e quantidade de furos",
      ] },
      { h: "Passo 3: meça frontões e saias" },
      { p: "Frontão é a peça vertical atrás da bancada (10cm padrão). Saia é a peça frontal embaixo (8cm padrão). Indique se deseja incluir e qual altura." },
      { h: "Passo 4: tire fotos do ambiente" },
      { p: "Fotos ajudam o marmorista a entender o projeto, prever encaixes em ângulos e sugerir a melhor pedra para o ambiente. Envie pelo menos 3 ângulos diferentes." },
      { h: "Passo 5: envie tudo para o orçamento" },
      { p: "Com as medidas, recortes e fotos, retornamos em até 24h com tabela de preço por m², sugestão de material e prazo de entrega. Após a aprovação, a visita técnica para gabarito definitivo é agendada." },
    ],
  },
  "preco-marmoraria-2026-tabela": {
    title: "Quanto custa uma marmoraria em 2026? Tabela atualizada",
    desc: "Tabela de preços de marmoraria 2026: granito, mármore, quartzo, instalação, recortes e frete por região.",
    img: hero,
    cat: "Preços",
    date: "10 de maio de 2026",
    body: [
      { p: "Os preços de marmoraria variam por tipo de pedra, espessura, acabamento, localidade e complexidade do projeto. Veja a tabela atualizada para planejar seu orçamento em 2026." },
      { h: "Granitos nacionais (preço por m²)" },
      { ul: [
        "Granito Cinza Andorinha — R$ 420",
        "Granito São Gabriel — R$ 480",
        "Granito Branco Siena — R$ 520",
        "Granito Preto Absoluto — R$ 590",
        "Granito Via Láctea — R$ 650",
      ] },
      { h: "Mármores (preço por m²)" },
      { ul: [
        "Mármore Travertino Romano — R$ 720",
        "Mármore Branco Carrara — R$ 890",
        "Mármore Nero Marquina — R$ 1.180",
        "Mármore Calacatta Gold — R$ 1.450",
      ] },
      { h: "Quartzos e quartzitos (preço por m²)" },
      { ul: [
        "Quartzo Cinza — R$ 1.120",
        "Quartzo Branco — R$ 1.180",
        "Quartzo Calacata — R$ 1.490",
        "Quartzito Taj Mahal — R$ 1.690",
        "Quartzito Mont Blanc — R$ 1.890",
      ] },
      { h: "Serviços e recortes" },
      { ul: [
        "Recorte cooktop — R$ 180 por unidade",
        "Recorte cuba simples — R$ 220",
        "Recorte cuba dupla — R$ 380",
        "Frontão 10cm — R$ 90 por metro linear",
        "Instalação (Grande SP) — R$ 350 a R$ 800",
        "Pia esculpida em mármore — R$ 1.200 a R$ 2.800",
      ] },
      { h: "Quanto custa uma cozinha completa?" },
      { p: "Para uma cozinha americana de 8m² com bancada principal + ilha em granito São Gabriel, o investimento médio fica entre R$ 6.500 e R$ 9.000. Em quartzo branco, entre R$ 12.000 e R$ 16.000. Em Calacatta Gold ou Taj Mahal, entre R$ 18.000 e R$ 28.000." },
      { h: "Como reduzir o custo?" },
      { p: "Opte por granito nacional, padronize espessuras (2cm para banheiros), reduza recortes desnecessários e contrate marmoraria com instalação inclusa. Solicite nosso orçamento personalizado para sua obra." },
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
          {post.body.map((b: { h?: string; p?: string; ul?: string[] }, i: number) => {
            if (b.h) return <h2 key={i} className="mt-12 font-serif text-3xl text-foreground">{b.h}</h2>;
            if (b.ul) return (
              <ul key={i} className="mt-6 space-y-2 text-muted-foreground">
                {b.ul.map((li: string) => <li key={li}>• {li}</li>)}
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
