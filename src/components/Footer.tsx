import { CONTACT } from "../data/contact";
import { PRIMARY_NAV, FOOTER_EXTRAS } from "../data/nav";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./Footer.module.css";

export function Footer() {
  const t = useT();
  const practice = PRIMARY_NAV.find((n) => n.labelKey === "nav.services")?.items ?? [];
  const products = PRIMARY_NAV.find((n) => n.labelKey === "nav.enterpriseAi")?.items ?? [];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <LocalizedLink to="/" className={styles.logo} aria-label={t("nav.home")}>
            <span className={styles.logoText}>{t("brand.name")}</span>
          </LocalizedLink>
          <p className={styles.blurb}>{t("footer.blurb")}</p>
          <address className={styles.contact}>
            <div>{CONTACT.dubaiOffice}</div>
            <div>
              <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
            </div>
            <div>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </address>
        </div>

        <div>
          <h5 className={styles.heading}>{t("footer.practice")}</h5>
          <ul className={styles.list}>
            {practice.map((item) => (
              <li key={item.labelKey}>
                <LocalizedLink to={item.href}>{t(item.labelKey)}</LocalizedLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className={styles.heading}>{t("footer.products")}</h5>
          <ul className={styles.list}>
            {products.map((item) => (
              <li key={item.labelKey}>
                <LocalizedLink to={item.href}>{t(item.labelKey)}</LocalizedLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className={styles.heading}>{t("footer.company")}</h5>
          <ul className={styles.list}>
            <li>
              <LocalizedLink to="/about">{t("footer.about")}</LocalizedLink>
            </li>
            {FOOTER_EXTRAS.map((item) => (
              <li key={item.labelKey}>
                <LocalizedLink to={item.href}>{t(item.labelKey)}</LocalizedLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.legal}>
        <span>{t("footer.legal", { year: new Date().getFullYear() })}</span>
        <span className={styles.compliance}>{t("footer.compliance")}</span>
        <LocalizedLink to="/preview-404" className={styles.preview}>
          {t("footer.preview404")}
        </LocalizedLink>
      </div>
    </footer>
  );
}
