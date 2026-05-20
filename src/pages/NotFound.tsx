import { Button } from "../components/Button";
import { Pill } from "../components/Pill";
import { LocalizedLink } from "../i18n/LocalizedLink";
import { useT } from "../i18n/useT";
import styles from "./NotFound.module.css";

/**
 * 404 page with an animated "disconnected plug" illustration.
 *
 * A power plug is yanked out of a wall socket on a loop — sparks flash at
 * the moment of disconnect, the plug bobs in mid-air, and a little dust
 * puff dissipates from the socket. Reinforces the "this page is unplugged"
 * metaphor for missing routes.
 */
export function NotFound() {
  const t = useT();
  return (
    <section className={styles.page} aria-labelledby="notfound-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Pill variant="brand">{t("nf.eyebrow")}</Pill>
          <h1 id="notfound-title" className={styles.title}>
            {t("nf.titleA")} <em>{t("nf.titleB")}</em>
          </h1>
          <p className={styles.body}>{t("nf.body")}</p>
          <div className={styles.actions}>
            <LocalizedLink to="/">
              <Button variant="primary">{t("nf.home")}</Button>
            </LocalizedLink>
            <LocalizedLink to="/services">
              <Button variant="secondary">{t("nf.browse")}</Button>
            </LocalizedLink>
          </div>
        </div>

        <div className={styles.illus} aria-hidden="true">
          <svg
            viewBox="0 0 360 240"
            className={styles.svg}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Wall + socket (static) */}
            <g className={styles.wall}>
              <rect x="280" y="40" width="80" height="160" fill="var(--surface-1)" />
              <line x1="280" y1="40" x2="280" y2="200" stroke="var(--border)" strokeWidth="1.5" />
              <rect
                x="290"
                y="90"
                width="60"
                height="80"
                rx="10"
                fill="var(--canvas)"
                stroke="var(--border)"
                strokeWidth="1.5"
              />
              {/* socket eyes */}
              <rect x="308" y="106" width="6" height="14" rx="1.5" fill="var(--ink)" />
              <rect x="324" y="106" width="6" height="14" rx="1.5" fill="var(--ink)" />
              <rect x="308" y="140" width="6" height="14" rx="1.5" fill="var(--ink)" />
              <rect x="324" y="140" width="6" height="14" rx="1.5" fill="var(--ink)" />
              {/* mouth ground hole */}
              <circle cx="319" cy="130" r="2.4" fill="var(--ink-muted)" />
            </g>

            {/* Dust puff — fades out periodically as if dust shaken loose */}
            <g className={styles.puff}>
              <circle cx="276" cy="100" r="6" fill="var(--surface-2)" opacity="0.65" />
              <circle cx="266" cy="92" r="4" fill="var(--surface-2)" opacity="0.5" />
              <circle cx="268" cy="160" r="5" fill="var(--surface-2)" opacity="0.55" />
              <circle cx="258" cy="170" r="3" fill="var(--surface-2)" opacity="0.45" />
            </g>

            {/* Sparks between plug prongs and socket (flash on disconnect) */}
            <g className={styles.sparks}>
              <path
                d="M 245 118 L 256 122 L 250 127 L 264 124"
                stroke="var(--brand)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 246 144 L 255 140 L 250 136 L 268 144"
                stroke="var(--icon-yellow)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="270" cy="118" r="2.5" fill="var(--brand)" />
              <circle cx="272" cy="146" r="2" fill="var(--icon-yellow)" />
              <circle cx="280" cy="132" r="1.8" fill="var(--brand)" />
            </g>

            {/* Plug + cord (move together) */}
            <g className={styles.plugGroup}>
              {/* Cord — squiggly line from off-canvas-left to plug body */}
              <path
                d="M -10 195 Q 50 215 110 195 Q 145 175 180 180 Q 200 184 220 175"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M -10 195 Q 50 215 110 195 Q 145 175 180 180 Q 200 184 220 175"
                fill="none"
                stroke="var(--brand)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="0 10"
                opacity="0.4"
              />

              {/* Plug body */}
              <g transform="translate(170, 110)">
                <rect width="60" height="60" rx="10" fill="var(--ink)" />
                <rect x="6" y="6" width="48" height="48" rx="6" fill="#2a2727" />
                {/* face — surprised expression to play up "unplugged!" */}
                <circle cx="22" cy="24" r="3" fill="var(--canvas)" />
                <circle cx="22" cy="24" r="1.2" fill="var(--ink)" />
                <circle cx="38" cy="24" r="3" fill="var(--canvas)" />
                <circle cx="38" cy="24" r="1.2" fill="var(--ink)" />
                <ellipse cx="30" cy="40" rx="4" ry="5" fill="var(--brand)" />
                {/* prongs on right edge */}
                <rect x="60" y="14" width="16" height="6" rx="1.5" fill="#bcbcbc" />
                <rect x="60" y="40" width="16" height="6" rx="1.5" fill="#bcbcbc" />
                {/* glint on prongs */}
                <rect x="62" y="15" width="12" height="1.5" rx="0.5" fill="#ffffff" opacity="0.7" />
                <rect x="62" y="41" width="12" height="1.5" rx="0.5" fill="#ffffff" opacity="0.7" />
              </g>
            </g>

            {/* "404" graffiti behind the wall */}
            <text
              x="320"
              y="65"
              fontFamily="var(--font-mono)"
              fontSize="11"
              fontWeight="700"
              letterSpacing="0.2em"
              fill="var(--text-2)"
              opacity="0.55"
              textAnchor="middle"
            >
              404
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
