"use client";

import { useState } from "react";
import Script from "next/script";
import { BASE_URL } from "@/lib/jsonld";
import SEOHead from "@/components/seo-head";
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
import ServiceCard from "@/components/service-card";
import EnhancedContactModal from "@/components/enhanced-contact-modal";

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Inicio | North Blue Agency",
      url: BASE_URL,
      description:
        "Agencia de marketing digital especializada en redes sociales, branding y desarrollo web. Transformamos tu presencia digital.",
      keywords:
        "agencia de marketing digital, marketing digital profesional, North Blue Agency",
      isPartOf: { "@type": "WebSite", url: BASE_URL },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="North Blue Agency - Marketing Digital Profesional"
        description="Agencia de marketing digital especializada en redes sociales, branding y desarrollo web. Transformamos tu presencia digital."
        canonical="/"
        syncWithH1={false}
        keywords={[
          "agencia de marketing digital",
          "marketing digital profesional",
          "North Blue Agency",
        ]}
      />
      {homeSchemas.map((schema, i) => (
        <Script
          key={i}
          id={`schema-home-${i}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Contact Modal */}
      <EnhancedContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff4081]/10 to-[#00b2ff]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            {/* <AnimatedSection> */}
            <h1
              className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ lineHeight: "1.2" }}
            >
              Transformamos tu
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                presencia digital
              </span>
            </h1>
            {/* </AnimatedSection> */}

            {/*  <AnimatedSection delay={300}> */}
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Somos North Blue Agency, especialistas en marketing digital que
              impulsan marcas hacia el éxito con estrategias innovadoras y
              resultados medibles.
            </p>
            {/* </AnimatedSection> */}

            {/* <AnimatedSection delay={600}> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-2xl transform hover:scale-105 transition-all text-lg px-8 py-4 w-[250px]"
                onClick={() => setIsContactModalOpen(true)}
              >
                Comenzar proyecto
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-white-hover border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 md:w-[246px]"
                >
                  Ver portfolio
                </Button>
              </Link>
            </div>
            {/* </AnimatedSection> */}
          </div>
        </div>

        {/* Scroll Indicator: make it clickable & smooth-scroll to #services */}
        <div
          className="absolute bottom-8 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-36 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                servicios
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de marketing digital para hacer
              crecer tu negocio
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <ServiceCard
                title="Redes Sociales"
                description="Gestión completa de redes sociales con contenido estratégico que conecta con tu audiencia."
                icon={<Smartphone className="w-full h-full text-white" />}
                href="/servicios/redes-sociales"
                gradient="pink"
              />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <ServiceCard
                title="Branding"
                description="Creamos identidades visuales únicas que reflejan la esencia de tu marca."
                icon={<Palette className="w-full h-full text-white" />}
                href="/servicios/branding"
                gradient="blue"
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <ServiceCard
                title="Desarrollo Web"
                description="Sitios web modernos, responsivos y optimizados para conversión."
                icon={<Globe className="w-full h-full text-white" />}
                href="/servicios/desarrollo-web"
                gradient="pink"
              />
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <ServiceCard
                title="Marketing Digital Integral"
                description="Estrategias integrales de marketing digital para maximizar tu ROI."
                icon={<Megaphone className="w-full h-full text-white" />}
                href="/servicios/marketing-digital"
                gradient="blue"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12" delay={500}>
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white"
              >
                Ver todos los servicios
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
                <div className="text-4xl md:text-5xl font-bold">98%</div>
                <div className="text-lg opacity-90">Clientes satisfechos</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">5+</div>
                <div className="text-lg opacity-90">Años de experiencia</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">24/7</div>
                <div className="text-lg opacity-90">Soporte disponible</div>
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
                ¿Por qué elegir{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                  North Blue?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Combinamos creatividad, estrategia y tecnología para entregar
                resultados excepcionales que impulsan el crecimiento de tu
                negocio.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Estrategias personalizadas
                    </h3>
                    <p className="text-gray-600">
                      Cada proyecto es único. Desarrollamos estrategias
                      específicas para tus objetivos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Resultados medibles
                    </h3>
                    <p className="text-gray-600">
                      Utilizamos métricas claras y reportes detallados para
                      medir el éxito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Equipo experto</h3>
                    <p className="text-gray-600">
                      Profesionales especializados en cada área del marketing
                      digital.
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
                        Nuestro proceso de trabajo
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Colaboramos en etapas claras para avanzar rápido, con
                        foco en objetivos.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="group p-4 rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 hover:shadow-lg transition-all flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-lg bg-[#ff4081]/10 text-[#ff4081] flex items-center justify-center mb-3">
                            <Lightbulb className="w-5 h-5" />
                          </div>
                          <div className="font-semibold">Descubrimiento</div>
                          <div className="text-sm text-gray-500">
                            Brief y objetivos
                          </div>
                        </div>
                        <div className="group p-4 rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 hover:shadow-lg transition-all flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-lg bg-[#6f8cff]/10 text-[#6f8cff] flex items-center justify-center mb-3">
                            <Target className="w-5 h-5" />
                          </div>
                          <div className="font-semibold">Estrategia</div>
                          <div className="text-sm text-gray-500">
                            Plan y roadmap
                          </div>
                        </div>
                        <div className="group p-4 rounded-xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 hover:shadow-lg transition-all flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-lg bg-[#00b2ff]/10 text-[#00b2ff] flex items-center justify-center mb-3">
                            <Rocket className="w-5 h-5" />
                          </div>
                          <div className="font-semibold">Ejecución</div>
                          <div className="text-sm text-gray-500">
                            Producción y optimización
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <Link href="/servicios">
                          <Button
                            variant="outline"
                            className="border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white"
                          >
                            Conocer el proceso
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
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contáctanos hoy y descubre cómo podemos llevar tu marca al
                siguiente nivel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-black hover:bg-gray-100 hover:text-[#00b2ff] border-white text-lg px-8 py-4"
                  >
                    Contactar ahora
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-[#ff4081] text-lg px-8 py-4"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Solicitar llamada
                </Button> */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
