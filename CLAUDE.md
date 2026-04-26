# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Multi-page marketing site for **NWPRT Ritual** at `www.nwprtritual.com` — a 4-day Halo × NWPRT co-branded wellness retreat in Newport Beach. Deployed as a fully static Astro build. Five routes: `/`, `/about`, `/schedule`, `/science`, `/investment`. Application form lives in a global modal triggered from any "Apply" button.

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

### Layout
- `src/layouts/BaseLayout.astro` — wraps every page. Mounts `SiteHeader`, `SiteFooter`, `ApplicationModal`, and the scroll-reveal island. Header/footer can be opted out with `showHeader={false}` / `showFooter={false}` props.
- `src/components/SiteHeader.astro` — sticky navy header with logo + nav (About / Schedule / Science / Investment) + Apply Now CTA. Active link is rendered yellow based on `Astro.url.pathname`.
- `src/components/SiteFooter.astro` — 3-column navy footer (brand mark + tagline / quick links / contact + Apply Now).
- `src/components/PageHero.astro` — shared navy band used as the top of every sub-page. Props: `eyebrow`, `title`, `tagline`.
- `src/components/ApplicationModal.astro` — native `<dialog>`-based application form. Listens for `openApplication` window custom event. Submission is **stubbed** (logs to console + shows success state) — search for `TODO: replace this stub` in the file when wiring the real Slack + Notion integration.
- `src/components/sections/*.astro` — one file per page section. Content data (arrays, schedules, copy) lives inline at the top of each section file so copy tweaks don't require diving into components.
- `src/pages/*.astro` — one Astro page per route. Composes `BaseLayout` + `PageHero` (when applicable) + the relevant section components.
- `src/scripts/scroll-reveal.ts` — the IntersectionObserver island. Imported once from `BaseLayout` so it runs on every page.

### Apply Now triggers
Any element with `data-open-application` (or any explicit `window.dispatchEvent(new CustomEvent('openApplication'))` call) opens the modal. The header, footer, and `FinalCTA` all use this. When wiring future entry points (banner, page-level CTAs, etc.), use the same `data-open-application` attribute — the wiring script in `SiteHeader.astro` already handles delegation.

### Application form pipeline
The modal POSTs to `/api/apply` (a Cloudflare Pages Function at `functions/api/apply.ts`). The Function validates required fields, then creates a row in the **NWPRT Ritual Customer Interest** Notion database. Optional Slack fan-out fires when `SLACK_APPLICATIONS_WEBHOOK` is set (currently unset — wire that up when the channel + webhook URL exist).

Env vars (set as Cloudflare Pages production secrets via `wrangler pages secret put`):
- `NOTION_API_KEY` — Notion integration token. The integration must be invited to the database from Notion's UI (`...` → `+ Add connections`).
- `NOTION_CUSTOMER_DATABASE_ID` — target database ID.

Local dev: copy these same vars into `.dev.vars` (gitignored). `npx wrangler pages dev dist --port 8788` runs the Function alongside the static site.

Schema management: `scripts/setup-notion-schema.mjs` is idempotent — re-run it after any property changes you want to enforce. The current schema is: `Name` (title), `Email`, `Phone`, `Location`, `Goals`, `Experience`, `Status` (select with New/Reviewing/Approved/Waitlisted/Declined), `Submitted` (created_time). The Function always creates rows with `Status = New`.

Interactive elements (Agenda accordion, application modal) use native HTML primitives (`<details>`, `<dialog>`) first, with small vanilla JS scripts to add progressive enhancements. No React / no framework — keep it boring.

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
