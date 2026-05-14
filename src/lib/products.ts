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
};

export const products: Product[] = [
  {
    id: "collar-marlu-rojo",
    name: "Collar Marlú Rojo",
    price: 140000,
    image: ring,
    tagline: "La belleza de flore-ser humano.",
    story:
      "Algunas flores nacen en entornos nutritivos, lugares seguros, reconfortantes. Otras veces, hasta en las condiciones más adversas, entre el agua y el polvo, logran ser, flore-ser.",
  },
  {
    id: "collar-marlu-azul",
    name: "Collar Marlú Azul",
    price: 140000,
    image: necklace,
    tagline: "Entre el agua y el polvo, flore-ser.",
    story:
      "Hecho a mano con mostacillas azules celeste, azul rey y tornasol morado. Una pieza inspirada en las flores que logran florecer incluso en medio de las condiciones más difíciles.",
  },
  {
    id: "collar-hebra-cielo",
    name: "Collar Hebra Cielo",
    price: 45000,
    image: earrings,
    tagline: "Hilo de vida que vuelve al recuerdo.",
    story:
      "Hebra es hilo, hilo es la vida. Una pieza pensada para rodear el cuerpo de distintas formas y volver una y otra vez sobre el recuerdo.",
  },
  {
    id: "collar-hebra-tinta",
    name: "Collar Hebra Tinta",
    price: 45000,
    image: bracelet,
    tagline: "El tejido somos nosotros.",
    story:
      "Una hebra parece mínima, pero basta para unir fragmentos. Hecho artesanalmente con mostacillas y piedras naturales.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
