import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import { HeroAbout } from "../components/HeroAbout";
import { PageCTA } from "../components/PageCTA";
import { PersonCard } from "../components/PersonCard";
import { PillarCard } from "../components/PillarCard";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { ValueTile } from "../components/ValueTile";
import styles from "./AboutCompany.module.css";

const UAE_LEADERSHIP = [
  { name: "Apoorva Gowda", role: "Sales Manager, UAE", region: "UAE" },
  {
    name: "Arup Saroji",
    role: "Strategy Consultant, UAE",
    region: "UAE",
    note: "Name spelling pending HR confirmation.",
  },
] as const;

type LeaderTone = "orange" | "blue" | "purple" | "green" | "yellow" | "ink";

const GLOBAL_LEADERSHIP: ReadonlyArray<{
  readonly name: string;
  readonly role: string;
  readonly tone: LeaderTone;
}> = [
  { name: "Rahul Madke",         role: "Founder & CEO",                 tone: "orange" },
  { name: "Prakash Pawar",       role: "Co-Founder & COO",              tone: "purple" },
  { name: "Sunny Tatiya",        role: "CTO",                           tone: "blue" },
  { name: "Gopinath Sambandam",  role: "Product Delivery Head, Global", tone: "green" },
  { name: "Pranita Singh",       role: "AVP – HR, India",               tone: "yellow" },
  { name: "Vasundhara Gaikwad",  role: "Marketing & Growth",            tone: "orange" },
  { name: "Hemant Jadhav",       role: "AVP – Sales, India",            tone: "ink" },
];

export function AboutCompany() {
  return (
    <div className={styles.page}>
      <HeroSection
        eyebrow="About Techknomatic"
        headline={
          <>
            A team with <em>knowledge,</em>
            <br />
            experience, and Gulf depth.
          </>
        }
        lead="We are a trusted technology and implementation partner for analytics, AI, and data engineering — helping leaders turn complexity into clarity, in the UAE, Saudi Arabia, Oman, and the wider GCC."
        actions={
          <>
            <Link to="/contact">
              <Button variant="primary">Let's build together</Button>
            </Link>
            <Link to="/services">
              <Button variant="link">Explore our solutions</Button>
            </Link>
          </>
        }
        trust={<span>Trusted by enterprises across the UAE, Oman, and the wider GCC — for analytics, data engineering, and applied AI that actually ships.</span>}
        illustration={<HeroAbout />}
      />

      <section className={styles.section} id="different">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader
              eyebrow="What makes us different"
              heading="Senior delivery. Repeatable methodology. Short turnaround."
            />
          </Reveal>
          <div className={styles.diffGrid}>
            <Reveal delay={0}>
              <PillarCard number="01" title="Experienced Team" body="Senior consultants with hands-on experience delivering end-to-end data solutions. We turn data into insights in the minimum possible time — at a depth that staff-augmentation vendors cannot match." />
            </Reveal>
            <Reveal delay={120}>
              <PillarCard number="02" title="Proven Methodology" body="A systematic, repeatable approach with well-defined processes. Dashboards, pipelines, and AI workflows that you can change, audit, and govern long after we hand them over." />
            </Reveal>
            <Reveal delay={240}>
              <PillarCard number="03" title="Less Turnaround Time" body="In a dynamic analytics world, we deliver in the shortest possible cycle without sacrificing trust — so your leadership can make informed decisions any time, anywhere." />
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="values">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader
              eyebrow="Our culture & values"
              heading="We build a culture that empowers self-driven, creative, and independent people."
              subtext="Diverse and equitable organisation. The four values guide every engagement."
            />
          </Reveal>
          <div className={styles.values}>
            <Reveal delay={0}>
              <ValueTile
                icon="integrity"
                tone="orange"
                label="Integrity"
                body="We do what we say we will do."
              />
            </Reveal>
            <Reveal delay={120}>
              <ValueTile
                icon="ethics"
                tone="purple"
                label="Ethics"
                body="We choose the right call over the easy call."
              />
            </Reveal>
            <Reveal delay={240}>
              <ValueTile
                icon="inclusion"
                tone="blue"
                label="Inclusion"
                body="Diverse teams, diverse perspectives, better answers."
              />
            </Reveal>
            <Reveal delay={360}>
              <ValueTile
                icon="innovation"
                tone="green"
                label="Innovation"
                body="We keep learning, shipping, and improving."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.section} id="life">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader
              eyebrow="Life at Techknomatic"
              heading="How we work, day to day."
              subtext="A carousel of cleared photos will live here. Manual navigation only — no auto-play, per design rules."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className={styles.carouselPlaceholder} role="img" aria-label="Life-at-Techknomatic carousel placeholder">
              <span className={styles.carouselNote}>
                Cleared culture photos pending sign-off. 14+ images planned, manual nav.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="leadership">
        <div className={styles.container}>
          <Reveal>
            <SectionHeader
              eyebrow="Leadership & team"
              heading="Senior. Specialist. UAE-resident where it matters."
              subtext="Gulf engagements are led end-to-end by UAE-resident staff. India, Oman, and USA delivery sits behind them."
            />
          </Reveal>

          <Reveal delay={120}>
            <span className={styles.subheading}>UAE-based leadership</span>
          </Reveal>
          <div className={styles.uaeGrid}>
            {UAE_LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <PersonCard
                  variant="card"
                  name={p.name}
                  role={p.role}
                  region={p.region}
                  note={(p as { note?: string }).note}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <span className={`${styles.subheading} ${styles.subheadingSpaced}`}>
              Founders & global leadership
            </span>
          </Reveal>
          <div className={styles.globalGrid}>
            {GLOBAL_LEADERSHIP.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <PersonCard
                  flippable
                  tone={p.tone}
                  name={p.name}
                  role={p.role}
                  region="Founders & global"
                />
              </Reveal>
            ))}
          </div>

          <p className={styles.headshotsNote}>
            <em>Cleared headshot photos and LinkedIn URLs for each leader will be wired in once supplied.</em>
          </p>
        </div>
      </section>

      <PageCTA
        eyebrow="Let's talk"
        headline="Let's build together."
        sub="Tell us about your challenge. We'll tell you exactly how we'd approach it."
        primary={{ label: "Start a conversation", to: "/contact" }}
        secondary={{ label: "Explore our solutions", to: "/services" }}
      />
    </div>
  );
}
