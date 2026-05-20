import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { HeroHome } from "../components/HeroHome";
import { type IconTone } from "../components/FloatingCard";
import { Icon, type IconName } from "../components/Icon";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { PillarCard } from "../components/PillarCard";
import { CaseStudyTeaser } from "../components/CaseStudyTeaser";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./Home.module.css";

interface ProductEntry {
  slug: string;
  titleKey: string;
  descKey: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const SERVICES: ProductEntry[] = [
  { slug: "business-analytics", titleKey: "home.svc.ba.title",  descKey: "home.svc.ba.desc",  icon: "analytics",   tone: "orange", path: "/services/business-analytics" },
  { slug: "data-engineering",   titleKey: "home.svc.de.title",  descKey: "home.svc.de.desc",  icon: "data-eng",    tone: "blue",   path: "/services/data-engineering" },
  { slug: "data-ai-strategy",   titleKey: "home.svc.ai.title",  descKey: "home.svc.ai.desc",  icon: "ai-strategy", tone: "purple", path: "/services/data-ai-strategy" },
  { slug: "geospatial-analytics", titleKey: "home.svc.geo.title", descKey: "home.svc.geo.desc", icon: "geospatial", tone: "green",  path: "/services/geospatial-analytics" },
  { slug: "managed-services",   titleKey: "home.svc.ms.title",  descKey: "home.svc.ms.desc",  icon: "managed",     tone: "yellow", path: "/services/managed-services" },
];

const AI_PRODUCTS: ProductEntry[] = [
  { slug: "assist-iq",  titleKey: "home.eai.assist.title",  descKey: "home.eai.assist.desc",  icon: "assistant", tone: "orange", path: "/enterprise-ai/assist-iq" },
  { slug: "ticket-iq",  titleKey: "home.eai.ticket.title",  descKey: "home.eai.ticket.desc",  icon: "ticket",    tone: "purple", path: "/enterprise-ai/ticket-iq" },
  { slug: "callops-ai", titleKey: "home.eai.call.title",    descKey: "home.eai.call.desc",    icon: "callops",   tone: "blue",   path: "/enterprise-ai/callops-ai" },
  { slug: "cxo-nexus",  titleKey: "home.eai.cxo.title",     descKey: "home.eai.cxo.desc",     icon: "cxo",       tone: "green",  path: "/enterprise-ai/cxo-nexus" },
];

const INDUSTRIES: ProductEntry[] = [
  { slug: "insurance",        titleKey: "home.ind.ins.title", descKey: "home.ind.ins.desc", icon: "insurance",     tone: "blue",   path: "/industries/insurance" },
  { slug: "oil-and-gas",      titleKey: "home.ind.og.title",  descKey: "home.ind.og.desc",  icon: "oil-gas",       tone: "orange", path: "/industries/oil-and-gas" },
  { slug: "tech-it-services", titleKey: "home.ind.it.title",  descKey: "home.ind.it.desc",  icon: "tech-it",       tone: "purple", path: "/industries/tech-it-services" },
  { slug: "manufacturing",    titleKey: "home.ind.mfg.title", descKey: "home.ind.mfg.desc", icon: "manufacturing", tone: "green",  path: "/industries/manufacturing" },
];

const PILLARS = [
  { number: "01", titleKey: "home.why.1.title", bodyKey: "home.why.1.body" },
  { number: "02", titleKey: "home.why.2.title", bodyKey: "home.why.2.body" },
  { number: "03", titleKey: "home.why.3.title", bodyKey: "home.why.3.body" },
  { number: "04", titleKey: "home.why.4.title", bodyKey: "home.why.4.body" },
];

export function Home() {
  const t = useT();

  return (
    <>
      <HeroSection
        eyebrow={t("home.hero.eyebrow")}
        headline={
          <>
            {t("home.hero.headlineA")}
            <br />
            {t("home.hero.headlineB")} <em>{t("home.hero.headlineC")}</em>
          </>
        }
        lead={t("home.hero.lead")}
        actions={
          <>
            <LocalizedLink to="/contact">
              <Button variant="primary">{t("home.hero.primary")}</Button>
            </LocalizedLink>
            <LocalizedLink to="/services">
              <Button variant="link">{t("home.hero.secondary")}</Button>
            </LocalizedLink>
          </>
        }
        trust={<span>{t("home.hero.trust")}</span>}
        illustration={<HeroHome />}
      />

      <section className={styles.trustStrip}>
        <div className={styles.trustInner}>
          <span className={styles.trustLabel}>{t("home.trust.label")}</span>
          <span className={styles.trustItem}>{t("home.trust.banks")}</span>
          <span className={styles.trustItem}>{t("home.trust.insurers")}</span>
          <span className={styles.trustItem}>{t("home.trust.oilGas")}</span>
          <span className={styles.trustItem}>{t("home.trust.government")}</span>
          <span className={styles.trustItem}>{t("home.trust.manufacturers")}</span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow={t("home.practice.eyebrow")}
            heading={t("home.practice.heading")}
            subtext={t("home.practice.sub")}
          />
          <div className={styles.gridFive}>
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
            eyebrow={t("home.eai.eyebrow")}
            heading={t("home.eai.heading")}
            subtext={t("home.eai.sub")}
          />
          <div className={styles.gridFour}>
            {AI_PRODUCTS.map((p) => (
              <Reveal key={p.slug}>
                <ProductCard
                  title={t(p.titleKey)}
                  description={t(p.descKey)}
                  glyph={<Icon name={p.icon} />}
                  tone={p.tone}
                  to={p.path}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow={t("home.ind.eyebrow")} heading={t("home.ind.heading")} />
          <div className={styles.gridFour}>
            {INDUSTRIES.map((i) => (
              <Reveal key={i.slug}>
                <ProductCard
                  title={t(i.titleKey)}
                  description={t(i.descKey)}
                  glyph={<Icon name={i.icon} />}
                  tone={i.tone}
                  to={i.path}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader
            eyebrow={t("home.why.eyebrow")}
            heading={t("home.why.heading")}
          />
          <div className={styles.gridFour}>
            {PILLARS.map((p) => (
              <Reveal key={p.number}>
                <PillarCard number={p.number} title={t(p.titleKey)} body={t(p.bodyKey)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow={t("home.cs.eyebrow")} heading={t("home.cs.heading")} />
          <div className={styles.gridTwo}>
            <Reveal>
              <CaseStudyTeaser
                industry="BFSI"
                region="DIFC, UAE"
                title={t("home.cs.1.title")}
                summary={t("home.cs.1.summary")}
                outcome={t("home.cs.1.outcome")}
                href="/about/customer-stories"
              />
            </Reveal>
            <Reveal>
              <CaseStudyTeaser
                industry="Geospatial"
                region="Saudi Arabia"
                title={t("home.cs.2.title")}
                summary={t("home.cs.2.summary")}
                outcome={t("home.cs.2.outcome")}
                href="/about/customer-stories"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={t("home.cta.eyebrow")}
        headline={
          <>
            {t("home.cta.headlineA")}
            <br />
            {t("home.cta.headlineB")}
          </>
        }
        sub={t("home.cta.sub")}
        primary={{ label: t("home.cta.primary"), to: "/contact" }}
      />
    </>
  );
}
