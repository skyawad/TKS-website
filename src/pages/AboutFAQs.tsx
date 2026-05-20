import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { FloatingCard } from "../components/FloatingCard";
import { Icon } from "../components/Icon";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import styles from "./AboutSub.module.css";

const ENGAGEMENT_FAQS = [
  { q: "How do you typically start an engagement?", a: "Every engagement begins with a discovery session — a structured 60-90 minute conversation about your business problem, current state, and target outcomes. No generic pitch deck. We follow that with a written proposal that names the team, the methodology, and the timeline." },
  { q: "What's your typical engagement size?", a: "From 6-week scoped diagnostics to multi-quarter implementation programmes. Most of our work runs as 3-12 week phases with clear KPI deliverables — built so each phase ships value on its own." },
  { q: "Do you work fixed-fee or T&M?", a: "Both. Most analytics and AI implementations work fixed-fee per scoped phase. Managed services and ongoing engagements work as either monthly retainer or T&M, whichever fits your governance model." },
  { q: "Where are your consultants based?", a: "We are UAE-resident for Gulf engagements (Dubai office, growing team), Pune (India) for delivery depth, Muscat through our partner Primer, and USA through our partner Inspirational Global. Engagement leads are always UAE-resident for Gulf customers." },
  { q: "Which industries do you specialise in?", a: "BFSI, insurance, oil & gas, manufacturing, tech & IT services, government, and telecom. We have shipped production analytics and AI across all of these in the UAE and wider GCC." },
  { q: "Can you work with our existing data stack?", a: "Yes — we are platform-flexible. We hold OEM credentials across Qlik (Partner), ESRI (Silver), and Microsoft (Azure, Power BI, Fabric, Generative AI). We will recommend the platform that fits your context, not the one we want to sell." },
  { q: "How do you handle data residency and compliance?", a: "Every solution can be deployed in UAE data residency where required. We support cloud, private cloud, hybrid, and full on-premise — including sovereign-cloud deployments for government and regulated buyers." },
  { q: "What does \"production-grade AI\" actually mean to you?", a: "It means audit trails, role-based access, PII redaction, region-specific residency, safe escalation to humans, and full observability — built in, not bolted on. We do not ship demos as products." },
  { q: "Do you offer post-go-live support?", a: "Yes. Managed services, training, Centre-of-Excellence enablement, and platform managed-support are all part of our practice. Adoption is part of delivery, not an afterthought." },
  { q: "How can we get started?", a: "Start a conversation through the Contact page, email info@techknomatic.com, or WhatsApp our UAE team. Discovery sessions are free and typically scheduled within a week." },
];

const CAREERS_FAQS = [
  { q: "Who do you typically hire?", a: "Senior data engineers, analytics consultants, AI/LLM application engineers, GIS specialists, and ITSM analytics practitioners. Plus structured freshers programmes for the right candidates." },
  { q: "What technologies do you work with?", a: "Microsoft Azure, Databricks, Power BI, Fabric, Qlik (Sense and Cloud), ESRI ArcGIS, Snowflake, Python/SQL, Azure OpenAI, LangChain/LangGraph, and the ITSM stack (ServiceNow, BMC, Jira SM)." },
  { q: "Are roles UAE-resident or remote?", a: "Both — we have UAE-resident roles in Dubai and Pune-based roles with optional Gulf-engagement travel. Some senior consulting roles are remote-first." },
  { q: "Do you sponsor UAE work visas?", a: "Yes, for UAE-resident roles where the candidate is the right fit and the role requires it." },
  { q: "What's the freshers programme like?", a: "Structured 12-month immersion across data engineering, analytics, and AI fundamentals. Pairs you with senior architects on real customer work starting month 3." },
  { q: "What certifications do you pay for?", a: "Microsoft (Azure Data, Power BI, Fabric, AI), Qlik (Qlik Sense), ESRI (ArcGIS), and AI/LLM platform certifications — all sponsored, with study leave and exam fees covered." },
  { q: "What's the interview process?", a: "Application → HR screen (30 min) → technical interview (60 min) → time-boxed case study + walkthrough → offer. Usually wraps in ~3 weeks." },
  { q: "Do you require prior consulting experience?", a: "Not for engineering or technical roles. We do look for it in customer-facing consultant roles." },
  { q: "Is the work mostly project-based or product-based?", a: "Mostly customer engagements (project-based) with a growing platform team building our four products (InsightSM, DataPulseIQ, ParseIQ, FreightIQ)." },
  { q: "What about work-life balance?", a: "Engagement-based work has cycles. We protect weekends, support flexible hours, and treat senior judgement as the answer to \"how do you balance this?\" — not policy theatre." },
  { q: "Are there opportunities to work on AI specifically?", a: "Yes — we have a growing AI/LLM practice with production deployments across BFSI, government, and customer-service automation. AssistIQ, TicketIQ, CallOps AI, and CXO Nexus are all customer-shipping." },
  { q: "How are reviews and promotions structured?", a: "Outcome-led. The work that shipped, what stuck, and what the customer said. Annual cycles with mid-year check-ins." },
  { q: "What's the leadership team like?", a: "Senior, hands-on, accessible. Founders (Rahul Madke, Prakash Pawar) and CTO (Sunny Tatiya) are actively engaged in delivery and architecture, not in a tower." },
  { q: "Can I refer a friend?", a: "Yes — referral bonuses for hires that join and stay 6 months. Send to careers@techknomatic.com with \"REFERRAL\" in the subject." },
  { q: "How do I apply?", a: "Email careers@techknomatic.com with CV plus a one-paragraph note on the work you're proudest of. We reply within 5 working days." },
];

interface FaqItemProps {
  q: string;
  a: string;
}

function FaqItem({ q, a }: FaqItemProps) {
  return (
    <details className={styles.faqItem}>
      <summary>{q}</summary>
      <p>{a}</p>
    </details>
  );
}

export function AboutFAQs() {
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow="FAQs"
        headline={
          <>
            The questions <em>we get asked,</em>
            <br />answered openly.
          </>
        }
        lead="Engagement & services FAQs and careers FAQs. If your question isn't here, ask us — we'll add it."
        actions={
          <>
            <Link to="/contact">
              <Button variant="primary">Ask us anything</Button>
            </Link>
            <a href="mailto:careers@techknomatic.com">
              <Button variant="link">Careers questions</Button>
            </a>
          </>
        }
        illustration={
          <>
            <FloatingCard label="Engagement" sub="10 FAQs" glyph={<Icon name="assistant" size={14} />} tone="orange" position={{ top: 60, left: 30 }} delayMs={0} />
            <FloatingCard label="Careers" sub="15 FAQs" glyph={<Icon name="inclusion" size={14} />} tone="purple" position={{ top: 180, right: 30 }} delayMs={300} />
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow="Engagement & services" heading="How we work with customers." />
          </Reveal>
          <div className={styles.faqList}>
            {ENGAGEMENT_FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 30}>
                <FaqItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>

          <h2 className={styles.faqGroupHead}>Careers</h2>
          <div className={styles.faqList}>
            {CAREERS_FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 20}>
                <FaqItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Still curious?"
        headline="Ask us anything."
        sub="If a question isn't answered here, write to us — we'll reply and add it to this list for the next person."
        primary={{ label: "Start a conversation", to: "/contact" }}
      />
    </>
  );
}
