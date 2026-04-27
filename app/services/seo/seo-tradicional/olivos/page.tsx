import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { SEOTradicionalTemplate } from "@/templates/servicios/seo/seo-tradicional/template";

const SERVICE_SLUG = "seo/seo-tradicional";
const LOCATION_SLUG = "olivos";
const LOCATION_DISPLAY = "Olivos";
const SERVICE_TITLE = "Traditional SEO 360°";
const SERVICE_DESCRIPTION = "Strengthen your organic position with our 360° SEO strategy. We optimize technical health, content, and authority to guarantee sustained growth in search.";
const OG_IMAGE = `${BASE_URL}/images/og/services-seo-tradicional.png`;
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
    "technical SEO",
    "on-page optimization",
    "link building",
    "keyword research",
    "Core Web Vitals",
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
  return <SEOTradicionalTemplate locationSlug={LOCATION_SLUG} />;
}
