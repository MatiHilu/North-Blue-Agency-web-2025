// Shared JSON-LD helpers
export const BASE_URL = "https://northblueagency.com";

export function absUrl(url: string): string {
  if (!url) return BASE_URL;
  if (/^https?:\/\//i.test(url)) return url;
  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "North Blue Agency",
    url: BASE_URL,
    logo: absUrl("/North-Blue-Agency.svg"),
    sameAs: [
      "https://www.facebook.com/northblueagency",
      "https://www.instagram.com/northblueagency",
      "https://www.linkedin.com/company/northblueagency",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "North Blue Agency",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
