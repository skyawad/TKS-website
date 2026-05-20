import type { SVGProps } from "react";

/**
 * Inline-SVG icon set for service / product / industry tiles.
 *
 * All icons share a 24×24 viewBox, 2-px stroke weight, round caps/joins,
 * and use `currentColor` for stroke + fill — so the icon adopts the colour
 * of whatever tile it's placed on (white on the coloured tile chrome).
 */
export type IconName =
  | "analytics"
  | "data-eng"
  | "ai-strategy"
  | "geospatial"
  | "managed"
  | "assistant"
  | "ticket"
  | "callops"
  | "cxo"
  | "insurance"
  | "oil-gas"
  | "tech-it"
  | "manufacturing"
  | "integrity"
  | "ethics"
  | "inclusion"
  | "innovation"
  | "telecom"
  | "healthcare"
  | "retail"
  | "logistics"
  | "government"
  | "bank";

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 22, ...rest }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };

  switch (name) {
    case "analytics":
      return (
        <svg {...common}>
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-8" />
          <path d="M22 20H2" />
        </svg>
      );

    case "data-eng":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="8" ry="2.5" />
          <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
          <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
        </svg>
      );

    case "ai-strategy":
      return (
        <svg {...common}>
          <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
          <path d="M19 16l.8 2L22 19l-2.2.7L19 22l-.8-2.3L16 19l2.2-1z" />
          <path d="M5 14l.6 1.5L7 16l-1.4.5L5 18l-.6-1.5L3 16l1.4-.5z" />
        </svg>
      );

    case "geospatial":
      return (
        <svg {...common}>
          <path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );

    case "managed":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
          <path d="M11 7h6M11 17h6" />
        </svg>
      );

    case "assistant":
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 0 1-13 6.3L3 20l1.7-5A8 8 0 1 1 21 12z" />
          <path d="M9 11h.01M12 11h.01M15 11h.01" strokeWidth="2.4" />
        </svg>
      );

    case "ticket":
      return (
        <svg {...common}>
          <path d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
          <path d="M13 5v14" strokeDasharray="2 3" />
        </svg>
      );

    case "callops":
      return (
        <svg {...common}>
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
          <path d="M4 13h3v6H5a1 1 0 0 1-1-1z" />
          <path d="M20 13h-3v6h2a1 1 0 0 0 1-1z" />
        </svg>
      );

    case "cxo":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="6" r="2.2" />
          <circle cx="12" cy="18" r="2.2" />
          <path d="M7.6 7.6L10.6 16.4M16.4 7.6l-3 8.8M8.2 6h7.6" />
        </svg>
      );

    case "insurance":
      return (
        <svg {...common}>
          <path d="M12 2l8 3v6c0 5-3.5 9.4-8 11-4.5-1.6-8-6-8-11V5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );

    case "oil-gas":
      return (
        <svg {...common}>
          <path d="M12 3s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11z" />
          <path d="M12 17a3 3 0 0 1-3-3" />
        </svg>
      );

    case "tech-it":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="M6 10l2 2-2 2M11 14h4" />
        </svg>
      );

    case "manufacturing":
      return (
        <svg {...common}>
          <path d="M3 21V11l5 3V11l5 3V8l8 4v9z" />
          <path d="M7 17h2M12 17h2M17 17h2" />
        </svg>
      );

    case "integrity":
      // Fingerprint — concentric arcs converging on a centre line.
      return (
        <svg {...common}>
          <path d="M3.5 12c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5" />
          <path d="M6.5 12.5C6.5 9.5 9 7 12 7s5.5 2.5 5.5 5.5c0 1-.1 2-.3 3" />
          <path d="M9.5 13c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 2.2-1.2 4-3 5" />
          <path d="M12 13v8" />
        </svg>
      );

    case "ethics":
      // Balance scale — beam + two suspended pans.
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M5 21h14" />
          <path d="M5 7h14" />
          <path d="M2.5 12L5 7l2.5 5" />
          <path d="M16.5 12L19 7l2.5 5" />
          <path d="M2.5 12a2.5 2.5 0 0 0 5 0" />
          <path d="M16.5 12a2.5 2.5 0 0 0 5 0" />
        </svg>
      );

    case "inclusion":
      // Three overlapping circles — Venn-style.
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="5" />
          <circle cx="15" cy="9" r="5" />
          <circle cx="12" cy="15" r="5" />
        </svg>
      );

    case "innovation":
      // Lightbulb with rays.
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8 1 .9 1.6L9.7 18h4.6l.3-2.5c.1-.6.4-1.2.9-1.6A6 6 0 0 0 12 3z" />
          <path d="M2.5 12H4M20 12h1.5M5 5l1 1M18 5l-1 1" />
        </svg>
      );

    case "telecom":
      // Broadcast tower with concentric signal arcs.
      return (
        <svg {...common}>
          <path d="M12 11v10" />
          <path d="M9 21h6" />
          <circle cx="12" cy="9" r="1.6" fill="currentColor" stroke="none" />
          <path d="M7.5 11.5a6 6 0 0 1 0-5" />
          <path d="M16.5 11.5a6 6 0 0 0 0-5" />
          <path d="M5 13a9 9 0 0 1 0-8" />
          <path d="M19 13a9 9 0 0 0 0-8" />
        </svg>
      );

    case "healthcare":
      // Shield with medical cross.
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 9.4-8 11-4.5-1.6-8-6-8-11V6z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );

    case "retail":
      // Shopping bag with twin handles.
      return (
        <svg {...common}>
          <path d="M5 8h14l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );

    case "logistics":
      // Delivery truck — cab + box + wheels.
      return (
        <svg {...common}>
          <rect x="2" y="7" width="12" height="9" rx="1" />
          <path d="M14 10h4l3 3v3h-7z" />
          <circle cx="6" cy="18" r="1.8" />
          <circle cx="17" cy="18" r="1.8" />
        </svg>
      );

    case "government":
      // Columned classical building.
      return (
        <svg {...common}>
          <path d="M3 9l9-5 9 5" />
          <path d="M4 9v11M20 9v11" />
          <path d="M8 11v7M12 11v7M16 11v7" />
          <path d="M3 20h18" />
        </svg>
      );

    case "bank":
      // Bank columns + pediment.
      return (
        <svg {...common}>
          <path d="M3 10l9-6 9 6" />
          <path d="M5 10v8M19 10v8M9 10v8M15 10v8" />
          <path d="M3 20h18" />
          <path d="M3 22h18" />
        </svg>
      );

    default:
      return null;
  }
}
