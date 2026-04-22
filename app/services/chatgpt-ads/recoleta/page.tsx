import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { ChatgptAdsTemplate } from "@/templates/servicios/chatgpt-ads/template";

const SERVICE_SLUG = "chatgpt-ads";
const LOCATION_SLUG = "recoleta";
const LOCATION_DISPLAY = "Recoleta";
const SERVICE_TITLE = "ChatGPT Advertising";
const SERVICE_DESCRIPTION = "Capture high-intent traffic with native ads on ChatGPT (SearchGPT). Position your brand in conversational search answers exactly when decisions are made.";
const OG_IMAGE = `${BASE_URL}/images/og/services-chatgpt-ads.png`;
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
    "chatgpt advertising",
    "searchgpt ads",
    "ai ads",
    "marketing on chatgpt",
    "geo optimization",
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
  return <ChatgptAdsTemplate locationSlug={LOCATION_SLUG} />;
}
