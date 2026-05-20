import styles from "./HeroContact.module.css";

/**
 * Hero illustration for `/contact`.
 *
 * Animated WhatsApp-style conversation: three message bubbles appear in
 * sequence, then a typing indicator, then a "Delivered" check — communicating
 * "real human reply, fast".
 */
export function HeroContact() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.phone}>
        <div className={styles.phoneHead}>
          <div className={styles.avatar}>T</div>
          <div className={styles.headBody}>
            <span className={styles.headName}>Techknomatic</span>
            <span className={styles.headStatus}>
              <span className={styles.headDot} /> online
            </span>
          </div>
        </div>

        <div className={styles.feed}>
          <div className={`${styles.bubble} ${styles.bubbleIn} ${styles.b1}`}>
            <span className={styles.bubbleText}>
              Hi — need analytics for our DIFC ops.
            </span>
            <span className={styles.bubbleTime}>10:24</span>
          </div>

          <div className={`${styles.bubble} ${styles.bubbleOut} ${styles.b2}`}>
            <span className={styles.bubbleText}>
              Great to hear from you. Let's scope it — 30 mins?
            </span>
            <span className={styles.bubbleTime}>
              10:24 <span className={styles.tick}>✓✓</span>
            </span>
          </div>

          <div className={`${styles.bubble} ${styles.bubbleIn} ${styles.b3}`}>
            <span className={styles.bubbleText}>
              Sunday 11:00 GST works.
            </span>
            <span className={styles.bubbleTime}>10:25</span>
          </div>

          <div className={`${styles.bubble} ${styles.bubbleOut} ${styles.typing}`}>
            <span className={styles.typingDot} />
            <span className={styles.typingDot} />
            <span className={styles.typingDot} />
          </div>
        </div>
      </div>

      <div className={styles.reply}>
        <span className={styles.replyDot} />
        <span className={styles.replyText}>
          <strong>~2 hours</strong> avg reply · Sun–Thu GST
        </span>
      </div>
    </div>
  );
}
