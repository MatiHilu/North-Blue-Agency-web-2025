import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { metadata as baseMetadata } from "../../../services/seo/aeo/page";

const canonical = `${BASE_URL}/services/seo/aeo`;
const canonicalEs = `${BASE_URL}/services/seo/aeo`;

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "AEO - Answer Engine Optimization",
    template: "%s | North Blue Agency",
  },
  description:
    "Become the preferred answer for voice assistants and chatbots. Our AEO strategy optimizes your brand for Siri, Alexa, and Bing Copilot.",
  alternates: {
    canonical,
    languages: { en: canonical, es: canonicalEs },
  },
  openGraph: {
    ...baseMetadata.openGraph,
    url: canonical,
  },
};

export { default } from "../../../services/seo/aeo/page";
