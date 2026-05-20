import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { HeroAbout } from "../components/HeroAbout";
import { PageCTA } from "../components/PageCTA";
import { PersonCard } from "../components/PersonCard";
import { PillarCard } from "../components/PillarCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { ValueTile } from "../components/ValueTile";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./AboutCompany.module.css";

const UAE_LEADERSHIP = [
  { name: "Apoorva Gowda", role: "Sales Manager, UAE", region: "UAE" },
  { name: "Arup Saroji",   role: "Strategy Consultant, UAE", region: "UAE", note: "Name spelling pending HR confirmation." },
] as const;

type LeaderTone = "orange" | "blue" | "purple" | "green" | "yellow" | "ink";

const GLOBAL_LEADERSHIP: ReadonlyArray<{ readonly name: string; readonly role: string; readonly tone: LeaderTone }> = [
  { name: "Rahul Madke",         role: "Founder & CEO",                 tone: "orange" },
  { name: "Prakash Pawar",       role: "Co-Founder & COO",              tone: "purple" },
  { name: "Sunny Tatiya",        role: "CTO",                           tone: "blue" },
  { name: "Gopinath Sambandam",  role: "Product Delivery Head, Global", tone: "green" },
  { name: "Pranita Singh",       role: "AVP – HR, India",               tone: "yellow" },
  { name: "Vasundhara Gaikwad",  role: "Marketing & Growth",            tone: "orange" },
  { name: "Hemant Jadhav",       role: "AVP – Sales, India",            tone: "ink" },
];

export function AboutCompany() {
  const t = useT();
  return (
    <div className={styles.page}>
      <HeroSection
        eyebrow={t("aboutCo.hero.eyebrow")}
        headline={
          <>
            {t("aboutCo.hero.headlineA")} <em>{t("aboutCo.hero.headlineB")}</em>
            <br />
            {t("aboutCo.hero.headlineC")}
          </>
        }
        lead={t("aboutCo.hero.lead")}
        actions={
          <>
            <LocalizedLink to="/contact">
              <Button variant="primary">{t("aboutCo.hero.primary")}</Button>
            </LocalizedLink>
            <LocalizedLink to="/services">
              <Button variant="link">{t("aboutCo.hero.secondary")}</Button>
            </LocalizedLink>
          </>
        }
        trust={<span>{t("aboutCo.hero.trust")}</span>}
        illustration={<HeroAbout />}
      />

      <section className={styles.section} id="different">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader eyebrow={t("aboutCo.diff.eyebrow")} heading={t("aboutCo.diff.heading")} />
          </Reveal>
          <div className={styles.diffGrid}>
            <Reveal delay={0}>
              <PillarCard number="01" title={t("aboutCo.diff.1.title")} body={t("aboutCo.diff.1.body")} />
            </Reveal>
            <Reveal delay={120}>
              <PillarCard number="02" title={t("aboutCo.diff.2.title")} body={t("aboutCo.diff.2.body")} />
            </Reveal>
            <Reveal delay={240}>
              <PillarCard number="03" title={t("aboutCo.diff.3.title")} body={t("aboutCo.diff.3.body")} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="values">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader
              eyebrow={t("aboutCo.values.eyebrow")}
              heading={t("aboutCo.values.heading")}
              subtext={t("aboutCo.values.sub")}
            />
          </Reveal>
          <div className={styles.values}>
            <Reveal delay={0}><ValueTile icon="integrity"  tone="orange" label={t("aboutCo.value.integrity.label")}  body={t("aboutCo.value.integrity.body")} /></Reveal>
            <Reveal delay={120}><ValueTile icon="ethics"     tone="purple" label={t("aboutCo.value.ethics.label")}     body={t("aboutCo.value.ethics.body")} /></Reveal>
            <Reveal delay={240}><ValueTile icon="inclusion"  tone="blue"   label={t("aboutCo.value.inclusion.label")}  body={t("aboutCo.value.inclusion.body")} /></Reveal>
            <Reveal delay={360}><ValueTile icon="innovation" tone="green"  label={t("aboutCo.value.innovation.label")} body={t("aboutCo.value.innovation.body")} /></Reveal>
          </div>
        </div>
      </section>

      <section className={styles.section} id="life">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader eyebrow={t("aboutCo.life.eyebrow")} heading={t("aboutCo.life.heading")} subtext={t("aboutCo.life.sub")} />
          </Reveal>
          <Reveal delay={120}>
            <div className={styles.carouselPlaceholder} role="img" aria-label="Life-at-Techknomatic carousel placeholder">
              <span className={styles.carouselNote}>{t("aboutCo.life.placeholder")}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="leadership">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader eyebrow={t("aboutCo.lead.eyebrow")} heading={t("aboutCo.lead.heading")} subtext={t("aboutCo.lead.sub")} />
          </Reveal>

          <Reveal delay={120}>
            <span className={styles.subheading}>{t("aboutCo.lead.uae")}</span>
          </Reveal>
          <div className={styles.uaeGrid}>
            {UAE_LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <PersonCard variant="card" name={p.name} role={p.role} region={p.region} note={(p as { note?: string }).note} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <span className={`${styles.subheading} ${styles.subheadingSpaced}`}>{t("aboutCo.lead.global")}</span>
          </Reveal>
          <div className={styles.globalGrid}>
            {GLOBAL_LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <PersonCard flippable tone={p.tone} name={p.name} role={p.role} region="Founders & global" />
              </Reveal>
            ))}
          </div>

          <p className={styles.headshotsNote}>
            <em>{t("aboutCo.lead.note")}</em>
          </p>
        </div>
      </section>

      <PageCTA
        eyebrow={t("aboutCo.cta.eyebrow")}
        headline={t("aboutCo.cta.headline")}
        sub={t("aboutCo.cta.sub")}
        primary={{ label: t("aboutCo.cta.primary"), to: "/contact" }}
        secondary={{ label: t("aboutCo.cta.secondary"), to: "/services" }}
      />
    </div>
  );
}
