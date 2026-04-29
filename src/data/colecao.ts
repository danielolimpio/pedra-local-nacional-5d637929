// Catálogo completo de pedras da Coleção
// Origem: Nacionais (BR), Importadas, Ultra Potenza (linha premium), Vitta (linha exclusiva)
// Tipos: Granito, Mármore, Quartzo, Quartzito

import asDePaus from "@/assets/nacional-granito-as-de-paus.jpeg";
import amareloCapri from "@/assets/nacional-granito-amarelo-capri.jpeg";
import amareloFlorenca from "@/assets/nacional-granito-amarelo-florenca.jpeg";
import amareloMaracuja from "@/assets/nacional-granito-amarelo-maracuja.jpeg";
import amareloOuroBrasil from "@/assets/nacional-granito-amarelo-ouro-brasil.jpeg";
import amareloTreviso from "@/assets/nacional-granito-amarelo-treviso.jpeg";
import arabesco from "@/assets/nacional-granito-arabesco.jpeg";
import begeBahia from "@/assets/nacional-marmore-bege-bahia.jpeg";
import brancoMarfim from "@/assets/nacional-granito-branco-marfim.jpeg";
import brancoCaravelas from "@/assets/nacional-granito-branco-caravelas.jpeg";
import brancoCarrarinha from "@/assets/nacional-marmore-branco-carrarinha.jpeg";
import brancoCeara from "@/assets/nacional-granito-branco-ceara.jpeg";
import brancoDallas from "@/assets/nacional-granito-branco-dallas.jpeg";
import brancoFortaleza from "@/assets/nacional-granito-branco-fortaleza.jpeg";
import brancoItaunas from "@/assets/nacional-granito-branco-itaunas.jpeg";
import brancoPintaVerde from "@/assets/nacional-marmore-branco-pinta-verde.jpeg";
import brancoSiena from "@/assets/nacional-granito-branco-siena.jpeg";
import cafeImperial from "@/assets/nacional-granito-cafe-imperial.jpeg";
import cinzaAbsoluto from "@/assets/nacional-granito-cinza-absoluto.jpeg";
import cinzaCastelo from "@/assets/nacional-granito-cinza-castelo.jpeg";
import cinzaCorumba from "@/assets/nacional-granito-cinza-corumba.jpeg";
import douradoCarioca from "@/assets/nacional-granito-dourado-carioca.jpeg";
import marromAbsoluto from "@/assets/nacional-granito-marrom-absoluto.jpeg";
import marromTabaco from "@/assets/nacional-granito-marrom-tabaco.jpeg";
import ocreItabira from "@/assets/nacional-granito-ocre-itabira.jpeg";
import botticino from "@/assets/nacional-marmore-botticino.jpeg";
import travertino from "@/assets/nacional-marmore-travertino.jpeg";
import classicoCachoeiro from "@/assets/nacional-marmore-classico-cachoeiro.jpeg";
import brancoExtra from "@/assets/nacional-marmore-branco-extra.jpeg";
import rajadoCinza from "@/assets/nacional-marmore-rajado-cinza.jpeg";
import ornamentalGuidoni from "@/assets/nacional-granito-ornamental-guidoni.jpeg";
import ornamentalValcelio from "@/assets/nacional-granito-ornamental-valcelio.jpeg";
import pretoSantaAngelica from "@/assets/nacional-granito-preto-santa-angelica.jpeg";
import pretoIndiano from "@/assets/nacional-granito-preto-indiano.jpeg";
import pretoSaoGabriel from "@/assets/nacional-granito-preto-sao-gabriel.jpeg";
import pretoViaLactea from "@/assets/nacional-granito-preto-via-lactea.jpeg";
import verdeCandeias from "@/assets/nacional-granito-verde-candeias.jpeg";
import verdePavao from "@/assets/nacional-granito-verde-pavao.jpeg";
import verdeUbatuba from "@/assets/nacional-granito-verde-ubatuba.jpeg";
import vermelhoBrasilia from "@/assets/nacional-granito-vermelho-brasilia.jpeg";
import bateigBlue from "@/assets/importada-marmore-bateig-blue.jpeg";
import brancoPighes from "@/assets/importada-marmore-branco-pighes.jpeg";
import brancoSivec from "@/assets/importada-marmore-branco-sivec.jpeg";
import brancoThassos from "@/assets/importada-marmore-branco-thassos.jpeg";
import bronzeArmani from "@/assets/importada-marmore-bronze-armani.jpeg";
import calacattaExtra from "@/assets/importada-marmore-calacatta-extra.jpeg";
import calacattaOro from "@/assets/importada-marmore-calacatta-oro.jpeg";
import calizaAlba from "@/assets/importada-marmore-caliza-alba.jpeg";
import calizaBlanca from "@/assets/importada-marmore-caliza-blanca.jpeg";
import calizaCapri from "@/assets/importada-marmore-caliza-capri.jpeg";

export type Origem = "Nacionais" | "Importadas" | "Ultra Potenza" | "Vitta";
export type Tipo = "Granito" | "Mármore" | "Quartzo" | "Quartzito";

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
];
