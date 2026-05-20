import styles from "./PersonCard.module.css";

export interface PersonCardProps {
  readonly name: string;
  readonly role: string;
  /** Optional inline note (e.g. "Spelling pending HR confirmation"). */
  readonly note?: string;
  /**
   * Optional region badge above the name. Used on the About page leadership
   * grid to surface UAE-resident team members.
   */
  readonly region?: string;
  /** Optional LinkedIn URL. Renders as a small icon link. */
  readonly linkedinUrl?: string;
  /**
   * Display mode. "compact" is for narrow surfaces like the Contact page
   * regional-contacts column. "card" is the larger version used in
   * leadership grids.
   */
  readonly variant?: "compact" | "card";
  /**
   * Render as a 3D flip card — front shows a large headshot/initials avatar,
   * back reveals name + role + region + note on hover. Used for the
   * "Founders & global leadership" grid on /about.
   */
  readonly flippable?: boolean;
  /** Per-card color tone for the avatar gradient. Defaults to orange. */
  readonly tone?: "orange" | "blue" | "purple" | "green" | "yellow" | "ink";
}

const TONE_GRADIENT: Record<NonNullable<PersonCardProps["tone"]>, string> = {
  orange: "linear-gradient(135deg, var(--icon-orange) 0%, #FF7E3D 100%)",
  blue:   "linear-gradient(135deg, var(--icon-blue) 0%, #5C8DF8 100%)",
  purple: "linear-gradient(135deg, var(--icon-purple) 0%, #9C82FB 100%)",
  green:  "linear-gradient(135deg, var(--icon-green) 0%, #4CCB94 100%)",
  yellow: "linear-gradient(135deg, var(--icon-yellow) 0%, #FFD24A 100%)",
  ink:    "linear-gradient(135deg, var(--ink) 0%, #3a3838 100%)",
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PersonCard({
  name,
  role,
  note,
  region,
  linkedinUrl,
  variant = "compact",
  flippable = false,
  tone = "orange",
}: PersonCardProps) {
  const initials = getInitials(name);
  const avatarBg = TONE_GRADIENT[tone];

  // === Flippable variant ===
  if (flippable) {
    return (
      <article className={styles.flipCard} aria-label={`${name}, ${role}`}>
        <div className={styles.flipInner}>
          <div className={styles.flipFront}>
            <div
              className={styles.bigAvatar}
              aria-hidden="true"
              style={{ background: avatarBg }}
            >
              {initials}
            </div>
            <div className={styles.frontMeta}>
              <span className={styles.frontName}>{name}</span>
              {region && <span className={styles.frontRegion}>{region}</span>}
            </div>
            <span className={styles.flipHint} aria-hidden="true">
              Hover →
            </span>
          </div>
          <div className={styles.flipBack} style={{ background: avatarBg }}>
            {region && <span className={styles.backRegion}>{region}</span>}
            <h3 className={styles.backName}>{name}</h3>
            <p className={styles.backRole}>{role}</p>
            {note && <p className={styles.backNote}>{note}</p>}
            {linkedinUrl && (
              <a
                className={styles.backLinkedin}
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.52v6.22zM5.34 7.43A2.07 2.07 0 1 1 5.34 3.3a2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  // === Default (non-flip) variant ===
  const rootClass = [
    styles.card,
    variant === "card" ? styles.card_large : styles.card_compact,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={rootClass}>
      <span className={styles.initial} aria-hidden="true">
        {initials}
      </span>
      <div className={styles.body}>
        {region && <span className={styles.region}>{region}</span>}
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        {note && <p className={styles.note}>{note}</p>}
        {linkedinUrl && (
          <a
            className={styles.linkedin}
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.91 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.52v6.22zM5.34 7.43A2.07 2.07 0 1 1 5.34 3.3a2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </article>
  );
}
