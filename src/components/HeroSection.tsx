import type { ReactNode } from "react";
import { Pill } from "./Pill";
import styles from "./HeroSection.module.css";

export interface HeroSectionProps {
  eyebrow?: ReactNode;
  headline: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  trust?: ReactNode;
  illustration?: ReactNode;
  /**
   * Headline scale. "default" matches Home (large punchy headline).
   * "compact" trims size for longer multi-line headlines on section indexes
   * and detail pages.
   */
  density?: "default" | "compact";
}

export function HeroSection({
  eyebrow,
  headline,
  lead,
  actions,
  trust,
  illustration,
  density = "default",
}: HeroSectionProps) {
  const headlineClass = density === "compact"
    ? `${styles.headline} ${styles.headlineCompact}`
    : styles.headline;
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          {eyebrow && (
            <div className={styles.eyebrow}>
              {typeof eyebrow === "string" ? <Pill variant="brand">{eyebrow}</Pill> : eyebrow}
            </div>
          )}
          <h1 className={headlineClass}>{headline}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
          {actions && <div className={styles.actions}>{actions}</div>}
          {trust && <div className={styles.trust}>{trust}</div>}
        </div>
        {illustration && (
          <div className={styles.illustration} aria-hidden="true">
            {illustration}
          </div>
        )}
      </div>
    </section>
  );
}
