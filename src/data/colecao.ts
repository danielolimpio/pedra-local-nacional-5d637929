// Catálogo completo de pedras da Coleção
// Origem: Nacionais (BR), Importadas, Ultra Potenza (linha premium), Vitta (linha exclusiva)
// Tipos: Granito, Mármore, Quartzo, Quartzito

import asDePaus from "@/assets/nacional-granito-as-de-paus.webp";
import amareloCapri from "@/assets/nacional-granito-amarelo-capri.webp";
import amareloFlorenca from "@/assets/nacional-granito-amarelo-florenca.webp";
import amareloMaracuja from "@/assets/nacional-granito-amarelo-maracuja.webp";
import amareloOuroBrasil from "@/assets/nacional-granito-amarelo-ouro-brasil.webp";
import amareloTreviso from "@/assets/nacional-granito-amarelo-treviso.webp";
import arabesco from "@/assets/nacional-granito-arabesco.webp";
import begeBahia from "@/assets/nacional-marmore-bege-bahia.webp";
import brancoMarfim from "@/assets/nacional-granito-branco-marfim.webp";
import brancoCaravelas from "@/assets/nacional-granito-branco-caravelas.webp";
import brancoCarrarinha from "@/assets/nacional-marmore-branco-carrarinha.webp";
import brancoCeara from "@/assets/nacional-granito-branco-ceara.webp";
import brancoDallas from "@/assets/nacional-granito-branco-dallas.webp";
import brancoFortaleza from "@/assets/nacional-granito-branco-fortaleza.webp";
import brancoItaunas from "@/assets/nacional-granito-branco-itaunas.webp";
import brancoPintaVerde from "@/assets/nacional-marmore-branco-pinta-verde.webp";
import brancoSiena from "@/assets/nacional-granito-branco-siena.webp";
import cafeImperial from "@/assets/nacional-granito-cafe-imperial.webp";
import cinzaAbsoluto from "@/assets/nacional-granito-cinza-absoluto.webp";
import cinzaCastelo from "@/assets/nacional-granito-cinza-castelo.webp";
import cinzaCorumba from "@/assets/nacional-granito-cinza-corumba.webp";
import douradoCarioca from "@/assets/nacional-granito-dourado-carioca.webp";
import marromAbsoluto from "@/assets/nacional-granito-marrom-absoluto.webp";
import marromTabaco from "@/assets/nacional-granito-marrom-tabaco.webp";
import ocreItabira from "@/assets/nacional-granito-ocre-itabira.webp";
import botticino from "@/assets/nacional-marmore-botticino.webp";
import travertino from "@/assets/nacional-marmore-travertino.webp";
import classicoCachoeiro from "@/assets/nacional-marmore-classico-cachoeiro.webp";
import brancoExtra from "@/assets/nacional-marmore-branco-extra.webp";
import rajadoCinza from "@/assets/nacional-marmore-rajado-cinza.webp";
import ornamentalGuidoni from "@/assets/nacional-granito-ornamental-guidoni.webp";
import ornamentalValcelio from "@/assets/nacional-granito-ornamental-valcelio.webp";
import pretoSantaAngelica from "@/assets/nacional-granito-preto-santa-angelica.webp";
import pretoIndiano from "@/assets/nacional-granito-preto-indiano.webp";
import pretoSaoGabriel from "@/assets/nacional-granito-preto-sao-gabriel.webp";
import pretoViaLactea from "@/assets/nacional-granito-preto-via-lactea.webp";
import verdeCandeias from "@/assets/nacional-granito-verde-candeias.webp";
import verdePavao from "@/assets/nacional-granito-verde-pavao.webp";
import verdeUbatuba from "@/assets/nacional-granito-verde-ubatuba.webp";
import vermelhoBrasilia from "@/assets/nacional-granito-vermelho-brasilia.webp";
import bateigBlue from "@/assets/importada-marmore-bateig-blue.webp";
import brancoPighes from "@/assets/importada-marmore-branco-pighes.webp";
import brancoSivec from "@/assets/importada-marmore-branco-sivec.webp";
import brancoThassos from "@/assets/importada-marmore-branco-thassos.webp";
import bronzeArmani from "@/assets/importada-marmore-bronze-armani.webp";
import calacattaExtra from "@/assets/importada-marmore-calacatta-extra.webp";
import calacattaOro from "@/assets/importada-marmore-calacatta-oro.webp";
import calizaAlba from "@/assets/importada-marmore-caliza-alba.webp";
import calizaBlanca from "@/assets/importada-marmore-caliza-blanca.webp";
import calizaCapri from "@/assets/importada-marmore-caliza-capri.webp";
import carraraGioiaPremium from "@/assets/importada-marmore-carrara-gioia-premium.webp";
import cremaEgipcio from "@/assets/importada-marmore-crema-egipcio.webp";
import cremaMarfil from "@/assets/importada-marmore-crema-marfil.webp";
import cremaValencia from "@/assets/importada-marmore-crema-valencia.webp";
import marromImperialPremium from "@/assets/importada-marmore-marrom-imperial-premium.webp";
import marmoreBronze from "@/assets/importada-marmore-bronze.webp";
import marromImperadorChines from "@/assets/importada-marmore-marrom-imperador-chines.webp";
import marromImperadorEspanhol from "@/assets/importada-marmore-marrom-imperador-espanhol.webp";
import montDore from "@/assets/importada-marmore-mont-dore.webp";
import neroChinesPremium from "@/assets/importada-marmore-nero-chines-premium.webp";
import neroEspanhol from "@/assets/importada-marmore-nero-espanhol.webp";
import neroMontoro from "@/assets/importada-marmore-nero-montoro.webp";
import onixWhite from "@/assets/importada-onix-white.webp";
import onixYellow from "@/assets/importada-onix-yellow.webp";
import perlinoBianco from "@/assets/importada-marmore-perlino-bianco.webp";
import rainForestGold from "@/assets/importada-marmore-rain-forest-gold.webp";
import rainForestGreen from "@/assets/importada-marmore-rain-forest-green.webp";
import rainForestMulticolor from "@/assets/importada-marmore-rain-forest-multicolor.webp";
import rainForestSilver from "@/assets/importada-marmore-rain-forest-silver.webp";
import relvinha from "@/assets/nacional-marmore-relvinha.webp";

