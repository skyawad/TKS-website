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
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./SectionIndex.module.css";

interface IndustryEntry {
  slug: string;
  titleKey: string;
  valueKey: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const INDUSTRIES: IndustryEntry[] = [
  { slug: "insurance",        titleKey: "indIdx.i.ins.title", valueKey: "indIdx.i.ins.value", icon: "insurance",     tone: "blue",   path: "/industries/insurance" },
  { slug: "oil-and-gas",      titleKey: "indIdx.i.og.title",  valueKey: "indIdx.i.og.value",  icon: "oil-gas",       tone: "orange", path: "/industries/oil-and-gas" },
  { slug: "tech-it-services", titleKey: "indIdx.i.it.title",  valueKey: "indIdx.i.it.value",  icon: "tech-it",       tone: "purple", path: "/industries/tech-it-services" },
  { slug: "manufacturing",    titleKey: "indIdx.i.mfg.title", valueKey: "indIdx.i.mfg.value", icon: "manufacturing", tone: "green",  path: "/industries/manufacturing" },
];

const PILLARS = [
  { num: "01", titleKey: "indIdx.pillar.1.title", bodyKey: "indIdx.pillar.1.body" },
  { num: "02", titleKey: "indIdx.pillar.2.title", bodyKey: "indIdx.pillar.2.body" },
  { num: "03", titleKey: "indIdx.pillar.3.title", bodyKey: "indIdx.pillar.3.body" },
  { num: "04", titleKey: "indIdx.pillar.4.title", bodyKey: "indIdx.pillar.4.body" },
];

export function IndustriesIndex() {
  const t = useT();
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow={t("indIdx.hero.eyebrow")}
        headline={
          <>
            {t("indIdx.hero.headlineA")}<br />
            <em>{t("indIdx.hero.headlineB")}</em> {t("indIdx.hero.headlineC")}
          </>
        }
        lead={t("indIdx.hero.lead")}
        actions={
          <>
            <LocalizedLink to="/contact">
              <Button variant="primary">{t("indIdx.hero.primary")}</Button>
            </LocalizedLink>
            <LocalizedLink to="/about/customer-stories">
              <Button variant="link">{t("indIdx.hero.secondary")}</Button>
            </LocalizedLink>
          </>
        }
        illustration={<HeroIndustriesMap />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow={t("indIdx.section.eyebrow")} heading={t("indIdx.section.heading")} />
          <div className={styles.grid4}>
            {INDUSTRIES.map((i) => (
              <Reveal key={i.slug}>
                <ProductCard
                  title={t(i.titleKey)}
                  description={t(i.valueKey)}
                  glyph={<Icon name={i.icon} />}
                  tone={i.tone}
                  to={i.path}
                  cta={t("indIdx.svc.explore")}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader eyebrow={t("indIdx.pillar.eyebrow")} heading={t("indIdx.pillar.heading")} />
          <div className={styles.pillarGrid4}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <PillarCard number={p.num} title={t(p.titleKey)} body={t(p.bodyKey)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={t("indIdx.cta.eyebrow")}
        headline={t("indIdx.cta.headline")}
        sub={t("indIdx.cta.sub")}
        primary={{ label: t("indIdx.cta.primary"), to: "/contact" }}
      />
    </>
  );
}
