export type Cidade = {
  slug: string;
  nome: string;
  estado: string;
  uf: string;
  regiao: string;
  bairros: string[];
  diferencial: string;
};

const mk = (
  slug: string, nome: string, estado: string, uf: string, regiao: string,
  bairros: string[], diferencial: string,
): Cidade => ({ slug, nome, estado, uf, regiao, bairros, diferencial });

export const cidades: Cidade[] = [
  // Sudeste — São Paulo capital + Grande SP + interior
  mk("sao-paulo", "São Paulo", "São Paulo", "SP", "Sudeste", ["Pinheiros","Vila Madalena","Itaim Bibi","Moema","Tatuapé","Mooca","Vila Mariana","Jardins","Morumbi","Brooklin","Perdizes","Higienópolis"], "Showroom presencial em São Paulo com atendimento em toda a Grande SP"),
  mk("guarulhos", "Guarulhos", "São Paulo", "SP", "Sudeste", ["Centro","Vila Galvão","Macedo","Jardim Maia","Picanço"], "Atendimento rápido para Guarulhos e zona norte da Grande SP"),
  mk("osasco", "Osasco", "São Paulo", "SP", "Sudeste", ["Centro","Vila Yara","Bela Vista","Km 18","Presidente Altino"], "Marmoraria em Osasco com entrega para toda a região oeste"),
  mk("santo-andre", "Santo André", "São Paulo", "SP", "Sudeste", ["Centro","Jardim","Bairro Campestre","Vila Assunção","Vila Bastos"], "Marmoraria no ABC Paulista com prazo médio de 10 a 15 dias"),
  mk("sao-bernardo-do-campo", "São Bernardo do Campo", "São Paulo", "SP", "Sudeste", ["Centro","Rudge Ramos","Jardim do Mar","Anchieta"], "Atendimento para SBC e todo o ABC com instalação profissional"),
  mk("sao-caetano-do-sul", "São Caetano do Sul", "São Paulo", "SP", "Sudeste", ["Centro","Santa Paula","Barcelona","Olímpico"], "Bancadas de granito e mármore para São Caetano e ABC"),
  mk("diadema", "Diadema", "São Paulo", "SP", "Sudeste", ["Centro","Eldorado","Conceição"], "Marmoraria em Diadema com orçamento em 24h"),
  mk("maua", "Mauá", "São Paulo", "SP", "Sudeste", ["Centro","Vila Bocaina","Jardim Zaíra"], "Atendimento ABC: Mauá, Ribeirão Pires e Rio Grande da Serra"),
  mk("barueri", "Barueri", "São Paulo", "SP", "Sudeste", ["Alphaville","Tamboré","Centro","Jardim Tupã"], "Especialistas em projetos de alto padrão para Alphaville e Tamboré"),
  mk("santana-de-parnaiba", "Santana de Parnaíba", "São Paulo", "SP", "Sudeste", ["Alphaville","Tamboré","Suru"], "Marmoraria para Alphaville Santana e Tamboré"),
  mk("cotia", "Cotia", "São Paulo", "SP", "Sudeste", ["Granja Viana","Caucaia do Alto","Centro"], "Bancadas sob medida para a Granja Viana e região oeste"),
  mk("itapevi", "Itapevi", "São Paulo", "SP", "Sudeste", ["Centro","Cohab","Jardim Maria Helena"], "Atendimento Itapevi e Jandira com instalação inclusa"),
  mk("jundiai", "Jundiaí", "São Paulo", "SP", "Sudeste", ["Centro","Anhangabaú","Vila Hortolândia","Engordadouro"], "Marmoraria para Jundiaí, Várzea Paulista e Campo Limpo"),
  mk("campinas", "Campinas", "São Paulo", "SP", "Sudeste", ["Cambuí","Nova Campinas","Taquaral","Mansões Santo Antônio","Barão Geraldo"], "Atendimento presencial para Campinas, Valinhos, Vinhedo e Indaiatuba"),
  mk("sao-jose-dos-campos", "São José dos Campos", "São Paulo", "SP", "Sudeste", ["Jardim Aquarius","Urbanova","Vila Adyana","Jardim das Indústrias"], "Showroom no Vale do Paraíba com entrega rápida em SJC, Taubaté e Jacareí"),
  mk("taubate", "Taubaté", "São Paulo", "SP", "Sudeste", ["Centro","Independência","Jardim Russi"], "Marmoraria no Vale do Paraíba com prazos de 12 a 18 dias"),
  mk("jacarei", "Jacareí", "São Paulo", "SP", "Sudeste", ["Centro","Jardim Paraíba","Vila Branca"], "Atendimento Jacareí e Vale do Paraíba"),
  mk("ribeirao-preto", "Ribeirão Preto", "São Paulo", "SP", "Sudeste", ["Jardim Botânico","Nova Aliança","Alto da Boa Vista","Iguatemi"], "Marmoraria no interior paulista com entrega para Ribeirão e região"),
  mk("sao-jose-do-rio-preto", "São José do Rio Preto", "São Paulo", "SP", "Sudeste", ["Centro","Higienópolis","Redentora","Bosque da Saúde"], "Bancadas de granito e quartzo entregues em Rio Preto"),
  mk("sorocaba", "Sorocaba", "São Paulo", "SP", "Sudeste", ["Centro","Jardim Vergueiro","Campolim","Alto da Boa Vista"], "Marmoraria em Sorocaba com cobertura para Itu, Salto e Votorantim"),
  mk("piracicaba", "Piracicaba", "São Paulo", "SP", "Sudeste", ["Centro","Cidade Alta","Castelinho"], "Atendimento Piracicaba, Limeira e Rio Claro"),
  mk("santos", "Santos", "São Paulo", "SP", "Sudeste", ["Gonzaga","Embaré","Boqueirão","Aparecida","Pompéia"], "Pedras com proteção antimaresia para Santos e Baixada Santista"),
  mk("sao-vicente", "São Vicente", "São Paulo", "SP", "Sudeste", ["Centro","Itararé","Gonzaguinha"], "Atendimento na Baixada Santista com selagem reforçada"),
  mk("guaruja", "Guarujá", "São Paulo", "SP", "Sudeste", ["Pitangueiras","Enseada","Astúrias"], "Marmoraria no Guarujá especializada em casas de praia"),
  mk("praia-grande", "Praia Grande", "São Paulo", "SP", "Sudeste", ["Boqueirão","Tupi","Canto do Forte"], "Bancadas resistentes à maresia para a Praia Grande"),

  // Sudeste — Rio + interior
  mk("rio-de-janeiro", "Rio de Janeiro", "Rio de Janeiro", "RJ", "Sudeste", ["Barra da Tijuca","Copacabana","Ipanema","Leblon","Tijuca","Botafogo","Recreio","Jacarepaguá"], "Entrega semanal para Rio de Janeiro com equipe de instalação parceira"),
  mk("niteroi", "Niterói", "Rio de Janeiro", "RJ", "Sudeste", ["Icaraí","Santa Rosa","São Francisco","Ingá"], "Marmoraria em Niterói com travessia logística diária"),
  mk("sao-goncalo", "São Gonçalo", "Rio de Janeiro", "RJ", "Sudeste", ["Centro","Alcântara","Trindade"], "Atendimento para São Gonçalo e região metropolitana do Rio"),
  mk("nova-iguacu", "Nova Iguaçu", "Rio de Janeiro", "RJ", "Sudeste", ["Centro","Califórnia","Posse"], "Marmoraria em Nova Iguaçu e Baixada Fluminense"),
  mk("duque-de-caxias", "Duque de Caxias", "Rio de Janeiro", "RJ", "Sudeste", ["Centro","Jardim 25 de Agosto","Vila São Luís"], "Entrega para Duque de Caxias e municípios da Baixada"),
  mk("petropolis", "Petrópolis", "Rio de Janeiro", "RJ", "Sudeste", ["Centro","Itaipava","Quitandinha"], "Bancadas sob medida para casas de campo em Petrópolis e Itaipava"),
  mk("campos-dos-goytacazes", "Campos dos Goytacazes", "Rio de Janeiro", "RJ", "Sudeste", ["Centro","Pelinca","Parque Tamandaré"], "Atendimento para Campos e Norte Fluminense"),

  // Sudeste — Minas
  mk("belo-horizonte", "Belo Horizonte", "Minas Gerais", "MG", "Sudeste", ["Savassi","Lourdes","Belvedere","Buritis","Pampulha","Funcionários"], "Logística direta de granitos mineiros — origem das pedras mais nobres do Brasil"),
  mk("contagem", "Contagem", "Minas Gerais", "MG", "Sudeste", ["Eldorado","Cidade Industrial","Riacho"], "Marmoraria em Contagem com cobertura na Grande BH"),
  mk("betim", "Betim", "Minas Gerais", "MG", "Sudeste", ["Centro","Imbiruçu","Citrolândia"], "Bancadas entregues em Betim e Região Metropolitana de BH"),
  mk("nova-lima", "Nova Lima", "Minas Gerais", "MG", "Sudeste", ["Vale do Sereno","Vila da Serra","Alphaville Lagoa dos Ingleses"], "Especialistas em alto padrão para Vila da Serra e Alphaville BH"),
  mk("uberlandia", "Uberlândia", "Minas Gerais", "MG", "Sudeste", ["Santa Mônica","Tibery","Jardim Karaíba"], "Marmoraria em Uberlândia e Triângulo Mineiro"),
  mk("uberaba", "Uberaba", "Minas Gerais", "MG", "Sudeste", ["Centro","Olinda","Mercês"], "Atendimento para Uberaba e cidades do Triângulo"),
  mk("juiz-de-fora", "Juiz de Fora", "Minas Gerais", "MG", "Sudeste", ["Centro","São Mateus","Cascatinha"], "Bancadas de granito e quartzo entregues em Juiz de Fora"),
  mk("ipatinga", "Ipatinga", "Minas Gerais", "MG", "Sudeste", ["Centro","Cidade Nobre","Bom Retiro"], "Marmoraria no Vale do Aço — Ipatinga, Coronel Fabriciano e Timóteo"),

  // Sudeste — Espírito Santo
  mk("vitoria", "Vitória", "Espírito Santo", "ES", "Sudeste", ["Praia do Canto","Jardim Camburi","Mata da Praia","Jardim da Penha"], "Marmoraria em Vitória com pedras adaptadas ao clima litorâneo"),
  mk("vila-velha", "Vila Velha", "Espírito Santo", "ES", "Sudeste", ["Praia da Costa","Itapuã","Itaparica"], "Atendimento Vila Velha e Grande Vitória"),
  mk("serra", "Serra", "Espírito Santo", "ES", "Sudeste", ["Laranjeiras","Manguinhos","Jardim Limoeiro"], "Bancadas entregues na Serra e Cariacica"),

  // Sul
  mk("curitiba", "Curitiba", "Paraná", "PR", "Sul", ["Batel","Água Verde","Ecoville","Cabral","Champagnat","Bigorrilho"], "Atendimento para projetos de alto padrão em Curitiba e região metropolitana"),
  mk("sao-jose-dos-pinhais", "São José dos Pinhais", "Paraná", "PR", "Sul", ["Centro","Afonso Pena","Costeira"], "Marmoraria para São José dos Pinhais e Grande Curitiba"),
  mk("londrina", "Londrina", "Paraná", "PR", "Sul", ["Centro","Gleba Palhano","Aurora"], "Bancadas entregues em Londrina e norte do Paraná"),
  mk("maringa", "Maringá", "Paraná", "PR", "Sul", ["Zona 7","Novo Centro","Jardim Aclimação"], "Atendimento Maringá e região noroeste do Paraná"),
  mk("cascavel", "Cascavel", "Paraná", "PR", "Sul", ["Centro","Country","Recanto Tropical"], "Marmoraria em Cascavel com entrega no oeste paranaense"),
  mk("foz-do-iguacu", "Foz do Iguaçu", "Paraná", "PR", "Sul", ["Centro","Vila Yolanda","Jardim América"], "Bancadas de granito e mármore em Foz do Iguaçu"),
  mk("ponta-grossa", "Ponta Grossa", "Paraná", "PR", "Sul", ["Centro","Estrela","Oficinas"], "Atendimento Ponta Grossa e Campos Gerais"),
  mk("porto-alegre", "Porto Alegre", "Rio Grande do Sul", "RS", "Sul", ["Moinhos de Vento","Bela Vista","Petrópolis","Auxiliadora","Higienópolis"], "Entrega para POA e Grande Porto Alegre com instalação especializada"),
  mk("canoas", "Canoas", "Rio Grande do Sul", "RS", "Sul", ["Centro","Marechal Rondon","Igara"], "Marmoraria em Canoas com cobertura para Esteio e Sapucaia"),
  mk("caxias-do-sul", "Caxias do Sul", "Rio Grande do Sul", "RS", "Sul", ["Centro","Pio X","Madureira"], "Bancadas entregues em Caxias e Serra Gaúcha"),
  mk("pelotas", "Pelotas", "Rio Grande do Sul", "RS", "Sul", ["Centro","Areal","Três Vendas"], "Atendimento Pelotas e Rio Grande"),
  mk("santa-maria", "Santa Maria", "Rio Grande do Sul", "RS", "Sul", ["Centro","Camobi","Nossa Senhora de Lourdes"], "Marmoraria em Santa Maria e região central do RS"),
  mk("florianopolis", "Florianópolis", "Santa Catarina", "SC", "Sul", ["Jurerê Internacional","Lagoa da Conceição","Centro","Trindade","João Paulo"], "Projetos residenciais e gastronômicos em Florianópolis e Grande Floripa"),
  mk("joinville", "Joinville", "Santa Catarina", "SC", "Sul", ["Centro","América","Atiradores"], "Bancadas entregues em Joinville e norte catarinense"),
  mk("blumenau", "Blumenau", "Santa Catarina", "SC", "Sul", ["Centro","Vila Nova","Itoupava Seca"], "Marmoraria em Blumenau e Vale do Itajaí"),
  mk("itajai", "Itajaí", "Santa Catarina", "SC", "Sul", ["Centro","Fazenda","São João"], "Atendimento Itajaí, Balneário Camboriú e Brusque"),
  mk("balneario-camboriu", "Balneário Camboriú", "Santa Catarina", "SC", "Sul", ["Centro","Pioneiros","Barra"], "Bancadas para apartamentos de alto padrão em Balneário Camboriú"),
  mk("chapeco", "Chapecó", "Santa Catarina", "SC", "Sul", ["Centro","Líder","Maria Goretti"], "Marmoraria em Chapecó e oeste catarinense"),

  // Centro-Oeste
  mk("brasilia", "Brasília", "Distrito Federal", "DF", "Centro-Oeste", ["Asa Sul","Asa Norte","Lago Sul","Lago Norte","Sudoeste","Águas Claras"], "Projetos residenciais e corporativos no Plano Piloto e regiões nobres"),
  mk("taguatinga", "Taguatinga", "Distrito Federal", "DF", "Centro-Oeste", ["Centro","Norte","Sul"], "Marmoraria em Taguatinga atendendo todo o DF"),
  mk("ceilandia", "Ceilândia", "Distrito Federal", "DF", "Centro-Oeste", ["Centro","Norte","Sul"], "Atendimento Ceilândia e cidades-satélite do DF"),
  mk("goiania", "Goiânia", "Goiás", "GO", "Centro-Oeste", ["Setor Bueno","Setor Marista","Jardim Goiás","Setor Oeste"], "Atendimento para Goiânia, Anápolis e cidades do entorno"),
  mk("aparecida-de-goiania", "Aparecida de Goiânia", "Goiás", "GO", "Centro-Oeste", ["Centro","Vila Brasília","Jardim Luz"], "Bancadas entregues em Aparecida e Grande Goiânia"),
  mk("anapolis", "Anápolis", "Goiás", "GO", "Centro-Oeste", ["Centro","Jundiaí","Maracananzinho"], "Marmoraria em Anápolis e região central de Goiás"),
  mk("campo-grande", "Campo Grande", "Mato Grosso do Sul", "MS", "Centro-Oeste", ["Centro","Itanhangá","Chácara Cachoeira"], "Atendimento Campo Grande e interior do MS"),
  mk("cuiaba", "Cuiabá", "Mato Grosso", "MT", "Centro-Oeste", ["Centro","Jardim das Américas","Goiabeiras"], "Marmoraria em Cuiabá e Várzea Grande"),
  mk("varzea-grande", "Várzea Grande", "Mato Grosso", "MT", "Centro-Oeste", ["Centro","Cristo Rei","Manga"], "Bancadas entregues em Várzea Grande e Grande Cuiabá"),

  // Nordeste
  mk("salvador", "Salvador", "Bahia", "BA", "Nordeste", ["Pituba","Barra","Graça","Vitória","Itaigara","Caminho das Árvores"], "Bancadas resistentes à maresia — selagem reforçada para o clima de Salvador"),
  mk("feira-de-santana", "Feira de Santana", "Bahia", "BA", "Nordeste", ["Centro","Kalilândia","Capuchinhos"], "Marmoraria em Feira de Santana e interior baiano"),
  mk("camacari", "Camaçari", "Bahia", "BA", "Nordeste", ["Centro","Parque Verde","Gleba E"], "Atendimento Camaçari, Lauro de Freitas e Litoral Norte"),
  mk("recife", "Recife", "Pernambuco", "PE", "Nordeste", ["Boa Viagem","Pina","Casa Forte","Espinheiro","Aflitos"], "Especialistas em pedras claras que valorizam a luminosidade nordestina"),
  mk("olinda", "Olinda", "Pernambuco", "PE", "Nordeste", ["Casa Caiada","Bairro Novo","Rio Doce"], "Marmoraria em Olinda e região metropolitana do Recife"),
  mk("jaboatao-dos-guararapes", "Jaboatão dos Guararapes", "Pernambuco", "PE", "Nordeste", ["Piedade","Candeias","Cavaleiro"], "Bancadas entregues em Jaboatão e Grande Recife"),
  mk("caruaru", "Caruaru", "Pernambuco", "PE", "Nordeste", ["Centro","Maurício de Nassau","Universitário"], "Atendimento Caruaru e Agreste pernambucano"),
  mk("fortaleza", "Fortaleza", "Ceará", "CE", "Nordeste", ["Aldeota","Meireles","Cocó","Guararapes","Edson Queiroz"], "Pedras com proteção antimaresia para Fortaleza e litoral cearense"),
  mk("caucaia", "Caucaia", "Ceará", "CE", "Nordeste", ["Centro","Cumbuco","Icaraí"], "Marmoraria em Caucaia e Grande Fortaleza"),
  mk("juazeiro-do-norte", "Juazeiro do Norte", "Ceará", "CE", "Nordeste", ["Centro","Triângulo","Lagoa Seca"], "Bancadas entregues no Cariri cearense"),
  mk("natal", "Natal", "Rio Grande do Norte", "RN", "Nordeste", ["Ponta Negra","Tirol","Petrópolis","Capim Macio"], "Marmoraria em Natal com selagem hidrofugante reforçada"),
  mk("mossoro", "Mossoró", "Rio Grande do Norte", "RN", "Nordeste", ["Centro","Nova Betânia","Costa e Silva"], "Atendimento Mossoró e oeste potiguar"),
  mk("joao-pessoa", "João Pessoa", "Paraíba", "PB", "Nordeste", ["Manaíra","Cabo Branco","Tambaú","Bessa"], "Bancadas de granito e mármore para João Pessoa e litoral paraibano"),
  mk("campina-grande", "Campina Grande", "Paraíba", "PB", "Nordeste", ["Centro","Catolé","Mirante"], "Marmoraria em Campina Grande e Agreste"),
  mk("maceio", "Maceió", "Alagoas", "AL", "Nordeste", ["Jatiúca","Ponta Verde","Pajuçara","Mangabeiras"], "Pedras protegidas para o clima litorâneo de Maceió"),
  mk("aracaju", "Aracaju", "Sergipe", "SE", "Nordeste", ["Atalaia","Jardins","13 de Julho","Coroa do Meio"], "Marmoraria em Aracaju e Grande Aracaju"),
  mk("teresina", "Teresina", "Piauí", "PI", "Nordeste", ["Centro","Jóquei","Fátima","Horto"], "Bancadas entregues em Teresina e Timon"),
  mk("sao-luis", "São Luís", "Maranhão", "MA", "Nordeste", ["Calhau","Renascença","Ponta D'Areia","Olho D'Água"], "Marmoraria em São Luís com pedras adaptadas ao clima maranhense"),

  // Norte
  mk("manaus", "Manaus", "Amazonas", "AM", "Norte", ["Adrianópolis","Ponta Negra","Aleixo","Flores"], "Marmoraria em Manaus com logística fluvial para a Amazônia"),
  mk("belem", "Belém", "Pará", "PA", "Norte", ["Nazaré","Umarizal","Batista Campos","Marco"], "Bancadas entregues em Belém e Ananindeua"),
  mk("ananindeua", "Ananindeua", "Pará", "PA", "Norte", ["Centro","Cidade Nova","Coqueiro"], "Atendimento Ananindeua e Grande Belém"),
  mk("porto-velho", "Porto Velho", "Rondônia", "RO", "Norte", ["Centro","Olaria","Embratel"], "Marmoraria em Porto Velho atendendo Rondônia"),
  mk("palmas", "Palmas", "Tocantins", "TO", "Norte", ["Plano Diretor Sul","Plano Diretor Norte","Aureny"], "Bancadas entregues em Palmas e cidades do Tocantins"),
  mk("rio-branco", "Rio Branco", "Acre", "AC", "Norte", ["Centro","Bosque","Aviário"], "Marmoraria em Rio Branco — atendimento Acre"),
  mk("macapa", "Macapá", "Amapá", "AP", "Norte", ["Centro","Trem","Pacoval"], "Atendimento Macapá e Santana"),
  mk("boa-vista", "Boa Vista", "Roraima", "RR", "Norte", ["Centro","Caçari","Aparecida"], "Marmoraria em Boa Vista atendendo Roraima"),
];
