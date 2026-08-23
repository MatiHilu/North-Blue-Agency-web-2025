"use client";

import Script from "next/script";
import { BASE_URL } from "@/lib/jsonld";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import WhatsAppCTA from "@/components/whatsapp-cta";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/whatsapp";

export default function ContactClientPage() {
  return (
    <div className="min-h-screen">
      {/* Metadata via export metadata */}
      <Script
        id="schema-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact - North Blue Agency",
            url: `${BASE_URL}/contact`,
            description:
              "Contact North Blue Agency to start your project.",
            keywords:
              "contact, marketing agency, North Blue Agency, consulting",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: BASE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: `${BASE_URL}/contact`,
                },
              ],
            },
            mainEntity: {
              "@type": "Organization",
              name: "North Blue Agency",
              url: BASE_URL,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "+541130545828",
                availableLanguage: ["es", "en"],
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Let's talk about your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  next project
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are here to help you turn your vision into reality. Message us on WhatsApp and let's start building something extraordinary together.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={450}>
              <WhatsAppCTA
                message={DEFAULT_WHATSAPP_MESSAGE}
                size="lg"
                className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-2xl transform hover:scale-105 transition-all text-lg px-8 py-4"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat with us on WhatsApp
              </WhatsAppCTA>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* WhatsApp CTA */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fadeInLeft">
                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8 md:p-12 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="text-white" size={28} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">
                      Tell us about your project
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                      Send us a WhatsApp message with a few details about your project and we will get back to you shortly.
                    </p>
                    <WhatsAppCTA
                      message={DEFAULT_WHATSAPP_MESSAGE}
                      size="lg"
                      className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all h-12 text-lg px-8"
                    >
                      <MessageCircle size={20} className="mr-2" />
                      Message us on WhatsApp
                    </WhatsAppCTA>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Information & Additional Content */}
            <div className="space-y-8">
              <AnimatedSection animation="fadeInRight" delay={200}>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-gray-600">+54 11 3054 5828</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-gray-600">CABA, Argentina</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Hours</p>
                          <p className="text-gray-600">
                            Mon - Fri: 9:00 - 18:00
                          </p>
                          <p className="text-gray-600">Sat: 10:00 - 14:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="bg-gradient-to-br from-[#ff4081]/10 to-[#00b2ff]/10 p-8 rounded-xl">
                  <h4 className="font-bold text-xl mb-4">
                    Why choose us?
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#ff4081] flex-shrink-0"
                        size={20}
                      />
                      <span>Personalized strategies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#00b2ff] flex-shrink-0"
                        size={20}
                      />
                      <span>Measurable results</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#ff4081] flex-shrink-0"
                        size={20}
                      />
                      <span>Expert team</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We answer the most common questions about our services
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatedSection delay={100}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    How long does it take to see results?
                  </h3>
                  <p className="text-gray-600">
                    Results vary by service, but generally you can expect improvements in 2-4 weeks for social media and 3-6 months for SEO and long-term strategies.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Do you offer flexible contracts?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer both monthly contracts and one-time projects. We adapt to the specific needs of each client.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Do you work with companies of all sizes?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We work with startups, small businesses, and large corporations. Each strategy is customized to the size and goals of the business.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    How do you measure campaign success?
                  </h3>
                  <p className="text-gray-600">
                    We use specific KPIs for each project: web traffic, conversions, social media engagement, ROI, and more. We provide detailed monthly reports.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Don't wait any longer. Your digital transformation starts today.
              </p>
              <WhatsAppCTA
                message={DEFAULT_WHATSAPP_MESSAGE}
                size="lg"
                variant="outline"
                className="bg-white text-[#ff4081] hover:bg-gray-100 border-white text-lg px-8 py-4"
              >
                Talk to an expert on WhatsApp
              </WhatsAppCTA>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
