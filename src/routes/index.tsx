import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="grid md:grid-cols-2 gap-0 items-stretch min-h-[80vh]">
          <div className="order-2 md:order-1 flex items-center px-6 sm:px-12 lg:px-20 py-16 md:py-24">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-6">
                Marlú · Artesanal Colombiano
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-primary mb-6">
                Marlú: Joyas que <em className="text-rose">cuentan historias</em>.
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 italic">
                Cada pieza es un hilo que conecta momentos, personas y legados. Bienvenidos al
                universo de Martha Lucía.
              </p>
              <a
                href="#piezas"
                className="inline-block text-sm tracking-[0.2em] uppercase text-primary border-b border-primary/40 hover:border-primary pb-1 transition-colors"
              >
                Ver las piezas
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative overflow-hidden bg-secondary">
            <img
              src={hero}
              alt="Una mano con un pequeño anillo artesanal dorado, bañada en la luz cálida de la tarde"
              width={1600}
              height={1200}
              className="w-full h-full object-cover min-h-[50vh] md:min-h-full"
            />
          </div>
        </div>
      </section>

      {/* El Legado de Martha Lucía */}
      <section className="bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">Nuestro origen</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-6 leading-tight">
              El Legado de
              <br />
              Martha Lucía
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Marlú nace del deseo de materializar los recuerdos. Nuestras piezas son creadas
              artesanalmente en Colombia, inspiradas en la capacidad de los objetos para guardar
              emociones y trascender en el tiempo.
            </p>
            <div className="mt-8 h-px w-16 bg-primary/20" />
          </div>
          <blockquote className="font-serif text-xl sm:text-2xl text-primary leading-relaxed italic border-l-2 border-primary/20 pl-8">
            "El collar es solo el vehículo.
            <br />
            Lo que realmente importa
            <br />
            es la historia detrás."
            <footer className="mt-4 text-xs not-italic uppercase tracking-[0.3em] text-muted-foreground">
              — Martha Lucía
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="font-serif text-2xl sm:text-3xl text-primary leading-relaxed italic">
          "No vendemos accesorios.
          <br />
          Vendemos piezas cargadas de intención,
          <br />
          nostalgia y conexión emocional."
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          — Marlú · Joyería Artesanal Colombiana
        </p>
      </section>

      {/* Galería de Piezas */}
      <section id="piezas" className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-3">La colección</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary">
            Piezas con significado silencioso
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {products.map((p) => (
            <Link key={p.id} to="/piece/$id" params={{ id: p.id }} className="group block">
              <div className="overflow-hidden bg-secondary aspect-square mb-5">
                <img
                  src={p.image}
                  alt={p.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl text-primary mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground italic leading-snug mb-3">{p.tagline}</p>
              <p className="text-xs tracking-wider text-amber-deep mb-4">${p.price}</p>
              <span className="text-xs uppercase tracking-[0.2em] text-primary border-b border-primary/30 group-hover:border-primary pb-0.5 transition-colors">
                Llevar esta historia →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
