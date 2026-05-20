import type { ServiceDetail } from "../service-detail";

// All copy verbatim from _planning/content/services/BUSINESS_ANALYTICS.md.

export const businessAnalytics: ServiceDetail = {
  slug: "business-analytics",

  hero: {
    headline: /* i18n */ "Business Analytics",
    subhero: /* i18n */ "Turning Data into Decisions — At Speed and Scale.",
    supporting:
      /* i18n */
      "Enterprise-grade BI strategy, dashboard development, and governance — engineered for adoption, not just delivery. Built on certified Power BI, Tableau, and Qlik expertise, with deep industry depth in insurance, IT operations, energy, manufacturing, and retail.",
    primaryCta: { label: /* i18n */ "Request a BI Assessment", to: "/contact?service=business-analytics" },
    secondaryCta: { label: /* i18n */ "Explore Customer Stories", to: "/about/customer-stories" },
  },

  about: {
    heading: /* i18n */ "From Reports to Real Decisions",
    paragraphs: [
      /* i18n */
      "Most enterprises don't suffer from a lack of data — they suffer from a lack of trusted, actionable insights. Dashboards exist, but adoption is low. Reports are produced, but decisions still wait.",
      /* i18n */
      "Techknomatic helps organisations close that gap with end-to-end Business Analytics services that combine strategy, design-led dashboard development, governance, and adoption — so the analytics you invest in actually change how the business decides.",
      /* i18n */
      "Built on deep, certified expertise across Power BI, Tableau, Qlik, and custom analytics platforms — and backed by strong data engineering capabilities — our practice goes beyond traditional reporting. We focus on building end-to-end analytics solutions that drive measurable business outcomes: faster decisions, higher adoption, defensible governance, and a single source of truth your leadership can rely on.",
    ],
  },

  capabilities: {
    sub: /* i18n */ "Five core service offerings that span the full BI lifecycle — from strategy and roadmap to dashboard development, governance, and sustained adoption.",
    cards: [
      {
        index: "01",
        title: "BI Strategy & Roadmap",
        outcome: "Define the analytics future state — platform, data, governance, and adoption — before writing the first dashboard.",
        bullets: [
          "Current-state BI maturity assessment across people, process, platform, and data",
          "Target-state architecture and tool selection (Power BI / Tableau / Qlik / hybrid)",
          "BI roadmap with phased delivery milestones and success metrics",
          "BI Centre of Excellence (CoE) design and operating model",
          "ROI modeling and business case development for analytics investments",
        ],
      },
      {
        index: "02",
        title: "Dashboard Design & Development",
        outcome: "Design-led dashboards engineered for executive clarity, operational decision speed, and analyst depth.",
        bullets: [
          "Executive, operational, and analytical dashboard development",
          "Design-led UX with audience-appropriate information density",
          "Power BI, Tableau, and Qlik native development",
          "Custom visualisation development for specialised analytical needs",
          "Performance optimisation for large-scale enterprise datasets",
          "Mobile-responsive and embedded dashboard delivery",
        ],
      },
      {
        index: "03",
        title: "BI Governance & Centre of Excellence",
        outcome: "Defensible governance that scales analytics without creating bottlenecks — trust as a delivery outcome.",
        bullets: [
          "BI governance framework definition and rollout",
          "Row-level and object-level security implementation",
          "Workspace, dataset, and dashboard certification standards",
          "Version control, deployment pipelines, and DevOps for BI",
          "BI Centre of Excellence operating model and team enablement",
          "Audit, lineage, and compliance reporting",
        ],
      },
      {
        index: "04",
        title: "Self-Service & Embedded Analytics",
        outcome: "Extend BI beyond the BI team — with self-service for business users and embedded analytics in operational applications.",
        bullets: [
          "Self-service BI enablement for business and operational users",
          "Semantic model design for safe, governed self-service",
          "Embedded analytics integration into customer and internal applications",
          "Power BI Embedded and Tableau Embedded implementation",
          "Dataset certification and shared semantic layers",
          "Business user training and analytics literacy programs",
        ],
      },
      {
        index: "05",
        title: "BI Modernisation & Migration",
        outcome: "Move from legacy BI estates to modern cloud analytics — without losing adoption, governance, or institutional knowledge.",
        bullets: [
          "Migration from legacy BI tools (SAP BO, Cognos, MicroStrategy) to modern platforms",
          "Cloud BI modernisation on Azure, AWS, and GCP",
          "Report and dashboard rationalisation — retire, replace, rebuild",
          "Data model and semantic layer modernisation",
          "Coexistence strategy during phased migration",
          "User onboarding and adoption acceleration for the new platform",
        ],
      },
    ],
  },

  tech: {
    sub: /* i18n */ "Deep, certified expertise across the three platforms that dominate enterprise BI — we recommend the right tool for your context, not the one we know best.",
    rows: [
      { category: "Microsoft Power BI", items: "Dashboard development · Paginated reports · Power BI Premium and Embedded · DAX optimisation · Dataflows and semantic models · Row-level security · Power BI Service governance · Azure Synapse and Fabric integration" },
      { category: "Tableau", items: "Tableau Desktop and Server / Cloud · Custom visualisation development · Tableau Prep data preparation · LOD calculations and advanced analytics · Embedded analytics · Multi-tenant governance · Data source certification · Performance optimisation" },
      { category: "Qlik", items: "Qlik Sense and QlikView · Associative engine design · Set analysis and advanced expressions · Qlik NPrinting · Mashup and embedded development · Multi-stream and section-access security · Qlik Cloud governance · Data integration via Qlik connectors" },
    ],
    footnote:
      /* i18n */
      "Data sources we connect to: SAP · Oracle · SQL Server · Salesforce · Snowflake · Databricks · Azure Synapse · BigQuery · Redshift · REST APIs · Flat Files · ServiceNow · Jira · and 50+ enterprise systems.",
  },

  approach: {
    sub: /* i18n */ "A proven 5-step delivery framework that moves you from scattered reports to a trusted analytics environment — adoption built in from day one.",
    steps: [
      { num: "01", phase: "Discover", description: "Assess the current BI estate, business priorities, data landscape, and adoption gaps. Define success criteria and target outcomes with stakeholders." },
      { num: "02", phase: "Design", description: "Architect the BI solution — data model, semantic layer, dashboard structure, governance framework, and security model. Design-led wireframes before development." },
      { num: "03", phase: "Build", description: "Develop dashboards, semantic models, and governance artefacts on the chosen platform. Iterative delivery with stakeholder reviews." },
      { num: "04", phase: "Deploy", description: "Roll out to users with workspace setup, row-level security, deployment pipelines, performance tuning, and integration into existing portals or applications." },
      { num: "05", phase: "Sustain", description: "Drive adoption through training, BI CoE enablement, ongoing dashboard governance, performance monitoring, and continuous improvement cycles." },
    ],
    closingLine: /* i18n */ "Our approach is engineered for adoption — because a dashboard that ships is only valuable if it gets used.",
  },

  differentiators: {
    sub: /* i18n */ "Six differentiators that separate dashboards that ship from dashboards that get used.",
    cards: [
      { title: "Design-Led Dashboard Development", body: "We don't just put data on a screen — we design for the audience, the decision, and the moment of use. Executives, operators, and analysts each get the right level of depth and density." },
      { title: "BI + Data Engineering End-to-End", body: "Our BI practice is backed by a deep Data Engineering capability — so the pipeline behind every dashboard is as engineered as the dashboard itself. No upstream gaps, no broken refreshes." },
      { title: "Multi-Platform Certified Expertise", body: "Certified depth in Power BI, Tableau, and Qlik. We recommend the platform that fits your stack, your skills, and your scale — not the one we're trying to sell." },
      { title: "Adoption-First Delivery", body: "Every engagement includes a structured adoption plan — user enablement, BI CoE operating model, and post-go-live engagement — because the success metric is usage, not delivery." },
      { title: "Industry-Depth Practice", body: "Deep delivery experience in insurance, IT operations and ITSM, oil and gas, manufacturing, and retail — domain context, not just BI tools, in every engagement." },
      { title: "Governance & Trust by Design", body: "Row-level security, certified datasets, deployment pipelines, and audit lineage are built into every delivery — so the analytics scale without becoming a governance liability." },
    ],
  },

  useCases: {
    sub: /* i18n */ "High-impact BI deployments across our priority industries — from executive visibility to operational intelligence.",
    cards: [
      {
        title: "Insurance",
        subtitle: "Enterprise-wide visibility across claims, underwriting, policy servicing, and risk operations.",
        crux: "Unified executive dashboards for claims settlement efficiency, underwriting productivity, premium leakage analysis, fraud indicators, policy lapse trends, and agent/channel performance.",
        industries: "Claims TAT · Loss Ratio · Underwriting Productivity · Policy Renewal Trends · Fraud & Risk",
        outcome: "Improved claims efficiency · Better underwriting control · Stronger portfolio profitability.",
      },
      {
        title: "ITSM & Enterprise Operations",
        subtitle: "Real-time operational intelligence for enterprise IT and shared services.",
        crux: "Centralised BI platforms for SLA adherence, ticket lifecycle, incident trends, service-desk productivity, change-management impact, and infrastructure availability.",
        industries: "SLA Compliance · Incident Trends · MTTR Analysis · Change Success Rate · Service Desk Productivity",
        outcome: "Higher SLA adherence · Faster issue resolution · Improved operational efficiency.",
      },
      {
        title: "Oil & Gas",
        subtitle: "Operational visibility across upstream, midstream, and downstream business functions.",
        crux: "Advanced analytics dashboards for production monitoring, drilling performance, refinery throughput, asset utilisation, safety compliance, procurement spend, and logistics operations.",
        industries: "Production KPIs · Refinery Performance · Asset Utilisation · HSE Compliance · Procurement & Logistics Analytics",
        outcome: "Reduced downtime · Improved operational efficiency · Enhanced compliance visibility.",
      },
      {
        title: "Manufacturing",
        subtitle: "Plant-floor visibility and supply-chain intelligence.",
        crux: "Operational dashboards for OEE tracking, production efficiency, downtime root-cause analysis, quality metrics, inventory movement, and supply-chain visibility.",
        industries: "OEE · Downtime Analysis · Quality KPIs · Inventory Visibility · Supply Chain Analytics",
        outcome: "Higher productivity · Reduced operational waste · Improved delivery reliability.",
      },
      {
        title: "Retail & E-Commerce",
        subtitle: "Turn transaction data into merchandising and customer intelligence.",
        crux: "Sales and customer intelligence dashboards for revenue trends, customer cohorts, inventory movement, campaign performance, basket analytics, and regional demand forecasting.",
        industries: "Sales Trends · Customer Cohorts · Inventory Turn · Basket Analytics · Campaign Performance",
        outcome: "Smarter merchandising · Better customer retention · Improved sales visibility.",
      },
    ],
  },

  cta: {
    heading: /* i18n */ "Ready to turn your data into decisions?",
    sub:
      /* i18n */
      "Request a BI assessment to understand your current analytics maturity, identify the highest-impact opportunities, and see how Techknomatic delivers BI engagements that get used — not just shipped.",
    primary: { label: /* i18n */ "Request a BI Assessment", to: "/contact?service=business-analytics" },
    tagline: /* i18n */ "Business Analytics — Strategy. Dashboards. Governance. Adoption.",
  },
};
