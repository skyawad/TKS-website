import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { FloatingCard } from "../components/FloatingCard";
import { Icon } from "../components/Icon";
import { PageCTA } from "../components/PageCTA";
import { PillarCard } from "../components/PillarCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import styles from "./AboutSub.module.css";

const WHY_CHOOSE = [
  { title: "Senior-led from day one", body: "Work alongside certified architects, data scientists, and consultants who ship in production — not just train you on slides." },
  { title: "Real engagements, not bench time", body: "Customer projects across BFSI, government, oil & gas, and manufacturing — exposure to regulated, high-stakes data." },
  { title: "OEM-credentialed pathways", body: "Sponsored certifications across Microsoft, Qlik, ESRI, and AI/LLM stacks — paid for, scheduled for, and supported." },
  { title: "Gulf + global mobility", body: "Engagements span UAE, Oman, KSA, and USA. High performers earn mobility into Gulf-resident roles." },
  { title: "AI-first work, not AI-theatre", body: "Production AI deployments — agents, document AI, conversational analytics — not toy POCs." },
  { title: "Culture that ships", body: "Senior, opinionated, collaborative. No bureaucracy theatre. Quality of delivery is the only review that counts." },
];

const HOW_WE_WORK = [
  { num: "01", title: "Senior delivery, always.", body: "Every engagement led by certified architects with hands-on production experience. Juniors learn by doing alongside seniors." },
  { num: "02", title: "Customer outcomes, measured.", body: "Success is what shipped and what stuck — adoption, KPI movement, audit-readiness — not hours logged." },
  { num: "03", title: "Repeatable methodology.", body: "A 5-step delivery framework that compresses risk and makes every engagement learnable for the next person." },
  { num: "04", title: "Empowered, opinionated teams.", body: "We hire for judgement and give it room. The right call beats the easy call, every time." },
];

const PATHS = [
  { tier: "Freshers", title: "Build the foundation.", body: "Structured 12-month immersion across data engineering, analytics, and AI fundamentals. Real customer exposure from month 3 with senior cover." },
  { tier: "Mid-career", title: "Lead the delivery.", body: "Own customer engagements end-to-end. Architect, build, and ship across BFSI, government, oil & gas, and manufacturing." },
  { tier: "Experienced", title: "Define the practice.", body: "Senior practice and architecture roles. Shape the methodology, mentor the next bench, and own customer outcomes at the portfolio level." },
];

const INVESTMENTS = [
  { num: "01", title: "Sponsored certifications", body: "Microsoft, Qlik, ESRI, and AI/LLM certifications — fully funded, scheduled in your time, supported with study leave." },
  { num: "02", title: "Hands-on mentorship", body: "Pairing with senior architects on real customer work. Code reviews, design reviews, customer-call shadowing." },
  { num: "03", title: "Conference & community", body: "Industry conferences, internal-tech-day participation, and contribution to internal practice guilds." },
  { num: "04", title: "Mobility paths", body: "UAE-resident, Oman-resident, and USA-engagement mobility for high performers." },
];

const ROLES = [
  { title: "Senior Data Engineer — Azure/Databricks", location: "Dubai (UAE-resident)", type: "Full-time" },
  { title: "Power BI / Fabric Architect", location: "Dubai (UAE-resident)", type: "Full-time" },
  { title: "AI / LLM Application Engineer", location: "Pune + occasional Dubai travel", type: "Full-time" },
  { title: "GIS / ArcGIS Implementation Lead", location: "Pune / Dubai", type: "Full-time" },
  { title: "ITSM Analytics Consultant (InsightSM)", location: "Pune / Dubai", type: "Full-time" },
];

const HIRING = [
  { num: "01", phase: "Application", description: "Apply through careers@techknomatic.com with a CV and a one-paragraph note on the work you're proudest of." },
  { num: "02", phase: "Screening call", description: "30-minute conversation with our HR partner — role fit, mobility, expectations." },
  { num: "03", phase: "Technical interview", description: "Discussion with a senior practitioner on the role's core competency. Real problems, your real approach." },
  { num: "04", phase: "Case study", description: "A small, time-boxed assignment representative of the work — followed by a walk-through." },
  { num: "05", phase: "Offer", description: "Outcome-led conversation with leadership and offer issued within 5 working days of the final round." },
];

