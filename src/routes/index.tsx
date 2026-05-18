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
                Joyería Artesanal Colombiana
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-primary mb-6">
                Marlú: Joyas que <em className="text-rose">guardan historias</em>.
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 italic">
                Cada pieza es un objeto que materializa eventos de la experiencia humana, emociones
                y pensamientos.
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
            <p className="text-base text-muted-foreground leading-relaxed">
              Marlú nace del deseo de materializar los recuerdos. Nuestras piezas son creadas
              artesanalmente en Colombia, inspiradas en la capacidad de los objetos para guardar
              emociones y trascender en el tiempo.
            </p>
            <div className="mt-8 h-px w-16 bg-primary/20" />
          </div>
          <blockquote className="font-serif text-xl sm:text-2xl text-primary leading-relaxed italic border-l-2 border-primary/20 pl-8">
            "Los humanos somos historias andantes, y contarlas es una forma de darle sentido a
            nuestras vidas."
            <footer className="mt-4 text-xs not-italic uppercase tracking-[0.3em] text-muted-foreground">
              — Sara Salmerón, Creadora de Marlú
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Manifiesto */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="font-serif text-2xl sm:text-3xl text-primary leading-relaxed italic">
          "Queremos que conectes con las historias detrás de los objetos. No solo vendemos
          accesorios, vendemos piezas motivadas por sensaciones."
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          — Marlú · Joyería Artesanal Colombiana
        </p>
      </section>

      {/* Nuestro Legado */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4 text-center">
          Nuestro legado
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-12 text-center leading-tight">
          De ella aprendí
        </h2>
        <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
          <p>
            Cuando era niña, veía a mi abuela Martha Lucía utilizar muchas joyas. Pulseras,
            collares, aretes, anillos y prendedores. Se me hacía lindo, pero yo era más
            conservadora con mis accesorios. Cuando ella murió quise quedarme con algunas de sus
            joyas para darle permanencia física a su recuerdo.
          </p>
          <p>
            Comencé a utilizarlas, a disfrutar cómo se veían, y sobre todo cómo me hacían sentir.
            Era llevar en mí un gusto que adquirí de ella. Recordarla y guardarla en amuletos.
          </p>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground text-right">
          — Sara Salmerón
        </p>
        <div className="mt-12 h-px bg-primary/10" />
      </section>

      {/* Galería de Piezas */}
      <section id="piezas" className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-3">La colección</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary mb-6">
            Capítulo I — Nacer
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-muted-foreground leading-relaxed italic">
            Nacer es la primera experiencia humana material. El cuerpo descubre el mundo, se
            descubre a sí, se habita en su mayor vulnerabilidad. Se nace llorando como protección;
            en sentir profundamente se adquiere la fuerza. Se aprende el dolor antes que el
            lenguaje, el dolor se guarda en el cuerpo. Nacer es jamás recordarlo. Es dejar
            inconsciente el miedo, lo desconocido, lo primero. Recordar nacer es nacer de nuevo en
            lo ya vivido. Volver al cuerpo que fuimos, crear el cuerpo que somos.
          </p>
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
