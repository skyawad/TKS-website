import type { ReactNode } from "react";
import styles from "./CapabilityCard.module.css";

type Accent = "gold" | "teal";

export interface CapabilityCardProps {
  /** Optional small number badge above the title (e.g. "01"). */
  readonly index?: string;
  /** Card title. */
  readonly title: string;
  /** One-line outcome statement beneath the title. */
  readonly outcome?: string;
  /** Bullet items (4-6 typical, per source PDFs). */
  readonly bullets?: ReadonlyArray<string>;
  /** Override description if no bullets are needed. */
  readonly children?: ReactNode;
  /** Accent colour for the index + hover border. Default gold. */
  readonly accent?: Accent;
  /** Append to root className. */
  readonly className?: string;
}

/**
 * "What We Offer" capability card. Used in 3x2 grids on every service /
 * product / platform detail page. Text-led - no icon-in-circle per
 * DESIGN.md anti-pattern list.
 */
export function CapabilityCard({
  index,
  title,
  outcome,
  bullets,
  children,
  accent = "gold",
  className = "",
}: CapabilityCardProps) {
  const cls = [styles.card, accent === "teal" ? styles.teal : styles.gold, className]
    .filter(Boolean)
    .join(" ");
  return (
    <article className={cls}>
      {index && <span className={styles.index} aria-hidden="true">{index}</span>}
      <h3 className={styles.title}>{/* i18n */ title}</h3>
      {outcome && <p className={styles.outcome}>{/* i18n */ outcome}</p>}
      {bullets && bullets.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>{/* i18n */ b}</li>
          ))}
        </ul>
      )}
      {children}
    </article>
  );
}
