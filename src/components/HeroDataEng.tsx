import { useT } from "../i18n/useT";
import styles from "./HeroDataEng.module.css";

/**
 * Hero illustration for /services/data-engineering.
 * Three pipeline stages connected by curved lines, with dots
 * flowing through them in sequence.
 */
export function HeroDataEng() {
  const t = useT();
  return (
    <div className={styles.scene} aria-hidden="true">
      {/* SVG pipes — drawn behind the stage cards */}
      <svg className={styles.pipes} viewBox="0 0 380 360" preserveAspectRatio="none">
        <path
          className={styles.pipe}
          d="M 90 60 Q 200 80 240 160"
          fill="none"
          stroke="var(--brand-tint)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={styles.pipe}
          d="M 240 200 Q 200 240 110 280"
          fill="none"
          stroke="var(--brand-tint)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Flowing packets on path 1 */}
        <circle r="5" fill="var(--brand)" className={styles.flowDot}>
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 90 60 Q 200 80 240 160" />
        </circle>
        <circle r="4" fill="var(--brand)" opacity="0.6" className={styles.flowDot}>
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s" path="M 90 60 Q 200 80 240 160" />
        </circle>

        {/* Flowing packets on path 2 */}
        <circle r="5" fill="var(--icon-blue)" className={styles.flowDot}>
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.0s" path="M 240 200 Q 200 240 110 280" />
        </circle>
        <circle r="4" fill="var(--icon-blue)" opacity="0.6" className={styles.flowDot}>
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.8s" path="M 240 200 Q 200 240 110 280" />
        </circle>
      </svg>

      <div className={`${styles.stage} ${styles.stageOne}`}>
        <div className={`${styles.stageIcon} ${styles.iconSource}`}>↘</div>
        <div className={styles.stageBody}>
          <span className={styles.stageLabel}>{t("ha.dataEng.source")}</span>
          <span className={styles.stageSub}>{t("ha.dataEng.sourceSub")}</span>
        </div>
      </div>

      <div className={`${styles.stage} ${styles.stageTwo}`}>
        <div className={`${styles.stageIcon} ${styles.iconTransform}`}>⚙</div>
        <div className={styles.stageBody}>
          <span className={styles.stageLabel}>{t("ha.dataEng.transform")}</span>
          <span className={styles.stageSub}>{t("ha.dataEng.transformSub")}</span>
        </div>
      </div>

      <div className={`${styles.stage} ${styles.stageThree}`}>
        <div className={`${styles.stageIcon} ${styles.iconWarehouse}`}>▤</div>
        <div className={styles.stageBody}>
          <span className={styles.stageLabel}>{t("ha.dataEng.warehouse")}</span>
          <span className={styles.stageSub}>{t("ha.dataEng.warehouseSub")}</span>
        </div>
      </div>
    </div>
  );
}
