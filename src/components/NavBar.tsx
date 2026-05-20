import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { PRIMARY_NAV } from "../data/nav";
import { LocalizedLink, LocalizedNavLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import { Button } from "./Button";
import { LanguageSwitch } from "./LanguageSwitch";
import styles from "./NavBar.module.css";

const MEGA_CLOSE_DELAY_MS = 150;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const megaCloseTimer = useRef<number | null>(null);
  const location = useLocation();
  const t = useT();

  const cancelMegaClose = () => {
    if (megaCloseTimer.current !== null) {
      window.clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
  };

  const openMega = (label: string) => {
    cancelMegaClose();
    setOpenMenu(label);
  };

  const scheduleMegaClose = () => {
    cancelMegaClose();
    megaCloseTimer.current = window.setTimeout(() => {
      setOpenMenu(null);
      megaCloseTimer.current = null;
    }, MEGA_CLOSE_DELAY_MS);
  };

  useEffect(() => () => cancelMegaClose(), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  const handleMobileLinkClick = () => {
    setOpen(false);
    setOpenMenu(null);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflowY = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflowY = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={[styles.header, scrolled ? styles.scrolled : ""].filter(Boolean).join(" ")}
    >
      <a href="#main-content" className="skip-to-content">
        {t("nav.skipToContent")}
      </a>

      <div className={styles.inner}>
        <LocalizedLink
          to="/"
          className={styles.logo}
          aria-label={t("nav.home")}
          onClick={() => {
            window.scrollTo(0, 0);
            setOpen(false);
          }}
        >
          <span className={styles.logoText}>{t("brand.name")}</span>
        </LocalizedLink>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {PRIMARY_NAV.map((item) => {
              const label = t(item.labelKey);
              return (
                <li
                  key={item.labelKey}
                  className={styles.navItem}
                  onMouseEnter={() => openMega(item.labelKey)}
                  onMouseLeave={scheduleMegaClose}
                  onFocus={() => openMega(item.labelKey)}
                  onBlur={scheduleMegaClose}
                >
                  {item.items && item.items.length > 0 ? (
                    <>
                      <LocalizedNavLink
                        to={item.href}
                        className={({ isActive }) =>
                          [styles.navLink, isActive ? styles.navLinkActive : ""]
                            .filter(Boolean)
                            .join(" ")
                        }
                        aria-expanded={openMenu === item.labelKey}
                        aria-haspopup="true"
                      >
                        {label}
                        <span className={styles.caret} aria-hidden="true">▾</span>
                      </LocalizedNavLink>
                      {openMenu === item.labelKey && (
                        <div className={styles.megaMenu} role="menu">
                          <ul className={styles.megaList}>
                            {item.items.map((child) => (
                              <li key={child.labelKey}>
                                <LocalizedNavLink
                                  to={child.href}
                                  className={({ isActive }) =>
                                    [styles.megaLink, isActive ? styles.megaLinkActive : ""]
                                      .filter(Boolean)
                                      .join(" ")
                                  }
                                >
                                  <span className={styles.megaLinkTitle}>{t(child.labelKey)}</span>
                                </LocalizedNavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <LocalizedNavLink
                      to={item.href}
                      className={({ isActive }) =>
                        [styles.navLink, isActive ? styles.navLinkActive : ""]
                          .filter(Boolean)
                          .join(" ")
                      }
                    >
                      {label}
                    </LocalizedNavLink>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LanguageSwitch />
          <LocalizedLink to="/contact">
            <Button variant="dark" size="sm">
              {t("nav.getStarted")}
            </Button>
          </LocalizedLink>
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          className={styles.hamburger}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className={styles.mobileOverlay} role="dialog">
          <ul className={styles.mobileList}>
            {PRIMARY_NAV.map((item) => (
              <li key={item.labelKey} className={styles.mobileItem}>
                <LocalizedNavLink
                  to={item.href}
                  className={styles.mobileParent}
                  onClick={handleMobileLinkClick}
                >
                  {t(item.labelKey)}
                </LocalizedNavLink>
                {item.items && item.items.length > 0 && (
                  <ul className={styles.mobileChildren}>
                    {item.items.map((child) => (
                      <li key={child.labelKey}>
                        <LocalizedNavLink
                          to={child.href}
                          className={styles.mobileChild}
                          onClick={handleMobileLinkClick}
                        >
                          {t(child.labelKey)}
                        </LocalizedNavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className={styles.mobileCta}>
              <LocalizedLink to="/contact" onClick={handleMobileLinkClick}>
                <Button variant="primary">{t("nav.getStarted")}</Button>
              </LocalizedLink>
            </li>
            <li className={styles.mobileLangSwitch}>
              <LanguageSwitch />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
