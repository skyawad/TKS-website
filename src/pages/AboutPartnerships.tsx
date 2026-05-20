import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { HeroPartnerships } from "../components/HeroPartnerships";
import { PageCTA } from "../components/PageCTA";
import { Pill } from "../components/Pill";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./AboutSub.module.css";

interface OemAlliance {
  name: string;
  badgeKey: string;
  bodyKey: string;
  tone: string;
}

const OEM_ALLIANCES: OemAlliance[] = [
  { name: "Qlik",       badgeKey: "partner.oem.qlik.badge", bodyKey: "partner.oem.qlik.body", tone: "var(--icon-green)" },
  { name: "ESRI",       badgeKey: "partner.oem.esri.badge", bodyKey: "partner.oem.esri.body", tone: "var(--icon-yellow)" },
  { name: "Microsoft",  badgeKey: "partner.oem.ms.badge",   bodyKey: "partner.oem.ms.body",   tone: "var(--icon-blue)" },
];

const GLOBAL_NETWORK = [
  { name: "Primer Oman",         region: "Oman",                 roleKey: "partner.network.primer.role" },
  { name: "Aintisar UAE",        region: "United Arab Emirates", roleKey: "partner.network.aintisar.role" },
  { name: "Inspirational Global", region: "United States",       roleKey: "partner.network.inspirational.role" },
];

export function AboutPartnerships() {
  const t = useT();
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow={t("partner.hero.eyebrow")}
        headline={
          <>
            {t("partner.hero.headlineA")} <em>{t("partner.hero.headlineB")}</em>
            <br />{t("partner.hero.headlineC")}
          </>
        }
        lead={t("partner.hero.lead")}
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
        illustration={<HeroPartnerships />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow={t("partner.oem.eyebrow")} heading={t("partner.oem.heading")} />
          </Reveal>
          <div className={styles.cardGrid3}>
            {OEM_ALLIANCES.map((oem, i) => (
              <Reveal key={oem.name} delay={i * 120}>
                <article className={styles.partnerCard}>
                  <div className={styles.partnerHead}>
                    <span className={styles.partnerDot} style={{ background: oem.tone }} />
                    <span className={styles.partnerName}>{oem.name}</span>
                  </div>
                  <Pill variant="brand">{t(oem.badgeKey)}</Pill>
                  <p className={styles.partnerBody}>{t(oem.bodyKey)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader
              eyebrow={t("partner.network.eyebrow")}
              heading={t("partner.network.heading")}
              subtext={t("partner.network.sub")}
            />
          </Reveal>
          <div className={styles.cardGrid3}>
            {GLOBAL_NETWORK.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className={styles.regionCard}>
                  <span className={styles.regionTag}>{p.region}</span>
                  <h3 className={styles.regionName}>{p.name}</h3>
                  <p className={styles.regionBody}>{t(p.roleKey)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={t("partner.cta.eyebrow")}
        headline={t("partner.cta.headline")}
        sub={t("partner.cta.sub")}
        primary={{ label: t("common.startConversation"), to: "/contact" }}
      />
    </>
  );
}
