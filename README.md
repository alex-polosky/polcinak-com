# polcinak.com

Marketing site for The Polcinak Group, built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # static production build
```

## Deployment

Pushes to `main` deploy the static export to GitHub Pages through the workflow in `.github/workflows/deploy.yml`.

In the repository's **Settings → Pages**, set the source to **GitHub Actions**. Configure DNS for `polcinak.com` to point to GitHub Pages; the build includes `public/CNAME` so Pages keeps the custom domain.

## Layout

- `src/content/site.ts` — all copy, links, businesses, structure, and contact routes. Most content edits happen here.
- `src/components/sections/` — page sections (Hero, Businesses, About, Structure, Updates, Contact).
- `src/components/layout/` — Header (mobile menu), ThemeToggle, Footer.
- `src/components/ui/` — small shared primitives (Section, Tag, icons, wordmark).
- `src/app/globals.css` — design tokens. Colors are CSS variables switched by `data-theme` on `<html>`, exposed to Tailwind as `bg-canvas`, `bg-surface`, `text-fg`, `text-muted`, `border-line`, `text-accent`, etc.
- `src/lib/theme.ts` — theme storage key and the inline script that applies a saved theme before first paint.

Dark is the default theme; a choice made with the header toggle is saved in `localStorage` under `polcinak-theme`.

Fonts (Geist / Geist Mono) come from the `geist` package and are self-hosted, so builds need no network access to Google Fonts.
