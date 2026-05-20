import type { ServiceDetail } from "../service-detail";

// All copy verbatim from _planning/content/services/GEOSPATIAL.md.

export const geospatialAnalytics: ServiceDetail = {
  slug: "geospatial-analytics",

  hero: {
    headline: /* i18n */ "Geospatial Analytics",
    subhero: /* i18n */ "Location-Driven Intelligence for Smarter Decisions.",
    supporting:
      /* i18n */
      "Enterprise-grade GIS strategy, ArcGIS implementation, mobile field operations, and geo-dashboards — engineered to put location at the centre of business decisions for Gulf enterprises.",
    primaryCta: { label: /* i18n */ "Book a GIS Discovery Call", to: "/contact?service=geospatial-analytics" },
    secondaryCta: { label: /* i18n */ "Explore Customer Stories", to: "/about/customer-stories" },
    trustLine: /* i18n */ "ESRI Silver Partner · Delivered across India, UAE, and Oman.",
  },

  about: {
    heading: /* i18n */ "Where Your Business Happens — Mapped, Measured, and Monetised",
    paragraphs: [
      /* i18n */
      "Most enterprise decisions have a \"where\" attached to them — where customers live, where assets move, where risks concentrate, where territories overlap. Yet location data often sits trapped in source systems, disconnected from analytics layers and invisible to decision-makers. Techknomatic helps organisations unlock that intelligence with end-to-end geospatial analytics services built on the ESRI ArcGIS platform.",
      /* i18n */
      "As an ESRI Silver Partner, we deliver full-stack GIS implementations — from ArcGIS Enterprise and Online setup to mobile field operations, geo-dashboards, route optimisation, and spatial risk analytics. Our work spans BFSI, Mining & Energy, Pharma, Utilities, Retail, and Agriculture, with proven delivery across India, UAE, and Oman — giving enterprises the location intelligence layer that traditional BI alone can't provide.",
    ],
  },

  capabilities: {
    sub: /* i18n */ "Six core capabilities that span the full geospatial analytics lifecycle — from platform to field to dashboard.",
    cards: [
      { index: "01", title: "ArcGIS Platform Implementation", outcome: "Full-stack ArcGIS implementation across Enterprise, Online, and Pro for enterprise-grade GIS environments." },
      { index: "02", title: "Geo-Dashboards & Visualisations", outcome: "Interactive map visualisations built in ArcGIS, Power BI Maps, Tableau, and Qlik." },
      { index: "03", title: "Field Operations & Mobile GIS", outcome: "ArcGIS Field Maps and Survey123 for real-time field data collection and asset management." },
      { index: "04", title: "Location Data Integration", outcome: "Seamless integration with SAP, Salesforce, IoT systems, and external geodata sources." },
      { index: "05", title: "Route Optimisation & Territory Planning", outcome: "Data-driven territory design and route optimisation for sales, service, and logistics teams." },
      { index: "06", title: "Spatial Risk & Pattern Detection", outcome: "Heatmaps, fraud clustering, and spatial pattern analysis for risk management and underwriting." },
    ],
  },

  tech: {
    sub: /* i18n */ "A platform stack built around ESRI ArcGIS — extended with mobile, BI, and enterprise integration capabilities.",
    rows: [
      { category: "GIS Platforms", items: "ESRI ArcGIS Enterprise · ArcGIS Online · ArcGIS Pro" },
      { category: "Mobile GIS", items: "ArcGIS Field Maps · QuickCapture · Survey123 · Workforce" },
      { category: "BI Integration", items: "Power BI Maps · Tableau (StoryQ) · Qlik GeoAnalytics" },
      { category: "Enterprise Integration", items: "Azure · Salesforce · Talend · REST APIs · IoT Data Streams" },
    ],
    footnote: /* i18n */ "Supported data formats: Shapefiles · GeoJSON · KML · raster imagery · multispectral data · CAD drawings.",
  },

  approach: {
    sub: /* i18n */ "A proven 5-step delivery framework that takes you from spatial discovery to enterprise-scale GIS adoption.",
    steps: [
      { num: "01", phase: "Discover", description: "Understand spatial business questions, assess available location data, and map integration points." },
      { num: "02", phase: "Design", description: "Define GIS architecture — data layers, coordinate systems, integration topology, and visualisation strategy." },
      { num: "03", phase: "Build", description: "Configure the ArcGIS environment, build geo-dashboards, and integrate with source systems and BI tools." },
      { num: "04", phase: "Field-Enable", description: "Deploy mobile GIS apps, configure offline data collection, and train field teams." },
      { num: "05", phase: "Scale & Govern", description: "Establish geodata governance, automate refresh pipelines, and expand to new use cases and regions." },
    ],
  },

  differentiators: {
    sub: /* i18n */ "Six differentiators that set our GIS practice apart — from platform credentials to delivery depth.",
    cards: [
      { title: "ESRI Silver Partner", body: "Authorised reseller and implementation partner for the ArcGIS platform — direct vendor support and licensing." },
      { title: "GIS + BI Integration Experts", body: "We combine geospatial precision with best-in-class BI for unified, location-aware insights." },
      { title: "Cross-Industry Delivery", body: "GIS projects delivered across BFSI, Mining, Pharma, Government, Retail, and Agriculture." },
      { title: "Full-Stack Ownership", body: "Strategy → Build → Deploy → Support. One accountable partner across the entire GIS lifecycle." },
      { title: "Proven ROI", body: "GIS projects delivered across India, UAE, and Oman — with measurable, documented business outcomes." },
      { title: "Field-to-Enterprise Coverage", body: "From mobile field data collection to executive geo-dashboards — we cover the full spectrum." },
    ],
  },

  useCases: {
    sub: /* i18n */ "Four high-impact geospatial intelligence programs we deliver for enterprises.",
    cards: [
      {
        title: "Geospatial Location Intelligence & Market Expansion Analytics",
        subtitle: "Transform enterprise entity data into a spatial intelligence engine for sales and market growth.",
        crux: "Geo-code and classify 10,000+ enterprise entities from business directories and branch datasets into a centralised spatial master database. Apply proximity mapping, territory optimisation, white-space analysis, and hotspot detection to identify high-potential sales corridors and improve market coverage visibility.",
        industries: "BFSI · Retail · Telecom · Logistics · FMCG",
        outcome: "Improved territory planning · Faster expansion decisions · Optimised market coverage.",
      },
      {
        title: "Geospatial Healthcare Intelligence & Hospital Network Analytics",
        subtitle: "Analyse healthcare accessibility and optimise facility network expansion using advanced GIS.",
        crux: "Integrate hospital locations, service coverage data, and demographic layers into a spatial healthcare intelligence platform. Use drive-time mapping, KDE, catchment-area modelling, and underserved region (white-space) analysis to optimise healthcare expansion planning and service coverage across target geographies.",
        industries: "Healthcare · HealthTech · Insurance · Public Health · Hospital Networks",
        outcome: "Improved accessibility analysis · Optimised expansion planning · Enhanced coverage visibility.",
      },
      {
        title: "Geospatial Site Suitability & Retail Expansion Analytics",
        subtitle: "Identify high-potential outlet locations using multi-criteria spatial intelligence.",
        crux: "Integrate outlet data, traffic patterns, competitor presence, POI, and demographic profiles into a spatial suitability engine. Apply multi-criteria analysis, footfall heatmaps, delivery-zone optimisation, and trade-area modelling to evaluate site feasibility and accelerate data-driven outlet expansion decisions.",
        industries: "QSR · Retail · FMCG · Food & Beverage · Franchise Expansion",
        outcome: "Improved site selection · Reduced expansion risk · Optimised delivery coverage.",
      },
      {
        title: "Geospatial Oil Spill Detection & Environmental Monitoring Analytics",
        subtitle: "Detect, monitor, and respond to environmental risks using remote sensing and GIS.",
        crux: "Process high-resolution aerial and satellite imagery alongside pipeline corridor data to detect oil-spill anomalies, map affected zones, and assess environmental impact. Apply OBIA, spectral analysis, change detection, and geo-fencing to enable proactive risk management and faster emergency response planning across operational corridors.",
        industries: "Oil & Gas · Energy · Environmental Monitoring · Utilities · Pipeline Infrastructure",
        outcome: "Improved spill detection · Faster risk identification · Enhanced compliance readiness.",
      },
    ],
  },

  cta: {
    heading: /* i18n */ "Ready to add location intelligence to your analytics?",
    sub:
      /* i18n */
      "Book a GIS discovery call to explore how spatial analytics can transform your business decisions — from field operations to executive dashboards.",
    primary: { label: /* i18n */ "Book a GIS Discovery Call", to: "/contact?service=geospatial-analytics" },
  },
};
