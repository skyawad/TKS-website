# Zapier-Style Redesign — Design Spec

**Date:** 2026-05-19
**Status:** Approved (brainstorm) — pending implementation plan
**Supersedes:** existing `CLAUDE.md`, `_planning/BRAND.md`, `_planning/DESIGN.md` (rewrites required)
**Branch target:** `phase/redesign-zapier` off `main`

---

## 1. Context & Why

Six sessions of work landed a dark-first, gold/teal "DIFC boardroom" aesthetic with the spotlight-card + glow pattern common to modern enterprise SaaS. On 2026-05-19 the project owner reviewed the four built pages and reported three concerns:

1. Looks generic — every dark IT site uses the same formula.
2. Layout is flat — sections stack identically (hero → cards → cards → CTA).
3. Reads as AI-generated / template-y — recognisable "modern SaaS" tropes.

Direction selected: rebuild as a **Zapier-style site** — light theme, orange brand, rounded pill CTAs, floating product cards in hero, friendly-confident voice. Owner explicitly confirmed override of the existing planning files.

Conflict acknowledged: this contradicts the current `CLAUDE.md` (which bans orange, rounded pills, and icon-in-circle grids) and the "DIFC boardroom" positioning in `BRAND.md`. Those files will be rewritten as the first commit of this work.

## 2. Locked Decisions

| Decision | Choice | Notes |
|---|---|---|
| Visual direction | Zapier-style | Light + orange + rounded + floating cards + friendly voice |
| Override planning files | Yes | Rewrite CLAUDE.md, BRAND.md, DESIGN.md as commit 01 |
| Brand color | `#FF4A00` (Zapier Orange) | Exact Zapier orange — owner accepts clone-risk |
| Illustration strategy | Floating product cards (Stripe-style) | Pure CSS. No external illustration assets. |
| Typography | Space Grotesk (display) + Inter (body) | Drop Syne + DM Sans |
| Scope | New component library, reuse content + data | Repaint each page using new components |
| Dark theme | Killed | Light-only site. Drop `ThemeToggle`. |

## 3. Design Tokens

### 3.1 Colors

| Token | Hex | Role |
|---|---|---|
| `--brand` | `#FF4A00` | Primary CTAs, accents, links |
| `--brand-dark` | `#CC3A00` | Hover, pressed state, dark gradient end |
| `--brand-tint` | `#FFE9DD` | Eyebrow pill bg, focus ring base |
| `--brand-wash` | `#FFF5EF` | Hero/section tinted bg |
| `--ink` | `#201E1E` | Headlines, primary text |
| `--ink-muted` | `#494A4A` | Body labels, nav links |
| `--text-2` | `#6B6C6C` | Lead paragraphs, descriptions |
| `--border` | `#D8D4CE` | Inputs, dividers |
| `--surface-1` | `#FAF9F7` | Card backgrounds in light sections |
| `--surface-2` | `#F0EDE9` | Alt background, hover surface |
| `--canvas` | `#FFFFFF` | Page background |
| `--whatsapp-green` | `#25D366` | Single documented palette exception (WhatsApp FAB only) |

Status colors: `--success #1AB87A`, `--info #2C6DF6`, `--warning #FFB800`, `--danger #E23A3A`.

**Product-icon palette (Zapier pattern — each product/practice gets a tile color):**

| Token | Hex | Assigned to |
|---|---|---|
| `--icon-orange` | `#FF4A00` | Business Analytics · AssistIQ (flagship) |
| `--icon-blue` | `#2C6DF6` | Data Engineering · DataPulseIQ · CallOps AI |
| `--icon-purple` | `#7A5AF8` | AI &amp; Data Strategy · TicketIQ |
| `--icon-green` | `#1AB87A` | Geospatial · Qlik partner · CXO Nexus |
| `--icon-yellow` | `#FFB800` | Managed Services · ESRI partner |

Tile bg uses the assigned color at full saturation. Tile icon glyph is white (or `--ink` on yellow for contrast). One color per product — locked. Used in `ProductCard`, `FloatingCard`, and footer-quick-link icons.

### 3.2 Typography

Fonts (Google Fonts):
- **Space Grotesk** — weights 500, 600, 700 — display (H1–H3)
- **Inter** — weights 400, 500, 600, 700, 800 — body, UI
- **JetBrains Mono** — weight 500 — mono labels, code

Scale (all clamp-based for fluid sizing — sizes below are desktop targets):

