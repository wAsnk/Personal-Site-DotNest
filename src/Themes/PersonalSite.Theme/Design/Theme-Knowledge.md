# Theme Knowledge (Wedding Theme)

This file documents implementation-specific knowledge for the current `PersonalSite.Theme`.

## Runtime structure

- Global layout: `src/Themes/PersonalSite.Theme/Views/Layout.liquid`
- Tailwind browser styles/tokens: `src/Themes/PersonalSite.Theme/Views/Tailwind__Styles.liquid`
- Page section rendering and theme wrappers: `src/Themes/PersonalSite.Theme/Views/Content__Page.liquid`
- Active sections:
  - `Block__Hero.liquid`
  - `Block__RsvpSection.liquid`
  - `Block__WhenWhereSection.liquid`
  - `Block__GiftRegistrySection.liquid`
  - `Block__OurStorySection.liquid`
  - `Block__PhotoGallerySection.liquid`
  - `Block__HungarianTraditionsSection.liquid`
  - `Block__FurtherDetailsSection.liquid`

## Content model and recipes

- Setup recipe: `src/Themes/PersonalSite.Theme/Recipes/PersonalSite.Development.Setup.recipe.json`
- Export recipe: `src/Themes/PersonalSite.Theme/Recipes/PersonalSite.Export.recipe.json`
- Export recipe includes:
  - `ContentDefinition` for `Page` and the wedding block types.
  - Starter `Menu` (alias `main-menu`).
  - Home `Page` content item with ordered BagPart sections.
  - `media` step to upload `Site/IMG_1283.jpg`.

## Media handling

- Hero/gallery image should come from media library:
  - `~/media/Site/IMG_1283.jpg`
- Recipe source file path:
  - `src/Themes/PersonalSite.Theme/Recipes/Media/Site/IMG_1283.jpg`
- Do not depend on `Assets/images/...` for this theme flow.

## Known pitfalls and fixes

- `@import "tailwindcss";` inside `Tailwind__Styles.liquid` causes `/tailwindcss` 404 with browser Tailwind runtime.
  Keep only the `<style type="text/tailwindcss">` block with theme/custom CSS.
- Favicon links must point to real files. If no favicon assets are shipped, remove those `<link>` entries.
- If image/media URLs 404 after setup, re-run `PersonalSite.Export` so the `media` step imports files.
- `Identity.Application ... Unprotect ticket failed` in logs is usually stale auth cookie noise, not theme rendering failure.

## Validation routine

1. `dotnet build src/Themes/PersonalSite.Theme/PersonalSite.Theme.csproj -v:minimal --no-restore`
2. Run host app and request `/`.
3. Confirm no 404s for:
   - `/tailwindcss`
   - removed theme asset paths
   - expected media paths (`/media/Site/IMG_1283.jpg`)
