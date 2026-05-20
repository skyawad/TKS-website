import styles from "./HeroParseIQ.module.css";

/**
 * ParseIQ hero — document with a scanning beam, extracted fields appearing
 * one-by-one on the right side as a structured record.
 */
export function HeroParseIQ() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.doc}>
        <span className={styles.docHead}>
          <span className={styles.docDot} />
          <span className={styles.docDot} />
          <span className={styles.docDot} />
        </span>
        <span className={styles.docTitle}>Emirates ID</span>
        <span className={styles.docLine} />
        <span className={styles.docLine} style={{ width: "70%" }} />
        <span className={styles.docLine} style={{ width: "85%" }} />
        <span className={styles.docLine} style={{ width: "55%" }} />
        <span className={styles.docLine} style={{ width: "72%" }} />
        <span className={styles.docLine} style={{ width: "60%" }} />
        <span className={styles.scanBeam} />
      </div>

      <div className={styles.fields}>
        <span className={styles.fieldsHead}>EXTRACTED · 7 fields</span>
        <div className={`${styles.field} ${styles.f1}`}>
          <span>NAME</span><b>Ahmed Almasi</b>
        </div>
        <div className={`${styles.field} ${styles.f2}`}>
          <span>ID</span><b>784-1990-XXXXXX-1</b>
        </div>
        <div className={`${styles.field} ${styles.f3}`}>
          <span>EXPIRY</span><b>2028-09-14</b>
        </div>
        <div className={`${styles.field} ${styles.f4}`}>
          <span>NATIONALITY</span><b>UAE</b>
        </div>
      </div>
    </div>
  );
}
