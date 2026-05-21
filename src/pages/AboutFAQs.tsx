import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { FloatingCard } from "../components/FloatingCard";
import { Icon } from "../components/Icon";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./AboutSub.module.css";

const ENGAGEMENT_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const CAREERS_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] as const;

interface FaqItemProps {
  q: string;
  a: string;
}

function FaqItem({ q, a }: FaqItemProps) {
  return (
    <details className={styles.faqItem}>
      <summary>{q}</summary>
      <p>{a}</p>
    </details>
  );
}

export function AboutFAQs() {
  const t = useT();
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow={t("faq.hero.eyebrow")}
        headline={
          <>
            {t("faq.hero.headlineA")} <em>{t("faq.hero.headlineB")}</em>
            <br />{t("faq.hero.headlineC")}
          </>
        }
        lead={t("faq.hero.lead")}
        actions={
          <>
            <LocalizedLink to="/contact">
              <Button variant="primary">{t("faq.hero.askUs")}</Button>
            </LocalizedLink>
            <a href="mailto:careers@techknomatic.com">
              <Button variant="link">{t("faq.hero.careers")}</Button>
            </a>
          </>
        }
        illustration={
          <>
            <FloatingCard label={t("faq.hero.eng.label")} sub={t("faq.hero.eng.sub")} glyph={<Icon name="assistant" size={14} />} tone="orange" position={{ top: 60, left: 30 }} delayMs={0} />
            <FloatingCard label={t("faq.hero.crs.label")} sub={t("faq.hero.crs.sub")} glyph={<Icon name="inclusion" size={14} />} tone="purple" position={{ top: 180, right: 30 }} delayMs={300} />
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow={t("faq.eng.eyebrow")} heading={t("faq.eng.heading")} />
          </Reveal>
          <div className={styles.faqList}>
            {ENGAGEMENT_IDS.map((i) => (
              <Reveal key={`eng-${i}`} delay={(i - 1) * 30}>
                <FaqItem q={t(`faq.eng.${i}.q`)} a={t(`faq.eng.${i}.a`)} />
              </Reveal>
            ))}
          </div>

          <h2 className={styles.faqGroupHead}>{t("faq.crs.heading")}</h2>
          <div className={styles.faqList}>
            {CAREERS_IDS.map((i) => (
              <Reveal key={`crs-${i}`} delay={(i - 1) * 20}>
                <FaqItem q={t(`faq.crs.${i}.q`)} a={t(`faq.crs.${i}.a`)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={t("faq.cta.eyebrow")}
        headline={t("faq.cta.headline")}
        sub={t("faq.cta.sub")}
        primary={{ label: t("faq.cta.primary"), to: "/contact" }}
      />
    </>
  );
}
