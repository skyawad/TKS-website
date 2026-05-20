import type { ProductDetail } from "./product-detail";

const INSURANCE: ProductDetail = {
  slug: "insurance",
  kind: "platform",
  icon: "insurance",
  tone: "blue",
  hero: {
    eyebrow: "Insurance",
    headline: "Turning claims complexity into clarity, powered by AI.",
    subhero: "AI, geospatial, and analytics for modern carriers.",
    lead: "From underwriting to claims to renewals — we turn fragmented insurance data into decisions that move loss ratios, customer experience, and TAT in the right direction.",
    primary: { label: "Start a conversation", to: "/contact" },
    secondary: { label: "See customer stories", to: "/about/customer-stories" },
    trustLine: "ESRI-powered geo-analytics have helped carriers reduce claim TAT by 22%.",
  },
  problem: {
    heading: "Where insurance leaders lose time and margin.",
    lead: "Underwriting waits on data. Claims wait on documents. Renewals leak silently. The middle is where analytics, AI, and integration pay back fast.",
    pains: [
      "Claim TAT stretches across departments and reinsurance handoffs.",
      "Underwriting risk-pricing relies on stale or third-party data.",
      "Fraud signals scatter across claims, policy, and provider systems.",
      "Renewal churn isn't predicted early enough to intervene.",
      "Geospatial risk (flood, fire, motor density) isn't priced in.",
      "Document-heavy workflows (KYC, claims, medical) drag cycle times.",
      "Regulatory reporting is manual and late.",
      "Customer self-service lags banking — and customers notice.",
    ],
  },
  capabilities: {
    sub: "Analytics modules we have shipped across UAE and GCC carriers — each modular, each integration-flexible.",
    cards: [
      { title: "Claims analytics & TAT", outcome: "Cycle-time visibility from FNOL to settlement, with bottleneck attribution.", bullets: ["FNOL-to-settlement decomposition", "Per-product, per-channel TAT", "Bottleneck attribution by stage", "Reserving accuracy and variance", "Reinsurance handoff tracking"] },
      { title: "Underwriting intelligence", outcome: "Risk pricing grounded in current data, not last year's loss runs.", bullets: ["Quote-bind-issue funnel", "Loss-ratio by segment and producer", "Re-pricing recommendations", "Geo-risk overlays (flood, fire)", "Renewal-risk scoring"] },
      { title: "Fraud signals", outcome: "Suspect-claim flagging in days, not after-the-fact.", bullets: ["Cross-product fraud network detection", "Provider/garage anomaly clustering", "Photo-document tamper detection", "Cross-claim entity resolution", "Audit-grade evidence trails"] },
      { title: "Geospatial analytics (ESRI)", outcome: "Location intelligence built into pricing and ops.", bullets: ["ArcGIS-based risk mapping", "Branch- and pincode-level analytics", "Catastrophe exposure visualisation", "Field-survey mobile workflows", "ESRI Silver Partner delivery"] },
      { title: "Document AI (ParseIQ)", outcome: "Claims documents and KYC forms processed in seconds, not hours.", bullets: ["Arabic + English OCR", "Pre-trained Emirates ID, Iqama extractors", "Claims-document field extraction", "Cross-validation across attachments", "Human-in-the-loop review queues"] },
      { title: "Customer & renewals AI", outcome: "Conversational self-service plus renewal-retention analytics.", bullets: ["AssistIQ for policy and claim queries", "CallOps AI for renewals at scale", "Renewal-churn prediction", "Win-back campaign analytics", "Multilingual customer engagement"] },
    ],
  },
  industries: {
    sub: "Specialised analytics modules per insurance segment.",
    tiles: [
      { name: "General insurance", value: "Motor, property, marine, travel." },
      { name: "Life & health", value: "Underwriting, claims, wellness data." },
      { name: "Takaful", value: "Sharia-compliant analytics and reporting." },
      { name: "Reinsurance", value: "Cession analytics and treaty performance." },
      { name: "Brokers & MGA", value: "Producer scorecards and book analytics." },
      { name: "InsurTech", value: "Embedded BI and AI for digital MGAs." },
    ],
  },
  architecture: {
    sub: "An integration-flexible delivery framework — built around the core systems you already run.",
    steps: [
      { num: "01", phase: "Connect", description: "Native integration with policy admin (Premia, Solartis, custom), claims systems, document stores, and provider APIs." },
      { num: "02", phase: "Unify", description: "Common insurance data model across LOBs; reconciliation across PAS, claims, and finance." },
      { num: "03", phase: "Enrich", description: "Geo-risk, fraud network, document-AI, and external-data signals layered on top of the core data." },
      { num: "04", phase: "Decide", description: "Dashboards, predictive models, and conversational AI surface insight to underwriting, claims, and leadership." },
      { num: "05", phase: "Comply", description: "Regulatory reporting, audit trails, and region-specific residency built into every deployment." },
    ],
  },
  useCases: {
    sub: "Cleared deployments across UAE and GCC carriers.",
    cards: [
      { title: "Claims TAT reduction", subtitle: "Motor + property carrier", crux: "End-to-end claims analytics surfaced the 3 stages costing 60% of TAT. Targeted process + ParseIQ deployment dropped average TAT by 22%.", outcome: "22% claim TAT reduction · Higher CSAT · Lower handling cost." },
      { title: "Geo-risk pricing", subtitle: "Composite carrier", crux: "ESRI-based geo-analytics overlay on motor and property portfolio surfaced 4 zones with 2-3× loss-ratio. Repricing recovered margin within 6 months.", outcome: "Loss-ratio improvement · Better-priced renewals." },
      { title: "Conversational policy service", subtitle: "Health insurer", crux: "AssistIQ + CallOps AI deployed for policy queries, claim status, and renewal reminders in Arabic and English.", outcome: "Higher deflection · Lower call-centre cost · Better renewals." },
    ],
  },
  cta: {
    heading: "From claims chaos to clarity.",
    sub: "Talk to us about your portfolio, your TAT, and the modules that would move the metric fastest.",
    primary: { label: "Start a discovery session", to: "/contact" },
    tagline: "Techknomatic — Insurance Analytics & AI for the Gulf",
  },
};

