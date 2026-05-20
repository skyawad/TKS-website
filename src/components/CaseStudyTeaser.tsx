import { LocalizedLink } from "../i18n/LocalizedLink";
import styles from "./CaseStudyTeaser.module.css";

export interface CaseStudyTeaserProps {
  /** Industry label shown as the eyebrow. */
  readonly industry: string;
  /** Region tag (e.g. "Oman", "Middle East"). */
  readonly region: string;
  /** Card title (short, declarative). */
  readonly title: string;
  /** Narrative paragraph beneath the title. */
  readonly summary: string;
  /** Outcome string — pass the verbatim CONTENT MISSING marker until
   *  sales supplies the quantified metric. */
  readonly outcome: string;
  /** Link to the customer-stories anchor or detail page. */
  readonly href: string;
}

export function CaseStudyTeaser({
  industry,
  region,
  title,
  summary,
  outcome,
  href,
}: CaseStudyTeaserProps) {
  return (
    <LocalizedLink to={href} className={styles.card}>
      <header className={styles.head}>
        <span className={styles.industry}>{/* i18n */ industry}</span>
        <span className={styles.region}>{/* i18n */ region}</span>
      </header>

      <h3 className={styles.title}>{/* i18n */ title}</h3>
      <p className={styles.summary}>{/* i18n */ summary}</p>

      <div className={styles.outcomeRow}>
        <span className={styles.outcomeLabel}>{/* i18n */ "Outcome"}</span>
        <span className={styles.outcomeValue}>{/* i18n */ outcome}</span>
      </div>

      <span className={styles.cta}>
        {/* i18n */ "Read the story"}
        <span aria-hidden="true" className={styles.arrow}>
          →
        </span>
      </span>
    </LocalizedLink>
  );
}
