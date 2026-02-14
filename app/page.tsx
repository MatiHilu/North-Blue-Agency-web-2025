import { BASE_URL } from "@/lib/jsonld";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Smartphone,
  Palette,
  Globe,
  Megaphone,
  Lightbulb,
  Target,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import HeroButtonModal from "@/components/home-hero-button";
import HeroButtonNext from "@/components/home-hero-next-section-button";
import ServiceCard from "@/components/service-card";

export const metadata: Metadata = {
  title: {
    default: "North Blue Agency | Professional Digital Marketing",
    template: "%s | North Blue Agency",
  },
  description:
    "Digital marketing agency specialized in social media, branding, and web development. We transform your digital presence.",
  alternates: { canonical: "/" },
  keywords: [
    "digital marketing agency",
    "digital marketing",
    "North Blue Agency",
  ],
  openGraph: {
    title: "North Blue Agency | Professional Digital Marketing",
    description:
      "Digital marketing agency specialized in social media, branding, and web development. We transform your digital presence.",
    url: BASE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "North Blue Agency | Professional Digital Marketing",
    description:
      "Digital marketing agency specialized in social media, branding, and web development. We transform your digital presence.",
  },
  publisher: "North Blue Agency",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff4081]/10 to-[#00b2ff]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ lineHeight: "1.2" }}
            >
              We transform your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                digital presence
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are North Blue Agency, digital marketing specialists boosting brands towards success with innovative strategies and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <HeroButtonModal />
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-white-hover border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 md:w-[246px]"
                >
                  View portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <HeroButtonNext />
      </section>

      {/* Services Section */}
      <section id="services" className="py-36 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                services
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital marketing solutions to grow your business
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <ServiceCard
                title="Social Media"
                description="Complete social media management with strategic content that connects with your audience."
                icon={<Smartphone className="w-full h-full text-white" />}
                href="/services/redes-sociales"
                gradient="pink"
              />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ServiceCard
                title="Branding"
                description="We create unique visual identities that reflect the essence of your brand."
                icon={<Palette className="w-full h-full text-white" />}
                href="/services/branding"
                gradient="blue"
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <ServiceCard
                title="Web Development"
                description="Modern, responsive websites optimized for conversion."
                icon={<Globe className="w-full h-full text-white" />}
                href="/services/desarrollo-web"
                gradient="pink"
              />
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <ServiceCard
                title="Comprehensive Digital Marketing"
                description="Comprehensive digital marketing strategies to maximize your ROI."
                icon={<Megaphone className="w-full h-full text-white" />}
                href="/services/marketing-digital"
                gradient="blue"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12" delay={500}>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white"
              >
                View all services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {/* <AnimatedSection>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">150+</div>
                <div className="text-lg opacity-90">Proyectos completados</div>
              </div>
            </AnimatedSection> */}

            <AnimatedSection delay={100}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">100%</div>
                <div className="text-lg opacity-90">Satisfied Clients</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">5+</div>
                <div className="text-lg opacity-90">Years of Experience</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">24/7</div>
                <div className="text-lg opacity-90">Support Available</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                  North Blue?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine creativity, strategy, and technology to deliver exceptional results that drive your business growth.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Personalized strategies
                    </h3>
                    <p className="text-gray-600">
                      Each project is unique. We develop specific strategies for your goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Measurable results
                    </h3>
                    <p className="text-gray-600">
                      We use clear metrics and detailed reports to measure success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Professionals specialized in every digital marketing area.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff4081]/20 to-[#00b2ff]/20 rounded-3xl transform rotate-6"></div>
                <Card className="relative bg-white/90 backdrop-blur-xl shadow-2xl border border-white/40">
                  <CardContent className="p-8">
                    <div className="text-center">
                      {/* <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#ff4081] to-[#00b2ff] p-[2px]">
                        <div className="w-full h-full bg-white rounded-2xl grid place-items-center">
                          <Users className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] to-[#00b2ff]" />
                        </div>
                      </div> */}
                      <h3 className="text-2xl font-bold mb-3">
                        Our Work Process
                      </h3>
                      <p className="text-gray-600 mb-8">
                        We collaborate in clear stages to move fast, focusing on
                        objectives.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="group p-4 rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 hover:shadow-lg transition-all flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-lg bg-[#ff4081]/10 text-[#ff4081] flex items-center justify-center mb-3">
                            <Lightbulb className="w-5 h-5" />
                          </div>
                          <div className="font-semibold">Discovery</div>
                          <div className="text-sm text-gray-500">
                            Brief & Objectives
                          </div>
                        </div>
                        <div className="group p-4 rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 hover:shadow-lg transition-all flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-lg bg-[#6f8cff]/10 text-[#6f8cff] flex items-center justify-center mb-3">
                            <Target className="w-5 h-5" />
                          </div>
                          <div className="font-semibold">Strategy</div>
                          <div className="text-sm text-gray-500">
                            Plan & Roadmap
                          </div>
                        </div>
                        <div className="group p-4 rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 hover:shadow-lg transition-all flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-lg bg-[#00b2ff]/10 text-[#00b2ff] flex items-center justify-center mb-3">
                            <Rocket className="w-5 h-5" />
                          </div>
                          <div className="font-semibold">Execution</div>
                          <div className="text-sm text-gray-500">
                            Production & Optimization
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Link href="/services">
                          <Button
                            variant="outline"
                            className="border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white"
                          >
                            Learn about our process
                            <ArrowRight className="ml-2" size={18} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
                Ready to transform your business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us today and discover how we can take your brand to the
                next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-black hover:bg-gray-100 hover:text-[#00b2ff] border-white text-lg px-8 py-4"
                  >
                    Contact Now
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-[#ff4081] text-lg px-8 py-4"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Request a Call
                </Button> */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
