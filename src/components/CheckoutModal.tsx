import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

export function CheckoutModal() {
  const { checkoutOpen, closeCheckout } = useCart();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!checkoutOpen) {
      setEmail("");
      setSubmitted(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCheckout();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [checkoutOpen, closeCheckout]);

  if (!checkoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={closeCheckout}
    >
      <div
        className="max-w-md w-full bg-background border border-border rounded-md p-8 sm:p-10 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <>
            <p className="text-xs uppercase tracking-[0.25em] text-ochre mb-4">Historia recibida</p>
            <h2 className="font-serif text-2xl sm:text-3xl text-primary mb-4 leading-snug">
              Gracias, te avisaremos pronto.
            </h2>
            <p className="text-sm text-muted-foreground italic mb-8 leading-relaxed">
              Martha Lucía sabrá que tu historia espera. Cuando la próxima colección esté lista, serás de los primeros en saberlo.
            </p>
            <button
              onClick={closeCheckout}
              className="text-sm tracking-wide text-primary border-b border-primary/40 hover:border-primary pb-0.5 transition-colors"
            >
              Cerrar
            </button>
          </>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.25em] text-ochre mb-4">Edición limitada</p>
            <h2 className="font-serif text-2xl sm:text-3xl text-primary mb-4 leading-snug">
              ¡Gracias por conectar con Marlú!
            </h2>
            <p className="text-sm text-muted-foreground italic mb-8 leading-relaxed">
              Esta pieza es una edición limitada y actualmente no hay existencias.
              Estamos tejiendo la próxima colección de historias. Déjanos tu correo
              para avisarte cuando Martha Lucía termine su próxima creación.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                className="w-full px-4 py-3 border border-border bg-background text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-colors"
              >
                Avisarme
              </button>
            </form>
            <button
              onClick={closeCheckout}
              className="mt-4 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Quizás después
            </button>
          </>
        )}
      </div>
    </div>
  );
}
