import styles from "./HeroDataPulse.module.css";

/**
 * DataPulseIQ hero — three data sources pulse signals into a quality monitor.
 * Sources tile (Snowflake/Postgres/SAP) → pulse paths → quality scorecard with bars.
 */
export function HeroDataPulse() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={`${styles.source} ${styles.s1}`}>
        <span className={styles.sIcon} style={{ background: "var(--icon-blue)" }}>SF</span>
        <span>Snowflake</span>
      </div>
      <div className={`${styles.source} ${styles.s2}`}>
        <span className={styles.sIcon} style={{ background: "var(--icon-purple)" }}>PG</span>
        <span>Postgres</span>
      </div>
      <div className={`${styles.source} ${styles.s3}`}>
        <span className={styles.sIcon} style={{ background: "var(--icon-green)" }}>SAP</span>
        <span>SAP</span>
      </div>

      <svg className={styles.wires} viewBox="0 0 400 360" preserveAspectRatio="none">
        <path className={styles.wire} d="M 130 70 Q 220 70, 240 180" />
        <path className={styles.wire} d="M 130 180 L 240 180" />
        <path className={styles.wire} d="M 130 290 Q 220 290, 240 180" />

        <circle r="4" fill="var(--icon-blue)" className={styles.pulse}>
          <animateMotion dur="2.4s" repeatCount="indefinite" path="M 130 70 Q 220 70, 240 180" />
        </circle>
        <circle r="4" fill="var(--icon-purple)" className={styles.pulse}>
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.8s" path="M 130 180 L 240 180" />
        </circle>
        <circle r="4" fill="var(--icon-green)" className={styles.pulse}>
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.6s" path="M 130 290 Q 220 290, 240 180" />
        </circle>
      </svg>

      <div className={styles.monitor}>
        <div className={styles.monHead}>
          <span className={styles.monTitle}>Data Quality</span>
          <span className={styles.monScore}>97.4%</span>
        </div>
        <div className={styles.bars}>
          <div><span>Freshness</span><b style={{ width: "94%" }} /></div>
          <div><span>Schema</span><b style={{ width: "100%" }} /></div>
          <div><span>Nulls</span><b style={{ width: "88%" }} /></div>
          <div><span>Drift</span><b style={{ width: "92%" }} /></div>
        </div>
      </div>
    </div>
  );
}
