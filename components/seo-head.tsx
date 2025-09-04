"use client";

import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemas?: any[];
  keywords?: string[];
  /** Sync the title to the first H1 text on the page (client-side). Default: true */
  syncWithH1?: boolean;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = "/NorthBlue-Agency.png",
  ogType = "website",
  schemas = [],
  keywords = [],
  syncWithH1 = true,
}: SEOProps) {
  // Avoid duplicating brand name if already included in the provided title
  const brand = "North Blue Agency";
  const [baseTitle, setBaseTitle] = useState(title);
  const fullTitle = useMemo(() => {
    const t = baseTitle || title;
    const hasBrand = (t || "").toLowerCase().includes(brand.toLowerCase());
    return hasBrand ? t : `${t} | ${brand}`;
  }, [baseTitle, title]);
  const baseUrl = "https://northblueagency.com";
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${baseUrl}${ogImage}`;
  const ogUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  // Client: on mount, try to read the first H1 and sync
  useEffect(() => {
    if (!syncWithH1) return;
    try {
      const h1 = document.querySelector("h1");
      const text = h1?.textContent?.trim();
      if (text && text.length > 0) {
        setBaseTitle(text);
      } else {
        setBaseTitle(title);
      }
    } catch {
      setBaseTitle(title);
    }
  }, [syncWithH1, title]);

  return (
    <Head>
      {/* Basic Meta Tags */}
      {/* SSR/initial title; will update on client if syncWithH1 is enabled */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="North Blue Agency" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content="North Blue Agency" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Schema.org Structured Data */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
