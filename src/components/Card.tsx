import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

type Variant = "base" | "surface" | "elevated";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  hoverable?: boolean;
  children: ReactNode;
}

export function Card({
  variant = "base",
  hoverable = false,
  className = "",
  children,
  ...rest
}: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    hoverable ? styles.hoverable : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
