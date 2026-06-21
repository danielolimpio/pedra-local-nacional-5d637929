export type Pedra = {
  slug: string;
  nome: string;
  categoria: "Granito" | "Mármore" | "Quartzo" | "Quartzito";
  origem: string;
  precoMin: number; // R$/m²
  cor: string;
  resumo: string;
  aplicacoes: string[];
  keywords: string[];
};

// Gerador de keywords long-tail — multiplica a cobertura SEO de cada pedra
// sem alterar layout. As variantes alimentam <meta name="keywords"> em
// /pedras/{slug} e o JSON-LD/copy correlato.
function longTail(nome: string, categoria: Pedra["categoria"]): string[] {
  const n = nome.toLowerCase();
  // Remove o prefixo da categoria (ex.: "granito sao gabriel" -> "sao gabriel")
  // pra cobrir buscas que omitem a palavra "granito/mármore/quartzo/quartzito"
  const semCat = n.replace(/^(granito|mármore|marmore|quartzito|quartzo)\s+/, "");
  const baseAcab = ["polido", "escovado", "flameado", "levigado", "apicoado", "amaciado", "jateado", "brilhado", "fosco"];
  const baseAplic = [
    "bancada de cozinha", "bancada de banheiro", "pia de cozinha", "pia esculpida",
    "churrasqueira gourmet", "lavabo", "ilha de cozinha", "mesa de jantar",
    "soleira", "peitoril", "escada", "revestimento de parede", "fachada",
    "lareira", "área gourmet", "espelho de pia", "rodapé", "bancada de varanda",
    "tampo de mesa", "balcão de loja", "recepção", "piso interno", "piso externo",
  ];
  const compras = [
    `${n} preço`, `${n} preço m2`, `${n} preço por metro quadrado`, `${n} valor m2`,
    `${n} valor por metro`, `${n} m2 instalado`, `${n} preço instalado`,
    `${n} chapa inteira`, `${n} chapa preço`, `${n} chapa m2`,
    `comprar ${n}`, `${n} sob medida`, `${n} orçamento`, `${n} orçamento online`,
    `${n} parcelado`, `${n} promoção`, `${n} direto da fábrica`, `${n} atacado`,
    `${n} preço 2026`, `${n} preço hoje`, `${n} tabela de preços`,
    `${n} qual o valor`, `${n} quanto custa`, `${n} barato`, `${n} mais barato`,
    `${n} preço justo`, `${n} 2cm preço`, `${n} 3cm preço`,
    `${n} chapa 2cm`, `${n} chapa 3cm`,
    // Versão sem o prefixo de categoria
    `${semCat} preço`, `${semCat} preço m2`, `${semCat} valor m2`, `${semCat} m2 instalado`,
    `${semCat} preço por metro quadrado`, `${semCat} qual o valor`, `${semCat} quanto custa`,
  ];
  const acab = baseAcab.flatMap((a) => [`${n} ${a}`, `${n} acabamento ${a}`, `${semCat} ${a}`]);
  const aplic = baseAplic.flatMap((a) => [`${n} para ${a}`, `${n} em ${a}`, `${semCat} para ${a}`]);
  const comparativas = [
    `${n} vs granito`, `${n} vs mármore`, `${n} vs quartzo`, `${n} vs quartzito`,
    `${n} vs porcelanato`, `${n} vs silestone`, `${n} vs dekton`,
    `${n} ou granito qual escolher`, `${n} ou mármore`, `${n} ou quartzo`,
    `${n} é melhor que mármore`, `${n} comparativo`,
    `${n} mancha`, `${n} risca`, `${n} resiste calor`, `${n} é poroso`,
    `${n} amarela`, `${n} mancha com vinho`, `${n} mancha com café`,
    `${n} resistência`, `${n} durabilidade`, `${n} vida útil`,
    `como limpar ${n}`, `como cuidar de ${n}`, `${n} manutenção`,
    `${n} amarelado o que fazer`, `${n} selagem hidrofugante`,
    `${n} produto de limpeza`, `${n} como tirar mancha`,
    `${n} pode usar álcool`, `${n} pode usar água sanitária`,
  ];
  const intencao = [
    `${n} cozinha branca`, `${n} cozinha preta`, `${n} cozinha cinza`,
    `${n} cozinha pequena`, `${n} cozinha americana`, `${n} cozinha moderna`,
    `${n} cozinha clássica`, `${n} cozinha planejada`, `${n} cozinha gourmet`,
    `${n} cozinha com ilha`, `${n} cozinha em u`, `${n} cozinha corredor`,
    `${n} banheiro pequeno`, `${n} banheiro de luxo`, `${n} banheiro social`,
    `${n} suíte master`, `${n} lavabo decorado`,
    `${n} apartamento`, `${n} casa alto padrão`, `${n} sobrado`,
    `${n} projeto arquitetônico`, `${n} obra residencial`, `${n} obra comercial`,
    `${n} fotos`, `${n} fotos reais`, `${n} antes e depois`,
    `${n} inspiração`, `${n} pinterest`, `${n} instagram`,
    `${n} combina com armário branco`, `${n} combina com madeira`,
    `${n} combina com cuba preta`, `${n} combina com torneira dourada`,
  ];
  const fornecedor = [
    `marmoraria ${n}`, `fornecedor de ${n}`, `onde comprar ${n}`,
    `${n} perto de mim`, `${n} loja perto de mim`, `${n} depósito perto de mim`,
    `${n} sao paulo`, `${n} sp`, `${n} rio de janeiro`, `${n} rj`,
    `${n} belo horizonte`, `${n} bh`, `${n} mg`,
    `${n} brasília`, `${n} df`, `${n} curitiba`, `${n} pr`,
    `${n} porto alegre`, `${n} rs`, `${n} salvador`, `${n} ba`,
    `${n} recife`, `${n} pe`, `${n} fortaleza`, `${n} ce`,
    `${n} goiânia`, `${n} go`, `${n} campinas`, `${n} sjc`,
    `${n} guarulhos`, `${n} osasco`, `${n} barueri`, `${n} santo andré`,
    `${n} são bernardo`, `${n} santos`, `${n} sorocaba`, `${n} ribeirão preto`,
    `instalação de ${n}`, `entrega de ${n}`, `frete ${n}`,
    `${n} entrega rápida`, `${n} pronta entrega`,
  ];
  const cat = categoria.toLowerCase();
  const catKw = [
    `${cat} ${n}`, `${cat} ${semCat}`, `tipo de ${cat} ${n}`,
    `${cat} para bancada ${n}`, `${cat} para cozinha ${n}`,
    `${cat} para banheiro ${n}`, `melhor ${cat} ${n}`,
    `${cat} ${n} bom`, `${cat} ${n} qualidade`, `${cat} ${n} chapa`,
  ];
  return [
    ...acab, ...aplic, ...compras, ...comparativas, ...intencao,
    ...fornecedor, ...catKw,
  ];
}

