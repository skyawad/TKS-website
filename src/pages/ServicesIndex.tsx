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
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./ServicesIndex.module.css";

interface ServiceEntry {
  slug: string;
  titleKey: string;
  descKey: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const SERVICES: ServiceEntry[] = [
  { slug: "business-analytics",   titleKey: "svcIdx.svc.ba.title",  descKey: "svcIdx.svc.ba.desc",  icon: "analytics",   tone: "orange", path: "/services/business-analytics" },
  { slug: "data-engineering",     titleKey: "svcIdx.svc.de.title",  descKey: "svcIdx.svc.de.desc",  icon: "data-eng",    tone: "blue",   path: "/services/data-engineering" },
  { slug: "data-ai-strategy",     titleKey: "svcIdx.svc.ai.title",  descKey: "svcIdx.svc.ai.desc",  icon: "ai-strategy", tone: "purple", path: "/services/data-ai-strategy" },
  { slug: "geospatial-analytics", titleKey: "svcIdx.svc.geo.title", descKey: "svcIdx.svc.geo.desc", icon: "geospatial",  tone: "green",  path: "/services/geospatial-analytics" },
  { slug: "managed-services",     titleKey: "svcIdx.svc.ms.title",  descKey: "svcIdx.svc.ms.desc",  icon: "managed",     tone: "yellow", path: "/services/managed-services" },
];

const PROCESS = [
  { num: "01", phaseKey: "svcIdx.step.1.phase", bodyKey: "svcIdx.step.1.body" },
  { num: "02", phaseKey: "svcIdx.step.2.phase", bodyKey: "svcIdx.step.2.body" },
  { num: "03", phaseKey: "svcIdx.step.3.phase", bodyKey: "svcIdx.step.3.body" },
  { num: "04", phaseKey: "svcIdx.step.4.phase", bodyKey: "svcIdx.step.4.body" },
  { num: "05", phaseKey: "svcIdx.step.5.phase", bodyKey: "svcIdx.step.5.body" },
];

const PILLARS = [
  { num: "01", titleKey: "svcIdx.pillar.1.title", bodyKey: "svcIdx.pillar.1.body" },
  { num: "02", titleKey: "svcIdx.pillar.2.title", bodyKey: "svcIdx.pillar.2.body" },
  { num: "03", titleKey: "svcIdx.pillar.3.title", bodyKey: "svcIdx.pillar.3.body" },
];

export function ServicesIndex() {
  const t = useT();
  return (
    <>
      <HeroSection
        eyebrow={t("svcIdx.hero.eyebrow")}
        headline={
          <>
            {t("svcIdx.hero.headlineA")}<br />
            <em>{t("svcIdx.hero.headlineB")}</em>
          </>
        }
        lead={t("svcIdx.hero.lead")}
        actions={
          <>
            <LocalizedLink to="/contact">
              <Button variant="primary">{t("common.startConversation")}</Button>
            </LocalizedLink>
            <LocalizedLink to="/about/customer-stories">
              <Button variant="link">{t("common.customerStories")}</Button>
            </LocalizedLink>
          </>
        }
        illustration={
          <>
            {SERVICES.map((s, idx) => (
              <FloatingCard
                key={s.slug}
                label={t(s.titleKey)}
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
          <SectionHeader eyebrow={t("svcIdx.section.eyebrow")} heading={t("svcIdx.section.heading")} />
          <div className={styles.grid}>
            {SERVICES.map((s) => (
              <Reveal key={s.slug}>
                <ProductCard
                  title={t(s.titleKey)}
                  description={t(s.descKey)}
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
            eyebrow={t("svcIdx.process.eyebrow")}
            heading={t("svcIdx.process.heading")}
            subtext={t("svcIdx.process.sub")}
          />
          <ProcessTimeline steps={PROCESS.map((p) => ({ num: p.num, phase: t(p.phaseKey), description: t(p.bodyKey) }))} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow={t("svcIdx.pillar.eyebrow")} heading={t("svcIdx.pillar.heading")} />
          <div className={styles.pillarGrid}>
            {PILLARS.map((p) => (
              <PillarCard key={p.num} number={p.num} title={t(p.titleKey)} body={t(p.bodyKey)} />
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={t("svcIdx.cta.eyebrow")}
        headline={t("svcIdx.cta.headline")}
        sub={t("svcIdx.cta.sub")}
        primary={{ label: t("common.startConversation"), to: "/contact" }}
      />
    </>
  );
}
