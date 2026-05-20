import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

export type Lang = "en" | "ar";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  /** Prefix a route path with /ar when in Arabic mode. */
  locHref: (path: string) => string;
  /** Swap the language portion of the current URL. */
  switchHref: (target: Lang) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface ProviderProps {
  children: ReactNode;
}

/**
 * Single source of truth for site language. Derives `lang` from URL pathname
 * (anything under /ar is Arabic; everything else is English) and writes the
 * matching `dir` + `lang` attributes onto <html>.
 */
export function LanguageProvider({ children }: ProviderProps) {
  const { pathname } = useLocation();
  const lang: Lang = pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    dir,
    locHref: (path: string) => {
      const normalised = path.startsWith("/") ? path : `/${path}`;
      if (lang === "en") return normalised;
      if (normalised === "/") return "/ar";
      return `/ar${normalised}`;
    },
    switchHref: (target: Lang) => {
      // Strip a leading /ar if present, then re-add for the target lang.
      let bare = pathname;
      if (bare === "/ar") bare = "/";
      else if (bare.startsWith("/ar/")) bare = bare.slice(3);
      if (target === "en") return bare || "/";
      return bare === "/" ? "/ar" : `/ar${bare}`;
    },
  }), [lang, dir, pathname]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
