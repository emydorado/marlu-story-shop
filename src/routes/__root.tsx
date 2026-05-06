import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import faviconUrl from "../assets/favicon.png";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/Header";
import { CheckoutModal } from "@/components/CheckoutModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Marlú" },
      {
        name: "description",
        content:
          "Joyería artesanal hecha a mano en Colombia. Piezas cargadas de intención, nostalgia y conexión emocional. El universo de Martha Lucía.",
      },
      { name: "author", content: "Marlú" },
      {
        property: "og:title",
        content: "Marlú — Joyería artesanal colombiana que guarda historias",
      },
      {
        property: "og:description",
        content:
          "Joyería artesanal hecha a mano en Colombia. Piezas cargadas de intención, nostalgia y conexión emocional. El universo de Martha Lucía.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      {
        name: "twitter:title",
        content: "Marlú — Joyería artesanal colombiana que guarda historias",
      },
      {
        name: "twitter:description",
        content:
          "Joyería artesanal hecha a mano en Colombia. Piezas cargadas de intención, nostalgia y conexión emocional.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/43f9f8ff-6ad3-4f8f-885b-4c72de74a2e1/id-preview-e6554ecc--ae108b0e-a0cd-4b9a-9146-0e590b2e985a.lovable.app-1778095180158.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/43f9f8ff-6ad3-4f8f-885b-4c72de74a2e1/id-preview-e6554ecc--ae108b0e-a0cd-4b9a-9146-0e590b2e985a.lovable.app-1778095180158.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: faviconUrl },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <footer className="border-t border-border/60 mt-24 py-10 text-center text-xs text-muted-foreground tracking-wide">
            <p className="font-serif italic text-base text-primary mb-2">Marlú</p>
            <p>Hecha despacio, a mano. © {new Date().getFullYear()}</p>
          </footer>
          <CheckoutModal />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
