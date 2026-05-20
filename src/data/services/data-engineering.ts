import type { ServiceDetail } from "../service-detail";

// All copy verbatim from _planning/content/services/DATA_ENGINEERING.md.

export const dataEngineering: ServiceDetail = {
  slug: "data-engineering",

  hero: {
    headline: /* i18n */ "Data Engineering",
    subhero: /* i18n */ "Build a Foundation for Scalable, Trusted, and Intelligent Data.",
    supporting:
      /* i18n */
      "Modern cloud-native data platforms engineered for analytics, AI, and enterprise scale.",
    primaryCta: { label: /* i18n */ "Talk to a Data Engineering Expert", to: "/contact?service=data-engineering" },
    secondaryCta: { label: /* i18n */ "Explore Our Approach", to: "#approach" },
  },

  about: {
    heading: /* i18n */ "Engineering the Data Backbone of Modern Enterprises",
    paragraphs: [
      /* i18n */
      "Enterprise data is only as powerful as the platform that moves, governs, and serves it. Techknomatic helps organisations modernise fragmented data ecosystems into unified, cloud-native foundations built on Azure, AWS, GCP, Snowflake, and Databricks. From high-throughput ETL/ELT pipelines and real-time streaming to lakehouse architectures and governance frameworks, we deliver data engineering that is reliable, observable, and AI-ready.",
      /* i18n */
      "Our solutions combine deep-platform expertise with reusable accelerators — connectors, transformation frameworks, and quality libraries — that compress delivery timelines and reduce risk. The result is a scalable data foundation that powers BI, advanced analytics, and AI/ML initiatives across the enterprise.",
    ],
  },

  capabilities: {
    sub: /* i18n */ "Six core capabilities that span the full data engineering lifecycle.",
    cards: [
      { index: "01", title: "ETL/ELT Pipelines & Automation", outcome: "Reliable, scalable pipelines built with Talend, Azure Data Factory, Informatica, dbt, and Python." },
      { index: "02", title: "Cloud & Platform Setup", outcome: "Modern data platforms on Azure Synapse, Snowflake, Databricks, and Redshift — engineered to scale." },
      { index: "03", title: "Salesforce Cloud Integration", outcome: "Seamless Salesforce data integration to power a unified enterprise customer view." },
      { index: "04", title: "Metadata & Master Data Management", outcome: "Trusted data assets through MDM, metadata governance, and enterprise data catalogs." },
      { index: "05", title: "Real-Time & IoT Engineering", outcome: "Streaming pipelines on Kafka, Event Hubs, and Spark Streaming for low-latency insights." },
      { index: "06", title: "Data Quality & Governance", outcome: "Automated quality checks, cleansing routines, and governance frameworks for trusted data." },
    ],
  },

  tech: {
    sub: /* i18n */ "A platform-agnostic stack — we choose the right tool for your architecture, not the other way around.",
    rows: [
      { category: "Cloud Platforms", items: "Azure · AWS · GCP · Snowflake · Databricks" },
      { category: "ETL / Orchestration", items: "Talend · Azure Data Factory · dbt · Apache Airflow · SSIS · Informatica" },
      { category: "Real-Time Processing", items: "Apache Kafka · Azure Event Hubs · Spark Streaming" },
      { category: "Data Governance", items: "Azure Purview · Talend Catalog · Collibra" },
      { category: "Data Sources We Integrate", items: "Salesforce · SAP · Oracle · SQL Server · Amazon S3 · IoT Devices · REST/SOAP APIs" },
    ],
  },

  approach: {
    sub: /* i18n */ "A proven 5-step delivery framework that takes you from assessment to optimised operations.",
    steps: [
      { num: "01", phase: "Assess", description: "Inventory data sources, integration points, and pipeline bottlenecks. Define the target architecture." },
      { num: "02", phase: "Architect", description: "Design end-to-end data flow — ingestion, transformation, storage, and serving layers. Agree SLAs upfront." },
      { num: "03", phase: "Build & Automate", description: "Develop pipelines with CI/CD, parameterised configurations, and automated quality checks at every stage." },
      { num: "04", phase: "Test & Monitor", description: "Run data-quality assertions, lineage validation, and load tests. Stand up alerting and SLA dashboards." },
      { num: "05", phase: "Operate & Optimise", description: "Hand off to managed operations or upskill your team. Continuously tune cost and performance." },
    ],
  },

  differentiators: {
    sub: /* i18n */ "Six differentiators that consistently set our delivery apart.",
    cards: [
      { title: "End-to-End Ownership", body: "One accountable partner from source systems → pipelines → platform → BI & AI." },
      { title: "Deep Ecosystem Expertise", body: "Proven experience with Salesforce, SAP, Oracle, IoT, and legacy data systems." },
      { title: "Strong Certified Talent", body: "Azure and Snowflake implementation teams led by certified architects." },
      { title: "Pre-Built Accelerators", body: "Reusable connectors, templates, and frameworks for faster, lower-risk delivery." },
      { title: "100+ Pipelines Delivered", body: "Production-grade pipelines across BFSI, Manufacturing, Pharma, and Energy." },
      { title: "SLA-Governed Delivery", body: "Monitored pipelines with SLA guarantees — no black-box solutions." },
    ],
  },

  useCases: {
    sub: /* i18n */ "Three high-impact data engineering programs we deliver for enterprises.",
    cards: [
      {
        title: "Data Platform Modernisation",
        subtitle: "Re-architect legacy data ecosystems into a scalable cloud-native foundation.",
        crux: "Migrate fragmented ETL workflows and legacy warehouses into a governed lakehouse on Databricks and Azure. Using Medallion Architecture, Delta Lake, ADF, and Airflow, we build Bronze–Silver–Gold layers that power enterprise BI, analytics, and AI at scale.",
        industries: "BFSI · Insurance · Manufacturing · Retail · Telecom",
        outcome: "Faster reporting · Higher scalability · Lower infra cost.",
      },
      {
        title: "Real-Time Operational Intelligence Platforms",
        subtitle: "Transform enterprise operational analytics platforms on AWS.",
        crux: "Redshift, Glue, Kinesis, Lambda, MSK, and S3 — using Kafka streaming, CDC pipelines, and dimensional modelling. Consolidate ERP, CRM, IoT, and operations data into real-time/low-latency operational views for faster decisions.",
        industries: "Oil & Gas · Logistics · ITSM · Telecom · Supply Chain",
        outcome: "Real-time visibility · Streaming analytics · Unified ops view.",
      },
      {
        title: "Data Quality, Reconciliation & Observability",
        subtitle: "Engineer trust into every stage of the data lifecycle.",
        crux: "Embed automated validation, reconciliation, schema-drift detection, lineage tracking, and SLA monitoring directly into transformation layers. Built on Snowflake and GCP — BigQuery, Dataflow, Pub/Sub — to surface data issues earlier for compliance.",
        industries: "BFSI · Insurance · Healthcare · Government · Regulated Enterprises",
        outcome: "Trusted data · Audit ready · Reduced operational risk.",
      },
    ],
  },

  cta: {
    heading: /* i18n */ "Ready to build a scalable data foundation?",
    sub: /* i18n */ "Talk to a data engineering expert to understand how we can accelerate your data platform journey.",
    primary: { label: /* i18n */ "Talk to an Expert", to: "/contact?service=data-engineering" },
  },
};
