# Techknomatic Gulf Site — Context for Claude

## What this project is

Dubai/Gulf-facing marketing website for Techknomatic Services.

- **Stack:** React 18 + TypeScript + Vite + React Router v7. Plain CSS with custom-property tokens (no Tailwind/CSS-in-JS). Framer Motion for scroll reveal. `react-helmet-async` for per-page SEO. Static deploy target.
- **Design:** Light-first, friendly-confident, with a supported dark theme toggle (added 2026-05-20). Orange `#FF4A00` is the brand color and is invariant across themes. Space Grotesk (display) + Inter (body). Zapier-style — rounded pill CTAs, floating product cards in hero, soft shadows, hover-lift cards. The old "DIFC boardroom" dark aesthetic (gold / teal / maroon) is still dead — the supported dark theme is a clean Zapier-style near-black with the same brand orange.
- **Audience:** UAE / Saudi / wider GCC enterprise B2B — CTO / CIO / CDO at DIFC, ADGM, DMCC, BFSI, government, regulated industries.

## What this project is NOT

- Not the India site (separate repo). Never import logic, content, or style from it.
- Not the previous dark-themed iteration. The old gold/teal/maroon "DIFC boardroom" tokens stay dead. The current dark theme is a separate, modern, Zapier-style dark — neutral near-black surfaces with the same orange brand.
- Not a generic template — distinctive typography (Space Grotesk H1 + serif fallback never) + Gulf-region content + custom floating-card stack must remain recognisable.
- Not a place to invent copy: all text comes from `_planning/content/*.md`.

## Planning files (read BEFORE touching code)

- `_planning/BRAND.md` — tone, positioning, voice rules, what-we-are-NOT.
- `_planning/DESIGN.md` — design tokens (light-only) + component specs.
- `_planning/PAGES.md` — page priority, section maps, routing table.
- `_planning/LOCALIZATION.md` — Gulf rules, WhatsApp, Arabic scaffold, regional sensitivity.
- `_planning/COMPONENTS.md` — component inventory.
- `_planning/content/<area>/<PAGE>.md` — content for the page you build today.
- `_planning/SESSION_LOG.md` — what the last session did, what's blocking, next task.
- `docs/superpowers/specs/2026-05-19-zapier-style-redesign-design.md` — the design contract for the rebuild.

## Content rules

- All copy comes from `_planning/content/`. No invention. No paraphrasing.
- Every block in a content file has exactly one LOC tag: `UNIVERSAL`, `GULF-ADAPT`, or `GULF-NEW`.
- If copy is missing, leave `<!-- CONTENT MISSING: description -->`. Do NOT fill it in.

## Design rules

- Brand color is orange `#FF4A00`. Used for primary CTAs, eyebrow pills, link text, accent strokes. Tile colors for products use the locked 5-color palette in `DESIGN.md` (`--icon-orange`, `--icon-blue`, `--icon-purple`, `--icon-green`, `--icon-yellow`).
- Never use: gold, teal, purple as background fill (only as product-tile accent), saffron, stock office photos, sharp-cornered cards, centred body text, India-flag / cricket / Bollywood imagery, the *old* DIFC-boardroom dark tokens.
- Always use CSS variables from `tokens.css`. Zero hardcoded hex in `.tsx` files.
- Light + dark themes are supported. `<html data-theme="light|dark">` is managed by `ThemeContext` (default = system preference, persisted to localStorage). All flippable tokens (`--canvas`, `--ink`, `--surface-*`, `--shadow-*`, `--card-edge`) are overridden in `[data-theme="dark"]`. Brand orange, icon palette, status colors, spacing, type and motion are theme-agnostic. When you author new components, prefer tokens — they handle both themes automatically. The two exceptions are the Footer (intentionally always-dark band) and PageCTA (always-dark island card); these use hardcoded white text + hardcoded dark backgrounds and that is correct.
- Pill CTAs (`border-radius: 999px`). Cards 14-16px radius. Inputs 10px. No sharp corners on user surfaces.
- WhatsApp green `#25D366` is the single documented palette exception, used only on the WhatsApp FAB.

## Build rules

- One section per session. Build → visual check → next section.
- This project is currently NOT under git on the local machine. Atomic checkpoints are recorded in `_planning/SESSION_LOG.md` instead of commits.
- Never leave the codebase in a half-built state at session end. `tsc --noEmit` must be green before stopping.

## Session start protocol

1. Read `_planning/SESSION_LOG.md` to learn what the last session completed.
2. Read the relevant `_planning/content/<area>/<PAGE>.md` for today's page.
3. State out loud which section you are about to build and which content blocks you will consume — before writing any code.
4. If anything is ambiguous, ask. Never guess.

## Session end protocol

1. Update `_planning/SESSION_LOG.md` (what built, what next, blockers, files modified).
2. Confirm `tsc --noEmit` is green.
3. List any `[CONTENT MISSING]` or unresolved `LOC: GULF-ADAPT` blocks still open.
