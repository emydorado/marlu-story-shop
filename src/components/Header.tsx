import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";

export function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight text-primary italic">
          Marlú
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" activeOptions={{ exact: true }} className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Pieces
          </Link>
          <Link to="/cart" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Cart {count > 0 && <span className="text-primary">({count})</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}
