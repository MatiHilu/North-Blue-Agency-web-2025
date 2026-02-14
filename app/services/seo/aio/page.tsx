import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { metadata as baseMetadata } from "../../../services/seo/aio/page";

const canonical = `${BASE_URL}/services/seo/aio`;
const canonicalEs = `${BASE_URL}/services/seo/aio`;

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "AIO - Artificial Intelligence Optimization",
    template: "%s | North Blue Agency",
  },
  description:
    "Scale your SEO with Artificial Intelligence. AIO accelerates analysis and content via smart automation, prioritizing quality and fast results.",
  alternates: {
    canonical,
    languages: { en: canonical, es: canonicalEs },
  },
  openGraph: {
    ...baseMetadata.openGraph,
    url: canonical,
  },
};

export { default } from "../../../services/seo/aio/page";
