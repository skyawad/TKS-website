import styles from "./ProcessTimeline.module.css";

export interface ProcessStep {
  /** Two-digit ordinal (e.g. "01"). */
  readonly num: string;
  /** Phase name (e.g. "Discover"). */
  readonly phase: string;
  /** One-paragraph description of what happens in this stage. */
  readonly description: string;
}

export interface ProcessTimelineProps {
  readonly steps: ReadonlyArray<ProcessStep>;
  /** Optional closing sentence after the stepper. */
  readonly closingLine?: string;
}

/**
 * Numbered horizontal stepper on desktop, vertical card stack on mobile.
 * Used for "Our Approach" / "How It Works" sections across services,
 * products, and platforms.
 */
export function ProcessTimeline({ steps, closingLine }: ProcessTimelineProps) {
  return (
    <div className={styles.wrap}>
      <ol className={styles.steps}>
        {steps.map((step, idx) => (
          <li key={step.num} className={styles.step}>
            <div className={styles.head}>
              <span className={styles.num} aria-hidden="true">{step.num}</span>
              {idx < steps.length - 1 && <span className={styles.rule} aria-hidden="true" />}
            </div>
            <div className={styles.body}>
              <h3 className={styles.phase}>{/* i18n */ step.phase}</h3>
              <p className={styles.desc}>{/* i18n */ step.description}</p>
            </div>
          </li>
        ))}
      </ol>
      {closingLine && <p className={styles.closing}>{/* i18n */ closingLine}</p>}
    </div>
  );
}
