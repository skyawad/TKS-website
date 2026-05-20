import styles from "./HeroAbout.module.css";

/**
 * Hero illustration for `/about`.
 *
 * A networked team scene: a slow rotating dashed orbit ring sits behind a
 * cluster of avatar circles, SVG connector lines link pairs of teammates
 * with colored pulses travelling between them ("we're networked"), a
 * cascading orange halo hops from avatar to avatar, plus floating stat /
 * partner / since-2014 cards.
 */
export function HeroAbout() {
  return (
    <div className={styles.scene} aria-hidden="true">
      {/* Rotating dashed orbit ring behind the cluster */}
      <div className={styles.orbitWrap}>
        <svg className={styles.orbit} viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet">
          <circle
            cx="120"
            cy="120"
            r="110"
            fill="none"
            stroke="var(--brand-tint)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <circle
            cx="120"
            cy="120"
            r="80"
            fill="none"
            stroke="var(--brand-tint)"
            strokeWidth="1"
            strokeDasharray="2 5"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Network connectors between specific avatar centres + traveling pulses */}
      <svg className={styles.network} viewBox="0 0 340 200" preserveAspectRatio="none">
        <path d="M 58 38 L 138 58"   className={styles.link} />
        <path d="M 138 58 L 228 28"  className={styles.link} />
        <path d="M 138 58 L 198 138" className={styles.link} />
        <path d="M 28 98 L 88 158"   className={styles.link} />
        <path d="M 198 138 L 298 108" className={styles.link} />
        <path d="M 28 98 L 58 38"    className={styles.link} />

        {/* Color pulses traveling between teammates */}
        <circle r="3.5" fill="var(--icon-orange)" className={styles.pulseDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M 58 38 L 138 58" />
        </circle>
        <circle r="3.5" fill="var(--icon-purple)" className={styles.pulseDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.5s" path="M 138 58 L 228 28" />
        </circle>
        <circle r="3.5" fill="var(--icon-blue)" className={styles.pulseDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.0s" path="M 138 58 L 198 138" />
        </circle>
        <circle r="3.5" fill="var(--icon-green)" className={styles.pulseDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="1.5s" path="M 28 98 L 88 158" />
        </circle>
        <circle r="3.5" fill="var(--icon-yellow)" className={styles.pulseDot}>
          <animateMotion dur="2.6s" repeatCount="indefinite" begin="2.0s" path="M 198 138 L 298 108" />
        </circle>
      </svg>

      {/* Team avatar cluster */}
      <div className={styles.cluster}>
        <div className={`${styles.avatar} ${styles.a1}`} style={{ background: "var(--icon-orange)" }}>AG</div>
        <div className={`${styles.avatar} ${styles.a2}`} style={{ background: "var(--icon-purple)" }}>AS</div>
        <div className={`${styles.avatar} ${styles.a3}`} style={{ background: "var(--icon-blue)" }}>RM</div>
        <div className={`${styles.avatar} ${styles.a4}`} style={{ background: "var(--icon-green)" }}>PP</div>
        <div className={`${styles.avatar} ${styles.a5}`} style={{ background: "var(--icon-yellow)", color: "var(--ink)" }}>ST</div>
        <div className={`${styles.avatar} ${styles.a6}`} style={{ background: "var(--ink)" }}>GS</div>
        <div className={`${styles.avatar} ${styles.a7}`} style={{ background: "var(--icon-orange)" }}>HJ</div>
      </div>

      {/* Since-2014 shimmer badge — top-right */}
      <div className={styles.sinceBadge}>
        <span className={styles.sinceYear}>Since</span>
        <span className={styles.sinceYearNum}>2014</span>
        <span className={styles.sinceDivider} />
        <span className={styles.sinceYears}>
          <strong>11</strong>
          <span>yrs</span>
        </span>
      </div>

      {/* Stats card */}
      <div className={styles.stats}>
        <div className={styles.statHead}>
          <span className={styles.statHeadDot} />
          <span className={styles.statHeadLabel}>The bench</span>
        </div>
        <div className={styles.statRow}>
          <div>
            <span className={styles.statValue}>120<span className={styles.statSmall}>+</span></span>
            <span className={styles.statLabel}>enterprises</span>
          </div>
          <div className={styles.statDiv} />
          <div>
            <span className={styles.statValue}>11</span>
            <span className={styles.statLabel}>years</span>
          </div>
          <div className={styles.statDiv} />
          <div>
            <span className={styles.statValue}>8</span>
            <span className={styles.statLabel}>nationalities</span>
          </div>
        </div>
      </div>

      {/* Partner pills */}
      <div className={styles.partner1}>
        <span className={styles.pDot} style={{ background: "var(--icon-yellow)" }} />
        ESRI · Silver
      </div>
      <div className={styles.partner2}>
        <span className={styles.pDot} style={{ background: "var(--icon-green)" }} />
        Qlik Partner
      </div>
      <div className={styles.partner3}>
        <span className={styles.pDot} style={{ background: "var(--icon-blue)" }} />
        Microsoft
      </div>
    </div>
  );
}
