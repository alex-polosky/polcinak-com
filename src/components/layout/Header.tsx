"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { WordmarkLogo } from "@/components/ui/Wordmark";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md transition-colors duration-200">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          aria-label={`${site.name} homepage`}
          className="group -mx-1 flex flex-col rounded px-1 focus:ring-2 focus:ring-signal focus:outline-none"
        >
          <WordmarkLogo className="text-lg sm:text-xl" />
          <span className="font-mono text-[10px] tracking-wider text-muted uppercase">
            {site.name}
          </span>
        </a>

        <nav
          aria-label="Main Navigation"
          className="hidden items-center space-x-8 text-sm font-medium md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 text-muted transition-colors hover:text-fg focus:ring-1 focus:ring-signal focus:outline-none"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded border border-line p-2 text-muted hover:text-fg focus:ring-2 focus:ring-signal focus:outline-none md:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      <nav
        id="mobileMenu"
        aria-label="Mobile Navigation"
        hidden={!menuOpen}
        className="space-y-3 border-b border-line bg-surface-alt px-4 pt-3 pb-6 font-mono text-sm md:hidden"
      >
        {nav.map((item, i) => {
          const isLast = i === nav.length - 1;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={
                isLast
                  ? "block py-2 font-semibold text-accent"
                  : "block border-b border-line-soft py-2 text-muted"
              }
            >
              {String(i + 1).padStart(2, "0")} / {item.longLabel}
              {isLast && <> &rarr;</>}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
