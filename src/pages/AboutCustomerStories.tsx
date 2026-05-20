import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { FloatingCard } from "../components/FloatingCard";
import { Icon } from "../components/Icon";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import styles from "./AboutSub.module.css";

interface Story {
  industry: string;
  headline: string;
  body: string;
  metrics: { val: string; label: string }[];
}

const STORIES: Story[] = [
  {
    industry: "Insurance · UAE",
    headline: "22% claim TAT reduction across a composite carrier.",
    body: "Claims analytics revealed the three stages consuming 60% of cycle time. A combined process + ParseIQ deployment compressed end-to-end TAT by 22% in two quarters, while keeping audit-grade reporting intact.",
    metrics: [
      { val: "22%", label: "TAT reduction" },
      { val: "60%", label: "Bottleneck attribution" },
      { val: "0", label: "Regulatory exceptions" },
    ],
  },
  {
    industry: "Oil & Gas · GCC",
    headline: "Sub-minute control-room analytics across a downstream operator.",
    body: "SCADA/DCS data unified into a sub-minute analytics layer; control-room operators and executives see the same numbers in real time. Mobile field-ops workflows now run offline-capable across remote sites.",
    metrics: [
      { val: "<60s", label: "Data latency" },
      { val: "4", label: "Plants unified" },
      { val: "100%", label: "OT/IT bridged read-only" },
    ],
  },
  {
    industry: "Tech & IT Services · UAE",
    headline: "InsightSM live on ServiceNow in 14 days.",
    body: "An enterprise IT organisation went from no analytics layer to 20+ production dashboards on ServiceNow within two weeks — backed by senior consultant pairing throughout the rollout.",
    metrics: [
      { val: "14 days", label: "Time to production" },
      { val: "20+", label: "Dashboards live" },
      { val: "1", label: "Senior consultant paired" },
    ],
  },
  {
    industry: "BFSI · GCC",
    headline: "L1 ticket deflection through TicketIQ.",
    body: "Password resets, access provisioning, and known-error categories handed to TicketIQ with risk-tiered approvals. L1 desk deflection climbed past 60% within a quarter — with full audit trails and zero policy violations.",
    metrics: [
      { val: "60%+", label: "L1 deflection" },
      { val: "<1min", label: "MTTR on identity tickets" },
      { val: "0", label: "Policy violations" },
    ],
  },
  {
    industry: "Manufacturing · GCC",
    headline: "Multi-plant OEE standardisation across three plants.",
    body: "Three plants on different MES vendors unified into a standardised OEE/FPY framework with plant-specific drill-downs and an exec roll-up. First true cross-plant performance picture in the group's history.",
    metrics: [
      { val: "3", label: "Plants unified" },
      { val: "1", label: "Standardised KPI set" },
      { val: "+15%", label: "OEE on lowest-performing line" },
    ],
  },
];

export function AboutCustomerStories() {
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow="Customer stories"
        headline={
          <>
            Outcomes <em>we've delivered.</em>
          </>
        }
        lead="Anonymised customer engagements across the Gulf — analytics, AI, data engineering, geospatial, and managed services. Quantified where the customer permits it."
        actions={
          <>
            <Link to="/contact">
              <Button variant="primary">Start a conversation</Button>
            </Link>
            <Link to="/services">
              <Button variant="link">Explore our services</Button>
            </Link>
          </>
        }
        illustration={
          <>
            <FloatingCard label="Insurance" sub="22% TAT" glyph={<Icon name="insurance" size={14} />} tone="blue" position={{ top: 30, left: 20 }} delayMs={0} />
            <FloatingCard label="Oil & Gas" sub="<60s data" glyph={<Icon name="oil-gas" size={14} />} tone="orange" position={{ top: 110, right: 20 }} delayMs={250} />
            <FloatingCard label="IT Services" sub="14-day go-live" glyph={<Icon name="tech-it" size={14} />} tone="purple" position={{ top: 200, left: 40 }} delayMs={500} />
            <FloatingCard label="Manufacturing" sub="3 plants" glyph={<Icon name="manufacturing" size={14} />} tone="green" position={{ top: 280, right: 30 }} delayMs={750} />
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader
              eyebrow="Featured outcomes"
              heading="Five engagements. Five proof points."
              subtext="Anonymised at customer request. Full case studies available on request once an NDA is in place."
            />
          </Reveal>
          <div className={styles.cardGrid2}>
            {STORIES.map((s, i) => (
              <Reveal key={s.headline} delay={i * 100}>
                <article className={styles.storyCard}>
                  <span className={styles.storyTag}>{s.industry}</span>
                  <h3 className={styles.storyHeadline}>{s.headline}</h3>
                  <p className={styles.storyBody}>{s.body}</p>
                  <div className={styles.storyMetrics}>
                    {s.metrics.map((m) => (
                      <div className={styles.storyMetric} key={m.label}>
                        <span className={styles.storyMetricVal}>{m.val}</span>
                        <span className={styles.storyMetricLabel}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Want the full case study?"
        headline="Tell us your sector. We'll share the most relevant deep-dive."
        sub="Full case studies are shared under NDA on request. We'll match the most relevant engagement to your context."
        primary={{ label: "Request a case study", to: "/contact" }}
      />
    </>
  );
}
