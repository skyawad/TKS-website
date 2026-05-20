import styles from "./HeroInsightSM.module.css";

/**
 * InsightSM hero — an ITSM dashboard panel with 4 KPI tiles, a tiny line chart,
 * and a service-health strip.
 */
export function HeroInsightSM() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.dashboard}>
        <div className={styles.dashHead}>
          <span className={styles.dashTitle}>InsightSM · ServiceNow</span>
          <span className={styles.dashLive}>
            <span className={styles.liveDot} /> LIVE
          </span>
        </div>

        <div className={styles.kpis}>
          <div className={styles.kpi}>
            <strong>1,284</strong>
            <span>Open tickets</span>
          </div>
          <div className={styles.kpi}>
            <strong>96%</strong>
            <span>SLA met</span>
          </div>
          <div className={styles.kpi}>
            <strong>22m</strong>
            <span>Avg MTTR</span>
          </div>
          <div className={styles.kpi}>
            <strong>+12</strong>
            <span>Δ vs yest.</span>
          </div>
        </div>

        <svg className={styles.spark} viewBox="0 0 300 60" preserveAspectRatio="none">
          <path
            d="M 0 40 L 30 32 L 60 36 L 90 22 L 120 28 L 150 14 L 180 18 L 210 10 L 240 16 L 270 8 L 300 12"
            fill="none"
            stroke="var(--brand)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.sparkLine}
          />
        </svg>

        <div className={styles.health}>
          <span className={`${styles.bar} ${styles.barOk}`} />
          <span className={`${styles.bar} ${styles.barOk}`} />
          <span className={`${styles.bar} ${styles.barOk}`} />
          <span className={`${styles.bar} ${styles.barWarn}`} />
          <span className={`${styles.bar} ${styles.barOk}`} />
          <span className={`${styles.bar} ${styles.barOk}`} />
          <span className={`${styles.bar} ${styles.barOk}`} />
        </div>
      </div>

      <span className={styles.badge}>20+ DASHBOARDS · LIVE IN 2 WEEKS</span>
    </div>
  );
}
