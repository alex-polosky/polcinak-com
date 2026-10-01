"use client";

import { MoonIcon, SunIcon } from "@/components/ui/icons";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage may be unavailable (private mode); the toggle still works for this page view.
  }
}

export function ThemeToggle() {
  // Labels are switched purely with CSS variants, so server and client markup
  // match regardless of the stored theme.
  return (
    <button
      type="button"
      aria-label="Toggle visual theme (dark and light mode)"
      onClick={() => {
        const current = document.documentElement.getAttribute("data-theme");
        applyTheme(current === "light" ? "dark" : "light");
      }}
      className="flex items-center gap-1.5 rounded border border-line bg-surface px-2.5 py-1.5 font-mono text-xs text-muted transition-all hover:border-signal hover:text-fg focus:ring-2 focus:ring-signal focus:outline-none"
    >
      <span className="hidden items-center dark:inline-flex">
        <SunIcon className="h-3.5 w-3.5 text-accent" />
        <span className="ml-1">Light</span>
      </span>
      <span className="hidden items-center light:inline-flex">
        <MoonIcon className="h-3.5 w-3.5 text-accent" />
        <span className="ml-1">Dark</span>
      </span>
    </button>
  );
}
