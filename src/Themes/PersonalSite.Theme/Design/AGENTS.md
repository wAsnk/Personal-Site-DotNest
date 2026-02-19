# AGENTS

This repo contains static HTML pages extracted from `MagicPatterns.md` (React + Tailwind). The goal is to keep pages in Tailwind v4 style, avoid arbitrary classes, and keep the look consistent across pages.

## How pages are built

1) Find the relevant React page/component in `MagicPatterns.md` and flatten it into static HTML (no React, no router, no framer-motion).
2) Replace any dynamic behavior (state, animations, dynamic dates) with static markup.
3) Reuse the same layout language and utility classes from the original, but keep everything v4-friendly and tokenized.

## Tailwind v4 guidance

- Tokens live in `styles/tailwind.css` under `@theme`. Add tokens when the same color or value repeats.
- Avoid arbitrary classes (no `[#...]`, no `leading-[...]`, no `aspect-[...]`). Prefer tokens instead.

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

## Quick checklist for new pages

- Static HTML extracted from `MagicPatterns.md`
- No React or motion code
- Tokenized colors and sizes
- Lucide icons included and initialized
- Page added to `tailwind.config.js`
- `npm run build:css` run
