import type { ProductDetail } from "./product-detail";

const INSIGHT_SM: ProductDetail = {
  slug: "insight-sm",
  kind: "platform",
  icon: "managed",
  tone: "orange",
  hero: {
    eyebrow: "InsightSM",
    headline: "Unified IT-operations visibility across every ITSM tool.",
    subhero: "Production dashboards in days, not months.",
    lead: "AI ITSM analytics wrapper for ServiceNow, BMC, Jira SM, and SolarWinds — 20+ pre-built dashboards, plug-and-play, with senior consultant support included.",
    primary: { label: "See InsightSM live", to: "/contact?demo=insight-sm" },
    secondary: { label: "Talk to a solution expert", to: "/contact?service=platforms" },
    trustLine: "ServiceNow · BMC · Jira SM · SolarWinds · custom ITSM tools.",
  },
  problem: {
    heading: "ITSM data without the analytics nobody builds.",
    lead: "Every CIO has an ITSM tool. Almost nobody has good ITSM analytics. Building it from scratch takes 6–12 months. InsightSM compresses that to days.",
    pains: [
      "ITSM reports are operational, not strategic.",
      "Custom dashboards take months and break on every upgrade.",
      "Multi-tool estates have no unified view.",
      "Service-level reporting is manual and late.",
      "Vendor and team performance is hard to compare.",
      "Capacity and demand planning is gut-feel.",
      "No predictive layer — only rear-view mirrors.",
      "Executive-grade KPIs are unavailable on demand.",
    ],
  },
  capabilities: {
    sub: "A productised analytics layer that turns any ITSM tool into a decision-grade observability platform.",
    cards: [
      { title: "20+ pre-built dashboards", outcome: "Production-ready dashboards on day one.", bullets: ["Incident, problem, change, request", "SLA and OLA performance", "Vendor and team comparison", "Backlog ageing and trends", "Executive KPI summary"] },
      { title: "Multi-tool federation", outcome: "One view across ServiceNow, BMC, Jira SM, SolarWinds.", bullets: ["Pre-built connectors per tool", "Normalised schema across tools", "Conflict resolution on duplicates", "Common taxonomy mapping", "Federated tenant model"] },
      { title: "AI insights & anomalies", outcome: "From rear-view reporting to forward-looking signal.", bullets: ["Anomaly detection on volume and MTTR", "Root-cause-likely clustering", "Backlog risk forecasting", "Capacity-vs-demand projection", "Drift alerts on KPIs"] },
      { title: "Vendor & team scorecards", outcome: "Performance you can hold a meeting on.", bullets: ["Per-vendor SLA adherence", "Per-team productivity and quality", "Top-N performers and laggards", "Trend over rolling windows", "Benchmark vs portfolio average"] },
      { title: "Executive layer (with CXO Nexus)", outcome: "ITSM KPIs at the leadership level — conversational.", bullets: ["Plug-in to CXO Nexus NL layer", "Mobile-first exec views", "Weekly briefing digests", "Anomaly push to leadership", "Arabic and English support"] },
      { title: "Sample-first deployment", outcome: "Validate on sampled data before full rollout.", bullets: ["7-day proof-of-value pilot", "Dashboards on real (sampled) data", "Stakeholder alignment workshop", "Phase-in to production", "Senior consultant included"] },
    ],
  },
  industries: {
    sub: "Wherever ITSM matters and audit-readiness is non-negotiable.",
    tiles: [
      { name: "BFSI", value: "Regulated ITSM with audit-grade reporting." },
      { name: "Government", value: "Sovereign-cloud ITSM analytics." },
      { name: "Telecom", value: "Massive-scale ITSM across consumer and enterprise." },
      { name: "Oil & Gas", value: "Field-ops IT performance and vendor SLA." },
      { name: "Healthcare", value: "Clinician-facing IT KPIs and uptime." },
      { name: "Manufacturing", value: "OT/IT convergence reporting." },
    ],
  },
  architecture: {
    sub: "Plug-in to your ITSM, federate the data, ship the dashboards.",
    steps: [
      { num: "01", phase: "Connect", description: "Pre-built connectors to ServiceNow, BMC, Jira SM, SolarWinds — read-only by default, write-back optional." },
      { num: "02", phase: "Normalise", description: "Records mapped to a common ITSM schema; statuses, categories, and priorities aligned across tools." },
      { num: "03", phase: "Enrich", description: "AI layer adds anomaly flags, root-cause clusters, and predictive backlog signals." },
      { num: "04", phase: "Visualise", description: "20+ dashboards live in days; embed in Power BI, Tableau, Qlik, or InsightSM-native." },
      { num: "05", phase: "Govern", description: "RBAC, audit log, data-residency options, and integration with CXO Nexus for executive interrogation." },
    ],
  },
  useCases: {
    sub: "Cleared deployments across UAE and GCC enterprises.",
    cards: [
      { title: "ITSM Plug & Play", subtitle: "20+ dashboards in 2 weeks", crux: "Customer connects ServiceNow, picks the dashboards they want, and goes live on real data within two weeks. Senior consultant included.", outcome: "Months of build collapsed to weeks · Audit-grade reporting from day one." },
      { title: "Multi-tool federation", subtitle: "ServiceNow + Jira SM", crux: "An enterprise running ServiceNow for IT and Jira SM for engineering federates both into one ops view with consistent KPIs.", outcome: "First true cross-tool ITSM picture · Cleaner SLA conversations." },
      { title: "Executive ITSM Briefing", subtitle: "Weekly CIO digest", crux: "Auto-generated weekly briefing for the CIO with KPI movement, anomalies, and risks — delivered to mobile and Teams.", outcome: "CIO conversations start informed, not from raw dashboards." },
    ],
  },
  cta: {
    heading: "Your ITSM tool, finally with analytics worth the licence.",
    sub: "Pre-built, plug-and-play, senior-led. See InsightSM running on your tickets.",
    primary: { label: "Book a demo", to: "/contact?demo=insight-sm" },
    tagline: "InsightSM — ITSM Analytics, Productised",
  },
};

