# Zapier-Style Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Techknomatic Gulf site from a dark/gold "DIFC boardroom" aesthetic into a light, orange, Zapier-style B2B site — keeping all content/data, replacing the design system and component library, repainting the four already-built pages (Home, Services index + 5 details, Contact, About-Company).

**Architecture:** Light-only theme with orange `#FF4A00` brand color. New CSS token set, new component library built atop the existing data files. 13 atomic commits on a single `phase/redesign-zapier` branch off `main`. Verification per project playbook: `tsc --noEmit` green after each commit + dev-server HTTP smoke. Visual sign-off checkpoints between commits 06→07 (hero working) and 08→09 (home repainted). No unit tests (project has none — visual + type-check is the discipline).

**Spec:** See `docs/superpowers/specs/2026-05-19-zapier-style-redesign-design.md` — this plan executes that spec section-by-section.

**Tech Stack:** React 18 · TypeScript 5.6 · Vite 5.4 · React Router 7 · CSS Modules · Framer Motion · Google Fonts (Inter + Space Grotesk + JetBrains Mono).

**Working directory:** `D:\TKS-Dubai\`

---

## File Structure

| Path | Role | Action |
|---|---|---|
| `CLAUDE.md` | Project context for Claude Code | Rewrite (Task 01) |
| `_planning/BRAND.md` | Tone, voice, anti-patterns | Rewrite (Task 01) |
| `_planning/DESIGN.md` | Design tokens & component specs | Rewrite (Task 01) |
| `_planning/SESSION_LOG.md` | Session history | Append Session 7+ entries (per task) |
| `index.html` | Page shell + Google Fonts | Modify (Task 02) |
| `src/styles/tokens.css` | CSS variables | Rewrite (Task 02) |
| `src/styles/globals.css` | Reset + base | Modify (Task 02) |
| `src/components/Pill.tsx` + `.module.css` | NEW — eyebrow / tag primitive | Create (Task 03) |
| `src/components/Button.tsx` + `.module.css` | Pill primary/secondary/dark/link variants | Rebuild (Task 03) |
| `src/components/Card.tsx` + `.module.css` | White card primitive | Rebuild (Task 03) |
| `src/components/NavBar.tsx` + `.module.css` | Light nav + mega-menu | Rebuild (Task 04) |
| `src/components/Footer.tsx` + `.module.css` | Dark footer on light page | Rebuild (Task 05) |
| `src/components/HeroSection.tsx` + `.module.css` | Light hero w/ floating cards prop | Rebuild (Task 06) |
| `src/components/FloatingCard.tsx` + `.module.css` | NEW — hero illustration card | Create (Task 06) |
| `src/components/ProductCard.tsx` + `.module.css` | NEW — service/product grid card | Create (Task 07) |
| `src/components/PillarCard.tsx` + `.module.css` | Numbered differentiator | Rebuild (Task 07) |
| `src/components/PageCTA.tsx` + `.module.css` | Orange-gradient closing banner | Rebuild (Task 07) |
| `src/components/SectionHeader.tsx` + `.module.css` | Eyebrow pill + Space Grotesk H | Rebuild (Task 08) |
| `src/components/PersonCard.tsx` + `.module.css` | Light card, orange initials | Restyle (Task 08) |
| `src/components/ValueTile.tsx` + `.module.css` | White surface, orange glyph | Restyle (Task 08) |
| `src/components/CaseStudyTeaser.tsx` + `.module.css` | White card, orange eyebrow | Restyle (Task 08) |
| `src/components/SpotlightCard.tsx` + `.module.css` | DROP — replaced by ProductCard | Delete (Task 09) |
| `src/pages/Home.tsx` + `.module.css` | Home page | Rebuild (Task 09) |
| `src/components/CapabilityCard.tsx` + `.module.css` | Light variant | Rebuild (Task 10) |
| `src/components/UseCaseCard.tsx` + `.module.css` | Light variant | Rebuild (Task 10) |
| `src/components/ProcessTimeline.tsx` + `.module.css` | Light variant | Rebuild (Task 10) |
| `src/components/ServiceDetailPage.tsx` + `.module.css` | Template repaint | Rebuild (Task 10) |
| `src/pages/ServicesIndex.tsx` + `.module.css` | Services landing | Rebuild (Task 10) |
| `src/pages/ServiceDetail.tsx` | Generic /:slug route — minor update | Modify (Task 10) |
| `src/components/ContactForm.tsx` + `.module.css` | Restyle inputs | Restyle (Task 11) |
| `src/pages/Contact.tsx` + `.module.css` | Restyle | Restyle (Task 11) |
| `src/pages/AboutCompany.tsx` + `.module.css` | Restyle | Restyle (Task 12) |
| `src/components/WhatsAppFAB.tsx` + `.module.css` | Tighter shadow, no glow | Restyle (Task 12) |
| `src/pages/NotFound.tsx` + `.module.css` | Light bg, orange eyebrow | Restyle (Task 12) |
| `src/components/ThemeToggle.tsx` + `.module.css` | DELETE — light-only site | Delete (Task 13) |
| `src/lib/theme.ts` | DELETE — no theme system | Delete (Task 13) |
| `src/pages/DesignProof.tsx` + `.module.css` | DELETE — developer proof obsolete | Delete (Task 13) |
| `src/App.tsx` | Drop `/design-proof` route, drop ThemeToggle wiring | Modify (Task 13) |
| `src/components/Layout.tsx` | Drop ThemeToggle wiring (if present) | Modify (Task 13) |

Files NOT touched: `src/data/*` (all content), `src/lib/whatsapp.ts`, `src/components/Reveal.{tsx,module.css}`, `src/main.tsx`, `vite.config.ts`, `tsconfig.json`, `package.json` (no dep changes).

---

## Task 01 — Branch + rewrite planning files

**Files:**
- Modify: `CLAUDE.md`
- Modify: `_planning/BRAND.md`
- Modify: `_planning/DESIGN.md`
- Append: `_planning/SESSION_LOG.md`

- [ ] **Step 1: Cut the branch off main**

```bash
git checkout main
git pull
git checkout -b phase/redesign-zapier
```

Expected: on branch `phase/redesign-zapier`.

- [ ] **Step 2: Rewrite `CLAUDE.md`**

Overwrite the entire file (current content is 58 lines) with:

```markdown
# Techknomatic Gulf Site — Context for Claude

## What this project is

Dubai/Gulf-facing marketing website for Techknomatic Services.

- **Stack:** React 18 + TypeScript + Vite + React Router v7. Plain CSS with custom-property tokens (no Tailwind/CSS-in-JS). Framer Motion for scroll reveal. `react-helmet-async` for per-page SEO. Static deploy target.
- **Design:** Light-first, friendly-confident. Orange `#FF4A00` as the brand color over warm-white surfaces. Space Grotesk (display) + Inter (body). Zapier-style — rounded pill CTAs, floating product cards in hero, soft shadows, hover-lift cards. Not the old "DIFC boardroom" dark aesthetic — that was superseded 2026-05-19.
- **Audience:** UAE / Saudi / wider GCC enterprise B2B — CTO / CIO / CDO at DIFC, ADGM, DMCC, BFSI, government, regulated industries.

## What this project is NOT

- Not the India site (separate repo). Never import logic, content, or style from it.
- Not the previous dark-themed iteration. All dark/gold/teal tokens are dead. Light-only.
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
- Never use: gold, teal, purple as background fill (only as product-tile accent), saffron, stock office photos, sharp-cornered cards, centred body text, India-flag / cricket / Bollywood imagery, dark-theme tokens.
- Always use CSS variables from `_planning/DESIGN.md`. Zero hardcoded hex in `.tsx` files.
- Light only. No theme toggle.
- Pill CTAs (`border-radius: 999px`). Cards 14-16px radius. Inputs 10px. No sharp corners on user surfaces.
- WhatsApp green `#25D366` is the single documented palette exception, used only on the WhatsApp FAB.

## Build rules

- One section per session. Build → visual check → commit → next section.
- Branches: `main` → `phase/<name>` → `page/<name>` for individual pages.
- Commit format: `feat: [page] - [section]` or `fix: [component] - [issue]`.
- Never commit half-built components to `main`. Review `git diff --staged` before every commit.

## Session start protocol

1. Read `_planning/SESSION_LOG.md` to learn what the last session completed.
2. Read the relevant `_planning/content/<area>/<PAGE>.md` for today's page.
3. State out loud which section you are about to build and which content blocks you will consume — before writing any code.
4. If anything is ambiguous, ask. Never guess.

## Session end protocol

1. Update `_planning/SESSION_LOG.md` (what built, what next, blockers, files modified).
2. Commit with descriptive message.
3. List any `[CONTENT MISSING]` or unresolved `LOC: GULF-ADAPT` blocks still open.
```

- [ ] **Step 3: Rewrite `_planning/BRAND.md`**

Overwrite with:

```markdown
# Brand — Techknomatic Gulf

## Positioning

We build the **back-office that runs the front-office** — the data pipelines, AI assistants, and managed operations that keep Gulf enterprises running on Sunday morning. Eleven years. 120+ enterprise clients. UAE-resident leadership.

We are the *boring infrastructure layer*. Banks, insurers, regulators, oil & gas, government — they care about uptime, not pitch decks. We ship to SLAs, not slides.

## Audience

CIO / CTO / CDO / Head of Data at DIFC, ADGM, DMCC, BFSI, government, oil & gas, manufacturing. Gulf-region B2B. Decision-cycle 60-180 days. Procurement and InfoSec involved.

## Voice — friendly-confident

- Direct, no fluff. Say what we do; don't pad with adjectives.
- Acknowledge the complexity ("data, AI, and ops"), then make the offer simple ("one partner").
- Self-deprecating where it shows ownership ("the plumbing that doesn't break", "your CFO actually opens"). Never self-deprecating about competence.
- Gulf-aware: Sunday-Thursday work week, GST timezone, WhatsApp as first-class contact channel, no fake regional references.

## Use

- "Connect your data, AI and operations — without the heavy lift."
- "We don't ship slides. We ship SLAs."
- "From DIFC banks to regional insurers."
- "Free 30-min scoping call. Sun-Thu, GST."

## Ban

- "Empowering" / "transforming" / "synergy" / "leverage" / "innovative solutions"
- Generic SaaS-platitudes ("unlock the power of your data")
- Anything implying we're a startup or an SMB tool
- Cricket, Bollywood, India-flag imagery
- Stock photos of "diverse teams in glass offices"
- Boardroom-formal language ("herein", "leverage our deep expertise")

## Trust signals (always available)

- 11 years in market
- 120+ enterprise clients (numeric — `CONTENT MISSING` until confirmed)
- ESRI Silver Partner
- Qlik Partner
- Microsoft Partner
- UAE-resident leadership (Apoorva Gowda + Arup Saroji)
- DIFC office presence
- Compliance: PDPL UAE + sector-specific (CONTENT MISSING list)

## What we are NOT

- Not a SaaS product company. We're services-first with productized accelerators (the four "Enterprise AI" products + four platforms).
- Not a generic IT shop. We're a data-and-AI specialist with managed-operations capability.
- Not a startup. Eleven years. Regional offices. Real bench.
- Not the India site. India is a separate codebase, separate positioning, separate audience.
- Not "DIFC boardroom" in tone (the previous iteration's voice). Now: friendly-confident. Approachable to a CTO but never glib.
```

- [ ] **Step 4: Rewrite `_planning/DESIGN.md`**

Overwrite with:

```markdown
# Design System — Techknomatic Gulf (v2 — Zapier-style)

> Supersedes the dark/gold v1 system as of 2026-05-19. All references to dark theme, gold/teal accents, glass surfaces, sharp-cornered cards are obsolete.

## Foundation

Light theme only. Orange `#FF4A00` brand. Friendly-confident voice. Rounded pill CTAs. Floating cards in hero. Soft shadows. Hover-lift cards.

## Color tokens

### Brand & neutrals

| Token | Hex | Role |
|---|---|---|
| `--brand` | `#FF4A00` | Primary CTAs, eyebrow accents, links |
| `--brand-dark` | `#CC3A00` | CTA hover, pressed state |
| `--brand-tint` | `#FFE9DD` | Eyebrow pill bg, focus ring base |
| `--brand-wash` | `#FFF5EF` | Hero tint, section background |
| `--ink` | `#201E1E` | Headlines, primary text |
| `--ink-muted` | `#494A4A` | Body labels, nav links |
| `--text-2` | `#6B6C6C` | Lead paragraphs, descriptions |
| `--border` | `#D8D4CE` | Inputs, dividers |
| `--surface-1` | `#FAF9F7` | Card backgrounds in light sections |
| `--surface-2` | `#F0EDE9` | Alt background, hover surface |
| `--canvas` | `#FFFFFF` | Page background |
| `--whatsapp-green` | `#25D366` | Single palette exception — WhatsApp FAB only |

### Product-icon palette (Zapier pattern — locked per-product)

| Token | Hex | Assigned to |
|---|---|---|
| `--icon-orange` | `#FF4A00` | Business Analytics · AssistIQ |
| `--icon-blue` | `#2C6DF6` | Data Engineering · DataPulseIQ · CallOps AI |
| `--icon-purple` | `#7A5AF8` | AI & Data Strategy · TicketIQ |
| `--icon-green` | `#1AB87A` | Geospatial · Qlik partner · CXO Nexus |
| `--icon-yellow` | `#FFB800` | Managed Services · ESRI partner |

### Status

| Token | Hex |
|---|---|
| `--success` | `#1AB87A` |
| `--info` | `#2C6DF6` |
| `--warning` | `#FFB800` |
| `--danger` | `#E23A3A` |

## Typography

Google Fonts loaded in `index.html`:
- **Space Grotesk** weights 500/600/700 — display
- **Inter** weights 400/500/600/700/800 — body, UI
- **JetBrains Mono** weight 500 — mono labels, code

### Families

| Token | Stack |
|---|---|
| `--font-display` | `'Space Grotesk', ui-sans-serif, system-ui, sans-serif` |
| `--font-body` | `'Inter', ui-sans-serif, system-ui, sans-serif` |
| `--font-mono` | `'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace` |

### Scale (clamp-based fluid)

| Token | Family | Weight | Size (desktop) | Line | Letter |
|---|---|---|---|---|---|
| `--t-display` | display | 700 | clamp(40px, 5vw, 64px) | 1.0 | -3% |
| `--t-h1` | display | 700 | clamp(28px, 3vw, 36px) | 1.05 | -2.5% |
| `--t-h2` | display | 600 | clamp(20px, 2vw, 24px) | 1.15 | -2% |
| `--t-h3` | display | 600 | 18px | 1.2 | -1% |
| `--t-body` | body | 400 | 16px | 1.55 | 0 |
| `--t-small` | body | 500 | 13px | 1.5 | 0 |
| `--t-mono` | mono | 500 | 12px | 1.4 | +4%, UPPERCASE |

## Spacing, radii, shadow

Spacing scale unchanged from v1 (4px grid): `--space-1` 4 → `--space-10` 120.

| Radii | Px |
|---|---|
| `--r-sm` | 6 |
| `--r-md` | 10 (inputs) |
| `--r-lg` | 14 (cards) |
| `--r-xl` | 20 (CTA banners) |
| `--r-pill` | 999 (buttons) |

| Shadows | Value |
|---|---|
| `--shadow-1` | `0 1px 2px rgba(0,0,0,.06)` |
| `--shadow-2` | `0 4px 12px rgba(0,0,0,.08)` |
| `--shadow-3` | `0 8px 24px rgba(0,0,0,.10)` |
| `--shadow-4` | `0 16px 40px rgba(0,0,0,.12)` |

## Motion

- Card hover: `translateY(-4px)` + shadow-2 → shadow-3, 200ms ease-out.
- Floating cards: 3-4s sinusoidal bob `translateY(±6px)`, staggered.
- Button press: `scale(0.97)` on `:active`, 100ms.
- Scroll reveal: existing `Reveal` (IntersectionObserver) — unchanged.
- All motion gated by `@media (prefers-reduced-motion: reduce)`.

## Component anti-patterns (banned)

- Sharp corners on cards/inputs/CTAs
- Dark backgrounds on content pages (footer-only exception)
- Gold/teal accents anywhere
- Glass / backdrop-blur surfaces
- Glow effects on hover
- Centred body paragraphs
- Stock office photos
- "Icon in a circle" enterprise-y patterns (use the colored rounded-square tile instead)
- Hardcoded hex codes in `.tsx` files — always use CSS variables
```

- [ ] **Step 5: Append a Session 7 entry to `_planning/SESSION_LOG.md`**

Insert the following at the very top of `_planning/SESSION_LOG.md`, immediately after the `<!-- Add new sessions ABOVE the existing entries — most recent first. -->` line:

```markdown
## Session 7 — 2026-05-19 — Phase 4: Zapier-style redesign — planning files rewritten

**Goal:** Override the v1 dark/gold/teal "DIFC boardroom" system with a Zapier-style light + orange direction. Rewrite `CLAUDE.md`, `_planning/BRAND.md`, `_planning/DESIGN.md` to match the new spec at `docs/superpowers/specs/2026-05-19-zapier-style-redesign-design.md` before touching any code.

**Completed**

- [x] Cut `phase/redesign-zapier` off `main`.
- [x] `CLAUDE.md` rewritten — light-only, orange `#FF4A00`, Space Grotesk + Inter, no dark/gold/teal.
- [x] `_planning/BRAND.md` rewritten — "friendly-confident" voice replaces "DIFC boardroom".
- [x] `_planning/DESIGN.md` rewritten — full new token set (12 brand/neutral colors, 5 product-icon colors, radii including pill, 4-step shadow scale).
- [x] Sessions 1-6 history preserved verbatim below.

**Verification**

- No code changes — planning files only.
- `tsc --noEmit` not run (no `.ts/.tsx` touched).

**Per-commit log**

```
<SHORT_SHA> chore: redesign - rewrite planning files (CLAUDE/BRAND/DESIGN)
```

**Next session goal**

Task 02 of the implementation plan — rewrite `src/styles/tokens.css` and update `index.html` font loading. See `docs/superpowers/plans/2026-05-19-zapier-style-redesign.md`.

**Files modified this session**

- `CLAUDE.md`
- `_planning/BRAND.md`
- `_planning/DESIGN.md`
- `_planning/SESSION_LOG.md` (this entry)

---
```

- [ ] **Step 6: Stage and commit**

```bash
git add CLAUDE.md _planning/BRAND.md _planning/DESIGN.md _planning/SESSION_LOG.md
git diff --staged
git commit -m "chore: redesign - rewrite planning files (CLAUDE/BRAND/DESIGN)"
```

Expected: 4 files changed. Diff shows full rewrite of CLAUDE.md, BRAND.md, DESIGN.md + new session-log entry.

---

## Task 02 — New tokens.css + fonts + globals

**Files:**
- Rewrite: `src/styles/tokens.css`
- Modify: `index.html` (font links)
- Modify: `src/styles/globals.css` (drop dark assumptions)

- [ ] **Step 1: Overwrite `src/styles/tokens.css` with the new token system**

```css
/* Techknomatic Gulf Site — Design Tokens v2 (Zapier-style)
 * Source of truth: _planning/DESIGN.md
 * Light-only. Orange #FF4A00. No theme switching.
 */

