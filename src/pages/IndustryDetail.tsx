import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { HeroInsuranceIndustry } from "../components/HeroInsuranceIndustry";
import { HeroManufacturingIndustry } from "../components/HeroManufacturingIndustry";
import { HeroOilGasIndustry } from "../components/HeroOilGasIndustry";
import { HeroTechITIndustry } from "../components/HeroTechITIndustry";
import { ProductDetailPage } from "../components/ProductDetailPage";
import { getIndustryBySlug } from "../data/industries";
import { NotFound } from "./NotFound";

const ILLUSTRATIONS: Record<string, () => ReactNode> = {
  "insurance":         () => <HeroInsuranceIndustry />,
  "oil-and-gas":       () => <HeroOilGasIndustry />,
  "tech-it-services":  () => <HeroTechITIndustry />,
  "manufacturing":     () => <HeroManufacturingIndustry />,
};

export function IndustryDetailRoute() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getIndustryBySlug(slug) : null;
  if (!data) return <NotFound />;
  const illustration = slug && ILLUSTRATIONS[slug] ? ILLUSTRATIONS[slug]() : undefined;
  return <ProductDetailPage data={data} illustration={illustration} />;
}
