import styles from "./HeroAbout.module.css";

/**
 * Hero illustration for `/about`.
 *
 * Rebuilt theme: "Eleven years, one team, the Gulf."
 *
 * Layout (no overlapping absolute zones):
 *   ┌─────────────────────────────────────────────┐
 *   │   [Since 2014]              [3 regions]     │  top tags
 *   │                                             │
 *   │            ◉ 11                             │  central year badge
 *   │            YEARS                            │
 *   │                                             │
 *   │     👤 👤 👤 👤 👤 👤                        │  one clean avatar row
 *   │                                             │
 *   │   [120+] · [11] · [8]                       │  stats row
 *   │   clients yrs   nationalities               │
 *   │                                             │
 *   │   [ESRI Silver] [Qlik] [Microsoft]          │  partner row
 *   └─────────────────────────────────────────────┘
 */
export function HeroAbout() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.headRow}>
        <span className={styles.sinceTag}>
          <span className={styles.sinceLabel}>SINCE</span>
          <span className={styles.sinceYear}>2014</span>
        </span>
        <span className={styles.regionTag}>
          <span className={styles.regionDot} />
          UAE · OMAN · USA
        </span>
      </div>

      <div className={styles.yearBadge}>
        <span className={styles.yearRing} />
        <span className={styles.yearRing2} />
        <div className={styles.yearInner}>
          <strong>11</strong>
          <span>YEARS</span>
        </div>
      </div>

      <div className={styles.team}>
        <span className={styles.teamLabel}>THE BENCH</span>
        <div className={styles.avatars}>
          <span className={`${styles.avatar} ${styles.av1}`} style={{ background: "var(--icon-orange)" }}>AG</span>
          <span className={`${styles.avatar} ${styles.av2}`} style={{ background: "var(--icon-purple)" }}>AS</span>
          <span className={`${styles.avatar} ${styles.av3}`} style={{ background: "var(--icon-blue)" }}>RM</span>
          <span className={`${styles.avatar} ${styles.av4}`} style={{ background: "var(--icon-green)" }}>PP</span>
          <span className={`${styles.avatar} ${styles.av5}`} style={{ background: "var(--icon-yellow)", color: "var(--ink)" }}>ST</span>
          <span className={`${styles.avatar} ${styles.av6}`} style={{ background: "var(--ink)" }}>HJ</span>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <strong className={styles.statVal}>120<sup>+</sup></strong>
          <span className={styles.statLabel}>enterprises</span>
        </div>
        <span className={styles.statDiv} />
        <div className={styles.stat}>
          <strong className={styles.statVal}>11</strong>
          <span className={styles.statLabel}>years</span>
        </div>
        <span className={styles.statDiv} />
        <div className={styles.stat}>
          <strong className={styles.statVal}>8</strong>
          <span className={styles.statLabel}>nationalities</span>
        </div>
      </div>

      <div className={styles.partners}>
        <span className={styles.partner}>
          <span className={styles.partnerDot} style={{ background: "var(--icon-yellow)" }} />
          ESRI · Silver
        </span>
        <span className={styles.partner}>
          <span className={styles.partnerDot} style={{ background: "var(--icon-green)" }} />
          Qlik Partner
        </span>
        <span className={styles.partner}>
          <span className={styles.partnerDot} style={{ background: "var(--icon-blue)" }} />
          Microsoft
        </span>
      </div>
    </div>
  );
}
