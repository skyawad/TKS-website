# Contact — Content Spec

**Source DOCX:** `About Us/FAQs.docx` (Contact-Us FAQs section), plus playbook §2.5 LOCALIZATION.md rules.
**Localization status:** GULF-ADAPT + GULF-NEW pass complete. Multiple `[CONTENT MISSING]` placeholders awaiting real contact data.
**Last synced:** 2026-05-18

---

## SECTION: Hero

<!-- LOC: GULF-ADAPT -->

### Headline
Let's build together

### Subheadline
Tell us about your challenge. We'll tell you exactly how we'd approach it — within one business day, Sun–Thu.

### CTA Button 1
Send a Message → `#contact-form` (scrolls to form below)

### CTA Button 2
Chat on WhatsApp → `https://wa.me/<!-- CONTENT MISSING: 971XXXXXXXXX -->?text=Hi%20Techknomatic%2C%20I%27d%20like%20to%20discuss%20...`

---

## SECTION: Contact Form

<!-- LOC: UNIVERSAL -->

### Form fields

| Field         | Type            | Required | Notes                                                                              |
|---------------|-----------------|----------|------------------------------------------------------------------------------------|
| Full name     | text            | yes      | placeholder: "First and last name"                                                 |
| Company       | text            | yes      |                                                                                    |
| Work email    | email           | yes      | reject generic free-email domains in client-side hint, do not hard-block server-side |
| Phone         | tel             | no       | default country code `+971`                                                       |
| Country       | select          | no       | UAE / Saudi Arabia / Bahrain / Kuwait / Qatar / Oman / Other GCC / Other           |
| Service of interest | select    | no       | Business Analytics / Data Engineering / Data & AI Strategy / Geospatial / Managed Services / Enterprise AI / Platform / Other |
| Budget range  | select          | no       | < 50k USD / 50–150k / 150–500k / 500k–1M / 1M+ / Discuss                          |
| Message       | textarea        | yes      | min 20 chars                                                                       |
| Honeypot      | hidden text     | n/a      | bot guard                                                                          |

### Submit button
Send Message — `Button` `primary` variant.

### Success state
Replace the form with a confirmation card: "Thank you. A member of the Gulf team will respond within one business day, Sun–Thu (GST)."

### Endpoint
`<!-- CONTENT MISSING: form handler URL (e.g. Formspree / custom Azure Function / HubSpot endpoint) -->`

---

## SECTION: Dubai Office

<!-- LOC: GULF-NEW -->

### Heading
Dubai office

### Address
`<!-- CONTENT MISSING: full Dubai office address — e.g. "Dubai Internet City, Building XX, Floor X, Dubai, UAE" -->`

### Google Maps embed
`<!-- CONTENT MISSING: Google Maps embed URL for the office -->`

### Visit-by-appointment note
Visits by appointment only. Please request a time via the form above or WhatsApp.

---

## SECTION: Phone & WhatsApp

<!-- LOC: GULF-NEW -->

### UAE phone
`<!-- CONTENT MISSING: UAE phone in +971-XX-XXX-XXXX format -->`

### WhatsApp
`<!-- CONTENT MISSING: WhatsApp number in +971XXXXXXXXX format (no spaces or dashes for wa.me link) -->`

### WhatsApp shortcut
[Chat on WhatsApp →](https://wa.me/<!-- CONTENT MISSING -->)

---

## SECTION: Business Hours

<!-- LOC: GULF-NEW -->

Sun–Thu, 09:00–18:00 GST (UTC+4).
Closed Friday and Saturday.

---

## SECTION: Response Time Expectation

<!-- LOC: GULF-ADAPT -->

We respond to all enquiries within one business day, Sun–Thu.
Urgent matters: WhatsApp delivers the fastest response.

---

## SECTION: Regional Contacts

<!-- LOC: GULF-NEW -->

### UAE (in-region)
- **Apoorva Gowda** — Sales Manager, UAE.
  `<!-- CONTENT MISSING: direct email and/or LinkedIn URL -->`
- **Arup Saroji** — Strategy Consultant, UAE.
  `<!-- CONTENT MISSING: confirm correct name spelling vs. About docx, plus direct email -->`

### Regional Partners

- **Aintisar Technologies (UAE)** — business development and client execution.
- **Primer Trading (Oman)** — market engagement and solution delivery.
- **Inspirational Global (USA)** — go-to-market and solution expansion.

`<!-- CONTENT MISSING: partner-side contact emails or web URLs -->`

---

## SECTION: Career / Talent Enquiries

<!-- LOC: GULF-ADAPT -->

For career enquiries, please email **careers@techknomatic.com** or visit `/about/careers`.

---

## SECTION: CTA Banner

<!-- LOC: GULF-ADAPT -->

### Heading
Prefer WhatsApp? So do we.

### Sub-line
Send us a message — we'll reply with a real human, fast.

### CTA Button 1
Chat on WhatsApp → `https://wa.me/<!-- CONTENT MISSING -->?text=Hi%20Techknomatic%2C%20I%27d%20like%20to%20discuss%20...`

### CTA Button 2
Send a Message → `#contact-form` (scrolls to form above)
