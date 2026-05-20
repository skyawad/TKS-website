import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "dark" | "link";
type Size = "md" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  trailingArrow?: boolean;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    trailingArrow = false,
    className = "",
    children,
    ...rest
  },
  ref,
) {
  const classes = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");
  return (
    <button ref={ref} type="button" className={classes} {...rest}>
      <span className={styles.label}>{children}</span>
      {(variant === "link" || trailingArrow) && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </button>
  );
});
