import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import styles from "./ValueTile.module.css";

/** Locked icon set for the About page's culture-values grid. */
export type ValueIconName = Extract<
  IconName,
  "integrity" | "ethics" | "inclusion" | "innovation"
>;

export type ValueTone = "orange" | "purple" | "blue" | "green";

export interface ValueTileProps {
  /** Short value label (e.g. "Integrity"). */
  readonly label: string;
  /** Optional one-sentence elaboration of what the value means in practice. */
  readonly body?: ReactNode;
  /** Themed icon for the value. */
  readonly icon: ValueIconName;
  /** Colour tone for the icon tile chrome. Defaults to orange. */
  readonly tone?: ValueTone;
  /** Legacy prop — kept for back-compat with older call sites. */
  readonly accent?: string;
}

const TONE_BG: Record<ValueTone, string> = {
  orange: "var(--icon-orange)",
  purple: "var(--icon-purple)",
  blue:   "var(--icon-blue)",
  green:  "var(--icon-green)",
};

/**
 * Square-ish tile for company values. Used by the About page's
 * "Our Culture & Values" section. Each value gets a unique themed icon
 * with its own idle animation (driven by `data-value` selector in CSS).
 */
export function ValueTile({ icon, label, body, tone = "orange" }: ValueTileProps) {
  return (
    <article className={styles.tile} data-value={icon}>
      <div className={styles.iconTile} style={{ background: TONE_BG[tone] }}>
        <Icon name={icon} size={22} className={styles.icon} />
      </div>
      <span className={styles.label}>{label}</span>
      {body && <p className={styles.body}>{body}</p>}
    </article>
  );
}
