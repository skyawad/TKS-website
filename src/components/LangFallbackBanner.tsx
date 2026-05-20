import { useLocation } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useT } from "../i18n/useT";
import styles from "./LangFallbackBanner.module.css";

/** Paths that have full Arabic copy. Pages outside this set show the
 *  English content with a small notice strip telling the Arabic visitor
 *  that an Arabic version is coming. */
const TRANSLATED_PATHS = new Set<string>([
  // English (the LangFallbackBanner only shows in /ar anyway, but
  // these paths are still listed for symmetry / future use).
  "/", "/contact", "/services", "/enterprise-ai", "/platforms", "/industries",
  "/about", "/about/partnerships", "/about/customer-stories",
  // Arabic — pages fully translated to MSA
  "/ar", "/ar/contact", "/ar/services", "/ar/enterprise-ai", "/ar/platforms",
  "/ar/industries", "/ar/about", "/ar/about/partnerships", "/ar/about/customer-stories",
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
