import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { BrandingTemplate } from "@/templates/servicios/branding/template";

const SERVICE_SLUG = "branding";
const LOCATION_SLUG = "caballito";
const LOCATION_DISPLAY = "Caballito";
const SERVICE_TITLE = "Branding & Visual Identity";
const SERVICE_DESCRIPTION = "Create a unique visual identity that reflects your brand essence. We develop logos and guidelines to differentiate your business across all touchpoints.";
const OG_IMAGE = `${BASE_URL}/images/og/services-branding.png`;
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
    "branding",
    "visual identity",
    "brand design",
    "brand guidelines",
    "logo",
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
  return <BrandingTemplate locationSlug={LOCATION_SLUG} />;
}
