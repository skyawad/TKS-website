# Pages — Site Map, Sections, and Build Priority

> **Authoritative routing + section map for the Techknomatic Gulf site. Matches `treemap.png` provided by stakeholder.**

---

## Site Map

<!-- LOC: UNIVERSAL -->

```
/                                       Home
/services                               Services index (5-card grid)
  /services/business-analytics          Business Analytics (was "BI Services" in source PDF)
  /services/data-engineering            Data Engineering
  /services/data-ai-strategy            Data & AI Strategy
  /services/geospatial-analytics        Geospatial Analytics
  /services/managed-services            Managed IT Services
/enterprise-ai                          Enterprise AI index (4-card grid)
  /enterprise-ai/assist-iq              AssistIQ
  /enterprise-ai/ticket-iq              TicketIQ
  /enterprise-ai/callops-ai             CallOps AI
  /enterprise-ai/cxo-nexus              CXO Nexus
/platforms                              Platforms index (4-card grid)
  /platforms/insight-sm                 InsightSM
  /platforms/datapulse-iq               DataPulseIQ
  /platforms/parse-iq                   ParseIQ
  /platforms/freight-iq                 FreightIQ
/industries                             Industries index (4-tile grid)
  /industries/oil-and-gas               Oil & Gas
  /industries/insurance                 Insurance
  /industries/tech-it-services          Tech & IT Services (ITSM)
  /industries/manufacturing             Manufacturing
/about                                  About — Company & Team
  /about/partnerships                   Partnerships (Qlik / Esri / Microsoft + regional)
  /about/careers                        Careers
  /about/faqs                           FAQs
  /about/customer-stories               Customer Stories
/contact                                Contact
```

**404 page:** dark theme, gold heading, link back to `/`.

---

## Navigation Structure

<!-- LOC: GULF-ADAPT -->

### Primary nav (desktop)

Logo (left) · **Services · Enterprise AI · Platforms · Industries · About** (centre) · **Theme toggle · Contact CTA** (right)

- "About" is a dropdown that lists: Company · Partnerships · Careers · FAQs · Customer Stories.
- "Contact" is the gold-fill primary button.
- Theme toggle is a small icon button (sun/moon).

### Mobile nav

- Hamburger icon → full-screen overlay (`--bg-elevated`) with gold accents.
- One-level link list with About expanded inline.
- WhatsApp FAB stays visible above the overlay (or moves to the top of the overlay when open).

---

## Build Priority (Phase 3 sequence)

<!-- LOC: UNIVERSAL -->

Build pages in this order to maximise conversion paths landing earliest:

1. **Home** — establishes design, brand, IA.
2. **Services index** + 5 service detail pages.
3. **Contact** — the conversion endpoint; needs to exist before any service page links to it.
4. **About — Company** — trust layer.
5. **Enterprise AI index** + 4 product pages.
6. **Platforms index** + 4 platform pages.
7. **Industries index** + 4 industry pages.
8. **About — Partnerships, Careers, FAQs, Customer Stories.**

After all pages: Phase 4 QA, Phase 5 Gulf review.

---

## Page Section Maps

### Home — `/`

<!-- LOC: GULF-ADAPT -->

- [ ] NavBar (shared)
- [ ] Hero — headline · subheadline · dual CTA ("Start a Conversation" + "Explore Our Work") · trust bar
- [ ] Services Overview — 5-card grid (one per `/services/*`) with teal/gold accents
- [ ] Enterprise AI Spotlight — 4-card grid linking to `/enterprise-ai/*`
- [ ] Platforms Spotlight — 4-card grid linking to `/platforms/*`
- [ ] Industries We Serve — 4 tiles (BFSI/Insurance first)
- [ ] Why Techknomatic for the Gulf — 4-up differentiator band
- [ ] Trust Band — OEM partner logos (Qlik / Esri / Microsoft) + certification placeholders
- [ ] Case Study Teaser — 1–2 featured outcomes
- [ ] CTA Banner — "Start a conversation" → /contact
- [ ] Footer (shared)
- [ ] WhatsApp FAB (shared, every page)

### Services — `/services`

- [ ] Page Hero — category headline · subhead · trust bar
- [ ] Service Grid — 5 cards linking to each `/services/*` detail
- [ ] Shared 5-step delivery framework (Assess → Architect → Build → Deploy → Optimise)
- [ ] CTA Banner

