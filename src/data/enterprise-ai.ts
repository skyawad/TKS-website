import type { ProductDetail } from "./product-detail";

const ASSIST_IQ: ProductDetail = {
  slug: "assist-iq",
  kind: "enterprise-ai",
  icon: "assistant",
  tone: "orange",
  hero: {
    eyebrow: "AssistIQ",
    headline: "AI agents & avatars for modern customer engagement.",
    subhero: "Engage faster. Support smarter. Scale seamlessly.",
    lead: "AI-powered conversational agents and intelligent avatars that autonomously handle customer queries, execute workflows, and deliver human-like self-service — 24×7, across every digital channel.",
    primary: { label: "Talk to AssistIQ (live demo)", to: "/contact?demo=assist-iq" },
    secondary: { label: "Talk to a solution expert", to: "/contact?service=enterprise-ai" },
    trustLine: "Available on Web · Mobile · WhatsApp · Voice · Kiosk · Customer Portals · Social Channels.",
  },
  problem: {
    heading: "The modern customer-service challenge.",
    lead: "Customers expect instant. Support models still run on shifts. The gap is where engagement, satisfaction, and revenue leak.",
    pains: [
      "High volumes of repetitive customer queries draining support team capacity.",
      "Long support wait times across calls, email, and chat.",
      "Rising contact-centre and support operational costs.",
      "Inconsistent customer experiences across channels and agents.",
      "Limited support availability outside business hours.",
      "Heavy dependency on manual support teams for routine queries.",
      "Slow resolution cycles for self-serviceable tasks.",
      "Static FAQ pages and search-based help that customers abandon.",
    ],
  },
  capabilities: {
    sub: "From manual customer support → intelligent autonomous self-service. Instant. Conversational. Scalable. Safe.",
    cards: [
      { title: "AI-powered customer query handling", outcome: "Autonomous handling of routine, high-volume interactions — instantly, 24×7.", bullets: ["Product, service, order, and status queries", "Policy, claim, billing, and payment assistance", "Appointment, booking, and service requests", "Technical support FAQs and troubleshooting", "Instant responses across every digital channel"] },
      { title: "Intelligent FAQ automation", outcome: "From static FAQ pages to dynamic conversational self-service.", bullets: ["Context-aware conversational responses", "Multi-language support across GCC regions", "Long-tail question handling", "Native knowledge-base integration", "Continuous AI learning and answer optimisation"] },
      { title: "AI avatars & human-like interactions", outcome: "Engaging, brand-aligned digital assistants for customer-facing experiences.", bullets: ["Human-like conversational delivery", "Voice and text-based interaction modes", "Personalised, context-aware responses", "Brand-aligned tone, persona, and appearance", "Ideal for web, kiosks, apps, and digital lobbies"] },
      { title: "Workflow automation through conversations", outcome: "Beyond answers — the AI agent executes real business workflows.", bullets: ["Appointment booking and rescheduling", "Service request submission and tracking", "Customer onboarding step automation", "Lead capture and qualification", "Password reset and account self-service"] },
      { title: "Multi-channel customer engagement", outcome: "One AI agent. Every customer channel. Consistent experience.", bullets: ["Websites and customer portals", "Mobile applications (iOS / Android)", "WhatsApp and messaging platforms", "Voice interfaces and IVR replacement", "Unified conversation context across touchpoints"] },
      { title: "AI knowledge intelligence (RAG)", outcome: "Accurate answers grounded in enterprise knowledge — not generic AI.", bullets: ["FAQ and SOP repository integration", "Product catalogues and pricing data", "Policy documents and compliance content", "CRM and support system context", "Reduced hallucination through grounded retrieval"] },
      { title: "Intelligent escalation framework", outcome: "AI knows what it can answer — and exactly when to hand off to a human.", bullets: ["Automatic escalation on complex scenarios", "Low-confidence response detection", "Sensitive-request routing (complaints, distress, regulatory)", "Full conversation context handed to human agent", "Exception-handling workflows with clear triggers"] },
      { title: "Analytics & conversation insights", outcome: "Every conversation becomes operational and customer intelligence.", bullets: ["Query trend analysis across customer base", "Customer intent and journey tracking", "Resolution rate and deflection monitoring", "CSAT signals from chat", "Self-service adoption and channel-mix metrics"] },
    ],
  },
  industries: {
    sub: "Purpose-built for customer-facing enterprises — wherever customer expectations have outpaced traditional support models.",
    tiles: [
      { name: "Retail & E-Commerce", value: "Orders, returns, recommendations, promotions — 24×7." },
      { name: "BFSI", value: "Account, card, loan, and onboarding queries with secure assistance." },
      { name: "Telecom", value: "Plans, recharges, complaints, SIM activation, service requests." },
      { name: "Healthcare", value: "Appointment booking, patient queries, hospital service support." },
      { name: "Logistics", value: "Shipment tracking, delivery issues, customer communication." },
      { name: "Insurance", value: "Policy, claims, renewals, and customer self-service journeys." },
      { name: "Government & Public", value: "AI citizen-service portals for schemes, applications, and information." },
    ],
  },
  architecture: {
    sub: "A 6-stage conversational agent loop — from customer intent to autonomous action, with safe human handoff built in.",
    steps: [
      { num: "01", phase: "Intent capture", description: "Customer query captured across web, mobile, WhatsApp, voice, kiosk, or portal — with channel-native context carried into the conversation." },
      { num: "02", phase: "Understand", description: "AI engine interprets natural-language intent, disambiguates the goal, and pulls grounded context from enterprise knowledge sources." },
      { num: "03", phase: "Respond", description: "Conversational response generated in the customer's language and channel — through an AI agent, avatar, or voice interface, in the brand's tone." },
      { num: "04", phase: "Execute", description: "When the intent requires action, AssistIQ executes the workflow autonomously inside connected enterprise systems." },
      { num: "05", phase: "Escalate", description: "Low-confidence responses, sensitive scenarios, or exception flows trigger a safe handoff to a human agent with full conversation context." },
      { num: "06", phase: "Learn", description: "Every conversation feeds analytics and continuous AI optimisation — improving intent accuracy, expanding the knowledge base, refining thresholds." },
    ],
    closingLine: "AssistIQ doesn't just answer customer queries — it runs the customer-engagement layer of your enterprise.",
  },
  useCases: {
    sub: "Cleared deployments across customer-facing enterprises in the Gulf and beyond.",
    cards: [
      { title: "Retail & E-Commerce", subtitle: "24×7 customer assistance", crux: "Automates query handling, order tracking, returns assistance, product recommendations, and promotional engagement across web, app, and WhatsApp.", outcome: "Higher CSAT · Faster resolution · Lower support cost per order." },
      { title: "BFSI", subtitle: "Conversational AI for banking", crux: "Handles account and policy queries, loan and card support, claims and payment assistance, and customer onboarding journeys inside your CRM and core systems.", outcome: "Faster service · Lower call-centre load · Safer escalation." },
      { title: "Telecom", subtitle: "Self-service for plans & service", crux: "Automates plan and recharge assistance, complaint registration, SIM and activation guidance, and service-request workflows.", outcome: "Higher deflection · Faster issue resolution · Lower contact-centre cost." },
      { title: "Healthcare", subtitle: "Patient experience automation", crux: "Automates appointment booking and reminders, patient query assistance, prescription and report guidance, and hospital service requests — with sensitive escalations routed safely.", outcome: "Faster patient response · Reduced admin load · Better patient experience." },
      { title: "Logistics", subtitle: "Shipment & delivery comms", crux: "Provides instant shipment tracking, delivery-issue resolution conversations, and proactive customer communication.", outcome: "Fewer WISMO calls · Better delivery experience · Lower support cost." },
      { title: "Government & Public", subtitle: "Citizen-service portals", crux: "AI agents and avatars across citizen portals guide scheme applications, answer public information queries, and automate digital service workflows.", outcome: "Better citizen access · Reduced departmental load · Standardised service." },
    ],
  },
  cta: {
    heading: "The future of customer service is intelligent self-service.",
    sub: "Engage faster. Support smarter. Scale seamlessly. See AssistIQ deliver AI-powered self-service that improves CSAT, reduces operational complexity, and modernises customer engagement.",
    primary: { label: "Talk to AssistIQ (live demo)", to: "/contact?demo=assist-iq" },
    secondary: { label: "Chat on WhatsApp", href: "https://wa.me/971000000000" },
    tagline: "AssistIQ — AI Agents & Avatars for Modern Customer Engagement",
  },
};

