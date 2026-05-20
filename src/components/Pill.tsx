import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Pill.module.css";

type Variant = "brand" | "neutral" | "mono" | "positive" | "info";

export interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  dot?: boolean;
  children: ReactNode;
}

export function Pill({
  variant = "brand",
  dot = false,
  className = "",
  children,
  ...rest
}: PillProps) {
  const classes = [styles.pill, styles[variant], className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={classes} {...rest}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
