export type Cidade = {
  slug: string;
  nome: string;
  estado: string;
  uf: string;
  regiao: string;
  bairros: string[];
  diferencial: string;
};

export const cidades: Cidade[] = [
  { slug: "sao-paulo", nome: "São Paulo", estado: "São Paulo", uf: "SP", regiao: "Sudeste", bairros: ["Pinheiros", "Vila Madalena", "Itaim Bibi", "Moema", "Tatuapé", "Mooca", "Vila Mariana", "Jardins", "Morumbi", "Brooklin"], diferencial: "Showroom presencial em São Paulo com atendimento em toda a Grande SP" },
  { slug: "rio-de-janeiro", nome: "Rio de Janeiro", estado: "Rio de Janeiro", uf: "RJ", regiao: "Sudeste", bairros: ["Barra da Tijuca", "Copacabana", "Ipanema", "Leblon", "Tijuca", "Botafogo", "Recreio", "Jacarepaguá"], diferencial: "Entrega semanal para Rio de Janeiro com equipe de instalação parceira" },
  { slug: "belo-horizonte", nome: "Belo Horizonte", estado: "Minas Gerais", uf: "MG", regiao: "Sudeste", bairros: ["Savassi", "Lourdes", "Belvedere", "Buritis", "Pampulha", "Funcionários"], diferencial: "Logística direta de granitos mineiros — origem das pedras mais nobres do Brasil" },
  { slug: "curitiba", nome: "Curitiba", estado: "Paraná", uf: "PR", regiao: "Sul", bairros: ["Batel", "Água Verde", "Ecoville", "Cabral", "Champagnat", "Bigorrilho"], diferencial: "Atendimento para projetos de alto padrão em Curitiba e região metropolitana" },
  { slug: "porto-alegre", nome: "Porto Alegre", estado: "Rio Grande do Sul", uf: "RS", regiao: "Sul", bairros: ["Moinhos de Vento", "Bela Vista", "Petrópolis", "Auxiliadora", "Higienópolis"], diferencial: "Entrega para POA e Grande Porto Alegre com instalação especializada" },
  { slug: "brasilia", nome: "Brasília", estado: "Distrito Federal", uf: "DF", regiao: "Centro-Oeste", bairros: ["Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte", "Sudoeste", "Águas Claras"], diferencial: "Projetos residenciais e corporativos no Plano Piloto e regiões nobres" },
  { slug: "salvador", nome: "Salvador", estado: "Bahia", uf: "BA", regiao: "Nordeste", bairros: ["Pituba", "Barra", "Graça", "Vitória", "Itaigara", "Caminho das Árvores"], diferencial: "Bancadas resistentes à maresia — selagem reforçada para o clima de Salvador" },
  { slug: "goiania", nome: "Goiânia", estado: "Goiás", uf: "GO", regiao: "Centro-Oeste", bairros: ["Setor Bueno", "Setor Marista", "Jardim Goiás", "Setor Oeste"], diferencial: "Atendimento para Goiânia, Anápolis e cidades do entorno" },
  { slug: "recife", nome: "Recife", estado: "Pernambuco", uf: "PE", regiao: "Nordeste", bairros: ["Boa Viagem", "Pina", "Casa Forte", "Espinheiro", "Aflitos"], diferencial: "Especialistas em pedras claras que valorizam a luminosidade nordestina" },
  { slug: "fortaleza", nome: "Fortaleza", estado: "Ceará", uf: "CE", regiao: "Nordeste", bairros: ["Aldeota", "Meireles", "Cocó", "Guararapes", "Edson Queiroz"], diferencial: "Pedras com proteção antimaresia para Fortaleza e litoral cearense" },
  { slug: "florianopolis", nome: "Florianópolis", estado: "Santa Catarina", uf: "SC", regiao: "Sul", bairros: ["Jurerê Internacional", "Lagoa da Conceição", "Centro", "Trindade", "João Paulo"], diferencial: "Projetos residenciais e gastronômicos em Florianópolis e Grande Floripa" },
  { slug: "campinas", nome: "Campinas", estado: "São Paulo", uf: "SP", regiao: "Sudeste", bairros: ["Cambuí", "Nova Campinas", "Taquaral", "Mansões Santo Antônio"], diferencial: "Atendimento presencial para Campinas, Valinhos, Vinhedo e Indaiatuba" },
  { slug: "sao-jose-dos-campos", nome: "São José dos Campos", estado: "São Paulo", uf: "SP", regiao: "Sudeste", bairros: ["Jardim Aquarius", "Urbanova", "Vila Adyana", "Jardim das Indústrias"], diferencial: "Showroom no Vale do Paraíba com entrega rápida em SJC, Taubaté e Jacareí" },
  { slug: "santo-andre", nome: "Santo André", estado: "São Paulo", uf: "SP", regiao: "Sudeste", bairros: ["Centro", "Jardim", "Bairro Campestre", "Vila Assunção", "Vila Bastos"], diferencial: "Marmoraria no ABC Paulista com prazo médio de 10 a 15 dias" },
  { slug: "barueri", nome: "Barueri", estado: "São Paulo", uf: "SP", regiao: "Sudeste", bairros: ["Alphaville", "Tamboré", "Centro", "Jardim Tupã"], diferencial: "Especialistas em projetos de alto padrão para Alphaville e Tamboré" },
];
