# Localization — Gulf Rules

> **Every content block on the Gulf site is tagged with one of three LOC tags. This file is the source of truth for the rules.**

---

## LOC Tag Definitions

<!-- LOC: UNIVERSAL -->

Each `<!-- LOC: ... -->` comment above a content block means:

- `<!-- LOC: UNIVERSAL -->` — Methodology, technical capability descriptions, architecture diagrams, integration lists, generic product capabilities. **~45%** of total content. These blocks are copy-paste-safe from the source PDFs.
- `<!-- LOC: GULF-ADAPT -->` — Then-copy (hero, sub-heads, CTAs), service positioning, trust signals, industry prioritisation, outcome framing. **~40%** of total content. Reworded for Gulf audience: never use banned words, prefer Gulf phrases, lead with regulated-industry use cases.
- `<!-- LOC: GULF-NEW -->` — Content that exists only on the Gulf site: Dubai office address, UAE phone, WhatsApp, GST business hours, regional partner mentions, ADGM/DIFC/Vision 2030 references, UAE PDPL disclosures. **~15%** of total content.

---

## Language & Tone — Gulf B2B Writing Rules

<!-- LOC: GULF-ADAPT -->

1. **"UAE" vs "Dubai" vs "GCC"** — Use **UAE** for national context (regulators, country-level claims). Use **Dubai** for office locations only. Use **GCC** for regional scope (UAE + Saudi + Bahrain + Kuwait + Qatar + Oman).
2. **Avoid:** `cheap`, `affordable`, `cost-effective`.
   **Prefer:** `efficient`, `optimised`, `high-value`, `enterprise-grade`, `proven at scale`, `built for regulated industries`.
3. **Reference local context** where credible: **ADGM**, **DIFC**, **DMCC**, **UAE PDPL**, **Vision 2030** (Saudi), **UAE AI Strategy 2031**, **GST timezone (UTC+4)**.
4. **Never mention India in positioning copy.** It is an operational reality (delivery teams in India), not a brand identity for the Gulf site. Acceptable to reference India in *delivery footprint* lists alongside UAE / Oman / USA, but never as a positioning lever.
5. **Sentence cadence:** short, declarative, no marketing prose.

---

## CTA Copy Rules

<!-- LOC: GULF-ADAPT -->

| Use                                       | Don't use                  |
|-------------------------------------------|----------------------------|
| **Start a Conversation**                  | Get a Quote / Book a Demo  |
| **Explore Our Work**                      | See Portfolio              |
| **Chat on WhatsApp**                      | Message Us                 |
| **Talk to a Solution Expert**             | Contact Sales              |
| **Schedule a Discovery Session**          | Sign Up / Get Started      |
| **See It Live**                           | Try It Free                |

CTAs are always title-case verb phrases. Never end with an exclamation mark.

---

## WhatsApp Integration

<!-- LOC: GULF-NEW -->

WhatsApp is the default async channel in the Gulf. Treat it as a first-class CTA, not a footnote.

### Floating Action Button (FAB)

- **Position:** fixed bottom-right, `24px` from each edge on desktop, `16px` on mobile.
- **Visible on:** every page including 404.
- **Colour:** `#25D366` (WhatsApp green — palette exception, documented in `DESIGN.md`).
- **Icon:** official WhatsApp logo SVG (`role="img"`, `aria-label="Chat on WhatsApp"`).
- **Size:** `56px × 56px` desktop, `48px × 48px` mobile.
- **Tap target:** the button must be at least `44px × 44px` (WCAG / iOS HIG).
- **Hover state:** brightness `+10%` + subtle glow.

### Link format

```
https://wa.me/[PLACEHOLDER: 971XXXXXXXXX]?text=[encoded message]
```

### Pre-filled message templates

```
General:   "Hi Techknomatic, I'd like to discuss [services] for my business."
Services:  "Hi Techknomatic, I'm interested in your [service name] for [my industry]."
Demo:      "Hi Techknomatic, I'd like to see a live demo of [product name]."
```

URL-encode the message before appending. Each page can override the template to pre-fill page-specific context.

### Also display the WhatsApp number

- In the Footer (centre column).
- On `/contact` page header and contact card.
- On any product page's CTA banner (secondary line).

