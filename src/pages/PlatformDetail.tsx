import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { HeroDataPulse } from "../components/HeroDataPulse";
import { HeroFreightIQ } from "../components/HeroFreightIQ";
import { HeroInsightSM } from "../components/HeroInsightSM";
import { HeroParseIQ } from "../components/HeroParseIQ";
import { ProductDetailPage } from "../components/ProductDetailPage";
import { getPlatformBySlug } from "../data/platforms";
import { NotFound } from "./NotFound";

const ILLUSTRATIONS: Record<string, () => ReactNode> = {
  "insight-sm":   () => <HeroInsightSM />,
  "datapulse-iq": () => <HeroDataPulse />,
  "parse-iq":     () => <HeroParseIQ />,
  "freight-iq":   () => <HeroFreightIQ />,
};

export function PlatformDetailRoute() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getPlatformBySlug(slug) : null;
  if (!data) return <NotFound />;
  const illustration = slug && ILLUSTRATIONS[slug] ? ILLUSTRATIONS[slug]() : undefined;
  return <ProductDetailPage data={data} illustration={illustration} />;
}
