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
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: "North Blue Agency",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: absUrl("/North-Blue-Agency.svg"),
      width: 200,
      height: 45,
    },
    image: absUrl("/NorthBlue-Agency.png"),
    description:
      "Digital marketing agency specialized in social media management, branding, web development, and SEO. We transform your digital presence with measurable results.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.6037,
      longitude: -58.3816,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+54-11-3054-5828",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+54-11-5324-8376",
        contactType: "sales",
        availableLanguage: ["English", "Spanish"],
      },
      {
        "@type": "ContactPoint",
        email: "info@northblueagency.com",
        contactType: "customer support",
      },
    ],
    sameAs: [
      "https://www.facebook.com/northblueagency",
      "https://www.instagram.com/northblueagency",
      "https://www.linkedin.com/company/northblueagency",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analytics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Campaigns & Ads" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Content Creation" } },
      ],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "North Blue Agency",
    url: BASE_URL,
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absUrl(item.url),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absUrl(url),
    ...(image ? { image: absUrl(image) } : {}),
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    serviceType: "Digital Marketing",
  };
}

export function webPageSchema({
  name,
  description,
  url,
  breadcrumb,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absUrl(url)}#webpage`,
    url: absUrl(url),
    name,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    ...(breadcrumb
      ? {
          breadcrumb: breadcrumbSchema(breadcrumb),
        }
      : {}),
  };
}

export function caseStudySchema({
  name,
  description,
  url,
  client,
  datePublished,
}: {
  name: string;
  description: string;
  url: string;
  client: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absUrl(url)}#article`,
    headline: name,
    description,
    url: absUrl(url),
    datePublished,
    author: { "@id": `${BASE_URL}/#organization` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    about: {
      "@type": "Organization",
      name: client,
    },
  };
}
