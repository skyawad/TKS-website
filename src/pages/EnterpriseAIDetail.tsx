import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { HeroAssistIQ } from "../components/HeroAssistIQ";
import { HeroCallOps } from "../components/HeroCallOps";
import { HeroCxoNexus } from "../components/HeroCxoNexus";
import { HeroTicketIQ } from "../components/HeroTicketIQ";
import { ProductDetailPage } from "../components/ProductDetailPage";
import { getEnterpriseAIBySlug } from "../data/enterprise-ai";
import { NotFound } from "./NotFound";

const ILLUSTRATIONS: Record<string, () => ReactNode> = {
  "assist-iq":  () => <HeroAssistIQ />,
  "ticket-iq":  () => <HeroTicketIQ />,
  "callops-ai": () => <HeroCallOps />,
  "cxo-nexus":  () => <HeroCxoNexus />,
};

export function EnterpriseAIDetailRoute() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getEnterpriseAIBySlug(slug) : null;
  if (!data) return <NotFound />;
  const illustration = slug && ILLUSTRATIONS[slug] ? ILLUSTRATIONS[slug]() : undefined;
  return <ProductDetailPage data={data} illustration={illustration} />;
}
