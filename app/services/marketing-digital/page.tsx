import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import { BASE_URL } from "@/lib/jsonld";
// Eliminado SEOHead, usamos Metadata API
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
  title: "Holistic Digital Marketing",
  subtitle: "Complete strategies to maximize your ROI",
  description:
    "Drive sales with our comprehensive digital marketing strategies. We combine SEO, SEM, and social channels to generate qualified leads and maximize ROI.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "From $2000/month",
  duration: "6-12 months",
  features: [
    "Personalized multi-channel strategy",
    "Competitor analysis",
    "Website review and improvement",
    "Maintenance and support",
    "Social media management",
    "SEO and organic positioning",
    "SEM campaigns on Google Ads",
    "Email marketing",
    "Content marketing",
    "Retargeting and remarketing",
    "Analytics and advanced tracking",
    "Continuous optimization",
  ],
  process: [
    {
      title: "Audit",
      description: "We analyze your current digital situation",
    },
    {
      title: "Strategy",
      description: "We design a personalized comprehensive plan",
    },
    {
      title: "Execution",
      description: "We implement all planned tactics",
    },
    {
      title: "Optimization",
      description: "We continuously improve results",
    },
  ],
  benefits: [
    "Increase in qualified leads",
    "Greater online visibility",
    "Sustainable growth",
  ],
};

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Initial results are usually seen between 30-60 days, but digital marketing is a continuous process. The best results are obtained with long-term strategies of 6-12 months.",
  },
  {
    question: "Do you work with specific advertising budgets?",
    answer:
      "Yes, we adapt strategies to your available budget. We recommend a minimum of $500 monthly for advertising, but we can work with larger budgets for better results.",
  },
  {
    question: "What does tracking and analytics include?",
    answer:
      "We install tools like Google Analytics and Facebook Pixel. You will receive detailed monthly reports with key metrics and recommendations.",
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
  const canonical = `${BASE_URL}/services/marketing-digital${slugPart}`;
  const canonicalEn = `${BASE_URL}/services/marketing-digital${slugPart}`;

  return {
    title: {
      default: `${serviceData.title}${location ? ` - ${location}` : ""}`,
      template: "%s | North Blue Agency",
    },
    description: serviceData.description,
    alternates: {
      canonical,
      languages: { es: canonical, en: canonicalEn },
    },
    keywords: [
      "digital marketing",
      "multi-channel strategy",
      "SEM",
      "SEO",
      "digital advertising",
      "email marketing",
      "retargeting",
      "analytics",
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
          url: `${BASE_URL}/images/og/services-marketing-digital.png`,
          alt: `${serviceData.title} - North Blue Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} - North Blue Agency`,
      description: serviceData.description,
      images: [`${BASE_URL}/images/og/services-marketing-digital.png`],
    },
    publisher: "North Blue Agency",
  };
}
export default function MarketingDigitalPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const raw = searchParams?.Location;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const locationText = normalizeLocation(slug);
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
          title={`Questions about ${serviceData.title}`}
          faqs={faqs}
        />
        {/* CTA Section */}
        <QuoteSection
          title="Ready to get started?"
          subtitle="Contact us today and discover how we can transform your digital presence"
          buttonText="Request Quote"
        />
        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
