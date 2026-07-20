import taj from "@/assets/hero-granite.webp";
import calacatta from "@/assets/marble-calacatta.webp";
import carrara from "@/assets/marble-carrara.webp";
import saoGabriel from "@/assets/granite-sao-gabriel.webp";
import siena from "@/assets/granite-siena.webp";
import quartz from "@/assets/quartz-white.webp";

export type Pedra = {
  slug: string;
  nome: string;
  tipo: "Quartzito" | "Mármore" | "Granito" | "Quartzo";
  origem: string;
  precoM2: string;
  imagem: string;
  resumo: string;
  cores: string;
  acabamentos: string[];
  aplicacoes: string[];
  vantagens: string[];
  cuidados: string[];
  faq: { q: string; a: string }[];
};

export const PEDRAS: Pedra[] = [
  {
    slug: "quartzito-taj-mahal",
    nome: "Quartzito Taj Mahal",
    tipo: "Quartzito",
    origem: "Espírito Santo, Brasil",
    precoM2: "R$ 1.290",
    imagem: taj,
    resumo:
      "O Quartzito Taj Mahal é uma das pedras mais desejadas do mundo. Fundo bege dourado com veios sutis, une a beleza do mármore à resistência do granito — ideal para bancadas de cozinha gourmet e áreas de alto uso.",
    cores: "Bege dourado, creme, com veios cinza-esbranquiçados e nuances champagne.",
    acabamentos: ["Polido", "Levigado", "Leather (couro)", "Escovado"],
    aplicacoes: [
      "Bancada de cozinha e ilha gourmet",
      "Bancada de banheiro e lavabo",
      "Revestimento de parede e painel de TV",
      "Fachadas ventiladas e mesas de jantar",
    ],
    vantagens: [
      "Dureza 7 na escala Mohs (mais resistente que o mármore)",
      "Baixíssima absorção — não mancha com facilidade",
      "Suporta calor direto de panelas quentes",
      "Cada chapa é única, com movimento natural exclusivo",
    ],
    cuidados: [
      "Selagem a cada 2–3 anos com resina hidrofugante",
      "Limpeza diária com pano úmido e sabão neutro",
      "Evitar produtos ácidos concentrados (removedores, cloro puro)",
    ],
    faq: [
      { q: "Qual o preço do Quartzito Taj Mahal por m²?", a: "A partir de R$ 1.290/m² instalado, com variação conforme espessura (2cm ou 3cm), acabamento e tamanho da chapa." },
      { q: "Taj Mahal é mármore ou granito?", a: "Nenhum dos dois — é quartzito, uma rocha metamórfica formada de arenito rico em quartzo. Tem visual de mármore e resistência de granito." },
      { q: "Pode usar em cozinha?", a: "Sim, é uma das melhores opções para cozinha gourmet: resiste a calor, riscos e não mancha quando selado corretamente." },
    ],
  },
  {
    slug: "marmore-calacatta-gold",
    nome: "Mármore Calacatta Gold",
    tipo: "Mármore",
    origem: "Carrara, Itália",
    precoM2: "R$ 1.850",
    imagem: calacatta,
    resumo:
      "O Calacatta Gold é o mármore mais nobre do mundo. Fundo branco puro com veios dourados marcantes, é a escolha número um da alta arquitetura para banheiros, lavabos e revestimentos escultóricos.",
    cores: "Branco intenso com veios dourados, cinza-quentes e ocres.",
    acabamentos: ["Polido", "Levigado", "Amanteigado"],
    aplicacoes: [
      "Bancada de banheiro e lavabo premium",
      "Ilha decorativa e mesa de sala",
      "Revestimento de parede, fachada e box de banheiro",
      "Painel de lareira e móveis de destaque",
    ],
    vantagens: [
      "Veios dourados exclusivos e altamente decorativos",
      "Alta luminosidade — amplia visualmente o ambiente",
      "Sofisticação atemporal presente em projetos de luxo",
      "Chapas gigantes permitem execução monolítica (waterfall)",
    ],
    cuidados: [
      "Selagem anual — mármore branco é mais poroso",
      "Não usar produtos ácidos: limão, vinagre, desinfetantes ácidos",
      "Evitar em bancada de cozinha de uso intenso (risco de manchas)",
    ],
    faq: [
      { q: "Calacatta Gold serve para cozinha?", a: "Serve para ilha decorativa ou apoio, mas evite como bancada principal — o mármore é sensível a ácidos comuns na cozinha (limão, vinagre, molho de tomate)." },
      { q: "Qual a diferença entre Calacatta e Carrara?", a: "Ambos vêm de Carrara/Itália, mas o Calacatta tem fundo mais branco e veios dourados mais marcantes; o Carrara tem fundo cinza-claro e veios acinzentados suaves." },
      { q: "Preço médio por metro quadrado?", a: "A partir de R$ 1.850/m² instalado. Chapas selecionadas de veio contínuo (book-match) chegam a R$ 3.500/m²." },
    ],
  },
  {
    slug: "marmore-carrara",
    nome: "Mármore Branco Carrara",
    tipo: "Mármore",
    origem: "Carrara, Itália",
    precoM2: "R$ 1.190",
    imagem: carrara,
    resumo:
      "Clássico da arquitetura mundial há séculos, o Mármore Carrara traz elegância discreta com fundo branco-acinzentado e veios cinza suaves. Excelente custo-benefício entre os mármores importados.",
    cores: "Branco-acinzentado com veios cinza discretos.",
    acabamentos: ["Polido", "Levigado", "Escovado"],
    aplicacoes: [
      "Bancada de banheiro e lavabo",
      "Revestimento de parede e piso",
      "Escadas, soleiras e rodapés",
      "Mesa de centro e móveis decorativos",
    ],
    vantagens: [
      "Melhor custo-benefício entre mármores importados",
      "Visual clássico que combina com todos os estilos",
      "Ampla disponibilidade de chapas e formatos",
    ],
    cuidados: [
      "Selagem anual",
      "Limpar imediatamente derramamentos de café, vinho e ácidos",
      "Não usar esponja abrasiva",
    ],
    faq: [
      { q: "Carrara pode ir no piso?", a: "Sim, é excelente para piso interno em salas e banheiros. Prefira acabamento levigado ou escovado em áreas de passagem para evitar risco de escorregar." },
      { q: "Amarela com o tempo?", a: "Não amarela; pode escurecer levemente em pontos de contato com água se não estiver selado. A selagem anual mantém a cor original." },
    ],
  },
  {
    slug: "granito-sao-gabriel",
    nome: "Granito São Gabriel",
    tipo: "Granito",
    origem: "Bahia, Brasil",
    precoM2: "R$ 480",
    imagem: saoGabriel,
    resumo:
      "O granito mais vendido do Brasil. Preto profundo com finos pontos brancos, é a escolha campeã para bancadas de cozinha pela resistência, preço acessível e facilidade de manutenção.",
    cores: "Preto uniforme com pontuações brancas e cinza-claras.",
    acabamentos: ["Polido", "Escovado", "Flameado"],
    aplicacoes: [
      "Bancada de cozinha, ilha e cooktop",
      "Pia e cuba esculpida",
      "Churrasqueira e área gourmet",
      "Soleiras, rodapés e escadas",
    ],
    vantagens: [
      "Alta resistência a calor, risco e impacto",
      "Baixa porosidade — não mancha facilmente",
      "Excelente custo-benefício",
      "Combina com armários brancos, madeira e metais dourados",
    ],
    cuidados: [
      "Selagem a cada 2–3 anos",
      "Limpeza diária com sabão neutro",
      "Evitar produtos abrasivos",
    ],
    faq: [
      { q: "Qual o preço do granito São Gabriel?", a: "A partir de R$ 480/m² instalado — um dos melhores custo-benefício do mercado." },
      { q: "Precisa selar?", a: "Sim, recomendamos selagem a cada 2 a 3 anos para manter a resistência a manchas e o brilho original." },
    ],
  },
  {
    slug: "granito-branco-siena",
    nome: "Granito Branco Siena",
    tipo: "Granito",
    origem: "Espírito Santo, Brasil",
    precoM2: "R$ 520",
    imagem: siena,
    resumo:
      "O Branco Siena é o granito claro mais procurado do país. Fundo bege-claro com pontos discretos, ilumina cozinhas e combina perfeitamente com armários planejados em qualquer cor.",
    cores: "Bege claro com pontuações douradas e cinza.",
    acabamentos: ["Polido", "Escovado"],
    aplicacoes: ["Bancada de cozinha", "Bancada de banheiro", "Escadas e soleiras"],
    vantagens: ["Ilumina ambientes pequenos", "Fácil manutenção", "Alta resistência"],
    cuidados: ["Selagem a cada 2 anos", "Limpar rapidamente derramamentos de café e vinho"],
    faq: [
      { q: "Combina com armário branco?", a: "Sim, é a combinação mais harmônica — o bege suave contrasta e valoriza o branco puro dos armários planejados." },
    ],
  },
  {
    slug: "quartzo-branco",
    nome: "Quartzo Branco (Silestone)",
    tipo: "Quartzo",
    origem: "Espanha (Silestone / Cosentino)",
    precoM2: "R$ 1.450",
    imagem: quartz,
    resumo:
      "Pedra de engenharia composta por 93% de quartzo natural. Zero porosidade, visual uniforme e dispensa selagem — a queridinha das cozinhas modernas e sem manchas.",
    cores: "Branco puro, branco com pontos, cinza e tons neutros.",
    acabamentos: ["Polido", "Suede", "Volcano"],
    aplicacoes: ["Bancada de cozinha corrida sem emendas", "Bancada de banheiro", "Ilhas grandes"],
    vantagens: ["Zero porosidade — não mancha", "Dispensa selagem", "Visual uniforme e contínuo", "Antibacteriano"],
    cuidados: ["Evitar contato prolongado com calor direto (> 150°C)", "Não usar produtos com cloro puro"],
    faq: [
      { q: "Quartzo é melhor que granito?", a: "Depende do uso. Quartzo tem menos manutenção e visual uniforme; granito resiste melhor a calor direto e tem custo menor." },
    ],
  },
];

export function getPedra(slug: string) {
  return PEDRAS.find((p) => p.slug === slug);
}
