import { useEffect, useState } from "react";
import styles from "./SiteLoader.module.css";

const LOADER_DURATION_MS = 5000;
const EXIT_DURATION_MS = 700;
const READY_AT_MS = 4200;

export function SiteLoader() {
  const [show, setShow] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflowY = "hidden";

    const readyTimer = window.setTimeout(() => setReady(true), READY_AT_MS);
    const exitTimer = window.setTimeout(
      () => setExiting(true),
      LOADER_DURATION_MS - EXIT_DURATION_MS,
    );
    const doneTimer = window.setTimeout(() => setShow(false), LOADER_DURATION_MS);

    return () => {
      window.clearTimeout(readyTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflowY = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={`${styles.overlay} ${exiting ? styles.overlayOut : ""}`}
      role="status"
      aria-label="Loading Techknomatic"
    >
      <div className={styles.stage}>
        <svg className={styles.wires} viewBox="0 0 720 280" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {/* Source-to-core wires */}
          <path className={styles.wire} d="M 150 60  C 240 60,  280 140, 350 140" />
          <path className={styles.wire} d="M 150 140 C 240 140, 280 140, 350 140" />
          <path className={styles.wire} d="M 150 220 C 240 220, 280 140, 350 140" />

          {/* Core-to-dashboard connector */}
          <path className={styles.wireOut} d="M 400 140 L 500 140" />

          <circle r="5" fill="var(--icon-blue)" className={styles.flowDot}>
            <animateMotion dur="1.6s" repeatCount="indefinite" path="M 150 60 C 240 60, 280 140, 350 140" />
          </circle>
          <circle r="5" fill="var(--icon-purple)" className={styles.flowDot}>
            <animateMotion dur="1.6s" repeatCount="indefinite" begin="0.4s" path="M 150 140 C 240 140, 280 140, 350 140" />
          </circle>
          <circle r="5" fill="var(--icon-green)" className={styles.flowDot}>
            <animateMotion dur="1.6s" repeatCount="indefinite" begin="0.8s" path="M 150 220 C 240 220, 280 140, 350 140" />
          </circle>
          <circle r="4" fill="var(--brand)" className={styles.flowDotOut}>
            <animateMotion dur="1.1s" repeatCount="indefinite" begin="1.6s" path="M 400 140 L 500 140" />
          </circle>
        </svg>

        <span className={`${styles.src} ${styles.s1}`}>
          <span className={styles.srcDot} style={{ background: "var(--icon-blue)" }} />
          Postgres
        </span>
        <span className={`${styles.src} ${styles.s2}`}>
          <span className={styles.srcDot} style={{ background: "var(--icon-purple)" }} />
          Snowflake
        </span>
        <span className={`${styles.src} ${styles.s3}`}>
          <span className={styles.srcDot} style={{ background: "var(--icon-green)" }} />
          SAP
        </span>

        <div className={styles.core}>
          <span className={styles.coreRing} />
          <span className={styles.coreRing2} />
          <span className={styles.coreMark}>TKS</span>
        </div>

        <div className={styles.dashboard} aria-hidden="true">
          <div className={styles.dashHead}>
            <span className={styles.dashTitle}>Live</span>
            <span className={styles.dashDot} />
          </div>
          <div className={styles.dashRow}>
            <span className={styles.kpi}><b>4.2K</b><i>users</i></span>
            <span className={styles.kpi}><b>98%</b><i>SLA</i></span>
            <span className={styles.kpi}><b>+12</b><i>Δ</i></span>
          </div>
          <svg className={styles.spark} viewBox="0 0 220 32" preserveAspectRatio="none">
            <path
              className={styles.sparkLine}
              d="M 0 24 L 28 20 L 56 22 L 84 14 L 112 16 L 140 8 L 168 11 L 196 5 L 220 8"
              fill="none"
              stroke="var(--brand)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <span className={styles.label}>
        {ready ? (
          <span className={`${styles.labelText} ${styles.labelTextReady}`}>Ready</span>
        ) : (
          <>
            <span className={styles.labelText}>Connecting your data</span>
            <span className={styles.dots}><i /><i /><i /></span>
          </>
        )}
      </span>

      <div className={styles.progress} aria-hidden="true">
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} />
        </div>
      </div>
    </div>
  );
}
