import { Outlet, useLocation } from "react-router-dom";
import styles from "./PageTransition.module.css";

/**
 * Wraps the routed Outlet and animates each page in on mount. Re-mounts on
 * every pathname change via `key={pathname}` — React unmounts the previous
 * page and mounts the new one, which triggers the CSS `pageEnter` animation
 * on the fresh element. Pairs with `ScrollToTop` which resets scroll
 * synchronously before this animation begins.
 */
export function PageTransition() {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className={styles.page}>
      <Outlet />
    </div>
  );
}
