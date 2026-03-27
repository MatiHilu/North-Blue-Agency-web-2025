import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import AEOTemplate from "@/templates/servicios/seo/aeo/template";

const SERVICE_SLUG = "seo/aeo";
const LOCATION_SLUG = "caba";
const LOCATION_DISPLAY = "CABA";
const SERVICE_TITLE = "AEO (Answer Engine Optimization)";
const SERVICE_DESCRIPTION =
  "Become the preferred answer for voice assistants and chatbots. Our AEO strategy optimizes your brand for Siri, Alexa, and Bing Copilot.";
const OG_IMAGE = `${BASE_URL}/images/og/services-aeo.png`;
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
    "AEO",
    "Answer Engine Optimization",
    "voice search",
    "structured data",
    "conversational AI",
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
  return <AEOTemplate locationSlug={LOCATION_SLUG} />;
}
