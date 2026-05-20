import styles from "./HeroTechITIndustry.module.css";

/**
 * Tech & IT Services industry hero — ITSM stack of tool-logos pills + agent
 * resolving live, MTTR meter + uptime grid.
 */
export function HeroTechITIndustry() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.tools}>
        <span className={`${styles.tool} ${styles.tSN}`}>ServiceNow</span>
        <span className={`${styles.tool} ${styles.tBMC}`}>BMC</span>
        <span className={`${styles.tool} ${styles.tJira}`}>Jira SM</span>
        <span className={`${styles.tool} ${styles.tSW}`}>SolarWinds</span>
      </div>

      <div className={styles.console}>
        <div className={styles.cHead}>
          <span>L1 RESOLVER</span>
          <span className={styles.cBadge}>62% DEFLECTION</span>
        </div>
        <div className={styles.cTicket}>
          <span className={styles.cDot} />
          <span className={styles.cId}>INC-9341 · password reset</span>
          <span className={styles.cStatus}>RESOLVED</span>
        </div>
        <div className={styles.cTicket}>
          <span className={`${styles.cDot} ${styles.cDotLive}`} />
          <span className={styles.cId}>INC-9342 · VPN grant</span>
          <span className={styles.cStatusLive}>RUNNING</span>
        </div>
      </div>

      <div className={styles.uptime}>
        <span className={styles.uptimeHead}>UPTIME · 7d</span>
        <div className={styles.uptimeGrid}>
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className={i === 11 ? styles.uWarn : styles.uOk}
              style={{ animationDelay: `${(i % 7) * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
