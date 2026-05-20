import { useLanguage } from "./LanguageContext";
import { tr } from "./strings";

/**
 * Returns a translator bound to the active language.
 * Usage: const t = useT(); t("nav.contact"); t("footer.legal", { year: 2026 });
 */
export function useT() {
  const { lang } = useLanguage();
  return (key: string, vars?: Record<string, string | number>) => tr(lang, key, vars);
}
