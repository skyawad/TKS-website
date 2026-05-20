import type { ServiceDetail } from "../service-detail";
import { businessAnalytics } from "./business-analytics";
import { dataAiStrategy } from "./data-ai-strategy";
import { dataEngineering } from "./data-engineering";
import { geospatialAnalytics } from "./geospatial-analytics";
import { managedServices } from "./managed-services";

/**
 * Registry of every service detail page. Add new entries as detail pages
 * land. Keys are URL slugs and must match the `slug` property on the data.
 */
export const SERVICE_REGISTRY: Readonly<Record<string, ServiceDetail>> = {
  "business-analytics":     businessAnalytics,
  "data-engineering":       dataEngineering,
  "data-ai-strategy":       dataAiStrategy,
  "geospatial-analytics":   geospatialAnalytics,
  "managed-services":       managedServices,
};

export function getServiceBySlug(slug: string): ServiceDetail | null {
  return SERVICE_REGISTRY[slug] ?? null;
}
