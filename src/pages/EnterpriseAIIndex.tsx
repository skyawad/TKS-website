import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import type { IconTone } from "../components/FloatingCard";
import { HeroEnterpriseAI } from "../components/HeroEnterpriseAI";
import { Icon, type IconName } from "../components/Icon";
import { ProductCard } from "../components/ProductCard";
import { SectionHeader } from "../components/SectionHeader";
import { PillarCard } from "../components/PillarCard";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./SectionIndex.module.css";

interface ProductEntry {
  slug: string;
  titleKey: string;
  descKey: string;
  icon: IconName;
  tone: IconTone;
  path: string;
}

const PRODUCTS: ProductEntry[] = [
  { slug: "assist-iq",  titleKey: "eai.assistIq",  descKey: "eaiIdx.p.assist.desc",  icon: "assistant", tone: "orange", path: "/enterprise-ai/assist-iq" },
  { slug: "ticket-iq",  titleKey: "eai.ticketIq",  descKey: "eaiIdx.p.ticket.desc",  icon: "ticket",    tone: "purple", path: "/enterprise-ai/ticket-iq" },
  { slug: "callops-ai", titleKey: "eai.callopsAi", descKey: "eaiIdx.p.callops.desc", icon: "callops",   tone: "blue",   path: "/enterprise-ai/callops-ai" },
  { slug: "cxo-nexus",  titleKey: "eai.cxoNexus",  descKey: "eaiIdx.p.cxo.desc",     icon: "cxo",       tone: "green",  path: "/enterprise-ai/cxo-nexus" },
];

const PILLARS = [
  { num: "01", titleKey: "eaiIdx.pillar.1.title", bodyKey: "eaiIdx.pillar.1.body" },
  { num: "02", titleKey: "eaiIdx.pillar.2.title", bodyKey: "eaiIdx.pillar.2.body" },
  { num: "03", titleKey: "eaiIdx.pillar.3.title", bodyKey: "eaiIdx.pillar.3.body" },
  { num: "04", titleKey: "eaiIdx.pillar.4.title", bodyKey: "eaiIdx.pillar.4.body" },
];

export function EnterpriseAIIndex() {
  const t = useT();
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow={t("eaiIdx.hero.eyebrow")}
        headline={
          <>
            {t("eaiIdx.hero.headlineA")}<br />
            <em>{t("eaiIdx.hero.headlineB")}</em>
          </>
        }
        lead={t("eaiIdx.hero.lead")}
        actions={
          <>
            <LocalizedLink to="/contact?type=demo">
              <Button variant="primary">{t("eaiIdx.hero.primary")}</Button>
            </LocalizedLink>
            <LocalizedLink to="/contact?service=enterprise-ai">
              <Button variant="link">{t("eaiIdx.hero.secondary")}</Button>
            </LocalizedLink>
          </>
        }
        illustration={<HeroEnterpriseAI />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeader eyebrow={t("eaiIdx.section.eyebrow")} heading={t("eaiIdx.section.heading")} />
          <div className={styles.grid4}>
            {PRODUCTS.map((p) => (
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
          <SectionHeader eyebrow={t("eaiIdx.pillar.eyebrow")} heading={t("eaiIdx.pillar.heading")} />
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
        eyebrow={t("eaiIdx.cta.eyebrow")}
        headline={t("eaiIdx.cta.headline")}
        sub={t("eaiIdx.cta.sub")}
        primary={{ label: t("common.bookDemo"), to: "/contact?type=demo" }}
        secondary={{ label: "Chat on WhatsApp", href: "https://wa.me/971000000000" }}
      />
    </>
  );
}
