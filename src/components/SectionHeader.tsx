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
  /** Tone for the heading + eyebrow pill. */
  tone?: "default" | "positive" | "info";
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  as = "h2",
  align = "left",
  tone = "default",
}: SectionHeaderProps) {
  const HeadingTag = as as keyof JSX.IntrinsicElements;
  const toneClass =
    tone === "positive" ? styles.headingPositive :
    tone === "info"     ? styles.headingInfo :
    "";
  const headingClass = [styles.heading, toneClass].filter(Boolean).join(" ");
  const pillVariant =
    tone === "positive" ? "positive" :
    tone === "info"     ? "info" :
    "brand";
  return (
    <header className={[styles.header, styles[align]].join(" ")}>
      {eyebrow && (
        <div className={styles.eyebrow}>
          <Pill variant={pillVariant}>{eyebrow}</Pill>
        </div>
      )}
      <HeadingTag className={headingClass}>{heading}</HeadingTag>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
    </header>
  );
}
