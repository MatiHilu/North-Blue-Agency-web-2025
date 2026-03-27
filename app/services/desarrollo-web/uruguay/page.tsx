import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import DesarrolloWebTemplate from "@/templates/servicios/desarrollo-web/template";

const SERVICE_SLUG = "desarrollo-web";
const LOCATION_SLUG = "uruguay";
const LOCATION_DISPLAY = "Uruguay";
const SERVICE_TITLE = "Web Development";
const SERVICE_DESCRIPTION =
  "We create modern, fast, and conversion-oriented sites. We apply UX/UI best practices and technical SEO to maximize results.";
const OG_IMAGE = `${BASE_URL}/images/og/services-desarrollo-web.png`;
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
    "web development",
    "websites",
    "web design",
    "frontend development",
    "e-commerce",
    "next.js",
    "wordpress",
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
  return <DesarrolloWebTemplate locationSlug={LOCATION_SLUG} />;
}
