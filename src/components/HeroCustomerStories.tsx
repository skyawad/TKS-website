import styles from "./HeroCustomerStories.module.css";

/**
 * Hero illustration for /about/customer-stories.
 * A rotating stack of testimonial cards with quote marks and a
 * floating outcome KPI tile. Implies "many proof points".
 */
export function HeroCustomerStories() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={`${styles.quoteCard} ${styles.q1}`}>
        <span className={styles.glyph}>&ldquo;</span>
        <p className={styles.qBody}>Closed the loop on claims TAT — we now see it before the customer calls.</p>
        <div className={styles.qFoot}>
          <span className={styles.qWho}>VP Operations</span>
          <span className={styles.qWhere}>Regional insurer · UAE</span>
        </div>
      </div>

      <div className={`${styles.quoteCard} ${styles.q2}`}>
        <span className={styles.glyph}>&ldquo;</span>
        <p className={styles.qBody}>Sub-minute pipeline. Audit caught nothing. That alone justified the engagement.</p>
        <div className={styles.qFoot}>
          <span className={styles.qWho}>Head of Data</span>
          <span className={styles.qWhere}>Upstream operator · Oman</span>
        </div>
      </div>

      <div className={`${styles.quoteCard} ${styles.q3}`}>
        <span className={styles.glyph}>&ldquo;</span>
        <p className={styles.qBody}>Went live in 14 days — and stuck. The team owns the dashboard now.</p>
        <div className={styles.qFoot}>
          <span className={styles.qWho}>Director, IT Services</span>
          <span className={styles.qWhere}>Tech &amp; IT · Dubai</span>
        </div>
      </div>

      <div className={`${styles.kpi} ${styles.kpiTop}`}>
        <span className={styles.kpiVal}>22%</span>
        <span className={styles.kpiLabel}>TAT reduction</span>
      </div>
      <div className={`${styles.kpi} ${styles.kpiBot}`}>
        <span className={styles.kpiVal}>5★</span>
        <span className={styles.kpiLabel}>retention</span>
      </div>
    </div>
  );
}
