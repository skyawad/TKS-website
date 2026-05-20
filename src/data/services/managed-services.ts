import type { ServiceDetail } from "../service-detail";

// All copy verbatim from _planning/content/services/MANAGED_SERVICES.md.

export const managedServices: ServiceDetail = {
  slug: "managed-services",

  hero: {
    headline: /* i18n */ "Managed IT Services",
    subhero: /* i18n */ "Keep Your Business Running — Reliably, Securely, and at Scale.",
    supporting:
      /* i18n */
      "End-to-end IT infrastructure, outsourcing, and maintenance — engineered for maximum uptime, airtight security, and operational growth across the UAE and the wider GCC.",
    primaryCta: { label: /* i18n */ "Talk to an IT Expert", to: "/contact?service=managed-services" },
    secondaryCta: { label: /* i18n */ "Explore Our Services", to: "#what-we-offer" },
  },

  about: {
    heading: /* i18n */ "Managing the IT Backbone of Modern Businesses",
    paragraphs: [
      /* i18n */
      "Your IT infrastructure is only as strong as the team managing it. Techknomatic delivers comprehensive managed IT services — from network design and cloud migration to server solutions and 24/7 IT support — that keep your operations secure, resilient, and future-ready. Whether you're setting up a new environment, migrating to Azure, AWS, or GCP, or extending the life of legacy hardware, our certified engineers provide the expertise you need, when you need it.",
      /* i18n */
      "Our managed services model combines proactive monitoring, structured AMC programs, and OEM-agnostic third-party maintenance to reduce operational costs without compromising quality. The result is an IT estate that performs at its best — every day, across every layer.",
    ],
  },

  capabilities: {
    sub: /* i18n */ "Six core capabilities that span the full managed IT services lifecycle.",
    cards: [
      { index: "01", title: "IT Infrastructure Services", outcome: "Design, deploy, and manage high-performance networks, servers, and data-centre environments — end to end." },
      { index: "02", title: "Cloud Infrastructure & Migration", outcome: "Move to Azure, AWS, or GCP with confidence — minimal downtime, maximum security, and optimised cost." },
      { index: "03", title: "Server & Storage Solutions", outcome: "Scalable on-premises and cloud-ready servers with SAN/NAS storage engineered to your application demands." },
      { index: "04", title: "IT Security Infrastructure", outcome: "Firewalls, IPS, endpoint protection, and access controls that secure every layer of your IT environment." },
      { index: "05", title: "IT Outsourcing & Helpdesk", outcome: "Certified L1, L2 & L3 engineers delivering 24/7 on-site and remote IT support with guaranteed SLAs." },
      { index: "06", title: "Third-Party Maintenance (TPM)", outcome: "OEM-agnostic AMC and lifecycle support for multi-vendor compute, networking, and data-centre hardware." },
    ],
  },

  tech: {
    sub: /* i18n */ "A vendor-agnostic stack — we choose the right platform and hardware for your environment, not the other way around.",
    rows: [
      { category: "Cloud Platforms", items: "Microsoft Azure · AWS · Google Cloud Platform (GCP)" },
      { category: "Networking", items: "Cisco · Juniper · Fortinet · Aruba · Palo Alto Networks" },
      { category: "Virtualisation", items: "VMware vSphere · Microsoft Hyper-V · Proxmox VE" },
      { category: "Storage & Compute", items: "SAN · NAS · HPE · Dell EMC · NetApp · IBM" },
      { category: "Security", items: "Fortinet FortiGate · Palo Alto · Cisco FirePower · CrowdStrike · IPS/IDS" },
      { category: "Hardware Vendors Supported (TPM)", items: "HPE · Dell · Cisco · Lenovo · IBM · NetApp · Juniper · Aruba" },
    ],
  },

  approach: {
    sub: /* i18n */ "A proven 5-step delivery framework — from environment audit to continuous optimisation.",
    steps: [
      { num: "01", phase: "Assess", description: "Audit existing IT environment — infrastructure, security gaps, hardware lifecycle status, SLA requirements. Define target architecture and support model." },
      { num: "02", phase: "Design", description: "Architect a tailored solution — network topology, cloud strategy, virtualisation, security layers, tiered support structure. Agree SLAs and KPIs upfront." },
      { num: "03", phase: "Deploy", description: "Implement infrastructure with certified engineers — minimal disruption, structured change management, full documentation at every stage." },
      { num: "04", phase: "Monitor", description: "24/7 proactive monitoring, automated alerting, real-time incident response, monthly health-check reporting dashboards." },
      { num: "05", phase: "Maintain & Optimise", description: "Ongoing AMC, patch management, hardware lifecycle planning — continuously tuning performance and cost while extending asset life." },
    ],
  },

  differentiators: {
    sub: /* i18n */ "Six differentiators that consistently set our delivery apart.",
    cards: [
      { title: "End-to-End IT Partner", body: "One accountable team from network design → deployment → cloud migration → ongoing managed support. No finger-pointing across vendors." },
      { title: "Certified Engineering Team", body: "L1, L2, and L3 engineers with OEM and cloud certifications — qualified, rapid resolution at every support tier." },
      { title: "OEM-Agnostic TPM Support", body: "Multi-vendor third-party maintenance across compute, networking, security, and data-centre hardware — without OEM lock-in or premium pricing." },
      { title: "Full Lifecycle Management", body: "Support from Day 1 through End-of-Service-Life (EOSL) — we keep your hardware running as long as you need it, on your terms." },
      { title: "24/7 Proactive Monitoring", body: "Round-the-clock monitoring with SLA-backed response times, real-time alerting, and zero-downtime incident resolution targets." },
      { title: "Structured AMC Programs", body: "Comprehensive IT AMC with scheduled health checks, patch management, and executive-level reporting for compliance and visibility." },
    ],
  },

  useCases: {
    sub: /* i18n */ "Three high-impact managed IT programs we deliver for enterprises.",
    cards: [
      {
        title: "IT Infrastructure Refresh & Cloud Migration",
        subtitle: "Modernise legacy on-premises infrastructure into a cloud-ready, high-performance environment.",
        crux: "Assess and redesign ageing LAN/WAN, server, and storage environments. Migrate workloads to Azure, AWS, or GCP with structured change management, zero-downtime cutovers, and post-migration performance optimisation — delivering a secure, scalable foundation ready for analytics and AI.",
        industries: "BFSI · Manufacturing · Retail · Healthcare · Education",
        outcome: "Reduced downtime · Lower infrastructure cost · Improved agility.",
      },
      {
        title: "Managed IT Outsourcing for Enterprise Operations",
        subtitle: "Offload IT operations to a certified team and refocus your resources on core business priorities.",
        crux: "Deploy dedicated L1–L3 engineers for helpdesk, infrastructure management, and 24/7 monitoring. Covers on-site and remote support, incident response, patch management, and monthly SLA-governed health reporting — always-on IT coverage without the cost of an in-house team.",
        industries: "Telecom · ITSM · Logistics · Professional Services · Government",
        outcome: "Reduced IT headcount cost · Faster resolution · Always-on uptime.",
      },
      {
        title: "Third-Party Maintenance & EOSL Hardware Support",
        subtitle: "Extend hardware life and reduce maintenance spend — without compromising OEM-level support quality.",
        crux: "Replace costly OEM contracts with OEM-agnostic TPM coverage for compute, networking, security, and data-centre hardware. Support spans Day 1 through End-of-Service-Life — enabling reinvestment of maintenance savings into AI, cloud, or other strategic technology initiatives.",
        industries: "BFSI · Energy · Manufacturing · Healthcare · Government",
        outcome: "Up to 70% maintenance savings · Extended asset life · No OEM lock-in.",
      },
    ],
  },

  cta: {
    heading: /* i18n */ "Ready to build a resilient IT infrastructure?",
    sub:
      /* i18n */
      "Talk to a managed services expert to understand how we can reduce downtime, cut maintenance costs, and keep your business running — at any scale.",
    primary: { label: /* i18n */ "Talk to an IT Expert", to: "/contact?service=managed-services" },
  },
};
