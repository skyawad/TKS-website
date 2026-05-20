import { useT } from "../i18n/useT";
import styles from "./HeroCustomerStories.module.css";

/**
 * Hero illustration for /about/customer-stories.
 * A rotating stack of testimonial cards with quote marks and a
 * floating outcome KPI tile. Implies "many proof points".
 */
export function HeroCustomerStories() {
  const t = useT();
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={`${styles.quoteCard} ${styles.q1}`}>
        <span className={styles.glyph}>&ldquo;</span>
        <p className={styles.qBody}>{t("heroAnim.stories.q1.body")}</p>
        <div className={styles.qFoot}>
          <span className={styles.qWho}>{t("heroAnim.stories.q1.who")}</span>
          <span className={styles.qWhere}>{t("heroAnim.stories.q1.where")}</span>
        </div>
      </div>

      <div className={`${styles.quoteCard} ${styles.q2}`}>
        <span className={styles.glyph}>&ldquo;</span>
        <p className={styles.qBody}>{t("heroAnim.stories.q2.body")}</p>
        <div className={styles.qFoot}>
          <span className={styles.qWho}>{t("heroAnim.stories.q2.who")}</span>
          <span className={styles.qWhere}>{t("heroAnim.stories.q2.where")}</span>
        </div>
      </div>

      <div className={`${styles.quoteCard} ${styles.q3}`}>
        <span className={styles.glyph}>&ldquo;</span>
        <p className={styles.qBody}>{t("heroAnim.stories.q3.body")}</p>
        <div className={styles.qFoot}>
          <span className={styles.qWho}>{t("heroAnim.stories.q3.who")}</span>
          <span className={styles.qWhere}>{t("heroAnim.stories.q3.where")}</span>
        </div>
      </div>

      <div className={`${styles.kpi} ${styles.kpiTop}`}>
        <span className={styles.kpiVal}>22%</span>
        <span className={styles.kpiLabel}>{t("heroAnim.stories.kpi1")}</span>
      </div>
      <div className={`${styles.kpi} ${styles.kpiBot}`}>
        <span className={styles.kpiVal}>5★</span>
        <span className={styles.kpiLabel}>{t("heroAnim.stories.kpi2")}</span>
      </div>
    </div>
  );
}