const DATAPULSE_IQ: ProductDetail = {
  slug: "datapulse-iq",
  kind: "platform",
  icon: "data-eng",
  tone: "blue",
  hero: {
    eyebrow: "DataPulseIQ",
    headline: "Trusted data. Intelligent validation. Autonomous data operations.",
    subhero: "AI-powered data quality and observability — across every data source.",
    lead: "From real-time monitoring to autonomous remediation, DataPulseIQ keeps every downstream dashboard, model, and decision running on trustworthy data.",
    primary: { label: "See DataPulseIQ live", to: "/contact?demo=datapulse-iq" },
    secondary: { label: "Talk to a solution expert", to: "/contact?service=platforms" },
    trustLine: "Snowflake · BigQuery · Synapse · Databricks · Postgres · Oracle · SAP · custom warehouses.",
  },
  problem: {
    heading: "Bad data is the silent killer of analytics & AI.",
    lead: "Pipelines run green; numbers go wrong. By the time leadership questions the dashboard, the trust is already gone.",
    pains: [
      "Schema drift breaks downstream silently.",
      "Freshness SLAs miss without anyone noticing.",
      "Null spikes and distribution shifts go unmonitored.",
      "Data quality is checked by analysts, in tickets, after the fact.",
      "Cross-source reconciliation is manual.",
      "Lineage is a Confluence page, not a live graph.",
      "Remediation requires waking up an engineer.",
      "Quality issues become trust issues become BI abandonment.",
    ],
  },
  capabilities: {
    sub: "An observability + quality + remediation loop that keeps your data stack honest, autonomously.",
    cards: [
      { title: "Real-time monitoring", outcome: "Every pipeline, dataset, and column watched continuously.", bullets: ["Freshness, volume, schema, null-rate", "Distribution and outlier detection", "Cross-source reconciliation", "Custom-rule engine", "Streaming and batch support"] },
      { title: "AI anomaly detection", outcome: "Quality drift caught before downstream consumers feel it.", bullets: ["Statistical baselines per metric", "Adaptive thresholds (no manual tuning)", "Seasonality-aware detection", "Confidence scoring per alert", "Suppression and noise control"] },
      { title: "Live lineage graph", outcome: "From source column to dashboard tile — visualised, queryable, current.", bullets: ["Column-level lineage", "Cross-warehouse propagation", "BI-tool downstream awareness", "Impact analysis on change", "Audit-grade traceability"] },
      { title: "Autonomous remediation", outcome: "Common quality issues fixed without waking a human.", bullets: ["Auto-quarantine on critical fail", "Rollback to last-known-good", "Re-run on transient failures", "Soft-fix templates (null fills, type coercion)", "Human-in-the-loop on risky fixes"] },
      { title: "Governance & compliance", outcome: "Every dataset classified, every access logged.", bullets: ["PII discovery and tagging", "RBAC per dataset/column", "Region-specific data residency", "Audit log per access", "Compliance reporting templates"] },
      { title: "Self-serve quality contracts", outcome: "Data producers and consumers agree, in code.", bullets: ["Schema and SLA contracts", "Quality-as-code (YAML / SQL)", "CI checks on contract changes", "Producer accountability", "Consumer subscriptions and alerts"] },
    ],
  },
  industries: {
    sub: "Wherever data quality directly shapes regulated decisions or customer outcomes.",
    tiles: [
      { name: "BFSI", value: "Regulatory reporting and risk-model data integrity." },
      { name: "Insurance", value: "Claims, premium, and actuarial data trust." },
      { name: "Telecom", value: "Subscriber and billing data correctness." },
      { name: "Healthcare", value: "Patient and claims data integrity." },
      { name: "Manufacturing", value: "OT-to-IT data reconciliation." },
      { name: "Retail", value: "Inventory, pricing, and POS data accuracy." },
    ],
  },
  architecture: {
    sub: "An end-to-end quality loop that observes, alerts, traces, and fixes.",
    steps: [
      { num: "01", phase: "Observe", description: "Live monitoring of every dataset across freshness, volume, schema, distribution, and rule pass-rate." },
      { num: "02", phase: "Detect", description: "AI baselines and adaptive thresholds surface anomalies with confidence scores and suspected root cause." },
      { num: "03", phase: "Trace", description: "Column-level lineage shows exactly which downstream dashboards, models, and decisions are at risk." },
      { num: "04", phase: "Remediate", description: "Autonomous fixes for known patterns; safe quarantine and human routing for the rest." },
      { num: "05", phase: "Prove", description: "Audit-grade evidence retained for every incident — and KPIs trend toward higher trust over time." },
    ],
  },
  useCases: {
    sub: "From data engineering teams to CDO dashboards.",
    cards: [
      { title: "Regulatory data assurance", subtitle: "BFSI / Insurance", crux: "Continuous monitoring of regulatory-reporting datasets with audit-grade evidence and rollback. Quality gates block flawed reports from being filed.", outcome: "Lower regulatory risk · Faster sign-off cycles." },
      { title: "AI/ML feature trust", subtitle: "Data Science", crux: "Feature-store columns monitored for drift, null-spikes, and distribution shifts before they degrade models in production.", outcome: "Models stay accurate · Less surprise drift in prod." },
      { title: "Cross-system reconciliation", subtitle: "Finance / Ops", crux: "Auto-reconciles records across ERP, CRM, and warehouse — flags variances same-day, not month-end.", outcome: "Cleaner close · Faster discrepancy resolution." },
    ],
  },
  cta: {
    heading: "Trustworthy data, autonomously.",
    sub: "Stop chasing data-quality fires. Let DataPulseIQ watch, find, and fix — and tell you what mattered.",
    primary: { label: "Book a demo", to: "/contact?demo=datapulse-iq" },
    tagline: "DataPulseIQ — Autonomous Data Quality & Observability",
  },
};

