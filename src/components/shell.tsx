import { useEffect, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useField } from "@/lib/field-store";

const links = [
  { to: "/", label: "Guide" },
  { to: "/bank", label: "Bank" },
  { to: "/kit", label: "Kit" },
] as const;

const more = [
  { to: "/start", label: "Start here" },
  { to: "/safe", label: "Stay safe" },
  { to: "/glossary", label: "Glossary" },
  { to: "/about", label: "About" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const kit = useField((s) => s.kit);
  const packed = Object.values(kit).filter(Boolean).length;

  useEffect(() => {
    void useField.persist.rehydrate();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#content" className="skip">
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/95 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="font-display text-xl italic text-ink">
              Catchcraft
            </Link>
            <nav aria-label="Primary" className="flex items-center gap-4">
              {links.map((link) => {
                const on =
                  link.to === "/"
                    ? path === "/" || path.startsWith("/methods")
                    : path.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    aria-current={on ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center border-b-2 text-sm font-semibold ${
                      on ? "border-copper text-river" : "border-transparent text-ink/70 hover:text-ink"
                    }`}
                  >
                    {link.label}
                    {link.to === "/kit" && packed > 0 ? (
                      <span className="ml-1.5 tabular-nums text-copper">{packed}</span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>
          <nav aria-label="Pocket guide" className="flex flex-wrap gap-x-4 border-t border-ink/10">
            {more.map((link) => {
              const on = path === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={on ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center text-sm font-semibold ${
                    on ? "text-river" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-ink/10">
        <div className="mx-auto max-w-5xl space-y-3 px-5 py-8 text-sm text-ink/70">
          <p className="max-w-2xl">
            Leave the channel open. Tend what you set. Take what you'll eat. The rule on the water
            you're standing in beats anything written here.
          </p>
          <p className="max-w-2xl">
            Privacy: This guide does not collect your name, email, or any personal information.
            Your field-kit checks are saved only on your own device.
          </p>
          <nav aria-label="Series" className="flex flex-wrap gap-x-4 gap-y-1">
            {more.map((link) => (
              <Link key={link.to} to={link.to} className="font-semibold text-river">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
