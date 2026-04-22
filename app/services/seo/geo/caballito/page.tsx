import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { GEOTemplate } from "@/templates/servicios/seo/geo/template";

const SERVICE_SLUG = "seo/geo";
const LOCATION_SLUG = "caballito";
const LOCATION_DISPLAY = "Caballito";
const SERVICE_TITLE = "GEO (Generative Engine Optimization)";
const SERVICE_DESCRIPTION = "Master generative search with GEO. We optimize your content for Google AI Overviews and multimodal assistants, ensuring visibility in the new AI era.";
const OG_IMAGE = `${BASE_URL}/images/og/services-geo.png`;
const CANONICAL = `${BASE_URL}/services/${SERVICE_SLUG}/${LOCATION_SLUG}`;

export const metadata: Metadata = {
  title: {
    default: `${SERVICE_TITLE} - ${LOCATION_DISPLAY}`,
    template: "%s | North Blue Agency",
  },
  description: `${SERVICE_DESCRIPTION} Serving businesses in ${LOCATION_DISPLAY}.`,
  alternates: {
    canonical: CANONICAL,
    languages: { es: CANONICAL, en: CANONICAL },
  },
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "AI Overviews",
    "generative content",
    "knowledge graph",
    "North Blue Agency",
    LOCATION_DISPLAY,
  ],
  openGraph: {
    title: `${SERVICE_TITLE} - ${LOCATION_DISPLAY} - North Blue Agency`,
    description: `${SERVICE_DESCRIPTION} Serving businesses in ${LOCATION_DISPLAY}.`,
    url: CANONICAL,
    type: "website",
    images: [{ url: OG_IMAGE, alt: `${SERVICE_TITLE} - North Blue Agency` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SERVICE_TITLE} - ${LOCATION_DISPLAY} - North Blue Agency`,
    description: `${SERVICE_DESCRIPTION} Serving businesses in ${LOCATION_DISPLAY}.`,
    images: [OG_IMAGE],
  },
  publisher: "North Blue Agency",
};

export default function Page() {
  return <GEOTemplate locationSlug={LOCATION_SLUG} />;
}
