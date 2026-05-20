import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { HeroSection } from "./HeroSection";
import { FloatingCard, type IconTone } from "./FloatingCard";
import { SectionHeader } from "./SectionHeader";
import { CapabilityCard } from "./CapabilityCard";
import { UseCaseCard } from "./UseCaseCard";
import { ProcessTimeline } from "./ProcessTimeline";
import { PillarCard } from "./PillarCard";
import { PageCTA } from "./PageCTA";
import { Reveal } from "./Reveal";
import { HeroAnalytics } from "./HeroAnalytics";
import { HeroDataEng } from "./HeroDataEng";
import { HeroAiStrategy } from "./HeroAiStrategy";
import { HeroGeospatial } from "./HeroGeospatial";
import { HeroManaged } from "./HeroManaged";
import type { ServiceDetail } from "../data/service-detail";
import styles from "./ServiceDetailPage.module.css";

// Slug → bespoke animated hero illustration.
// Each service gets a themed scene matching its title (dashboards for
// analytics, pipelines for data eng, neural network for AI, etc).
const HERO_BY_SLUG: Record<string, () => ReactNode> = {
  "business-analytics":     HeroAnalytics,
  "data-engineering":       HeroDataEng,
  "data-ai-strategy":       HeroAiStrategy,
  "geospatial-analytics":   HeroGeospatial,
  "managed-services":       HeroManaged,
};

// Fallback floaters for any future service that doesn't yet have a
// bespoke illustration.
const FALLBACK_FLOATERS: { label: string; tone: IconTone; glyph: string; sub: string }[] = [
  { label: "AssistIQ",   tone: "orange", glyph: "⚡", sub: "AI copilot" },
  { label: "DataPulse",  tone: "blue",   glyph: "◆", sub: "Pipelines" },
  { label: "Qlik",       tone: "green",  glyph: "●", sub: "Analytics" },
  { label: "TicketIQ",   tone: "purple", glyph: "▲", sub: "ITSM AI" },
  { label: "ESRI",       tone: "yellow", glyph: "★", sub: "Geospatial" },
];

function FallbackHero() {
  return (
    <>
      <FloatingCard {...FALLBACK_FLOATERS[0]} position={{ top: 0, left: 30 }} delayMs={0} />
      <FloatingCard {...FALLBACK_FLOATERS[1]} position={{ top: 70, right: 0 }} delayMs={400} />
      <FloatingCard {...FALLBACK_FLOATERS[2]} position={{ top: 150, left: 0 }} delayMs={800} />
      <FloatingCard {...FALLBACK_FLOATERS[3]} position={{ top: 230, right: 30 }} delayMs={1200} />
      <FloatingCard {...FALLBACK_FLOATERS[4]} position={{ top: 300, left: 80 }} delayMs={1600} />
    </>
  );
}

export function ServiceDetailPage({ data }: { data: ServiceDetail }) {
  const HeroIllustration = HERO_BY_SLUG[data.slug] ?? FallbackHero;
  return (
    <>
      <HeroSection
        eyebrow={data.hero.subhero}
        headline={
          <>
            {data.hero.headline}
          </>
        }
        lead={data.hero.supporting}
        actions={
          <>
            {data.hero.primaryCta.to ? (
              <Link to={data.hero.primaryCta.to}>
                <Button variant="primary">{data.hero.primaryCta.label}</Button>
              </Link>
            ) : (
              <a href={data.hero.primaryCta.href} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">{data.hero.primaryCta.label}</Button>
              </a>
            )}
            {data.hero.secondaryCta &&
              (data.hero.secondaryCta.to ? (
                <Link to={data.hero.secondaryCta.to}>
                  <Button variant="link">{data.hero.secondaryCta.label}</Button>
                </Link>
              ) : (
                <a href={data.hero.secondaryCta.href} target="_blank" rel="noopener noreferrer">
                  <Button variant="link">{data.hero.secondaryCta.label}</Button>
                </a>
              ))}
          </>
        }
        trust={data.hero.trustLine ? <span>{data.hero.trustLine}</span> : undefined}
        illustration={<HeroIllustration />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow="About" heading={data.about.heading} />
          <div className={styles.about}>
            {data.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="What we offer"
            heading={data.capabilities.heading ?? "Capabilities"}
            subtext={data.capabilities.sub}
          />
          <div className={styles.gridThree}>
            {data.capabilities.cards.map((c) => (
              <Reveal key={c.title}>
                <CapabilityCard
                  index={c.index}
                  title={c.title}
                  outcome={c.outcome}
                  bullets={c.bullets}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Tools & technology"
            heading={data.tech.heading ?? "What we work with"}
            subtext={data.tech.sub}
          />
          <table className={styles.techTable}>
            <tbody>
              {data.tech.rows.map((row) => (
                <tr key={row.category}>
                  <th scope="row">{row.category}</th>
                  <td>{row.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.tech.footnote && <p className={styles.techFootnote}>{data.tech.footnote}</p>}
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Our approach"
            heading={data.approach.heading ?? "How we deliver"}
            subtext={data.approach.sub}
          />
          <ProcessTimeline steps={data.approach.steps} closingLine={data.approach.closingLine} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Why Techknomatic"
            heading={data.differentiators.heading ?? "Why us"}
            subtext={data.differentiators.sub}
          />
          <div className={styles.gridThree}>
            {data.differentiators.cards.map((d, i) => (
              <Reveal key={d.title}>
                <PillarCard number={String(i + 1).padStart(2, "0")} title={d.title} body={d.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow="Use cases"
            heading={data.useCases.heading ?? "Real shipments"}
            subtext={data.useCases.sub}
          />
          <div className={styles.gridTwo}>
            {data.useCases.cards.map((u) => (
              <Reveal key={u.title}>
                <UseCaseCard
                  title={u.title}
                  subtitle={u.subtitle}
                  crux={u.crux}
                  stack={u.stack}
                  industries={u.industries}
                  outcome={u.outcome}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={data.cta.tagline ? "Let's talk" : undefined}
        headline={data.cta.heading}
        sub={data.cta.sub}
        primary={data.cta.primary}
        secondary={data.cta.secondary}
      />
    </>
  );
}
