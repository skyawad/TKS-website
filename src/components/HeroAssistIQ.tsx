import styles from "./HeroAssistIQ.module.css";

/**
 * AssistIQ hero — customer chat conversation with an AI avatar.
 * Avatar tile + 3 chat bubbles streaming in, typing dots, channel badges.
 */
export function HeroAssistIQ() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.avatar}>
        <span className={styles.avatarPulse} />
        <span className={styles.avatarPulse2} />
        <span className={styles.avatarFace}>
          <span className={styles.eye} />
          <span className={styles.eye} />
        </span>
      </div>

      <div className={`${styles.bubble} ${styles.bUser}`}>
        Where's my order?
      </div>
      <div className={`${styles.bubble} ${styles.bAi}`}>
        Tracked. Out for delivery today by 4 PM.
      </div>
      <div className={`${styles.bubble} ${styles.bUser2}`}>
        Reschedule to tomorrow?
      </div>
      <div className={`${styles.bubble} ${styles.bAi2}`}>
        <span className={styles.typing}>
          <span /><span /><span />
        </span>
      </div>

      <div className={styles.channels}>
        <span>WEB</span>
        <span>WHATSAPP</span>
        <span>VOICE</span>
      </div>
    </div>
  );
}
