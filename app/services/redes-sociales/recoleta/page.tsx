import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { RedesSocialesTemplate } from "@/templates/servicios/redes-sociales/template";

const SERVICE_SLUG = "redes-sociales";
const LOCATION_SLUG = "recoleta";
const LOCATION_DISPLAY = "Recoleta";
const SERVICE_TITLE = "Social Media Management";
const SERVICE_DESCRIPTION = "Transform your digital presence with our social media management. We create personalized strategies to build community, increase engagement, and drive growth.";
const OG_IMAGE = `${BASE_URL}/images/og/services-redes-sociales.png`;
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
    "social media management",
    "community management",
    "social media marketing",
    "social media content",
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
  return <RedesSocialesTemplate locationSlug={LOCATION_SLUG} />;
}
