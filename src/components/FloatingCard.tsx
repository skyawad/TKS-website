import type { CSSProperties, ReactNode } from "react";
import styles from "./FloatingCard.module.css";

export type IconTone =
  | "orange"
  | "blue"
  | "purple"
  | "green"
  | "yellow";

export interface FloatingCardProps {
  label: string;
  sub?: string;
  glyph: ReactNode;
  tone?: IconTone;
  position: { top?: number | string; left?: number | string; right?: number | string };
  delayMs?: number;
  className?: string;
}

const toneVar: Record<IconTone, string> = {
  orange: "var(--icon-orange)",
  blue: "var(--icon-blue)",
  purple: "var(--icon-purple)",
  green: "var(--icon-green)",
  yellow: "var(--icon-yellow)",
};

export function FloatingCard({
  label,
  sub,
  glyph,
  tone = "orange",
  position,
  delayMs = 0,
  className = "",
}: FloatingCardProps) {
  const style = {
    ...position,
    animationDelay: `${delayMs}ms`,
    ["--icon-bg" as string]: toneVar[tone],
  } as CSSProperties;
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")} style={style}>
      <div className={styles.icon} aria-hidden="true">
        {glyph}
      </div>
      <div className={styles.text}>
        <div className={styles.label}>{label}</div>
        {sub && <div className={styles.sub}>{sub}</div>}
      </div>
    </div>
  );
}