const PARSE_IQ: ProductDetail = {
  slug: "parse-iq",
  kind: "platform",
  icon: "ai-strategy",
  tone: "purple",
  hero: {
    eyebrow: "ParseIQ",
    headline: "AI-powered document intelligence & data extraction.",
    subhero: "OCR · AI classification · LLM extraction · structured output.",
    lead: "End-to-end document understanding for KYC, claims, contracts, and government workflows. Pre-built models for Gulf document types, plus customer-trained extractors.",
    primary: { label: "See ParseIQ live", to: "/contact?demo=parse-iq" },
    secondary: { label: "Talk to a solution expert", to: "/contact?service=platforms" },
    trustLine: "Arabic + English OCR · Emirates ID · trade licences · KYC forms · insurance claims · contracts.",
  },
  problem: {
    heading: "Documents are still the slowest step in your process.",
    lead: "Every regulated workflow has documents in the middle. Most of them get keyed in by hand. The bottleneck never moves.",
    pains: [
      "KYC and onboarding waits on manual document review.",
      "Claims processing slows on attachment extraction.",
      "Contract review is a senior-time sink.",
      "OCR alone is not enough — structure and meaning matter.",
      "Arabic + English mixed documents trip generic OCR.",
      "Audit logs of what-was-read-from-where are weak.",
      "Generic LLM extraction hallucinates field values.",
      "Long-tail document types break model coverage.",
    ],
  },
  capabilities: {
    sub: "A full document-understanding stack — purpose-built for Gulf documents and regulated workflows.",
    cards: [
      { title: "Arabic + English OCR", outcome: "Best-in-class accuracy on mixed-script Gulf documents.", bullets: ["Print and handwriting", "RTL and LTR mixed layouts", "Stamps, seals, and signatures", "Low-quality scan tolerance", "Confidence per field"] },
      { title: "Pre-trained Gulf models", outcome: "Day-one extractors for the documents you handle every day.", bullets: ["Emirates ID, Iqama, GCC IDs", "Trade licences and CRs", "KYC and onboarding forms", "Insurance claims and policies", "Tax invoices and bank statements"] },
      { title: "Custom extractors", outcome: "Train an extractor for your document, in your tenant.", bullets: ["No-code field designer", "Few-shot training on sample docs", "Active-learning loop", "Versioned model deployment", "Continuous accuracy monitoring"] },
      { title: "LLM extraction & reasoning", outcome: "Beyond fields — extract meaning, classify, summarise.", bullets: ["Document classification", "Clause and obligation extraction", "Summary and risk flagging", "Cross-document reconciliation", "Q&A over document set"] },
      { title: "Human-in-the-loop", outcome: "Low-confidence fields routed to a human — fast.", bullets: ["Confidence-based routing", "Side-by-side review UI", "Keyboard-first reviewer flow", "SLA tracking per queue", "Feedback into training"] },
      { title: "Audit & compliance", outcome: "Every read, every extraction, fully traceable.", bullets: ["Per-field source-location log", "PII discovery and redaction", "Retention and purge policies", "Region-specific data residency", "SOC-friendly evidence export"] },
    ],
  },
  industries: {
    sub: "Wherever documents stand between intent and outcome.",
    tiles: [
      { name: "BFSI", value: "KYC, account opening, statement parsing." },
      { name: "Insurance", value: "Claims documents, policy attachments, medical reports." },
      { name: "Government", value: "Citizen-service forms, permit applications." },
      { name: "Healthcare", value: "Prescriptions, lab reports, insurance cards." },
      { name: "Logistics", value: "BoLs, invoices, customs documentation." },
      { name: "Legal", value: "Contract review, clause extraction, due diligence." },
    ],
  },
  architecture: {
    sub: "A 5-stage pipeline that ingests, understands, validates, and integrates.",
    steps: [
      { num: "01", phase: "Ingest", description: "Documents arrive via portal upload, email, API, or scanner. Mixed PDFs, images, and Office files supported." },
      { num: "02", phase: "OCR", description: "Mixed Arabic + English OCR with layout preservation, stamp/seal detection, and quality scoring." },
      { num: "03", phase: "Classify", description: "Document type identified — pre-trained or customer-trained models — with confidence scoring." },
      { num: "04", phase: "Extract", description: "Field-level extraction with source-location traceability; LLM reasoning for clauses, summaries, and Q&A." },
      { num: "05", phase: "Integrate", description: "Structured output delivered to CRM, core banking, claims, or workflow systems — via API, webhook, or RPA." },
    ],
  },
  useCases: {
    sub: "Production deployments across the Gulf.",
    cards: [
      { title: "KYC at account opening", subtitle: "Banking / Insurance", crux: "Emirates ID, trade licence, and statement extraction with cross-validation against issuer records. Sub-minute onboarding.", outcome: "Faster onboarding · Lower KYC operations cost." },
      { title: "Claims-document processing", subtitle: "Insurance", crux: "Claims forms, medical reports, and invoices auto-extracted and reconciled. Low-confidence fields routed to claims reviewers.", outcome: "Faster claim cycles · Lower per-claim handling cost." },
      { title: "Contract review", subtitle: "Legal / Procurement", crux: "Contracts classified, key clauses extracted, obligation tracking generated, and risk-flagged clauses surfaced.", outcome: "Faster legal review · Better obligation visibility." },
      { title: "Citizen-form digitisation", subtitle: "Government", crux: "Permit and scheme application forms auto-digitised into government workflow systems with audit trails per field.", outcome: "Faster citizen service · Lower departmental load." },
    ],
  },
  cta: {
    heading: "From documents to decisions, autonomously.",
    sub: "ParseIQ turns the slowest step in your process into the fastest. See it run on your documents.",
    primary: { label: "Book a demo", to: "/contact?demo=parse-iq" },
    tagline: "ParseIQ — Document Intelligence, Built for the Gulf",
  },
};

