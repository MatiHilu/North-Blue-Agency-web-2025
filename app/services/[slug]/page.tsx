"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteModal from "@/components/quote-modal";
import CallModal from "@/components/call-modal";
import { useState } from "react";

// Service data - in a real app, this would come from a CMS or API
const serviceData: Record<string, any> = {
  "redes-sociales": {
    title: "Gestión de Redes Sociales",
    subtitle: "Construye una comunidad sólida y aumenta tu engagement",
    description:
      "Nuestro servicio de gestión de redes sociales está diseñado para transformar tu presencia digital en una herramienta poderosa de crecimiento. Creamos estrategias personalizadas que conectan con tu audiencia y generan resultados medibles.",
    gradient: "from-[#ff4081] to-[#ff6b9d]",
    price: "Desde $800/mes",
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
  },
  branding: {
    title: "Branding e Identidad Visual",
    subtitle: "Crea una identidad única que conecte con tu audiencia",
    description:
      "Desarrollamos identidades visuales completas que reflejan la esencia de tu marca y la diferencian en el mercado. Desde el concepto inicial hasta la aplicación en todos los puntos de contacto.",
    gradient: "from-[#00b2ff] to-[#33c3ff]",
    price: "Desde $1,500",
    duration: "4-8 semanas",
    features: [
      "Investigación de mercado y competencia",
      "Definición de personalidad de marca",
      "Diseño de logotipo y variaciones",
      "Paleta de colores estratégica",
      "Tipografías corporativas",
      "Manual de identidad visual",
      "Aplicaciones en papelería",
      "Adaptaciones digitales",
    ],
    process: [
      {
        title: "Descubrimiento",
        description: "Entendemos tu negocio, valores y objetivos",
      },
      {
        title: "Conceptualización",
        description: "Desarrollamos conceptos creativos únicos",
      },
      {
        title: "Diseño",
        description: "Creamos la identidad visual completa",
      },
      {
        title: "Implementación",
        description: "Aplicamos la marca en todos los materiales",
      },
    ],
    benefits: [
      "Mayor reconocimiento de marca",
      "Diferenciación competitiva",
      "Coherencia en comunicaciones",
      "Aumento en valor percibido",
    ],
  },
  "desarrollo-web": {
    title: "Desarrollo Web",
    subtitle: "Sitios web que convierten visitantes en clientes",
    description:
      "Creamos sitios web modernos, rápidos y optimizados para conversión. Utilizamos las últimas tecnologías y mejores prácticas de UX/UI para garantizar una experiencia excepcional.",
    gradient: "from-[#ff4081] to-[#ff6b9d]",
    price: "Desde $2,000",
    duration: "6-12 semanas",
    features: [
      "Diseño responsivo y mobile-first",
      "Optimización para velocidad de carga",
      "SEO técnico implementado",
      "Integración con analytics",
      "Formularios de contacto avanzados",
      "CMS fácil de usar",
      "Certificado SSL incluido",
      "Hosting y mantenimiento",
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
      "Aumento del 250% en conversiones",
      "Mejor posicionamiento en Google",
      "Experiencia de usuario superior",
      "Reducción en tasa de rebote",
    ],
  },
  "marketing-digital": {
    title: "Marketing Digital Integral",
    subtitle: "Estrategias completas para maximizar tu ROI",
    description:
      "Implementamos estrategias integrales de marketing digital que combinan múltiples canales para generar leads cualificados y aumentar las ventas de tu negocio.",
    gradient: "from-[#00b2ff] to-[#33c3ff]",
    price: "Desde $1,200/mes",
    duration: "6-12 meses",
    features: [
      "Estrategia multicanal personalizada",
      "SEO y posicionamiento orgánico",
      "Campañas SEM en Google Ads",
      "Email marketing automatizado",
      "Marketing de contenidos",
      "Retargeting y remarketing",
      "Analytics y seguimiento avanzado",
      "Optimización continua",
    ],
    process: [
      {
        title: "Auditoría",
        description: "Analizamos tu situación digital actual",
      },
      {
        title: "Estrategia",
        description: "Diseñamos un plan integral personalizado",
      },
      {
        title: "Ejecución",
        description: "Implementamos todas las tácticas planificadas",
      },
      {
        title: "Optimización",
        description: "Mejoramos continuamente los resultados",
      },
    ],
    benefits: [
      "ROI promedio del 400%",
      "Aumento en leads cualificados",
      "Mayor visibilidad online",
      "Crecimiento sostenible",
    ],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceData[slug];

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const getServiceFAQs = (serviceSlug: string) => {
    const faqData: Record<string, any> = {
      "redes-sociales": [
        {
          question: "¿En qué redes sociales se enfocan?",
          answer:
            "Trabajamos principalmente en Instagram, Facebook, LinkedIn, TikTok y Twitter. Seleccionamos las plataformas más relevantes según tu audiencia objetivo y tipo de negocio.",
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
      ],
      branding: [
        {
          question: "¿Incluye el registro de marca?",
          answer:
            "No incluimos el registro legal de marca, pero sí verificamos disponibilidad y te asesoramos sobre el proceso. Podemos recomendarte abogados especializados si lo necesitas.",
        },
        {
          question: "¿Qué pasa si no me gusta el diseño inicial?",
          answer:
            "Incluimos hasta 3 rondas de revisiones sin costo adicional. Trabajamos contigo hasta que estés completamente satisfecho con el resultado final.",
        },
        {
          question: "¿Entregan archivos en diferentes formatos?",
          answer:
            "Sí, entregamos todos los archivos en formatos vectoriales (AI, EPS), rasterizados (PNG, JPG) y PDF, optimizados para uso digital e impreso.",
        },
      ],
    };

    return faqData[serviceSlug] || [];
  };

  if (!service) {
    return (
      <div className="min-h-[95vh] pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center ">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Servicio no encontrado
          </h1>
          <Link href="/services">
            <Button variant="secondary">Volver a servicios</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <section
          className={`py-20 bg-gradient-to-br ${service.gradient} text-white relative overflow-hidden`}
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
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
                {service.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span className="font-semibold">{service.duration}</span>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={20} />
                    <span className="font-semibold">{service.price}</span>
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
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Características incluidas
                    </h3>
                    <div className="space-y-4">
                      {service.features.map(
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
              {service.process.map((step: any, index: number) => (
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
          title={`Preguntas sobre ${service.title}`}
          faqs={getServiceFAQs(slug)}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para comenzar?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
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
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-white-hover border-white text-white hover:bg-white hover:text-[#ff4081]"
                  onClick={() => setIsCallModalOpen(true)}
                >
                  Agendar consulta gratuita
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