### Services — Each detail page (5 of them)

Standard template per playbook §2.2:

- [ ] Hero — headline · subhead · dual CTA
- [ ] Problem statement (1 short paragraph)
- [ ] What We Offer — capability grid (5–6 cards)
- [ ] Tools & Tech (icon strip / table)
- [ ] Our Approach — 5-step horizontal stepper
- [ ] Why Techknomatic — 6 differentiators
- [ ] Use Cases — 3–5 cards
- [ ] CTA Banner

### Enterprise AI — `/enterprise-ai`

- [ ] Page Hero
- [ ] 4-card product grid
- [ ] "Why our agents" shared section (regulated, audit-ready, production-grade)
- [ ] CTA

### Enterprise AI — Each detail page (4 of them)

Standard product template per source PDFs:

- [ ] Hero — tagline · supporting line · dual CTA
- [ ] Problem statement
- [ ] Capabilities grid (6–8 cards)
- [ ] Industries we serve (5–7 tiles)
- [ ] Architecture / How It Works (5–6 stage horizontal flow)
- [ ] Integrations (logo strip)
- [ ] Use Cases (5–7 cards)
- [ ] CTA Banner

### Platforms — `/platforms`

- [ ] Page Hero
- [ ] 4-card platform grid
- [ ] CTA

### Platforms — Each detail page (4 of them)

Same product template as Enterprise AI.

### Industries — `/industries`

- [ ] Page Hero
- [ ] 4-tile industry grid
- [ ] Shared "Cross-cutting capabilities" band (real-time analytics, integration with legacy systems, executive dashboards, compliance)
- [ ] CTA

### Industries — Each detail page (4 of them)

- [ ] Hero
- [ ] What We Solve — bullet list
- [ ] Analytics Modules — table or card grid
- [ ] Systems Integration / Location Intelligence callout
- [ ] Use Cases — 3 cards
- [ ] CTA Banner

### About — `/about` (Company)

- [ ] Hero — "Knowledge & Experience" rewrite for Gulf
- [ ] What Makes Us Different — 3 differentiator cards
- [ ] Our Culture & Values — 4 value tiles (Integrity / Ethics / Inclusion / Innovation)
- [ ] Life at Techknomatic — image carousel (manual nav, not auto-play)
- [ ] Leadership & Team — grid (UAE-based members named first)
- [ ] CTA — "Let's Build Together" → /contact

### About — `/about/partnerships`

- [ ] Hero — "Collaborative Growth"
- [ ] OEM Alliances — 3 cards (Qlik / Esri / Microsoft)
- [ ] Global Network — 3 regional partners (Primer Oman, Aintisar UAE, Inspirational Global USA)
- [ ] CTA

### About — `/about/careers`

- [ ] Hero — "Build a Career Where Data Drives Real-World Impact"
- [ ] Why High-Performers Choose Techknomatic — 6 value props
- [ ] How We Work — 4 culture pillars
- [ ] Growth Paths — Freshers / Mid / Experienced
- [ ] We Invest in Your Growth — 4 cards
- [ ] Current Opportunities — 3+ open roles
- [ ] Hiring Process — 5 steps
- [ ] CTA — careers@techknomatic.com

### About — `/about/faqs`

- [ ] Hero
- [ ] Engagement & Services FAQs (10 questions)
- [ ] Careers FAQs (15 questions)
- [ ] CTA

### About — `/about/customer-stories`

- [ ] Hero — "Outcomes we've delivered"
- [ ] 5 case-study cards (anonymised, with quantified outcomes once collected)
- [ ] CTA

### Contact — `/contact`

- [ ] Hero — "Let's Build Together"
- [ ] Contact form (name / company / email / message / budget)
- [ ] Dubai office card + Google Maps embed
- [ ] UAE phone + WhatsApp (large, click-to-action)
- [ ] Business hours (Sun–Thu, GST)
- [ ] Response-time expectation
- [ ] Regional contact list (UAE: Apoorva Gowda + Arup Saroji; partners: Aintisar UAE / Primer Oman / Inspirational Global USA)
- [ ] CTA banner with WhatsApp shortcut
