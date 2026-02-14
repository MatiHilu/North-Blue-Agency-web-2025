import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { generateMetadata as baseGenerateMetadata } from "../../services/redes-sociales/page";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  // Get the base metadata (title, OG, etc.) from the ES page
  const base = await baseGenerateMetadata({ searchParams });

  // Build English canonical using the pretty URL under /services
  const raw = searchParams?.Location;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const canonical = `${BASE_URL}/services/redes-sociales${
    slug ? `-${slug}` : ""
  }`;
  const canonicalEs = `${BASE_URL}/services/redes-sociales${
    slug ? `-${slug}` : ""
  }`;

  return {
    ...base,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        es: canonicalEs,
      },
    },
    openGraph: {
      ...base.openGraph,
      url: canonical,
    },
  };
}

export { default } from "../../services/redes-sociales/page";
