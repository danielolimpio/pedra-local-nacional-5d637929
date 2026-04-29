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
];
