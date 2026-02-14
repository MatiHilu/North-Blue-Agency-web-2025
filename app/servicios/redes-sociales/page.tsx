import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import { BASE_URL } from "@/lib/jsonld";
import QuoteSection from "@/components/quote-section";
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
  title: "Social Media Management",
  subtitle: "Build a strong community and increase your engagement",
  description:
    "Transform your digital presence with our social media management. We create personalized strategies to build community, increase engagement, and drive growth.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "From $800/mo",
  duration: "3-6 months",
  features: [
    "Personalized content strategy",
    "Visual content creation and copywriting",
    "Automated scheduling and publishing",
    "Professional community management",
    "Comment and message management",
    "Segmented ad campaigns",
    "Metrics and KPI analysis",
    "Detailed monthly reports",
  ],
  process: [
    {
      title: "Initial analysis",
      description: "We evaluate your current presence and define goals",
    },
    {
      title: "Strategy",
      description: "We create a personalized content plan",
    },
    {
      title: "Implementation",
      description: "We execute the strategy with quality content",
    },
    {
      title: "Optimization",
      description: "We adjust based on metrics and results",
    },
  ],
  benefits: [
    "300% increase in average engagement",
    "Organic follower growth",
    "Higher brand recognition",
    "Qualified lead generation",
  ],
};

const faqs = [
  {
    question: "Which social networks do you focus on?",
    answer:
      "We work mainly on Instagram, Facebook, LinkedIn, and TikTok. We select the most relevant platforms according to your target audience and business type.",
  },
  {
    question: "Do you create all visual content?",
    answer:
      "Yes, our creative team develops all visual content including posts, stories, short videos, and carousels, maintaining consistency with your brand identity.",
  },
  {
    question: "Do you reply to comments and messages?",
    answer:
      "Absolutely. Our community management includes responding to comments, direct messages, and community management during established hours.",
  },
];

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const raw = searchParams?.Location;
  const locationRaw = Array.isArray(raw) ? raw[0] : raw;
  const location = normalizeLocation(locationRaw);
  const slugPart = locationRaw ? `-${locationRaw}` : "";
  const canonical = `${BASE_URL}/services/redes-sociales${slugPart}`;
  const canonicalEn = `${BASE_URL}/services/redes-sociales${slugPart}`;

  return {
    title: {
      default: `${serviceData.title}${location ? ` - ${location}` : ""}`,
      template: "%s | North Blue Agency",
    },
    description:
      "Our social media management service is designed to transform your digital presence into a powerful growth tool.",
    alternates: {
      canonical,
      languages: {
        es: canonical,
        en: canonicalEn,
      },
    },
    keywords: [
      "social media management",
      "community management",
      "social media marketing",
      "social media content",
      "social media strategy",
      "ads strategies",
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
          url: `${BASE_URL}/images/og/services-redes-sociales.png`,
          alt: `${serviceData.title} - North Blue Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} - North Blue Agency`,
      description: serviceData.description,
      images: [`${BASE_URL}/images/og/services-redes-sociales.png`],
    },
    publisher: "North Blue Agency",
  };
}

type RedesSocialesPageProps = {
  Location?: string;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function RedesSocialesPage({
  Location,
  searchParams,
}: RedesSocialesPageProps) {
  const raw = searchParams?.Location;
  const locationRaw = Array.isArray(raw) ? raw[0] : raw;
  const effectiveLocation = Location ?? locationRaw;
  const locationText = normalizeLocation(effectiveLocation);
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div>
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
                        <span className="font-semibold">
                          {serviceData.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight">
                <Image
                  src="/gestion-redes-sociales.png"
                  title={serviceData.title}
                  alt={serviceData.title}
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </AnimatedSection>
            </div>
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
                      Included features
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
                Our work process
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
                      <p className="text-gray-600 text-sm max-w-[200px] mx-auto">
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
          buttonText="Request quote"
        />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
