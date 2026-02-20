# AGENTS

This repo contains static HTML pages extracted from `MagicPatterns.md` (React + Tailwind). The goal is to keep pages in Tailwind v4 style, avoid arbitrary classes, and keep the look consistent across pages.

This folder is design/reference-only. Runtime output is Orchard Core Liquid templates under `../Views` and recipes under `../Recipes`.

## How pages are built

1) Find the relevant React page/component in `MagicPatterns.md` and flatten it into static HTML (no React, no router, no framer-motion).
2) Replace any dynamic behavior (state, animations, dynamic dates) with static markup.
3) Reuse the same layout language and utility classes from the original, but keep everything v4-friendly and tokenized.

## Orchard integration guidance

- Treat `MagicPatterns.md` and `MagicPatterns/` as design source, not runtime source.
- Implement final pages as Liquid shape templates (`Views/Block__*.liquid`, `Views/Layout.liquid`, `Views/Content__Page.liquid`).
- Prefer media-library URLs for images used at runtime (`~/media/...`) so recipes can provision them.
- Keep recipe-imported media in `../Recipes/Media/...` and add a `media` step in the export recipe.
- Do not leave links to removed assets (favicon/css/images); broken links create noisy 404s and hide real issues.

## Tailwind v4 guidance

- Tokens live in `styles/tailwind.css` under `@theme`. Add tokens when the same color or value repeats.
- Avoid arbitrary classes (no `[#...]`, no `leading-[...]`, no `aspect-[...]`). Prefer tokens instead.
- For Orchard runtime with `@tailwindcss/browser@4` and `<style type="text/tailwindcss">`, do not use `@import "tailwindcss";` inside the style block.
  It triggers a request to `/tailwindcss` and causes 404s.

## Lucide icons

- Replace inline SVG symbols with Lucide icons:
  - Use: `<i data-lucide="icon-name" class="..." aria-hidden="true"></i>`
- Include the script at the end of each HTML page:
  - `<script src="https://unpkg.com/lucide@latest"></script>`
  - `<script>lucide.createIcons();</script>`

## Build workflow

- Add new HTML files to `tailwind.config.js` under `content` so Tailwind scans them.
- Regenerate CSS after changes:
  - `npm run build:css`
- `styles/tailwind.generated.css` is generated and should stay in sync with the HTML.
- For Orchard theme verification, prefer:
  - `dotnet build ../PersonalSite.Theme.csproj -v:minimal --no-restore`
  - then run the host app and watch logs for template/resource 404s.

## Quick checklist for new pages

- Static HTML extracted from `MagicPatterns.md`
- No React or motion code
- Tokenized colors and sizes
- Lucide icons included and initialized
- Page added to `tailwind.config.js`
- `npm run build:css` run
- Orchard runtime templates/recipes updated consistently (Views + Recipes + media files)
