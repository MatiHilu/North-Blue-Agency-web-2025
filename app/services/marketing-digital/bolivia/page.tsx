import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import MarketingDigitalTemplate from "@/templates/servicios/marketing-digital/template";

const SERVICE_SLUG = "marketing-digital";
const LOCATION_SLUG = "bolivia";
const LOCATION_DISPLAY = "Bolivia";
const SERVICE_TITLE = "Holistic Digital Marketing";
const SERVICE_DESCRIPTION =
  "Drive sales with our comprehensive digital marketing strategies. We combine SEO, SEM, and social channels to generate qualified leads and maximize ROI.";
const OG_IMAGE = `${BASE_URL}/images/og/services-marketing-digital.png`;
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
    "digital marketing",
    "multi-channel strategy",
    "SEM",
    "SEO",
    "digital advertising",
    "email marketing",
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
  return <MarketingDigitalTemplate locationSlug={LOCATION_SLUG} />;
}
