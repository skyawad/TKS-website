import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { FloatingCard, type IconTone } from "../components/FloatingCard";
import { Icon, type IconName } from "../components/Icon";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { ProcessTimeline } from "../components/ProcessTimeline";
import { PillarCard } from "../components/PillarCard";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import styles from "./ServicesIndex.module.css";

interface ServiceEntry {
  slug: string;
  title: string;
  desc: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const SERVICES: ServiceEntry[] = [
  { slug: "business-analytics", title: "Business Analytics", desc: "Turning data into decisions, at speed and scale. BI strategy, design-led dashboards, and adoption — Power BI, Tableau, Qlik.", icon: "analytics", tone: "orange", path: "/services/business-analytics" },
  { slug: "data-engineering", title: "Data Engineering", desc: "A foundation for scalable, trusted, intelligent data. Modern cloud-native data platforms engineered for analytics, AI, and enterprise scale.", icon: "data-eng", tone: "blue", path: "/services/data-engineering" },
  { slug: "data-ai-strategy", title: "Data & AI Strategy", desc: "From models to momentum. AI strategy, LLM apps, agentic workflows, document AI, conversational BI — production, not POC.", icon: "ai-strategy", tone: "purple", path: "/services/data-ai-strategy" },
  { slug: "geospatial-analytics", title: "Geospatial Analytics", desc: "Location-driven intelligence. ArcGIS implementation, geo-dashboards, field ops, spatial risk. ESRI Silver Partner.", icon: "geospatial", tone: "green", path: "/services/geospatial-analytics" },
  { slug: "managed-services", title: "Managed Services", desc: "Keep your business running. End-to-end IT infrastructure, cloud, security, and 24/7 helpdesk. OEM-agnostic.", icon: "managed", tone: "yellow", path: "/services/managed-services" },
];

const PROCESS = [
  { num: "01", phase: "Discover", description: "Assess the current estate, business priorities, and adoption gaps. Define success criteria and target outcomes with stakeholders." },
  { num: "02", phase: "Design", description: "Architect the solution: data model, platform, governance, security. Design-led wireframes before development." },
  { num: "03", phase: "Build", description: "Develop on the chosen platform with iterative stakeholder reviews. No big-bang releases." },
  { num: "04", phase: "Deploy", description: "Roll out to users with workspace setup, security, deployment pipelines, performance tuning, and integration." },
  { num: "05", phase: "Sustain", description: "Drive adoption through training, Centre of Excellence enablement, ongoing governance, monitoring, and continuous improvement." },
];

export function ServicesIndex() {
  return (
    <>
      <HeroSection
        eyebrow="Services"
        headline={
          <>
            Five practices.<br />
            <em>One partner.</em>
          </>
        }
        lead="Senior-led consulting that turns data into decisions. From dashboards to data engineering to AI to geospatial to managed operations — built for Gulf enterprise."
        actions={
          <>
            <Link to="/contact">
              <Button variant="primary">Start a conversation</Button>
            </Link>
            <Link to="/about/customer-stories">
              <Button variant="link">Customer stories</Button>
            </Link>
          </>
        }
        illustration={
          <>
            {SERVICES.map((s, idx) => (
              <FloatingCard
                key={s.slug}
                label={s.title}
                glyph={<Icon name={s.icon} size={14} />}
                tone={s.tone}
                position={{
                  top: 20 + idx * 60,
                  left: idx % 2 === 0 ? 0 : undefined,
                  right: idx % 2 === 1 ? 0 : undefined,
                }}
                delayMs={idx * 300}
              />
            ))}
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="Practice" heading="What we do." />
          <div className={styles.grid}>
            {SERVICES.map((s) => (
              <Reveal key={s.slug}>
                <ProductCard
                  title={s.title}
                  description={s.desc}
                  glyph={<Icon name={s.icon} />}
                  tone={s.tone}
                  to={s.path}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="How we deliver"
            heading="One delivery model across every practice."
            subtext="A senior-led, 5-step framework that takes you from discovery to a running system — adoption built in from day one."
          />
          <ProcessTimeline steps={PROCESS} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Why our practice"
            heading="Senior. Specialist. Outcome-led."
          />
          <div className={styles.pillarGrid}>
            <PillarCard number="01" title="Senior-led, not staff-aug" body="Every engagement is led by certified architects who have shipped equivalent platforms in production. No junior bodies on-site." />
            <PillarCard number="02" title="AI + Data Engineering under one roof" body="We build the foundation and the AI on top — no upstream gaps, no broken refreshes." />
            <PillarCard number="03" title="OEM-credentialed across the stack" body="Qlik · ESRI Silver · Microsoft (Azure + Power BI + Gen AI). We recommend the platform that fits your context — not the one we want to sell." />
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Let's scope it"
        headline="Pick the practice. Or let us pick it with you."
        sub="Tell us about the outcome. We'll tell you which practice (or combination) gets there fastest."
        primary={{ label: "Start a conversation", to: "/contact" }}
      />
    </>
  );
}
