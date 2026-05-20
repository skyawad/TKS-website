import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import styles from "./Reveal.module.css";

export interface RevealProps {
  readonly children: ReactNode;
  /** Stagger delay in ms before this element animates in. */
  readonly delay?: number;
  /** Wrapping element. Defaults to <div>. */
  readonly as?: ElementType;
  /** Optional className appended to the root. */
  readonly className?: string;
}

/**
 * Scroll-reveal wrapper implementing DESIGN.md motion spec:
 *   opacity 0 -> 1 + translateY(24px -> 0) triggered at ~20% viewport entry.
 *
 * Honours prefers-reduced-motion by skipping the animation entirely (content
 * is immediately visible — no transform, no opacity transition).
 */
export function Reveal({ children, delay = 0, as, className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = delay
    ? { transitionDelay: `${delay}ms` }
    : {};

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, visible ? styles.visible : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Tag>
  );
}
