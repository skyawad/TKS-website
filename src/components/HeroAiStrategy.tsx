import styles from "./HeroAiStrategy.module.css";

/**
 * Hero illustration for /services/data-ai-strategy.
 * Neural-network style node graph with pulses traveling between nodes
 * plus floating labels for the key concepts.
 */
export function HeroAiStrategy() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg className={styles.graph} viewBox="0 0 400 360" preserveAspectRatio="none">
        {/* Edges between nodes */}
        <line x1="60"  y1="80"  x2="200" y2="60"  className={styles.edge} />
        <line x1="60"  y1="80"  x2="200" y2="180" className={styles.edge} />
        <line x1="60"  y1="220" x2="200" y2="180" className={styles.edge} />
        <line x1="60"  y1="220" x2="200" y2="300" className={styles.edge} />
        <line x1="200" y1="60"  x2="340" y2="120" className={styles.edge} />
        <line x1="200" y1="180" x2="340" y2="120" className={styles.edge} />
        <line x1="200" y1="180" x2="340" y2="240" className={styles.edge} />
        <line x1="200" y1="300" x2="340" y2="240" className={styles.edge} />

        {/* Pulsing nodes */}
        <circle cx="60"  cy="80"  r="9" className={`${styles.node} ${styles.n1}`} />
        <circle cx="60"  cy="220" r="9" className={`${styles.node} ${styles.n2}`} />
        <circle cx="200" cy="60"  r="11" className={`${styles.node} ${styles.n3}`} />
        <circle cx="200" cy="180" r="13" className={`${styles.node} ${styles.nCenter}`} />
        <circle cx="200" cy="300" r="11" className={`${styles.node} ${styles.n4}`} />
        <circle cx="340" cy="120" r="9" className={`${styles.node} ${styles.n5}`} />
        <circle cx="340" cy="240" r="9" className={`${styles.node} ${styles.n6}`} />

        {/* Pulse packets that travel along select edges */}
        <circle r="4" fill="var(--brand)" className={styles.pulse}>
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 60 80 L 200 180" />
        </circle>
        <circle r="4" fill="var(--icon-purple)" className={styles.pulse}>
          <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.7s" path="M 60 220 L 200 180" />
        </circle>
        <circle r="4" fill="var(--brand)" className={styles.pulse}>
          <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s" path="M 200 180 L 340 120" />
        </circle>
        <circle r="4" fill="var(--icon-purple)" className={styles.pulse}>
          <animateMotion dur="2.8s" repeatCount="indefinite" begin="2.1s" path="M 200 180 L 340 240" />
        </circle>
      </svg>

      <div className={`${styles.tag} ${styles.tagAgent}`}>
        <span className={styles.tagDot} />
        {t("ha.ai.agent")}
      </div>
      <div className={`${styles.tag} ${styles.tagLlm}`}>
        <span className={styles.tagDot} />
        {t("ha.ai.llm")}
      </div>
      <div className={`${styles.tag} ${styles.tagRag}`}>
        <span className={styles.tagDot} />
        {t("ha.ai.rag")}
      </div>
    </div>
  );
}
