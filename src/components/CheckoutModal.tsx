import { useEffect } from "react";
import { useCart } from "@/lib/cart";

const WA_LINK = "https://wa.link/3810tm";

export function CheckoutModal() {
  const { checkoutOpen, closeCheckout } = useCart();

  useEffect(() => {
    if (!checkoutOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCheckout();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [checkoutOpen, closeCheckout]);

  if (!checkoutOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={closeCheckout}
    >
      <div
        className="max-w-md w-full bg-background border border-border rounded-md p-8 sm:p-10 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-ochre mb-4">Edición limitada</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-primary mb-4 leading-snug">
          ¡Gracias por conectar con Marlú!
        </h2>
        <p className="text-sm text-muted-foreground italic mb-8 leading-relaxed">
          Esta pieza es una edición limitada y actualmente no se encuentra disponible. Estamos
          tejiendo la primera colección de historias. Escríbenos por WhatsApp y te avisamos cuando
          terminemos nuestra próxima creación.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-colors"
        >
          Escríbenos por WhatsApp →
        </a>
        <button
          onClick={closeCheckout}
          className="mt-4 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Quizás después
        </button>
      </div>
    </div>
  );
}
