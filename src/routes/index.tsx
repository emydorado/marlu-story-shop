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
              <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-6">Marlú · Handmade</p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-primary mb-6">
                What we wear <em className="text-rose">should hold</em> stories.
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-10 italic">
                Small pieces, made slowly. For the memories you don't speak about, and the ones you can't stop telling.
              </p>
              <a
                href="#pieces"
                className="inline-block text-sm tracking-[0.2em] uppercase text-primary border-b border-primary/40 hover:border-primary pb-1 transition-colors"
              >
                See the pieces
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative overflow-hidden bg-secondary">
            <img
              src={hero}
              alt="A hand wearing a small handcrafted gold ring, bathed in warm afternoon light"
              width={1600}
              height={1200}
              className="w-full h-full object-cover min-h-[50vh] md:min-h-full"
            />
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="font-serif text-2xl sm:text-3xl text-primary leading-relaxed italic">
          "I don't make jewelry to decorate.
          <br />
          I make it to remember."
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">— Marlú</p>
      </section>

      {/* Pieces */}
      <section id="pieces" className="max-w-6xl mx-auto px-5 sm:px-8 pb-24">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-3">The collection</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary">Pieces with quiet meaning</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          {products.map((p) => (
            <Link
              key={p.id}
              to="/piece/$id"
              params={{ id: p.id }}
              className="group block"
            >
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
              <p className="text-xs tracking-wider text-amber-deep">€{p.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
