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
  title: "Analytics y Reportes",
  subtitle: "Toma decisiones inteligentes basadas en datos reales",
  description:
    "Implementamos sistemas de medición avanzados que te permiten entender el comportamiento de tus usuarios y el rendimiento de todas tus campañas. Convertimos datos complejos en insights accionables para optimizar tu estrategia digital.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "Desde $400/mes",
  duration: "Implementación: 1-2 semanas",
  features: [
    "Configuración de Google Analytics 4",
    "Google Tag Manager avanzado",
    "Dashboards personalizados en Looker Studio",
    "Seguimiento de conversiones",
    "Análisis de embudos de venta",
    "Reportes automáticos mensuales",
    "KPIs estratégicos por industria",
    "Recomendaciones de optimización",
  ],
  process: [
    {
      title: "Análisis inicial",
      description: "Evaluamos tus objetivos y sistemas actuales",
    },
    {
      title: "Configuración",
      description: "Implementamos tracking avanzado y herramientas",
    },
    {
      title: "Dashboards",
      description: "Creamos reportes visuales personalizados",
    },
    {
      title: "Optimización",
      description: "Analizamos datos y proporcionamos insights",
    },
  ],
  benefits: [
    "Visibilidad completa del customer journey",
    "ROI claro de todas las campañas",
    "Identificación de oportunidades de mejora",
    "Decisiones basadas en datos reales",
  ],
};

const faqs = [
  {
    question: "¿Qué herramientas de analytics utilizan?",
    answer:
      "Trabajamos principalmente con Google Analytics 4, Google Tag Manager, Looker Studio, y herramientas especializadas según la industria como Hotjar, Mixpanel o herramientas de ecommerce.",
  },
  {
    question: "¿Con qué frecuencia recibo reportes?",
    answer:
      "Proporcionamos reportes automáticos mensuales, dashboards en tiempo real, y reportes personalizados según tus necesidades específicas. También ofrecemos sesiones de revisión trimestral.",
  },
  {
    question: "¿Pueden integrar datos de diferentes plataformas?",
    answer:
      "Sí, integramos datos de múltiples fuentes como redes sociales, email marketing, CRM, plataformas de ecommerce y herramientas de publicidad para una vista unificada.",
  },
];

export default function AnalyticsPage() {
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
                href="/services"
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
                      <p className="text-gray-600 text-sm">
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
                ¿Listo para tomar decisiones inteligentes?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy y descubre cómo los datos pueden transformar tu
                estrategia digital
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-white-hover bg-white text-[#00b2ff] hover:bg-gray-100 transform hover:scale-105 transition-all"
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
