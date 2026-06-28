import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import hero from "@/assets/hero-granite.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import kitchen from "@/assets/kitchen-luxury.webp";
import siena from "@/assets/granite-siena.webp";
import escadaCover from "@/assets/blog-escada-granito-cover.jpg";
import escadaMid from "@/assets/blog-escada-marmore-mid.jpg";

type BodyBlock = {
  h?: string;
  p?: string;
  html?: string;
  ul?: string[];
  img?: { src: string; alt: string; caption?: string };
};

type Post = {
  title: string;
  desc: string;
  img: string;
  cat: string;
  date: string;
  readTime?: string;
  author?: string;
  body: BodyBlock[];
  faq?: { q: string; a: string }[];
  tags?: string[];
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
  "granito-ou-porcelanato-bancada": {
    title: "Granito ou porcelanato na bancada da cozinha: qual escolher em 2026",
    desc: "Comparativo entre granito e porcelanato para bancada de cozinha: resistência, preço, espessura, manutenção e prós e contras.",
    img: siena,
    cat: "Comparativo",
    date: "1 de junho de 2026",
    body: [
      { p: "A dúvida entre granito ou porcelanato na bancada da cozinha cresceu muito em 2026 com a chegada das chapas de porcelanato de 12mm. Cada material tem vantagens claras — e armadilhas. Veja qual escolher para seu projeto." },
      { h: "Granito: vantagens" },
      { ul: [
        "Resistência ao calor — pode receber panela quente direto",
        "Custo por m² menor: a partir de R$ 420 (Cinza Andorinha)",
        "Variedade enorme de cores nacionais",
        "Material que valoriza o imóvel na revenda",
      ] },
      { h: "Granito: pontos de atenção" },
      { ul: [
        "Exige selagem a cada 2-3 anos",
        "Espessura padrão de 2cm a 3cm — bancada mais 'pesada' visualmente",
        "Recortes só podem ser feitos por marmoraria",
      ] },
      { h: "Porcelanato: vantagens" },
      { ul: [
        "Espessura fina (6mm a 12mm) — visual contemporâneo",
        "Zero porosidade — não mancha com vinho, café ou óleo",
        "Imita mármore Calacatta, Patagônia, concreto e madeira",
        "Peso menor — facilita instalação em apartamentos",
      ] },
      { h: "Porcelanato: pontos de atenção" },
      { ul: [
        "Menor resistência a impacto — pode lascar nas bordas",
        "Cuba precisa ser sob bancada ou de sobrepor",
        "Preço de chapas grandes (320x160cm) chega a R$ 800-1.400/m²",
        "Exige instalador especializado em chapas finas",
      ] },
      { h: "Veredito 2026" },
      { p: "Para cozinhas de uso intenso e quem busca custo-benefício: granito. Para projetos de design contemporâneo, com visual marmorizado sem manutenção: porcelanato. Em projetos high-end, é cada vez mais comum combinar — granito na bancada principal, porcelanato na ilha." },
    ],
  },
  "como-limpar-marmore-manchado": {
    title: "Como tirar mancha de mármore: guia completo por tipo de mancha",
    desc: "Receitas testadas para tirar manchas de vinho, café, óleo, ferrugem e amarelado do mármore branco Carrara, Calacatta e Travertino.",
    img: calacatta,
    cat: "Manutenção",
    date: "28 de maio de 2026",
    body: [
      { p: "Mármore manchado tem solução — e na maioria dos casos você consegue tirar em casa, sem chamar profissional. O segredo é identificar o tipo de mancha e aplicar a técnica certa rapidamente. Veja o passo a passo para cada caso." },
      { h: "Antes de começar: regra de ouro" },
      { p: "Nunca use ácidos (limão, vinagre, água sanitária, removedor de calcário) no mármore branco. Eles dissolvem o carbonato de cálcio da pedra e criam uma mancha opaca permanente, que só sai com polimento técnico." },
      { h: "Mancha de vinho tinto" },
      { ul: [
        "Misture bicarbonato de sódio + água oxigenada 10 volumes até virar pasta",
        "Aplique sobre a mancha cobrindo com filme plástico",
        "Deixe agir por 24 horas e remova com pano úmido",
        "Repita se necessário — manchas antigas exigem 2-3 aplicações",
      ] },
      { h: "Mancha de café" },
      { p: "Mesmo procedimento do vinho: pasta de bicarbonato + água oxigenada por 12 a 24 horas. Para manchas muito antigas, troque a água oxigenada 10vol por 20vol (compra em farmácia)." },
      { h: "Mancha de óleo e gordura" },
      { ul: [
        "Cubra a mancha com talco neutro ou amido de milho",
        "Deixe 24h para o pó absorver o óleo",
        "Remova com pano seco e lave com sabão neutro",
      ] },
      { h: "Mancha de ferrugem" },
      { p: "Use removedor específico de ferrugem para pedra natural (encontrado em casas de marmoraria). Produtos caseiros à base de ácido oxálico funcionam, mas exigem cuidado — sempre teste em área escondida primeiro." },
      { h: "Mármore amarelado pelo tempo" },
      { p: "Esse é o desafio mais comum. O amarelado vem do envelhecimento natural + acúmulo de sujeira nos micro-poros. Solução: limpeza profunda com sabão de pH neutro, depois aplicação de selante hidrofugante. Para casos graves, polimento técnico devolve o branco original." },
      { h: "Quando chamar profissional" },
      { p: "Mancha de ácido (limão, vinagre), risco fundo, lasca ou amarelado em toda a peça — todos exigem polimento com discos diamantados, feito por marmoraria especializada." },
    ],
  },
  "quanto-custa-reformar-cozinha-2026": {
    title: "Quanto custa reformar a cozinha em 2026: tabela por tamanho",
    desc: "Custo médio para reformar cozinha pequena, média e grande em 2026, com bancada de granito, mármore ou quartzo, marcenaria, elétrica e mão de obra.",
    img: kitchen,
    cat: "Reforma",
    date: "20 de maio de 2026",
    body: [
      { p: "Reformar a cozinha é o investimento que mais valoriza um imóvel e o que mais gera dúvida na hora de orçar. Os preços de 2026 subiram em média 9% por causa do reajuste em insumos, mas ainda existem faixas claras de custo. Veja a tabela completa." },
      { h: "Cozinha pequena (até 6 m²)" },
      { ul: [
        "Bancada de granito São Gabriel + cuba simples: R$ 3.200 – R$ 4.800",
        "Bancada de quartzo branco: R$ 6.500 – R$ 9.000",
        "Marcenaria planejada (gabinetes + paneleiro): R$ 8.000 – R$ 16.000",
        "Elétrica + hidráulica + pintura: R$ 4.500 – R$ 8.000",
        "Total estimado: R$ 16.000 – R$ 32.000",
      ] },
      { h: "Cozinha média (8 a 12 m²) com ilha" },
      { ul: [
        "Bancada principal + ilha em granito: R$ 6.500 – R$ 11.000",
        "Mesmo projeto em Calacatta Gold: R$ 18.000 – R$ 28.000",
        "Marcenaria completa: R$ 18.000 – R$ 35.000",
        "Eletrodomésticos básicos (cooktop, forno, coifa): R$ 8.000 – R$ 18.000",
        "Total estimado: R$ 40.000 – R$ 95.000",
      ] },
      { h: "Cozinha grande / gourmet (15 m² ou mais)" },
      { ul: [
        "Bancada + ilha + churrasqueira em quartzito Taj Mahal: R$ 35.000 – R$ 65.000",
        "Marcenaria sob medida com ferragens premium: R$ 45.000 – R$ 90.000",
        "Eletrodomésticos linha premium: R$ 25.000 – R$ 60.000",
        "Iluminação, climatização e revestimentos: R$ 15.000 – R$ 35.000",
        "Total estimado: R$ 120.000 – R$ 250.000",
      ] },
      { h: "Como economizar sem perder qualidade" },
      { ul: [
        "Prefira granito nacional ao mármore importado: economia de 60%",
        "Padronize espessura de pedra em 2cm (apenas bancada de cozinha mantém 3cm)",
        "Reduza recortes desnecessários — cada recorte custa R$ 180 a R$ 380",
        "Compre eletrodomésticos em promoções de Black Friday",
        "Mantenha o ponto hidráulico onde está para evitar quebra de alvenaria",
      ] },
    ],
  },
  "ilha-de-cozinha-medidas-ideais": {
    title: "Ilha de cozinha: medidas ideais, distâncias e dicas de projeto",
    desc: "Medidas ideais para ilha de cozinha americana, distância para bancada, altura padrão, espessura da pedra e erros mais comuns no projeto.",
    img: kitchen,
    cat: "Projeto",
    date: "15 de maio de 2026",
    body: [
      { p: "A ilha de cozinha é o item mais desejado em projetos de reforma desde 2020. Mas projeto mal dimensionado vira armadilha: ilha pequena demais não comporta cooktop, ilha grande demais bloqueia circulação. Veja as medidas que profissionais usam." },
      { h: "Tamanho mínimo de uma ilha funcional" },
      { p: "120 cm x 80 cm é o mínimo para uma ilha com cooktop ou cuba. Abaixo disso, ela vira apenas um balcão decorativo. O ideal são 180 cm x 90 cm para acomodar cooktop + bancada de preparo + 2 banquetas." },
      { h: "Distância entre ilha e bancada/parede" },
      { ul: [
        "Mínimo absoluto: 90 cm — passagem de uma pessoa",
        "Confortável: 110 cm a 120 cm — duas pessoas se cruzam",
        "Cozinhas grandes: 130 cm a 140 cm",
        "Acima de 150 cm a cozinha perde fluidez",
      ] },
      { h: "Altura padrão" },
      { ul: [
        "Bancada de trabalho: 90 cm (padrão brasileiro)",
        "Bancada de refeição (banquetas): 105 cm",
        "Mesa integrada à ilha: 75 cm (altura de mesa de jantar)",
      ] },
      { h: "Espessura de pedra na ilha" },
      { p: "3 cm para ilhas que recebem cooktop ou cuba (resistência mecânica). 2 cm é suficiente para ilhas decorativas, mas exige alma estrutural embaixo. Para o efeito waterfall (pedra descendo até o chão), 2 cm é o ideal." },
      { h: "Cooktop ou cuba na ilha?" },
      { p: "Cooktop na ilha exige coifa de teto ou descendente — investimento de R$ 4.500 a R$ 15.000. Cuba na ilha demanda passagem hidráulica pelo piso. Avalie qual layout faz mais sentido para o seu uso antes de fechar o projeto." },
      { h: "Erros mais comuns" },
      { ul: [
        "Subdimensionar largura — ilha de 60 cm não comporta cooktop",
        "Esquecer tomadas embutidas no tampo",
        "Não prever espaço para banquetas (35 cm de profundidade extra)",
        "Pedra com veio interrompido nas emendas",
      ] },
    ],
  },
  "cuba-de-apoio-ou-sob-bancada": {
    title: "Cuba sob bancada, de apoio ou embutida: qual escolher",
    desc: "Diferença entre cuba sob bancada, de apoio (sobrepor) e embutida: estética, preço, dificuldade de instalação e indicações para cada caso.",
    img: kitchen,
    cat: "Projeto",
    date: "10 de maio de 2026",
    body: [
      { p: "O tipo de cuba define a estética da bancada e impacta o preço final em até R$ 800. Cada modelo tem indicação específica — escolher errado significa retrabalho. Veja as três opções principais e quando usar cada uma." },
      { h: "Cuba sob bancada (undermount)" },
      { p: "A cuba fica fixada por baixo da pedra, deixando a borda da bancada visível em todo o perímetro. Visual limpo e moderno, facilita a limpeza (basta passar o pano direto para dentro da cuba). Recorte em bisel custa R$ 220 a R$ 380 por unidade." },
      { ul: [
        "Indicação: cozinhas modernas, banheiros de alto padrão",
        "Combina com: granito, mármore, quartzo, quartzito",
        "Atenção: não funciona com porcelanato fino abaixo de 8 mm",
      ] },
      { h: "Cuba de apoio (sobrepor)" },
      { p: "A cuba fica apoiada em cima da bancada, com sua borda visível. Instalação simples, possibilidade de trocar a cuba sem mexer na pedra. Visual mais tradicional e dá destaque para a cuba (boa opção para cubas esculturais em lavabos)." },
      { ul: [
        "Indicação: lavabos decorativos, cozinhas rústicas",
        "Combina com: qualquer material de bancada",
        "Vantagem: troca da cuba sem mexer na pedra",
      ] },
      { h: "Cuba embutida (tradicional)" },
      { p: "A cuba se encaixa no recorte da pedra com a borda alinhada ao tampo. Modelo mais comum no Brasil, custo médio, fácil de instalar. Visual neutro, sem destaque." },
      { ul: [
        "Indicação: cozinhas convencionais, banheiros básicos",
        "Custo do recorte: R$ 180 a R$ 220 por cuba simples",
      ] },
      { h: "Cuba esculpida em pedra (monolítica)" },
      { p: "Esculpida direto na chapa de mármore ou granito, sem emendas. É o auge do acabamento premium. Demanda chapa única e marmoraria especializada. Preço de R$ 1.200 a R$ 2.800 por cuba dependendo do tamanho e da pedra." },
    ],
  },
  "calacatta-gold-vs-carrara": {
    title: "Calacatta Gold ou Carrara: qual mármore branco escolher",
    desc: "Comparativo entre mármore Calacatta Gold e Carrara: preço, origem, veios, aplicações e qual usar em cozinha, banheiro e revestimentos.",
    img: calacatta,
    cat: "Comparativo",
    date: "5 de maio de 2026",
    body: [
      { p: "Calacatta Gold e Carrara são os dois mármores brancos mais desejados do mundo — ambos vêm da mesma região da Itália, mas as diferenças visuais e de preço são enormes. Veja qual combina com seu projeto." },
      { h: "Origem" },
      { p: "Os dois são extraídos das pedreiras de Carrara, na Toscana (Itália). O Calacatta vem de jazidas específicas mais raras, com menos quantidade extraída — o que explica boa parte da diferença de preço." },
      { h: "Visual" },
      { ul: [
        "Carrara: fundo branco-acinzentado com veios cinza esfumaçados",
        "Calacatta Gold: fundo branco mais puro com veios dourados, dramáticos e marcados",
        "Calacatta Borghini: variação rara com veios marrom-acinzentados largos",
      ] },
      { h: "Preço por m² em 2026" },
      { ul: [
        "Mármore Carrara: R$ 890 a R$ 1.180/m²",
        "Mármore Calacatta Gold: R$ 1.450 a R$ 1.890/m²",
        "Calacatta Borghini Premium: R$ 2.200 a R$ 2.800/m²",
      ] },
      { h: "Onde usar Carrara" },
      { p: "Projetos clássicos, banheiros completos com revestimento de parede, lavabos, mesas de jantar e bancadas de cozinha de uso moderado. Combina com madeira clara, metais cromados e ambientes neutros." },
      { h: "Onde usar Calacatta Gold" },
      { p: "Bancada de cozinha gourmet de destaque, ilha com efeito waterfall, painéis de TV em sala de estar, lareiras, banheiros de alto padrão. Combina com metais dourados/latão, madeiras escuras e mobiliário escultural." },
      { h: "Veredito" },
      { p: "Carrara: melhor custo-benefício para mármore branco italiano em grandes áreas. Calacatta Gold: peça de destaque em ambientes onde o mármore é protagonista. Em projetos mistos, é comum usar Calacatta em pontos focais e Carrara nos revestimentos amplos." },
    ],
  },
  "porcelanato-que-imita-marmore": {
    title: "Porcelanato que imita mármore: vale a pena em 2026?",
    desc: "Análise honesta sobre porcelanato que imita mármore: marcas, padrões, preços, durabilidade real e comparação com mármore natural.",
    img: calacatta,
    cat: "Comparativo",
    date: "30 de abril de 2026",
    body: [
      { p: "O porcelanato que imita mármore evoluiu muito nos últimos 5 anos. Em 2026, modelos premium chegam tão próximos visualmente do Calacatta Gold ou do Patagônia que profissionais experientes têm dificuldade de distinguir à distância. Mas vale a pena trocar o mármore natural por porcelanato? Veja." },
      { h: "Padrões mais populares em 2026" },
      { ul: [
        "Porcelanato Calacatta Gold (imita o mármore italiano)",
        "Porcelanato Patagônia (imita quartzito brasileiro)",
        "Porcelanato Statuario (mármore italiano clássico)",
        "Porcelanato Onix Black (mármore preto com veios brancos)",
        "Porcelanato Nero Marquina (mármore espanhol)",
      ] },
      { h: "Marcas top de linha" },
      { ul: [
        "Portobello — linha Mármore",
        "Eliane — coleção Stone",
        "Portinari — linha Calacatta",
        "Roca — Marble Edition",
        "Importados: Marazzi (Itália), Inalco (Espanha)",
      ] },
      { h: "Preço médio por m² (chapa grande)" },
      { ul: [
        "Porcelanato 60x120 cm imitação mármore: R$ 120 a R$ 280/m²",
        "Porcelanato 120x240 cm: R$ 350 a R$ 650/m²",
        "Chapa grande 162x324 cm (Sapienstone, Inalco): R$ 800 a R$ 1.500/m²",
        "Mármore Calacatta natural: R$ 1.450 a R$ 1.890/m²",
      ] },
      { h: "Vantagens do porcelanato" },
      { ul: [
        "Não mancha com vinho, café, óleo ou ácidos",
        "Dispensa selagem para sempre",
        "Preço 60% a 80% menor que o mármore natural",
        "Padrões previsíveis — você sabe exatamente o que vai receber",
      ] },
      { h: "Limitações reais" },
      { ul: [
        "Veio se repete a cada 2-3 chapas (mármore natural é único)",
        "Em recortes, o veio pode quebrar visualmente",
        "Brilho não tem a profundidade do mármore polido",
        "Pode lascar nas bordas com impacto",
      ] },
      { h: "Veredito honesto" },
      { p: "Para áreas amplas, revestimento de parede, piso e bancadas de uso intenso, porcelanato é a escolha mais inteligente. Para pontos focais (ilha de cozinha gourmet, lavabo de luxo, painel de hall), nada substitui o mármore natural — o brilho, a profundidade e o caráter único de cada chapa." },
    ],
  },
  "marmore-no-banheiro-vale-a-pena": {
    title: "Mármore no banheiro vale a pena? Prós, contras e cuidados",
    desc: "Análise completa sobre usar mármore no banheiro: resistência à umidade, manchas mais comuns, melhores tipos, alternativas e dicas de manutenção.",
    img: calacatta,
    cat: "Banheiro",
    date: "25 de abril de 2026",
    body: [
      { p: "Mármore no banheiro é símbolo de sofisticação — mas também o ambiente onde a pedra mais sofre. Umidade constante, produtos de limpeza fortes e ácidos de cosméticos podem manchar permanentemente. Vale a pena? Depende do projeto e do uso." },
      { h: "Vantagens reais" },
      { ul: [
        "Valoriza o imóvel — banheiros de mármore são argumento de venda",
        "Visual atemporal, não sai de moda",
        "Veios únicos dão exclusividade ao ambiente",
        "Cada peça é uma escultura natural",
      ] },
      { h: "Riscos no banheiro" },
      { ul: [
        "Perfume, removedor de esmalte e álcool em gel mancham se ficarem em contato",
        "Vasos com plantas deixam aro de água",
        "Produto de limpeza ácido (descalcificante) destrói o brilho",
        "Umidade constante pode escurecer pedras claras com o tempo",
      ] },
      { h: "Melhores mármores para banheiro" },
      { ul: [
        "Mármore Travertino — visual rústico, mancha menos visível",
        "Mármore Crema Marfil — bege uniforme, perdoa marcas leves",
        "Mármore Botticino — fundo bege com veios suaves",
        "Mármore Carrara — visual clássico mas exige cuidados rigorosos",
      ] },
      { h: "Onde aplicar no banheiro" },
      { ul: [
        "Bancada da pia (com selagem reforçada)",
        "Revestimento de parede atrás da bancada",
        "Nicho do chuveiro (com tratamento hidrofugante)",
        "Soleiras de porta",
      ] },
      { h: "Onde NÃO usar" },
      { ul: [
        "Piso do banheiro inteiro (escorrega molhado)",
        "Bancada de banheiro de uso comercial intenso",
        "Áreas com plantas em vaso",
      ] },
      { h: "Manutenção semanal" },
      { p: "Limpe com pano úmido e sabão neutro de pH 7. Aplique selante hidrofugante a cada 12 meses. Seque marcas de água imediatamente. Nunca use removedor de calcário, água sanitária ou produtos com amônia." },
      { h: "Alternativas modernas" },
      { p: "Se você quer o visual do mármore sem a manutenção, considere porcelanato que imita mármore, quartzo com padrão marmorizado ou quartzito Taj Mahal — todos com resistência muito superior em ambientes molhados." },
    ],
  },
  "bancada-cozinha-gourmet-projeto": {
    title: "Cozinha gourmet: projeto completo, bancadas e materiais 2026",
    desc: "Guia para projetar cozinha gourmet em 2026: medidas mínimas, bancadas em quartzito, ilha com cooktop, iluminação e eletrodomésticos premium.",
    img: kitchen,
    cat: "Projeto",
    date: "18 de abril de 2026",
    body: [
      { p: "Cozinha gourmet deixou de ser luxo para virar item central do projeto residencial. Em 2026 os principais pontos do projeto são: ilha central com cooktop, bancada em quartzito ou mármore Calacatta, iluminação técnica e integração com sala de jantar. Veja o passo a passo completo." },
      { h: "Área mínima" },
      { p: "15 m² para uma cozinha gourmet funcional com ilha. Abaixo disso o espaço fica apertado e perde a função de receber convidados. Acima de 25 m² o projeto se torna realmente confortável." },
      { h: "Layout em U com ilha central" },
      { p: "Configuração mais funcional: bancadas em formato U nas paredes (geladeira/freezer, área de preparo, fogão) e ilha central com cooktop e bancada de refeição. Permite circulação de 4 a 6 pessoas sem cruzamento." },
      { h: "Materiais de bancada premium" },
      { ul: [
        "Quartzito Taj Mahal — resistente, visual de mármore",
        "Mármore Calacatta Gold — protagonismo escultural",
        "Quartzo cinza — visual industrial sofisticado",
        "Granito Preto Absoluto — contraste forte e moderno",
      ] },
      { h: "Eletrodomésticos essenciais" },
      { ul: [
        "Cooktop de indução 5 bocas",
        "Forno elétrico + micro-ondas embutidos em torre",
        "Coifa de ilha (parede ou teto) — 90 cm mínimo",
        "Geladeira side-by-side ou French Door",
        "Adega climatizada (12 a 24 garrafas)",
        "Lava-louças embutida sob bancada",
      ] },
      { h: "Iluminação técnica" },
      { ul: [
        "Spots de teto direcionais sobre bancada (4000K)",
        "LED sob armários para iluminar área de preparo",
        "Pendentes decorativos sobre ilha (altura 70-80 cm do tampo)",
        "Iluminação interna nas torres de eletro",
      ] },
      { h: "Investimento médio em 2026" },
      { p: "Cozinha gourmet completa (bancadas + marcenaria + eletro + iluminação) com área de 18 m²: R$ 120.000 a R$ 280.000 dependendo dos materiais escolhidos. Em quartzito Taj Mahal e marcenaria laqueada com ferragens premium, o teto pode ir a R$ 400.000." },
    ],
  },
  "tipos-de-acabamento-de-pedra": {
    title: "Acabamentos de pedra: polido, levigado, flameado e escovado",
    desc: "Tipos de acabamento de pedra natural: polido, levigado, flameado, escovado e amanteigado. Quando usar cada um em bancadas e revestimentos.",
    img: siena,
    cat: "Guia Técnico",
    date: "12 de abril de 2026",
    body: [
      { p: "O acabamento muda completamente a personalidade da pedra. Um granito polido brilha como espelho; o mesmo granito flameado parece rocha bruta. Conhecer as opções permite combinar materiais com inteligência no projeto." },
      { h: "Polido (brilhante)" },
      { p: "Acabamento mais comum. A pedra recebe polimento com discos diamantados até refletir a luz como espelho. Realça veios, intensifica cores e reduz a porosidade superficial. Indicado para bancadas internas, revestimentos de parede e ambientes onde se quer destaque visual." },
      { h: "Levigado (acetinado/fosco)" },
      { p: "A pedra passa pelo mesmo processo do polido, mas o lixamento para antes. Resultado: superfície lisa, opaca, com toque aveludado. Cores ficam mais suaves, veios menos contrastados. Tendência forte em 2026 para projetos minimalistas." },
      { h: "Flameado" },
      { p: "A superfície é exposta a chama de altíssima temperatura, que estoura os cristais minerais criando textura áspera. Antiderrapante natural. Ideal para piso de área externa, escadas, churrasqueiras e calçadas." },
      { h: "Escovado" },
      { p: "Lixamento mecânico com escovas de aço cria textura suave, com toque de couro. Cores ficam mais discretas. Boa opção para áreas externas e bancadas onde se quer o oposto do brilho do polido." },
      { h: "Amanteigado (leather)" },
      { p: "Acabamento texturizado mais sofisticado: a pedra passa por escovamento profundo, ganhando toque aveludado e visual matte profundo. Custo 20-30% maior que polido. Tendência em granitos pretos e mármores escuros." },
      { h: "Apicoado e jateado" },
      { p: "Acabamentos rústicos usados em fachadas, muros e elementos paisagísticos. O apicoado deixa marcas de pequenas crateras; o jateado cria superfície lisa porém fosca." },
      { h: "Como combinar acabamentos" },
      { p: "Mesma pedra com acabamentos diferentes cria efeitos sofisticados: bancada polida + frontão escovado, piso flameado + soleira polida, churrasqueira flameada + apoio levigado. Pergunte sempre ao marmorista quais acabamentos sua pedra escolhida aceita." },
    ],
  },
  "fachada-pedra-natural": {
    title: "Fachada com pedra natural: granito, mármore ou quartzito?",
    desc: "Guia para escolher pedra para fachada: melhores granitos, técnicas de fixação, custo por m², resistência ao tempo e exemplos de projetos.",
    img: hero,
    cat: "Fachada",
    date: "8 de abril de 2026",
    body: [
      { p: "Fachada de pedra natural é um dos investimentos mais nobres que existem em arquitetura. Bem executada, dura 50 anos com a aparência original. Mal especificada, gera problemas estruturais, infiltração e custos altíssimos de manutenção. Veja como acertar." },
      { h: "Melhores pedras para fachada" },
      { ul: [
        "Granito Cinza Andorinha — resistência e custo acessível",
        "Granito São Gabriel — clássico brasileiro para fachada",
        "Granito Preto São Marcos — visual sóbrio e nobre",
        "Quartzito Mont Blanc — para projetos premium",
        "Mármore Travertino — uso clássico em fachadas europeias",
      ] },
      { h: "Sistemas de fixação" },
      { ul: [
        "Fixação química (cola + buchas inox) — até 4 pavimentos",
        "Fixação mecânica com inserts metálicos — edifícios altos",
        "Sistema ventilado (fachada com câmara de ar) — melhor desempenho térmico",
      ] },
      { h: "Espessuras recomendadas" },
      { ul: [
        "Térreo e revestimento até 3 m: 2 cm",
        "Edifícios até 4 pavimentos: 3 cm",
        "Edifícios altos com fixação mecânica: 3 cm a 4 cm",
      ] },
      { h: "Custo médio por m² (material + instalação)" },
      { ul: [
        "Granito polido: R$ 650 a R$ 1.200/m²",
        "Granito flameado: R$ 720 a R$ 1.300/m²",
        "Mármore Travertino: R$ 980 a R$ 1.600/m²",
        "Quartzito premium: R$ 1.800 a R$ 2.800/m²",
      ] },
      { h: "Cuidados essenciais" },
      { ul: [
        "Tratamento hidrofugante reforçado a cada 5 anos",
        "Inspeção visual anual em fixações",
        "Limpeza com jato d'água em baixa pressão",
        "Nunca usar produtos ácidos em mármores",
      ] },
    ],
  },
  "churrasqueira-em-pedra": {
    title: "Churrasqueira em pedra natural: granito, ardosia ou pedra goiás",
    desc: "Guia para construir churrasqueira em pedra: melhores materiais, resistência a alta temperatura, custo médio e modelos modernos.",
    img: hero,
    cat: "Área Externa",
    date: "2 de abril de 2026",
    body: [
      { p: "A churrasqueira em pedra natural combina beleza, durabilidade e resistência ao calor. Mas nem toda pedra suporta exposição direta a 600°C — usar a errada pode causar trincas e até desintegração. Veja como escolher." },
      { h: "Melhores pedras para churrasqueira" },
      { ul: [
        "Granito flameado — resistência altíssima, antiderrapante",
        "Pedra Goiás — clássica brasileira, custo acessível",
        "Ardosia preta — visual moderno, requer selagem",
        "Granito Preto São Gabriel — sofisticado e resistente",
        "Tijolo refratário (revestimento interno do braseiro)",
      ] },
      { h: "O que NÃO usar" },
      { ul: [
        "Mármore: trinca com calor direto",
        "Quartzo de engenharia: resinas derretem acima de 150°C",
        "Porcelanato comum: pode rachar com choque térmico",
      ] },
      { h: "Tipos de churrasqueira" },
      { ul: [
        "Tradicional brasileira: braseiro + grelha ajustável",
        "Argentina (parrilla): grelha em V para escorrer gordura",
        "Pré-moldada: instalação em 1 dia, modelos compactos",
        "Embutida em ilha gourmet: integrada à cozinha externa",
      ] },
      { h: "Custo médio em 2026" },
      { ul: [
        "Churrasqueira pré-moldada de pedra Goiás: R$ 2.500 a R$ 4.500",
        "Churrasqueira de alvenaria com revestimento granito: R$ 5.000 a R$ 12.000",
        "Churrasqueira argentina sob medida: R$ 8.000 a R$ 25.000",
        "Cozinha gourmet completa com churrasqueira: R$ 35.000 a R$ 90.000",
      ] },
      { h: "Acabamento recomendado" },
      { p: "Flameado para áreas próximas ao fogo (antiderrapante e termicamente estável). Polido para bancadas de apoio e revestimentos decorativos. Combine os dois acabamentos para visual sofisticado." },
    ],
  },
  "soleira-de-granito-cores-medidas": {
    title: "Soleira de granito: cores mais usadas, medidas e instalação",
    desc: "Guia sobre soleira de granito para portas: medidas padrão, cores mais vendidas (preto, branco, cinza), preço por metro linear e instalação.",
    img: siena,
    cat: "Acabamento",
    date: "28 de março de 2026",
    body: [
      { p: "A soleira de granito é o detalhe que finaliza o piso entre ambientes — separa cozinha de sala, banheiro de quarto, área molhada de área seca. Pequena no projeto, mas importante para o visual e para impedir infiltração entre ambientes." },
      { h: "Cores mais vendidas" },
      { ul: [
        "Preto São Gabriel — combina com qualquer piso, mais procurada",
        "Branco Itaúnas — para pisos claros e ambientes minimalistas",
        "Cinza Andorinha — neutro e versátil",
        "Verde Ubatuba — toque clássico",
        "Marrom Imperial — para projetos rústicos",
      ] },
      { h: "Medidas padrão" },
      { ul: [
        "Espessura: 2 cm",
        "Largura: 15 cm (porta interna) ou 20 cm (porta externa)",
        "Comprimento: medida da porta + 5 cm de cada lado",
        "Soleira de cozinha americana: até 3 m com emendas escondidas",
      ] },
      { h: "Preço por metro linear (2026)" },
      { ul: [
        "Soleira granito comum (Andorinha, Branco Marfim): R$ 90 a R$ 140/m",
        "Soleira granito nobre (São Gabriel, Preto Absoluto): R$ 120 a R$ 220/m",
        "Soleira de mármore Travertino: R$ 160 a R$ 280/m",
        "Instalação inclusa: R$ 40 a R$ 80 por peça",
      ] },
      { h: "Onde usar soleira" },
      { ul: [
        "Portas de banheiro (também impede passagem de água)",
        "Portas externas (com declive para escoamento)",
        "Transição entre pisos diferentes",
        "Sob janelas de cozinha — peitoril",
      ] },
      { h: "Dicas de instalação" },
      { p: "Use argamassa colante específica para pedra natural. Deixe 2 mm de junta de dilatação nas laterais (preenchidas com silicone neutro). Evite soleira atravessando ambientes molhados — sempre faça pingadeira do lado úmido." },
    ],
  },
  "pedra-para-piscina-revestimento": {
    title: "Pedra para piscina: bordas, revestimento e qual escolher",
    desc: "Melhores pedras para borda de piscina: hijau, são tomé, miracema, granito flameado. Custo, antiderrapância e cuidados.",
    img: hero,
    cat: "Área Externa",
    date: "22 de março de 2026",
    body: [
      { p: "A borda da piscina é a peça mais técnica do projeto: precisa ser antiderrapante, resistente a cloro, ao sol forte e ao trânsito constante. A escolha errada significa risco de queda e trocas em 2-3 anos. Veja as melhores opções para 2026." },
      { h: "Pedras mais usadas em bordas de piscina" },
      { ul: [
        "Pedra Hijau (Hijau Verde) — verde escura, antiderrapante natural",
        "Pedra São Tomé — bege rústica, clássica brasileira",
        "Pedra Miracema — cinza, formatos variados",
        "Granito flameado (qualquer cor) — antiderrapante por acabamento",
        "Travertino bruto — visual europeu, requer selagem",
      ] },
      { h: "Antiderrapância: o critério mais importante" },
      { p: "A norma técnica (ABNT NBR 13818) exige antiderrapância R11 para áreas molhadas. Granito polido NÃO atende — sempre use acabamento flameado, jateado ou pedras naturalmente rugosas (Hijau, São Tomé)." },
      { h: "Formato das bordas" },
      { ul: [
        "Borda atérmica (bordas arredondadas): mais confortável e segura",
        "Borda reta clássica: visual moderno e limpo",
        "Borda transbordante (infinity): visual de luxo, demanda projeto hidráulico complexo",
      ] },
      { h: "Resistência ao cloro" },
      { p: "Pedras alcalinas (mármore, calcário) sofrem com o cloro a longo prazo. Pedras silicosas (granito, quartzito) e basaltos são mais resistentes. Use sempre selante hidrofugante específico para piscina e renove anualmente." },
      { h: "Custo médio por m² (material + instalação)" },
      { ul: [
        "Pedra São Tomé: R$ 90 a R$ 160/m²",
        "Pedra Hijau: R$ 180 a R$ 320/m²",
        "Pedra Miracema: R$ 120 a R$ 210/m²",
        "Granito flameado: R$ 320 a R$ 580/m²",
        "Travertino bruto: R$ 280 a R$ 450/m²",
      ] },
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
