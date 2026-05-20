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
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./SectionIndex.module.css";

interface PlatformEntry {
  slug: string;
  titleKey: string;
  descKey: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const PLATFORMS: PlatformEntry[] = [
  { slug: "insight-sm",   titleKey: "platforms.insightSm",   descKey: "pfIdx.p.insight.desc",  icon: "managed",     tone: "orange", path: "/platforms/insight-sm" },
  { slug: "datapulse-iq", titleKey: "platforms.datapulseIq", descKey: "pfIdx.p.dpiq.desc",     icon: "data-eng",    tone: "blue",   path: "/platforms/datapulse-iq" },
  { slug: "parse-iq",     titleKey: "platforms.parseIq",     descKey: "pfIdx.p.parse.desc",    icon: "ai-strategy", tone: "purple", path: "/platforms/parse-iq" },
  { slug: "freight-iq",   titleKey: "platforms.freightIq",   descKey: "pfIdx.p.freight.desc",  icon: "analytics",   tone: "green",  path: "/platforms/freight-iq" },
];

const PILLARS = [
  { num: "01", titleKey: "pfIdx.pillar.1.title", bodyKey: "pfIdx.pillar.1.body" },
  { num: "02", titleKey: "pfIdx.pillar.2.title", bodyKey: "pfIdx.pillar.2.body" },
  { num: "03", titleKey: "pfIdx.pillar.3.title", bodyKey: "pfIdx.pillar.3.body" },
];

export function PlatformsIndex() {
  const t = useT();
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow={t("pfIdx.hero.eyebrow")}
        headline={
          <>
            {t("pfIdx.hero.headlineA")}<br />
            {t("pfIdx.hero.headlineB")} <em>{t("pfIdx.hero.headlineC")}</em>
          </>
        }
        lead={t("pfIdx.hero.lead")}
        actions={
          <>
            <LocalizedLink to="/contact?type=demo">
              <Button variant="primary">{t("pfIdx.hero.primary")}</Button>
            </LocalizedLink>
            <LocalizedLink to="/contact?service=platforms">
              <Button variant="link">{t("eaiIdx.hero.secondary")}</Button>
            </LocalizedLink>
          </>
        }
        illustration={<HeroPlatformsHub />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow={t("pfIdx.section.eyebrow")} heading={t("pfIdx.section.heading")} />
          <div className={styles.grid4}>
            {PLATFORMS.map((p) => (
              <Reveal key={p.slug}>
                <ProductCard
                  title={t(p.titleKey)}
                  description={t(p.descKey)}
                  glyph={<Icon name={p.icon} />}
                  tone={p.tone}
                  to={p.path}
                  cta={t("common.learnMore")}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <SectionHeader eyebrow={t("pfIdx.pillar.eyebrow")} heading={t("pfIdx.pillar.heading")} />
          <div className={styles.pillarGrid3}>
            {PILLARS.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <PillarCard number={p.num} title={t(p.titleKey)} body={t(p.bodyKey)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={t("pfIdx.cta.eyebrow")}
        headline={t("pfIdx.cta.headline")}
        sub={t("pfIdx.cta.sub")}
        primary={{ label: t("common.bookDemo"), to: "/contact?type=demo" }}
      />
    </>
  );
}
