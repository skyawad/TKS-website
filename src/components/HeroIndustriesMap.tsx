import { Icon } from "./Icon";
import styles from "./HeroIndustriesMap.module.css";

/**
 * Hero illustration for /industries.
 * Four sector tiles connected by a dashed network with traveling pulses,
 * grid backdrop, region markers ("UAE", "KSA", "OMAN") drifting in.
 */
export function HeroIndustriesMap() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <svg className={styles.grid} viewBox="0 0 400 360" preserveAspectRatio="none">
        <defs>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--surface-2)" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="400" height="360" fill="url(#gridPattern)" />

        <path className={styles.link} d="M 90 90 L 290 90" />
        <path className={styles.link} d="M 90 90 L 90 270" />
        <path className={styles.link} d="M 290 90 L 290 270" />
        <path className={styles.link} d="M 90 270 L 290 270" />
        <path className={styles.link} d="M 90 90 L 290 270" />

        <circle r="4" fill="var(--icon-blue)" className={styles.dot}>
          <animateMotion dur="3s" repeatCount="indefinite" path="M 90 90 L 290 90" />
        </circle>
        <circle r="4" fill="var(--icon-orange)" className={styles.dot}>
          <animateMotion dur="3s" repeatCount="indefinite" begin="0.6s" path="M 290 90 L 290 270" />
        </circle>
        <circle r="4" fill="var(--icon-purple)" className={styles.dot}>
          <animateMotion dur="3s" repeatCount="indefinite" begin="1.2s" path="M 290 270 L 90 270" />
        </circle>
        <circle r="4" fill="var(--icon-green)" className={styles.dot}>
          <animateMotion dur="3s" repeatCount="indefinite" begin="1.8s" path="M 90 270 L 90 90" />
        </circle>
      </svg>

      <div className={`${styles.sector} ${styles.sTL}`} style={{ background: "var(--icon-blue)" }}>
        <Icon name="insurance" size={20} />
        <span>Insurance</span>
      </div>
      <div className={`${styles.sector} ${styles.sTR}`} style={{ background: "var(--icon-orange)" }}>
        <Icon name="oil-gas" size={20} />
        <span>Oil &amp; Gas</span>
      </div>
      <div className={`${styles.sector} ${styles.sBL}`} style={{ background: "var(--icon-green)" }}>
        <Icon name="manufacturing" size={20} />
        <span>Manufacturing</span>
      </div>
      <div className={`${styles.sector} ${styles.sBR}`} style={{ background: "var(--icon-purple)" }}>
        <Icon name="tech-it" size={20} />
        <span>Tech &amp; IT</span>
      </div>

      <span className={`${styles.region} ${styles.rUAE}`}>UAE</span>
      <span className={`${styles.region} ${styles.rKSA}`}>KSA</span>
      <span className={`${styles.region} ${styles.rOMN}`}>OMAN</span>
    </div>
  );
}
