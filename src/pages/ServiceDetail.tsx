import { useParams } from "react-router-dom";
import { ServiceDetailPage } from "../components/ServiceDetailPage";
import { getServiceBySlug } from "../data/services";
import { NotFound } from "./NotFound";

/**
 * Router endpoint for /services/:slug. Looks up the service in the data
 * registry and renders <ServiceDetailPage data={...} />. Falls through to
 * NotFound if the slug isn't registered yet.
 */
export function ServiceDetailRoute() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getServiceBySlug(slug) : null;
  if (!data) return <NotFound />;
  return <ServiceDetailPage data={data} />;
}
