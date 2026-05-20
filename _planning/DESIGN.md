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
