"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteModal from "@/components/quote-modal";
import { useState } from "react";

const serviceData = {
  title: "Desarrollo Web",
  subtitle: "Sitios web que convierten visitantes en clientes",
  description:
    "Creamos sitios web modernos, rápidos y optimizados para conversión. Utilizamos las últimas tecnologías y mejores prácticas de UX/UI para garantizar una experiencia excepcional.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "Desde $1200",
  duration: "6-12 semanas",
  features: [
    "Diseño responsivo y mobile-first",
    "Optimización para velocidad de carga",
    "SEO técnico implementado",
    "Integración con analytics",
    "Formularios de contacto avanzados",
    "CMS fácil de usar",
  ],
  process: [
    {
      title: "Planificación",
      description: "Definimos arquitectura y funcionalidades",
    },
    {
      title: "Diseño UX/UI",
      description: "Creamos wireframes y diseños visuales",
    },
    {
      title: "Desarrollo",
      description: "Programamos con tecnologías modernas",
    },
    {
      title: "Lanzamiento",
      description: "Publicamos y optimizamos el sitio",
    },
  ],
  benefits: [
    "Aumento de conversiones",
    "Posicionamiento en Google",
    "Experiencia de usuario superior",
    "Reducción en tasa de rebote",
  ],
};

const faqs = [
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer:
      "Utilizamos tecnologías modernas como Next.js, React, TypeScript, y Tailwind CSS para el frontend, y Node.js o Python para el backend, según las necesidades del proyecto.",
  },
  {
    question: "¿El sitio web será responsivo?",
    answer:
      "Absolutamente. Todos nuestros sitios web son desarrollados con un enfoque mobile-first, garantizando una experiencia óptima en todos los dispositivos.",
  },
  {
    question: "¿Incluye el hosting y dominio?",
    answer:
      "Sí, incluimos hosting por el primer año y te ayudamos con la configuración del dominio. También ofrecemos planes de mantenimiento continuo.",
  },
];

export default function DesarrolloWebPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
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

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <Link
                href="/servicios"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Volver a servicios
              </Link>

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