const TICKET_IQ: ProductDetail = {
  slug: "ticket-iq",
  kind: "enterprise-ai",
  icon: "ticket",
  tone: "purple",
  hero: {
    eyebrow: "TicketIQ",
    headline: "Agentic AI for autonomous IT support.",
    subhero: "Autonomous IT support. Faster resolutions. Zero-touch operations.",
    lead: "TicketIQ resolves L1 ITSM tickets autonomously — from intake to action to audit — with risk-tiered governance built in. Production-grade, not POC theatre.",
    primary: { label: "See TicketIQ live", to: "/contact?demo=ticket-iq" },
    secondary: { label: "Talk to a solution expert", to: "/contact?service=enterprise-ai" },
    trustLine: "Integrates with ServiceNow · BMC · Jira SM · SolarWinds · custom ITSM.",
  },
  problem: {
    heading: "L1 tickets are eating your service desk.",
    lead: "Repetitive password resets, access requests, and break-fix tickets consume the bulk of L1 capacity. Mean time to resolve climbs. Your senior engineers spend their day on tasks that should never have reached them.",
    pains: [
      "70%+ of tickets are repeatable and self-serviceable but still get human-routed.",
      "MTTR climbs as ticket volume grows.",
      "L1 churn is high; institutional ITSM knowledge walks out.",
      "Service-level breaches concentrate at month-end and outage windows.",
      "Self-service portals get ignored — customers prefer to log a ticket.",
      "Risk-tiering and approvals slow the entire flow.",
      "Audit trails are inconsistent across tools and regions.",
      "Multi-region operations have no unified resolution playbook.",
    ],
  },
  capabilities: {
    sub: "An agentic loop that triages, acts, and resolves — with full audit and human-in-the-loop where it matters.",
    cards: [
      { title: "Autonomous ticket triage", outcome: "Every ticket classified, prioritised, and routed automatically.", bullets: ["NLU-based intent extraction", "Auto-categorisation by ITIL/ITSM taxonomy", "Risk scoring per ticket", "Routing to AI or human queue", "Duplicate detection and merge"] },
      { title: "L1 resolution at machine speed", outcome: "Password resets, access requests, and known-issue fixes resolved in seconds.", bullets: ["Password resets and account unlocks", "Access provisioning and role grants", "Software install and patch automation", "Known-error knowledge lookup", "Self-healing scripts on common issues"] },
      { title: "Risk-tiered governance", outcome: "AI only acts when risk and confidence both clear policy.", bullets: ["Per-action risk tier (low/medium/high)", "Approval chains by tier", "Mandatory human-in-the-loop on high risk", "Full action diff before execution", "Policy-coded guardrails"] },
      { title: "Multi-system action execution", outcome: "One agent that operates across the tools that own the action.", bullets: ["AD / Entra ID identity actions", "ServiceNow / BMC / Jira SM workflows", "Cloud platform actions (Azure, AWS, GCP)", "Endpoint management tooling", "Custom ITSM connectors"] },
      { title: "Audit & explainability", outcome: "Every action logged, every decision explainable.", bullets: ["Full action log per ticket", "Confidence + rationale per decision", "Data-source citations for every answer", "Region-specific data residency", "SOC-friendly evidence export"] },
      { title: "Continuous learning", outcome: "Every resolved ticket sharpens the next.", bullets: ["Resolution-playbook capture", "Auto-update of the known-error database", "Drift detection on intent accuracy", "Human-review feedback loop", "KPI dashboards (deflection, MTTR, FCR)"] },
    ],
  },
  industries: {
    sub: "Wherever ITSM scale, regulation, and audit-readiness collide.",
    tiles: [
      { name: "BFSI", value: "Regulated L1 automation with full audit and approvals." },
      { name: "Government", value: "Sovereign-cloud deployment, citizen-service desks." },
      { name: "Telecom", value: "High-volume L1 across consumer and enterprise tenants." },
      { name: "Oil & Gas", value: "Field-ops support across remote sites." },
      { name: "Healthcare", value: "Clinician-facing IT support with PHI safeguards." },
      { name: "Manufacturing", value: "Plant-floor IT and OT support with vendor handoffs." },
      { name: "Logistics", value: "Warehouse and fleet IT desks." },
    ],
  },
  architecture: {
    sub: "A risk-aware agentic loop that triages, acts, and audits — with humans in the loop where policy requires it.",
    steps: [
      { num: "01", phase: "Intake", description: "Tickets ingest from ServiceNow, BMC, Jira SM, email, Teams, or portal — with all attachments, history, and CMDB context attached." },
      { num: "02", phase: "Triage", description: "NLU classifier identifies intent, scores risk, and decides AI-action vs. human-route. Duplicates merged, priority set." },
      { num: "03", phase: "Reason", description: "Agent looks up the resolution playbook, validates entitlement, fetches required parameters, and drafts the action plan." },
      { num: "04", phase: "Act", description: "Action executes against AD, ServiceNow, cloud, or custom systems — or pauses for approval on medium/high-risk actions." },
      { num: "05", phase: "Audit", description: "Action diff, decision rationale, and outcome logged. Ticket closed with full evidence and customer-facing explanation." },
      { num: "06", phase: "Learn", description: "Playbook quality, KPIs, and intent accuracy continuously improved through human-review feedback." },
    ],
    closingLine: "TicketIQ moves your service desk from reactive ticket-pushing to autonomous, audited IT operations.",
  },
  useCases: {
    sub: "Closes the IT-operations loop with InsightSM dashboards.",
    cards: [
      { title: "Password reset & access", subtitle: "Highest-volume L1 ticket", crux: "Auto-resolves identity-related tickets with policy-coded approvals and full audit. Removes the most repetitive load from L1 immediately.", outcome: "60–80% deflection · Sub-minute MTTR on identity tickets." },
      { title: "Software & SaaS provisioning", subtitle: "Onboarding & change", crux: "Provisions standard SaaS licences, group memberships, and laptop apps via policy. Human approval on premium licences and sensitive scopes.", outcome: "Cleaner onboarding · Faster joiner-mover-leaver cycles." },
      { title: "Incident triage at scale", subtitle: "Mass-incident response", crux: "Auto-merges duplicate tickets during incidents, surfaces likely root-cause from CMDB and recent change tickets, escalates with full context.", outcome: "Lower mean-time-to-acknowledge · Cleaner war-room handoff." },
      { title: "Self-heal on known errors", subtitle: "Automated remediation", crux: "Executes proven scripts for known errors — restart service, clear cache, rotate token, reapply config — with full diff capture.", outcome: "Tickets resolved without ever opening." },
    ],
  },
  cta: {
    heading: "From reactive service desk to autonomous IT operations.",
    sub: "TicketIQ resolves L1 at machine speed, with audit trails regulated buyers require. See it run on your tickets.",
    primary: { label: "See TicketIQ live", to: "/contact?demo=ticket-iq" },
    tagline: "TicketIQ — Agentic AI for Modern ITSM",
  },
};

