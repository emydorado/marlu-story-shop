import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { getProduct } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({
    meta: [
      { title: "Tu carrito" },
      { name: "description", content: "Las piezas que estás guardando." },
    ],
  }),
});

function CartPage() {
  const { items, remove, openCheckout } = useCart();

  const detailed = items.map((i) => ({ ...i, product: getProduct(i.id) })).filter((i) => i.product);

  const total = detailed.reduce((s, i) => s + (i.product?.price ?? 0) * i.quantity, 0);

  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-ochre mb-3">Tu carrito</p>
      <h1 className="font-serif text-4xl sm:text-5xl text-primary mb-12">Lo que estás guardando</h1>

      {detailed.length === 0 ? (
        <div className="py-16 text-center border-t border-border">
          <p className="font-serif italic text-xl text-muted-foreground mb-6">
            Aún nada aquí. Tómate tu tiempo.
          </p>
          <Link
            to="/"
            className="text-sm uppercase tracking-[0.25em] text-primary border-b border-primary/40 pb-1"
          >
            Ver las piezas
          </Link>
        </div>
      ) : (
        <>
          <ul className="border-t border-border">
            {detailed.map(({ product, quantity, id }) => (
              <li key={id} className="flex gap-5 py-6 border-b border-border items-center">
                <Link to="/piece/$id" params={{ id }} className="shrink-0">
                  <img
                    src={product!.image}
                    alt={product!.name}
                    width={120}
                    height={120}
                    className="w-full h-auto object-contain"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to="/piece/$id" params={{ id }}>
                    <h3 className="font-serif text-xl text-primary">{product!.name}</h3>
                  </Link>
                  <p className="text-xs italic text-muted-foreground mt-1 truncate">
                    {product!.tagline}
                  </p>
                  <p className="text-sm text-amber-deep mt-2">
                    €{product!.price}{" "}
                    {quantity > 1 && <span className="text-muted-foreground">× {quantity}</span>}
                  </p>
                </div>
                <button
                  onClick={() => remove(id)}
                  className="text-xs uppercase tracking-wider text-muted-foreground hover:text-rose transition-colors"
                  aria-label={`Quitar ${product!.name}`}
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-baseline mt-8 pb-2 border-b border-border">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Total</span>
            <span className="font-serif text-2xl text-primary">€{total}</span>
          </div>

          <button
            onClick={openCheckout}
            className="mt-10 w-full px-6 py-5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-colors"
          >
            Finalizar mi historia
          </button>
          <p className="mt-4 text-xs italic text-center text-muted-foreground">
            El envío y los pequeños detalles vienen después.
          </p>
        </>
      )}
    </section>
  );
}
