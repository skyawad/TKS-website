import type { IconName } from "../components/Icon";

/**
 * Map a free-text industry tile name (e.g. "BFSI", "Air cargo", "3PL / 4PL")
 * to the best-fitting icon from the shared Icon component.
 *
 * Returns `null` when no match — the caller renders a fallback monogram.
 */
export function industryIcon(name: string): IconName | null {
  const s = name.toLowerCase();

  if (/bfsi|bank|financ|capital market|fintech/.test(s))                  return "bank";
  if (/insur|reinsur|actuar/.test(s))                                     return "insurance";
  if (/oil|gas|upstream|downstream|midstream|energy|petro/.test(s))       return "oil-gas";
  if (/manufactur|industr|factory|plant/.test(s))                         return "manufacturing";
  if (/telecom|telco|carrier|mobile network/.test(s))                     return "telecom";
  if (/health|clinic|hospital|pharma|medical/.test(s))                    return "healthcare";
  if (/retail|e-?com|commerce|consumer goods|cpg/.test(s))                return "retail";
  if (/logistic|freight|forward|3pl|4pl|shipping|carrier|cargo|nvocc/.test(s)) return "logistics";
  if (/air\b|aviation|airport/.test(s))                                   return "geospatial";
  if (/legal|law|contract|compliance/.test(s))                            return "ethics";
  if (/govern|public sector|ministry|municip/.test(s))                    return "government";
  if (/tech|it services|software|saas/.test(s))                           return "tech-it";
  if (/data|analytics|warehouse|lake/.test(s))                            return "data-eng";

  return null;
}

/** Pick a deterministic accent color for monogram-fallback tiles. */
export function monogramColor(name: string): string {
  const palette = ["var(--icon-orange)", "var(--icon-blue)", "var(--icon-purple)", "var(--icon-green)", "var(--icon-yellow)"];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return palette[Math.abs(hash) % palette.length];
}
