import styles from "./HeroGeospatial.module.css";

/**
 * Hero illustration for /services/geospatial-analytics.
 * Stylised map with dot-grid background, location pins dropping in
 * sequence, and a route line being drawn between them.
 */
export function HeroGeospatial() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.grid} />

      <svg className={styles.routeSvg} viewBox="0 0 400 360" preserveAspectRatio="none">
        <path
          className={styles.route}
          d="M 80 90 Q 160 60 220 140 T 340 220"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
      </svg>

      <div className={`${styles.pin} ${styles.pinOne}`}>
        <div className={styles.pinDrop}>
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
            <path d="M 10 25 C 10 25 18 15 18 9 C 18 4 14 0 10 0 C 6 0 2 4 2 9 C 2 15 10 25 10 25 Z" fill="var(--brand)" />
            <circle cx="10" cy="9" r="3" fill="var(--canvas)" />
          </svg>
        </div>
      </div>
      <div className={`${styles.pin} ${styles.pinTwo}`}>
        <div className={styles.pinDrop}>
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
            <path d="M 10 25 C 10 25 18 15 18 9 C 18 4 14 0 10 0 C 6 0 2 4 2 9 C 2 15 10 25 10 25 Z" fill="var(--icon-purple)" />
            <circle cx="10" cy="9" r="3" fill="var(--canvas)" />
          </svg>
        </div>
      </div>
      <div className={`${styles.pin} ${styles.pinThree}`}>
        <div className={styles.pinDrop}>
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
            <path d="M 10 25 C 10 25 18 15 18 9 C 18 4 14 0 10 0 C 6 0 2 4 2 9 C 2 15 10 25 10 25 Z" fill="var(--icon-blue)" />
            <circle cx="10" cy="9" r="3" fill="var(--canvas)" />
          </svg>
        </div>
      </div>
      <div className={`${styles.pin} ${styles.pinFour}`}>
        <div className={styles.pinDrop}>
          <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
            <path d="M 10 25 C 10 25 18 15 18 9 C 18 4 14 0 10 0 C 6 0 2 4 2 9 C 2 15 10 25 10 25 Z" fill="var(--icon-green)" />
            <circle cx="10" cy="9" r="3" fill="var(--canvas)" />
          </svg>
        </div>
      </div>

      <div className={styles.coord}>
        <span className={styles.coordLine}>N 25.197°</span>
        <span className={styles.coordLine}>E 55.274°</span>
        <span className={styles.coordLabel}>DIFC · Dubai</span>
      </div>

      <div className={styles.compass} aria-hidden="true">
        <span className={styles.compassN}>N</span>
        <span className={styles.compassArrow}>↑</span>
      </div>
    </div>
  );
}
