import styles from "./HeroFreightIQ.module.css";

/**
 * FreightIQ hero — a freight quote ticker that fills in instantly.
 * Route card (Jebel Ali → Mumbai) with progressively-revealed line items
 * + final quote pill.
 */
export function HeroFreightIQ() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.route}>
        <span className={styles.port}>JEBEL ALI</span>
        <svg className={styles.arrow} viewBox="0 0 120 20" preserveAspectRatio="none">
          <path className={styles.arrowLine} d="M 4 10 L 116 10" />
          <path className={styles.arrowHead} d="M 110 4 L 116 10 L 110 16" fill="none" />
          <circle r="3" fill="var(--brand)" className={styles.ship}>
            <animateMotion dur="3.6s" repeatCount="indefinite" path="M 4 10 L 116 10" />
          </circle>
        </svg>
        <span className={styles.port}>MUMBAI</span>
      </div>

      <div className={styles.quote}>
        <div className={styles.qHead}>
          <span>QUOTE · FCL 40HC</span>
          <span className={styles.qLive}>LIVE</span>
        </div>
        <div className={`${styles.qLine} ${styles.l1}`}>
          <span>Ocean freight</span><b>$2,840</b>
        </div>
        <div className={`${styles.qLine} ${styles.l2}`}>
          <span>BAF surcharge</span><b>$320</b>
        </div>
        <div className={`${styles.qLine} ${styles.l3}`}>
          <span>Origin charges</span><b>$185</b>
        </div>
        <div className={`${styles.qLine} ${styles.l4}`}>
          <span>Destination</span><b>$240</b>
        </div>
        <div className={`${styles.qLine} ${styles.lT}`}>
          <span>Total</span><b>$3,585</b>
        </div>
      </div>
    </div>
  );
}
