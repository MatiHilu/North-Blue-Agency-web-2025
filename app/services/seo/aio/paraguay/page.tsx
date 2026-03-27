import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import AIOTemplate from "@/templates/servicios/seo/aio/template";

const SERVICE_SLUG = "seo/aio";
const LOCATION_SLUG = "paraguay";
const LOCATION_DISPLAY = "Paraguay";
const SERVICE_TITLE = "AIO (Artificial Intelligence Optimization)";
const SERVICE_DESCRIPTION =
  "Scale your SEO with Artificial Intelligence. AIO accelerates analysis and content through intelligent automation, prioritizing quality and fast results.";
const OG_IMAGE = `${BASE_URL}/images/og/services-aio.png`;
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
    "AIO",
    "Artificial Intelligence Optimization",
    "AI SEO",
    "SEO automation",
    "AI models for SEO",
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
  return <AIOTemplate locationSlug={LOCATION_SLUG} />;
}
