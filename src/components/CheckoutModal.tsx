import { useEffect } from "react";
import { useCart } from "@/lib/cart";

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
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">A small note</p>
        <h2 className="font-serif text-2xl sm:text-3xl text-primary mb-4 leading-snug">
          This piece is currently unavailable.
        </h2>
        <p className="text-sm text-muted-foreground italic mb-8 leading-relaxed">
          Each one is made by hand, slowly. Please come back soon — or write to us, and we'll tell you when it returns.
        </p>
        <button
          onClick={closeCheckout}
          className="text-sm tracking-wide text-primary border-b border-primary/40 hover:border-primary pb-0.5 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
