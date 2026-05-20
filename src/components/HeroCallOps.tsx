import styles from "./HeroCallOps.module.css";

/**
 * CallOps AI hero — live voice call with animated waveform + transcript line.
 * Phone tile + waveform + caller name + call status + language pills.
 */
export function HeroCallOps() {
  // 24 bars with staggered animation
  const bars = Array.from({ length: 24 });

  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.phone}>
        <span className={styles.phoneIcon}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </span>
      </div>

      <div className={styles.call}>
        <span className={styles.callLabel}>LIVE CALL · OUTBOUND</span>
        <span className={styles.callerName}>Renewal · Mr Almasi</span>
        <div className={styles.wave}>
          {bars.map((_, i) => (
            <span
              key={i}
              className={styles.bar}
              style={{ animationDelay: `${(i * 0.06) % 1.4}s` }}
            />
          ))}
        </div>
        <span className={styles.transcript}>
          "Yes, renew the policy for another year."
        </span>
      </div>

      <span className={`${styles.lang} ${styles.lAR}`}>ARABIC</span>
      <span className={`${styles.lang} ${styles.lEN}`}>ENGLISH</span>
      <span className={`${styles.lang} ${styles.lHI}`}>HINDI</span>
    </div>
  );
}
