# Components — Specs, Variants, and Rules

> **Authoritative spec for every component in the Gulf site. Build once, reuse everywhere. No inline styles. No hardcoded hex.**

---

## Component Rules (apply to all)

<!-- LOC: UNIVERSAL -->

1. **`className` prop** — every component accepts a `className` prop appended to the root element for layout overrides.
2. **No inline styles.** All styling via CSS variables defined in `DESIGN.md`.
3. **Focus state.** Every interactive element has `:focus-visible` ring (`outline: 2px solid var(--gold-primary); outline-offset: 2px`).
4. **Alt text.** Every `<img>` has an `alt` attribute. Decorative images use `alt=""` and `aria-hidden="true"`.
5. **No hardcoded hex.** Always use a CSS variable. Linter rule should enforce this.
6. **i18n marker.** Every user-facing English string has a `// i18n` comment before it for later extraction.
7. **Honour `prefers-reduced-motion`.** Conditionally strip all transforms / opacity transitions.

---

## Shared / Page-Level Components

### `NavBar`

<!-- LOC: UNIVERSAL -->

- **Position:** sticky top, `--bg-elevated` with backdrop-blur on scroll.
- **Layout:** logo (left) · nav links (centre) · theme toggle + Contact CTA (right).
- **Nav links:** Services · Enterprise AI · Platforms · Industries · About.
- **About** is a dropdown menu (Company · Partnerships · Careers · FAQs · Customer Stories).
- **Contact CTA:** gold-fill primary button (`Button` `primary` variant).
- **Mobile:** hamburger → full-screen overlay `--bg-elevated` with gold accents. One-level link list with About expanded.
- **Active state:** current section link gets `--gold-primary` text colour.

### `Footer`

<!-- LOC: GULF-ADAPT -->

- **Background:** `--bg-surface`.
- **Layout:** 3 columns (desktop), stacked (mobile).
  - Col 1 — sitemap links grouped by section.
  - Col 2 — Contact (Dubai office address · UAE phone · WhatsApp · email · business hours).
  - Col 3 — Social (LinkedIn) · partner badges · ISO/PDPL badges.
- **Bottom strip:** copyright · Privacy Policy · Terms · "Made for the Gulf".
- **UAE PDPL** line in the bottom strip if applicable (LOC: GULF-NEW).

### `WhatsAppFAB`

<!-- LOC: GULF-NEW -->

- **Position:** fixed, `bottom: 24px; right: 24px;` (desktop); `bottom: 16px; right: 16px;` (mobile).
- **Visible on:** every page including 404.
- **Colour:** `--whatsapp-green` (`#25D366`) — the documented palette exception.
- **Size:** `56px × 56px` desktop, `48px × 48px` mobile. Tap target ≥ 44px.
- **Link:** `https://wa.me/<placeholder>?text=<URL-encoded message>` per `LOCALIZATION.md`.
- **Hover:** brightness `+10%` + subtle glow.
- **Accessibility:** `aria-label="Chat on WhatsApp"`, `role="button"`. Visible focus ring.
- **Reduced motion:** no pulse animation when `prefers-reduced-motion: reduce`.

### `ThemeToggle`

<!-- LOC: UNIVERSAL -->

- **Position:** in NavBar, immediately before the Contact CTA.
- **Icon:** sun (light theme) / moon (dark theme).
- **Behaviour:** reads `localStorage["tks-theme"]` on mount; toggles `data-theme` attribute on `<html>`; persists choice.
- **No flash:** see `DESIGN.md` for the inline `<head>` script that sets initial theme.

---

## Primitives

### `Button`

<!-- LOC: UNIVERSAL -->

Variants:

- `primary` — gold fill (`--gold-primary`), dark text, 4–6px radius. Hover → `--gold-light`. **No scale transform on hover.**
- `secondary` — transparent fill, 1px `--gold-primary` border, gold text. Hover → gold-dim fill.
- `ghost` — text only with trailing `→` arrow icon. Hover → underline + arrow nudges right `4px`.

Sizes: `md` (default, `12px 24px` padding) · `sm` (`8px 16px`). No XL.

### `Card`

<!-- LOC: UNIVERSAL -->

Base: `--bg-surface` background, 1px `--border-subtle` border, `20px 24px` padding, no shadow.

Variants:

