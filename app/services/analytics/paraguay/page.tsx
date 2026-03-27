import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import AnalyticsTemplate from "@/templates/servicios/analytics/template";

const SERVICE_SLUG = "analytics";
const LOCATION_SLUG = "paraguay";
const LOCATION_DISPLAY = "Paraguay";
const SERVICE_TITLE = "Analytics - Web & Social Media Reports";
const SERVICE_DESCRIPTION =
  "Transform data into growth with our advanced web and social analytics. We implement tracking systems to optimize your strategy based on actionable insights.";
const OG_IMAGE = `${BASE_URL}/images/og/services-analytics.png`;
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
    "analytics",
    "web reports",
    "social media analytics",
    "google analytics 4",
    "google tag manager",
    "monthly reports",
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
  return <AnalyticsTemplate locationSlug={LOCATION_SLUG} />;
}
