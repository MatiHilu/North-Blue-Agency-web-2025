import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemas?: any[];
  keywords?: string[];
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = "/NorthBlue-Agency.png",
  ogType = "website",
  schemas = [],
  keywords = [],
}: SEOProps) {
  const fullTitle = `${title} | North Blue Agency`;
  const baseUrl = "https://northblueagency.com";

  return (
    <Head>
      {/* Basic Meta Tags */}
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
      <meta property="og:url" content={`${baseUrl}${canonical || ""}`} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="North Blue Agency" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

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
