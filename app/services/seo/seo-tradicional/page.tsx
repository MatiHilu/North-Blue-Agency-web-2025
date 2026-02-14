import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { metadata as baseMetadata } from "../../../services/seo/seo-tradicional/page";

const canonical = `${BASE_URL}/services/seo/seo-tradicional`;
const canonicalEs = `${BASE_URL}/services/seo/seo-tradicional`;

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "Traditional SEO - 360° Strategy",
    template: "%s | North Blue Agency",
  },
  description:
    "Strengthen your organic presence with our 360° SEO strategy. We optimize technical SEO, content, and authority for sustained growth in search results.",
  alternates: {
    canonical,
    languages: { en: canonical, es: canonicalEs },
  },
  openGraph: {
    ...baseMetadata.openGraph,
    url: canonical,
  },
};

export { default } from "../../../services/seo/seo-tradicional/page";
