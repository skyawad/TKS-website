# Customer Stories — Content Spec

**Source DOCX:** `About Us/Customer Stories.docx` (5 anonymised stories — outcomes are qualitative; quantified metrics not yet provided).
**Page URL:** `/about/customer-stories`
**Localization status:** GULF-ADAPT + GULF-NEW pass complete. **Every quantified outcome is `<!-- CONTENT MISSING -->` until sales team provides real metrics.**
**Open issue:** Story 5 (Manufacturing — India) conflicts with `LOCALIZATION.md` rule against India-positioning copy. See "Open items" below.
**Last synced:** 2026-05-18

---

## SECTION: Hero

<!-- LOC: GULF-ADAPT -->

### Section overline
CUSTOMER STORIES

### Headline (H1)
Outcomes we've delivered for enterprises in the Gulf and beyond

### Sub-hero
Five anonymised programs spanning insurance, ITSM, data warehousing, logistics, and manufacturing — across Oman, the UAE, the wider GCC, and India delivery.

### CTA Button 1
Start a Conversation → `/contact`

### CTA Button 2
Explore Industries → `/industries`

---

## SECTION: Stories

<!-- LOC: GULF-ADAPT -->

### Card 1 — Insurance Analytics Transformation (Oman)  `id="insurance-oman"`

**Industry:** Insurance
**Region:** Oman
**Challenge:** Fragmented reporting across claims, branch performance, and policy operations.
**Solution:** A centralised analytics ecosystem with executive dashboards, claims insights, branch performance monitoring, and policy analytics.
**Outcome (qualitative):** Faster decision-making and improved operational visibility.
**Outcome (quantified):** `<!-- CONTENT MISSING: claim TAT % reduction · decision-time reduction · branch coverage uplift -->`
*Related:* `/industries/insurance` · `/services/business-analytics` · `/services/geospatial-analytics`.

---

### Card 2 — Smart ITSM Command Center (Middle East)  `id="itsm-middle-east"`

**Industry:** Tech & IT Services (ITSM)
**Region:** Middle East
**Challenge:** Manual operational reporting, fragmented SLA tracking, slow escalations.
**Solution:** An intelligent ITSM analytics platform with SLA monitoring, ticket-trend analysis, escalation tracking, and a single command-center dashboard.
**Outcome (qualitative):** Significantly improved service visibility and operational efficiency.
**Outcome (quantified):** `<!-- CONTENT MISSING: SLA breach % reduction · MTTR improvement · service-desk cost saving -->`
*Related:* `/industries/tech-it-services` · `/platforms/insight-sm` · `/enterprise-ai/ticket-iq`.

---

### Card 3 — Enterprise Data Warehouse Modernisation (UAE)  `id="dw-uae"`

**Industry:** Multi-industry / Data Engineering
**Region:** UAE
**Challenge:** Siloed ERP and business systems, slow analytics, governance gaps.
**Solution:** A scalable cloud-ready data warehouse integrating multiple ERP and business systems, enabling unified reporting and improved data governance.
**Outcome (qualitative):** Faster analytics, unified reporting, improved governance across departments.
**Outcome (quantified):** `<!-- CONTENT MISSING: time-to-insight improvement · governance maturity score · cost-to-insight reduction -->`
*Related:* `/services/data-engineering` · `/services/business-analytics`.

---

### Card 4 — Logistics & Freight Intelligence Platform (GCC)  `id="freight-gcc"`

**Industry:** Logistics & Freight
**Region:** GCC
**Challenge:** No shipment visibility, manual pricing, weak leadership dashboards.
**Solution:** A freight analytics and pricing intelligence solution providing real-time shipment visibility, pricing optimisation, route performance analysis, and leadership dashboards.
**Outcome (qualitative):** Better operational visibility and decision speed.
**Outcome (quantified):** `<!-- CONTENT MISSING: quote-cycle time reduction · margin uplift · shipment cost saving -->`
*Related:* `/platforms/freight-iq` · `/services/business-analytics`.

---

### Card 5 — Manufacturing Performance Analytics  `id="manufacturing"`

> **🚩 Open issue:** The source DOCX places this story in India. Per `_planning/LOCALIZATION.md`, India should not appear in Gulf-site positioning copy. **Resolve before publishing:** either (a) re-anonymise as "South Asia" / "regional enterprise", (b) replace with a Gulf-region manufacturing story if sales can provide one, or (c) omit from this page entirely. Flagged for stakeholder review.

**Industry:** Manufacturing
**Region:** `<!-- CONTENT MISSING: confirm re-anonymisation — South Asia / regional / replace with Gulf story -->`
**Challenge:** No real-time production insight, fragmented plant data, lagging executive reports.
**Solution:** A real-time production and operational analytics platform integrating plant data, quality systems, and ERP — improving monitoring, operational efficiency, and executive reporting.
**Outcome (qualitative):** Better monitoring, operational efficiency, and executive reporting.
**Outcome (quantified):** `<!-- CONTENT MISSING: OEE improvement · downtime reduction · production yield uplift -->`
*Related:* `/industries/manufacturing` · `/services/business-analytics` · `/services/data-engineering`.

---

## SECTION: CTA Banner

<!-- LOC: GULF-ADAPT -->

### Headline (H2)
Your outcome is the next case study

### Sub-line
Tell us about your challenge. We'll tell you exactly how we'd approach it.

### CTA Button 1
Start a Conversation → `/contact`

### CTA Button 2
Chat on WhatsApp → `https://wa.me/<!-- CONTENT MISSING -->`

---

## Open Items

1. **Quantified outcomes missing on all 5 stories.** Action: sales/delivery team to provide concrete metrics (% TAT reduction, $ saved, time-to-insight). Replace every `<!-- CONTENT MISSING -->` marker before launch.
2. **Story 5 location.** Action: confirm whether to re-anonymise (preferred), replace with a Gulf-region story, or omit. Do not publish India-positioning copy on the Gulf site.
3. **Client confidentiality.** Confirm with sales which clients have approved being named (even partially / by region). If none, retain anonymisation.
4. **Per-story detail pages** are not in MVP scope. Section anchors (`#insurance-oman`, `#itsm-middle-east`, etc.) link from Home and individual product/industry pages.

---

## Developer Notes

- **Stat band** (gold numbers, DM Sans labels) per story once outcomes are quantified — strongest credibility surface on the page.
- **Schema:** consider `Article` schema per story when outcomes are confirmed.
- **CTA tracking:** `cta_hero_stories`, `cta_footer_stories`.
