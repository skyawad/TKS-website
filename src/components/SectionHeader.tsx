import type { ReactNode } from "react";
import { Pill } from "./Pill";
import styles from "./SectionHeader.module.css";

type HeadingLevel = "h1" | "h2" | "h3";

export interface SectionHeaderProps {
  eyebrow?: string;
  heading: ReactNode;
  subtext?: ReactNode;
  as?: HeadingLevel;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  as = "h2",
  align = "left",
}: SectionHeaderProps) {
  const HeadingTag = as as keyof JSX.IntrinsicElements;
  return (
    <header className={[styles.header, styles[align]].join(" ")}>
      {eyebrow && (
        <div className={styles.eyebrow}>
          <Pill variant="brand">{eyebrow}</Pill>
        </div>
      )}
      <HeadingTag className={styles.heading}>{heading}</HeadingTag>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
    </header>
  );
}
