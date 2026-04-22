import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { SEOTemplate } from "@/templates/servicios/seo/template";

const SERVICE_SLUG = "seo";
const LOCATION_SLUG = "nunez";
const LOCATION_DISPLAY = "Núñez";
const SERVICE_TITLE = "SEO & Ranking (with AIO, AEO & GEO)";
const SERVICE_DESCRIPTION = "Boost rankings with our advanced SEO (AIO, AEO, GEO). We optimize for search engines and AI to drive sustainable traffic and future-proof results.";
const OG_IMAGE = `${BASE_URL}/images/og/services-seo.png`;
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
    "SEO",
    "AIO",
    "AEO",
    "GEO",
    "web positioning",
    "search engine optimization",
    "link building",
    "local SEO",
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
  return <SEOTemplate locationSlug={LOCATION_SLUG} />;
}