export type Origem = "Nacionais" | "Importadas" | "Ultra Potenza" | "Vitta";
export type Tipo = "Granito" | "Mármore" | "Quartzo" | "Quartzito" | "Ônix";

export interface Pedra {
  nome: string;
  tipo: Tipo;
  origem: Origem;
  image: string;
  descricao: string;
}

export const colecao: Pedra[] = [
  {
    nome: "Granito Ás de Paus",
    tipo: "Granito",
    origem: "Nacionais",
    image: asDePaus,
    descricao: "Granito cinza com pontos pretos marcantes, alta resistência para bancadas.",
  },
  {
    nome: "Granito Amarelo Capri",
    tipo: "Granito",
    origem: "Nacionais",
    image: amareloCapri,
    descricao: "Tonalidade marrom rosada uniforme, ideal para ambientes aconchegantes.",
  },
  {
    nome: "Granito Amarelo Florença",
    tipo: "Granito",
    origem: "Nacionais",
    image: amareloFlorenca,
    descricao: "Padrão exclusivo com manchas amarelo-ocre sobre fundo escuro.",
  },
  {
    nome: "Granito Amarelo Maracujá",
    tipo: "Granito",
    origem: "Nacionais",
    image: amareloMaracuja,
    descricao: "Tons quentes amarelo-rosados, elegante e versátil.",
  },
  {
    nome: "Granito Amarelo Ouro Brasil",
    tipo: "Granito",
    origem: "Nacionais",
    image: amareloOuroBrasil,
    descricao: "Clássico granito dourado brasileiro, símbolo de sofisticação.",
  },
  {
    nome: "Granito Amarelo Treviso",
    tipo: "Granito",
    origem: "Nacionais",
    image: amareloTreviso,
    descricao: "Movimentação dourada com veios delicados, alto padrão estético.",
  },
  {
    nome: "Granito Arabesco",
    tipo: "Granito",
    origem: "Nacionais",
    image: arabesco,
    descricao: "Fundo claro com pontos avermelhados, leve e atemporal.",
  },
  {
    nome: "Mármore Bege Bahia",
    tipo: "Mármore",
    origem: "Nacionais",
    image: begeBahia,
    descricao: "Mármore travertinado bege com veios marcantes, extraído na Bahia.",
  },
  {
    nome: "Granito Branco Marfim",
    tipo: "Granito",
    origem: "Nacionais",
    image: brancoMarfim,
    descricao: "Granito claro com pontos delicados, neutro para qualquer projeto.",
  },
  {
    nome: "Granito Branco Caravelas",
    tipo: "Granito",
    origem: "Nacionais",
    image: brancoCaravelas,
    descricao: "Tom claro acinzentado com pequenos pontos avermelhados.",
  },
  {
    nome: "Mármore Branco Carrarinha",
    tipo: "Mármore",
    origem: "Nacionais",
    image: brancoCarrarinha,
    descricao: "Versão nacional do clássico Carrara, fundo branco com veios cinza suaves.",
  },
  {
    nome: "Granito Branco Ceará",
    tipo: "Granito",
    origem: "Nacionais",
    image: brancoCeara,
    descricao: "Cinza claro com pontos finos pretos, ótimo custo-benefício para bancadas.",
  },
  {
    nome: "Granito Branco Dallas",
    tipo: "Granito",
    origem: "Nacionais",
    image: brancoDallas,
    descricao: "Fundo claro com pontos avermelhados e pretos, padrão atemporal.",
  },
  {
    nome: "Granito Branco Fortaleza",
    tipo: "Granito",
    origem: "Nacionais",
    image: brancoFortaleza,
    descricao: "Cinza com grãos pretos uniformes, alta resistência e versatilidade.",
  },
  {
    nome: "Granito Branco Itaúnas",
    tipo: "Granito",
    origem: "Nacionais",
    image: brancoItaunas,
    descricao: "Tom bege rosado uniforme, sofisticado e discreto.",
  },
  {
    nome: "Mármore Branco Pinta Verde",
    tipo: "Mármore",
    origem: "Nacionais",
    image: brancoPintaVerde,
    descricao: "Mármore branco com delicadas pintas verdes, exclusivo e elegante.",
  },
  {
    nome: "Granito Branco Siena",
    tipo: "Granito",
    origem: "Nacionais",
    image: brancoSiena,
    descricao: "Branco com fundo levemente rosado, clássico em cozinhas brasileiras.",
  },
  {
    nome: "Granito Café Imperial",
    tipo: "Granito",
    origem: "Nacionais",
    image: cafeImperial,
    descricao: "Marrom escuro intenso com brilhos cristalinos, sofisticação marcante.",
  },
  {
    nome: "Granito Cinza Absoluto",
    tipo: "Granito",
    origem: "Nacionais",
    image: cinzaAbsoluto,
    descricao: "Cinza escuro uniforme, visual minimalista e contemporâneo.",
  },
  {
    nome: "Granito Cinza Castelo",
    tipo: "Granito",
    origem: "Nacionais",
    image: cinzaCastelo,
    descricao: "Cinza médio com grãos pretos finos, robusto e versátil.",
  },
  {
    nome: "Granito Cinza Corumbá",
    tipo: "Granito",
    origem: "Nacionais",
    image: cinzaCorumba,
    descricao: "Cinza claro com pontos pretos uniformes, clássico e econômico.",
  },
  {
    nome: "Granito Dourado Carioca",
    tipo: "Granito",
    origem: "Nacionais",
    image: douradoCarioca,
    descricao: "Marrom dourado uniforme com brilhos delicados, sofisticação atemporal.",
  },
  {
    nome: "Granito Marrom Absoluto",
    tipo: "Granito",
    origem: "Nacionais",
    image: marromAbsoluto,
    descricao: "Marrom escuro absoluto, liso e elegante para projetos contemporâneos.",
  },
  {
    nome: "Granito Marrom Tabaco",
    tipo: "Granito",
    origem: "Nacionais",
    image: marromTabaco,
    descricao: "Tom marrom avermelhado intenso, aconchegante e marcante.",
  },
  {
    nome: "Granito Ocre Itabira",
    tipo: "Granito",
    origem: "Nacionais",
    image: ocreItabira,
    descricao: "Cinza com pontos marrom-ocre, extraído em Itabira (MG), alta durabilidade.",
  },
  {
    nome: "Mármore Botticino",
    tipo: "Mármore",
    origem: "Nacionais",
    image: botticino,
    descricao: "Bege claro com veios dourados, clássico para revestimentos refinados.",
  },
  {
    nome: "Mármore Travertino",
    tipo: "Mármore",
    origem: "Nacionais",
    image: travertino,
    descricao: "Bege uniforme com riscas naturais, ideal para fachadas e pisos.",
  },
  {
    nome: "Mármore Clássico Cachoeiro",
    tipo: "Mármore",
    origem: "Nacionais",
    image: classicoCachoeiro,
    descricao: "Branco com veios cinza suaves, extraído em Cachoeiro de Itapemirim (ES).",
  },
  {
    nome: "Mármore Branco Extra",
    tipo: "Mármore",
    origem: "Nacionais",
    image: brancoExtra,
    descricao: "Branco puríssimo de fundo uniforme, máxima sofisticação para projetos clean.",
  },
  {
    nome: "Mármore Rajado Cinza",
    tipo: "Mármore",
    origem: "Nacionais",
    image: rajadoCinza,
    descricao: "Branco com rajados cinza marcantes, movimentação elegante e contemporânea.",
  },
  {
    nome: "Granito Ornamental Guidoni",
    tipo: "Granito",
    origem: "Nacionais",
    image: ornamentalGuidoni,
    descricao: "Bege amarelado clássico com pontos marrons, alta procura para bancadas.",
  },
  {
    nome: "Granito Ornamental Valcélio",
    tipo: "Granito",
    origem: "Nacionais",
    image: ornamentalValcelio,
    descricao: "Tons bege rosados com movimentação suave, ideal para cozinhas amplas.",
  },
  {
    nome: "Granito Preto Santa Angélica",
    tipo: "Granito",
    origem: "Nacionais",
    image: pretoSantaAngelica,
    descricao: "Preto absoluto com leves brilhos, sofisticação máxima em projetos modernos.",
  },
  {
    nome: "Granito Preto Indiano",
    tipo: "Granito",
    origem: "Nacionais",
    image: pretoIndiano,
    descricao: "Preto com veios brancos marcantes, movimentação dramática e exclusiva.",
  },
  {
    nome: "Granito Preto São Gabriel",
    tipo: "Granito",
    origem: "Nacionais",
    image: pretoSaoGabriel,
    descricao: "Preto absoluto uniforme, clássico atemporal para bancadas elegantes.",
  },
  {
    nome: "Granito Preto Via Láctea",
    tipo: "Granito",
    origem: "Nacionais",
    image: pretoViaLactea,
    descricao: "Fundo preto com veios brancos como estrelas, visual marcante e sofisticado.",
  },
  {
    nome: "Granito Verde Candeias",
    tipo: "Granito",
    origem: "Nacionais",
    image: verdeCandeias,
    descricao: "Verde escuro com movimentação cinza, elegante para revestimentos e bancadas.",
  },
  {
    nome: "Granito Verde Pavão",
    tipo: "Granito",
    origem: "Nacionais",
    image: verdePavao,
    descricao: "Preto esverdeado com brilhos cristalinos, robusto e luxuoso.",
  },
  {
    nome: "Granito Verde Ubatuba",
    tipo: "Granito",
    origem: "Nacionais",
    image: verdeUbatuba,
    descricao: "Verde escuro com pontos dourados, um dos granitos brasileiros mais vendidos.",
  },
  {
    nome: "Granito Vermelho Brasília",
    tipo: "Granito",
    origem: "Nacionais",
    image: vermelhoBrasilia,
    descricao: "Vermelho intenso com pontos pretos, marcante e exclusivo.",
  },
  {
    nome: "Mármore Bateig Blue",
    tipo: "Mármore",
    origem: "Importadas",
    image: bateigBlue,
    descricao: "Calcário cinza-azulado da Espanha, textura suave para projetos contemporâneos.",
  },
  {
    nome: "Mármore Branco Pighes",
    tipo: "Mármore",
    origem: "Importadas",
    image: brancoPighes,
    descricao: "Mármore italiano branco com veios cinza delicados, elegância clássica.",
  },
  {
    nome: "Mármore Branco Sivec",
    tipo: "Mármore",
    origem: "Importadas",
    image: brancoSivec,
    descricao: "Mármore grego branco puríssimo, fundo uniforme e luminosidade rara.",
  },
  {
    nome: "Mármore Branco Thassos",
    tipo: "Mármore",
    origem: "Importadas",
    image: brancoThassos,
    descricao: "Mármore grego ultra branco da ilha de Thassos, máximo padrão de luxo.",
  },
  {
    nome: "Mármore Bronze Armani",
    tipo: "Mármore",
    origem: "Importadas",
    image: bronzeArmani,
    descricao: "Marrom escuro com veios brancos marcantes, sofisticação turca exclusiva.",
  },
  {
    nome: "Mármore Calacatta Extra",
    tipo: "Mármore",
    origem: "Importadas",
    image: calacattaExtra,
    descricao: "Mármore italiano branco com veios dourados intensos, ícone do luxo mundial.",
  },
  {
    nome: "Mármore Calacatta Oro",
    tipo: "Mármore",
    origem: "Importadas",
    image: calacattaOro,
    descricao: "Branco italiano com veios dourados delicados, sofisticação atemporal.",
  },
  {
    nome: "Mármore Caliza Alba",
    tipo: "Mármore",
    origem: "Importadas",
    image: calizaAlba,
    descricao: "Calcário espanhol bege claro com textura uniforme, ideal para revestimentos.",
  },
  {
    nome: "Mármore Caliza Blanca",
    tipo: "Mármore",
    origem: "Importadas",
    image: calizaBlanca,
    descricao: "Calcário espanhol branco quase liso, minimalismo e sofisticação.",
  },
  {
    nome: "Mármore Caliza Capri",
    tipo: "Mármore",
    origem: "Importadas",
    image: calizaCapri,
    descricao: "Calcário espanhol bege claro com pontos delicados, atmosfera mediterrânea.",
  },
  {
    nome: "Mármore Carrara Gioia Premium",
    tipo: "Mármore",
    origem: "Importadas",
    image: carraraGioiaPremium,
    descricao: "Versão importada premium do Carrara, branco com veios cinza expressivos.",
  },
  {
    nome: "Mármore Crema Egípcio",
    tipo: "Mármore",
    origem: "Importadas",
    image: cremaEgipcio,
    descricao: "Bege quente do Egito com manchas naturais, atmosfera mediterrânea autêntica.",
  },
  {
    nome: "Mármore Crema Marfil",
    tipo: "Mármore",
    origem: "Importadas",
    image: cremaMarfil,
    descricao: "Clássico bege espanhol uniforme, um dos mármores mais vendidos do mundo.",
  },
  {
    nome: "Mármore Crema Valencia",
    tipo: "Mármore",
    origem: "Importadas",
    image: cremaValencia,
    descricao: "Bege rosado espanhol com veios alaranjados, charme rústico e elegante.",
  },
  {
    nome: "Mármore Marrom Imperial Premium",
    tipo: "Mármore",
    origem: "Importadas",
    image: marromImperialPremium,
    descricao: "Marrom escuro com veios brancos dramáticos, importado de alta sofisticação.",
  },
  {
    nome: "Mármore Bronze",
    tipo: "Mármore",
    origem: "Importadas",
    image: marmoreBronze,
    descricao: "Marrom acinzentado com veios brancos marcantes, sofisticação contemporânea.",
  },
  {
    nome: "Mármore Marrom Imperador Chinês",
    tipo: "Mármore",
    origem: "Importadas",
    image: marromImperadorChines,
    descricao: "Marrom escuro com manchas claras, importado da China com excelente custo-benefício.",
  },
  {
    nome: "Mármore Marrom Imperador Espanhol",
    tipo: "Mármore",
    origem: "Importadas",
    image: marromImperadorEspanhol,
    descricao: "Clássico marrom espanhol com veios bege, ícone do luxo europeu.",
  },
  {
    nome: "Mármore Mont Dore",
    tipo: "Mármore",
    origem: "Importadas",
    image: montDore,
    descricao: "Bege claro francês com textura fina, sofisticação discreta para projetos clean.",
  },
  {
    nome: "Mármore Nero Chinês Premium",
    tipo: "Mármore",
    origem: "Importadas",
    image: neroChinesPremium,
    descricao: "Preto profundo com veios brancos marcantes, importado para projetos icônicos.",
  },
  {
    nome: "Mármore Nero Espanhol",
    tipo: "Mármore",
    origem: "Importadas",
    image: neroEspanhol,
    descricao: "Preto profundo espanhol com veios brancos marcantes, sofisticação ibérica.",
  },
  {
    nome: "Mármore Nero Montoro",
    tipo: "Mármore",
    origem: "Importadas",
    image: neroMontoro,
    descricao: "Preto espanhol com veios cinza horizontais, movimentação dramática única.",
  },
  {
    nome: "Ônix White",
    tipo: "Ônix",
    origem: "Importadas",
    image: onixWhite,
    descricao: "Ônix branco translúcido, perfeito para painéis retroiluminados de luxo.",
  },
  {
    nome: "Ônix Yellow",
    tipo: "Ônix",
    origem: "Importadas",
    image: onixYellow,
    descricao: "Ônix amarelo intenso translúcido, peça exclusiva para projetos icônicos.",
  },
  {
    nome: "Mármore Perlino Bianco",
    tipo: "Mármore",
    origem: "Importadas",
    image: perlinoBianco,
    descricao: "Mármore italiano bege claro com textura uniforme, atemporal e elegante.",
  },
  {
    nome: "Mármore Rain Forest Gold",
    tipo: "Mármore",
    origem: "Importadas",
    image: rainForestGold,
    descricao: "Mármore indiano dourado com veios marrons em rede, exótico e sofisticado.",
  },
  {
    nome: "Mármore Rain Forest Green",
    tipo: "Mármore",
    origem: "Importadas",
    image: rainForestGreen,
    descricao: "Mármore indiano verde-musgo com veios bordô, movimentação natural marcante.",
  },
  {
    nome: "Mármore Rain Forest Multicolor",
    tipo: "Mármore",
    origem: "Importadas",
    image: rainForestMulticolor,
    descricao: "Mármore indiano marrom dourado com veios vermelhos, exuberância tropical.",
  },
  {
    nome: "Mármore Rain Forest Silver",
    tipo: "Mármore",
    origem: "Importadas",
    image: rainForestSilver,
    descricao: "Mármore indiano verde acinzentado com veios bordô, padrão exclusivo.",
  },
  {
    nome: "Mármore Relvinha",
    tipo: "Mármore",
    origem: "Nacionais",
    image: relvinha,
    descricao: "Mármore brasileiro bege acinzentado com riscas suaves, extraído em MG.",
  },
];