| Token | Family | Weight | Size | Line | Letter |
|---|---|---|---|---|---|
| `--t-display` | Space Grotesk | 700 | 64px | 1.0 | -3% |
| `--t-h1` | Space Grotesk | 700 | 36px | 1.05 | -2.5% |
| `--t-h2` | Space Grotesk | 600 | 24px | 1.15 | -2% |
| `--t-h3` | Space Grotesk | 600 | 18px | 1.2 | -1% |
| `--t-body` | Inter | 400 | 16px | 1.55 | 0 |
| `--t-small` | Inter | 500 | 13px | 1.5 | 0 |
| `--t-mono` | JetBrains Mono | 500 | 12px | 1.4 | +4%, UPPERCASE |

### 3.3 Spacing, Radii, Shadow

- **Spacing scale** unchanged from current tokens (4px grid: 4/8/12/16/24/32/48/64/96).
- **Radii**: `--r-sm 6px`, `--r-md 10px`, `--r-lg 14px`, `--r-xl 20px`, `--r-pill 999px`. **Inputs = 10px. Cards = 14–16px. CTAs = pill.** No sharp corners anywhere on the user-facing surface.
- **Shadows** (4 steps):
  - `--shadow-1` — `0 1px 2px rgba(0,0,0,.06)` — input focus
  - `--shadow-2` — `0 4px 12px rgba(0,0,0,.08)` — card rest
  - `--shadow-3` — `0 8px 24px rgba(0,0,0,.10)` — card hover, floating card rest
  - `--shadow-4` — `0 16px 40px rgba(0,0,0,.12)` — modal / hero illustration

### 3.4 Motion

- Card hover: `translateY(-4px)` + shadow-2 → shadow-3, 200ms ease-out
- Floating cards: subtle bob `translateY(±6px)` over 3–4s, staggered per card
- Button press: `scale(0.97)` on `:active`, 100ms
- Scroll reveal: keep existing `Reveal` IntersectionObserver wrapper (fade-up + stagger)
- **All motion gated behind `@media (prefers-reduced-motion: reduce)`**

## 4. Component Library

### 4.1 Verdict Per Existing Component

| Component | Verdict | Notes |
|---|---|---|
| `Button` | REBUILD | Pill-shaped. Variants: `primary` (orange), `secondary` (neutral outline), `dark` (nav top-right), `link` (orange text + arrow). Sizes `md` + `sm`. |
| `Card` | REBUILD | White surface, 14–16px radius, soft shadow, hover lift. Drop glass / gold-accent / teal-accent variants. |
| `NavBar` | REBUILD | Light bg, logo + centred nav + right-side `Sign in` ghost + `Get started` dark pill. Mega-menu on desktop, full-screen overlay on mobile. |
| `Footer` | REBUILD | Dark footer on light page (Zapier pattern). 4-col: brand+blurb / Practice / Products / Contact. |
| `WhatsAppFAB` | RESTYLE | Still `#25D366`. Tighter shadow, no glow, pulse off by default. |
| `HeroSection` | REBUILD | Light bg with `--brand-wash` top fade. Takes a `floatingCards` prop for right-side illustration. |
| `SpotlightCard` | DROP | Replaced by `ProductCard`. |
| `ProductCard` (NEW) | NEW | Icon tile (colored bg, 14px radius) + H4 + 1-line desc + arrow link. Used in service/product grids. |
| `FloatingCard` (NEW) | NEW | Small white card with icon + label + sub-label. Used inside hero. CSS-only animation. |
| `PillarCard` | RESTYLE | White card. Orange mono number. Drop gold border-inline-start. |
| `CaseStudyTeaser` | RESTYLE | White card, orange eyebrow pill, soft shadow on hover. |
| `PageCTA` | REBUILD | Orange→orange-light gradient banner with 20px rounded corners, white pill primary + transparent-white secondary. |
| `ServiceDetailPage` | REBUILD | Same 8-section shape, all new components. |
| `CapabilityCard` | REBUILD | White card, soft shadow, small orange accent dot. |
| `UseCaseCard` | REBUILD | White card with orange `border-inline-start` accent (2px). |
| `ProcessTimeline` | REBUILD | Horizontal 5-node stepper, mono number badges in `--brand-tint`. |
| `ContactForm` | RESTYLE | Logic stays (validation, honeypot, `?service=` pre-select). Inputs get 10px radius + orange focus ring. |
| `PersonCard` | RESTYLE | White card, orange initials badge (no gold), no rotate-on-hover. Both `compact` and `card` variants retained. |
| `ValueTile` | RESTYLE | White surface, orange corner glyph (no gold/teal alternation). |
| `SectionHeader` | RESTYLE | Replace text overline with orange `Eyebrow` pill. Space Grotesk H2. |
| `Reveal` | KEEP | IntersectionObserver wrapper unchanged. |
| `Layout` | KEEP | Shell unchanged. |
| `NotFound` | RESTYLE | Light bg, orange eyebrow, friendly H1, two CTAs. |
| `ThemeToggle` | DROP | Light-only site. |
| `data/*` `lib/whatsapp` | KEEP | Logic only. |

