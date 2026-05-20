import styles from "./HeroPartnerships.module.css";

/**
 * Hero illustration for /about/partnerships.
 * Central TKS hub with orbiting OEM/network nodes connected by
 * an animated dashed ring — communicates alliance and integration.
 */
export function HeroPartnerships() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg className={styles.orbit} viewBox="0 0 320 320">
        <circle
          className={styles.ring}
          cx="160"
          cy="160"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        <circle
          className={styles.ringInner}
          cx="160"
          cy="160"
          r="78"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 6"
        />
      </svg>

      <div className={styles.hub}>
        <span className={styles.hubMark}>TKS</span>
        <span className={styles.hubSub}>Partner of record</span>
      </div>

      <div className={`${styles.node} ${styles.n1}`}>
        <span className={styles.nodeMark}>Q</span>
        <span className={styles.nodeName}>Qlik</span>
      </div>
      <div className={`${styles.node} ${styles.n2}`}>
        <span className={styles.nodeMark}>E</span>
        <span className={styles.nodeName}>ESRI</span>
      </div>
      <div className={`${styles.node} ${styles.n3}`}>
        <span className={styles.nodeMark}>M</span>
        <span className={styles.nodeName}>Microsoft</span>
      </div>
      <div className={`${styles.node} ${styles.n4}`}>
        <span className={styles.nodeMark}>+</span>
        <span className={styles.nodeName}>Network</span>
      </div>

      <div className={`${styles.pulse} ${styles.p1}`} />
      <div className={`${styles.pulse} ${styles.p2}`} />
      <div className={`${styles.pulse} ${styles.p3}`} />
    </div>
  );
}
