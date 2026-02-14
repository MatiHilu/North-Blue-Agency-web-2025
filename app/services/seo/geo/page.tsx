import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { metadata as baseMetadata } from "../../../services/seo/geo/page";

const canonical = `${BASE_URL}/services/seo/geo`;
const canonicalEs = `${BASE_URL}/services/seo/geo`;

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "GEO - Generative Engine Optimization",
    template: "%s | North Blue Agency",
  },
  description:
    "Dominate generative search with GEO. We optimize your content for Google AI Overviews and multimodal assistants, ensuring visibility in the AI era.",
  alternates: {
    canonical,
    languages: { en: canonical, es: canonicalEs },
  },
  openGraph: {
    ...baseMetadata.openGraph,
    url: canonical,
  },
};

export { default } from "../../../services/seo/geo/page";
