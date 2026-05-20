import styles from "./HeroTicketIQ.module.css";

/**
 * TicketIQ hero — autonomous ticket resolution.
 * 4 ticket rows on the left, status pulses move from "OPEN" → "RESOLVED",
 * agent core in middle, audit log on the right.
 */
export function HeroTicketIQ() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.queue}>
        {[
          { id: "INC-4821", title: "Password reset", status: "resolved" },
          { id: "INC-4822", title: "VPN access",      status: "resolved" },
          { id: "INC-4823", title: "License grant",   status: "running" },
          { id: "INC-4824", title: "Group add",       status: "queued" },
        ].map((t, i) => (
          <div key={t.id} className={`${styles.ticket} ${styles[`row${i}`]}`}>
            <span className={styles.tid}>{t.id}</span>
            <span className={styles.ttitle}>{t.title}</span>
            <span className={`${styles.tstatus} ${styles[t.status]}`}>
              {t.status === "resolved" && "✓"}
              {t.status === "running" && <span className={styles.spinner} />}
              {t.status === "queued" && "·"}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.audit}>
        <span className={styles.auditHead}>AUDIT LOG</span>
        <span className={styles.auditLine}><span className={styles.auditDot} /> 23:41:02 · pwd-reset · OK</span>
        <span className={styles.auditLine}><span className={styles.auditDot} /> 23:41:18 · vpn-grant · OK</span>
        <span className={`${styles.auditLine} ${styles.auditLineLive}`}><span className={styles.auditDot} /> 23:41:34 · license · approve</span>
      </div>

      <span className={styles.metric}>
        <strong>62%</strong>
        <span>L1 deflection</span>
      </span>
    </div>
  );
}
