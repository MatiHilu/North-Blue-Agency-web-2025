import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Smartphone,
  Palette,
  Globe,
  Megaphone,
  Search,
  BarChart3,
  Target,
  Keyboard,
  Bot,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import { createCanonicalUrl, normalizeCanonicalPath } from "@/lib/canonical";
import { BASE_URL } from "@/lib/jsonld";
// Migrado a Metadata API
import type { Metadata } from "next";
import QuoteSection from "@/components/quote-section";

const services = [
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "We create and manage strategic content for all your social platforms, increasing engagement and building a strong community around your brand.",
    icon: <Smartphone className="w-full h-full" />,
    features: [
      "Content Strategy",
      "Community Management",
      "Social Ads",
      "Analysis & Reports",
    ],
    gradient: "from-[#ff4081] to-[#00b2ff]",
    price: "From $800/month",
  },
  {
    id: "branding",
    title: "Branding & Visual Identity",
    description:
      "We develop unique visual identities that reflect your brand essence, from logo design to full application across all touchpoints.",
    icon: <Palette className="w-full h-full" />,
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Corporate Stationery",
      "Digital Applications",
    ],
    gradient: "from-[#00b2ff] to-[#ff4081]",
    price: "From $1,500",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "We create modern, responsive, conversion-optimized websites using the latest technologies and UX/UI best practices.",
    icon: <Globe className="w-full h-full" />,
    features: [
      "Responsive Design",
      "SEO Optimization",
      "E-commerce",
      "Maintenance",
    ],
    gradient: "from-[#ff4081] to-[#00b2ff]",
    price: "From $2,000",
  },
  {
    id: "digital-marketing",
    title: "Comprehensive Digital Marketing",
    description:
      "Complete digital marketing strategies including SEO, SEM, email marketing, and automation to maximize your return on investment.",
    icon: <Megaphone className="w-full h-full" />,
    features: [
      "SEO/SEM",
      "Email Marketing",
      "Marketing Automation",
      "Analytics",
    ],
    gradient: "from-[#00b2ff] to-[#ff4081]",
    price: "From $1,200/month",
  },
  {
    id: "seo",
    title: "SEO & Positioning",
    description:
      "We optimize your website to appear in top search results, increasing organic visibility and qualified traffic.",
    icon: <Search className="w-full h-full" />,
    features: [
      "SEO Audit",
      "On-page Optimization",
      "Link Building",
      "Monthly Reports",
    ],
    gradient: "from-[#ff4081] to-[#00b2ff]",
    price: "From $600/month",
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description:
      "We implement advanced measurement systems to track performance across all your campaigns and make data-driven decisions.",
    icon: <BarChart3 className="w-full h-full" />,
    features: [
      "Google Analytics",
      "Custom Dashboards",
      "Automated Reporting",
      "Strategic KPIs",
    ],
    gradient: "from-[#00b2ff] to-[#ff4081]",
    price: "From $400/month",
  },
  {
    id: "ads-campaigns",
    title: "Campaigns & Ads",
    description:
      "We design and execute highly effective digital advertising campaigns on Google Ads, Facebook Ads, Instagram, and other platforms to maximize your ROI.",
    icon: <Target className="w-full h-full" />,
    features: [
      "Google Ads",
      "Facebook & Instagram Ads",
      "Remarketing Campaigns",
      "ROI Optimization",
    ],
    gradient: "from-[#ff4081] to-[#00b2ff]",
    price: "From $800/month + ad budget",
  },
  {
    id: "chatgpt-ads",
    title: "ChatGPT Advertising",
    description: "Advertise directly in ChatGPT responses. Position your brand in the new era of conversational search.",
    icon: <Bot className="w-full h-full" />,
    features: [
      "ChatGPT Ads",
      "Sponsored Responses",
      "High Intent Traffic",
      "Early Adopter Advantage",
    ],
    gradient: "from-[#10a37f] to-[#007aff]",
    price: "From $1500/month + budget",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Creative content for social media",
    icon: <Keyboard className="w-full h-full" />,
    features: [
      "Engaging Static Posts",
      "Animated Stories",
      "Short Videos (Reels, TikToks)",
      "Informational Carousels",
      "Professional Image & Video Editing",
    ],
    gradient: "from-[#00b2ff] to-[#ff4081]",
    price: "From $150/post",
  },
];