export function AboutCareers() {
  return (
    <>
      <HeroSection
        density="compact"
        eyebrow="Careers"
        headline={
          <>
            Build a career where <em>data drives</em>
            <br />real-world impact.
          </>
        }
        lead="Senior-led, AI-first, Gulf-grounded. Techknomatic is where engineers, analysts, and consultants ship production data and AI across regulated industries — and grow into the next generation of practice leaders."
        actions={
          <>
            <a href="mailto:careers@techknomatic.com">
              <Button variant="primary">Email careers@</Button>
            </a>
            <Link to="/about">
              <Button variant="link">Meet the team</Button>
            </Link>
          </>
        }
        illustration={
          <>
            <FloatingCard label="Data Engineering" glyph={<Icon name="data-eng" size={14} />} tone="blue" position={{ top: 20, left: 20 }} delayMs={0} />
            <FloatingCard label="Analytics" glyph={<Icon name="analytics" size={14} />} tone="orange" position={{ top: 110, right: 30 }} delayMs={300} />
            <FloatingCard label="AI / LLM" glyph={<Icon name="ai-strategy" size={14} />} tone="purple" position={{ top: 200, left: 40 }} delayMs={600} />
            <FloatingCard label="Geospatial" glyph={<Icon name="geospatial" size={14} />} tone="green" position={{ top: 280, right: 20 }} delayMs={900} />
          </>
        }
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow="Why high performers stay" heading="Six reasons to build your career here." />
          </Reveal>
          <div className={styles.valueGrid}>
            {WHY_CHOOSE.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <article className={styles.valueCard}>
                  <h4>{v.title}</h4>
                  <p>{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow="How we work" heading="Four pillars that shape every engagement." />
          </Reveal>
          <div className={styles.valueGrid}>
            {HOW_WE_WORK.map((p, i) => (
              <Reveal key={p.num} delay={i * 100}>
                <PillarCard number={p.num} title={p.title} body={p.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow="Growth paths" heading="Where each level lands." />
          </Reveal>
          <div className={styles.pathGrid}>
            {PATHS.map((p, i) => (
              <Reveal key={p.tier} delay={i * 100}>
                <article className={styles.pathCard}>
                  <span>{p.tier}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow="We invest in growth" heading="Four ways we back our people." />
          </Reveal>
          <div className={styles.valueGrid}>
            {INVESTMENTS.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <PillarCard number={v.num} title={v.title} body={v.body} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow="Current opportunities" heading="Roles we're hiring for now." subtext="UAE-resident and Pune-based positions across data engineering, analytics, AI, and consulting." />
          </Reveal>
          <div className={styles.roleList}>
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <article className={styles.roleCard}>
                  <div className={styles.roleInfo}>
                    <h3>{r.title}</h3>
                    <p>{r.location} · {r.type}</p>
                  </div>
                  <a href={`mailto:careers@techknomatic.com?subject=${encodeURIComponent(r.title)}`} className={styles.roleMeta}>
                    Apply →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionWash}>
        <div className={styles.inner}>
          <Reveal>
            <SectionHeader eyebrow="Hiring process" heading="From application to offer in ~3 weeks." />
          </Reveal>
          <div className={styles.valueGrid}>
            {HIRING.map((h, i) => (
              <Reveal key={h.num} delay={i * 80}>
                <PillarCard number={h.num} title={h.phase} body={h.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        eyebrow="Ready to apply?"
        headline="Send your CV to careers@techknomatic.com."
        sub="Tell us the work you're proudest of, the role you want next, and the constraints we should know about. We reply within 5 working days."
        primary={{ label: "Email careers@", href: "mailto:careers@techknomatic.com" }}
        secondary={null}
      />
    </>
  );
}