### 4.2 New Components (full list)

- `Button` (rebuilt)
- `Pill` / `Eyebrow` (new primitive — used as `<Pill variant="brand">New · AI agents</Pill>`)
- `Card` (rebuilt)
- `ProductCard` (new)
- `FloatingCard` (new)
- `HeroSection` (rebuilt)
- `NavBar` (rebuilt) + `MegaMenu` (new subcomponent)
- `Footer` (rebuilt)
- `PageCTA` (rebuilt — new gradient style)
- `PillarCard`, `CaseStudyTeaser`, `CapabilityCard`, `UseCaseCard`, `ProcessTimeline`, `ServiceDetailPage` (rebuilt)
- `SectionHeader`, `PersonCard`, `ValueTile`, `ContactForm`, `WhatsAppFAB` (restyled)

## 5. Page Templates

### 5.1 Home — `/`

Section order (all from `_planning/content/HOME.md` — copy unchanged):

1. **NavBar** — global
2. **Hero** — orange eyebrow pill + display H1 (with `<em>` orange phrase) + lead + dual CTA (primary pill + ghost-with-arrow) + 5 floating cards on the right (AssistIQ / DataPulse / Qlik / TicketIQ / ESRI)
3. **Trust strip** — light grey band: "Trusted across the Gulf —" + 5 customer-segment labels
4. **Services grid** — H2 + lead + 5-card `ProductCard` row (Analytics / Data Eng / AI Strategy / Geo / Managed)
5. **Enterprise AI** — `--brand-wash` background section, H2 + 4-card `ProductCard` row
6. **Why Techknomatic** — H2 + 4 `PillarCard` with orange mono numbers (01–04)
7. **Case study teaser** — 2 `CaseStudyTeaser` cards from `CUSTOMER_STORIES.md`
8. **`PageCTA`** — orange gradient banner, primary + WhatsApp secondary
9. **Footer** — global

### 5.2 Services Index — `/services`

Hero (with 5 floating service cards) → 5-card grid (all services) → 5-step delivery framework (`ProcessTimeline`) → 3 "Why our practice" pillars → `PageCTA`.

### 5.3 Service Detail — `/services/:slug`

`ServiceDetailPage` shape, 8 sections from `services/<SLUG>.md`:

1. Hero (eyebrow + H1 + lead + CTA + floating product/integration cards)
2. Problem statement (2-col text)
3. Capabilities (3-card grid)
4. Industries we serve
5. Architecture diagram (image slot — `CONTENT MISSING` until provided)
6. Integrations strip
7. Use case cards
8. `PageCTA`

### 5.4 Contact — `/contact`

Same 6 sections as currently built; restyled per new components:

1. Hero — "Let's build together"
2. Form (left, restyled) + contact-method tiles (right)
3. Dubai office card + map slot
4. Regional contacts (UAE leads first — Apoorva, Arup)
5. Careers inline band
6. `PageCTA`

Form behaviour identical: `useSearchParams` for `?service=<slug>`, client-side validation, honeypot, stub submit handler. Only visual changes.

### 5.5 About — Company — `/about`

Same 6 sections currently built; restyled:

1. Hero — trust line
2. 3 differentiators (`PillarCard`)
3. 4 culture-value tiles (`ValueTile`)
4. Life at Techknomatic carousel placeholder
5. Leadership grid (UAE leadership surfaced first)
6. `PageCTA`

### 5.6 NEW template — Product Detail — `/enterprise-ai/:slug` and `/platforms/:slug`

Same shape as `ServiceDetailPage` driven from `data/products/<slug>.ts`. Built as part of post-redesign Phase 3 continuation — **not in this spec's scope.**

### 5.7 NotFound — `*`

Light bg, orange `Error · 404` eyebrow, friendly H1, two CTAs (home, services).

## 6. Branch & Commit Plan

Cut `phase/redesign-zapier` off `main` (after merging the current `page/about-company` branch, if not already merged).

