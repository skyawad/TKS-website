import type { IconName } from "../components/Icon";
import type { IconTone } from "../components/FloatingCard";
import type { PageCTACtaSpec } from "../components/PageCTA";
import type { ProcessStep } from "../components/ProcessTimeline";

/**
 * Shared data shape for product/platform detail pages
 * (/enterprise-ai/* and /platforms/*).
 */
export interface ProductDetail {
  readonly slug: string;
  readonly kind: "enterprise-ai" | "platform";
  readonly icon: IconName;
  readonly tone: IconTone;

  readonly hero: {
    readonly eyebrow: string;
    readonly headline: string;
    readonly subhero: string;
    readonly lead: string;
    readonly primary: PageCTACtaSpec;
    readonly secondary?: PageCTACtaSpec;
    readonly trustLine?: string;
  };

  readonly problem: {
    readonly heading: string;
    readonly lead: string;
    readonly pains: ReadonlyArray<string>;
  };

  readonly capabilities: {
    readonly sub: string;
    readonly cards: ReadonlyArray<{
      readonly title: string;
      readonly outcome: string;
      readonly bullets: ReadonlyArray<string>;
    }>;
  };

  readonly industries: {
    readonly sub: string;
    readonly tiles: ReadonlyArray<{ readonly name: string; readonly value: string }>;
  };

  readonly architecture: {
    readonly sub: string;
    readonly steps: ReadonlyArray<ProcessStep>;
    readonly closingLine?: string;
  };

  readonly useCases: {
    readonly sub: string;
    readonly cards: ReadonlyArray<{
      readonly title: string;
      readonly subtitle?: string;
      readonly crux: string;
      readonly outcome: string;
    }>;
  };

  readonly cta: {
    readonly heading: string;
    readonly sub: string;
    readonly primary: PageCTACtaSpec;
    readonly secondary?: PageCTACtaSpec | null;
    readonly tagline?: string;
  };
}
