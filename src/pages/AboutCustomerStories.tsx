import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { HeroCustomerStories } from "../components/HeroCustomerStories";
import { PageCTA } from "../components/PageCTA";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./AboutSub.module.css";

interface StoryConfig {
  id: number;
  metrics: { val: string; labelKey: string }[];
}

const STORIES: StoryConfig[] = [
  { id: 1, metrics: [{ val: "22%",   labelKey: "stories.1.m1" }, { val: "60%",  labelKey: "stories.1.m2" }, { val: "0",     labelKey: "stories.1.m3" }] },
  { id: 2, metrics: [{ val: "<60s",  labelKey: "stories.2.m1" }, { val: "4",    labelKey: "stories.2.m2" }, { val: "100%",  labelKey: "stories.2.m3" }] },
  { id: 3, metrics: [{ val: "14",    labelKey: "stories.3.m1" }, { val: "20+",  labelKey: "stories.3.m2" }, { val: "1",     labelKey: "stories.3.m3" }] },
  { id: 4, metrics: [{ val: "60%+",  labelKey: "stories.4.m1" }, { val: "<1min", labelKey: "stories.4.m2" }, { val: "0",    labelKey: "stories.4.m3" }] },
  { id: 5, metrics: [{ val: "3",     labelKey: "stories.5.m1" }, { val: "1",    labelKey: "stories.5.m2" }, { val: "+15%",  labelKey: "stories.5.m3" }] },
];

export function AboutCustomerStories() {
  const t = useT();
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow={t("stories.hero.eyebrow")}
        headline={
          <>
            {t("stories.hero.headlineA")} <em>{t("stories.hero.headlineB")}</em>
          </>
        }
        lead={t("stories.hero.lead")}
        actions={
          <>
            <LocalizedLink to="/contact">
              <Button variant="primary">{t("common.startConversation")}</Button>
            </LocalizedLink>
            <LocalizedLink to="/services">
              <Button variant="link">{t("common.exploreServices")}</Button>
            </LocalizedLink>
          </>
        }
        illustration={<HeroCustomerStories />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader
              eyebrow={t("stories.section.eyebrow")}
              heading={t("stories.section.heading")}
              subtext={t("stories.section.sub")}
            />
          </Reveal>
          <div className={styles.cardGrid2}>
            {STORIES.map((s, i) => (
              <Reveal key={s.id} delay={i * 100}>
                <article className={styles.storyCard}>
                  <span className={styles.storyTag}>{t(`stories.${s.id}.industry`)}</span>
                  <h3 className={styles.storyHeadline}>{t(`stories.${s.id}.headline`)}</h3>
                  <p className={styles.storyBody}>{t(`stories.${s.id}.body`)}</p>
                  <div className={styles.storyMetrics}>
                    {s.metrics.map((m) => (
                      <div className={styles.storyMetric} key={m.labelKey}>
                        <span className={styles.storyMetricVal}>{m.val}</span>
                        <span className={styles.storyMetricLabel}>{t(m.labelKey)}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={t("stories.cta.eyebrow")}
        headline={t("stories.cta.headline")}
        sub={t("stories.cta.sub")}
        primary={{ label: t("stories.cta.primary"), to: "/contact" }}
      />
    </>
  );
}
