# Content Index — Master Cross-Reference

> **Single source of truth: every page, every section, mapped to its content file, source PDF, LOC tag, and status.**

Legend: ✅ = ready · ⚠️ = partial, needs editing pass · 🚧 = `[CONTENT MISSING]` block awaiting human input.

---

## 1. Top-Level Pages

| Route                  | File                                         | Status | Source                                          |
|------------------------|----------------------------------------------|--------|-------------------------------------------------|
| `/`                    | `content/HOME.md`                            | ✅      | Composed from all source material                |
| `/contact`             | `content/CONTACT.md`                         | 🚧      | UAE phone, WhatsApp, address are placeholder    |

## 2. Services (5 detail pages)

| Route                                  | File                                       | Status | Source PDF                                                |
|----------------------------------------|--------------------------------------------|--------|-----------------------------------------------------------|
| `/services`                            | `content/services/INDEX.md`                | ✅      | Composed                                                  |
| `/services/business-analytics`         | `content/services/BUSINESS_ANALYTICS.md`   | ✅      | `TKS Services/BI_Services_Website_Content v2.0.pdf`       |
| `/services/data-engineering`           | `content/services/DATA_ENGINEERING.md`     | ✅      | `TKS Services/DE website content v1.0 (1).pdf` (OCR'd)    |
| `/services/data-ai-strategy`           | `content/services/DATA_AI_STRATEGY.md`     | ✅      | `TKS Services/AI and Data Strategy Website Content.pdf`   |
| `/services/geospatial-analytics`       | `content/services/GEOSPATIAL.md`           | ✅      | `TKS Services/Geospatial Website Content.pdf`             |
| `/services/managed-services`           | `content/services/MANAGED_SERVICES.md`     | ✅      | `TKS Services/Managed_Services_Website_Content.pdf`       |

## 3. Enterprise AI (4 detail pages)

| Route                                  | File                                       | Status | Source PDF                                                |
|----------------------------------------|--------------------------------------------|--------|-----------------------------------------------------------|
| `/enterprise-ai`                       | `content/enterprise-ai/INDEX.md`           | ✅      | Composed                                                  |
| `/enterprise-ai/assist-iq`             | `content/enterprise-ai/ASSIST_IQ.md`       | ✅      | `Enterprise AI/AssistIQ_Website_Content.pdf`              |
| `/enterprise-ai/ticket-iq`             | `content/enterprise-ai/TICKET_IQ.md`       | ✅      | `Enterprise AI/TicketIQ_Website_Content.pdf`              |
| `/enterprise-ai/callops-ai`            | `content/enterprise-ai/CALLOPS_AI.md`      | ✅      | `Enterprise AI/CallOps_AI_Website_Content 1.pdf`          |
| `/enterprise-ai/cxo-nexus`             | `content/enterprise-ai/CXO_NEXUS.md`       | ✅      | `Enterprise AI/CXO_Nexus_Website_Content.pdf`             |

## 4. Platforms (4 detail pages)

| Route                                  | File                                       | Status | Source PDF                                                |
|----------------------------------------|--------------------------------------------|--------|-----------------------------------------------------------|
| `/platforms`                           | `content/platforms/INDEX.md`               | ✅      | Composed                                                  |
| `/platforms/insight-sm`                | `content/platforms/INSIGHT_SM.md`          | ✅      | `Platforms/InsightSM_Website_Content.pdf`                 |
| `/platforms/datapulse-iq`              | `content/platforms/DATAPULSE_IQ.md`        | ✅      | `Platforms/DataPulseIQ_Website_Content.pdf`               |
| `/platforms/parse-iq`                  | `content/platforms/PARSE_IQ.md`            | ✅      | `Platforms/ParseIQ (1).pdf` (OCR'd)                        |
| `/platforms/freight-iq`                | `content/platforms/FREIGHT_IQ.md`          | ✅      | `Platforms/FreightIQ_Website_Content.pdf`                 |

## 5. Industries (4 detail pages)

| Route                                  | File                                       | Status | Source PDF                                                |
|----------------------------------------|--------------------------------------------|--------|-----------------------------------------------------------|
| `/industries`                          | `content/industries/INDEX.md`              | ✅      | Composed                                                  |
| `/industries/oil-and-gas`              | `content/industries/OIL_AND_GAS.md`        | 🚧      | `Industries/Techknomatic_Industry_Pages 1.pdf` — outcome %s missing |
| `/industries/insurance`                | `content/industries/INSURANCE.md`          | ⚠️      | Same source — only Insurance has 22% TAT outcome confirmed |
| `/industries/tech-it-services`         | `content/industries/TECH_IT_SERVICES.md`   | 🚧      | Same source — outcome %s missing                          |
| `/industries/manufacturing`            | `content/industries/MANUFACTURING.md`      | 🚧      | Same source — outcome %s missing                          |

## 6. About (5 sub-pages)

| Route                                  | File                                       | Status | Source DOCX                                               |
|----------------------------------------|--------------------------------------------|--------|-----------------------------------------------------------|
| `/about`                               | `content/about/COMPANY.md`                 | ⚠️      | `About Us/Techknomatic_About.docx` (name-spelling flag)   |
| `/about/partnerships`                  | `content/about/PARTNERSHIPS.md`            | ✅      | `About Us/Techknomatic_Partnerships.docx`                 |
| `/about/careers`                       | `content/about/CAREERS.md`                 | ✅      | `About Us/Techknomatic_Careers.docx`                      |
| `/about/faqs`                          | `content/about/FAQS.md`                    | ✅      | `About Us/FAQs.docx`                                      |
| `/about/customer-stories`              | `content/about/CUSTOMER_STORIES.md`        | 🚧      | `About Us/Customer Stories.docx` — quantified outcomes missing |

---

## Open Items (consolidated)

1. 🚧 UAE phone, WhatsApp, Dubai office address — placeholders throughout. Replace before launch.
2. 🚧 5 customer-story outcome metrics — collect from sales/delivery teams.
3. 🚧 4 industry use-case outcome percentages — collect from delivery team.
4. 🚧 Form submission endpoint URL on `/contact`.
5. 🚧 Google Maps embed URL for Dubai office on `/contact`.
6. 🚧 Founded-in-region year for "Since [year]" trust line.
7. ⚠️ One leadership-name spelling discrepancy on `/about` (Arup Saroji vs Anup Sangli).
8. ⚠️ Manufacturing customer story set in India — playbook prohibits India in positioning. Confirm re-anonymisation strategy.
9. ⚠️ ISO/PDPL/GDPR certification list and valid-through dates not yet finalised in `BRAND.md`.

---

## LOC Tag Distribution (estimate after Phase 0 writes)

| Tag             | Approx. share | Where it lives most                                               |
|-----------------|--------------|-------------------------------------------------------------------|
| `UNIVERSAL`     | ~45%         | Capability cards, architecture diagrams, integration lists        |
| `GULF-ADAPT`    | ~40%         | Heroes, CTAs, "Why Techknomatic" sections, industry framing       |
| `GULF-NEW`      | ~15%         | Contact info, Dubai office, WhatsApp, ADGM/DIFC mentions, PDPL    |

Run `Select-String "<!-- LOC: " _planning\content -Recurse -Filter *.md | Group-Object Line | Sort Count -desc` to verify after writes complete.
