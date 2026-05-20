/**
 * Site navigation structure — single source of truth for NavBar + Footer.
 * `labelKey` references a string in src/i18n/strings.ts for translation.
 */

import type { IconName } from "../components/Icon";

export interface NavLink {
  readonly labelKey: string;
  readonly href: string;
  readonly iconName?: IconName;
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
      { labelKey: "services.businessAnalytics",  href: "/services/business-analytics",   iconName: "analytics"    },
      { labelKey: "services.dataEngineering",    href: "/services/data-engineering",     iconName: "data-eng"     },
      { labelKey: "services.dataAiStrategy",     href: "/services/data-ai-strategy",     iconName: "ai-strategy"  },
      { labelKey: "services.geospatial",         href: "/services/geospatial-analytics", iconName: "geospatial"   },
      { labelKey: "services.managed",            href: "/services/managed-services",     iconName: "managed"      },
    ],
  },
  {
    labelKey: "nav.enterpriseAi",
    href: "/enterprise-ai",
    items: [
      { labelKey: "eai.assistIq",   href: "/enterprise-ai/assist-iq",  iconName: "assistant" },
      { labelKey: "eai.ticketIq",   href: "/enterprise-ai/ticket-iq",  iconName: "ticket"    },
      { labelKey: "eai.callopsAi",  href: "/enterprise-ai/callops-ai", iconName: "callops"   },
      { labelKey: "eai.cxoNexus",   href: "/enterprise-ai/cxo-nexus",  iconName: "cxo"       },
    ],
  },
  {
    labelKey: "nav.platforms",
    href: "/platforms",
    items: [
      { labelKey: "platforms.insightSm",    href: "/platforms/insight-sm",   iconName: "tech-it"     },
      { labelKey: "platforms.datapulseIq",  href: "/platforms/datapulse-iq", iconName: "data-eng"    },
      { labelKey: "platforms.parseIq",      href: "/platforms/parse-iq",     iconName: "ai-strategy" },
      { labelKey: "platforms.freightIq",    href: "/platforms/freight-iq",   iconName: "managed"     },
    ],
  },
  {
    labelKey: "nav.industries",
    href: "/industries",
    items: [
      { labelKey: "industries.oilGas",         href: "/industries/oil-and-gas",       iconName: "oil-gas"       },
      { labelKey: "industries.insurance",      href: "/industries/insurance",         iconName: "insurance"     },
      { labelKey: "industries.techIt",         href: "/industries/tech-it-services",  iconName: "tech-it"       },
      { labelKey: "industries.manufacturing",  href: "/industries/manufacturing",     iconName: "manufacturing" },
    ],
  },
  {
    labelKey: "nav.about",
    href: "/about",
    items: [
      { labelKey: "about.company",          href: "/about",                    iconName: "cxo"        },
      { labelKey: "about.partnerships",     href: "/about/partnerships",       iconName: "inclusion"  },
      { labelKey: "about.careers",          href: "/about/careers",            iconName: "innovation" },
      { labelKey: "about.faqs",             href: "/about/faqs",               iconName: "assistant"  },
      { labelKey: "about.customerStories",  href: "/about/customer-stories",   iconName: "ethics"     },
    ],
  },
] as const;

/** Footer-only sitemap links not duplicated in primary nav. */
export const FOOTER_EXTRAS: readonly NavLink[] = [
  { labelKey: "nav.contact", href: "/contact" },
] as const;
