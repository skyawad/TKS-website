import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { HeroCareers } from "../components/HeroCareers";
import { PageCTA } from "../components/PageCTA";
import { PillarCard } from "../components/PillarCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./AboutSub.module.css";

const WHY_CHOOSE = [1, 2, 3, 4, 5, 6] as const;
const HOW_WE_WORK = [
  { num: "01", k: 1 },
  { num: "02", k: 2 },
  { num: "03", k: 3 },
  { num: "04", k: 4 },
] as const;
const PATHS = ["fresh", "mid", "exp"] as const;
const INVESTMENTS = [
  { num: "01", k: 1 },
  { num: "02", k: 2 },
  { num: "03", k: 3 },
  { num: "04", k: 4 },
] as const;
const ROLES = [1, 2, 3, 4, 5] as const;
const HIRING = [
  { num: "01", k: 1 },
  { num: "02", k: 2 },
  { num: "03", k: 3 },
  { num: "04", k: 4 },
  { num: "05", k: 5 },
] as const;

export function AboutCareers() {
  const t = useT();
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow={t("crs.hero.eyebrow")}
        headline={
          <>
            {t("crs.hero.headlineA")} <em>{t("crs.hero.headlineB")}</em>
            <br />{t("crs.hero.headlineC")}
          </>
        }
        lead={t("crs.hero.lead")}
        actions={
          <>
            <a href="mailto:careers@techknomatic.com">
              <Button variant="primary">{t("crs.hero.email")}</Button>
            </a>
            <LocalizedLink to="/about">
              <Button variant="link">{t("crs.hero.meet")}</Button>
            </LocalizedLink>
          </>
        }
        illustration={<HeroCareers />}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow={t("crs.why.eyebrow")} heading={t("crs.why.heading")} />
          </Reveal>
          <div className={styles.valueGrid}>
            {WHY_CHOOSE.map((i) => (
              <Reveal key={i} delay={(i - 1) * 80}>
                <article className={styles.valueCard}>
                  <h4>{t(`crs.why.${i}.title`)}</h4>
                  <p>{t(`crs.why.${i}.body`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow={t("crs.how.eyebrow")} heading={t("crs.how.heading")} />
          </Reveal>
          <div className={styles.valueGrid}>
            {HOW_WE_WORK.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <PillarCard number={p.num} title={t(`crs.how.${p.k}.title`)} body={t(`crs.how.${p.k}.body`)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow={t("crs.paths.eyebrow")} heading={t("crs.paths.heading")} />
          </Reveal>
          <div className={styles.pathGrid}>
            {PATHS.map((p, i) => (
              <Reveal key={p} delay={i * 100}>
                <article className={styles.pathCard}>
                  <span>{t(`crs.paths.${p}.tier`)}</span>
                  <h3>{t(`crs.paths.${p}.title`)}</h3>
                  <p>{t(`crs.paths.${p}.body`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow={t("crs.invest.eyebrow")} heading={t("crs.invest.heading")} />
          </Reveal>
          <div className={styles.valueGrid}>
            {INVESTMENTS.map((v, i) => (
              <Reveal key={v.num} delay={i * 80}>
                <PillarCard number={v.num} title={t(`crs.invest.${v.k}.title`)} body={t(`crs.invest.${v.k}.body`)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow={t("crs.roles.eyebrow")} heading={t("crs.roles.heading")} subtext={t("crs.roles.sub")} />
          </Reveal>
          <div className={styles.roleList}>
            {ROLES.map((r, i) => {
              const title = t(`crs.roles.${r}.title`);
              return (
                <Reveal key={r} delay={i * 60}>
                  <article className={styles.roleCard}>
                    <div className={styles.roleInfo}>
                      <h3>{title}</h3>
                      <p>{t(`crs.roles.${r}.loc`)} · {t("crs.roles.full")}</p>
                    </div>
                    <a href={`mailto:careers@techknomatic.com?subject=${encodeURIComponent(title)}`} className={styles.roleMeta}>
                      {t("crs.roles.apply")} →
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow={t("crs.hiring.eyebrow")} heading={t("crs.hiring.heading")} />
          </Reveal>
          <div className={styles.valueGrid}>
            {HIRING.map((h, i) => (
              <Reveal key={h.num} delay={i * 80}>
                <PillarCard number={h.num} title={t(`crs.hiring.${h.k}.phase`)} body={t(`crs.hiring.${h.k}.body`)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow={t("crs.cta.eyebrow")}
        headline={t("crs.cta.headline")}
        sub={t("crs.cta.sub")}
        primary={{ label: t("crs.cta.primary"), href: "mailto:careers@techknomatic.com" }}
        secondary={null}
      />
    </>
  );
}