const CALLOPS_AI: ProductDetail = {
  slug: "callops-ai",
  kind: "enterprise-ai",
  icon: "callops",
  tone: "blue",
  hero: {
    eyebrow: "CallOps AI",
    headline: "AI voice agents for intelligent calling operations.",
    subhero: "Conversational voice AI for inbound and outbound at enterprise scale.",
    lead: "Voice AI agents that handle collections, lead qualification, appointments, renewals, and customer surveys — at scale, in your customers' languages, without expanding teams.",
    primary: { label: "Hear CallOps live", to: "/contact?demo=callops" },
    secondary: { label: "Talk to a solution expert", to: "/contact?service=enterprise-ai" },
    trustLine: "Arabic · English · Hindi · Urdu · Tagalog · Malayalam · regional dialect support.",
  },
  problem: {
    heading: "Voice operations don't scale.",
    lead: "Calling teams cap out fast. Quality drops. Compliance risk rises. Yet voice is still the channel customers trust most for renewals, collections, and high-stakes service.",
    pains: [
      "Outbound calling capacity capped by headcount.",
      "Inbound queues spike during campaigns and end-of-month.",
      "Multilingual coverage requires expensive specialist hires.",
      "Quality and compliance monitoring is sample-based, not full coverage.",
      "Agent ramp-up is slow; attrition is high.",
      "Dialer technology is disconnected from the AI/CRM stack.",
      "Customer experience varies wildly across agents and shifts.",
      "Voice analytics are post-hoc, not in-conversation.",
    ],
  },
  capabilities: {
    sub: "A voice-first, conversation-grade AI that talks, listens, transacts, and escalates safely.",
    cards: [
      { title: "Inbound voice automation", outcome: "Replace IVR with conversational AI that resolves at first call.", bullets: ["Intent capture from natural speech", "Multi-language and dialect support", "Authentication and account lookup", "Transaction execution in CRM/core", "Safe escalation to human agent"] },
      { title: "Outbound calling at scale", outcome: "Productive outbound campaigns without expanding headcount.", bullets: ["Collections and payment reminders", "Lead qualification and BANT scoring", "Appointment confirmations and reminders", "Renewal and retention conversations", "Survey and feedback collection"] },
      { title: "Human-grade voice quality", outcome: "Conversations that feel human — not robotic IVR.", bullets: ["Natural prosody and turn-taking", "Interruption handling", "Background noise tolerance", "Region-tuned voices and accents", "Brand-aligned persona"] },
      { title: "CRM & dialer integration", outcome: "One agent across your customer stack.", bullets: ["Salesforce, HubSpot, Dynamics, Zoho", "Native dialer or BYO dialer", "Call recording and metadata sync", "Disposition codes auto-applied", "Live-call screen-pop to human agent"] },
      { title: "Compliance & call governance", outcome: "Every conversation auditable, every consent captured.", bullets: ["Consent capture and DNC respect", "PCI-safe payment handling", "PII redaction in transcripts", "Call recording retention policies", "Region-specific data residency"] },
      { title: "Conversation analytics", outcome: "Every call becomes signal — in near real-time.", bullets: ["Intent and sentiment scoring", "Reason-for-call clustering", "Compliance flagging in transcript", "Agent-vs-AI performance metrics", "Campaign outcome dashboards"] },
    ],
  },
  industries: {
    sub: "Voice is where regulated, high-stakes customer moments still live.",
    tiles: [
      { name: "BFSI", value: "Collections, KYC follow-ups, card and loan service." },
      { name: "Insurance", value: "Renewals, claim updates, premium follow-ups." },
      { name: "Healthcare", value: "Appointment reminders, lab-result follow-ups." },
      { name: "Telecom", value: "Plan renewals, complaint follow-ups, win-back." },
      { name: "Real Estate", value: "Lead qualification, viewing scheduling." },
      { name: "Government", value: "Citizen outreach, scheme awareness campaigns." },
    ],
  },
  architecture: {
    sub: "A 5-stage voice loop with live model selection and supervisor-grade analytics.",
    steps: [
      { num: "01", phase: "Connect", description: "Inbound calls handled via SIP/PSTN/WebRTC; outbound campaigns launched via the dialer with consent and DNC checks pre-cleared." },
      { num: "02", phase: "Converse", description: "Speech-to-text captures intent in the customer's language; the agent generates a natural-prosody response; turn-taking and interruption handled like a human." },
      { num: "03", phase: "Transact", description: "Account lookup, payment, scheduling, and CRM updates executed inline — the conversation never breaks to confirm a backend write." },
      { num: "04", phase: "Escalate", description: "Sensitive, high-value, or low-confidence calls warm-transferred to a human agent with full live transcript and intent summary." },
      { num: "05", phase: "Analyse", description: "Recording, transcript, sentiment, compliance flags, and outcome stored — fed back into campaign tuning and quality dashboards." },
    ],
  },
  useCases: {
    sub: "From collections to renewals to citizen outreach — at GCC scale.",
    cards: [
      { title: "Collections at scale", subtitle: "BFSI / Insurance", crux: "Outbound payment reminders and arrears outreach in the customer's language, with payment-link delivery and call-back scheduling.", outcome: "Higher promise-to-pay rate · Lower collections cost." },
      { title: "Renewal & retention", subtitle: "Insurance / Telecom", crux: "Proactive renewal calls with policy/plan summary, upsell suggestions, and payment-flow handoff. Live-transfer on objection.", outcome: "Higher renewal rates · Lower CAC vs new sales." },
      { title: "Appointment automation", subtitle: "Healthcare / Real Estate", crux: "Reminders, rescheduling, and last-minute confirmations — handled in the customer's preferred language and channel.", outcome: "Lower no-show rate · Higher slot utilisation." },
      { title: "Citizen outreach", subtitle: "Government", crux: "Scheme awareness, application-status updates, and citizen surveys — at population scale, with compliance built in.", outcome: "Better awareness · Lower per-citizen contact cost." },
    ],
  },
  cta: {
    heading: "Voice operations, at AI scale.",
    sub: "CallOps AI handles the conversations your team can't get to — and elevates the ones your team should.",
    primary: { label: "Hear CallOps live", to: "/contact?demo=callops" },
    tagline: "CallOps AI — Voice Agents That Sound Human, Scale Like Software",
  },
};

