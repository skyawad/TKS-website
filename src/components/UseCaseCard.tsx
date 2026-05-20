import styles from "./UseCaseCard.module.css";

export interface UseCaseCardProps {
  readonly title: string;
  readonly subtitle?: string;
  /** Body paragraph(s) describing the use case (the "crux" in source PDFs). */
  readonly crux: string;
  /** Optional tech-stack pill row, comma-separated as plain string. */
  readonly stack?: string;
  /** Industries pill row (comma-separated). */
  readonly industries?: string;
  /** Final outcome / impact statement. */
  readonly outcome: string;
}

export function UseCaseCard({
  title,
  subtitle,
  crux,
  stack,
  industries,
  outcome,
}: UseCaseCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <h3 className={styles.title}>{/* i18n */ title}</h3>
        {subtitle && <p className={styles.subtitle}>{/* i18n */ subtitle}</p>}
      </div>
      <p className={styles.crux}>{/* i18n */ crux}</p>
      {stack && (
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>{/* i18n */ "Tech stack"}</span>
          <span className={styles.metaValue}>{/* i18n */ stack}</span>
        </div>
      )}
      {industries && (
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>{/* i18n */ "Industries"}</span>
          <span className={styles.metaValue}>{/* i18n */ industries}</span>
        </div>
      )}
      <div className={styles.outcomeRow}>
        <span className={styles.outcomeLabel}>{/* i18n */ "Outcome"}</span>
        <span className={styles.outcomeValue}>{/* i18n */ outcome}</span>
      </div>
    </article>
  );
}
