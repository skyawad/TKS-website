/**
 * Single source of truth for Gulf contact information.
 *
 * Every value flagged `// CONTENT MISSING` is a placeholder awaiting real
 * input from the stakeholder per _planning/LOCALIZATION.md §"Contact
 * Information Checklist". To find them before launch:
 *
 *     grep -r "CONTENT MISSING" src/
 *
 * Do NOT inline these strings anywhere else in the app — import from here.
 */

export interface ContactInfo {
  /** UAE phone in display format: +971-XX-XXX-XXXX */
  readonly phoneDisplay: string;
  /** UAE phone in tel:-link format: +971XXXXXXXXX (digits only, with leading +) */
  readonly phoneTel: string;
  /** WhatsApp number in wa.me format: 971XXXXXXXXX (digits only, NO + sign) */
  readonly whatsappNumber: string;
  /** WhatsApp number in display format: +971-XX-XXX-XXXX */
  readonly whatsappDisplay: string;
  /** Business email on the Techknomatic domain */
  readonly email: string;
  /** Careers email */
  readonly careersEmail: string;
  /** Dubai office full address — multiline-safe */
  readonly dubaiOffice: string;
  /** Google Maps embed src URL for the Dubai office */
  readonly mapsEmbedSrc: string;
  /** Business hours display string in GST (UTC+4) */
  readonly businessHours: string;
}

export const CONTACT: ContactInfo = {
  // CONTENT MISSING: real UAE phone number — replace before launch.
  phoneDisplay: "+971-XX-XXX-XXXX",
  phoneTel: "+971000000000",

  // CONTENT MISSING: real WhatsApp number — replace before launch.
  // Format is digits only for wa.me, leading 971 (no + sign, no dashes).
  whatsappNumber: "971000000000",
  whatsappDisplay: "+971-XX-XXX-XXXX",

  // CONTENT MISSING: real business email on Techknomatic domain.
  email: "hello@techknomatic.com",
  careersEmail: "careers@techknomatic.com",

  // CONTENT MISSING: real Dubai office address.
  dubaiOffice: "Dubai Internet City, Building XX, Floor X, Dubai, UAE",

  // CONTENT MISSING: real Google Maps embed src for Dubai office.
  // Format: https://www.google.com/maps/embed?pb=!1m18!1m12!...
  mapsEmbedSrc: "",

  businessHours: "Sun–Thu · 09:00–18:00 GST (UTC+4)",
} as const;