const OIL_AND_GAS: ProductDetail = {
  slug: "oil-and-gas",
  kind: "platform",
  icon: "oil-gas",
  tone: "orange",
  hero: {
    eyebrow: "Oil & Gas",
    headline: "From wellhead to boardroom — intelligence that drives every decision.",
    subhero: "SCADA, DCS, ERP, and field-ops unified.",
    lead: "Sub-minute latency on refinery and field operations data, executive dashboards on production, downtime, and HSE — engineered for upstream, midstream, and downstream operators.",
    primary: { label: "Start a conversation", to: "/contact" },
    secondary: { label: "See customer stories", to: "/about/customer-stories" },
    trustLine: "Honeywell · Yokogawa · ABB · Emerson · Wonderware · SAP · Oracle · Maximo.",
  },
  problem: {
    heading: "Operations data is everywhere except the boardroom.",
    lead: "Wells produce data; control rooms hold it; ERP records the cash impact. Leadership sees the slide deck on Tuesday — already late.",
    pains: [
      "SCADA/DCS data lives in silos by asset and vendor.",
      "Production and downtime reporting is daily, not live.",
      "HSE incident analysis is post-hoc.",
      "Maintenance is reactive; predictive insight is patchy.",
      "Field operations have no mobile-first analytics.",
      "Mixed-vendor estates make standardisation painful.",
      "Executive views require manual roll-ups.",
      "Regulatory and emissions reporting is manual.",
    ],
  },
  capabilities: {
    sub: "Analytics modules for upstream, midstream, and downstream — engineered to bridge OT and IT.",
    cards: [
      { title: "Production analytics", outcome: "Live production performance from wellhead to processing.", bullets: ["Per-well, per-pad, per-asset production", "Versus-plan and versus-target", "Decline-curve analysis", "Allocation and accounting integration", "Multi-asset roll-up"] },
      { title: "Downtime & reliability", outcome: "Lost-production-opportunity captured, ranked, and acted on.", bullets: ["Live downtime by cause, by asset", "Reliability KPIs (MTBF, MTTR)", "Failure-mode clustering", "Predictive maintenance signals", "Cross-asset benchmarking"] },
      { title: "HSE & compliance", outcome: "Incidents and near-misses analysed, not just reported.", bullets: ["Incident reporting and trend analysis", "Near-miss pattern surfacing", "Permit-to-work analytics", "Emissions and energy reporting", "Audit-grade compliance evidence"] },
      { title: "Field-ops mobile", outcome: "Analytics in the hands of the people closest to the asset.", bullets: ["Mobile-first dashboards", "Offline-capable field forms", "Geo-tagged inspections", "Push alerts on anomalies", "Multi-language support"] },
      { title: "OT/IT integration", outcome: "Bridge the OT-IT gap without ripping out plant systems.", bullets: ["SCADA/DCS read-only integration", "Historian (PI, Wonderware) connectors", "OPC UA / Modbus bridges", "ERP and CMMS sync", "Time-series warehouse architecture"] },
      { title: "Executive layer (with CXO Nexus)", outcome: "Conversational, Arabic-and-English board-grade analytics.", bullets: ["Production and HSE briefings on demand", "Mobile and Teams interfaces", "Anomaly push notifications", "Cross-asset benchmarking", "Multilingual leadership UX"] },
    ],
  },
  industries: {
    sub: "Across the O&G value chain.",
    tiles: [
      { name: "Upstream", value: "Production, drilling, reservoir analytics." },
      { name: "Midstream", value: "Pipeline, terminals, logistics." },
      { name: "Downstream", value: "Refining, petrochemical, retail." },
      { name: "Services", value: "Field-services analytics and asset uptime." },
      { name: "LNG", value: "Liquefaction, shipping, and regasification." },
      { name: "Renewables-adjacent", value: "Hydrogen, carbon-capture, and emissions." },
    ],
  },
  architecture: {
    sub: "A delivery framework that respects the realities of operating-asset data.",
    steps: [
      { num: "01", phase: "Integrate", description: "Read-only integration to SCADA/DCS, historians, ERP, and CMMS — no operational risk to plant systems." },
      { num: "02", phase: "Normalise", description: "Common operations data model across assets, vendors, and time-series sources." },
      { num: "03", phase: "Enrich", description: "AI layers add anomaly detection, failure-mode clustering, and predictive maintenance signals." },
      { num: "04", phase: "Visualise", description: "Live executive, control-room, and field-mobile views — sub-minute latency where it matters." },
      { num: "05", phase: "Govern", description: "Cybersecurity, audit, and emissions/regulatory reporting built into every deployment." },
    ],
  },
  useCases: {
    sub: "Production deployments across UAE and GCC operators.",
    cards: [
      { title: "Live refinery analytics", subtitle: "Downstream operator", crux: "SCADA/DCS data unified into a sub-minute analytics layer; control-room operators and executives see the same numbers in real time.", outcome: "Faster operational response · Cleaner exec reviews." },
      { title: "Field-ops mobile insight", subtitle: "Upstream operator", crux: "Field engineers receive geo-tagged inspection workflows and anomaly alerts on mobile — offline-capable across remote sites.", outcome: "Better field productivity · Faster issue capture." },
      { title: "HSE pattern detection", subtitle: "Integrated operator", crux: "Multi-year incident and near-miss data clustered for root-cause patterns; targeted interventions cut category-A incidents.", outcome: "Lower HSE incident rate · Better regulatory standing." },
    ],
  },
  cta: {
    heading: "Operational excellence, made decision-ready.",
    sub: "Tell us about your asset estate and your KPI gaps. We'll show you the modules that fit.",
    primary: { label: "Start a discovery session", to: "/contact" },
    tagline: "Techknomatic — Oil & Gas Analytics for the Gulf",
  },
};

