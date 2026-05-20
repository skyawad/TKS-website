import { Button } from "../components/Button";
import { ContactForm } from "../components/ContactForm";
import { HeroSection } from "../components/HeroSection";
import { HeroContact } from "../components/HeroContact";
import { PageCTA } from "../components/PageCTA";
import { PersonCard } from "../components/PersonCard";
import { Pill } from "../components/Pill";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { CONTACT } from "../data/contact";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import { buildWhatsAppLink } from "../lib/whatsapp";
import styles from "./Contact.module.css";

export function Contact() {
  const t = useT();
  const waLink = buildWhatsAppLink();

  return (
    <div className={styles.page}>
      <HeroSection
        eyebrow={t("contact.hero.eyebrow")}
        headline={
          <>
            {t("contact.hero.headlineA")} <em>{t("contact.hero.headlineB")}</em>{" "}
            {t("contact.hero.headlineC")}
          </>
        }
        lead={t("contact.hero.lead")}
        actions={
          <>
            <a href="#contact-form">
              <Button variant="primary">{t("contact.hero.primary")}</Button>
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="link">{t("contact.hero.secondary")}</Button>
            </a>
          </>
        }
        illustration={<HeroContact />}
      />

      <section className={styles.section} id="contact-form">
        <div className={styles.container}>
          <div className={styles.split}>
            <Reveal>
              <div className={styles.formCol}>
                <ContactForm />
              </div>
            </Reveal>
            <div className={styles.methodsCol}>
              <Reveal delay={120}>
                <ContactMethod
                  label={t("contact.method.phone")}
                  value={CONTACT.phoneDisplay}
                  href={`tel:${CONTACT.phoneTel}`}
                  note={t("contact.method.phoneNote")}
                  accent="info"
                />
              </Reveal>
              <Reveal delay={200}>
                <ContactMethod
                  label={t("contact.method.whatsapp")}
                  value={CONTACT.whatsappDisplay}
                  href={waLink}
                  external
                  accent="whatsapp"
                  note={t("contact.method.whatsappNote")}
                />
              </Reveal>
              <Reveal delay={280}>
                <ContactMethod
                  label={t("contact.method.email")}
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                  note={t("contact.method.emailNote")}
                />
              </Reveal>
              <Reveal delay={360}>
                <div className={styles.hoursCard}>
                  <span className={styles.methodLabel}>{t("contact.method.hours")}</span>
                  <span className={styles.methodValue}>{CONTACT.businessHours}</span>
                  <span className={styles.methodNote}>{t("contact.method.hoursNote")}</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="dubai-office">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader
              eyebrow={t("contact.office.eyebrow")}
              heading={t("contact.office.heading")}
              subtext={t("contact.office.sub")}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className={styles.officeCard}>
              <div className={styles.officeText}>
                <span className={styles.officeLabel}>{t("contact.office.addressLabel")}</span>
                <p className={styles.officeAddress}>{CONTACT.dubaiOffice}</p>
                <p className={styles.officeMissing}>
                  <em>{t("contact.office.placeholder")}</em>
                </p>
              </div>
              <div className={styles.officeMap} aria-label="Map of the Dubai office">
                {CONTACT.mapsEmbedSrc ? (
                  <iframe
                    title="Techknomatic Dubai office map"
                    src={CONTACT.mapsEmbedSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className={styles.mapFrame}
                  />
                ) : (
                  <div className={styles.mapPlaceholder} role="img" aria-label="Map placeholder">
                    <span>{t("contact.office.mapPlaceholder")}</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.section} id="regional">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader
              eyebrow={t("contact.regional.eyebrow")}
              heading={t("contact.regional.heading")}
              subtext={t("contact.regional.sub")}
            />
          </Reveal>
          <div className={styles.peopleGrid}>
            <Reveal delay={0}>
              <PersonCard
                name="Apoorva Gowda"
                role="Sales Manager, UAE"
                region="UAE · Dubai"
                variant="card"
              />
            </Reveal>
            <Reveal delay={120}>
              <PersonCard
                name="Arup Saroji"
                role="Strategy Consultant, UAE"
                region="UAE · Dubai"
                note="Name spelling pending HR confirmation."
                variant="card"
              />
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div className={styles.partnerStrip}>
              <span className={styles.partnerHeading}>{t("contact.regional.partnersLabel")}</span>
              <div className={styles.partnerList}>
                <Pill variant="neutral">Aintisar Technologies · UAE</Pill>
                <Pill variant="neutral">Primer Trading · Oman</Pill>
                <Pill variant="neutral">Inspirational Global · USA</Pill>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt} ${styles.careersBand}`} id="careers-cta">
        <div className={styles.container}>
          <Reveal>
            <div className={styles.careersInline}>
              <div>
                <span className={styles.careersLabel}>{t("contact.careers.label")}</span>
                <p className={styles.careersBody}>
                  {t("contact.careers.body", { email: "" }).split("{email}")[0]}
                  <a className={styles.careersLink} href={`mailto:${CONTACT.careersEmail}`}>
                    {CONTACT.careersEmail}
                  </a>
                  {t("contact.careers.body", { email: "" }).split("{email}")[1] ?? ""}
                </p>
              </div>
              <LocalizedLink className={styles.careersCta} to="/about/careers">
                {t("contact.careers.cta")}
              </LocalizedLink>
            </div>
          </Reveal>
        </div>
      </section>

      <PageCTA
        eyebrow={t("contact.cta.eyebrow")}
        headline={t("contact.cta.headline")}
        sub={t("contact.cta.sub")}
        primary={{ label: t("contact.cta.primary"), href: waLink }}
        secondary={{ label: t("contact.cta.secondary"), href: "#contact-form" }}
      />
    </div>
  );
}

interface ContactMethodProps {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly note?: string;
  readonly external?: boolean;
  readonly accent?: "default" | "whatsapp" | "info";
}

function ContactMethod({
  label,
  value,
  href,
  note,
  external,
  accent = "default",
}: ContactMethodProps) {
  const className = [
    styles.methodCard,
    accent === "whatsapp" ? styles.methodCardWhatsapp : "",
    accent === "info"     ? styles.methodCardInfo     : "",
  ]
    .filter(Boolean)
    .join(" ");
  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};
  return (
    <a className={className} href={href} {...externalProps}>
      <span className={styles.methodLabel}>{label}</span>
      <span className={styles.methodValue}>{value}</span>
      {note && <span className={styles.methodNote}>{note}</span>}
    </a>
  );
}
