import styles from "./HeroManufacturingIndustry.module.css";

/**
 * Manufacturing industry hero — 3 plant lines with moving items, OEE meter,
 * and quality scorecard on the side.
 */
export function HeroManufacturingIndustry() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.lines}>
        {([0, 1, 2] as const).map((row) => (
          <div key={row} className={styles.line}>
            <span className={styles.lineLabel}>L{row + 1}</span>
            <div className={styles.belt}>
              <span className={styles.beltTrack} />
              {[0, 1, 2, 3].map((j) => (
                <span
                  key={j}
                  className={styles.item}
                  style={{ animationDelay: `${(j * 1.5) + row * 0.6}s` }}
                />
              ))}
            </div>
            <span className={styles.lineOk}>OK</span>
          </div>
        ))}
      </div>

      <div className={styles.oee}>
        <div className={styles.oeeHead}>
          <span>OEE</span>
          <strong>87.3%</strong>
        </div>
        <div className={styles.oeeBar}>
          <span style={{ width: "87.3%" }} />
        </div>
        <div className={styles.oeeStats}>
          <div><b>96%</b><span>Avail</span></div>
          <div><b>92%</b><span>Perf</span></div>
          <div><b>98%</b><span>FPY</span></div>
        </div>
      </div>

      <span className={styles.badge}>3 PLANTS · 1 KPI SET</span>
    </div>
  );
}
