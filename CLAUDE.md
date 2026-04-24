# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page website for **NWPRTritual** (domain: `www.nwprtritual.com`). Deployed as a fully static Astro build. This scaffold is intentionally minimal — one page, no CMS, no runtime. The real page design and artwork come from an HTML handoff that is still pending.

## Commands

```bash
npm run dev       # Astro dev server (default :4321)
npm run build     # Static build → dist/
npm run preview   # Preview the built site locally
npm run astro     # Astro CLI passthrough
npm run deploy    # Build + publish dist/ to Cloudflare Pages (nwprtritual-website project)
```

Deploy is direct-upload via wrangler — no Git-connected build on Cloudflare's side. One-time setup if running on a new machine: `npx wrangler login`.

Node ≥22.12 required (see `package.json#engines`).

## Architecture

### Fully static, one page
Deliberately **fully static**. No adapter, no functions, no runtime dynamic routes. If a future requirement tempts you toward SSR, Node/Cloudflare adapter, or Astro endpoints, surface that first — the default stance is that there is nothing to break at request time.

### Brand system — NWPRT aesthetic

Brand reference: `figma-turnover/_design_documentation/nwprt-brand-style-guide.md`. That directory holds the real NWPRT logo files and lifestyle/product photography — reach for those when porting placeholders. It is the source of truth for color, type, and voice. Key rules worth internalizing:

- **Signature pairing: navy + patch yellow + cream.** Not navy and white — the cream matters.
- **Yellow is a signature color, not a field color.** Reserve `bg-nwprt-yellow` for **at most one** hero accent per view (a badge, a CTA, a horizontal rule). Stacking yellow on yellow kills the signature.
- **Display type = condensed bold sans, all caps, tight tracking.** Use the `.display` utility (Oswald).
- **Italic serif for category labels / small editorial flourishes.** Use the `.accent-italic` utility (Playfair Display Italic). Never sans-serif italic.
- **No gradients, no drop shadows, no glow effects.** Flat surfaces only. Texture should come from photography, not CSS.
- **Cream, not pure white, as default background.** The `<body>` defaults to `bg-nwprt-cream`.

Tokens live in **two** places and must stay in sync:
- `src/lib/tokens.ts` — JS constants (`BRAND_COLORS`, `FONTS`)
- `src/styles/global.css` — Tailwind v4 `@theme` block (`--color-nwprt-*`, `--font-*`)

Tailwind utilities auto-generated from `@theme` vars: `bg-nwprt-navy`, `text-nwprt-cream`, `bg-nwprt-yellow`, etc. Full list in `global.css`.

Fonts loaded from Google Fonts via CSS `@import` in `global.css`: Oswald (display), Inter (body), Playfair Display Italic (accent). If a Figma/HTML handoff calls for different exact fonts, update `@import` + both token files together.

### Layout primitives

- `src/layouts/BaseLayout.astro` — `<head>` with OG/Twitter meta, canonical, favicon. No header/footer yet (single-page; chrome decisions pending handoff). No analytics wired yet.
- `src/components/Container.astro` — max-width gutter wrapper. Sizes: `sm | md | lg | xl`.
- `src/components/Section.astro` — full-bleed tonal section. Tones: `cream | navy | off-white | yellow`. Remember the one-yellow-per-view rule.

### Figma turnover is reference only — never import from it
`figma-turnover/` is the Figma Make export (Vite + React + shadcn + MUI) from the design team. The `.tsx` components, `ui/` shadcn primitives, and `vite.config.ts` are never imported into the Astro build. Use it as the authoritative copy + layout reference; port section content into `src/components/sections/*.astro` by hand. When the design team ships a new turnover, diff against the current `figma-turnover/src/app/components/*.tsx` to see what changed, then port those section files.

The turnover uses the **same brand tokens** this project already defines (`--color-nwprt-navy`, `--color-nwprt-yellow`, `--color-nwprt-cream`, `.display`, `.accent-italic`, `.caption`, `.rule`, `.rule-yellow`) — so direct class-name reuse works, no translation table needed.

Artwork (logos, photography) lives at `figma-turnover/_design_documentation/`. Copy into `public/` when a section references an image.

### Component layout
- `src/components/SiteHeader.astro` — sticky navy header with logo.
- `src/components/sections/*.astro` — one file per page section, imported flat into `src/pages/index.astro`. Content data (arrays, schedules, copy) lives inline at the top of each section file so copy tweaks don't require diving into components.
- `src/scripts/scroll-reveal.ts` — the IntersectionObserver island wired from `index.astro` via `<script>import '../scripts/scroll-reveal.ts'</script>`.

Interactive elements (e.g., the Agenda accordion) use native HTML primitives (`<details>`) first, with small vanilla JS scripts to add progressive enhancements. No React / no framework — keep it boring.

When porting handoff HTML or Figma to `.astro`, **do not inline arbitrary hex values or arbitrary Tailwind values** (`bg-[#...]`, `text-[17px]`) just because the source uses them. Snap to the `--color-nwprt-*` tokens; if a value isn't close to anything, surface it and ask before extending.

### Path aliases
None configured. Use relative imports (`../lib/tokens`) from `.astro` components. Add `compilerOptions.paths` in `tsconfig.json` only if it starts hurting.

## Conventions

- `astro.config.mjs` sets `site: 'https://www.nwprtritual.com'`.
- Tailwind v4 via `@tailwindcss/vite` plugin — no separate `tailwind.config.ts`, theme lives in `global.css`.
- `.env*` files are gitignored. No secrets needed yet for this scaffold.
- Voice: short, confident, unfussy. Heritage framing (Icon, Legacy, Classic, Original). Location-anchored. No hype words — never "unlock", "elevate", "transform".

## Partner / campaign notes

- Partner: **Brad at NWPRT**.
- Discount code: **NWPRT** (20% off).
- Mascot campaign: **Just Ask Fritz**.