const FREIGHT_IQ: ProductDetail = {
  slug: "freight-iq",
  kind: "platform",
  icon: "analytics",
  tone: "green",
  hero: {
    eyebrow: "FreightIQ",
    headline: "Intelligent freight pricing for faster quotes & higher profit.",
    subhero: "Dynamic AI pricing across LCL · FCL · Air · Multi-modal.",
    lead: "Instant customer-ready quotes from live carrier rates — engineered for freight forwarders, logistics integrators, and shipper-direct ops.",
    primary: { label: "See FreightIQ live", to: "/contact?demo=freight-iq" },
    secondary: { label: "Talk to a solution expert", to: "/contact?service=platforms" },
    trustLine: "Sea (LCL/FCL) · Air · Road · Multi-modal · BAF/CAF/surcharges · margin rules.",
  },
  problem: {
    heading: "Quotes are slow. Margins leak. Win rates suffer.",
    lead: "Pricing emails bounce between sales, ops, and carriers. By the time the quote goes out, the customer has chosen someone else — or the margin is gone.",
    pains: [
      "Quote turnaround takes hours or days.",
      "Carrier rate sheets live in PDFs and spreadsheets.",
      "Surcharges and FX get missed at quote time.",
      "Margin rules aren't applied consistently.",
      "Spot vs contract pricing isn't differentiated.",
      "Customer-facing portals lack instant quoting.",
      "Win/loss data isn't fed back into pricing.",
      "Multi-modal scenarios are quoted in silos.",
    ],
  },
  capabilities: {
    sub: "End-to-end pricing automation — from carrier ingestion to customer quote to win/loss learning.",
    cards: [
      { title: "Live carrier-rate ingestion", outcome: "Every carrier rate sheet — current, normalised, queryable.", bullets: ["PDF, Excel, and email rate sheets", "Carrier API integration", "Surcharge (BAF, CAF, ISPS) handling", "FX rate refresh", "Validity-window tracking"] },
      { title: "Multi-modal quoting", outcome: "Sea, air, road, and multi-modal in one engine.", bullets: ["LCL and FCL ocean rates", "Air freight (general and special)", "Road and last-mile add-ons", "Multi-modal routing options", "Origin/destination charges built-in"] },
      { title: "Margin and approval rules", outcome: "Every quote priced by policy, not by sales mood.", bullets: ["Customer-tier margin floors", "Spot vs contract differentiation", "Approval thresholds and chains", "Discount audit trail", "Margin-protection alerts"] },
      { title: "Instant customer quote", outcome: "Customer-facing portals that quote in seconds.", bullets: ["Self-service quote portal", "API for customer ERP/TMS", "Branded quote PDFs", "Booking conversion flow", "Quote-to-shipment handoff"] },
      { title: "Win/loss learning", outcome: "Pricing improves because every quote outcome is signal.", bullets: ["Quote outcome capture", "Win-rate by lane/customer/tier", "Price-elasticity insight", "Competitor-price proxy", "Pricing-strategy recommendations"] },
      { title: "Analytics & control tower", outcome: "Live visibility into pricing performance.", bullets: ["Quote volume and turnaround", "Margin and win-rate dashboards", "Lane and customer analytics", "Surcharge exposure tracking", "Pricing-team productivity"] },
    ],
  },
  industries: {
    sub: "Designed for freight forwarders, NVOCCs, and logistics integrators.",
    tiles: [
      { name: "Freight forwarding", value: "Multi-modal pricing across customer book." },
      { name: "Shipping lines / NVOCC", value: "LCL/FCL pricing engine and spot-quote channel." },
      { name: "Air cargo", value: "GSA/GSSA quote automation and capacity-aware pricing." },
      { name: "3PL / 4PL", value: "Customer-facing quote portals and TMS integration." },
      { name: "Shipper-direct ops", value: "In-house procurement and carrier negotiation." },
      { name: "E-commerce logistics", value: "High-volume, low-margin lane optimisation." },
    ],
  },
  architecture: {
    sub: "A 5-stage pricing loop — ingest, build, quote, win/lose, learn.",
    steps: [
      { num: "01", phase: "Ingest", description: "Carrier rate sheets ingested via PDF/Excel parsing, email scraping, and API — normalised into a single rate model with validity windows." },
      { num: "02", phase: "Build", description: "Routing engine assembles end-to-end lanes (origin charges + main carriage + destination + add-ons) with surcharges and FX applied." },
      { num: "03", phase: "Quote", description: "Margin rules and approval policy applied; customer-ready quote rendered in branded PDF or pushed to portal/API in seconds." },
      { num: "04", phase: "Convert", description: "Customer accepts quote; shipment is created, booking confirmed, and data flows to TMS / operations." },
      { num: "05", phase: "Learn", description: "Win/loss outcome captured; pricing engine updates lane- and customer-level recommendations." },
    ],
  },
  useCases: {
    sub: "Production deployments across freight forwarders and shipper-direct ops.",
    cards: [
      { title: "Forwarder instant quote", subtitle: "Multi-modal forwarder", crux: "Forwarders quote LCL, FCL, and air shipments through one engine — quote turnaround drops from hours to seconds, win rate climbs.", outcome: "Higher win rate · Lower quote-team load." },
      { title: "Customer-portal quoting", subtitle: "3PL / 4PL", crux: "Customers self-serve quotes via branded portal with their tier-specific pricing applied automatically.", outcome: "Better customer experience · Sticky customer relationships." },
      { title: "Margin-protection alerts", subtitle: "Sales ops", crux: "Live alerts when quotes drop below margin floor or when surcharge exposure climbs on signed contracts.", outcome: "Lower margin erosion · Earlier intervention on bad deals." },
    ],
  },
  cta: {
    heading: "Pricing automated. Margins protected. Win rate up.",
    sub: "From rate-sheet chaos to customer-ready quote in seconds. See FreightIQ on your lanes.",
    primary: { label: "Book a demo", to: "/contact?demo=freight-iq" },
    tagline: "FreightIQ — AI Pricing for Modern Logistics",
  },
};

export const PLATFORM_PRODUCTS: ReadonlyArray<ProductDetail> = [INSIGHT_SM, DATAPULSE_IQ, PARSE_IQ, FREIGHT_IQ];

export function getPlatformBySlug(slug: string): ProductDetail | null {
  return PLATFORM_PRODUCTS.find((p) => p.slug === slug) ?? null;
}