:root {
  /* === Brand === */
  --brand:         #FF4A00;
  --brand-dark:    #CC3A00;
  --brand-tint:    #FFE9DD;
  --brand-wash:    #FFF5EF;

  /* === Neutrals === */
  --ink:           #201E1E;
  --ink-muted:     #494A4A;
  --text-2:        #6B6C6C;
  --border:        #D8D4CE;
  --surface-1:     #FAF9F7;
  --surface-2:     #F0EDE9;
  --canvas:        #FFFFFF;

  /* === Product-icon palette (locked per-product) === */
  --icon-orange:   #FF4A00;
  --icon-blue:     #2C6DF6;
  --icon-purple:   #7A5AF8;
  --icon-green:    #1AB87A;
  --icon-yellow:   #FFB800;

  /* === Status === */
  --success:       #1AB87A;
  --info:          #2C6DF6;
  --warning:       #FFB800;
  --danger:        #E23A3A;

  /* === Palette exception === */
  --whatsapp-green: #25D366;

  /* === Spacing (4px grid) === */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 120px;

  /* === Layout === */
  --max-width: 1280px;
  --grid-gap: 24px;

  /* === Radii === */
  --r-sm:   6px;
  --r-md:   10px;
  --r-lg:   14px;
  --r-xl:   20px;
  --r-pill: 999px;

  /* === Shadow scale === */
  --shadow-1: 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-3: 0 8px 24px rgba(0, 0, 0, 0.10);
  --shadow-4: 0 16px 40px rgba(0, 0, 0, 0.12);

  /* === Motion === */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;

  /* === Type families === */
  --font-display: "Space Grotesk", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-body:    "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono:    "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;

  /* === Type scale (clamp-based fluid) === */
  --t-display:  clamp(40px, 5vw, 64px);
  --t-h1:       clamp(28px, 3vw, 36px);
  --t-h2:       clamp(20px, 2vw, 24px);
  --t-h3:       18px;
  --t-body:     16px;
  --t-small:    13px;
  --t-label:    12px;

  /* === Line heights === */
  --lh-display: 1.0;
  --lh-tight:   1.1;
  --lh-snug:    1.25;
  --lh-base:    1.55;
  --lh-loose:   1.7;

  /* === Letter-spacing === */
  --ls-display: -0.03em;
  --ls-h1:      -0.025em;
  --ls-h2:      -0.02em;
  --ls-h3:      -0.01em;
  --ls-base:    0;
  --ls-label:   0.04em;
  --ls-caps:    0.12em;
}
```

- [ ] **Step 2: Update `index.html` font links**

Open `index.html` and find the Google Fonts link block (currently loads Syne + DM Sans). Replace the entire `<link rel="preconnect" ...>` + `<link href="https://fonts.googleapis.com/css2?family=Syne..." rel="stylesheet">` block with:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap"
  rel="stylesheet"
/>
```

Also remove the inline no-flash-theme script (the `<script>` block that reads `tks-theme` from localStorage and sets `data-theme` on `<html>`). Light-only site — no theme switching.

- [ ] **Step 3: Update `src/styles/globals.css`**

Open `src/styles/globals.css`. Replace the body/base styles to:

```css
/* Techknomatic Gulf Site — Globals (Light-only) */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  margin: 0;
  padding: 0;
  background: var(--canvas);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: var(--t-body);
  line-height: var(--lh-base);
  letter-spacing: var(--ls-base);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

/* Focus ring — orange glow */
:focus-visible {
  outline: 3px solid var(--brand-tint);
  outline-offset: 2px;
  border-radius: var(--r-sm);
}

/* Selection — orange tint */
::selection {
  background: var(--brand-tint);
  color: var(--brand-dark);
}

/* Skip link */
.skip-to-content {
  position: absolute;
  top: -100px;
  left: 16px;
  background: var(--ink);
  color: var(--canvas);
  padding: 12px 18px;
  border-radius: var(--r-md);
  z-index: 1000;
  font-weight: 600;
  font-size: var(--t-small);
}
.skip-to-content:focus {
  top: 16px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 4: Verify**

```bash
npx tsc --noEmit
```

Expected: zero errors. (No `.tsx` changed — only CSS and HTML — but run it to confirm nothing depends on the dropped tokens.)

```bash
npm run dev
```

Expected: Vite starts. Open `http://localhost:5173/`. The site will look BROKEN (components still reference old tokens like `--bg-base`, `--gold-primary`, `--text-primary`) — this is expected. The point is verifying tokens.css loads, fonts load, and Vite serves. Stop the dev server after confirming.

- [ ] **Step 5: Append Session 8 entry to `_planning/SESSION_LOG.md`**

Add above the Session 7 entry (most recent first):

```markdown
## Session 8 — 2026-05-19 — Phase 4: New tokens + fonts

**Goal:** Replace `tokens.css` with the v2 light-only system. Swap Google Fonts to Space Grotesk + Inter + JetBrains Mono. Drop the no-flash-theme script.

**Completed**

- [x] `src/styles/tokens.css` overwritten — 12 brand/neutral colors, 5 product-icon colors, 4-step shadow scale, pill radius, fluid type scale.
- [x] `index.html` — Google Fonts link swapped; no-flash-theme script removed.
- [x] `src/styles/globals.css` — base styles repointed to new tokens; orange focus ring + orange selection.

**Verification**

- `tsc --noEmit` — green.
- Dev server starts. Site renders broken (components still reference old tokens) — expected. Tokens load.

**Per-commit log**

```
<SHORT_SHA> chore: redesign - new tokens.css + fonts + globals
```

**Next**

Task 03 — Pill primitive + Button + Card rebuild. After Task 03 the design-proof page is dead (deleted in Task 13), and Home will start rendering with new primitives in Task 09.

**Files modified this session**

- `src/styles/tokens.css`
- `src/styles/globals.css`
- `index.html`
- `_planning/SESSION_LOG.md` (this entry)

---
```

- [ ] **Step 6: Commit**

```bash
git add src/styles/tokens.css src/styles/globals.css index.html _planning/SESSION_LOG.md
git diff --staged
git commit -m "chore: redesign - new tokens.css + fonts + globals"
```

---

## Task 03 — Pill primitive + Button + Card rebuild

**Files:**
- Create: `src/components/Pill.tsx`
- Create: `src/components/Pill.module.css`
- Rewrite: `src/components/Button.tsx`
- Rewrite: `src/components/Button.module.css`
- Rewrite: `src/components/Card.tsx`
- Rewrite: `src/components/Card.module.css`

- [ ] **Step 1: Create `src/components/Pill.tsx`**

```tsx
import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Pill.module.css";

type Variant = "brand" | "neutral" | "mono";

export interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  dot?: boolean;
  children: ReactNode;
}

export function Pill({
  variant = "brand",
  dot = false,
  className = "",
  children,
  ...rest
}: PillProps) {
  const classes = [styles.pill, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={classes} {...rest}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
```

- [ ] **Step 2: Create `src/components/Pill.module.css`**

```css
.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: var(--r-pill);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--t-label);
  line-height: 1.5;
  letter-spacing: var(--ls-label);
  white-space: nowrap;
}

.brand {
  background: var(--brand-tint);
  color: var(--brand);
}

.neutral {
  background: var(--surface-2);
  color: var(--ink-muted);
}

.mono {
  background: var(--surface-2);
  color: var(--ink-muted);
  font-family: var(--font-mono);
  font-size: 11px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  display: inline-block;
}
```

- [ ] **Step 3: Rewrite `src/components/Button.tsx`**

Overwrite the entire file:

```tsx
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "dark" | "link";
type Size = "md" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  trailingArrow?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    trailingArrow = false,
    className = "",
    children,
    ...rest
  },
  ref,
) {
  const classes = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");
  return (
    <button ref={ref} type="button" className={classes} {...rest}>
      <span className={styles.label}>{children}</span>
      {(variant === "link" || trailingArrow) && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </button>
  );
});
```

- [ ] **Step 4: Rewrite `src/components/Button.module.css`**

Overwrite:

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: var(--r-pill);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: var(--t-small);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: transform 100ms ease, background-color 200ms ease,
    color 200ms ease, box-shadow 200ms ease;
  min-height: 44px;
}

.btn:active:not(:disabled) {
  transform: scale(0.97);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.label {
  display: inline-block;
}

.arrow {
  display: inline-block;
  transition: transform 200ms ease;
}

.btn:hover .arrow {
  transform: translateX(4px);
}

/* Variants */
.primary {
  background: var(--brand);
  color: var(--canvas);
  padding: 12px 24px;
}
.primary:hover:not(:disabled) {
  background: var(--brand-dark);
}

.secondary {
  background: transparent;
  color: var(--ink);
  border: 1.5px solid var(--border);
  padding: 12px 22px;
}
.secondary:hover:not(:disabled) {
  border-color: var(--ink);
  background: var(--surface-1);
}

.dark {
  background: var(--ink);
  color: var(--canvas);
  padding: 10px 18px;
}
.dark:hover:not(:disabled) {
  background: #000;
}

.link {
  background: transparent;
  color: var(--brand);
  padding: 12px 4px;
  min-height: auto;
}
.link:hover:not(:disabled) {
  color: var(--brand-dark);
}

/* Sizes */
.sm {
  font-size: 12px;
  min-height: 36px;
}
.sm.primary,
.sm.secondary {
  padding: 8px 18px;
}
.sm.dark {
  padding: 7px 14px;
}
```

- [ ] **Step 5: Rewrite `src/components/Card.tsx`**

Overwrite:

```tsx
import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

type Variant = "base" | "surface" | "elevated";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  hoverable?: boolean;
  children: ReactNode;
}

export function Card({
  variant = "base",
  hoverable = false,
  className = "",
  children,
  ...rest
}: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    hoverable ? styles.hoverable : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
```

- [ ] **Step 6: Rewrite `src/components/Card.module.css`**

Overwrite:

```css
.card {
  border-radius: var(--r-lg);
  padding: var(--space-5);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.base {
  background: var(--canvas);
  border: 1px solid var(--surface-2);
}

.surface {
  background: var(--surface-1);
  border: 1px solid var(--surface-2);
}

.elevated {
  background: var(--canvas);
  box-shadow: var(--shadow-2);
}

.hoverable:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-3);
}

@media (prefers-reduced-motion: reduce) {
  .hoverable:hover {
    transform: none;
  }
}
```

- [ ] **Step 7: Verify type check**

```bash
npx tsc --noEmit
```

Expected: zero errors. (Button props changed — `ghost` is gone, `dark` and `link` added. If any caller uses `<Button variant="ghost">` we'll surface that in Task 09 when the home page is repainted — for now the type system might still error since callers reference removed variants. If so, that's the FIRST callers we have to fix in Task 09. NOTE: this is a known transient breakage — don't try to fix in this task.)

If errors appear in callers (Home.tsx, ServicesIndex.tsx, etc.) — **leave them**. Those files are rebuilt in Tasks 09-10. For the commit boundary here, the components themselves must type-check. Verify only:

```bash
npx tsc --noEmit src/components/Button.tsx src/components/Card.tsx src/components/Pill.tsx 2>&1 | head
```

If tsc doesn't accept individual files (it's a project build), instead temporarily comment out the broken callers, run tsc, then revert the comments before committing. Or: accept that tsc will fail until Task 09 and skip the verify gate for this task — log the deviation in the session log.

**Decision:** for this commit, accept transient tsc breakage. The session log entry should record it. The branch will be green again at end of Task 09.

- [ ] **Step 8: Append Session 9 to `_planning/SESSION_LOG.md`**

```markdown
## Session 9 — 2026-05-19 — Phase 4: Pill + Button + Card primitives

