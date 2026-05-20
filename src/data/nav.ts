/**
 * Site navigation structure — single source of truth for NavBar + Footer.
 * `labelKey` references a string in src/i18n/strings.ts for translation.
 */

export interface NavLink {
  readonly labelKey: string;
  readonly href: string;
}

export interface NavSection {
  readonly labelKey: string;
  readonly href: string;
  /** Sub-items rendered as a dropdown on desktop, inline list on mobile. */
  readonly items?: readonly NavLink[];
}

export const PRIMARY_NAV: readonly NavSection[] = [
  {
    labelKey: "nav.services",
    href: "/services",
    items: [
      { labelKey: "services.businessAnalytics",  href: "/services/business-analytics" },
      { labelKey: "services.dataEngineering",    href: "/services/data-engineering" },
      { labelKey: "services.dataAiStrategy",     href: "/services/data-ai-strategy" },
      { labelKey: "services.geospatial",         href: "/services/geospatial-analytics" },
      { labelKey: "services.managed",            href: "/services/managed-services" },
    ],
  },
  {
    labelKey: "nav.enterpriseAi",
    href: "/enterprise-ai",
    items: [
      { labelKey: "eai.assistIq",   href: "/enterprise-ai/assist-iq" },
      { labelKey: "eai.ticketIq",   href: "/enterprise-ai/ticket-iq" },
      { labelKey: "eai.callopsAi",  href: "/enterprise-ai/callops-ai" },
      { labelKey: "eai.cxoNexus",   href: "/enterprise-ai/cxo-nexus" },
    ],
  },
  {
    labelKey: "nav.platforms",
    href: "/platforms",
    items: [
      { labelKey: "platforms.insightSm",    href: "/platforms/insight-sm" },
      { labelKey: "platforms.datapulseIq",  href: "/platforms/datapulse-iq" },
      { labelKey: "platforms.parseIq",      href: "/platforms/parse-iq" },
      { labelKey: "platforms.freightIq",    href: "/platforms/freight-iq" },
    ],
  },
  {
    labelKey: "nav.industries",
    href: "/industries",
    items: [
      { labelKey: "industries.oilGas",         href: "/industries/oil-and-gas" },
      { labelKey: "industries.insurance",      href: "/industries/insurance" },
      { labelKey: "industries.techIt",         href: "/industries/tech-it-services" },
      { labelKey: "industries.manufacturing",  href: "/industries/manufacturing" },
    ],
  },
  {
    labelKey: "nav.about",
    href: "/about",
    items: [
      { labelKey: "about.company",          href: "/about" },
      { labelKey: "about.partnerships",     href: "/about/partnerships" },
      { labelKey: "about.careers",          href: "/about/careers" },
      { labelKey: "about.faqs",             href: "/about/faqs" },
      { labelKey: "about.customerStories",  href: "/about/customer-stories" },
    ],
  },
] as const;

/** Footer-only sitemap links not duplicated in primary nav. */
export const FOOTER_EXTRAS: readonly NavLink[] = [
  { labelKey: "nav.contact", href: "/contact" },
] as const;
