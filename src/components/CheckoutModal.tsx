import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbzp-XHITqWJk1KCwRdcLsk5VKPEPtBwHTzQz_OrgMOay4gYrO1IaAIBTF0hgux52ionFg/exec";

export function CheckoutModal() {
  const { checkoutOpen, closeCheckout } = useCart();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!checkoutOpen) {
      setEmail("");
      setLoading(false);
      setSubmitted(false);
      setError(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError(false);
    try {
      console.log("[Marlú] Enviando correo:", email.trim());
      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({ email: email.trim() }),
      });
      console.log("[Marlú] Fetch completado (respuesta opaca, no-cors)");
      setSubmitted(true);
    } catch (err) {
      console.error("[Marlú] Error en fetch:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
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
              Martha Lucía sabrá que tu historia espera. Cuando la próxima
              colección esté lista, serás de los primeros en saberlo.
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
              Esta pieza es una edición limitada y actualmente no hay
              existencias. Estamos tejiendo la próxima colección de historias.
              Déjanos tu correo para avisarte cuando Martha Lucía termine su
              próxima creación.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                disabled={loading}
                className="w-full px-4 py-3 border border-border bg-background text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Avisarme"}
              </button>
            </form>
            {error && (
              <p className="mt-3 text-xs text-rose italic">
                Algo salió mal. Intenta de nuevo.
              </p>
            )}
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
