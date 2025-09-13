"use client";
import type React from "react";

import { useState } from "react";
import Script from "next/script";
import { BASE_URL } from "@/lib/jsonld";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp, Send } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteModal from "@/components/quote-modal";
import QuoteSection from "@/components/quote-section";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Metadata } from "next";

/* export const metadata: Metadata = {
  title: "Gestión de Redes Sociales",
  description: "Construye una comunidad sólida y aumenta tu engagement",
  alternates: { canonical: "/mejora-tu-presencia-en-redes" },
  keywords: [
    "gestión de redes sociales",
    "social media",
    "community management",
    "estrategia de contenido",
    "instagram",
    "tiktok",
  ],
  openGraph: {
    title: "Gestión de Redes Sociales | North Blue Agency",
    description: "Construye una comunidad sólida y aumenta tu engagement",
    url: "https://northblueagency.com/mejora-tu-presencia-en-redes",
    type: "website",
  },
}; */

const serviceData = {
  title: "Gestión de Redes Sociales",
  subtitle: "Construye una comunidad sólida y aumenta tu engagement",
  description:
    "Nuestro servicio de gestión de redes sociales está diseñado para transformar tu presencia digital en una herramienta poderosa de crecimiento. Creamos estrategias personalizadas que conectan con tu audiencia y generan resultados medibles.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "Desde $800.000/mes",
  duration: "3-6 meses",
  features: [
    "Estrategia de contenido personalizada",
    "Creación de contenido visual y copywriting",
    "Programación y publicación automatizada",
    "Community management profesional",
    "Gestión de comentarios y mensajes",
    "Campañas publicitarias segmentadas",
    "Análisis de métricas y KPIs",
    "Reportes mensuales detallados",
  ],
  process: [
    {
      title: "Análisis inicial",
      description: "Evaluamos tu presencia actual y definimos objetivos",
    },
    {
      title: "Estrategia",
      description: "Creamos un plan de contenido personalizado",
    },
    {
      title: "Implementación",
      description: "Ejecutamos la estrategia con contenido de calidad",
    },
    {
      title: "Optimización",
      description: "Ajustamos basándonos en métricas y resultados",
    },
  ],
  benefits: [
    "Aumento del 300% en engagement promedio",
    "Crecimiento orgánico de seguidores",
    "Mayor reconocimiento de marca",
    "Generación de leads cualificados",
  ],
};

const faqs = [
  {
    question: "¿En qué redes sociales se enfocan?",
    answer:
      "Trabajamos principalmente en Instagram, Facebook, LinkedIn y TikTok. Seleccionamos las plataformas más relevantes según tu audiencia objetivo y tipo de negocio.",
  },
  {
    question: "¿Crean todo el contenido visual?",
    answer:
      "Sí, nuestro equipo creativo desarrolla todo el contenido visual incluyendo posts, stories, videos cortos y carruseles, manteniendo la coherencia con tu identidad de marca.",
  },
  {
    question: "¿Responden a comentarios y mensajes?",
    answer:
      "Absolutamente. Nuestro community management incluye respuesta a comentarios, mensajes directos y gestión de la comunidad en horarios establecidos.",
  },
];

export default function RedesSocialesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, url: window.location.href }),
      });
      if (!res.ok) throw new Error("Error enviando mensaje");
      toast({
        title: "¡Mensaje enviado!",
        description:
          "Gracias por contactarnos. Te responderemos en las próximas 24 horas.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error enviando mensaje:", error);
      toast({
        title: "Error",
        description: "Hubo un problema enviando tu mensaje. Intenta más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      {/* Metadata via export metadata */}
      <Script
        id="schema-landing-redes"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: serviceData.title,
            description: serviceData.description,
            keywords:
              "gestión de redes sociales, social media, community management, estrategia de contenido, instagram, tiktok",
            areaServed: "ES",
            provider: { "@type": "Organization", name: "North Blue Agency" },
            serviceType: "Redes Sociales",
            url: `${BASE_URL}/mejora-tu-presencia-en-redes`,
            offers: { "@type": "Offer", priceCurrency: "USD" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: BASE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Redes Sociales",
                  item: `${BASE_URL}/mejora-tu-presencia-en-redes`,
                },
              ],
            },
          }),
        }}
      />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-between">
            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {serviceData.title}
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
            <div className="container mx-auto px-4 relative z-10 ">
              <AnimatedSection animation="fadeInLeft">
                <Card className="h-full border-0 shadow-xl max-w-[550px]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Comienza a generar contenido ya!
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="border-gray-300 focus:border-[#ff4081]"
                        disabled={isSubmitting}
                      />
                      <Input
                        type="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="border-gray-300 focus:border-[#ff4081]"
                        disabled={isSubmitting}
                      />
                      <Textarea
                        placeholder="Cuéntanos sobre tu proyecto"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="border-gray-300 focus:border-[#ff4081]"
                        disabled={isSubmitting}
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          "Enviando..."
                        ) : (
                          <>
                            Enviar mensaje
                            <Send size={16} className="ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
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
                  ¿Qué incluye este servicio?
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
                      Características incluidas
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
                Nuestro proceso de trabajo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Seguimos una metodología probada para garantizar resultados
                excepcionales
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
          title={`Preguntas sobre ${serviceData.title}`}
          faqs={faqs}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para comenzar?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Contáctanos hoy y descubre cómo podemos transformar tu presencia
                digital
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 transform hover:scale-105 transition-all"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Solicitar cotización
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