`<!-- CONTENT MISSING: real UAE WhatsApp number — placeholder +971XXXXXXXXX -->`

---

## Contact Information Checklist

<!-- LOC: GULF-NEW -->

- [ ] **UAE phone number** in `+971-XX-XXX-XXXX` format. `<!-- CONTENT MISSING -->`
- [ ] **WhatsApp number** (same as phone or dedicated). `<!-- CONTENT MISSING -->`
- [ ] **Dubai office address** with building and floor where applicable. `<!-- CONTENT MISSING -->`
- [ ] **Business hours** in GST (UTC+4): Sun–Thu, 09:00–18:00.
- [ ] **Business email** on a Techknomatic domain. `<!-- CONTENT MISSING -->`
- [ ] **Google Maps embed** for Dubai office. `<!-- CONTENT MISSING: maps URL -->`

---

## Arabic / RTL Scaffolding

<!-- LOC: UNIVERSAL -->

> **Arabic translations are Phase 6, post-launch.** Build the scaffold now so we don't repaint later.

### Mandatory CSS practices

- **Use logical properties** in every new component:
  ```css
  /* good */
  margin-inline-start: 24px;
  padding-inline-end: 16px;
  border-inline-start: 1px solid var(--border-subtle);

  /* bad */
  margin-left: 24px;
  padding-right: 16px;
  border-left: 1px solid var(--border-subtle);
  ```
- **Never hardcode `direction: ltr`** at component scope. Direction is set once on `<html>` via class toggle.
- **Never use `transform: scaleX(-1)` for RTL icons.** Use `[dir="rtl"] .icon-arrow { /* RTL variant */ }` instead.

### Font stack (Phase 6)

```css
@media (lang: ar) { /* or [lang="ar"] selector */
  --font-display: "Noto Sans Arabic", "IBM Plex Arabic", sans-serif;
  --font-body:    "Noto Sans Arabic", "IBM Plex Arabic", sans-serif;
}
```

### String externalisation

Every user-facing English string in `.tsx` files is annotated with `// i18n` so they are easy to extract later:

```tsx
<h1>{/* i18n */}Built for Gulf enterprises</h1>
```

---

## Regional Sensitivity

<!-- LOC: GULF-NEW -->

- **No political references** to specific country governments. Stay neutral on regional politics.
- **Ramadan window** — review any hero CTAs or campaign copy if launching close to Ramadan. Tone shifts to consultative, less urgent.
- **Workweek:** Sun–Thu is the working week in UAE. Friday–Saturday are weekend. "Response within 1 business day" reflects Sun–Thu, never "next business day" without context.
- **No India-flag, cricket, Bollywood, or saffron imagery** anywhere on the Gulf site.
- **Image stock:** prefer abstract geometric or real client photography (where rights cleared). No "happy diverse stock office".

---

## Trust Signals Specific to Gulf Audience

<!-- LOC: GULF-ADAPT -->

- ISO 27001 + UAE PDPL alignment badges.
- Government / semi-government client names where permission granted.
- Startup-program credentials (in5, Hub71) only if they help — drop if they signal "small".
- LinkedIn presence of founder/CEO matters more in Gulf than in India market. Link CEO LinkedIn from `/about`.
- "Since [year]" line only if Techknomatic has ≥3 years in-region. `<!-- CONTENT MISSING: founding-year-in-region -->`

---

## Privacy / Compliance Footnote

<!-- LOC: GULF-NEW -->

Footer and privacy policy must reference:

- **UAE PDPL** (Personal Data Protection Law) — `<!-- CONTENT MISSING: confirm compliance posture and disclosure language with legal -->`.
- **Data residency** options — UAE, EU, or customer-region per agreement.
- **GDPR alignment** for EU traffic.

---

## Localization Pass — When to Do It

Per playbook §1.4 and §5:

1. Extract content from source PDF verbatim into the per-page markdown file.
2. Tag every section with one of the three LOC tags.
3. **Tag first, adapt second.** Do not edit copy in the same pass as tagging.
4. After tagging, do a `GULF-ADAPT` pass: rewrite tagged blocks per the rules above.
5. After adapt, do a `GULF-NEW` pass: insert Gulf-only blocks (Dubai office, UAE phone, ADGM mentions).
6. Final check: every block in every file has exactly one LOC tag; no orphan blocks.
