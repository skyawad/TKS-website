import styles from "./HeroCxoNexus.module.css";

/**
 * CXO Nexus hero — natural-language question producing a chart + KPI cards.
 * Question card → chart card with animated bars + KPI tiles.
 */
export function HeroCxoNexus() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.question}>
        <span className={styles.qLabel}>ASK</span>
        <span className={styles.qText}>"How did revenue track vs plan in Q1?"</span>
      </div>

      <div className={styles.chart}>
        <div className={styles.chartHead}>
          <span className={styles.chartTitle}>Revenue vs Plan</span>
          <span className={styles.chartBadge}>+8.4%</span>
        </div>
        <div className={styles.bars}>
          {[60, 75, 55, 80, 70, 90].map((h, i) => (
            <div key={i} className={styles.barCol}>
              <span className={styles.barPlan} style={{ height: `${h - 10}%`, animationDelay: `${i * 0.1}s` }} />
              <span className={styles.barActual} style={{ height: `${h}%`, animationDelay: `${i * 0.1 + 0.2}s` }} />
            </div>
          ))}
        </div>
        <div className={styles.chartFoot}>
          <span><span className={styles.dotPlan} /> Plan</span>
          <span><span className={styles.dotActual} /> Actual</span>
        </div>
      </div>

      <div className={styles.kpiRow}>
        <div className={styles.kpi}>
          <strong>AED 4.2M</strong>
          <span>Revenue Q1</span>
        </div>
        <div className={styles.kpi}>
          <strong>+8.4%</strong>
          <span>vs plan</span>
        </div>
      </div>
    </div>
  );
}
