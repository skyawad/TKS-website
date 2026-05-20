import { Icon } from "./Icon";
import styles from "./HeroEnterpriseAI.module.css";

/**
 * Hero illustration for /enterprise-ai.
 * Central AI core with 4 orbiting agents (AssistIQ/TicketIQ/CallOps/CXO),
 * connecting lines pulse data inward, ring ripples outward.
 */
export function HeroEnterpriseAI() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg className={styles.lines} viewBox="0 0 400 360" preserveAspectRatio="none">
        <path className={styles.line} d="M 200 180 L 80 80" />
        <path className={styles.line} d="M 200 180 L 320 80" />
        <path className={styles.line} d="M 200 180 L 80 280" />
        <path className={styles.line} d="M 200 180 L 320 280" />

        <circle r="4" fill="var(--icon-orange)" className={styles.flowDot}>
          <animateMotion dur="2.2s" repeatCount="indefinite" path="M 80 80 L 200 180" />
        </circle>
        <circle r="4" fill="var(--icon-purple)" className={styles.flowDot}>
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.55s" path="M 320 80 L 200 180" />
        </circle>
        <circle r="4" fill="var(--icon-blue)" className={styles.flowDot}>
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.1s" path="M 80 280 L 200 180" />
        </circle>
        <circle r="4" fill="var(--icon-green)" className={styles.flowDot}>
          <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.65s" path="M 320 280 L 200 180" />
        </circle>
      </svg>

      <div className={styles.core}>
        <span className={styles.ring} />
        <span className={styles.ring2} />
        <span className={styles.coreLabel}>AI Core</span>
      </div>

      <div className={`${styles.agent} ${styles.aTL}`} style={{ background: "var(--icon-orange)" }}>
        <Icon name="assistant" size={20} />
        <span>AssistIQ</span>
      </div>
      <div className={`${styles.agent} ${styles.aTR}`} style={{ background: "var(--icon-purple)" }}>
        <Icon name="ticket" size={20} />
        <span>TicketIQ</span>
      </div>
      <div className={`${styles.agent} ${styles.aBL}`} style={{ background: "var(--icon-blue)" }}>
        <Icon name="callops" size={20} />
        <span>CallOps</span>
      </div>
      <div className={`${styles.agent} ${styles.aBR}`} style={{ background: "var(--icon-green)" }}>
        <Icon name="cxo" size={20} />
        <span>CXO Nexus</span>
      </div>
    </div>
  );
}
