import { useT } from "../i18n/useT";
import styles from "./HeroCareers.module.css";

/**
 * Hero illustration for /about/careers.
 * Animated growth ladder: ascending role tiles with a progress arrow
 * and a small "people" cluster — communicates upward mobility.
 */
export function HeroCareers() {
  const t = useT();
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg className={styles.arrow} viewBox="0 0 320 320" preserveAspectRatio="none">
        <path
          className={styles.arrowPath}
          d="M30 280 L90 220 L160 240 L230 140 L290 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon className={styles.arrowHead} points="290,60 280,82 302,76" />
      </svg>

      <div className={`${styles.stepCard} ${styles.s1}`}>
        <span className={styles.stepRank}>L1</span>
        <span className={styles.stepRole}>{t("heroAnim.careers.engineer")}</span>
        <span className={styles.stepBadge}>{t("heroAnim.careers.onboarding")}</span>
      </div>

      <div className={`${styles.stepCard} ${styles.s2}`}>
        <span className={styles.stepRank}>L3</span>
        <span className={styles.stepRole}>{t("heroAnim.careers.lead")}</span>
        <span className={styles.stepBadge}>{t("heroAnim.careers.delivery")}</span>
      </div>

      <div className={`${styles.stepCard} ${styles.s3}`}>
        <span className={styles.stepRank}>L5</span>
        <span className={styles.stepRole}>{t("heroAnim.careers.architect")}</span>
        <span className={styles.stepBadge}>{t("heroAnim.careers.practice")}</span>
      </div>

      <div className={styles.team}>
        <span className={`${styles.dot} ${styles.d1}`}>A</span>
        <span className={`${styles.dot} ${styles.d2}`}>K</span>
        <span className={`${styles.dot} ${styles.d3}`}>S</span>
        <span className={`${styles.dot} ${styles.d4}`}>+</span>
      </div>

      <div className={styles.metric}>
        <span className={styles.metricVal}>+38%</span>
        <span className={styles.metricLabel}>{t("heroAnim.careers.promotions")}</span>
      </div>
    </div>
  );
}
