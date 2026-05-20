import styles from "./HeroOilGasIndustry.module.css";

/**
 * Oil & Gas industry hero — 3 gauges (production, downtime, HSE) plus a
 * silhouette refinery skyline with blinking lights.
 */
export function HeroOilGasIndustry() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg className={styles.skyline} viewBox="0 0 400 100" preserveAspectRatio="none">
        <path
          d="M 0 100 L 0 70 L 30 70 L 30 50 L 60 50 L 60 70 L 90 70 L 90 30 L 120 30 L 120 60 L 160 60 L 160 40 L 200 40 L 200 70 L 240 70 L 240 35 L 270 35 L 270 55 L 310 55 L 310 70 L 350 70 L 350 45 L 380 45 L 380 75 L 400 75 L 400 100 Z"
          fill="var(--ink)"
          opacity="0.85"
        />
        <circle cx="95"  cy="36" r="2" fill="var(--icon-yellow)" className={styles.light} />
        <circle cx="165" cy="46" r="2" fill="var(--icon-yellow)" className={`${styles.light} ${styles.l2}`} />
        <circle cx="245" cy="41" r="2" fill="var(--icon-yellow)" className={`${styles.light} ${styles.l3}`} />
        <circle cx="355" cy="51" r="2" fill="var(--icon-yellow)" className={`${styles.light} ${styles.l4}`} />
      </svg>

      <div className={styles.gauges}>
        <Gauge label="Production" value="98.4%" tone="green" pct={98} />
        <Gauge label="Downtime"   value="1.6%"  tone="orange" pct={20} />
        <Gauge label="HSE Index"  value="A+"    tone="blue" pct={95} />
      </div>

      <span className={styles.live}>
        <span className={styles.liveDot} /> SUB-MINUTE · SCADA + DCS
      </span>
    </div>
  );
}

interface GaugeProps { label: string; value: string; tone: "green" | "orange" | "blue"; pct: number }
function Gauge({ label, value, tone, pct }: GaugeProps) {
  const r = 32;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  const toneColor = tone === "green" ? "var(--icon-green)" : tone === "orange" ? "var(--icon-orange)" : "var(--icon-blue)";
  return (
    <div className={styles.gauge}>
      <svg className={styles.gSvg} viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} stroke="var(--surface-2)" strokeWidth="6" fill="none" />
        <circle
          cx="40" cy="40" r={r}
          stroke={toneColor}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform="rotate(-90 40 40)"
          className={styles.gArc}
        />
      </svg>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
