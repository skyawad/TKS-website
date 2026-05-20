import { useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useT } from "../i18n/useT";
import styles from "./LangFallbackBanner.module.css";

/** Paths that have full Arabic copy. Pages outside this set show the
 *  English content with a small notice strip telling the Arabic visitor
 *  that an Arabic version is coming. */
const TRANSLATED_PATHS = new Set<string>([
  "/", "/contact",
  "/ar", "/ar/contact",
]);

export function LangFallbackBanner() {
  const { lang } = useLanguage();
  const { pathname } = useLocation();
  const t = useT();

  if (lang !== "ar") return null;
  if (TRANSLATED_PATHS.has(pathname)) return null;

  return (
    <div className={styles.banner} role="status">
      <span className={styles.icon} aria-hidden="true">ℹ️</span>
      <span className={styles.text}>{t("lang.fallbackBanner")}</span>
    </div>
  );
}
