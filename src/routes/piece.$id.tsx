import { createFileRoute, Link, useNavigate, notFound } from "@tanstack/react-router";
import { getProduct } from "@/lib/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/piece/$id")({
  component: PiecePage,
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Marlú` },
          { name: "description", content: loaderData.product.tagline },
          { property: "og:title", content: `${loaderData.product.name} — Marlú` },
          { property: "og:description", content: loaderData.product.tagline },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="max-w-md mx-auto text-center py-32 px-6">
      <h1 className="font-serif text-3xl text-primary mb-4">Esta pieza no pudo encontrarse.</h1>
      <Link to="/" className="text-sm border-b border-primary/40">
        Volver al inicio
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="max-w-md mx-auto text-center py-32 px-6">
      <p className="font-serif text-2xl text-primary">Algo no cargó bien.</p>
    </div>
  ),
});

function PiecePage() {
  const { product } = Route.useLoaderData();
  const { add, openCheckout } = useCart();
  const navigate = useNavigate();

  return (
    <article className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
      <Link
        to="/"
        className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
      >
        ← Volver
      </Link>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mt-8">
        <div className="bg-secondary overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={1024}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col justify-center max-w-md">
          <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-4">
            Artesanal · Una de pocas
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-primary mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="font-serif italic text-xl text-rose mb-8 leading-snug">{product.tagline}</p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">{product.story}</p>
          <p className="text-lg text-amber-deep tracking-wide mb-10">€{product.price}</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => add(product.id)}
              className="flex-1 px-6 py-4 border border-primary text-primary text-xs uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Añadir al carrito
            </button>
            <button
              onClick={() => {
                add(product.id);
                navigate({ to: "/cart" }).then(() => openCheckout());
              }}
              className="flex-1 px-6 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
            >
              Comprar ahora
            </button>
          </div>

          <p className="mt-8 text-xs italic text-muted-foreground">
            Hecha a mano. No hay dos piezas exactamente iguales.
          </p>
        </div>
      </div>
    </article>
  );
}
