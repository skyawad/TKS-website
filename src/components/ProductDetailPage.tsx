import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { CapabilityCard } from "./CapabilityCard";
import { FloatingCard } from "./FloatingCard";
import { HeroSection } from "./HeroSection";
import { Icon } from "./Icon";
import { PageCTA } from "./PageCTA";
import { Pill } from "./Pill";
import { ProcessTimeline } from "./ProcessTimeline";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { UseCaseCard } from "./UseCaseCard";
import styles from "./ProductDetailPage.module.css";
import type { ProductDetail } from "../data/product-detail";
import { industryIcon } from "../lib/industryIcon";

interface ProductDetailPageProps {
  data: ProductDetail;
  /** Override hero illustration. Falls back to a generic FloatingCard. */
  illustration?: ReactNode;
}

function renderCtaLink(cta: { label: string; to?: string; href?: string }, variant: "primary" | "link") {
  if (cta.to) {
    return (
      <Link to={cta.to}>
        <Button variant={variant}>{cta.label}</Button>
      </Link>
    );
  }
  return (
    <a href={cta.href} target="_blank" rel="noopener noreferrer">
      <Button variant={variant}>{cta.label}</Button>
    </a>
  );
}

export function ProductDetailPage({ data, illustration }: ProductDetailPageProps) {
  const heroIllustration = illustration ?? (
    <FloatingCard
      label={data.hero.eyebrow}
      sub={data.hero.subhero}
      glyph={<Icon name={data.icon} size={20} />}
      tone={data.tone}
      position={{ top: 80, left: 40 }}
    />
  );
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow={data.hero.eyebrow}
        headline={
          <>
            {data.hero.headline}
            <br />
            <em>{data.hero.subhero}</em>
          </>
        }
        lead={data.hero.lead}
        actions={
          <>
            {renderCtaLink(data.hero.primary, "primary")}
            {data.hero.secondary && renderCtaLink(data.hero.secondary, "link")}
          </>
        }
        trust={data.hero.trustLine ? <span>{data.hero.trustLine}</span> : undefined}
        illustration={heroIllustration}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader
              eyebrow="The problem"
              heading={data.problem.heading}
              subtext={data.problem.lead}
            />
          </Reveal>
          <div className={styles.painGrid}>
            {data.problem.pains.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className={styles.painCard}>
                  <span className={styles.painNum} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <p>{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader
              eyebrow="What it solves"
              heading="Capabilities."
              subtext={data.capabilities.sub}
            />
          </Reveal>
          <div className={styles.capGrid}>
            {data.capabilities.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <CapabilityCard
                  index={String(i + 1).padStart(2, "0")}
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
          <Reveal>
            <SectionHeader
              eyebrow="Industries served"
              heading="Where it ships."
              subtext={data.industries.sub}
              tone="info"
            />
          </Reveal>
          <div className={styles.industryGrid}>
            {data.industries.tiles.map((t, i) => {
              const iconName = industryIcon(t.name);
              return (
                <Reveal key={t.name} delay={i * 50}>
                  <div className={styles.industryTile}>
                    <div className={styles.industryHead}>
                      {iconName ? (
                        <span className={styles.industryIcon} aria-hidden="true">
                          <Icon name={iconName} size={18} />
                        </span>
                      ) : (
                        <span className={styles.industryMonogram} aria-hidden="true">
                          {t.name.trim().charAt(0).toUpperCase()}
                        </span>
                      )}
                      <h4>{t.name}</h4>
                    </div>
                    <p>{t.value}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader
              eyebrow="How it works"
              heading="From signal to outcome."
              subtext={data.architecture.sub}
            />
          </Reveal>
          <ProcessTimeline steps={data.architecture.steps} closingLine={data.architecture.closingLine} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader
              eyebrow="Use cases"
              heading="In production."
              subtext={data.useCases.sub}
              tone="positive"
            />
          </Reveal>
          <div className={styles.useCaseGrid}>
            {data.useCases.cards.map((u, i) => (
              <Reveal key={u.title} delay={i * 70}>
                <UseCaseCard
                  title={u.title}
                  subtitle={u.subtitle}
                  crux={u.crux}
                  outcome={u.outcome}
                />
              </Reveal>
            ))}
          </div>
          {data.cta.tagline && (
            <div className={styles.taglineWrap}>
              <Pill variant="brand">{data.cta.tagline}</Pill>
            </div>
          )}
        </div>
      </section>

      <PageCTA
        eyebrow={data.cta.heading}
        headline={data.cta.heading}
        sub={data.cta.sub}
        primary={data.cta.primary}
        secondary={data.cta.secondary}
      />
    </>
  );
}
