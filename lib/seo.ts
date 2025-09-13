import type { Metadata } from "next";
import { BASE_URL } from "./jsonld";

interface ServiceSEOArgs {
  slug: string; // e.g. "marketing-digital"
  title: string; // Visible H1
  subtitle: string; // Short description for meta description
  imagePath?: string; // relative public path
  keywords?: string[];
  type?: "website" | "article";
}

const DEFAULT_IMAGE = "/NorthBlue-Agency.png";

export function serviceMetadata({
  slug,
  title,
  subtitle,
  imagePath = DEFAULT_IMAGE,
  keywords = [],
  type = "website",
}: ServiceSEOArgs): Metadata {
  const url = `${BASE_URL}/servicios/${slug}`;
  const imageAbs = imagePath.startsWith("http")
    ? imagePath
    : `${BASE_URL}${imagePath}`;
  return {
    title,
    description: subtitle,
    alternates: { canonical: `/servicios/${slug}` },
    keywords,
    openGraph: {
      title: `${title} | North Blue Agency`,
      description: subtitle,
      url,
      type,
      images: [
        {
          url: imageAbs,
          width: 1200,
          height: 630,
          alt: `${title} - North Blue Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | North Blue Agency`,
      description: subtitle,
      images: [imageAbs],
    },
  };
}
