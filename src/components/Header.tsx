import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import marluLogo from "@/assets/Marlu_logo.png";

export function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-[93%] mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Marlú — Inicio">
          <img src={marluLogo} alt="Marlú" className="h-24 w-auto" />
        </Link>
        <nav className="flex items-center gap-7">
          <a href="/#piezas" className="text-sm hover:text-primary transition-colors">
            Piezas
          </a>
          <Link
            to="/cart"
            className="relative hover:text-primary transition-colors"
            activeProps={{ className: "text-primary" }}
            aria-label={count > 0 ? `Carrito (${count} piezas)` : "Carrito"}
          >
            <ShoppingBag className="w-[22px] h-[22px] stroke-[1.25]" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2.5 min-w-[16px] h-4 px-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-sans flex items-center justify-center leading-none">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
