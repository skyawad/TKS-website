import type { ReactNode } from "react";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { Button } from "./Button";
import { buildWhatsAppLink } from "../lib/whatsapp";
import styles from "./PageCTA.module.css";

/** Re-exported for data files (src/data/service-detail.ts and product/platform shapes). */
export interface PageCTACtaSpec {
  readonly label: string;
  readonly to?: string;
  readonly href?: string;
}

export interface PageCTAProps {
  eyebrow?: string;
  headline: ReactNode;
  sub?: string;
  primary?: PageCTACtaSpec;
  secondary?: PageCTACtaSpec | null;
}

export function PageCTA({
  eyebrow,
  headline,
  sub,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary,
}: PageCTAProps) {
  const sec =
    secondary === null
      ? null
      : secondary ?? { label: "WhatsApp us", href: buildWhatsAppLink() };

  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h2 className={styles.headline}>{headline}</h2>
        {sub && <p className={styles.sub}>{sub}</p>}
        <div className={styles.actions}>
          {primary.to ? (
            <LocalizedLink to={primary.to}>
              <Button variant="primary" className={styles.primaryBtn}>{primary.label}</Button>
            </LocalizedLink>
          ) : (
            <a href={primary.href} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className={styles.primaryBtn}>{primary.label}</Button>
            </a>
          )}
          {sec && (
            <>
              {sec.to ? (
                <LocalizedLink to={sec.to} className={styles.secondaryLink}>
                  {sec.label}
                </LocalizedLink>
              ) : (
                <a
                  href={sec.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  {sec.label}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