const TECH_IT: ProductDetail = {
  slug: "tech-it-services",
  kind: "platform",
  icon: "tech-it",
  tone: "purple",
  hero: {
    eyebrow: "Tech & IT Services",
    headline: "Resolve faster, predict smarter, serve better — AI for modern ITSM.",
    subhero: "InsightSM + TicketIQ across your ITSM stack.",
    lead: '"ITSM Plug & Play" — 20+ pre-built dashboards live in 2 weeks, plus agentic AI that resolves L1 tickets autonomously.',
    primary: { label: "Start a conversation", to: "/contact" },
    secondary: { label: "See InsightSM live", to: "/platforms/insight-sm" },
    trustLine: "ServiceNow · BMC · Jira SM · SolarWinds · ManageEngine · Freshservice.",
  },
  problem: {
    heading: "Your ITSM tool holds data. It doesn't deliver insight.",
    lead: "Every CIO has an ITSM platform. Almost no CIO has analytics worth the licence — or AI that materially reduces L1 load.",
    pains: [
      "Reports are operational, not strategic.",
      "Multi-tool estates have no unified ops view.",
      "L1 tickets dominate workload and drive churn.",
      "Vendor SLA reporting is sample-based.",
      "Capacity planning is gut-feel.",
      "Executive ITSM KPIs are unavailable on demand.",
      "Self-service portals get ignored.",
      "AI in ITSM is mostly chatbot theatre, not autonomous resolution.",
    ],
  },
  capabilities: {
    sub: "Two productised offerings that move IT operations metrics within weeks.",
    cards: [
      { title: "ITSM Plug & Play", outcome: "20+ production dashboards live in 2 weeks.", bullets: ["Incident, problem, change, request", "SLA, vendor, and team scorecards", "Multi-tool federation", "Anomaly and trend signals", "Senior consultant included"] },
      { title: "TicketIQ autonomous resolution", outcome: "L1 tickets resolved at machine speed, with audit.", bullets: ["Password resets and access provisioning", "Risk-tiered governance", "Multi-system action execution", "Full audit and explainability", "Human-in-the-loop on high risk"] },
      { title: "Vendor & team scorecards", outcome: "Performance you can hold a meeting on.", bullets: ["Per-vendor SLA adherence", "Per-team productivity", "Top-N performers and laggards", "Rolling-window trends", "Benchmark vs portfolio average"] },
      { title: "Predictive ITSM", outcome: "From rear-view reporting to forward signal.", bullets: ["Backlog risk forecasting", "Mass-incident detection", "Capacity-vs-demand projection", "KPI drift alerts", "Suggested resolution playbooks"] },
      { title: "Executive ITSM layer", outcome: "CIO-grade KPIs, conversational, mobile-first.", bullets: ["CXO Nexus integration", "Weekly CIO briefings", "Anomaly push notifications", "Arabic and English support", "Embed in Teams and Slack"] },
      { title: "ITSM-aware integrations", outcome: "Native integration to every ITSM you run.", bullets: ["ServiceNow · BMC · Jira SM · SolarWinds", "Custom-ITSM connectors", "Read-only and write-back modes", "Multi-tenant federation", "Region-specific data residency"] },
    ],
  },
  industries: {
    sub: "Wherever ITSM at scale meets regulation, audit, and customer expectation.",
    tiles: [
      { name: "BFSI IT", value: "Regulated ITSM with audit-grade reporting." },
      { name: "Telecom IT", value: "Massive-scale ITSM and customer-impacting incident response." },
      { name: "Government IT", value: "Sovereign-cloud ITSM analytics and automation." },
      { name: "MSP / managed services", value: "Multi-tenant ITSM analytics across customer base." },
      { name: "Enterprise IT", value: "Cross-BU ITSM standardisation." },
      { name: "Healthcare IT", value: "Clinician-IT-support KPIs and uptime." },
    ],
  },
  architecture: {
    sub: "Connect, normalise, enrich, ship — with autonomous L1 on top.",
    steps: [
      { num: "01", phase: "Connect", description: "Pre-built connectors to ServiceNow, BMC, Jira SM, SolarWinds, and custom ITSM tools." },
      { num: "02", phase: "Normalise", description: "Common ITSM data model across tools, statuses, and taxonomies." },
      { num: "03", phase: "Enrich", description: "AI layer adds anomaly flags, backlog forecasts, and resolution-playbook suggestions." },
      { num: "04", phase: "Resolve", description: "TicketIQ takes L1 ticket categories and resolves them autonomously, with risk-tiered approvals and audit." },
      { num: "05", phase: "Govern", description: "RBAC, audit, residency, and integration to CXO Nexus for executive conversation." },
    ],
  },
  useCases: {
    sub: "Cleared deployments across UAE and GCC IT organisations.",
    cards: [
      { title: "ITSM Plug & Play go-live", subtitle: "Enterprise IT", crux: "Customer connects ServiceNow, picks dashboards, goes live in 2 weeks. Senior consultant pairs through the rollout.", outcome: "20+ dashboards in 2 weeks · Audit-grade reporting from day one." },
      { title: "Autonomous L1 deflection", subtitle: "Regulated IT", crux: "TicketIQ deployed on password reset, access provisioning, and known-error categories with risk-tiered approvals.", outcome: "60–80% L1 deflection · Lower MTTR · Cleaner audit trail." },
      { title: "Multi-tool federation", subtitle: "Multi-BU enterprise", crux: "An enterprise running ServiceNow + Jira SM federates both into one ops view with consistent KPIs.", outcome: "First true cross-tool ITSM picture · Cleaner SLA conversations." },
    ],
  },
  cta: {
    heading: "Modern ITSM, productised.",
    sub: "Talk to us about your ITSM stack, your L1 volume, and your CIO's KPI list. We'll fit the modules.",
    primary: { label: "Start a discovery session", to: "/contact" },
    tagline: "Techknomatic — ITSM Analytics & Agentic AI",
  },
};

