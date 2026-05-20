import type { CSSProperties, ReactNode } from "react";
import { LocalizedLink } from "../i18n/LocalizedLink";
import styles from "./ProductCard.module.css";
import type { IconTone } from "./FloatingCard";

export interface ProductCardProps {
  title: string;
  description: string;
  glyph: ReactNode;
  tone?: IconTone;
  to: string;
  cta?: string;
}

const toneVar: Record<IconTone, string> = {
  orange: "var(--icon-orange)",
  blue: "var(--icon-blue)",
  purple: "var(--icon-purple)",
  green: "var(--icon-green)",
  yellow: "var(--icon-yellow)",
};

export function ProductCard({
  title,
  description,
  glyph,
  tone = "orange",
  to,
  cta = "Learn more",
}: ProductCardProps) {
  const style = { ["--icon-bg" as string]: toneVar[tone] } as CSSProperties;
  return (
    <LocalizedLink to={to} className={styles.card} style={style}>
      <div className={styles.icon} aria-hidden="true">
        {glyph}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <span className={styles.cta}>
        {cta} <span className={styles.arrow} aria-hidden="true">→</span>
      </span>
    </LocalizedLink>
  );
}