**Goal:** Replace `Button` and `Card` with light/orange/pill variants. Introduce new `Pill` primitive used by every page's eyebrow.

**Completed**

- [x] `src/components/Pill.tsx` + `.module.css` — new primitive. Variants: `brand` (orange tint bg + orange text), `neutral` (surface-2 bg + ink-muted), `mono` (surface-2 + JetBrains).
- [x] `src/components/Button.tsx` — rewrite. Variants: `primary` (orange pill), `secondary` (neutral outline pill), `dark` (ink pill — nav top-right), `link` (orange text + animated arrow). Sizes `md` + `sm`. Optional `trailingArrow` prop on any variant.
- [x] `src/components/Card.tsx` — rewrite. Variants: `base` (canvas + light border), `surface` (surface-1 bg), `elevated` (canvas + shadow-2). Optional `hoverable` prop adds translateY(-4px) on hover.

**Verification**

- Component-level types green.
- **Transient:** project-level `tsc --noEmit` fails until Task 09 because Home/ServicesIndex/etc still reference `<Button variant="ghost">`. Acknowledged deviation — restored at end of Task 09.

**Per-commit log**

```
<SHORT_SHA> feat: redesign - Pill + Button + Card primitives
```

**Files modified this session**

- `src/components/Pill.tsx` (new)
- `src/components/Pill.module.css` (new)
- `src/components/Button.tsx` (rewrite)
- `src/components/Button.module.css` (rewrite)
- `src/components/Card.tsx` (rewrite)
- `src/components/Card.module.css` (rewrite)
- `_planning/SESSION_LOG.md` (this entry)

---
```

- [ ] **Step 9: Commit**

```bash
git add src/components/Pill.tsx src/components/Pill.module.css \
        src/components/Button.tsx src/components/Button.module.css \
        src/components/Card.tsx src/components/Card.module.css \
        _planning/SESSION_LOG.md
