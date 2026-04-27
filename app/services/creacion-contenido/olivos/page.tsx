import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { CreacionContenidoTemplate } from "@/templates/servicios/creacion-contenido/template";

const SERVICE_SLUG = "creacion-contenido";
const LOCATION_SLUG = "olivos";
const LOCATION_DISPLAY = "Olivos";
const SERVICE_TITLE = "Content Creation";
const SERVICE_DESCRIPTION = "Amplify your social media presence with attractive visual content. We create images, videos, and carousels adapted to each platform to maximize engagement.";
const OG_IMAGE = `${BASE_URL}/images/og/services-creacion-contenido.png`;
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
    "content creation",
    "social media content",
    "reels",
    "tiktoks",
    "carousels",
    "graphic design",
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
  return <CreacionContenidoTemplate locationSlug={LOCATION_SLUG} />;
}
