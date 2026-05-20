import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import type { IconTone } from "../components/FloatingCard";
import { HeroEnterpriseAI } from "../components/HeroEnterpriseAI";
import { Icon, type IconName } from "../components/Icon";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { PillarCard } from "../components/PillarCard";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import styles from "./SectionIndex.module.css";

interface ProductEntry {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const PRODUCTS: ProductEntry[] = [
  {
    slug: "assist-iq",
    title: "AssistIQ",
    tagline: "Engage faster. Support smarter. Scale seamlessly.",
    desc: "AI agents and human-like avatars that autonomously handle customer queries and execute workflows across web, WhatsApp, voice, and kiosks — 24×7.",
    icon: "assistant",
    tone: "orange",
    path: "/enterprise-ai/assist-iq",
  },
  {
    slug: "ticket-iq",
    title: "TicketIQ",
    tagline: "Autonomous IT support. Faster resolutions. Zero-touch operations.",
    desc: "Agentic AI for ITSM that resolves L1 tickets autonomously — from intake to action to audit — with risk-tiered governance built in.",
    icon: "ticket",
    tone: "purple",
    path: "/enterprise-ai/ticket-iq",
  },
  {
    slug: "callops-ai",
    title: "CallOps AI",
    tagline: "AI voice agents for intelligent calling operations.",
    desc: "Conversational voice AI for inbound and outbound calling at scale — collections, lead qualification, appointments, renewals — without expanding teams.",
    icon: "callops",
    tone: "blue",
    path: "/enterprise-ai/callops-ai",
  },
  {
    slug: "cxo-nexus",
    title: "CXO Nexus",
    tagline: "Ask questions. Get instant insights. Make smarter decisions.",
    desc: "Conversational AI analytics that lets business leaders interrogate enterprise data in plain English — grounded in your own systems, not generic AI.",
    icon: "cxo",
    tone: "green",
    path: "/enterprise-ai/cxo-nexus",
  },
];

const PILLARS = [
  { num: "01", title: "Grounded, not hallucinating.", body: "Every response is grounded in your enterprise knowledge — FAQs, SOPs, CRM data, audit trails — through RAG. Generic AI does not get to invent answers." },
  { num: "02", title: "Safe escalation built in.", body: "Each agent knows what it can answer and exactly when to hand off to a human. Low-confidence, sensitive, or regulated scenarios route to the right person with full context." },
  { num: "03", title: "Production deployment, not POC theatre.", body: "Cloud · private cloud · hybrid · on-premise — every product ships in the deployment mode regulated buyers in BFSI and government require." },
  { num: "04", title: "Auditable, observable, governed.", body: "Role-based access, encryption, PII redaction, audit logging, region-specific data residency — every action the agent takes is logged and reviewable." },
];

export function EnterpriseAIIndex() {
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow="Enterprise AI"
        headline={
          <>
            Production-grade AI agents,<br />
            <em>audit-ready by design.</em>
          </>
        }
        lead="Four agentic AI products — customer support, IT operations, voice, and executive analytics — engineered to run in regulated UAE and GCC enterprises, not just demo to them."
        actions={
          <>
            <Link to="/contact?type=demo">
              <Button variant="primary">See a live demo</Button>
            </Link>
            <Link to="/contact?service=enterprise-ai">
              <Button variant="link">Talk to a solution expert</Button>
            </Link>
          </>
        }
        illustration={<HeroEnterpriseAI />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Product suite" heading="Four agents. One platform." />
          <div className={styles.grid4}>
            {PRODUCTS.map((p) => (
              <Reveal key={p.slug}>
                <ProductCard
                  title={p.title}
                  description={p.desc}
                  glyph={<Icon name={p.icon} />}
                  tone={p.tone}
                  to={p.path}
                  cta={`Explore ${p.title}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Why our agents"
            heading="Enterprise-grade by default. Audit-ready by design."
          />
          <div className={styles.pillarGrid4}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <PillarCard number={p.num} title={p.title} body={p.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Pick the agent. Or pick the loop."
        headline="See it live."
        sub="AssistIQ + CallOps AI close the customer-engagement loop. TicketIQ + InsightSM close the IT-operations loop. CXO Nexus puts both in front of leadership."
        primary={{ label: "Book a demo", to: "/contact?type=demo" }}
        secondary={{ label: "Chat on WhatsApp", href: "https://wa.me/971000000000" }}
      />
    </>
  );
}
