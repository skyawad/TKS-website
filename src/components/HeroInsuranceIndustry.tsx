import styles from "./HeroInsuranceIndustry.module.css";

/**
 * Insurance industry hero — claim status timeline with TAT meter
 * and 4 pin markers dropping onto a stylised map.
 */
export function HeroInsuranceIndustry() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg className={styles.map} viewBox="0 0 400 260" preserveAspectRatio="none">
        <path
          d="M 30 80 Q 90 40, 160 70 T 290 60 Q 360 70, 380 110 L 380 200 Q 320 220, 240 200 T 100 210 Q 30 200, 30 150 Z"
          fill="var(--brand-wash)"
          stroke="var(--brand-tint)"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />
      </svg>

      <span className={`${styles.pin} ${styles.p1}`}><span className={styles.pinDot} /></span>
      <span className={`${styles.pin} ${styles.p2}`}><span className={styles.pinDot} /></span>
      <span className={`${styles.pin} ${styles.p3}`}><span className={styles.pinDot} /></span>
      <span className={`${styles.pin} ${styles.p4}`}><span className={styles.pinDot} /></span>

      <div className={styles.claim}>
        <div className={styles.claimHead}>
          <span>CLAIM · CL-204881</span>
          <span className={styles.tatGood}>-22% TAT</span>
        </div>
        <div className={styles.timeline}>
          <span className={`${styles.step} ${styles.stepDone}`}><i /><b>FNOL</b></span>
          <span className={`${styles.step} ${styles.stepDone}`}><i /><b>Assess</b></span>
          <span className={`${styles.step} ${styles.stepDone}`}><i /><b>Approve</b></span>
          <span className={`${styles.step} ${styles.stepLive}`}><i /><b>Settle</b></span>
        </div>
      </div>
    </div>
  );
}
