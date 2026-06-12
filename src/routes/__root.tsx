import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import Nav from "../components/site/Nav";
import Footer from "../components/site/Footer";

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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

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
      { title: "Josetech Power Consultant — Electrical Solutions for Nigerian Businesses" },
      {
        name: "description",
        content:
          "Safe, reliable and efficient electrical installation, maintenance and power appliance solutions for businesses across Nigeria. Certified. Trusted. On time.",
      },
      { name: "author", content: "Josetech Power Consultant & Appliances Limited" },
      { name: "robots", content: "index, follow" },

      // Open Graph — controls WhatsApp, LinkedIn, Facebook, Slack previews
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://josetech-power.vercel.app/" },
      { property: "og:site_name", content: "Josetech Power Consultant" },
      {
        property: "og:title",
        content: "Josetech Power Consultant — Electrical Solutions for Nigerian Businesses",
      },
      {
        property: "og:description",
        content:
          "Safe, reliable and efficient electrical installation, maintenance and power appliance solutions for businesses across Nigeria. Certified. Trusted. On time.",
      },
      { property: "og:image", content: "https://josetech-power.vercel.app/images/og-preview.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Josetech Power Consultant — Nigerian Electrical Experts" },

      // Twitter / X card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Josetech Power Consultant — Electrical Solutions for Nigerian Businesses",
      },
      {
        name: "twitter:description",
        content:
          "Safe, reliable and efficient electrical installation, maintenance and power appliance solutions for businesses across Nigeria.",
      },
      { name: "twitter:image", content: "https://josetech-power.vercel.app/images/og-preview.png" },
      { name: "twitter:image:alt", content: "Josetech Power Consultant — Nigerian Electrical Experts" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
