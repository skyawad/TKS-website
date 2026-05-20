import { Icon } from "./Icon";
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
        <div className={styles.hubRing} />
        <div className={styles.hubRing2} />
        <div className={styles.hubCore}>
          <span className={styles.hubMark}>TKS</span>
          <span className={styles.hubLabel}>Platform</span>
        </div>
      </div>

      {/* Capability satellite cards */}
      <div className={`${styles.cap} ${styles.capTl}`}>
        <div className={`${styles.capIcon} ${styles.iAnalytics}`}>
          <Icon name="analytics" size={16} />
        </div>
        <div className={styles.capBody}>
          <span className={styles.capLabel}>Analytics</span>
          <span className={styles.capSub}>Qlik · Power BI</span>
        </div>
      </div>
      <div className={`${styles.cap} ${styles.capTr}`}>
        <div className={`${styles.capIcon} ${styles.iAi}`}>
          <Icon name="ai-strategy" size={16} />
        </div>
        <div className={styles.capBody}>
          <span className={styles.capLabel}>AI Agents</span>
          <span className={styles.capSub}>LLM · RAG</span>
        </div>
      </div>
      <div className={`${styles.cap} ${styles.capBl}`}>
        <div className={`${styles.capIcon} ${styles.iData}`}>
          <Icon name="data-eng" size={16} />
        </div>
        <div className={styles.capBody}>
          <span className={styles.capLabel}>Pipelines</span>
          <span className={styles.capSub}>Snowflake</span>
        </div>
      </div>
      <div className={`${styles.cap} ${styles.capBr}`}>
        <div className={`${styles.capIcon} ${styles.iOps}`}>
          <Icon name="managed" size={16} />
        </div>
        <div className={styles.capBody}>
          <span className={styles.capLabel}>Managed</span>
          <span className={styles.capSub}>24/7 NOC</span>
        </div>
      </div>

    </div>
  );
}