| # | Commit | Touches |
|---|---|---|
| 01 | `chore: redesign - rewrite planning files` | `CLAUDE.md`, `_planning/BRAND.md`, `_planning/DESIGN.md` |
| 02 | `chore: redesign - new tokens.css + fonts` | `src/styles/tokens.css`, `index.html` (font links) |
| 03 | `feat: redesign - Button + Card + Pill primitives` | `src/components/Button.*`, `Card.*`, `Pill.*` |
| 04 | `feat: redesign - NavBar (light + mega-menu)` | `src/components/NavBar.*` |
| 05 | `feat: redesign - Footer (dark on light page)` | `src/components/Footer.*` |
| 06 | `feat: redesign - HeroSection + FloatingCard` | `src/components/HeroSection.*`, `FloatingCard.*` |
| 07 | `feat: redesign - ProductCard + PillarCard + PageCTA` | corresponding `.tsx` / `.module.css` files |
| 08 | `feat: redesign - SectionHeader + restyle PersonCard/ValueTile/CaseStudyTeaser` | `SectionHeader.*`, `PersonCard.*`, `ValueTile.*`, `CaseStudyTeaser.*` |
| 09 | `feat: redesign - home page repaint` | `src/pages/Home.*` |
| 10 | `feat: redesign - services index + 5 detail pages` | `src/pages/Services*`, all `data/services/*` unchanged |
| 11 | `feat: redesign - contact page` | `src/pages/Contact.*`, `src/components/ContactForm.*` (restyle only) |
| 12 | `feat: redesign - about-company page` | `src/pages/AboutCompany.*`, `PersonCard.*`, `ValueTile.*` |
| 13 | `chore: redesign - delete dark-theme cruft` | drop `ThemeToggle`, glass CSS, glow utilities, dark token branch |

**Merge gate** before step 13: visual sign-off across all 4 pages in browser + `tsc --noEmit` green.

After merge: tag `v0.2-zapier-style`. Future Phase 3 pages use the new components.

## 7. Discipline Rules (carried from current playbook)

- One commit per confirmed component / page. Visual sign-off between commits 06→07 (hero working) and 08→09 (home repainted).
- No invented copy. All content from `_planning/content/`.
- Zero hardcoded hex in `.tsx`. All colors via CSS variables.
- `tsc --noEmit` green after every commit.
- `_planning/SESSION_LOG.md` updated per session. New entries start at Session 7.
- All commits to `phase/redesign-zapier` until merged.

## 8. Out of Scope (Explicit)

- The 18 remaining pages of Phase 3 (Enterprise AI details, Platform pages, Industries, About sub-pages) — built **after** this redesign lands, using the new components. Same content files.
- Real Gulf contact info, leadership photos, dashboard screenshots — still `CONTENT MISSING`, separate workstream.
- Arabic / RTL scaffold — `LOCALIZATION.md` rules unchanged, deferred.
- Dark theme — killed entirely, will not be brought back in this spec.
- Original `SESSION_LOG.md` history — preserved verbatim. New entries continue from Session 7.

## 9. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Result looks like a Zapier clone, not a Techknomatic site. | Distinctive typography (Space Grotesk H1) + Gulf-region content + custom floating-card stack make the site recognisable. Orange copy is acknowledged trade-off. |
| Friendly tone undercuts enterprise trust signals at DIFC banks. | Voice is "confident-friendly" not "playful." Trust strip + case studies + partner logos + regional leadership grid all preserved. Tone change is visual, not editorial. |
| Repainting forces rewriting more than expected (e.g. content-shape changes). | Component inventory above lists every existing component and its verdict. Content files (`_planning/content/`) are untouched. Data files (`src/data/*`) are untouched. Only React component visual surfaces change. |
| Light-only kills accessibility for some users. | Color contrast targets WCAG AA across all combinations. Reduced-motion gating preserved. No dark-mode toggle but high contrast achievable. |
| Existing planning files (`CLAUDE.md` / `BRAND.md` / `DESIGN.md`) get out of sync mid-rebuild. | Commit 01 rewrites them **first**. No code work proceeds until those files match the new direction. |

## 10. Definition of Done

This spec is complete when:

1. `phase/redesign-zapier` branch merged to `main` and tagged `v0.2-zapier-style`.
2. All 4 currently-built pages (`/`, `/services` + 5 details, `/contact`, `/about`) render in the new design system.
3. `tsc --noEmit` green on `main`.
4. `CLAUDE.md`, `BRAND.md`, `DESIGN.md` updated to describe the new system.
5. `SESSION_LOG.md` entries Session 7+ document the rebuild.
6. Visual sign-off recorded in `SESSION_LOG.md` from the project owner.
7. `ThemeToggle` and all dark-theme CSS removed from the codebase.
