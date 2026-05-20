import styles from "./HeroManaged.module.css";

/**
 * Hero illustration for /services/managed-services.
 * Server-rack card with blinking status LEDs + a 99.9%-uptime gauge
 * and a 24/7 NOC badge.
 */
export function HeroManaged() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.rack}>
        <div className={styles.rackHead}>
          <span className={styles.rackTitle}>Production · UAE-1</span>
          <span className={styles.rackPill}>● Live</span>
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <span className={`${styles.led} ${styles.led1}`} />
            <span className={styles.rowLabel}>web-01</span>
            <span className={styles.rowVal}>operational</span>
          </div>
          <div className={styles.row}>
            <span className={`${styles.led} ${styles.led2}`} />
            <span className={styles.rowLabel}>api-01</span>
            <span className={styles.rowVal}>operational</span>
          </div>
          <div className={styles.row}>
            <span className={`${styles.led} ${styles.led3}`} />
            <span className={styles.rowLabel}>db-primary</span>
            <span className={styles.rowVal}>operational</span>
          </div>
          <div className={styles.row}>
            <span className={`${styles.led} ${styles.led4}`} />
            <span className={styles.rowLabel}>queue-01</span>
            <span className={styles.rowVal}>operational</span>
          </div>
          <div className={styles.row}>
            <span className={`${styles.led} ${styles.led5}`} />
            <span className={styles.rowLabel}>cache-01</span>
            <span className={styles.rowVal}>operational</span>
          </div>
        </div>
      </div>

      <div className={styles.uptime}>
        <span className={styles.uptimeLabel}>30-day uptime</span>
        <span className={styles.uptimeVal}>99.97%</span>
        <div className={styles.uptimeBar}>
          <div className={styles.uptimeFill} />
        </div>
      </div>

      <div className={styles.noc}>
        <div className={styles.nocDigit}>24<span className={styles.nocSlash}>/</span>7</div>
        <span className={styles.nocLabel}>NOC<br />Sun–Sat</span>
      </div>
    </div>
  );
}