export const createServicesMetadata = (
  canonicalPath: string = "/services"
): Metadata => {
  const normalizedCanonical = normalizeCanonicalPath(canonicalPath);
  const canonicalUrl = createCanonicalUrl(normalizedCanonical);

  return {
    title: {
      default: "Our Services - Digital Marketing Solutions",
      template: "%s | North Blue Agency",
    },
    description:
      "North Blue Agency Services: social media management, branding, web development, digital marketing, SEO, analytics, and content creation.",
    alternates: { canonical: normalizedCanonical },
    keywords: [
      "digital marketing services",
      "social media management",
      "branding",
      "web development",
      "SEO",
      "analytics",
      "North Blue Agency",
    ],
    openGraph: {
      title: "Services - North Blue Agency",
      description:
        "North Blue Agency Services: social media management, branding, web development, digital marketing, SEO, analytics, and content creation.",
      url: canonicalUrl,
      siteName: "North Blue Agency",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${BASE_URL}/og-images/services.jpg`,
          width: 1200,
          height: 630,
          alt: "North Blue Agency Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Services - North Blue Agency",
      description:
        "North Blue Agency Services: social media management, branding, web development, digital marketing, SEO, analytics, and content creation.",
    },
    publisher: "North Blue Agency",
    authors: [{ name: "North Blue Agency", url: BASE_URL }],
  };
};

export const metadata = createServicesMetadata();

/**
 * JSON-LD structured data matching this "Services" page.
 * Exported so it can be injected into the page (<script type="application/ld+json">) if needed.
 */
export const createServicesSchema = (canonicalPath: string = "/services") => {
  const normalizedCanonical = normalizeCanonicalPath(canonicalPath);
  const pageUrl = createCanonicalUrl(normalizedCanonical);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "North Blue Agency",
        url: BASE_URL,
        sameAs: [BASE_URL],
        description:
          "Digital marketing agency specialized in social media, branding, and web development.",
      },
      {
        "@type": "WebPage",
        name: "Services - North Blue Agency",
        url: pageUrl,
        description:
          "North Blue Agency Services list: social media management, branding, web development, digital marketing, SEO, analytics, and content creation.",
        inLanguage: "en",
        isPartOf: {
          "@type": "WebSite",
          url: BASE_URL,
          name: "North Blue Agency",
        },
      },
      // Services mapped from the page's `services` array
      ...services.map((s) => {
        const serviceUrl = `${pageUrl}/${s.id}`;

        return {
          "@type": "Service",
          name: s.title,
          serviceType: s.title,
          description: s.description,
          url: serviceUrl,
          provider: {
            "@type": "Organization",
            name: "North Blue Agency",
            url: BASE_URL,
          },
          offers: s.price
            ? {
                "@type": "Offer",
                price: s.price,
                priceCurrency: "USD",
                url: serviceUrl,
              }
            : undefined,
        };
      }),
    ],
  } as const;
};

export const servicesSchema = createServicesSchema();

export default function ServicesPage() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions designed to grow your business and maximize your online presence
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.id} delay={index * 100}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div
                        className={`bg-gradient-to-br ${service.gradient} p-6 text-white`}
                      >
                        <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {service.title}
                        </h3>
                        {/* <p className="text-sm opacity-90">{service.price}</p> */}
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-gray-800">
                            Includes:
                          </h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-center"
                              >
                                <div className="w-1.5 h-1.5 bg-[#ff4081] rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={`/services/${service.id}`}
                          className="mt-auto"
                        >
                          <Button
                            variant="outline"
                            className="w-full group/btn border-gray-300 hover:border-[#ff4081] hover:text-[#ff4081] transition-all"
                          >
                            View detail
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                            />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={[
            {
              question:
                "How long does it take to see results in digital marketing?",
              answer:
                "Results vary by service. In social media, you can see engagement in 2-4 weeks, SEO takes 3-6 months, while paid advertising can generate immediate results.",
            },
            {
              question:
                "Do you offer long-term contracts or project-based work?",
              answer:
                "We offer both. We have flexible monthly contracts for ongoing services like social media and SEO, as well as one-time projects for branding and web development.",
            },
            {
              question: "What do your result reports include?",
              answer:
                "Our reports include key metrics such as web traffic, social media engagement, conversions, ROI, and optimization recommendations. We send them monthly with review meetings.",
            },
            {
              question: "Do you work with businesses of all sizes?",
              answer:
                "Yes, we work with everyone from startups and small businesses to large corporations. We adapt our strategies and budgets to the specific needs of each client.",
            },
            {
              question: "What happens if I am not satisfied with the results?",
              answer:
                "We offer a satisfaction guarantee. If you are not satisfied within the first 30 days, we work together to adjust the strategy or refund your investment.",
            },
          ]}
        />

        {/* CTA Section */}
        <QuoteSection
          title="Can't find what you're looking for?"
          subtitle="We create personalized solutions for each client. Contact us and tell us about your project."
          buttonText="Request custom quote"
        />
        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
