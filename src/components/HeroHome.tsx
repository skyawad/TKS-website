import { Icon } from "./Icon";
import { useT } from "../i18n/useT";
import styles from "./HeroHome.module.css";

/**
 * Hero illustration for the Home page (`/`).
 *
 * Central platform hub with 4 capability cards orbiting around it, flowing
 * dots traveling FROM each capability TO the centre (data converges into the
 * platform) and back OUT (outputs delivered). Communicates the "one partner
 * across data, AI, and ops" value prop visually.
 */
export function HeroHome() {
  const t = useT();
  return (
    <div className={styles.scene} aria-hidden="true">
      {/* Connector lines + flowing dots */}
      <svg className={styles.lines} viewBox="0 0 400 360" preserveAspectRatio="none">
        {/* Connector paths from each corner card → centre */}
        <path d="M 80 60 Q 150 100 200 180"  className={styles.line} />
        <path d="M 320 60 Q 250 100 200 180" className={styles.line} />
        <path d="M 80 300 Q 150 250 200 180" className={styles.line} />
        <path d="M 320 300 Q 250 250 200 180" className={styles.line} />

        {/* Inbound dots (capability → centre) */}
        <circle r="4" fill="var(--icon-orange)" className={styles.flowDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M 80 60 Q 150 100 200 180" />
        </circle>
        <circle r="4" fill="var(--icon-purple)" className={styles.flowDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.6s" path="M 320 60 Q 250 100 200 180" />
        </circle>
        <circle r="4" fill="var(--icon-blue)" className={styles.flowDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.2s" path="M 80 300 Q 150 250 200 180" />
        </circle>
        <circle r="4" fill="var(--icon-green)" className={styles.flowDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.8s" path="M 320 300 Q 250 250 200 180" />
        </circle>
      </svg>

      {/* Central platform hub */}
      <div className={styles.hub}>
        <svg className={styles.orbit} viewBox="0 0 220 220">
          <circle
            className={styles.orbitRing}
            cx="110" cy="110" r="98"
            fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <circle
            className={styles.orbitRingInner}
            cx="110" cy="110" r="68"
            fill="none" stroke="currentColor" strokeWidth="1"
            strokeDasharray="3 6"
          />
        </svg>
        <div className={styles.hubCore}>
          <span className={styles.hubMark}>TKS</span>
          <span className={styles.hubLabel}>{t("heroAnim.home.platform")}</span>
        </div>
      </div>

      {/* Capability satellite cards */}
      <div className={`${styles.cap} ${styles.capTl}`}>
        <div className={`${styles.capIcon} ${styles.iAnalytics}`}>
          <Icon name="analytics" size={16} />
        </div>
        <div className={styles.capBody}>
          <span className={styles.capLabel}>{t("heroAnim.home.analytics.title")}</span>
          <span className={styles.capSub}>{t("heroAnim.home.analytics.sub")}</span>
        </div>
      </div>
      <div className={`${styles.cap} ${styles.capTr}`}>
        <div className={`${styles.capIcon} ${styles.iAi}`}>
          <Icon name="ai-strategy" size={16} />
        </div>
        <div className={styles.capBody}>
          <span className={styles.capLabel}>{t("heroAnim.home.ai.title")}</span>
          <span className={styles.capSub}>{t("heroAnim.home.ai.sub")}</span>
        </div>
      </div>
      <div className={`${styles.cap} ${styles.capBl}`}>
        <div className={`${styles.capIcon} ${styles.iData}`}>
          <Icon name="data-eng" size={16} />
        </div>
        <div className={styles.capBody}>
          <span className={styles.capLabel}>{t("heroAnim.home.pipelines.title")}</span>
          <span className={styles.capSub}>{t("heroAnim.home.pipelines.sub")}</span>
        </div>
      </div>
      <div className={`${styles.cap} ${styles.capBr}`}>
        <div className={`${styles.capIcon} ${styles.iOps}`}>
          <Icon name="managed" size={16} />
        </div>
        <div className={styles.capBody}>
          <span className={styles.capLabel}>{t("heroAnim.home.managed.title")}</span>
          <span className={styles.capSub}>{t("heroAnim.home.managed.sub")}</span>
        </div>
      </div>

    </div>
  );
}
