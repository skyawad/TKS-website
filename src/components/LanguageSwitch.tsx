import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useT } from "../i18n/useT";
import styles from "./LanguageSwitch.module.css";

/**
 * EN / AR pill switcher. Renders both options inline so the alternate
 * language is one tap away — and so it's a real anchor for keyboard /
 * screen-reader users.
 */
export function LanguageSwitch() {
  const { lang, switchHref } = useLanguage();
  const t = useT();

  return (
    <div className={styles.wrap} role="group" aria-label="Language">
      <Link
        to={switchHref("en")}
        className={lang === "en" ? `${styles.opt} ${styles.optActive}` : styles.opt}
        aria-current={lang === "en" ? "true" : undefined}
        aria-label={t("lang.switchToEnglish")}
        lang="en"
      >
        EN
      </Link>
      <span className={styles.divider} aria-hidden="true">·</span>
      <Link
        to={switchHref("ar")}
        className={lang === "ar" ? `${styles.opt} ${styles.optActive}` : styles.opt}
        aria-current={lang === "ar" ? "true" : undefined}
        aria-label={t("lang.switchToArabic")}
        lang="ar"
      >
        AR
      </Link>
    </div>
  );
}