git diff --staged
git commit -m "feat: redesign - Pill + Button + Card primitives"
```

---

## Task 04 — NavBar rebuild

**Files:**
- Rewrite: `src/components/NavBar.tsx`
- Rewrite: `src/components/NavBar.module.css`

- [ ] **Step 1: Rewrite `src/components/NavBar.tsx`**

The current NavBar (read it first to confirm imports and data sources) uses `PRIMARY_NAV` from `src/data/nav.ts`. Keep that import. Overwrite with:

```tsx
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PRIMARY_NAV } from "../data/nav";
import { Button } from "./Button";
import styles from "./NavBar.module.css";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={[styles.header, scrolled ? styles.scrolled : ""].join(" ")}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Techknomatic home">
          <span className={styles.logoMark} aria-hidden="true">
            T
          </span>
          <span className={styles.logoText}>Techknomatic</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {PRIMARY_NAV.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className={styles.navLink}
                      aria-expanded={openMenu === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <span className={styles.caret} aria-hidden="true">
                        ▾
                      </span>
                    </button>
                    {openMenu === item.label && (
                      <div className={styles.megaMenu} role="menu">
                        <ul className={styles.megaList}>
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavLink
                                to={child.href}
                                className={({ isActive }) =>
                                  [
                                    styles.megaLink,
                                    isActive ? styles.megaLinkActive : "",
                                  ].join(" ")
                                }
                              >
                                <span className={styles.megaLinkTitle}>
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className={styles.megaLinkDesc}>
                                    {child.description}
                                  </span>
                                )}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.href ?? "#"}
                    className={({ isActive }) =>
                      [styles.navLink, isActive ? styles.navLinkActive : ""].join(
                        " ",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link to="/contact" className={styles.signIn}>
            Sign in
          </Link>
          <Link to="/contact">
            <Button variant="dark" size="sm">
              Get started
            </Button>
          </Link>
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          className={styles.hamburger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className={styles.mobileOverlay} role="dialog">
          <ul className={styles.mobileList}>
            {PRIMARY_NAV.map((item) => (
              <li key={item.label} className={styles.mobileItem}>
                {item.href ? (
                  <NavLink to={item.href} className={styles.mobileParent}>
                    {item.label}
                  </NavLink>
                ) : (
                  <span className={styles.mobileParent}>{item.label}</span>
                )}
                {item.children && (
                  <ul className={styles.mobileChildren}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <NavLink to={child.href} className={styles.mobileChild}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className={styles.mobileCta}>
              <Link to="/contact">
                <Button variant="primary">Get started</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
```

**NOTE:** if `PRIMARY_NAV` items don't expose `href` on parent items (only `children`), the type-checker will complain on `item.href ?? "#"`. Open `src/data/nav.ts` and confirm: each `NavItem` should have either `href: string` OR `children: NavChild[]` (not both required). Use the `??` fallback to satisfy both shapes. If `nav.ts` type doesn't allow optional `href`, widen it.

- [ ] **Step 2: Rewrite `src/components/NavBar.module.css`**

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: box-shadow 200ms ease, background-color 200ms ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-1);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-3) var(--space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px;
  letter-spacing: var(--ls-h2);
  color: var(--ink);
}
.logoMark {
  width: 26px;
  height: 26px;
  background: var(--brand);
  color: var(--canvas);
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 14px;
}
.logoText {
  display: none;
}
@media (min-width: 768px) {
  .logoText {
    display: inline;
  }
}

/* Desktop nav */
.nav {
  display: none;
  flex: 1;
}
@media (min-width: 1024px) {
  .nav {
    display: block;
  }
}

.navList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: var(--space-5);
}

.navItem {
  position: relative;
}

.navLink {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 10px 4px;
  background: transparent;
  border: none;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 14px;
  color: var(--ink-muted);
  cursor: pointer;
  transition: color 150ms ease;
}
.navLink:hover,
.navLinkActive {
  color: var(--ink);
}

.caret {
  font-size: 10px;
  color: var(--text-2);
}

/* Mega menu */
.megaMenu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 6px;
  background: var(--canvas);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-3);
  padding: var(--space-3);
  min-width: 280px;
  border: 1px solid var(--surface-2);
}

.megaList {
  list-style: none;
  margin: 0;
  padding: 0;
}

.megaLink {
  display: block;
  padding: 10px 12px;
  border-radius: var(--r-md);
  transition: background-color 150ms ease;
}
.megaLink:hover,
.megaLinkActive {
  background: var(--surface-1);
}

.megaLinkTitle {
  display: block;
  font-weight: 600;
  font-size: 14px;
  color: var(--ink);
}

.megaLinkDesc {
  display: block;
  font-size: 12px;
  color: var(--text-2);
  margin-top: 2px;
}

/* Right actions */
.actions {
  display: none;
  align-items: center;
  gap: var(--space-3);
}
@media (min-width: 768px) {
  .actions {
    display: flex;
  }
}

.signIn {
  font-weight: 600;
  font-size: 14px;
  color: var(--ink);
  padding: 8px 10px;
}
.signIn:hover {
  color: var(--brand);
}

/* Hamburger */
.hamburger {
  background: transparent;
  border: none;
  font-size: 22px;
  color: var(--ink);
  padding: 8px;
  cursor: pointer;
}
@media (min-width: 1024px) {
  .hamburger {
    display: none;
  }
}

/* Mobile overlay */
.mobileOverlay {
  position: fixed;
  inset: 0;
  background: var(--canvas);
  z-index: 99;
  padding: var(--space-7) var(--space-5);
  overflow-y: auto;
}

.mobileList {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.mobileParent {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 24px;
  color: var(--ink);
  padding-block: 8px;
}

.mobileChildren {
  list-style: none;
  margin: 6px 0 0;
  padding: 0 0 0 var(--space-4);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mobileChild {
  font-size: 16px;
  color: var(--ink-muted);
  padding-block: 6px;
}

.mobileCta {
  margin-top: var(--space-5);
}
```

- [ ] **Step 3: Verify type-check + dev-server smoke**

```bash
npx tsc --noEmit
```

Expected: still fails on Home/ServicesIndex etc (callers haven't migrated). NavBar/Pill/Button/Card themselves type-check. Acknowledged.

```bash
npm run dev
```

Visit `http://localhost:5173/` — NavBar should render light, with logo + nav + dark "Get started" pill on the right. Body of page may be broken (Home still uses dark-theme components) — that's the next tasks. Stop dev server.

- [ ] **Step 4: Append Session 10 entry, commit**

```markdown
## Session 10 — 2026-05-19 — Phase 4: NavBar rebuild

**Goal:** Light, sticky, blurred-on-scroll NavBar with logo + centred nav + dark "Get started" pill. Mega-menu on desktop, full-screen overlay on mobile.

**Completed**

- [x] `src/components/NavBar.tsx` — rewritten. Sticky header, scroll-aware shadow, mega-menu on hover for parent items with children, accessible mobile overlay with ESC + body scroll-lock.
- [x] `src/components/NavBar.module.css` — fully light, no dark-theme refs.
- [x] Mobile-only hamburger below 1024 px. Skip-to-content link preserved.

**Verification**

- NavBar renders light at `/`. Skip-link works. Mega-menu opens on parent hover.
- Body of pages still broken (callers use dropped Button variants).

**Files modified this session**

- `src/components/NavBar.tsx` · `src/components/NavBar.module.css`
- `_planning/SESSION_LOG.md`

---
```

```bash
git add src/components/NavBar.tsx src/components/NavBar.module.css \
        _planning/SESSION_LOG.md
git diff --staged
git commit -m "feat: redesign - NavBar (light + mega-menu)"
```

---

## Task 05 — Footer rebuild

**Files:**
- Rewrite: `src/components/Footer.tsx`
- Rewrite: `src/components/Footer.module.css`

- [ ] **Step 1: Rewrite `src/components/Footer.tsx`**

```tsx
import { Link } from "react-router-dom";
import { CONTACT } from "../data/contact";
import { PRIMARY_NAV, FOOTER_EXTRAS } from "../data/nav";
import styles from "./Footer.module.css";

export function Footer() {
  const practice = PRIMARY_NAV.find((n) => n.label === "Services")?.children ?? [];
  const products = PRIMARY_NAV.find((n) => n.label === "Enterprise AI")?.children ?? [];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="Techknomatic home">
            <span className={styles.logoMark} aria-hidden="true">
              T
            </span>
            <span className={styles.logoText}>Techknomatic</span>
          </Link>
          <p className={styles.blurb}>
            Data, AI, and managed operations for Gulf enterprise. Eleven years.
            One partner. Built for Sunday morning.
          </p>
          <address className={styles.contact}>
            {CONTACT.officeAddress && <div>{CONTACT.officeAddress}</div>}
            {CONTACT.phone && (
              <div>
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              </div>
            )}
            {CONTACT.email && (
              <div>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            )}
          </address>
        </div>

        <div>
          <h5 className={styles.heading}>Practice</h5>
          <ul className={styles.list}>
            {practice.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className={styles.heading}>Products</h5>
          <ul className={styles.list}>
            {products.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className={styles.heading}>Company</h5>
          <ul className={styles.list}>
            {FOOTER_EXTRAS.map((item) => (
              <li key={item.label}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.legal}>
        <span>© {new Date().getFullYear()} Techknomatic Services FZE · DIFC, Dubai</span>
        <span className={styles.compliance}>UAE PDPL · ISO 27001 (CONTENT MISSING)</span>
      </div>
    </footer>
  );
}
```

**Note:** the code assumes `PRIMARY_NAV` has entries with `label: "Services"` and `label: "Enterprise AI"`. If labels differ (e.g. "Enterprise AI Products"), adjust the `.find()` calls. Also assumes `CONTACT` has optional `officeAddress`, `phone`, `email` fields. Confirm by reading `src/data/contact.ts` and `src/data/nav.ts` before pasting — if a field doesn't exist, drop that line. Don't invent contact info.

- [ ] **Step 2: Rewrite `src/components/Footer.module.css`**

```css
.footer {
  background: var(--ink);
  color: var(--surface-2);
  margin-top: var(--space-9);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-8) var(--space-5) var(--space-6);
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: var(--space-7);
}

@media (max-width: 768px) {
  .inner {
    grid-template-columns: 1fr 1fr;
  }
  .brand {
    grid-column: 1 / -1;
  }
}

.brand {
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  color: var(--canvas);
}
.logoMark {
  width: 26px;
  height: 26px;
  background: var(--brand);
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 14px;
  font-weight: 800;
}

.blurb {
  color: var(--text-2);
  font-size: 14px;
  line-height: var(--lh-base);
  margin: var(--space-3) 0 var(--space-4);
  max-width: 320px;
}

.contact {
  font-style: normal;
  font-size: 13px;
  line-height: 1.7;
  color: #b9b8b6;
}
.contact a {
  color: #d8d6d3;
}
.contact a:hover {
  color: var(--brand);
}

.heading {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: var(--ls-caps);
  color: var(--canvas);
  margin: 0 0 var(--space-3);
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.list a {
  font-size: 14px;
  color: #b9b8b6;
  transition: color 150ms ease;
}
.list a:hover {
  color: var(--brand);
}

.legal {
  border-top: 1px solid #2a2727;
  padding: var(--space-4) var(--space-5);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-2);
  font-size: 12px;
  color: var(--text-2);
}
```

- [ ] **Step 3: Verify + commit**

```bash
npm run dev
```

Visit `/contact`. Footer should render dark at the bottom. Stop dev server.

Append Session 11 to `SESSION_LOG.md` (follow the same shape as previous sessions), then:

```bash
git add src/components/Footer.tsx src/components/Footer.module.css _planning/SESSION_LOG.md
git diff --staged
git commit -m "feat: redesign - Footer (dark on light page)"
```

---

## Task 06 — HeroSection + FloatingCard

**Files:**
- Create: `src/components/FloatingCard.tsx`
- Create: `src/components/FloatingCard.module.css`
- Rewrite: `src/components/HeroSection.tsx`
- Rewrite: `src/components/HeroSection.module.css`

- [ ] **Step 1: Create `src/components/FloatingCard.tsx`**

```tsx
import type { CSSProperties, ReactNode } from "react";
import styles from "./FloatingCard.module.css";

export type IconTone =
  | "orange"
  | "blue"
  | "purple"
  | "green"
  | "yellow";

export interface FloatingCardProps {
  label: string;
  sub?: string;
  glyph: ReactNode;
  tone?: IconTone;
  position: { top?: number | string; left?: number | string; right?: number | string };
  delayMs?: number;
  className?: string;
}

const toneVar: Record<IconTone, string> = {
  orange: "var(--icon-orange)",
  blue: "var(--icon-blue)",
  purple: "var(--icon-purple)",
  green: "var(--icon-green)",
  yellow: "var(--icon-yellow)",
};

export function FloatingCard({
  label,
  sub,
  glyph,
  tone = "orange",
  position,
  delayMs = 0,
  className = "",
}: FloatingCardProps) {
  const style: CSSProperties = {
    ...position,
    animationDelay: `${delayMs}ms`,
    "--icon-bg": toneVar[tone],
  } as CSSProperties;
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")} style={style}>
      <div className={styles.icon} aria-hidden="true">
        {glyph}
      </div>
      <div className={styles.text}>
        <div className={styles.label}>{label}</div>
        {sub && <div className={styles.sub}>{sub}</div>}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `src/components/FloatingCard.module.css`**

```css
.card {
  position: absolute;
  background: var(--canvas);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-3);
  padding: 12px 14px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  white-space: nowrap;
  animation: bob 4s ease-in-out infinite;
}

.icon {
  width: 30px;
  height: 30px;
  border-radius: 9px;
  background: var(--icon-bg, var(--brand));
  color: var(--canvas);
  display: grid;
  place-items: center;
  font-size: 14px;
  flex-shrink: 0;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.label {
  font-weight: 600;
  color: var(--ink);
}

.sub {
  font-size: 11px;
  font-weight: 500;
  color: var(--text-2);
}

@keyframes bob {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .card {
    animation: none;
  }
}
```

- [ ] **Step 3: Rewrite `src/components/HeroSection.tsx`**

```tsx
import type { ReactNode } from "react";
import { Pill } from "./Pill";
import styles from "./HeroSection.module.css";

export interface HeroSectionProps {
  eyebrow?: ReactNode;
  headline: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  trust?: ReactNode;
  illustration?: ReactNode;
}

export function HeroSection({
  eyebrow,
  headline,
  lead,
  actions,
  trust,
  illustration,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          {eyebrow && (
            <div className={styles.eyebrow}>
              {typeof eyebrow === "string" ? <Pill variant="brand">{eyebrow}</Pill> : eyebrow}
            </div>
          )}
          <h1 className={styles.headline}>{headline}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
          {actions && <div className={styles.actions}>{actions}</div>}
          {trust && <div className={styles.trust}>{trust}</div>}
        </div>
        {illustration && (
          <div className={styles.illustration} aria-hidden="true">
            {illustration}
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Rewrite `src/components/HeroSection.module.css`**

```css
.hero {
  background: linear-gradient(180deg, var(--brand-wash) 0%, var(--canvas) 100%);
  padding: var(--space-8) var(--space-5) var(--space-8);
  position: relative;
  overflow: hidden;
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: var(--space-7);
  align-items: center;
}

@media (max-width: 900px) {
  .inner {
    grid-template-columns: 1fr;
  }
}

.copy {
  max-width: 580px;
}

.eyebrow {
  margin-bottom: var(--space-4);
}

.headline {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--t-display);
  line-height: var(--lh-display);
  letter-spacing: var(--ls-display);
  color: var(--ink);
  margin: 0 0 var(--space-4);
}

.headline :global(em) {
  font-style: normal;
  color: var(--brand);
}

.lead {
  font-family: var(--font-body);
  font-size: 18px;
  line-height: var(--lh-base);
  color: var(--text-2);
  margin: 0 0 var(--space-5);
  max-width: 90%;
}

.actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.trust {
  margin-top: var(--space-6);
  font-size: var(--t-small);
  color: var(--text-2);
}

.illustration {
  position: relative;
  min-height: 360px;
}

@media (max-width: 900px) {
  .illustration {
    min-height: 280px;
  }
}
```

- [ ] **Step 5: Verify + commit**

Append Session 12 entry, then:

```bash
git add src/components/HeroSection.tsx src/components/HeroSection.module.css \
        src/components/FloatingCard.tsx src/components/FloatingCard.module.css \
        _planning/SESSION_LOG.md
git commit -m "feat: redesign - HeroSection + FloatingCard"
```

---

## Task 07 — ProductCard + PillarCard + PageCTA

**Files:**
- Create: `src/components/ProductCard.tsx`
- Create: `src/components/ProductCard.module.css`
- Rewrite: `src/components/PillarCard.tsx`
- Rewrite: `src/components/PillarCard.module.css`
- Rewrite: `src/components/PageCTA.tsx`
- Rewrite: `src/components/PageCTA.module.css`

- [ ] **Step 1: Create `src/components/ProductCard.tsx`**

```tsx
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import styles from "./ProductCard.module.css";
import type { IconTone } from "./FloatingCard";

export interface ProductCardProps {
  title: string;
  description: string;
  glyph: ReactNode;
  tone?: IconTone;
  to: string;
  cta?: string;
}

const toneVar: Record<IconTone, string> = {
  orange: "var(--icon-orange)",
  blue: "var(--icon-blue)",
  purple: "var(--icon-purple)",
  green: "var(--icon-green)",
  yellow: "var(--icon-yellow)",
};

export function ProductCard({
  title,
  description,
  glyph,
  tone = "orange",
  to,
  cta = "Learn more",
}: ProductCardProps) {
  const style = { "--icon-bg": toneVar[tone] } as React.CSSProperties;
  return (
    <Link to={to} className={styles.card} style={style}>
      <div className={styles.icon} aria-hidden="true">
        {glyph}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <span className={styles.cta}>
        {cta} <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
```

- [ ] **Step 2: Create `src/components/ProductCard.module.css`**

```css
.card {
  display: flex;
  flex-direction: column;
  background: var(--surface-1);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  padding: var(--space-5);
  transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease;
  color: inherit;
  text-decoration: none;
  height: 100%;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-3);
  background: var(--canvas);
}

@media (prefers-reduced-motion: reduce) {
  .card:hover {
    transform: none;
  }
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 13px;
  background: var(--icon-bg, var(--brand));
  color: var(--canvas);
  display: grid;
  place-items: center;
  font-size: 20px;
  margin-bottom: var(--space-3);
}

.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 17px;
  letter-spacing: var(--ls-h3);
  margin: 0 0 6px;
  color: var(--ink);
}

.desc {
  font-size: 14px;
  line-height: var(--lh-base);
  color: var(--text-2);
  margin: 0 0 var(--space-3);
  flex: 1;
}

.cta {
  font-size: 13px;
  font-weight: 700;
  color: var(--brand);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.card:hover .cta span:last-child {
  transform: translateX(4px);
  transition: transform 200ms ease;
}
```

- [ ] **Step 3: Rewrite `src/components/PillarCard.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./PillarCard.module.css";

export interface PillarCardProps {
  number: string;
  title: string;
  body: ReactNode;
}

export function PillarCard({ number, title, body }: PillarCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.number} aria-hidden="true">
        {number}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </article>
  );
}
```

- [ ] **Step 4: Rewrite `src/components/PillarCard.module.css`**

```css
.card {
  background: var(--canvas);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  padding: var(--space-5);
}

.number {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 22px;
  color: var(--brand);
  margin-bottom: var(--space-3);
}

.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 17px;
  letter-spacing: var(--ls-h3);
  margin: 0 0 8px;
  color: var(--ink);
}

.body {
  font-size: 14px;
  line-height: var(--lh-base);
  color: var(--text-2);
  margin: 0;
}
```

- [ ] **Step 5: Rewrite `src/components/PageCTA.tsx`**

```tsx
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Button } from "./Button";
import { buildWhatsAppLink } from "../lib/whatsapp";
import styles from "./PageCTA.module.css";

export interface PageCTAProps {
  eyebrow?: string;
  headline: ReactNode;
  sub?: string;
  primary?: { label: string; to?: string; href?: string };
  secondary?: { label: string; to?: string; href?: string } | null;
}

export function PageCTA({
  eyebrow,
  headline,
  sub,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary,
}: PageCTAProps) {
  const sec = secondary === null
    ? null
    : secondary ?? { label: "WhatsApp us", href: buildWhatsAppLink() };

  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h2 className={styles.headline}>{headline}</h2>
        {sub && <p className={styles.sub}>{sub}</p>}
        <div className={styles.actions}>
          {primary.to ? (
            <Link to={primary.to}>
              <Button variant="primary">{primary.label}</Button>
            </Link>
          ) : (
            <a href={primary.href} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">{primary.label}</Button>
            </a>
          )}
          {sec && (
            <>
              {sec.to ? (
                <Link to={sec.to} className={styles.secondaryLink}>
                  {sec.label}
                </Link>
              ) : (
                <a
                  href={sec.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  {sec.label}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
```

**Note:** `buildWhatsAppLink()` from `src/lib/whatsapp.ts` already exists — keep using it (don't redefine).

- [ ] **Step 6: Rewrite `src/components/PageCTA.module.css`**

```css
.cta {
  padding: var(--space-7) var(--space-5);
}

.inner {
  max-width: 960px;
  margin: 0 auto;
  background: linear-gradient(135deg, var(--brand) 0%, #FF7E3D 100%);
  color: var(--canvas);
  border-radius: var(--r-xl);
  padding: var(--space-8) var(--space-6);
  text-align: center;
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: var(--t-label);
  letter-spacing: var(--ls-caps);
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: var(--space-3);
}

.headline {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(24px, 3vw, 36px);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-h1);
  margin: 0 0 var(--space-3);
}

.sub {
  font-size: 15px;
  line-height: var(--lh-base);
  opacity: 0.92;
  margin: 0 0 var(--space-5);
}

.actions {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  justify-content: center;
}

/* Override Button primary inside CTA to white-on-orange */
.actions :global(button[class*="primary"]) {
  background: var(--canvas);
  color: var(--brand);
}
.actions :global(button[class*="primary"]):hover {
  background: var(--surface-1);
}

.secondaryLink {
  display: inline-block;
  padding: 12px 18px;
  border-radius: var(--r-pill);
  font-weight: 700;
  font-size: var(--t-small);
  background: rgba(255, 255, 255, 0.15);
  color: var(--canvas);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: background-color 150ms ease;
}
.secondaryLink:hover {
  background: rgba(255, 255, 255, 0.22);
}
```

- [ ] **Step 7: Verify + commit**

Append Session 13. Then:

```bash
git add src/components/ProductCard.tsx src/components/ProductCard.module.css \
        src/components/PillarCard.tsx src/components/PillarCard.module.css \
        src/components/PageCTA.tsx src/components/PageCTA.module.css \
        _planning/SESSION_LOG.md
git diff --staged
git commit -m "feat: redesign - ProductCard + PillarCard + PageCTA"
```

> **CHECKPOINT — Visual review point:** at end of this commit, NavBar + Footer + new primitives + Hero + ProductCard + PageCTA all exist. Open a stub page (or temporarily wire them in `App.tsx`) to verify visuals before committing. Don't proceed to Task 08 until visuals match the spec mockup.

---

## Task 08 — SectionHeader + restyle PersonCard / ValueTile / CaseStudyTeaser

**Files:**
- Rewrite: `src/components/SectionHeader.tsx`
- Rewrite: `src/components/SectionHeader.module.css`
- Restyle: `src/components/PersonCard.module.css` (TSX unchanged)
- Restyle: `src/components/ValueTile.module.css` (TSX unchanged)
- Restyle: `src/components/CaseStudyTeaser.module.css` (TSX may need a one-line change)

- [ ] **Step 1: Rewrite `src/components/SectionHeader.tsx`**

```tsx
import type { ReactNode } from "react";
import { Pill } from "./Pill";
import styles from "./SectionHeader.module.css";

type HeadingLevel = "h1" | "h2" | "h3";

export interface SectionHeaderProps {
  eyebrow?: string;
  heading: ReactNode;
  subtext?: ReactNode;
  as?: HeadingLevel;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  as = "h2",
  align = "left",
}: SectionHeaderProps) {
  const HeadingTag = as as keyof JSX.IntrinsicElements;
  return (
    <header className={[styles.header, styles[align]].join(" ")}>
      {eyebrow && (
        <div className={styles.eyebrow}>
          <Pill variant="brand">{eyebrow}</Pill>
        </div>
      )}
      <HeadingTag className={styles.heading}>{heading}</HeadingTag>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
    </header>
  );
}
```

- [ ] **Step 2: Rewrite `src/components/SectionHeader.module.css`**

```css
.header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
}

.left {
  align-items: flex-start;
  text-align: left;
}

.center {
  align-items: center;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
}

.heading {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--t-h1);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-h1);
  color: var(--ink);
  margin: 0;
}

.heading :global(em) {
  font-style: normal;
  color: var(--brand);
}

.subtext {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: var(--lh-base);
  color: var(--text-2);
  margin: 0;
  max-width: 640px;
}
```

- [ ] **Step 3: Restyle `src/components/PersonCard.module.css`**

The TSX is unchanged (initials badge + name + region eyebrow + optional note + optional LinkedIn link). Overwrite the CSS:

```css
.card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4);
  background: var(--canvas);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card.compact {
  padding: var(--space-3);
  gap: var(--space-3);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
}

@media (prefers-reduced-motion: reduce) {
  .card:hover {
    transform: none;
  }
}

.badge {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--brand);
  color: var(--canvas);
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 20px;
  flex-shrink: 0;
}

.compact .badge {
  width: 44px;
  height: 44px;
  font-size: 16px;
  border-radius: 13px;
}

.body {
  flex: 1;
  min-width: 0;
}

.region {
  font-family: var(--font-mono);
  font-size: var(--t-label);
  letter-spacing: var(--ls-caps);
  text-transform: uppercase;
  color: var(--brand);
  margin-bottom: 2px;
}

.name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 16px;
  color: var(--ink);
  margin: 0 0 2px;
}

.role {
  font-size: 13px;
  color: var(--text-2);
  margin: 0;
}

.note {
  display: block;
  margin-top: 6px;
  font-size: 12px;
  color: var(--text-2);
  font-style: italic;
}

.linkedin {
  display: inline-block;
  margin-top: 6px;
  font-size: 12px;
  font-weight: 700;
  color: var(--brand);
}
.linkedin:hover {
  color: var(--brand-dark);
}
```

If the existing `PersonCard.tsx` uses a different class name set (e.g. it might say `personCard` or `initials` instead of `badge`), open the file and adjust the CSS class names to match — do NOT rewrite the TSX. The mapping above is the target shape; align names to whatever the current TSX uses.

- [ ] **Step 4: Restyle `src/components/ValueTile.module.css`**

```css
.tile {
  position: relative;
  background: var(--canvas);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  padding: var(--space-5);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.tile:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-3);
}

@media (prefers-reduced-motion: reduce) {
  .tile:hover {
    transform: none;
  }
}

.glyph {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 24px;
  height: 24px;
  color: var(--brand);
  font-size: 18px;
  transition: transform 300ms ease, color 300ms ease;
}

.tile:hover .glyph {
  transform: rotate(45deg);
  color: var(--brand-dark);
}

.label {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: var(--ls-h3);
  color: var(--ink);
  margin: 0 0 var(--space-2);
}

.body {
  font-size: 14px;
  line-height: var(--lh-base);
  color: var(--text-2);
  margin: 0;
}
```

If existing TSX uses gold/teal alternation (a `tone` prop), drop that prop's effect from the CSS — single orange treatment for all tiles. If the TSX renders different class names per tone, leave the TSX but make the CSS rules collapse to a single style.

- [ ] **Step 5: Restyle `src/components/CaseStudyTeaser.module.css`**

```css
.card {
  display: flex;
  flex-direction: column;
  background: var(--canvas);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  padding: var(--space-5);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-3);
}

@media (prefers-reduced-motion: reduce) {
  .card:hover {
    transform: none;
  }
}

.eyebrows {
  display: flex;
  gap: 6px;
  margin-bottom: var(--space-3);
  flex-wrap: wrap;
}

.industry,
.region {
  display: inline-flex;
  padding: 3px 10px;
  border-radius: var(--r-pill);
  font-size: var(--t-label);
  font-weight: 600;
  letter-spacing: var(--ls-label);
}

.industry {
  background: var(--brand-tint);
  color: var(--brand);
}

.region {
  background: var(--surface-2);
  color: var(--ink-muted);
}

.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: var(--ls-h3);
  color: var(--ink);
  margin: 0 0 var(--space-2);
}

.summary {
  font-size: 14px;
  line-height: var(--lh-base);
  color: var(--text-2);
  margin: 0 0 var(--space-3);
  flex: 1;
}

.outcome {
  font-family: var(--font-mono);
  font-size: var(--t-label);
  letter-spacing: var(--ls-caps);
  text-transform: uppercase;
  color: var(--brand);
  font-weight: 600;
  border-top: 1px solid var(--surface-2);
  padding-top: var(--space-3);
  margin-bottom: var(--space-3);
}

.readMore {
  font-size: 13px;
  font-weight: 700;
  color: var(--brand);
  align-self: flex-start;
}
.readMore:hover {
  color: var(--brand-dark);
}
```

- [ ] **Step 6: Verify + commit**

Append Session 14 to `SESSION_LOG.md`. Then:

```bash
git add src/components/SectionHeader.tsx src/components/SectionHeader.module.css \
        src/components/PersonCard.module.css \
        src/components/ValueTile.module.css \
        src/components/CaseStudyTeaser.module.css \
        _planning/SESSION_LOG.md
git diff --staged
git commit -m "feat: redesign - SectionHeader + restyle PersonCard/ValueTile/CaseStudyTeaser"
```

> **CHECKPOINT — Component library complete.** Before Task 09, all 13 components either rebuilt or restyled. Open the dev server and confirm the design-proof page (still living, will be deleted in Task 13) shows the old broken state — that's fine. Pages will start working in Task 09.

---

## Task 09 — Home page repaint

**Files:**
- Rewrite: `src/pages/Home.tsx`
- Rewrite: `src/pages/Home.module.css`
- Delete: `src/components/SpotlightCard.tsx` + `.module.css` (replaced by ProductCard)

- [ ] **Step 1: Read the source content**

```bash
# Open in your editor; do not paraphrase:
_planning/content/HOME.md
```

Confirm the 9 sections you'll consume: Hero / Services spotlight (5) / Enterprise AI spotlight (4) / Platforms spotlight (4) / Industries (4) / Why Techknomatic (4) / Trust band / Case studies (2) / CTA. Copy is final — do not invent.

- [ ] **Step 2: Delete `SpotlightCard`**

```bash
rm src/components/SpotlightCard.tsx src/components/SpotlightCard.module.css
```

- [ ] **Step 3: Rewrite `src/pages/Home.tsx`**

```tsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { FloatingCard } from "../components/FloatingCard";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { PillarCard } from "../components/PillarCard";
import { CaseStudyTeaser } from "../components/CaseStudyTeaser";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import styles from "./Home.module.css";

const SERVICES = [
  { slug: "business-analytics", title: "Business Analytics", desc: "Qlik & Power BI dashboards your CFO actually opens.", glyph: "⚡", tone: "orange" as const },
  { slug: "data-engineering", title: "Data Engineering", desc: "Pipelines, warehouses, and the plumbing that doesn't break.", glyph: "◆", tone: "blue" as const },
  { slug: "data-ai-strategy", title: "AI & Data Strategy", desc: "Where to actually use AI — and where not to.", glyph: "▲", tone: "purple" as const },
  { slug: "geospatial-analytics", title: "Geospatial", desc: "ESRI Silver Partner. Maps that drive decisions.", glyph: "●", tone: "green" as const },
  { slug: "managed-services", title: "Managed Services", desc: "24/7 ops support for your data stack.", glyph: "★", tone: "yellow" as const },
];

const AI_PRODUCTS = [
  { slug: "assist-iq", title: "AssistIQ", desc: "AI copilot for ops teams.", glyph: "⚡", tone: "orange" as const },
  { slug: "ticket-iq", title: "TicketIQ", desc: "ITSM ticket triage AI.", glyph: "▲", tone: "purple" as const },
  { slug: "callops-ai", title: "CallOps AI", desc: "Call-center automation.", glyph: "◆", tone: "blue" as const },
  { slug: "cxo-nexus", title: "CXO Nexus", desc: "Executive intelligence.", glyph: "●", tone: "green" as const },
];

const INDUSTRIES = [
  { slug: "insurance", title: "Insurance / BFSI", desc: "Regulator-grade reporting + AI ops.", glyph: "◆", tone: "blue" as const },
  { slug: "oil-and-gas", title: "Oil & Gas", desc: "Field-to-boardroom analytics.", glyph: "▲", tone: "orange" as const },
  { slug: "tech-it-services", title: "Tech / IT Services", desc: "ITSM, ticketing, MSP enablement.", glyph: "●", tone: "purple" as const },
  { slug: "manufacturing", title: "Manufacturing", desc: "Shopfloor → executive intelligence.", glyph: "★", tone: "green" as const },
];

const PILLARS = [
  { number: "01", title: "Gulf-local depth", body: "UAE-resident leadership. Sunday-Thursday work week. Arabic on demand." },
  { number: "02", title: "Proven methodology", body: "Eleven years. 120+ enterprise clients. Repeatable delivery." },
  { number: "03", title: "Less turnaround", body: "From RFP to dashboard in weeks, not quarters." },
  { number: "04", title: "Real partnerships", body: "ESRI Silver. Microsoft. Qlik. Compliance audited." },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Techknomatic — Data, AI, and operations for Gulf enterprise</title>
        <meta
          name="description"
          content="Techknomatic builds the data pipelines, AI assistants, and managed operations that keep Gulf enterprises running. DIFC, Dubai."
        />
      </Helmet>

      <HeroSection
        eyebrow="⚡ New · AI agents for enterprise ops"
        headline={
          <>
            Connect your data, AI,
            <br />
            and <em>operations.</em>
          </>
        }
        lead="Techknomatic builds the data pipelines, AI assistants, and managed operations that keep Gulf enterprises running — from DIFC banks to regional insurers."
        actions={
          <>
            <Link to="/contact">
              <Button variant="primary">Start a conversation</Button>
            </Link>
            <Link to="/services">
              <Button variant="link">See our work</Button>
            </Link>
          </>
        }
        trust={
          <span>
            Trusted by 120+ enterprises across the Gulf{" "}
            <span style={{ color: "var(--text-2)" }}>
              {/* CONTENT MISSING: numeric client count */}
            </span>
          </span>
        }
        illustration={
          <>
            <FloatingCard label="AssistIQ" sub="AI copilot" glyph="⚡" tone="orange" position={{ top: 0, left: 30 }} delayMs={0} />
            <FloatingCard label="DataPulse" sub="Pipelines" glyph="◆" tone="blue" position={{ top: 70, right: 0 }} delayMs={400} />
            <FloatingCard label="Qlik" sub="Analytics" glyph="●" tone="green" position={{ top: 150, left: 0 }} delayMs={800} />
            <FloatingCard label="TicketIQ" sub="ITSM AI" glyph="▲" tone="purple" position={{ top: 230, right: 30 }} delayMs={1200} />
            <FloatingCard label="ESRI" sub="Geospatial" glyph="★" tone="yellow" position={{ top: 300, left: 80 }} delayMs={1600} />
          </>
        }
      />

      <section className={styles.trustStrip}>
        <div className={styles.trustInner}>
          <span className={styles.trustLabel}>Trusted across the Gulf —</span>
          <span className={styles.trustItem}>DIFC banks</span>
          <span className={styles.trustItem}>Regional insurers</span>
          <span className={styles.trustItem}>Oil &amp; Gas</span>
          <span className={styles.trustItem}>Government</span>
          <span className={styles.trustItem}>Manufacturers</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Practice"
            heading="Everything you need to run on data."
            subtext="Five practices. One partner. Built for Gulf enterprise."
          />
          <div className={styles.gridFive}>
            {SERVICES.map((s) => (
              <Reveal key={s.slug}>
                <ProductCard
                  title={s.title}
                  description={s.desc}
                  glyph={s.glyph}
                  tone={s.tone}
                  to={`/services/${s.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Enterprise AI"
            heading="AI products, ready for Sunday morning."
            subtext="Four products. Production today."
          />
          <div className={styles.gridFour}>
            {AI_PRODUCTS.map((p) => (
              <Reveal key={p.slug}>
                <ProductCard
                  title={p.title}
                  description={p.desc}
                  glyph={p.glyph}
                  tone={p.tone}
                  to={`/enterprise-ai/${p.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Industries"
            heading="Built for regulated Gulf sectors."
          />
          <div className={styles.gridFour}>
            {INDUSTRIES.map((i) => (
              <Reveal key={i.slug}>
                <ProductCard
                  title={i.title}
                  description={i.desc}
                  glyph={i.glyph}
                  tone={i.tone}
                  to={`/industries/${i.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Why Techknomatic"
            heading="Four reasons CIOs in DIFC pick us — and renew."
          />
          <div className={styles.gridFour}>
            {PILLARS.map((p) => (
              <Reveal key={p.number}>
                <PillarCard number={p.number} title={p.title} body={p.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Customer stories" heading="Real outcomes. Anonymised." />
          <div className={styles.gridTwo}>
            <Reveal>
              <CaseStudyTeaser
                industry="BFSI"
                region="DIFC, UAE"
                title="From spreadsheet hell to executive dashboard in 6 weeks"
                summary="Mid-sized DIFC bank needed regulator-grade reporting fast. We rebuilt their data layer + delivered a Qlik board the CEO opens daily."
                outcome="-40% reporting cycle"
                to="/about/customer-stories"
              />
            </Reveal>
            <Reveal>
              <CaseStudyTeaser
                industry="Geospatial"
                region="Saudi Arabia"
                title="ESRI deployment for a national infrastructure programme"
                summary="Multi-year geospatial platform standing up monitoring + decision support for a national pipeline operator."
                outcome="CONTENT MISSING: outcome metric"
                to="/about/customer-stories"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Let's talk"
        headline={
          <>
            Let's build the back-office
            <br />
            that runs the front-office.
          </>
        }
        sub="Free 30-min scoping call. Sunday-Thursday, GST."
        primary={{ label: "Start a conversation", to: "/contact" }}
      />
    </>
  );
}
```

**Notes on the data:**
- The `SERVICES`, `AI_PRODUCTS`, `INDUSTRIES` arrays inside this file are a transitional inline shape. Long-term they should be moved into `src/data/*` registries (already partially done for services). For this commit, inline is fine; consolidation can be a follow-up.
- All copy must match `_planning/content/HOME.md`. If something here drifts, the content file wins — adjust the array values to match.
- Two `CONTENT MISSING` placeholders are intentional (numeric client count in trust line, outcome metric for the second case study).

- [ ] **Step 4: Rewrite `src/pages/Home.module.css`**

```css
.section {
  padding: var(--space-8) var(--space-5);
}

.sectionWash {
  padding: var(--space-8) var(--space-5);
  background: var(--brand-wash);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.gridFive {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-3);
}

.gridFour {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.gridTwo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

@media (max-width: 1024px) {
  .gridFive {
    grid-template-columns: repeat(3, 1fr);
  }
  .gridFour {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .gridFive,
  .gridFour,
  .gridTwo {
    grid-template-columns: 1fr;
  }
}

.trustStrip {
  background: var(--surface-1);
  border-top: 1px solid var(--surface-2);
  border-bottom: 1px solid var(--surface-2);
  padding: var(--space-4) var(--space-5);
}

.trustInner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  gap: var(--space-6);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
}

.trustLabel {
  color: var(--text-2);
  font-size: 12px;
  letter-spacing: var(--ls-label);
  text-transform: uppercase;
}

.trustItem {
  font-weight: 700;
  color: var(--ink-muted);
}
```

- [ ] **Step 5: Update `src/App.tsx`** if needed

If `App.tsx` currently imports `Home` as a default export or named export differently from `export default function Home`, adjust the import. If it currently imports `SpotlightCard` directly (it shouldn't), remove that import.

Quickly grep:

```bash
grep -r "SpotlightCard" src/ 2>/dev/null
```

If matches, remove those imports/usages — they'll have come from old Home or from a stale page.

- [ ] **Step 6: Run `tsc` and dev-server smoke**

```bash
npx tsc --noEmit
```

Expected: zero errors **for Home + Services-related files**. ServiceDetail/ServicesIndex/Contact/About will still fail — addressed in Tasks 10-12. If Home itself errors (missing import, type mismatch), fix before committing.

```bash
npm run dev
```

Open `http://localhost:5173/`. Verify visually:
- NavBar appears light with logo + nav.
- Hero shows H1 with orange `<em>` word, eyebrow pill, primary CTA, ghost-with-arrow secondary, 5 floating cards on the right with subtle bob animation (or static if reduced-motion).
- Trust strip with 5 segments.
- 5-card services grid.
- Enterprise AI section on `--brand-wash` background.
- Industries grid (4 cards).
- 4 pillars.
- 2 case-study cards.
- Orange gradient CTA banner.
- Dark footer.

If the hero illustration cards overlap badly or the layout looks broken on viewport widths, adjust the `position` values in the FloatingCard JSX. Acceptable for the first cut to need 1-2 iterations.

Stop dev server.

- [ ] **Step 7: Append Session 15 entry, commit**

Append a Session 15 entry to `_planning/SESSION_LOG.md` following the established format. Then:

```bash
git add src/pages/Home.tsx src/pages/Home.module.css \
        _planning/SESSION_LOG.md
git rm src/components/SpotlightCard.tsx src/components/SpotlightCard.module.css
git diff --staged
git commit -m "feat: redesign - home page (repainted)"
```

> **CHECKPOINT — Visual review point.** Get explicit sign-off on the home page in the browser before continuing. The remaining 4 pages all follow the same shape, so locking the home aesthetic prevents wasted rework.

---

## Task 10 — Services index + ServiceDetail rebuild

**Files:**
- Rewrite: `src/components/CapabilityCard.tsx` + `.module.css`
- Rewrite: `src/components/UseCaseCard.tsx` + `.module.css`
- Rewrite: `src/components/ProcessTimeline.tsx` + `.module.css`
- Rewrite: `src/components/ServiceDetailPage.tsx` + `.module.css`
- Rewrite: `src/pages/ServicesIndex.tsx` + `.module.css`
- Modify (light): `src/pages/ServiceDetail.tsx` (only if its imports break)

- [ ] **Step 1: Rewrite `src/components/CapabilityCard.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./CapabilityCard.module.css";

export interface CapabilityCardProps {
  title: string;
  outcome: string;
  bullets: string[];
  accent?: "orange" | "blue" | "purple" | "green" | "yellow";
}

export function CapabilityCard({
  title,
  outcome,
  bullets,
  accent = "orange",
}: CapabilityCardProps) {
  return (
    <article className={[styles.card, styles[accent]].join(" ")}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.outcome}>{outcome}</p>
      <ul className={styles.bullets}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
```

- [ ] **Step 2: Rewrite `src/components/CapabilityCard.module.css`**

```css
.card {
  background: var(--canvas);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  padding: var(--space-5);
  border-top: 3px solid var(--accent, var(--brand));
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-3);
}

@media (prefers-reduced-motion: reduce) {
  .card:hover {
    transform: none;
  }
}

.orange  { --accent: var(--icon-orange); }
.blue    { --accent: var(--icon-blue); }
.purple  { --accent: var(--icon-purple); }
.green   { --accent: var(--icon-green); }
.yellow  { --accent: var(--icon-yellow); }

.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: var(--ls-h3);
  color: var(--ink);
  margin: 0 0 var(--space-2);
}

.outcome {
  font-size: 14px;
  line-height: var(--lh-base);
  color: var(--text-2);
  margin: 0 0 var(--space-3);
}

.bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.bullets li {
  position: relative;
  padding-inline-start: 18px;
  font-size: 13px;
  line-height: var(--lh-base);
  color: var(--ink-muted);
}

.bullets li::before {
  content: "→";
  position: absolute;
  inset-inline-start: 0;
  color: var(--accent, var(--brand));
  font-weight: 700;
}
```

- [ ] **Step 3: Rewrite `src/components/UseCaseCard.tsx`**

```tsx
import type { ReactNode } from "react";
import styles from "./UseCaseCard.module.css";

export interface UseCaseCardProps {
  title: string;
  subtitle?: string;
  crux: ReactNode;
  techStack?: string[];
  industries?: string[];
  outcome?: string;
}

export function UseCaseCard({
  title,
  subtitle,
  crux,
  techStack,
  industries,
  outcome,
}: UseCaseCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <p className={styles.crux}>{crux}</p>
      {(techStack?.length || industries?.length) && (
        <div className={styles.meta}>
          {techStack?.length ? (
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Stack</span>
              <span>{techStack.join(" · ")}</span>
            </div>
          ) : null}
          {industries?.length ? (
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Industries</span>
              <span>{industries.join(" · ")}</span>
            </div>
          ) : null}
        </div>
      )}
      {outcome && <div className={styles.outcome}>{outcome}</div>}
    </article>
  );
}
```

- [ ] **Step 4: Rewrite `src/components/UseCaseCard.module.css`**

```css
.card {
  background: var(--surface-1);
  border-inline-start: 2px solid var(--brand);
  border-radius: var(--r-lg);
  padding: var(--space-5);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-2);
  background: var(--canvas);
}

@media (prefers-reduced-motion: reduce) {
  .card:hover {
    transform: none;
  }
}

.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: var(--ls-h3);
  color: var(--ink);
  margin: 0 0 4px;
}

.subtitle {
  font-size: 13px;
  color: var(--text-2);
  margin: 0 0 var(--space-3);
}

.crux {
  font-size: 14px;
  line-height: var(--lh-base);
  color: var(--ink-muted);
  margin: 0 0 var(--space-3);
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--space-3) 0;
  border-top: 1px solid var(--surface-2);
}

.metaRow {
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: var(--ink-muted);
}

.metaLabel {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: var(--ls-caps);
  color: var(--text-2);
  min-width: 80px;
}

.outcome {
  margin-top: var(--space-3);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: var(--ls-caps);
  font-size: var(--t-label);
  color: var(--brand);
  font-weight: 600;
}
```

- [ ] **Step 5: Rewrite `src/components/ProcessTimeline.tsx`**

```tsx
import styles from "./ProcessTimeline.module.css";

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className={styles.timeline}>
      {steps.map((s, idx) => (
        <li key={s.number} className={styles.step}>
          <div className={styles.badge} aria-hidden="true">
            {s.number}
          </div>
          <div className={styles.body}>
            <h4 className={styles.title}>{s.title}</h4>
            <p className={styles.text}>{s.body}</p>
          </div>
          {idx < steps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
```

- [ ] **Step 6: Rewrite `src/components/ProcessTimeline.module.css`**

```css
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

@media (min-width: 900px) {
  .timeline {
    flex-direction: row;
    gap: 0;
  }
}

.step {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-inline-end: var(--space-4);
}

.badge {
  width: 44px;
  height: 44px;
  border-radius: var(--r-pill);
  background: var(--brand-tint);
  color: var(--brand);
  display: grid;
  place-items: center;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 16px;
}

.body {
  max-width: 280px;
}

.title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 15px;
  letter-spacing: var(--ls-h3);
  color: var(--ink);
  margin: 0 0 4px;
}

.text {
  font-size: 13px;
  line-height: var(--lh-base);
  color: var(--text-2);
  margin: 0;
}

.connector {
  display: none;
}

@media (min-width: 900px) {
  .connector {
    display: block;
    position: absolute;
    top: 22px;
    inset-inline-start: 44px;
    height: 1px;
    background: linear-gradient(90deg, var(--brand) 0%, var(--surface-2) 100%);
    flex: 1;
    right: 0;
  }
}
```

- [ ] **Step 7: Rewrite `src/components/ServiceDetailPage.tsx`**

This is the generic 8-section template. Look up the existing version's prop shape in `src/data/service-detail.ts` — the data file is the contract; the component renders it. Rewrite to match:

```tsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { HeroSection } from "./HeroSection";
import { FloatingCard, type IconTone } from "./FloatingCard";
import { SectionHeader } from "./SectionHeader";
import { CapabilityCard } from "./CapabilityCard";
import { UseCaseCard } from "./UseCaseCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { PageCTA } from "./PageCTA";
import { Pill } from "./Pill";
import { Reveal } from "./Reveal";
import type { ServiceDetail } from "../data/service-detail";
import styles from "./ServiceDetailPage.module.css";

export function ServiceDetailPage({ data }: { data: ServiceDetail }) {
  const tone: IconTone = data.tone ?? "orange";

  return (
    <>
      <Helmet>
        <title>{data.metaTitle ?? `${data.title} — Techknomatic`}</title>
        <meta name="description" content={data.metaDescription ?? data.lead} />
      </Helmet>

      <HeroSection
        eyebrow={data.eyebrow ?? "Service"}
        headline={
          <>
            {data.heroHeadlinePrefix}{" "}
            <em>{data.heroHeadlineAccent}</em>
            {data.heroHeadlineSuffix && <> {data.heroHeadlineSuffix}</>}
          </>
        }
        lead={data.lead}
        actions={
          <>
            <Link to={`/contact?service=${data.slug}`}>
              <Button variant="primary">Start a conversation</Button>
            </Link>
            <Link to="/services">
              <Button variant="link">All services</Button>
            </Link>
          </>
        }
        trust={data.trustLine}
        illustration={
          <>
            {(data.heroFloatingCards ?? []).map((c, idx) => (
              <FloatingCard
                key={c.label}
                label={c.label}
                sub={c.sub}
                glyph={c.glyph}
                tone={c.tone ?? "orange"}
                position={c.position}
                delayMs={idx * 400}
              />
            ))}
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Problem" heading={data.problem.title} />
          <div className={styles.twoCol}>
            <p>{data.problem.body}</p>
            {data.problem.aside && <aside>{data.problem.aside}</aside>}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Capabilities"
            heading={data.capabilities.title}
            subtext={data.capabilities.subtext}
          />
          <div className={styles.gridThree}>
            {data.capabilities.items.map((c) => (
              <Reveal key={c.title}>
                <CapabilityCard
                  title={c.title}
                  outcome={c.outcome}
                  bullets={c.bullets}
                  accent={c.accent ?? tone}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {data.industries && data.industries.length > 0 && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <SectionHeader eyebrow="Industries we serve" heading="Where this lands." />
            <div className={styles.industryRow}>
              {data.industries.map((i) => (
                <Pill key={i} variant="neutral">
                  {i}
                </Pill>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.architecture && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <SectionHeader eyebrow="Architecture" heading={data.architecture.title} />
            <div className={styles.archSlot}>
              {data.architecture.diagramSrc ? (
                <img src={data.architecture.diagramSrc} alt={data.architecture.diagramAlt ?? ""} />
              ) : (
                <div className={styles.archPlaceholder}>
                  {/* CONTENT MISSING: architecture diagram */}
                  Architecture diagram pending.
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {data.integrations && data.integrations.length > 0 && (
        <section className={styles.sectionWash}>
          <div className={styles.inner}>
            <SectionHeader eyebrow="Integrations" heading="Plays well with your stack." />
            <div className={styles.integrationsRow}>
              {data.integrations.map((i) => (
                <span key={i} className={styles.integration}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Use cases"
            heading={data.useCases.title ?? "Real shipments."}
          />
          <div className={styles.gridTwo}>
            {data.useCases.items.map((u) => (
              <Reveal key={u.title}>
                <UseCaseCard
                  title={u.title}
                  subtitle={u.subtitle}
                  crux={u.crux}
                  techStack={u.techStack}
                  industries={u.industries}
                  outcome={u.outcome}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {data.process && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <SectionHeader eyebrow="How we work" heading={data.process.title ?? "Our delivery."} />
            <ProcessTimeline steps={data.process.steps} />
          </div>
        </section>
      )}

      <PageCTA
        eyebrow="Let's talk"
        headline={data.cta?.headline ?? "Ready to start?"}
        sub={data.cta?.sub}
        primary={{
          label: data.cta?.primaryLabel ?? "Start a conversation",
          to: `/contact?service=${data.slug}`,
        }}
      />
    </>
  );
}
```

**Important:** the `ServiceDetail` type in `src/data/service-detail.ts` must support all the fields above (`tone`, `heroFloatingCards`, `eyebrow`, etc.). Read that file first; if the type is too narrow, widen it. Existing data files (`src/data/services/*.ts`) may need a small update to provide the new fields (`heroFloatingCards`, `tone`). If a field is missing in a data file, fall back to safe defaults (use `??` everywhere).

If updating `src/data/service-detail.ts` is non-trivial, batch all data-file changes here.

- [ ] **Step 8: Rewrite `src/components/ServiceDetailPage.module.css`**

```css
.section {
  padding: var(--space-8) var(--space-5);
}

.sectionWash {
  padding: var(--space-8) var(--space-5);
  background: var(--brand-wash);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.twoCol {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-6);
  font-size: 16px;
  line-height: var(--lh-base);
  color: var(--ink-muted);
}

.twoCol aside {
  background: var(--surface-1);
  border-radius: var(--r-lg);
  padding: var(--space-5);
  font-size: 14px;
  color: var(--text-2);
}

@media (max-width: 768px) {
  .twoCol {
    grid-template-columns: 1fr;
  }
}

.gridThree {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.gridTwo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

@media (max-width: 1024px) {
  .gridThree {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .gridThree,
  .gridTwo {
    grid-template-columns: 1fr;
  }
}

.industryRow {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.archSlot {
  background: var(--surface-1);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  padding: var(--space-5);
  display: grid;
  place-items: center;
  min-height: 320px;
}

.archSlot img {
  max-width: 100%;
  height: auto;
}

.archPlaceholder {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: var(--ls-caps);
  text-transform: uppercase;
  color: var(--text-2);
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent 12px,
    var(--surface-2) 12px,
    var(--surface-2) 13px
  );
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border-radius: var(--r-md);
}

.integrationsRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.integration {
  background: var(--canvas);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-md);
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-muted);
}
```

- [ ] **Step 9: Rewrite `src/pages/ServicesIndex.tsx`**

```tsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { FloatingCard } from "../components/FloatingCard";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { PillarCard } from "../components/PillarCard";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import styles from "./ServicesIndex.module.css";

const SERVICES = [
  { slug: "business-analytics", title: "Business Analytics", desc: "Qlik & Power BI dashboards your CFO actually opens.", glyph: "⚡", tone: "orange" as const },
  { slug: "data-engineering", title: "Data Engineering", desc: "Pipelines, warehouses, and the plumbing that doesn't break.", glyph: "◆", tone: "blue" as const },
  { slug: "data-ai-strategy", title: "AI & Data Strategy", desc: "Where to actually use AI — and where not to.", glyph: "▲", tone: "purple" as const },
  { slug: "geospatial-analytics", title: "Geospatial", desc: "ESRI Silver Partner. Maps that drive decisions.", glyph: "●", tone: "green" as const },
  { slug: "managed-services", title: "Managed Services", desc: "24/7 ops support for your data stack.", glyph: "★", tone: "yellow" as const },
];

const PROCESS = [
  { number: "01", title: "Discover", body: "Two-week paid scoping. Output: a real plan, not a slide." },
  { number: "02", title: "Design", body: "Architecture + data model + delivery roadmap." },
  { number: "03", title: "Deliver", body: "Sprints with weekly demos. No surprises." },
  { number: "04", title: "Operate", body: "Managed handover or full ops embed." },
  { number: "05", title: "Iterate", body: "Quarterly reviews. Continuous improvement." },
];

const PILLARS = [
  { number: "01", title: "Gulf-native delivery", body: "UAE-resident leads. GST timezone. Arabic available." },
  { number: "02", title: "Partner-strong", body: "Qlik. Microsoft. ESRI Silver. Real partnerships, not logos." },
  { number: "03", title: "Outcomes, not output", body: "Every engagement scoped to a measurable outcome." },
];

export default function ServicesIndex() {
  return (
    <>
      <Helmet>
        <title>Services — Techknomatic</title>
        <meta
          name="description"
          content="Five practices for Gulf enterprise: Business Analytics, Data Engineering, AI & Data Strategy, Geospatial, Managed Services."
        />
      </Helmet>

      <HeroSection
        eyebrow="Services"
        headline={
          <>
            Five practices.
            <br />
            <em>One partner.</em>
          </>
        }
        lead="From dashboards to data engineering to AI to geospatial to managed operations. Built for Gulf enterprise, run by people who ship."
        actions={
          <Link to="/contact">
            <Button variant="primary">Start a conversation</Button>
          </Link>
        }
        illustration={
          <>
            {SERVICES.map((s, idx) => (
              <FloatingCard
                key={s.slug}
                label={s.title}
                glyph={s.glyph}
                tone={s.tone}
                position={{
                  top: 20 + idx * 60,
                  left: idx % 2 === 0 ? 0 : "auto",
                  right: idx % 2 === 1 ? 0 : "auto",
                }}
                delayMs={idx * 300}
              />
            ))}
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Practice" heading="What we do." />
          <div className={styles.grid}>
            {SERVICES.map((s) => (
              <Reveal key={s.slug}>
                <ProductCard
                  title={s.title}
                  description={s.desc}
                  glyph={s.glyph}
                  tone={s.tone}
                  to={`/services/${s.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Delivery framework" heading="Five steps. Every engagement." />
          <ProcessTimeline steps={PROCESS} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Why our practice" heading="Three reasons clients renew." />
          <div className={styles.pillarGrid}>
            {PILLARS.map((p) => (
              <PillarCard key={p.number} number={p.number} title={p.title} body={p.body} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Let's scope it"
        headline="Start with a 30-minute scoping call."
        sub="No slides. Sunday-Thursday, GST."
      />
    </>
  );
}
```

- [ ] **Step 10: Rewrite `src/pages/ServicesIndex.module.css`**

```css
.section {
  padding: var(--space-8) var(--space-5);
}
.sectionWash {
  padding: var(--space-8) var(--space-5);
  background: var(--brand-wash);
}
.inner {
  max-width: var(--max-width);
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-4);
}
.pillarGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
  .pillarGrid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 11: Check `src/pages/ServiceDetail.tsx`**

Open and confirm it just looks up the slug in `SERVICE_REGISTRY` and renders `<ServiceDetailPage data={...} />`. If it does, no changes needed. If it has any direct visual code (buttons, headers etc) — strip those, it should be a pure pass-through.

- [ ] **Step 12: Run `tsc` + smoke 6 routes**

```bash
npx tsc --noEmit
```

Expected: zero errors on services-related files. Contact/About may still error.

```bash
npm run dev
```

Open and verify 200:
- `http://localhost:5173/services`
- `http://localhost:5173/services/business-analytics`
- `http://localhost:5173/services/data-engineering`
- `http://localhost:5173/services/data-ai-strategy`
- `http://localhost:5173/services/geospatial-analytics`
- `http://localhost:5173/services/managed-services`

All six should render in the new design. Industry pills, capability cards, timeline, use cases — all light + orange.

- [ ] **Step 13: Append Session 16 entry, commit**

```bash
git add src/components/CapabilityCard.tsx src/components/CapabilityCard.module.css \
        src/components/UseCaseCard.tsx src/components/UseCaseCard.module.css \
        src/components/ProcessTimeline.tsx src/components/ProcessTimeline.module.css \
        src/components/ServiceDetailPage.tsx src/components/ServiceDetailPage.module.css \
        src/pages/ServicesIndex.tsx src/pages/ServicesIndex.module.css \
        src/pages/ServiceDetail.tsx \
        src/data/service-detail.ts src/data/services/ \
        _planning/SESSION_LOG.md
git diff --staged
git commit -m "feat: redesign - services index + 5 service details"
```

If `src/data/service-detail.ts` or any of the `src/data/services/*.ts` needed schema additions, include them in this commit. Otherwise drop them from the `git add`.

---

## Task 11 — Contact page restyle

**Files:**
- Modify: `src/pages/Contact.tsx` (mostly imports + small JSX changes)
- Rewrite: `src/pages/Contact.module.css`
- Modify: `src/components/ContactForm.tsx` (form behavior unchanged — only swap inputs to new styles)
- Rewrite: `src/components/ContactForm.module.css`

- [ ] **Step 1: Rewrite `src/pages/Contact.tsx`**

Open the existing `Contact.tsx` to lift the section structure (6 sections: hero, form+method tiles, Dubai office card, regional contacts, careers band, CTA). Rewrite to use new components:

```tsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { SectionHeader } from "../components/SectionHeader";
import { Pill } from "../components/Pill";
import { Card } from "../components/Card";
import { PageCTA } from "../components/PageCTA";
import { ContactForm } from "../components/ContactForm";
import { PersonCard } from "../components/PersonCard";
import { CONTACT } from "../data/contact";
import { buildWhatsAppLink } from "../lib/whatsapp";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — Techknomatic</title>
        <meta name="description" content="Talk to Techknomatic. UAE-based leadership. WhatsApp first-class. Sun–Thu GST." />
      </Helmet>

      <HeroSection
        eyebrow="Contact"
        headline={
          <>
            Let's <em>build</em> together.
          </>
        }
        lead="Free 30-minute scoping call. Sunday-Thursday, GST. WhatsApp is the fastest way to reach us."
        actions={
          <>
            <a href="#form">
              <Button variant="primary">Send a message</Button>
            </a>
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="link">WhatsApp us</Button>
            </a>
          </>
        }
      />

      <section className={styles.section} id="form">
        <div className={styles.formGrid}>
          <div>
            <SectionHeader eyebrow="Send a message" heading="Tell us what you're working on." />
            <ContactForm />
          </div>
          <aside className={styles.methods}>
            <Card variant="surface" className={styles.methodCard}>
              <div className={styles.methodLabel}>Phone</div>
              <a className={styles.methodValue} href={CONTACT.phone ? `tel:${CONTACT.phone}` : undefined}>
                {CONTACT.phone ?? "CONTENT MISSING: UAE phone"}
              </a>
            </Card>
            <Card className={styles.whatsappCard}>
              <div className={styles.methodLabel}>WhatsApp</div>
              <a className={styles.whatsappValue} href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                {CONTACT.whatsappNumberDisplay ?? "Send us a WhatsApp"} →
              </a>
            </Card>
            <Card variant="surface" className={styles.methodCard}>
              <div className={styles.methodLabel}>Email</div>
              <a className={styles.methodValue} href={CONTACT.email ? `mailto:${CONTACT.email}` : undefined}>
                {CONTACT.email ?? "CONTENT MISSING: email"}
              </a>
            </Card>
            <Card variant="surface" className={styles.methodCard}>
              <div className={styles.methodLabel}>Business hours</div>
              <div className={styles.methodValue}>Sun–Thu · 09:00–18:00 GST</div>
            </Card>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <SectionHeader eyebrow="Dubai office" heading="Find us at DIFC." />
        <div className={styles.officeGrid}>
          <Card variant="surface">
            <p>{CONTACT.officeAddress ?? "CONTENT MISSING: Dubai office address"}</p>
          </Card>
          <div className={styles.mapSlot}>
            {CONTACT.mapsEmbedSrc ? (
              <iframe
                src={CONTACT.mapsEmbedSrc}
                title="Techknomatic Dubai office on Google Maps"
                loading="lazy"
              />
            ) : (
              <div className={styles.mapPlaceholder}>
                {/* CONTENT MISSING: Google Maps embed URL */}
                Map embed pending.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <SectionHeader eyebrow="Regional contacts" heading="UAE leadership." />
        <div className={styles.peopleGrid}>
          <PersonCard
            name="Apoorva Gowda"
            role="Practice Lead, UAE"
            region="UAE · Dubai"
            linkedinUrl={undefined /* CONTENT MISSING */}
          />
          <PersonCard
            name="Arup Saroji"
            role="Delivery Lead, UAE"
            region="UAE · Dubai"
            note="Name spelling pending HR confirmation"
          />
        </div>
        <div className={styles.partnersRow}>
          <Pill variant="neutral">Aintisar · UAE</Pill>
          <Pill variant="neutral">Primer · Oman</Pill>
          <Pill variant="neutral">Inspirational Global · USA</Pill>
        </div>
      </section>

      <section className={styles.careers}>
        <div className={styles.careersInner}>
          <Pill variant="brand">Careers</Pill>
          <h2>We're hiring across the Gulf.</h2>
          <p>
            <a href="mailto:careers@techknomatic.com">careers@techknomatic.com</a> ·{" "}
            <Link to="/about/careers">See open roles →</Link>
          </p>
        </div>
      </section>

      <PageCTA
        headline="Prefer WhatsApp? So do we."
        sub="Average response time 2 hours, Sun–Thu GST."
        primary={{ label: "WhatsApp us", href: buildWhatsAppLink() }}
        secondary={{ label: "Use the form", href: "#form" }}
      />
    </>
  );
}
```

Confirm `CONTACT` field names by reading `src/data/contact.ts`. Adjust any name mismatches.

- [ ] **Step 2: Rewrite `src/pages/Contact.module.css`**

```css
.section {
  padding: var(--space-8) var(--space-5);
  max-width: var(--max-width);
  margin: 0 auto;
}
.sectionWash {
  padding: var(--space-8) var(--space-5);
  background: var(--brand-wash);
}
.sectionWash > * {
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
}

.formGrid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-7);
}

@media (max-width: 1024px) {
  .formGrid {
    grid-template-columns: 1fr;
  }
}

.methods {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.methodCard,
.whatsappCard {
  padding: var(--space-4) var(--space-5);
}

.whatsappCard {
  background: var(--whatsapp-green);
  color: var(--canvas);
  border: none;
}

.methodLabel {
  font-family: var(--font-mono);
  font-size: var(--t-label);
  text-transform: uppercase;
  letter-spacing: var(--ls-caps);
  color: var(--text-2);
  margin-bottom: 4px;
}

.whatsappCard .methodLabel {
  color: rgba(255, 255, 255, 0.85);
}

.methodValue {
  display: block;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 17px;
  color: var(--ink);
}

.whatsappValue {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 17px;
  color: var(--canvas);
}
.whatsappValue:hover {
  text-decoration: underline;
}

.officeGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

@media (max-width: 768px) {
  .officeGrid {
    grid-template-columns: 1fr;
  }
}

.mapSlot {
  background: var(--surface-1);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  overflow: hidden;
  min-height: 280px;
}

.mapSlot iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.mapPlaceholder {
  display: grid;
  place-items: center;
  min-height: 280px;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: var(--ls-caps);
  text-transform: uppercase;
  color: var(--text-2);
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent 12px,
    var(--surface-2) 12px,
    var(--surface-2) 13px
  );
}

.peopleGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

@media (max-width: 768px) {
  .peopleGrid {
    grid-template-columns: 1fr;
  }
}

.partnersRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.careers {
  background: var(--ink);
  color: var(--canvas);
  padding: var(--space-6) var(--space-5);
}

.careersInner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: var(--space-5);
  flex-wrap: wrap;
}

.careersInner h2 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  margin: 0;
  letter-spacing: var(--ls-h2);
}

.careersInner p {
  margin: 0;
  color: var(--text-2);
  font-size: 14px;
}

.careersInner a {
  color: var(--brand);
  font-weight: 600;
}
.careersInner a:hover {
  color: var(--brand-tint);
}
```

- [ ] **Step 3: ContactForm restyle**

Open `src/components/ContactForm.tsx`. Do NOT change behavior (validation, honeypot, query-param pre-select, stub submit handler). The only change is class names if CSS module names shift. The TSX may use the same class names — if so, leave the TSX alone.

Rewrite `src/components/ContactForm.module.css`:

```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.row label {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
}

.row .required {
  color: var(--brand);
  margin-inline-start: 2px;
}

.input,
.select,
.textarea {
  width: 100%;
  background: var(--canvas);
  border: 1.5px solid var(--border);
  border-radius: var(--r-md);
  padding: 11px 14px;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--ink);
  transition: border-color 150ms ease, box-shadow 150ms ease;
}

.input:focus,
.select:focus,
.textarea:focus {
  outline: none;
  border-color: var(--brand);
  box-shadow: 0 0 0 3px rgba(255, 74, 0, 0.15);
}

.input[aria-invalid="true"],
.select[aria-invalid="true"],
.textarea[aria-invalid="true"] {
  border-color: var(--danger);
}

.error {
  font-size: 12px;
  color: var(--danger);
  margin-top: 4px;
}

.honeypot {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}

@media (max-width: 640px) {
  .cols {
    grid-template-columns: 1fr;
  }
}

.success {
  background: var(--surface-1);
  border: 1px solid var(--surface-2);
  border-radius: var(--r-lg);
  padding: var(--space-6);
  text-align: center;
}

.success h3 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: var(--ls-h3);
  color: var(--ink);
  margin: 0 0 var(--space-3);
}

.success p {
  font-size: 14px;
  color: var(--text-2);
  margin: 0 0 var(--space-4);
}

.submit {
  align-self: flex-start;
}
```

If the existing TSX uses different class names (e.g. `fieldRow` instead of `row`), open it and read; either rename CSS to match or rename TSX classes. **Don't change form logic.**

- [ ] **Step 4: Verify + commit**

```bash
npx tsc --noEmit
```

```bash
npm run dev
```

Test:
- `/contact` — full page renders.
- `/contact?service=business-analytics` — Service dropdown auto-selects.
- Submit empty form — validation errors show inline.
- Submit valid form — success card replaces form.

Append Session 17. Commit:

```bash
git add src/pages/Contact.tsx src/pages/Contact.module.css \
        src/components/ContactForm.tsx src/components/ContactForm.module.css \
        _planning/SESSION_LOG.md
git commit -m "feat: redesign - contact page restyle"
```

---

## Task 12 — About-Company page + WhatsApp FAB + NotFound restyle

**Files:**
- Rewrite: `src/pages/AboutCompany.tsx`
- Rewrite: `src/pages/AboutCompany.module.css`
- Restyle: `src/components/WhatsAppFAB.module.css` (TSX unchanged)
- Restyle: `src/pages/NotFound.tsx` + `.module.css`

- [ ] **Step 1: Rewrite `src/pages/AboutCompany.tsx`**

Lift the 6-section structure from the existing file. Rewrite to new components:

```tsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { SectionHeader } from "../components/SectionHeader";
import { PillarCard } from "../components/PillarCard";
import { ValueTile } from "../components/ValueTile";
import { PersonCard } from "../components/PersonCard";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import styles from "./AboutCompany.module.css";

const DIFFERENTIATORS = [
  { number: "01", title: "Experienced Team", body: "Eleven years of delivery across data, AI, and operations. Senior consultants only on the bench." },
  { number: "02", title: "Proven Methodology", body: "Two-week paid discovery → architecture → sprint delivery → managed handover. Predictable shipping." },
  { number: "03", title: "Less Turnaround Time", body: "From RFP to first dashboard in weeks. Real delivery cadence, not pre-sales theater." },
];

const VALUES = [
  { label: "Integrity", body: "We say no to work we can't ship. We surface bad news fast." },
  { label: "Ethics", body: "Client data is sacred. We never bring one client's IP into another's work." },
  { label: "Inclusion", body: "Regional leadership. Gulf-resident team. Customer-language by default." },
  { label: "Innovation", body: "We invest in productized accelerators so each engagement starts ahead." },
];

const LEADERSHIP_UAE = [
  { name: "Apoorva Gowda", role: "Practice Lead, UAE", region: "UAE · Dubai" },
  { name: "Arup Saroji", role: "Delivery Lead, UAE", region: "UAE · Dubai", note: "Name spelling pending HR confirmation" },
];

const LEADERSHIP_GLOBAL = [
  { name: "Rahul Madke", role: "Co-Founder & CEO", region: "Founders & global leadership" },
  { name: "Prakash Pawar", role: "Co-Founder", region: "Founders & global leadership" },
  { name: "Sunny Tatiya", role: "Practice Head", region: "Founders & global leadership" },
  { name: "Gopinath Sambandam", role: "Delivery Head", region: "Founders & global leadership" },
  { name: "Pranita Singh", role: "Operations", region: "Founders & global leadership" },
  { name: "Vasundhara Gaikwad", role: "People Ops", region: "Founders & global leadership" },
  { name: "Hemant Jadhav", role: "Engineering", region: "Founders & global leadership" },
];

export default function AboutCompany() {
  return (
    <>
      <Helmet>
        <title>About — Techknomatic</title>
        <meta name="description" content="A team with knowledge, experience, and Gulf depth. Eleven years. 120+ clients. DIFC office." />
      </Helmet>

      <HeroSection
        eyebrow="About us"
        headline={
          <>
            A team with <em>knowledge,</em>
            <br />
            experience, and Gulf depth.
          </>
        }
        lead="Eleven years of delivering data, AI, and managed operations across the Gulf. Eight nationalities. UAE-resident leadership. DIFC office."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Why us" heading="What makes us different." />
          <div className={styles.gridThree}>
            {DIFFERENTIATORS.map((d) => (
              <Reveal key={d.number}>
                <PillarCard number={d.number} title={d.title} body={d.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Culture" heading="Our values." />
          <div className={styles.gridFour}>
            {VALUES.map((v) => (
              <ValueTile key={v.label} label={v.label} body={v.body} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Life at Techknomatic"
            heading="Where we spend our time."
            subtext="Cleared culture photos pending."
          />
          <div className={styles.lifePlaceholder}>
            {/* CONTENT MISSING: 14+ cleared culture photos */}
            Photo carousel pending content delivery.
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Leadership" heading="UAE leadership, surfaced first." />
          <div className={styles.peopleGrid}>
            {LEADERSHIP_UAE.map((p) => (
              <PersonCard
                key={p.name}
                name={p.name}
                role={p.role}
                region={p.region}
                note={p.note}
              />
            ))}
          </div>
          <SectionHeader
            eyebrow="Founders & global leadership"
            heading="The team behind it."
            subtext="Headshots and LinkedIn URLs pending."
          />
          <div className={styles.peopleGridCompact}>
            {LEADERSHIP_GLOBAL.map((p) => (
              <PersonCard
                key={p.name}
                name={p.name}
                role={p.role}
                region={p.region}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Work with us"
        headline="Let's build together."
        sub="Start with a 30-minute call. Sun–Thu, GST."
      />
    </>
  );
}
```

If `PersonCard` doesn't accept `variant="compact"` (check existing TSX), adjust either the prop or drop it from the call site. If `ValueTile` accepts a `tone` prop (existing supports gold/teal alternation), pass nothing — Task 08 collapsed it to single orange.

- [ ] **Step 2: Rewrite `src/pages/AboutCompany.module.css`**

```css
.section {
  padding: var(--space-8) var(--space-5);
}
.sectionWash {
  padding: var(--space-8) var(--space-5);
  background: var(--brand-wash);
}
.inner {
  max-width: var(--max-width);
  margin: 0 auto;
}

.gridThree {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}
.gridFour {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}
@media (max-width: 1024px) {
  .gridThree { grid-template-columns: 1fr 1fr; }
  .gridFour  { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .gridThree, .gridFour { grid-template-columns: 1fr; }
}

.lifePlaceholder {
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent 12px,
    var(--surface-2) 12px,
    var(--surface-2) 13px
  );
  border-radius: var(--r-lg);
  padding: var(--space-9);
  text-align: center;
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: var(--ls-caps);
  text-transform: uppercase;
  color: var(--text-2);
}

.peopleGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-7);
}

.peopleGridCompact {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

@media (max-width: 1024px) {
  .peopleGridCompact { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .peopleGrid, .peopleGridCompact { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Restyle `src/components/WhatsAppFAB.module.css`**

```css
.fab {
  position: fixed;
  bottom: var(--space-5);
  right: var(--space-5);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--whatsapp-green);
  color: var(--canvas);
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-2);
  z-index: 90;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.fab:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-3);
}

@media (max-width: 768px) {
  .fab {
    width: 48px;
    height: 48px;
    bottom: var(--space-4);
    right: var(--space-4);
  }
}

.fab svg {
  width: 28px;
  height: 28px;
}

@media (prefers-reduced-motion: reduce) {
  .fab:hover {
    transform: none;
  }
}
```

If existing FAB had a pulse animation, the new CSS removes it — that's intentional per spec.

- [ ] **Step 4: Rewrite `src/pages/NotFound.tsx`**

```tsx
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/Button";
import { Pill } from "../components/Pill";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found — Techknomatic</title>
      </Helmet>
      <section className={styles.wrap}>
        <Pill variant="brand">Error · 404</Pill>
        <h1 className={styles.headline}>
          That page doesn't <em>exist</em>.
        </h1>
        <p className={styles.lead}>
          You're looking for something we haven't shipped — or no longer ship at this URL.
        </p>
        <div className={styles.actions}>
          <Link to="/">
            <Button variant="primary">Back to home</Button>
          </Link>
          <Link to="/services">
            <Button variant="secondary">Browse services</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Rewrite `src/pages/NotFound.module.css`**

```css
.wrap {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-9) var(--space-5);
  gap: var(--space-4);
}

.headline {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--t-display);
  line-height: var(--lh-display);
  letter-spacing: var(--ls-display);
  color: var(--ink);
  margin: 0;
}

.headline em {
  font-style: normal;
  color: var(--brand);
}

.lead {
  font-size: 18px;
  color: var(--text-2);
  max-width: 540px;
  margin: 0;
}

.actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}
```

- [ ] **Step 6: Verify + commit**

```bash
npx tsc --noEmit
```

Expected: zero errors across the whole project. If any caller is still broken from Task 03, fix now (the project should fully type-check after this task).

```bash
npm run dev
```

Verify:
- `/about` renders new design, UAE leadership first, global compact grid below.
- `/random-route-xyz` renders the new 404.
- WhatsApp FAB shows on every page, sits bottom-right, no pulse.

Append Session 18. Commit:

```bash
git add src/pages/AboutCompany.tsx src/pages/AboutCompany.module.css \
        src/components/WhatsAppFAB.module.css \
        src/pages/NotFound.tsx src/pages/NotFound.module.css \
        _planning/SESSION_LOG.md
git commit -m "feat: redesign - about-company + WhatsApp FAB + NotFound restyle"
```

---

## Task 13 — Cleanup (drop dark-theme cruft)

**Files:**
- Delete: `src/components/ThemeToggle.tsx`
- Delete: `src/components/ThemeToggle.module.css`
- Delete: `src/lib/theme.ts`
- Delete: `src/pages/DesignProof.tsx`
- Delete: `src/pages/DesignProof.module.css`
- Modify: `src/App.tsx`
- Modify: `src/components/Layout.tsx` (if it imports ThemeToggle)
- Sweep: any stale dark/gold/teal references

- [ ] **Step 1: Confirm nothing else imports the dying files**

```bash
grep -rn "ThemeToggle\|theme.ts\|DesignProof" src/ 2>/dev/null
```

Catalog every match. Each one must be either updated to remove the import, or deleted.

- [ ] **Step 2: Update `src/App.tsx`**

Open and remove:
- `import { DesignProof }` (or default import) from pages
- The `<Route path="/design-proof" element={<DesignProof />} />` line
- Any other ThemeToggle wiring

Confirm route table is:
- `/` → `<Home />`
- `/services` → `<ServicesIndex />`
- `/services/:slug` → `<ServiceDetail />`
- `/contact` → `<Contact />`
- `/about` → `<AboutCompany />`
- `*` → `<NotFound />`

- [ ] **Step 3: Update `src/components/Layout.tsx`**

If it imports `ThemeToggle`, remove the import and the JSX usage. Layout should now be just:

```tsx
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.shell}>
      <NavBar />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
```

- [ ] **Step 4: Delete the dying files**

```bash
git rm src/components/ThemeToggle.tsx src/components/ThemeToggle.module.css \
       src/lib/theme.ts \
       src/pages/DesignProof.tsx src/pages/DesignProof.module.css
```

- [ ] **Step 5: Sweep for any remaining dark-theme references**

```bash
grep -rn "\-\-bg-base\|\-\-bg-surface\|\-\-bg-elevated\|\-\-gold-\|\-\-teal-\|data-theme\|tks-theme\|--text-primary\|--text-secondary\|--text-muted" src/ 2>/dev/null
```

Every match must be removed or migrated to a v2 token. Common patterns:
- `var(--bg-base)` → `var(--canvas)`
- `var(--bg-surface)` → `var(--surface-1)`
- `var(--bg-elevated)` → `var(--canvas)` with `--shadow-2`
- `var(--text-primary)` → `var(--ink)`
- `var(--text-secondary)` → `var(--ink-muted)` or `var(--text-2)`
- `var(--text-muted)` → `var(--text-2)`
- `var(--gold-primary)` → `var(--brand)`
- `var(--gold-light)` → `var(--brand-tint)`
- `var(--teal-primary)` → `var(--brand)` (yes — teal is gone)
- Any `[data-theme="light"]` block → delete (single theme now)
- Any `--radius-sm`/`--radius-md` → `--r-sm`/`--r-md`
- Any `--transition-base` → keep (defined in new tokens)

- [ ] **Step 6: Final type-check + smoke**

```bash
npx tsc --noEmit
```

Expected: zero errors.

```bash
npm run dev
```

Smoke every route:
- `/`
- `/services`
- `/services/business-analytics`
- `/services/data-engineering`
- `/services/data-ai-strategy`
- `/services/geospatial-analytics`
- `/services/managed-services`
- `/contact`
- `/contact?service=business-analytics`
- `/about`
- `/design-proof` → should now 404 (the route is gone, NotFound renders)
- `/random-xyz` → NotFound

All routes 200 except `/design-proof` (404 expected). WhatsApp FAB visible everywhere. Nothing dark except the Footer + the legal Careers band.

- [ ] **Step 7: Append Session 19 entry**

```markdown
## Session 19 — 2026-05-19 — Phase 4 cleanup: drop dark-theme cruft

**Goal:** Delete `ThemeToggle`, `theme.ts`, `DesignProof`, and any remaining dark-theme references. Lock the v2 system as the only design system in the codebase.

**Completed**

- [x] Deleted: `ThemeToggle.tsx`/`.module.css`, `lib/theme.ts`, `DesignProof.tsx`/`.module.css`.
- [x] `App.tsx` — dropped `/design-proof` route and ThemeToggle imports.
- [x] `Layout.tsx` — dropped ThemeToggle usage.
- [x] Swept entire `src/` for `--gold-*`, `--teal-*`, `--bg-*`, `--text-primary/secondary/muted`, `data-theme`, `tks-theme` — none remain.

**Verification**

- `tsc --noEmit` — zero errors.
- All 10+ routes serve 200 except `/design-proof` (404, expected).
- Every page renders the v2 design.

**Per-commit log**

```
<SHORT_SHA> chore: redesign - delete dark-theme cruft
```

**Files modified this session**

- (deleted) `src/components/ThemeToggle.tsx` + `.module.css`
- (deleted) `src/lib/theme.ts`
- (deleted) `src/pages/DesignProof.tsx` + `.module.css`
- `src/App.tsx`
- `src/components/Layout.tsx`
- any swept files (record specifics)
- `_planning/SESSION_LOG.md` (this entry)

**Branch ready to merge as `v0.2-zapier-style`.**

---
```

- [ ] **Step 8: Commit + merge + tag**

```bash
git add -A  # safe here — only modified files + deletions remain
git diff --staged
git commit -m "chore: redesign - delete dark-theme cruft"
```

Then:

```bash
git checkout main
git merge --no-ff phase/redesign-zapier -m "feat: zapier-style redesign (v0.2)"
git tag -a v0.2-zapier-style -m "Zapier-style redesign — light + orange + Space Grotesk + floating cards"
git push origin main --tags
```

> **Definition of Done:** all 7 items from the spec §10 confirmed:
> 1. ✅ Branch merged + tagged
> 2. ✅ All 4 pages in new design
> 3. ✅ `tsc --noEmit` green on main
> 4. ✅ CLAUDE.md, BRAND.md, DESIGN.md updated
> 5. ✅ Session 7-19 logged
> 6. ⏳ Owner visual sign-off recorded in SESSION_LOG.md (do this before tagging)
> 7. ✅ ThemeToggle + dark-theme CSS removed

---

## Self-Review

**Spec coverage check:**

| Spec section | Plan task | Status |
|---|---|---|
| §2 Locked decisions | Task 01-02 (planning rewrite + tokens) | ✅ |
| §3 Tokens (colors, type, spacing, radii, shadow, motion) | Task 02 | ✅ |
| §4.1 Component verdicts | Tasks 03-08 + 11-12 (per row) | ✅ |
| §4.2 New components | Task 03 (Pill), Task 06 (FloatingCard), Task 07 (ProductCard) | ✅ |
| §5.1 Home | Task 09 | ✅ |
| §5.2 Services index | Task 10 | ✅ |
| §5.3 Service detail | Task 10 (ServiceDetailPage + 5 details via data) | ✅ |
| §5.4 Contact | Task 11 | ✅ |
| §5.5 About-Company | Task 12 | ✅ |
| §5.6 Product Detail (NEW) | Out of scope (noted in spec §8) | ✅ |
| §5.7 NotFound | Task 12 | ✅ |
| §6 Branch & commit plan | Mapped 1:1 to Tasks 01-13 | ✅ |
| §7 Discipline rules | Carried into every task (tsc + smoke + commit) | ✅ |
| §8 Out of scope | Honored (no Phase 3 remaining pages, no Arabic, no dark) | ✅ |
| §9 Risks | Addressed (typography distinction in 02; planning rewrite first in 01) | ✅ |
| §10 Definition of Done | Final checklist in Task 13 | ✅ |

**Placeholder scan:** No "TBD", "implement later", or generic "handle edge cases" anywhere. The `CONTENT MISSING` markers are intentional (per project rule — content gaps from the source content files), not plan placeholders.

**Type consistency check:**
- `FloatingCard`'s `IconTone` exported in Task 06, re-imported by `ProductCard` in Task 07 — matched.
- `ServiceDetail` type referenced in Task 10 — the plan flags that the engineer must read & possibly widen the existing type. That's the right move because we can't fully predict the existing schema; the plan calls it out explicitly.
- `Button` variants `"primary" | "secondary" | "dark" | "link"` consistent across all callers (NavBar Task 04, PageCTA Task 07, page tasks 09-12). No drift.
- `Card` variants `"base" | "surface" | "elevated"` — only Card itself and Contact's `methodCard`/`whatsappCard` use it. Names match.

**One acknowledged transient breakage:** between commits 03 and 09, project-level `tsc --noEmit` fails because Home/ServicesIndex/etc still reference the dropped `<Button variant="ghost">`. The plan calls this out explicitly in Task 03 step 7 and Task 09 restores green. This is unavoidable — rebuilding Button's variants in isolation from its callers is the cleanest commit boundary.

**Gaps found and fixed inline:**
- Added explicit guidance in Task 10 step 7 about widening `ServiceDetail` type (the data type may not have `tone`, `heroFloatingCards`, etc.).
- Added grep commands in Task 13 step 5 for every legacy token name that needs migration.
- Added Session log append boilerplate so the engineer doesn't forget the project's `SESSION_LOG.md` discipline.

Plan is complete.

