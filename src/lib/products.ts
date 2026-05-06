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
    tagline: "For the promises you make to yourself.",
    story:
      "Lazo was born one quiet morning, when I was thinking about the small vows we keep in silence. The kind nobody hears, but that hold us together. A single warm stone, set close to the skin, like a secret you wear without explaining.",
  },
  {
    id: "memoria",
    name: "Memoria",
    price: 145,
    image: necklace,
    tagline: "Some things are too tender to say out loud.",
    story:
      "There are memories that don't need to be named. Memoria carries one of those — a deep, quiet purple, resting just above the heart. It is for the people we have loved and the versions of ourselves we are still learning to forgive.",
  },
  {
    id: "rumor",
    name: "Rumor",
    price: 64,
    image: earrings,
    tagline: "Light enough to forget. Warm enough to remember.",
    story:
      "Rumor is what your grandmother used to wear without thinking. Two small hoops, slightly imperfect, that catch the afternoon light. They are the kind of thing you put on once and never take off.",
  },
  {
    id: "raiz",
    name: "Raíz",
    price: 112,
    image: bracelet,
    tagline: "For everything you carry from where you come from.",
    story:
      "Raíz means root. It is braided slowly, the way the women in my family used to braid hair before bed. The small green stone is a reminder that some things grow only because someone took the time.",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
