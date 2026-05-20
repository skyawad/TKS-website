import { Icon } from "./Icon";
import styles from "./HeroPlatformsHub.module.css";

/**
 * Hero illustration for /platforms.
 * Four stacked, slightly tilted platform tiles ascending — each animates in,
 * a pulse dot travels up the spine, the top tile glows on landing.
 */
export function HeroPlatformsHub() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg className={styles.spine} viewBox="0 0 200 360" preserveAspectRatio="none">
        <line x1="100" y1="40" x2="100" y2="320" className={styles.spineLine} />
        <circle r="4" fill="var(--brand)" className={styles.pulse}>
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M 100 320 L 100 40" />
        </circle>
      </svg>

      <div className={`${styles.tile} ${styles.t1}`} style={{ background: "var(--icon-orange)" }}>
        <Icon name="managed" size={20} />
        <div>
          <span className={styles.tileName}>InsightSM</span>
          <span className={styles.tileSub}>ITSM analytics</span>
        </div>
      </div>
      <div className={`${styles.tile} ${styles.t2}`} style={{ background: "var(--icon-blue)" }}>
        <Icon name="data-eng" size={20} />
        <div>
          <span className={styles.tileName}>DataPulseIQ</span>
          <span className={styles.tileSub}>Data quality</span>
        </div>
      </div>
      <div className={`${styles.tile} ${styles.t3}`} style={{ background: "var(--icon-purple)" }}>
        <Icon name="ai-strategy" size={20} />
        <div>
          <span className={styles.tileName}>ParseIQ</span>
          <span className={styles.tileSub}>Document AI</span>
        </div>
      </div>
      <div className={`${styles.tile} ${styles.t4}`} style={{ background: "var(--icon-green)" }}>
        <Icon name="analytics" size={20} />
        <div>
          <span className={styles.tileName}>FreightIQ</span>
          <span className={styles.tileSub}>Freight pricing</span>
        </div>
      </div>

      <span className={styles.badge}>Production-grade</span>
    </div>
  );
}
