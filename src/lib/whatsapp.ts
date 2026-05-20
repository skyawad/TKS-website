import { CONTACT } from "../data/contact";

/**
 * Build a wa.me deep link with a pre-filled message.
 *
 * Per _planning/LOCALIZATION.md:
 *   https://wa.me/<number-digits-only>?text=<URL-encoded message>
 *
 * Default message template comes from LOCALIZATION.md "Pre-filled message
 * templates · General".
 */
export function buildWhatsAppLink(message?: string): string {
  const text =
    message ??
    /* i18n */ "Hi Techknomatic, I'd like to discuss your services for my business.";
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;
}
