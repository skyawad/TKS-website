import type { ReactNode } from "react";
import styles from "./PillarCard.module.css";

export interface PillarCardProps {
  /** Two-digit ordinal (preferred). Falls back to `index` for back-compat. */
  number?: string;
  /** Legacy prop — same as `number`. */
  index?: string;
  title: string;
  /** Preferred body content. Falls back to `children` if absent. */
  body?: ReactNode;
  children?: ReactNode;
}

export function PillarCard({ number, index, title, body, children }: PillarCardProps) {
  const numberDisplay = number ?? index;
  const content = body ?? children;
  return (
    <article className={styles.card}>
      {numberDisplay && (
        <div className={styles.number} aria-hidden="true">
          {numberDisplay}
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      {content && <p className={styles.body}>{content}</p>}
    </article>
  );
}
