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
    id: "lazo",
    name: "Lazo",
    price: 89,
    image: ring,
    tagline: "Para las promesas que te haces a ti misma.",
    story:
      "Lazo nació una mañana tranquila, cuando pensaba en los pequeños votos que guardamos en silencio. Los que nadie escucha, pero que nos sostienen. Una sola piedra cálida, cerca de la piel, como un secreto que llevas sin necesidad de explicar.",
  },
  {
    id: "memoria",
    name: "Memoria",
    price: 145,
    image: necklace,
    tagline: "Hay cosas demasiado tiernas para decirse en voz alta.",
    story:
      "Hay recuerdos que no necesitan nombre. Memoria carga uno de esos: un púrpura profundo y silencioso, que descansa justo sobre el corazón. Es para las personas que hemos amado y las versiones de nosotros mismos que seguimos aprendiendo a perdonar.",
  },
  {
    id: "rumor",
    name: "Rumor",
    price: 64,
    image: earrings,
    tagline: "Liviana para olvidar. Cálida para recordar.",
    story:
      "Rumor es lo que tu abuela usaba sin pensarlo. Dos pequeños aros, ligeramente imperfectos, que atrapan la luz de la tarde. Son el tipo de pieza que te pones una vez y nunca más te quitas.",
  },
  {
    id: "raiz",
    name: "Raíz",
    price: 112,
    image: bracelet,
    tagline: "Para todo lo que cargas de donde vienes.",
    story:
      "Raíz significa origen. Se teje despacio, como las mujeres de mi familia trenzaban el cabello antes de dormir. La pequeña piedra verde es un recordatorio de que algunas cosas crecen solo porque alguien se tomó el tiempo.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