function make(categoria: Pedra["categoria"]) {
  return (s: string, n: string, origem: string, p: number, cor: string, resumo: string, aplic: string[], kw: string[]): Pedra => ({
    slug: s, nome: n, categoria, origem, precoMin: p, cor, resumo,
    aplicacoes: aplic,
    keywords: [...new Set([...kw, ...longTail(n, categoria)])],
  });
}
const g = make("Granito");
const m = make("Mármore");
const q = make("Quartzo");
const qz = make("Quartzito");

export const pedras: Pedra[] = [
  // Granitos
  g("granito-sao-gabriel", "Granito São Gabriel", "Espírito Santo", 480, "Preto com pontos brancos", "Granito preto com pontos brancos sutis. O granito mais vendido do Brasil — resistente, atemporal e com excelente custo-benefício.", ["Bancada de cozinha","Pia","Churrasqueira","Soleira"], ["granito sao gabriel","granito sao gabriel preço","granito sao gabriel polido","granito sao gabriel escovado","granito sao gabriel m2","granito preto pontos brancos"]),
  g("granito-preto-absoluto", "Granito Preto Absoluto", "Bahia", 590, "Preto uniforme", "Preto profundo e homogêneo, brilho espelhado. Ideal para cozinhas contemporâneas e churrasqueiras gourmet.", ["Cozinha contemporânea","Churrasqueira","Bancada gourmet"], ["granito preto absoluto","preto absoluto preço","granito preto absoluto m2","granito preto cozinha","preto absoluto bancada"]),
  g("granito-branco-siena", "Granito Branco Siena", "Minas Gerais", 520, "Branco com veios bege", "Tons claros e veios bege sutis. Elegante para cozinhas amplas e ambientes iluminados.", ["Bancada clara","Banheiro","Lavabo"], ["granito branco siena","branco siena preço","granito branco siena m2","granito claro cozinha","granito branco"]),
  g("granito-cinza-andorinha", "Granito Cinza Andorinha", "Espírito Santo", 420, "Cinza médio", "Cinza homogêneo com pontilhado fino. Versátil e econômico para projetos modernos.", ["Bancada","Soleira","Peitoril","Escada"], ["granito cinza andorinha","cinza andorinha preço","granito cinza","granito andorinha m2"]),
  g("granito-verde-ubatuba", "Granito Verde Ubatuba", "Bahia", 460, "Verde escuro", "Verde escuro com cristais douradinhos. Clássico brasileiro com toque tropical.", ["Cozinha","Churrasqueira","Bancada gourmet"], ["granito verde ubatuba","verde ubatuba preço","granito verde m2","granito ubatuba bancada"]),
  g("granito-branco-itaunas", "Granito Branco Itaúnas", "Espírito Santo", 540, "Branco com pontos pretos", "Branco com pontilhado preto, aparência de neve. Excelente para banheiros e lavabos.", ["Banheiro","Lavabo","Bancada clara"], ["granito branco itaunas","branco itaunas preço","granito branco pontos pretos"]),
  g("granito-amendoa", "Granito Amêndoa", "Bahia", 490, "Bege amendoado", "Tons quentes e aconchegantes. Combina com madeira clara e estilo rústico-chique.", ["Cozinha rústica","Banheiro","Churrasqueira"], ["granito amendoa","granito amendoa preço","granito bege m2"]),
  g("granito-vermelho-brasilia", "Granito Vermelho Brasília", "Distrito Federal", 510, "Vermelho com preto", "Vermelho intenso com veios pretos. Marcante para ambientes que pedem personalidade.", ["Churrasqueira","Bancada gourmet","Lareira"], ["granito vermelho brasilia","vermelho brasilia preço","granito vermelho m2"]),
  g("granito-azul-bahia", "Granito Azul Bahia", "Bahia", 1800, "Azul intenso", "Um dos granitos mais raros e valiosos do mundo. Azul vibrante com veios brancos.", ["Bancada de luxo","Banheiro de alto padrão","Painel decorativo"], ["granito azul bahia","azul bahia preço","granito azul m2","granito mais caro brasil"]),
  g("granito-juparana", "Granito Juparana", "Espírito Santo", 470, "Bege com veios marrons", "Veios fluidos em tons terrosos. Atemporal para cozinhas clássicas.", ["Cozinha","Bancada","Churrasqueira"], ["granito juparana","juparana preço","granito juparana m2"]),
  g("granito-preto-sao-marcos", "Granito Preto São Marcos", "Espírito Santo", 550, "Preto com brilho", "Preto profundo com micro-brilho. Alternativa ao Preto Absoluto.", ["Cozinha","Churrasqueira"], ["granito preto sao marcos","preto sao marcos preço"]),
  g("granito-marrom-imperial", "Granito Marrom Imperial", "Bahia", 580, "Marrom escuro", "Marrom rico com cristais marrons e dourados. Imponente.", ["Bancada gourmet","Lareira"], ["granito marrom imperial","marrom imperial preço"]),

  // Mármores
  m("marmore-carrara", "Mármore Carrara", "Itália", 890, "Branco com veios cinza", "O mármore mais icônico do mundo. Branco puro com veios cinza sutis — o clássico italiano.", ["Banheiro","Bancada de banheiro","Lavabo","Mesa","Revestimento"], ["marmore carrara","carrara preço","marmore carrara m2","marmore italiano","marmore branco veios cinza","marmore carrara bancada"]),
  m("marmore-calacatta-gold", "Mármore Calacatta Gold", "Itália", 1450, "Branco com veios dourados", "Branco brilhante com veios largos em dourado e cinza. O ápice do luxo italiano.", ["Banheiro de luxo","Bancada premium","Mesa","Painel"], ["marmore calacatta","calacatta gold","calacatta preço","marmore calacatta m2","marmore luxo"]),
  m("marmore-statuario", "Mármore Statuário", "Itália", 1620, "Branco com veios cinza definidos", "Branco intenso com veios cinza desenhados. Predileto de arquitetos.", ["Banheiro","Painel","Revestimento de luxo"], ["marmore statuario","statuario preço","marmore statuario m2"]),
  m("marmore-nero-marquina", "Mármore Nero Marquina", "Espanha", 1180, "Preto com veios brancos", "Preto profundo com veios brancos contrastantes. Dramático e sofisticado.", ["Bancada","Painel","Revestimento"], ["marmore nero marquina","nero marquina preço","marmore preto veios brancos"]),
  m("marmore-emperador", "Mármore Emperador", "Espanha", 780, "Marrom com veios brancos", "Marrom rico com veios claros. Tom quente para banheiros sofisticados.", ["Banheiro","Bancada","Mesa"], ["marmore emperador","emperador preço","marmore marrom"]),
  m("marmore-travertino", "Mármore Travertino", "Itália/Turquia", 520, "Bege poroso", "Bege quente com textura natural. Atmosfera rústica-mediterrânea.", ["Revestimento","Piso","Banheiro"], ["marmore travertino","travertino preço","travertino romano","travertino revestimento"]),
  m("marmore-crema-marfil", "Mármore Crema Marfil", "Espanha", 690, "Bege creme", "Bege uniforme e suave. Atemporal para banheiros clássicos.", ["Banheiro","Bancada","Piso"], ["marmore crema marfil","crema marfil preço","marmore bege"]),
  m("marmore-thassos", "Mármore Thassos", "Grécia", 1350, "Branco puro", "Branco puro absoluto, sem veios. O mais branco dos mármores.", ["Banheiro de luxo","Spa","Revestimento"], ["marmore thassos","thassos preço","marmore mais branco"]),
  m("marmore-botticino", "Mármore Botticino", "Itália", 720, "Bege claro", "Bege claro uniforme com veios sutis. Versátil e elegante.", ["Banheiro","Bancada","Piso"], ["marmore botticino","botticino preço"]),

  // Quartzitos
  qz("quartzito-taj-mahal", "Quartzito Taj Mahal", "Espírito Santo", 1280, "Bege dourado com veios", "Quartzito brasileiro mundialmente desejado. Resistência de granito com beleza de mármore.", ["Bancada de cozinha","Banheiro de luxo","Mesa"], ["quartzito taj mahal","taj mahal preço","quartzito taj mahal m2","quartzito brasileiro","quartzito bancada"]),
  qz("quartzito-mont-blanc", "Quartzito Mont Blanc", "Brasil", 1390, "Branco com veios cinza", "Branco neve com veios cinza, resistência altíssima. Alternativa ao Calacatta com mais robustez.", ["Bancada","Banheiro","Cozinha de luxo"], ["quartzito mont blanc","mont blanc preço","quartzito branco"]),
  qz("quartzito-macaubas", "Quartzito Macaúbas", "Bahia", 1480, "Azul com branco", "Azul oceano com manchas brancas. Único e impressionante.", ["Painel","Bancada exclusiva","Banheiro"], ["quartzito macaubas","macaubas preço","quartzito azul"]),
  qz("quartzito-patagonia", "Quartzito Patagonia", "Brasil", 1620, "Multicolorido", "Movimento de cores intenso — cada chapa é única. Para projetos autorais.", ["Painel","Bancada de destaque"], ["quartzito patagonia","patagonia preço","quartzito exotico"]),

  // Quartzos engenheirados
  q("quartzo-branco", "Quartzo Branco", "Industrial", 1180, "Branco uniforme", "Quartzo engenheirado branco neve. Não porta — não mancha, não risca.", ["Bancada","Cozinha","Banheiro"], ["quartzo branco","quartzo branco preço","silestone branco","caesarstone branco","quartzo engenheirado"]),
  q("quartzo-preto", "Quartzo Preto", "Industrial", 1220, "Preto uniforme", "Quartzo preto absoluto. Manutenção zero, resistência máxima.", ["Bancada","Cozinha contemporânea"], ["quartzo preto","quartzo preto preço","silestone preto"]),
  q("quartzo-cinza", "Quartzo Cinza Cimento", "Industrial", 1150, "Cinza concreto", "Tom cimento queimado em quartzo. Visual industrial sem porosidade.", ["Bancada","Mesa","Cozinha industrial"], ["quartzo cinza","quartzo cimento","quartzo concreto"]),
  q("quartzo-calacatta", "Quartzo Calacatta", "Industrial", 1380, "Branco com veios dourados", "Aparência de Calacatta italiano com a resistência do quartzo.", ["Bancada","Banheiro","Mesa"], ["quartzo calacatta","quartzo veios dourados","quartzo imita calacatta"]),
  q("quartzo-bege", "Quartzo Bege", "Industrial", 1100, "Bege neutro", "Bege uniforme. Atemporal e fácil de combinar.", ["Bancada","Cozinha clássica"], ["quartzo bege","quartzo bege preço"]),
];