const CXO_NEXUS: ProductDetail = {
  slug: "cxo-nexus",
  kind: "enterprise-ai",
  icon: "cxo",
  tone: "green",
  hero: {
    eyebrow: "CXO Nexus",
    headline: "Conversational AI analytics for leadership.",
    subhero: "Ask questions. Get instant insights. Make smarter decisions.",
    lead: "Business leaders interrogate enterprise data in plain English — grounded in your own systems, governed by your own access policies, surfaced through executive-grade visualisations.",
    primary: { label: "See CXO Nexus live", to: "/contact?demo=cxo-nexus" },
    secondary: { label: "Talk to a solution expert", to: "/contact?service=enterprise-ai" },
    trustLine: "Plugs into Power BI · Tableau · Qlik · Snowflake · BigQuery · Synapse · Databricks · custom warehouses.",
  },
  problem: {
    heading: "Dashboards weren't built for questions.",
    lead: "Leadership asks specific questions. Dashboards answer pre-defined ones. The gap gets bridged by analyst tickets, weeks of waiting, and decisions made without the data they need.",
    pains: [
      "Decisions wait on analyst availability.",
      "Dashboards answer last quarter's questions, not this morning's.",
      "Self-service BI requires SQL or DAX skills CXOs don't have.",
      "Generic chat-with-data tools hallucinate or query the wrong warehouse.",
      "Row-level security and entitlements get bypassed in ad-hoc analysis.",
      "Cross-domain questions span tools no single dashboard owns.",
      "Mobile and on-the-go interrogation barely exists.",
      "Multilingual leadership lacks Arabic-native interaction.",
    ],
  },
  capabilities: {
    sub: "A grounded, governed natural-language layer on top of the analytics stack you already run.",
    cards: [
      { title: "Plain-English data interrogation", outcome: "Type or speak any question — get a grounded answer, with the chart, the number, and the source.", bullets: ["Natural-language to SQL / DAX / MDX", "Multi-warehouse query routing", "Drill-down conversation memory", "Follow-up question chaining", "English and Arabic conversation modes"] },
      { title: "Grounded by your data model", outcome: "Answers reference your warehouse, semantic layer, and metrics catalogue — not a generic LLM guess.", bullets: ["Semantic-layer integration (dbt, Cube, LookML)", "Certified-metric awareness", "Dimension and measure validation", "Schema-aware query generation", "RAG-grounded answers with citations"] },
      { title: "Executive-grade visualisation", outcome: "The chart matches the question — not a generic table dump.", bullets: ["Auto-chart selection by question type", "Comparison, trend, and decomposition views", "Mobile-first layouts", "Export to slide or doc", "Embed in Teams, Slack, email"] },
      { title: "Row-level governance", outcome: "The CEO's question respects the CEO's entitlements — same as a dashboard.", bullets: ["Inheritance from existing RLS policies", "Region- and BU-aware filtering", "PII redaction in answers", "Audit trail per query", "Region-specific data residency"] },
      { title: "Cross-domain orchestration", outcome: "One question that spans Sales, Finance, Ops, and Service — answered as one answer.", bullets: ["Multi-warehouse joins (logical layer)", "Federated semantic queries", "Pre-built CXO question library", "Anomaly and outlier surfacing", "Narrative summarisation of findings"] },
      { title: "Voice & mobile", outcome: "Boardroom, lobby, car, plane — interrogate the data from anywhere.", bullets: ["iOS and Android native UX", "Voice-driven question input", "Teams and Slack chat surfaces", "Push insights and anomaly alerts", "Briefing-style daily digests"] },
    ],
  },
  industries: {
    sub: "Wherever leadership decisions outpace the BI ticket queue.",
    tiles: [
      { name: "BFSI", value: "Branch, product, and risk performance at the CEO's fingertips." },
      { name: "Insurance", value: "Underwriting, claims, and channel KPIs on demand." },
      { name: "Oil & Gas", value: "Production, downtime, and HSE indicators across assets." },
      { name: "Manufacturing", value: "Plant-, line-, and SKU-level KPIs in one conversation." },
      { name: "Retail", value: "Sales, margin, inventory, and footfall — by store, by hour." },
      { name: "Government", value: "Programme KPIs, citizen-service metrics, regional rollouts." },
    ],
  },
  architecture: {
    sub: "A grounded NL-to-insight loop that respects your warehouse, semantic layer, and entitlements.",
    steps: [
      { num: "01", phase: "Ask", description: "Type, speak, or pick from a suggested question. English or Arabic. Mobile, desktop, Teams, or Slack." },
      { num: "02", phase: "Ground", description: "Question parsed against the semantic layer, certified-metric catalogue, and warehouse schema — RLS and entitlements applied." },
      { num: "03", phase: "Query", description: "Generated SQL / DAX / MDX executes against the right warehouse (or warehouses, for cross-domain questions)." },
      { num: "04", phase: "Visualise", description: "Chart type chosen for the question shape; result rendered with the source query, citation, and refresh time." },
      { num: "05", phase: "Decide", description: "Drill-down, comparison, or narrative summary continues the conversation — exported to slide, doc, or shared with the team." },
    ],
  },
  useCases: {
    sub: "From the C-suite question to the desk-level decision.",
    cards: [
      { title: "Weekly executive review", subtitle: "Pre-meeting brief", crux: "CXO Nexus assembles a one-page brief with the week's KPI movement, top variances, and outlier callouts — sent before the meeting.", outcome: "Higher-signal exec meetings · Less prep load on FP&A." },
      { title: "Board-pack interrogation", subtitle: "Live Q&A", crux: "Boards ask follow-up questions live, mid-meeting — grounded answers with citations, not slides from last quarter.", outcome: "Better decisions, faster · Lower analyst pull." },
      { title: "Anomaly alerts", subtitle: "Proactive insight", crux: "Daily and weekly anomaly detection pushes to executive devices with narrative context and recommended next look.", outcome: "Issues caught in days, not quarters." },
      { title: "Arabic-native exec UX", subtitle: "GCC leadership", crux: "Arabic-language conversation interface for senior Gulf leadership — same data, same governance, native interaction.", outcome: "Higher exec adoption · Decisions made in the leader's language." },
    ],
  },
  cta: {
    heading: "Your data, on conversational terms.",
    sub: "Stop waiting on analyst tickets. Ask any question, any time, in any language — and act on the answer.",
    primary: { label: "See CXO Nexus live", to: "/contact?demo=cxo-nexus" },
    tagline: "CXO Nexus — Conversational AI for Enterprise Decision-Making",
  },
};

export const ENTERPRISE_AI_PRODUCTS: ReadonlyArray<ProductDetail> = [ASSIST_IQ, TICKET_IQ, CALLOPS_AI, CXO_NEXUS];

export function getEnterpriseAIBySlug(slug: string): ProductDetail | null {
  return ENTERPRISE_AI_PRODUCTS.find((p) => p.slug === slug) ?? null;
}
