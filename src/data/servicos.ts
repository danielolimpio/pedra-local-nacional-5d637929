import kitchen from "@/assets/kitchen-luxury.webp";
import bathroom from "@/assets/bathroom-luxury.webp";
import churrasqueira from "@/assets/churrasqueira.webp";
import calacatta from "@/assets/marble-calacatta.webp";

export type Servico = {
  slug: string;
  nome: string;
  imagem: string;
  resumo: string;
  descricao: string;
  materiaisIndicados: string[];
  prazoMedio: string;
  precoInicial: string;
  etapas: { titulo: string; descricao: string }[];
  faq: { q: string; a: string }[];
};

export const SERVICOS: Servico[] = [
  {
    slug: "bancada-de-cozinha",
    nome: "Bancada de Cozinha sob Medida",
    imagem: kitchen,
    resumo: "Bancadas de cozinha em granito, mármore, quartzo ou quartzito com corte, gabarito e instalação inclusos.",
    descricao:
      "Projetamos e instalamos bancadas de cozinha sob medida em todo o Brasil. Fazemos o gabarito na sua residência com laser, corte CNC das pedras, acabamento nas bordas (reta, meia-cana, boleada ou monolítica) e instalação profissional com selagem final. Trabalhamos com cooktop e cuba embutidos, ilhas grandes, bancadas em L, U e monolíticas com waterfall.",
    materiaisIndicados: [
      "Granito São Gabriel, Branco Siena, Preto Absoluto (custo-benefício)",
      "Quartzo Silestone e Nanoglass (zero manutenção)",
      "Quartzito Taj Mahal e Mont Blanc (luxo + resistência)",
      "Mármore para ilhas decorativas de baixo uso",
    ],
    prazoMedio: "15 a 25 dias úteis do gabarito à instalação",
    precoInicial: "A partir de R$ 480/m² (granito) — instalação inclusa",
    etapas: [
      { titulo: "1. Visita técnica e gabarito", descricao: "Nossa equipe vai até o local com equipamento a laser para medir com precisão milimétrica após o marceneiro instalar os armários." },
      { titulo: "2. Escolha da chapa", descricao: "Você seleciona a chapa exata no showroom ou por vídeo — sem surpresa de veio." },
      { titulo: "3. Corte CNC e acabamento", descricao: "Corte automatizado, acabamento de bordas e polimento final em 7–12 dias úteis." },
      { titulo: "4. Instalação e selagem", descricao: "Nivelamento, colagem, rejunte imperceptível e selagem final. Bancada pronta para uso em 24h." },
    ],
    faq: [
      { q: "Qual a melhor pedra para bancada de cozinha?", a: "Granito São Gabriel é o campeão em custo-benefício e resistência. Para cozinha gourmet premium, quartzito Taj Mahal. Para zero manutenção, quartzo Silestone." },
      { q: "Vocês fazem cuba esculpida?", a: "Sim, cuba esculpida direto na chapa (sem emenda visível). Recomendado para mármore e quartzo em banheiros; em cozinha preferimos cuba de inox embutida." },
      { q: "Quanto custa uma bancada de cozinha?", a: "Uma bancada média (3m linear) fica entre R$ 1.500 e R$ 5.500 dependendo da pedra e acabamento. Solicite orçamento com medidas para valor exato." },
      { q: "Fazem instalação em todo o Brasil?", a: "Sim, atendemos capitais e principais cidades. Para regiões mais distantes, avaliamos logística sob consulta." },
    ],
  },
  {
    slug: "bancada-de-banheiro",
    nome: "Bancada de Banheiro em Mármore, Granito ou Quartzo",
    imagem: bathroom,
    resumo: "Bancadas e cubas esculpidas para banheiros e lavabos, com foco em sofisticação e durabilidade.",
    descricao:
      "Bancadas de banheiro sob medida em mármore Carrara, Calacatta Gold, granito, quartzo e ônix. Executamos cubas esculpidas direto na chapa (sem emenda), frontões elevados, bordas em meia-esquadria e revestimentos coordenados de parede. Ideal para lavabos de luxo, banheiros master e projetos hoteleiros.",
    materiaisIndicados: [
      "Mármore Calacatta Gold ou Carrara (visual sofisticado)",
      "Granito para banheiros de uso intenso",
      "Quartzo para praticidade e uniformidade",
      "Ônix backlight para lavabos exclusivos",
    ],
    prazoMedio: "10 a 20 dias úteis",
    precoInicial: "A partir de R$ 780/m² (granito) até R$ 3.500/m² (Calacatta selecionado)",
    etapas: [
      { titulo: "1. Projeto e desenho técnico", descricao: "Definimos posição da cuba, torneira, tomadas e frontão junto ao arquiteto." },
      { titulo: "2. Corte da chapa e cuba esculpida", descricao: "Talhamento manual e polimento interno da cuba quando aplicável." },
      { titulo: "3. Instalação com selagem", descricao: "Fixação, rejunte imperceptível e selagem para áreas úmidas." },
    ],
    faq: [
      { q: "Pode usar mármore no banheiro?", a: "Sim, o banheiro é o ambiente ideal para mármore — pouco uso de ácidos e apelo estético alto. Só evite produtos de limpeza ácidos." },
      { q: "Cuba esculpida é mais cara?", a: "Aproximadamente 40% a mais que cuba de sobrepor, mas o resultado visual é único: peça monolítica sem emendas." },
      { q: "Quanto custa bancada de lavabo?", a: "Lavabos pequenos (60–90cm) ficam entre R$ 800 e R$ 3.000 conforme a pedra escolhida." },
    ],
  },
  {
    slug: "churrasqueira-gourmet",
    nome: "Churrasqueira Gourmet e Área de Lazer",
    imagem: churrasqueira,
    resumo: "Bancadas, revestimentos e coifas em pedra natural para churrasqueiras, espaços gourmet e áreas externas.",
    descricao:
      "Executamos áreas gourmet completas em granito e quartzito: bancadas, revestimento da churrasqueira, coifa embutida, cuba, cooktop e prateleiras suspensas. Trabalhamos com pedras resistentes ao calor direto e às intempéries — indispensável para áreas externas e semiabertas.",
    materiaisIndicados: [
      "Granito Preto Absoluto, São Gabriel, Verde Ubatuba",
      "Quartzito Taj Mahal e Mont Blanc",
      "Evitar: mármore e quartzo (não resistem a calor extremo/UV)",
    ],
    prazoMedio: "20 a 30 dias úteis",
    precoInicial: "A partir de R$ 3.500 (projeto simples) — orçamento sob medida",
    etapas: [
      { titulo: "1. Projeto integrado", descricao: "Coordenamos com marceneiro, gasista e eletricista para instalação simultânea." },
      { titulo: "2. Corte com recortes para cooktop e cuba", descricao: "Precisão milimétrica em CNC." },
      { titulo: "3. Instalação e acabamento final", descricao: "Selagem para exteriores e proteção UV." },
    ],
    faq: [
      { q: "Qual granito é melhor para churrasqueira?", a: "Preto Absoluto e São Gabriel — não mancham com gordura e resistem a calor direto sem trincar." },
      { q: "Posso usar mármore na churrasqueira?", a: "Não recomendamos. O mármore é sensível a ácidos (limão, cerveja, molhos) e mancha com facilidade em uso externo." },
      { q: "Fazem coifa em pedra?", a: "Sim, coifa revestida em pedra é uma das opções mais buscadas — visual imponente e integrado à bancada." },
    ],
  },
  {
    slug: "pia-esculpida",
    nome: "Pia e Cuba Esculpida em Pedra Natural",
    imagem: calacatta,
    resumo: "Cubas talhadas diretamente na chapa de mármore, granito ou quartzo — peça única, sem emendas visíveis.",
    descricao:
      "A cuba esculpida é a assinatura da alta marmoraria: talhamos a cuba direto na mesma chapa da bancada, criando uma peça monolítica sem emendas nem silicone aparente. Indicada para lavabos de luxo, banheiros master e cozinhas premium.",
    materiaisIndicados: [
      "Mármore Calacatta Gold, Carrara, Nero Marquina",
      "Quartzo (Silestone) para máxima durabilidade",
      "Granitos claros para efeito escultórico",
    ],
    prazoMedio: "12 a 20 dias úteis (a cuba adiciona 5–7 dias ao prazo padrão)",
    precoInicial: "Acréscimo de R$ 1.200 a R$ 3.500 sobre o valor da bancada",
    etapas: [
      { titulo: "1. Desenho da cuba", descricao: "Definimos formato (retangular, oval, orgânico), profundidade e ralo." },
      { titulo: "2. Talhamento e polimento", descricao: "Escavação em CNC e polimento manual interno." },
      { titulo: "3. Instalação com ralo integrado", descricao: "Encaixe do ralo e teste de vazão." },
    ],
    faq: [
      { q: "Cuba esculpida vaza?", a: "Não. O talhamento é feito na mesma chapa, sem emendas — o ponto crítico é apenas o ralo, que recebe selagem específica." },
      { q: "Pode ser em qualquer pedra?", a: "Praticamente sim, mas evitamos pedras muito porosas ou frágeis. Mármore, quartzo e granitos densos são os ideais." },
    ],
  },
];

export function getServico(slug: string) {
  return SERVICOS.find((s) => s.slug === slug);
}
