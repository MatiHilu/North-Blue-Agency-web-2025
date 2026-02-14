// Re-export the page component from the Spanish version
// In a full implementation, you might want to translate the content
// or use a dictionary for i18n
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { generateMetadata as baseGenerateMetadata } from "@/app/services/chatgpt-ads/page";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const base = await baseGenerateMetadata({ searchParams });
  const raw = searchParams?.Location;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const canonical = `${BASE_URL}/services/chatgpt-ads${
    slug ? `-${slug}` : ""
  }`;
  const canonicalEs = `${BASE_URL}/services/chatgpt-ads${
    slug ? `-${slug}` : ""
  }`;

  return {
    ...base,
    alternates: {
      canonical,
      languages: { en: canonical, es: canonicalEs },
    },
    openGraph: {
      ...base.openGraph,
      url: canonical,
    },
  };
}

export { default } from "@/app/services/chatgpt-ads/page";
