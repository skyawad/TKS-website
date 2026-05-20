import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets window scroll to the top on every route change.
 *
 * React Router does not do this by default — it preserves the previous page's
 * scroll position, which on a long page makes new pages appear to load
 * "mid-content". Mounted once inside the BrowserRouter.
 *
 * Hash navigation (e.g. /contact#contact-form) is left alone so anchor links
 * scroll to their target instead of being yanked to the top.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
