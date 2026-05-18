import ring from "@/assets/product-ring.jpg";
import necklace from "@/assets/product-necklace.jpg";
import earrings from "@/assets/product-earrings.jpg";
import bracelet from "@/assets/product-bracelet.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  tagline: string;
  story: string;
  poem: string;
};

const poemFlores = `Algunas flores nacen en entornos nutritivos,
lugares seguros,
reconfortantes.
Otras veces, hasta en las condiciones más adversas,
entre el agua y el polvo,
logran ser,
flore-ser.
Nacer es ser semilla,
esperar para germinar.
Flor es fragilidad inmensa,
es la belleza de (flore)ser humano.`;

const poemHebra = `Hebra es hilo,
hilo es la vida,
hilo de vida.
Comienza al nacer,
al llorar por primera vez.
Continúa al aprender que la vida se teje;
el tejido somos nosotros.
Una hebra parece mínima,
pero basta para unir fragmentos,
para rodear el cuerpo,
para volver una y otra vez sobre el pensamiento,
sobre el recuerdo.`;

export const products: Product[] = [
  {
    id: "collar-marlu-rojo",
    name: "Collar Marlú Rojo",
    price: 140000,
    image: ring,
    tagline: "La belleza de flore-ser humano.",
    story:
      "Hecho a mano con mostacillas rojas, café-dorado, amarillas y vino tinto. Hebra de color a elección, incluye perlas, terminado en piedras naturales o mostacillas grandes de preferencia.",
    poem: poemFlores,
  },
  {
    id: "collar-marlu-azul",
    name: "Collar Marlú Azul",
    price: 140000,
    image: necklace,
    tagline: "Entre el agua y el polvo, flore-ser.",
    story:
      "Hecho a mano con mostacillas azules (celeste, rey) y tornasol morado. Hebra de color a elección, terminado en piedras naturales o mostacillas grandes de preferencia.",
    poem: poemFlores,
  },
  {
    id: "collar-marlu-rosado",
    name: "Collar Marlú Rosado",
    price: 140000,
    image: earrings,
    tagline: "Hilo de vida que vuelve al recuerdo.",
    story:
      "Hecho a mano con mostacillas rosadas, terminado en piedras naturales a elección. Pensado para rodear el cuerpo de distintas formas.",
    poem: poemFlores,
  },
  {
    id: "collar-hebra-tinta",
    name: "Collar Hebra Tinta",
    price: 45000,
    image: bracelet,
    tagline: "El tejido somos nosotros.",
    story:
      "Hecho a mano con mostacillas blancas y negras, terminado en piedras naturales a elección. Pensado para rodear el cuerpo de distintas formas.",
    poem: poemHebra,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
