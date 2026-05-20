import { useLocation } from "react-router-dom";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./Breadcrumbs.module.css";

const SECTION_KEY: Record<string, string> = {
  "services":      "nav.services",
  "enterprise-ai": "nav.enterpriseAi",
  "platforms":     "nav.platforms",
  "industries":    "nav.industries",
  "about":         "nav.about",
  "contact":       "nav.contact",
};

const LEAF_KEY: Record<string, Record<string, string>> = {
  "services": {
    "business-analytics":   "services.businessAnalytics",
    "data-engineering":     "services.dataEngineering",
    "data-ai-strategy":     "services.dataAiStrategy",
    "geospatial-analytics": "services.geospatial",
    "managed-services":     "services.managed",
  },
  "enterprise-ai": {
    "assist-iq":  "eai.assistIq",
    "ticket-iq":  "eai.ticketIq",
    "callops-ai": "eai.callopsAi",
    "cxo-nexus":  "eai.cxoNexus",
  },
  "platforms": {
    "insight-sm":   "platforms.insightSm",
    "datapulse-iq": "platforms.datapulseIq",
    "parse-iq":     "platforms.parseIq",
    "freight-iq":   "platforms.freightIq",
  },
  "industries": {
    "oil-and-gas":      "industries.oilGas",
    "insurance":        "industries.insurance",
    "tech-it-services": "industries.techIt",
    "manufacturing":    "industries.manufacturing",
  },
  "about": {
    "partnerships":     "about.partnerships",
    "careers":          "about.careers",
    "faqs":             "about.faqs",
    "customer-stories": "about.customerStories",
  },
};

function titleCase(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs() {
  const t = useT();
  const { pathname } = useLocation();

  let path = pathname;
  if (path === "/ar") path = "/";
  else if (path.startsWith("/ar/")) path = path.slice(3);

  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const crumbs: Crumb[] = [{ label: t("bc.home"), to: "/" }];
  const section = segments[0];
  const sectionLabel = SECTION_KEY[section] ? t(SECTION_KEY[section]) : titleCase(section);

  if (segments.length === 1) {
    crumbs.push({ label: sectionLabel });
  } else {
    crumbs.push({ label: sectionLabel, to: `/${section}` });
    const leaf = segments[1];
    const leafKey = LEAF_KEY[section]?.[leaf];
    crumbs.push({ label: leafKey ? t(leafKey) : titleCase(leaf) });
  }

  return (
    <nav className={styles.wrap} aria-label={t("bc.label")}>
      <div className={styles.inner}>
        <ol className={styles.list}>
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={i} className={styles.item}>
                {c.to && !isLast ? (
                  <LocalizedLink to={c.to} className={styles.link}>{c.label}</LocalizedLink>
                ) : (
                  <span className={styles.current} aria-current="page">{c.label}</span>
                )}
                {!isLast && <span className={styles.sep} aria-hidden="true">{">"}</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
