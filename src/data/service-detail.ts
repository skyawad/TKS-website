import type { CapabilityCardProps } from "../components/CapabilityCard";
import type { PageCTACtaSpec } from "../components/PageCTA";
import type { ProcessStep } from "../components/ProcessTimeline";
import type { UseCaseCardProps } from "../components/UseCaseCard";

/**
 * Typed data shape for a service detail page. One file per service in
 * src/data/services/, then <ServiceDetailPage data={...} /> renders the
 * whole 8-section layout.
 */
export interface ServiceDetail {
  /** Route slug used in the URL (e.g. "business-analytics"). */
  readonly slug: string;

  /** Hero block - LOC: GULF-ADAPT. */
  readonly hero: {
    readonly headline: string;
    readonly subhero: string;
    readonly supporting: string;
    readonly primaryCta: PageCTACtaSpec;
    readonly secondaryCta?: PageCTACtaSpec;
    /** Optional small trust line beneath the CTAs. */
    readonly trustLine?: string;
  };

  /** About the Service - 2-3 paragraphs. LOC: UNIVERSAL. */
  readonly about: {
    readonly heading: string;
    readonly paragraphs: ReadonlyArray<string>;
  };

  /** What We Offer - 6 capability cards. LOC: UNIVERSAL. */
  readonly capabilities: {
    readonly heading?: string;
    readonly sub: string;
    readonly cards: ReadonlyArray<CapabilityCardProps>;
  };

  /** Tools & Technology - row-based table. LOC: UNIVERSAL. */
  readonly tech: {
    readonly heading?: string;
    readonly sub: string;
    readonly rows: ReadonlyArray<{
      readonly category: string;
      readonly items: string;
    }>;
    /** Optional trailing strip line (e.g. "Data Sources We Connect To"). */
    readonly footnote?: string;
  };

  /** Our Approach - 5-step horizontal stepper. LOC: UNIVERSAL. */
  readonly approach: {
    readonly heading?: string;
    readonly sub: string;
    readonly steps: ReadonlyArray<ProcessStep>;
    readonly closingLine?: string;
  };

  /** Why Techknomatic - 6 differentiators in a 3x2 grid. LOC: GULF-ADAPT. */
  readonly differentiators: {
    readonly heading?: string;
    readonly sub: string;
    readonly cards: ReadonlyArray<{
      readonly title: string;
      readonly body: string;
    }>;
  };

  /** Use Cases - 3-5 cards. LOC: GULF-ADAPT. */
  readonly useCases: {
    readonly heading?: string;
    readonly sub: string;
    readonly cards: ReadonlyArray<UseCaseCardProps>;
  };

  /** Bottom CTA banner. LOC: GULF-ADAPT. */
  readonly cta: {
    readonly heading: string;
    readonly sub: string;
    readonly primary: PageCTACtaSpec;
    readonly secondary?: PageCTACtaSpec | null;
    readonly tagline?: string;
  };
}
