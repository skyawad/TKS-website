import styles from "./HeroAnalytics.module.css";

/**
 * Hero illustration for /services/business-analytics.
 * Animated dashboard card with growing bars + drawing sparkline,
 * plus two floating KPI tiles that bob.
 */
export function HeroAnalytics() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.dashboard}>
        <div className={styles.dashHead}>
          <span className={styles.dashTitle}>Revenue · Q4</span>
          <span className={styles.dashTrend}>+24.6%</span>
        </div>
        <div className={styles.chart}>
          <div className={`${styles.bar} ${styles.b1}`} />
          <div className={`${styles.bar} ${styles.b2}`} />
          <div className={`${styles.bar} ${styles.b3}`} />
          <div className={`${styles.bar} ${styles.b4}`} />
          <div className={`${styles.bar} ${styles.b5}`} />
          <div className={`${styles.bar} ${styles.b6}`} />
        </div>
        <svg className={styles.spark} viewBox="0 0 200 40" preserveAspectRatio="none">
          <polyline
            className={styles.sparkPath}
            points="0,32 30,26 60,28 90,18 120,22 150,12 175,8 200,4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={`${styles.kpi} ${styles.kpiOne}`}>
        <span className={styles.kpiLabel}>MRR</span>
        <span className={styles.kpiValue}>$2.4M</span>
        <span className={styles.kpiDelta}>▲ 12%</span>
      </div>
      <div className={`${styles.kpi} ${styles.kpiTwo}`}>
        <span className={styles.kpiLabel}>NPS</span>
        <span className={styles.kpiValue}>72</span>
        <span className={styles.kpiDelta}>▲ 4</span>
      </div>
    </div>
  );
}
