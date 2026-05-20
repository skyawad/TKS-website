import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { FloatingCard } from "../components/FloatingCard";
import { Icon } from "../components/Icon";
import { PageCTA } from "../components/PageCTA";
import { Pill } from "../components/Pill";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import styles from "./AboutSub.module.css";

const OEM_ALLIANCES = [
  {
    name: "Qlik",
    badge: "Qlik Partner",
    body: "Authorised partner across Qlik Sense and Qlik Cloud. Production deployments across BFSI, manufacturing, and retail in the GCC.",
    tone: "var(--icon-green)",
  },
  {
    name: "ESRI",
    badge: "ESRI Silver Partner",
    body: "Silver-tier partnership for ArcGIS implementation, geospatial analytics, and location intelligence. Specialist depth in insurance, telecom, and government.",
    tone: "var(--icon-yellow)",
  },
  {
    name: "Microsoft",
    badge: "Microsoft Partner",
    body: "Cross-stack partner — Azure, Power BI, Fabric, and Generative AI (Azure OpenAI). Production data and AI workloads in regulated UAE and GCC estates.",
    tone: "var(--icon-blue)",
  },
];

const GLOBAL_NETWORK = [
  { name: "Primer Oman", region: "Oman", role: "Regional delivery and customer-success partner across Oman analytics and IT-services engagements." },
  { name: "Aintisar UAE", region: "United Arab Emirates", role: "UAE-resident partner for analytics implementation, customer success, and regional delivery." },
  { name: "Inspirational Global", region: "United States", role: "USA partner for North-America-facing analytics, data engineering, and AI delivery." },
];

export function AboutPartnerships() {
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow="Partnerships"
        headline={
          <>
            Collaborative growth — <em>the partner network</em>
            <br />behind our delivery.
          </>
        }
        lead="OEM partnerships with Qlik, ESRI, and Microsoft. Regional partners in Oman, the UAE, and the USA. Together, the network we deliver through."
        actions={
          <>
            <Link to="/contact">
              <Button variant="primary">Start a conversation</Button>
            </Link>
            <Link to="/about/customer-stories">
              <Button variant="link">See customer stories</Button>
            </Link>
          </>
        }
        illustration={
          <>
            <FloatingCard
              label="Qlik"
              sub="Partner"
              glyph={<Icon name="analytics" size={14} />}
              tone="green"
              position={{ top: 30, left: 20 }}
              delayMs={0}
            />
            <FloatingCard
              label="ESRI"
              sub="Silver Partner"
              glyph={<Icon name="geospatial" size={14} />}
              tone="yellow"
              position={{ top: 120, right: 30 }}
              delayMs={300}
            />
            <FloatingCard
              label="Microsoft"
              sub="Partner"
              glyph={<Icon name="ai-strategy" size={14} />}
              tone="blue"
              position={{ top: 230, left: 60 }}
              delayMs={600}
            />
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow="OEM alliances" heading="The technology partners we deliver on." />
          </Reveal>
          <div className={styles.cardGrid3}>
            {OEM_ALLIANCES.map((oem, i) => (
              <Reveal key={oem.name} delay={i * 120}>
                <article className={styles.partnerCard}>
                  <div className={styles.partnerHead}>
                    <span className={styles.partnerDot} style={{ background: oem.tone }} />
                    <span className={styles.partnerName}>{oem.name}</span>
                  </div>
                  <Pill variant="brand">{oem.badge}</Pill>
                  <p className={styles.partnerBody}>{oem.body}</p>
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
              eyebrow="Global network"
              heading="Regional partners that extend our reach."
              subtext="Cleared delivery relationships across Oman, the UAE, and the USA — for engagement continuity, on-the-ground presence, and customer-success depth."
            />
          </Reveal>
          <div className={styles.cardGrid3}>
            {GLOBAL_NETWORK.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <article className={styles.regionCard}>
                  <span className={styles.regionTag}>{p.region}</span>
                  <h3 className={styles.regionName}>{p.name}</h3>
                  <p className={styles.regionBody}>{p.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Talk to the network"
        headline="A partner stack that travels with you."
        sub="Wherever your engagement runs — Dubai, Muscat, Riyadh, or Houston — there is a Techknomatic partner on the ground."
        primary={{ label: "Start a conversation", to: "/contact" }}
      />
    </>
  );
}
