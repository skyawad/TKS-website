import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import type { IconTone } from "../components/FloatingCard";
import { HeroIndustriesMap } from "../components/HeroIndustriesMap";
import { Icon, type IconName } from "../components/Icon";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { PillarCard } from "../components/PillarCard";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import styles from "./SectionIndex.module.css";

interface IndustryEntry {
  slug: string;
  title: string;
  value: string;
  proof: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const INDUSTRIES: IndustryEntry[] = [
  {
    slug: "insurance",
    title: "Insurance",
    value: "Turning claims complexity into clarity, powered by AI.",
    proof: "ESRI-powered geo-analytics have helped carriers reduce claim TAT by 22%.",
    icon: "insurance",
    tone: "blue",
    path: "/industries/insurance",
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    value: "From wellhead to boardroom — intelligence that drives every decision.",
    proof: "Sub-minute latency on refinery and field operations data, SCADA/DCS unified.",
    icon: "oil-gas",
    tone: "orange",
    path: "/industries/oil-and-gas",
  },
  {
    slug: "tech-it-services",
    title: "Tech & IT Services",
    value: "Resolve faster, predict smarter, serve better — AI for modern ITSM.",
    proof: '"ITSM Plug & Play" — 20+ pre-built dashboards, live in 2 weeks.',
    icon: "tech-it",
    tone: "purple",
    path: "/industries/tech-it-services",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    value: "Smart factories start with smarter data — AI for modern manufacturing.",
    proof: "Multi-plant deployments with standardised KPIs and plant-specific drill-downs.",
    icon: "manufacturing",
    tone: "green",
    path: "/industries/manufacturing",
  },
];

const PILLARS = [
  { num: "01", title: "Real-time analytics & dashboards.", body: "Sub-minute latency where it matters; executive views, operator views, analyst depth." },
  { num: "02", title: "Compliance & auditable governance.", body: "Especially insurance, O&G, manufacturing — every action logged, every report defensible." },
  { num: "03", title: "Integration with legacy ERP / SCADA / ITSM.", body: "SAP · Oracle · Dynamics · ServiceNow · Wonderware · Honeywell · ABB · Yokogawa · Jira SM · BMC." },
  { num: "04", title: "Multi-vendor, location-aware operations.", body: "Plant-level, region-level, branch-level drill-downs — and Gulf-data-residency options." },
];

export function IndustriesIndex() {
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow="Industries"
        headline={
          <>
            Sector-aware analytics for<br />
            <em>regulated, data-heavy</em> industries.
          </>
        }
        lead="Four verticals where we have shipped data, BI, and AI in production — engineered for UAE and GCC operating conditions, regulatory contexts, and integration realities."
        actions={
          <>
            <Link to="/contact">
              <Button variant="primary">Start a conversation</Button>
            </Link>
            <Link to="/about/customer-stories">
              <Button variant="link">Explore customer stories</Button>
            </Link>
          </>
        }
        illustration={<HeroIndustriesMap />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Verticals" heading="Where we have shipped." />
          <div className={styles.grid4}>
            {INDUSTRIES.map((i) => (
              <Reveal key={i.slug}>
                <ProductCard
                  title={i.title}
                  description={i.value}
                  glyph={<Icon name={i.icon} />}
                  tone={i.tone}
                  to={i.path}
                  cta="Explore sector"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Cross-cutting capabilities"
            heading="What carries across every industry."
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
        eyebrow="Tell us your industry. We'll show you our depth."
        headline="Start a discovery session."
        sub="Every engagement starts with a discovery session in your domain — not a generic pitch deck."
        primary={{ label: "Start a conversation", to: "/contact" }}
      />
    </>
  );
}
