import type { ReactNode } from "react";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { Button } from "./Button";
import { buildWhatsAppLink } from "../lib/whatsapp";
import styles from "./PageCTA.module.css";

/** Re-exported for data files (src/data/service-detail.ts and product/platform shapes). */
export interface PageCTACtaSpec {
  readonly label: string;
  readonly to?: string;
  readonly href?: string;
}

export interface PageCTAProps {
  eyebrow?: string;
  headline: ReactNode;
  sub?: string;
  primary?: PageCTACtaSpec;
  secondary?: PageCTACtaSpec | null;
}

export function PageCTA({
  eyebrow,
  headline,
  sub,
  primary = { label: "Start a conversation", to: "/contact" },
  secondary,
}: PageCTAProps) {
  const sec =
    secondary === null
      ? null
      : secondary ?? { label: "WhatsApp us", href: buildWhatsAppLink() };

  return (
    <section className={styles.cta}>
      <div className={styles.frame}>
        <span className={styles.neon} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Decorative layers — purely visual, hidden from a11y tree */}
        <span className={styles.diagonal} aria-hidden="true" />

        {/* Bottom-left trend line — share-market-style jagged path that draws
            from the very bottom-left, ends top-right. Reverses on hover-leave. */}
        <svg
          className={styles.trend}
          viewBox="0 0 120 56"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            points="0,56 5,53 9,55 14,49 19,52 24,46 29,50 34,42 39,46 44,38 49,44 54,36 59,40 64,30 69,34 74,26 79,32 84,22 89,28 94,18 100,24 105,14 110,18 115,8 120,4"
            className={styles.trendLine}
          />
          <circle cx="120" cy="4" r="3.5" className={styles.trendHead} />
        </svg>

        {/* Insights composition — bar chart + sparkline tucked into the
            bottom-right corner. Purely decorative; reflects the practice
            (dashboards / AI / data engineering) without competing with the
            CTA text. */}
        <svg
          className={styles.chart}
          viewBox="0 0 200 110"
          preserveAspectRatio="xMaxYMax meet"
          aria-hidden="true"
        >
          <g className={styles.gridLines}>
            <line x1="0" y1="30"  x2="200" y2="30"  />
            <line x1="0" y1="60"  x2="200" y2="60"  />
            <line x1="0" y1="90"  x2="200" y2="90"  />
          </g>

          <g className={styles.bars}>
            <rect x="6"   y="56"  width="20" height="48" className={styles.bar1} />
            <rect x="34"  y="44"  width="20" height="60" className={styles.bar2} />
            <rect x="62"  y="34"  width="20" height="70" className={styles.bar3} />
            <rect x="90"  y="48"  width="20" height="56" className={styles.bar4} />
            <rect x="118" y="26"  width="20" height="78" className={styles.bar5} />
            <rect x="146" y="14"  width="20" height="90" className={styles.bar6} />
          </g>

          <path
            className={styles.sparkLine}
            d="M 6 68 L 44 56 L 82 42 L 120 52 L 158 32 L 196 16"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Live glow head — continuously travels the line after the initial draw,
              giving the chart a "live data feed" feel. */}
          <circle r="3.5" className={styles.livePulse}>
            <animateMotion
              dur="4.5s"
              repeatCount="indefinite"
              begin="1.6s"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.4 0 0.6 1"
              path="M 6 68 L 44 56 L 82 42 L 120 52 L 158 32 L 196 16"
            />
          </circle>
        </svg>

        {eyebrow && (
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrowText}>{eyebrow}</span>
          </div>
        )}
        <h2 className={styles.headline}>{headline}</h2>
        {sub && <p className={styles.sub}>{sub}</p>}
        <div className={styles.actions}>
          {primary.to ? (
            <LocalizedLink to={primary.to}>
              <Button variant="primary" className={styles.primaryBtn}>{primary.label}</Button>
            </LocalizedLink>
          ) : (
            <a href={primary.href} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className={styles.primaryBtn}>{primary.label}</Button>
            </a>
          )}
          {sec && (
            <>
              {sec.to ? (
                <LocalizedLink to={sec.to} className={styles.secondaryLink}>
                  {sec.label}
                </LocalizedLink>
              ) : (
                <a
                  href={sec.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  {sec.label}
                </a>
              )}
            </>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
