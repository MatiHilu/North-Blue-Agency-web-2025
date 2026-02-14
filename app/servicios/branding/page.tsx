import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import { QuoteSection } from "@/components/quote-section";
import { BASE_URL } from "@/lib/jsonld";
// Migrado a Metadata API
import type { Metadata } from "next";

function normalizeLocation(value?: string) {
  if (!value) return undefined;
  const spaced = value.replace(/-/g, " ");
  return spaced
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const serviceData = {
  title: "Branding & Visual Identity",
  subtitle: "Create a unique identity that connects with your audience",
  description:
    "Create a unique visual identity that reflects your brand essence. We develop logos and guidelines to differentiate your business across all touchpoints.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "From $600",
  duration: "2-3 weeks",
  features: [
    "Market & competitor research",
    "Brand personality definition",
    "Logo design & variations",
    "Strategic color palette",
    "Corporate typography",
    "Visual identity guidelines",
    "Stationery applications",
    "Digital adaptations",
  ],
  process: [
    {
      title: "Discovery",
      description: "We understand your business, values, and goals",
    },
    {
      title: "Conceptualization",
      description: "We develop unique creative concepts",
    },
    {
      title: "Design",
      description: "We create the complete visual identity",
    },
    {
      title: "Implementation",
      description: "We apply the brand across all materials",
    },
  ],
  benefits: [
    "Increased brand recognition",
    "Competitive differentiation",
    "Consistency in communications",
    "Increase in perceived value",
  ],
};

const faqs = [
  {
    question: "Does this include brand registration?",
    answer:
      "We do not include legal brand registration, but we do check availability.",
  },
  {
    question: "What if I don't like the initial design?",
    answer:
      "We include up to 3 rounds of revisions at no extra cost. We work with you until you are completely satisfied with the final result.",
  },
  {
    question: "Do you deliver files in different formats?",
    answer:
      "Yes, we deliver all files in vector (AI), raster (PNG, JPG), and PDF formats, optimized for digital use.",
  },
];

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const raw = searchParams?.Location;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const location = normalizeLocation(slug);
  const slugPart = slug ? `-${slug}` : "";
  const canonical = `${BASE_URL}/services/branding${slugPart}`;
  const canonicalEn = `${BASE_URL}/services/branding${slugPart}`;

  return {
    title: {
      default: `${serviceData.title}${location ? ` - ${location}` : ""}`,
      template: "%s | North Blue Agency",
    },
    description: serviceData.description,
    alternates: {
      canonical,
      languages: {
        es: canonical,
        en: canonicalEn,
      },
    },
    keywords: [
      "branding",
      "visual identity",
      "brand design",
      "brand guidelines",
      "logo",
      "color palette",
      "North Blue Agency",
    ],
    openGraph: {
      title: `${serviceData.title}${
        location ? ` - ${location}` : ""
      } - North Blue Agency`,
      description: serviceData.description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/og/services-branding.png`,
          alt: `${serviceData.title} - North Blue Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} - North Blue Agency`,
      description: serviceData.description,
      images: [`${BASE_URL}/images/og/services-branding.png`],
    },
    publisher: "North Blue Agency",
  };
}

export default function BrandingPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const raw = searchParams?.Location;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const locationText = normalizeLocation(slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.title,
    description: serviceData.description,
    keywords: "branding, visual identity, brand design",
    areaServed: "ES",
    provider: { "@type": "Organization", name: "North Blue Agency" },
    serviceType: "Branding",
    url: `${BASE_URL}/services/branding`,
    offers: { "@type": "Offer", priceCurrency: "USD" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${BASE_URL}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: serviceData.title,
          item: `${BASE_URL}/services/branding`,
        },
      ],
    },
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <section
          className={`py-20 bg-gradient-to-br ${serviceData.gradient} text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <Link
                href="/services"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to services
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {serviceData.title}
                {locationText ? ` - ${locationText}` : ""}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
                {serviceData.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span className="font-semibold">
                      {serviceData.duration}
                    </span>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={20} />
                    <span className="font-semibold">{serviceData.price}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What does this service include?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {serviceData.description}
                </p>

                <div className="space-y-4">
                  {serviceData.benefits.map(
                    (benefit: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="text-white" size={14} />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    )
                  )}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Included Features
                    </h3>
                    <div className="space-y-4">
                      {serviceData.features.map(
                        (feature: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="text-white" size={12} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Work Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure exceptional results
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceData.process.map((step: any, index: number) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 max-w-[200px] mx-auto text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title={`Preguntas sobre ${serviceData.title}`}
          faqs={faqs}
        />

        <QuoteSection
          title="¿Listo para comenzar?"
          subtitle="Contáctanos hoy y descubre cómo podemos transformar tu presencia
                digital"
          buttonText="Solicitar cotización"
        />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
