import type { ServiceDetail } from "../service-detail";

// All copy verbatim from _planning/content/services/DATA_AI_STRATEGY.md.

export const dataAiStrategy: ServiceDetail = {
  slug: "data-ai-strategy",

  hero: {
    headline: /* i18n */ "Data & AI Strategy",
    subhero: /* i18n */ "From Models to Momentum: Enterprise AI, Built for Impact.",
    supporting:
      /* i18n */
      "Strategy, GenAI applications, agentic workflows, and production-grade model deployment — engineered to move Gulf enterprises from AI experimentation to measurable business outcomes.",
    primaryCta: { label: /* i18n */ "Schedule an AI Discovery Session", to: "/contact?service=data-ai-strategy" },
    secondaryCta: { label: /* i18n */ "Explore Customer Stories", to: "/about/customer-stories" },
  },

  about: {
    heading: /* i18n */ "From AI Experiments to Enterprise Impact",
    paragraphs: [
      /* i18n */
      "Most enterprises are no longer asking whether to invest in AI — they're asking how to operationalise it. Pilots stall in proof-of-concept purgatory. Models work in notebooks but fail in production. GenAI prototypes excite leadership but never make it past compliance. Techknomatic helps enterprises bridge that gap with end-to-end AI and data strategy services that take ideas from discovery to deployment.",
      /* i18n */
      "Our practice spans AI strategy and use-case identification, custom LLM applications and chatbots, agentic AI workflows, document AI, conversational BI, and production model deployment with full MLOps. Built on a multi-model foundation — Claude, OpenAI, Mistral, Gemini, and open-source — and tightly coupled with our data engineering capability, we deliver enterprise-grade AI that is secure, governed, and measurably impactful from day one.",
    ],
  },

  capabilities: {
    sub: /* i18n */ "Six core capabilities that span the full AI lifecycle — from strategy to production.",
    cards: [
      { index: "01", title: "Custom Chatbots & LLM Assistants", outcome: "Intelligent conversational AI for customer service, HR, helpdesk, and internal knowledge management." },
      { index: "02", title: "Agentic AI Workflows", outcome: "Multi-step automation that understands context, makes decisions, and executes complex business processes." },
      { index: "03", title: "Document AI & NLP", outcome: "Extract insights from contracts, claims, reports, and unstructured documents with LLM-powered processing." },
      { index: "04", title: "Conversational BI", outcome: "Natural-language analytics that lets anyone ask questions and get answers from their data — instantly." },
      { index: "05", title: "GenAI for Auto-Summaries", outcome: "Automated generation of summaries, reports, and emails from data — saving hours of manual work." },
      { index: "06", title: "AI Strategy & Model Deployment", outcome: "End-to-end AI consulting — from use-case identification to production deployment and monitoring." },
    ],
  },

  tech: {
    sub: /* i18n */ "A modern, multi-model AI stack — we pick the right model and framework for your use case, not the one we happen to know.",
    rows: [
      { category: "Foundation Models", items: "Claude (Sonnet · Opus) · OpenAI (GPT-4o) · Azure OpenAI · Mistral · Gemini · Hugging Face" },
      { category: "Orchestration & Agents", items: "LangChain · LlamaIndex · Semantic Kernel · AutoGen · n8n" },
      { category: "Vector Databases", items: "Pinecone · Weaviate · Azure AI Search · pgvector" },
      { category: "Document AI", items: "Azure Document Intelligence · AWS Textract · NotebookLM · Custom Fine-Tuned Models" },
      { category: "MLOps & Deployment", items: "Azure ML · AWS SageMaker · MLflow · Docker · Kubernetes · Vercel · Cloudflare · Render · Railway" },
    ],
  },

  approach: {
    sub: /* i18n */ "A proven 5-step delivery framework — from use case to production-grade, continuously improving AI.",
    steps: [
      { num: "01", phase: "Discover", description: "Identify high-impact use cases, assess data readiness, and define success metrics and guardrails." },
      { num: "02", phase: "Design", description: "Prompt engineering, model selection, and responsible-AI architecture design — including fallback logic." },
      { num: "03", phase: "Build & Fine-Tune", description: "RAG implementation, domain adaptation, and performance optimisation with evaluation harnesses." },
      { num: "04", phase: "Deploy", description: "API integration, safety logging, security hardening, and monitoring setup in your cloud environment." },
      { num: "05", phase: "Improve", description: "Hallucination reduction, feedback loops, continuous evaluation, and model-refresh cycles." },
    ],
  },

  differentiators: {
    sub: /* i18n */ "Six differentiators that separate AI demos from AI that ships and scales.",
    cards: [
      { title: "AI + Data Engineering Under One Roof", body: "We build your AI and your data infrastructure — so they work together by design, not by accident." },
      { title: "Multi-Model Expertise", body: "Claude, OpenAI, Azure OpenAI, Mistral, open-source — we select the right model for your needs and budget." },
      { title: "Cross-Industry Experience", body: "Live deployments across BFSI, Pharma, Energy, Manufacturing, and Retail." },
      { title: "Enterprise-Grade by Default", body: "Secure, governed, observable, and scalable — built for enterprise requirements from day one." },
      { title: "No Black Boxes", body: "Full transparency on model behaviour, biases, and decision rationale — with auditable evaluation harnesses." },
      { title: "Rapid Prototyping", body: "Working AI prototypes in days — validate the concept before full commitment." },
    ],
  },

  useCases: {
    sub: /* i18n */ "Four high-impact AI programs we deliver for enterprises — across document intelligence, data migration, autonomous operations, and customer experience.",
    cards: [
      {
        title: "Intelligent Document Processing & Contract Intelligence",
        subtitle: "Automate extraction, review, and analysis of high-volume enterprise documents.",
        crux: "Deploy AI-powered document processing pipelines that extract, classify, validate, and summarise structured and unstructured documents — contracts, invoices, clinical records, regulatory filings. Use LLMs with domain-specific fine-tuning to flag risks, compare clause variations, and generate review summaries, reducing manual review effort by up to 70%.",
        industries: "Legal · BFSI · Insurance · Healthcare · Procurement",
        outcome: "70% reduction in manual review · Faster contract turnaround · Improved risk flagging.",
      },
      {
        title: "Intelligent Data Migration & AI-Assisted Schema Transformation",
        subtitle: "Accelerate complex data migrations with AI that maps, transforms, and validates at scale.",
        crux: "Deploy AI-assisted migration pipelines that automate schema mapping, data-type reconciliation, transformation rule generation, and post-migration validation between heterogeneous sources — legacy warehouses, ERPs, SaaS platforms, and cloud databases. LLM-powered mapping assistants reduce manual effort, flag conflicts, and auto-generate reconciliation reports.",
        industries: "BFSI · Retail · Manufacturing · Healthcare · Any Enterprise Migration Program",
        outcome: "Faster migration timelines · Reduced manual mapping effort · Higher data integrity assurance.",
      },
      {
        title: "Agentic AI for Real-Time IT Operations & Incident Resolution (AIOps)",
        subtitle: "Autonomous agents that detect, triage, investigate, and resolve IT incidents — end to end.",
        crux: "Deploy multi-agent AIOps systems that continuously monitor infrastructure telemetry, application logs, and ITSM queues — classifying incidents by severity, correlating root causes across distributed systems, executing predefined runbooks, and generating plain-language resolution summaries for on-call engineers. Integrates with PagerDuty, ServiceNow, Datadog, and Splunk. Proven to cut MTTR by 40–60% in production environments at scale.",
        stack: "LangChain Agents · AutoGen · ServiceNow · Datadog · Splunk · Azure Monitor · PagerDuty",
        industries: "FinTech · Telecom · SaaS Platforms · E-Commerce · Retail · Banking",
        outcome: "40–60% reduction in MTTR · Autonomous runbook execution · Zero-gap 24×7 incident coverage.",
      },
      {
        title: "Retail & E-Commerce AI — Recommendations, Returns & Sentiment Intelligence",
        subtitle: "Personalise customer experiences and optimise retail operations with AI.",
        crux: "Deploy AI-powered product recommendation engines, returns-reason classifiers, and review-sentiment analysis pipelines that integrate with e-commerce and CRM platforms. LLM-driven customer intent modelling and behavioural signal processing improve conversion rates, reduce return friction, and surface actionable merchandising insights from unstructured feedback data.",
        industries: "Retail · E-Commerce · D2C · FMCG · Marketplace Platforms",
        outcome: "Improved conversion · Reduced returns cost · Richer customer insights.",
      },
    ],
  },

  cta: {
    heading: /* i18n */ "Ready to explore AI for your business?",
    sub:
      /* i18n */
      "Schedule a discovery session to identify the highest-impact AI opportunities for your organisation — and a clear path from prototype to production.",
    primary: { label: /* i18n */ "Schedule an AI Discovery Session", to: "/contact?service=data-ai-strategy" },
  },
};