- `glass` — applies `backdrop-filter: blur(12px); background: var(--bg-glass);`
- `gold-accent` — left border `2px solid var(--gold-primary)` plus subtle `glow-gold`.
- `teal-accent` — left border `2px solid var(--teal-primary)` plus subtle `glow-teal`.

Hover: border colour → `--border-default`, glow pulse `200ms ease`.

### `Tag`

- `font-size: 12px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase;`
- 1px coloured border (gold or teal), `4px 10px` padding.

### `SectionHeader`

- Overline label (uppercase, tracked, `--gold-primary` or `--teal-primary`).
- Syne heading (`h2` scale).
- Optional subtext (`body-lg`, `--text-secondary`).
- Always left-aligned.

### `Divider`

- 1px line, `--border-default`, or gold-gradient variant (`linear-gradient(90deg, transparent, var(--gold-primary), transparent)`).

---

## Page-Specific Components

### `HeroSection`

<!-- LOC: GULF-ADAPT -->

- Full-viewport on desktop (`min-height: calc(100vh - <nav height>)`).
- Background: `--bg-base` with subtle dot-grid + SVG noise grain overlay.
- Layout: left-aligned headline + subhead + CTA stack on left half; optional visual (geometric / abstract) on right.
- Animation: staggered fade-up (`0ms / 150ms / 300ms`).
- Honours reduced motion.

### `ServiceCard`

- Icon (top-left) + Syne `h3` title + 2-line description.
- Hover: teal glow + border brighten.
- Variant for product-card includes a "Learn more →" `ghost` link.

### `CaseStudyCard`

- Client logo (top) or industry tag if anonymised.
- 1-line challenge snippet.
- Large outcome number in `--gold-primary` (e.g., `22%` claim TAT reduction).
- Click → `/about/customer-stories#<slug>` (no separate detail pages in MVP).

### `TestimonialBlock`

- Pull-quote with leading gold opening quote-mark glyph.
- Name + company + role below.
- **No avatar photo unless real, cleared image is provided.** If missing, leave space blank.

### `StatBand`

- Horizontal band, `--bg-elevated`.
- 3–4 large gold numbers + label in DM Sans `body-sm` underneath.
- Used on Home and any product page that has metrics.

### `ProcessTimeline`

- Horizontal numbered stepper desktop, vertical stack mobile.
- Each step: number badge (gold-dim circle with `--gold-primary` number) + Syne title + 1-sentence description.

### `ContactForm`

- Fields: Full name · Company · Email · Phone (optional, with country code default `+971`) · Message · Budget (dropdown: <50k / 50–150k / 150–500k / 500k–1M / 1M+ USD or AED equivalent).
- Submit button: `Button` `primary`.
- Inline validation; success state replaces form with confirmation card.
- Honeypot field for spam.
- Submission endpoint: `<!-- CONTENT MISSING: form handler URL -->`

### `IntegrationsStrip`

- Horizontal logo strip of supported integrations on product pages.
- Greyscale by default, colour on hover.
- Manually controlled — no auto-scroll.

### `RiskControlMatrix` (TicketIQ-specific)

- 3-column table: Risk tier · Action class · Approval flow.
- Used only on `TICKET_IQ.md` page (deal-maker visual per source PDF).

---

## Component Hierarchy Reference

```
App
├── Layout
│   ├── NavBar
│   ├── <Outlet />          ← page content
│   ├── Footer
│   └── WhatsAppFAB
└── routes
    ├── /                   → HomePage  (HeroSection + ServiceCards + …)
    ├── /services           → ServicesIndexPage
    ├── /services/:slug     → ServiceDetailPage
    ├── /enterprise-ai      → EnterpriseAIIndexPage
    ├── /enterprise-ai/:slug → ProductDetailPage
    ├── /platforms          → PlatformsIndexPage
    ├── /platforms/:slug    → PlatformDetailPage
    ├── /industries         → IndustriesIndexPage
    ├── /industries/:slug   → IndustryDetailPage
    ├── /about              → AboutCompanyPage
    ├── /about/partnerships → PartnershipsPage
    ├── /about/careers      → CareersPage
    ├── /about/faqs         → FAQsPage
    ├── /about/customer-stories → CustomerStoriesPage
    ├── /contact            → ContactPage
    └── *                   → NotFoundPage
```
