import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import { generateMetadata as baseGenerateMetadata } from "../../servicios/creacion-contenido/page";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const base = await baseGenerateMetadata({ searchParams });
  const raw = searchParams?.Location;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const canonical = `${BASE_URL}/services/creacion-contenido${
    slug ? `-${slug}` : ""
  }`;
  const canonicalEs = `${BASE_URL}/servicios/creacion-contenido${
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

export { default } from "../../servicios/creacion-contenido/page";
