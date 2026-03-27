import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import CampanasAdsTemplate from "@/templates/servicios/campanas-ads/template";

const SERVICE_SLUG = "campanas-ads";
const LOCATION_SLUG = "uruguay";
const LOCATION_DISPLAY = "Uruguay";
const SERVICE_TITLE = "Campaigns, Ads & Digital Advertising";
const SERVICE_DESCRIPTION =
  "Maximize ROI with data-driven ad campaigns on Google, Meta, and LinkedIn. We design and execute strategies for sustainable business growth.";
const OG_IMAGE = `${BASE_URL}/images/og/services-campanas-ads.png`;
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
    "campaigns",
    "ads",
    "digital advertising",
    "google ads",
    "meta ads",
    "tiktok ads",
    "linkedin ads",
    "remarketing",
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
  return <CampanasAdsTemplate locationSlug={LOCATION_SLUG} />;
}