const MANUFACTURING: ProductDetail = {
  slug: "manufacturing",
  kind: "platform",
  icon: "manufacturing",
  tone: "green",
  hero: {
    eyebrow: "Manufacturing",
    headline: "Smart factories start with smarter data.",
    subhero: "Plant-floor signal to enterprise insight.",
    lead: "Multi-plant deployments with standardised KPIs and plant-specific drill-downs — engineered to bridge MES, ERP, SCADA, and quality systems.",
    primary: { label: "Start a conversation", to: "/contact" },
    secondary: { label: "See customer stories", to: "/about/customer-stories" },
    trustLine: "SAP · Oracle · Wonderware · GE Proficy · OPC UA · MES · QMS.",
  },
  problem: {
    heading: "Plant data is rich. Plant insight is rare.",
    lead: "Lines emit data; MES and SCADA capture it; ERP records the cost. Most plants still run on spreadsheet KPIs and Tuesday slide decks.",
    pains: [
      "OEE, FPY, and downtime KPIs are inconsistent across plants.",
      "MES and ERP don't reconcile cleanly.",
      "Quality data lives in QMS silos.",
      "Predictive maintenance is patchy.",
      "Energy and emissions reporting is manual.",
      "Multi-plant standardisation drags on for years.",
      "Operator dashboards aren't fit-for-purpose.",
      "Executive views require manual roll-ups.",
    ],
  },
  capabilities: {
    sub: "Analytics modules across the plant floor and enterprise — engineered for multi-plant operators.",
    cards: [
      { title: "OEE & production KPIs", outcome: "Standardised OEE/FPY across plants, with plant-level drill-down.", bullets: ["Per-line, per-shift, per-SKU OEE", "Versus-plan and versus-target", "Bottleneck attribution", "Cross-plant benchmarking", "Mobile operator views"] },
      { title: "Downtime & reliability", outcome: "Lost-production-opportunity ranked and acted on.", bullets: ["Downtime by cause and asset", "Reliability KPIs (MTBF, MTTR)", "Failure-mode clustering", "Predictive maintenance signals", "Reason-code standardisation"] },
      { title: "Quality analytics", outcome: "QMS data joined into the production picture.", bullets: ["FPY, scrap, and rework analytics", "Defect-mode pareto", "SPC and capability indices", "Supplier-quality scorecards", "Customer-complaint linkage"] },
      { title: "Energy & emissions", outcome: "Energy intensity and emissions, plant-level and SKU-level.", bullets: ["Energy-per-unit dashboards", "Plant-level emissions reporting", "Tariff and time-of-use analysis", "Net-zero progress tracking", "Audit-grade reporting"] },
      { title: "MES + ERP integration", outcome: "Reconciled production, cost, and quality picture.", bullets: ["SAP, Oracle, Dynamics integration", "MES (Wonderware, GE Proficy) connectors", "QMS data join", "OPC UA / Modbus bridges", "Time-series warehouse architecture"] },
      { title: "Executive layer (with CXO Nexus)", outcome: "Multi-plant boardroom view, conversational and mobile.", bullets: ["Cross-plant benchmarking", "Mobile briefings for plant heads and CEO", "Anomaly push notifications", "Arabic and English support", "Embed in Teams and Slack"] },
    ],
  },
  industries: {
    sub: "Multi-plant operators across discrete and process manufacturing.",
    tiles: [
      { name: "Process", value: "Petrochem, chemicals, FMCG, food & beverage." },
      { name: "Discrete", value: "Automotive, electronics, building products." },
      { name: "Metals", value: "Steel, aluminium, downstream metals." },
      { name: "Pharma", value: "GMP-compliant analytics and reporting." },
      { name: "Packaging", value: "Multi-line, multi-SKU plant analytics." },
      { name: "Building materials", value: "Cement, glass, ceramics." },
    ],
  },
  architecture: {
    sub: "Connect plant systems, unify the data, ship the dashboards.",
    steps: [
      { num: "01", phase: "Integrate", description: "Read-only connectors to MES, SCADA, ERP, and QMS — no operational risk to plant systems." },
      { num: "02", phase: "Normalise", description: "Common manufacturing data model across plants, lines, products, and reason codes." },
      { num: "03", phase: "Enrich", description: "AI adds anomaly detection, predictive maintenance, and quality-event clustering." },
      { num: "04", phase: "Visualise", description: "Operator, plant-manager, and executive views — each tuned to the decision they need to make." },
      { num: "05", phase: "Govern", description: "Audit, regulatory, and emissions reporting built in; data residency where required." },
    ],
  },
  useCases: {
    sub: "Production deployments across GCC manufacturing operators.",
    cards: [
      { title: "Multi-plant OEE standardisation", subtitle: "FMCG group", crux: "Three plants on different MES vendors unified into a standardised OEE/FPY framework with plant-specific drill-downs and exec roll-up.", outcome: "First true cross-plant OEE picture · Cleaner plant-vs-plant conversations." },
      { title: "Predictive maintenance", subtitle: "Process operator", crux: "Vibration and process-variable history clustered for failure-mode signals; alerts route to maintenance with confidence and recommended action.", outcome: "Reduced unplanned downtime · Better maintenance planning." },
      { title: "Energy intensity baseline", subtitle: "Energy-intensive industry", crux: "Energy-per-unit dashboards across plants surfaced 15-20% performance gap between best and worst lines; intervention plan tracked monthly.", outcome: "Lower energy cost · Cleaner emissions story." },
    ],
  },
  cta: {
    heading: "From plant floor to boardroom, with one data model.",
    sub: "Tell us about your plant estate and your KPI gaps. We'll show you the modules that move the metric.",
    primary: { label: "Start a discovery session", to: "/contact" },
    tagline: "Techknomatic — Manufacturing Analytics for the Gulf",
  },
};

export const INDUSTRY_PAGES: ReadonlyArray<ProductDetail> = [INSURANCE, OIL_AND_GAS, TECH_IT, MANUFACTURING];

export function getIndustryBySlug(slug: string): ProductDetail | null {
  return INDUSTRY_PAGES.find((p) => p.slug === slug) ?? null;
}
