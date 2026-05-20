import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import type { IconTone } from "../components/FloatingCard";
import { HeroPlatformsHub } from "../components/HeroPlatformsHub";
import { Icon, type IconName } from "../components/Icon";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { PillarCard } from "../components/PillarCard";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import styles from "./SectionIndex.module.css";

interface PlatformEntry {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const PLATFORMS: PlatformEntry[] = [
  {
    slug: "insight-sm",
    title: "InsightSM",
    tagline: "Unified IT operations visibility across every ITSM tool.",
    desc: "AI ITSM analytics wrapper for ServiceNow, BMC, Jira SM, and SolarWinds. Production dashboards in days, not months.",
    icon: "managed",
    tone: "orange",
    path: "/platforms/insight-sm",
  },
  {
    slug: "datapulse-iq",
    title: "DataPulseIQ",
    tagline: "Trusted data. Intelligent validation. Autonomous data operations.",
    desc: "AI-powered data quality and observability — from real-time monitoring to autonomous remediation across every data source.",
    icon: "data-eng",
    tone: "blue",
    path: "/platforms/datapulse-iq",
  },
  {
    slug: "parse-iq",
    title: "ParseIQ",
    tagline: "AI-powered document intelligence and data extraction.",
    desc: "End-to-end document understanding — OCR · AI classification · LLM extraction · structured output. Built for KYC, claims, and government workflows.",
    icon: "ai-strategy",
    tone: "purple",
    path: "/platforms/parse-iq",
  },
  {
    slug: "freight-iq",
    title: "FreightIQ",
    tagline: "Intelligent freight pricing for faster quotes and higher profitability.",
    desc: "Dynamic AI pricing across LCL · FCL · Air · Multi-modal — instant customer-ready quotes from live carrier rates.",
    icon: "analytics",
    tone: "green",
    path: "/platforms/freight-iq",
  },
];

const PILLARS = [
  { num: "01", title: "Sample-first deployment.", body: "Validate KPIs, dashboards, and outputs on sampled data before committing to full-scale rollout. Faster stakeholder alignment, lower upfront cost." },
  { num: "02", title: "API-first, integration-flexible.", body: "Connect to the ITSM, ERP, CRM, telephony, and warehouse systems you already run on. No rip-and-replace." },
  { num: "03", title: "Cloud · Private · Hybrid · On-prem.", body: "Every deployment mode regulated buyers in BFSI and government require — including data residency in the UAE." },
];

export function PlatformsIndex() {
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow="Platforms"
        headline={
          <>
            Platforms that wrap your data,<br />
            ops, and documents in <em>intelligence.</em>
          </>
        }
        lead="Four enterprise platforms — productised on top of decades of delivery, ready to deploy into a UAE or GCC stack without rebuilding what works."
        actions={
          <>
            <Link to="/contact?type=demo">
              <Button variant="primary">Book a live demo</Button>
            </Link>
            <Link to="/contact?service=platforms">
              <Button variant="link">Talk to a solution expert</Button>
            </Link>
          </>
        }
        illustration={<HeroPlatformsHub />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Platform suite" heading="Four platforms. One stack." />
          <div className={styles.grid4}>
            {PLATFORMS.map((p) => (
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
            eyebrow="How our platforms deploy"
            heading="Sample-first. Production-grade. In days."
          />
          <div className={styles.pillarGrid3}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <PillarCard number={p.num} title={p.title} body={p.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Pick a platform. Or a combination."
        headline="Book a live demo."
        sub="InsightSM + CXO Nexus puts unified ops in front of leadership. ParseIQ + AssistIQ closes the customer-document loop. DataPulseIQ keeps every platform honest."
        primary={{ label: "Book a demo", to: "/contact?type=demo" }}
      />
    </>
  );
}
