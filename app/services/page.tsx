"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Smartphone,
  Palette,
  Globe,
  Megaphone,
  Search,
  BarChart3,
  Target,
  Keyboard,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import { useState } from "react";
import EnhancedContactModal from "@/components/enhanced-contact-modal";

const services = [
  {
    id: "redes-sociales",
    title: "Gestión de Redes Sociales",
    description:
      "Creamos y gestionamos contenido estratégico para todas tus plataformas sociales, aumentando el engagement y construyendo una comunidad sólida alrededor de tu marca.",
    icon: <Smartphone className="w-full h-full" />,
    features: [
      "Estrategia de contenido",
      "Community management",
      "Publicidad en redes",
      "Análisis y reportes",
    ],
    gradient: "from-[#ff4081] to-[#ff6b9d]",
    price: "Desde $800/mes",
  },
  {
    id: "branding",
    title: "Branding e Identidad Visual",
    description:
      "Desarrollamos identidades visuales únicas que reflejan la esencia de tu marca, desde el logo hasta la aplicación completa en todos los puntos de contacto.",
    icon: <Palette className="w-full h-full" />,
    features: [
      "Diseño de logo",
      "Manual de marca",
      "Papelería corporativa",
      "Aplicaciones digitales",
    ],
    gradient: "from-[#00b2ff] to-[#33c3ff]",
    price: "Desde $1,500",
  },
  {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos, responsivos y optimizados para conversión, utilizando las últimas tecnologías y mejores prácticas de UX/UI.",
    icon: <Globe className="w-full h-full" />,
    features: [
      "Diseño responsivo",
      "Optimización SEO",
      "E-commerce",
      "Mantenimiento",
    ],
    gradient: "from-[#ff4081] to-[#ff6b9d]",
    price: "Desde $2,000",
  },
  {
    id: "marketing-digital",
    title: "Marketing Digital Integral",
    description:
      "Estrategias completas de marketing digital que incluyen SEO, SEM, email marketing y automatización para maximizar tu retorno de inversión.",
    icon: <Megaphone className="w-full h-full" />,
    features: [
      "SEO/SEM",
      "Email marketing",
      "Marketing automation",
      "Analytics",
    ],
    gradient: "from-[#00b2ff] to-[#33c3ff]",
    price: "Desde $1,200/mes",
  },
  {
    id: "seo",
    title: "SEO y Posicionamiento",
    description:
      "Optimizamos tu sitio web para aparecer en los primeros resultados de búsqueda, aumentando la visibilidad orgánica y el tráfico cualificado.",
    icon: <Search className="w-full h-full" />,
    features: [
      "Auditoría SEO",
      "Optimización on-page",
      "Link building",
      "Reportes mensuales",
    ],
    gradient: "from-[#ff4081] to-[#ff6b9d]",
    price: "Desde $600/mes",
  },
  {
    id: "analytics",
    title: "Analytics y Reportes",
    description:
      "Implementamos sistemas de medición avanzados para trackear el rendimiento de todas tus campañas y tomar decisiones basadas en datos.",
    icon: <BarChart3 className="w-full h-full" />,
    features: [
      "Google Analytics",
      "Dashboards personalizados",
      "Reportes automáticos",
      "KPIs estratégicos",
    ],
    gradient: "from-[#00b2ff] to-[#33c3ff]",
    price: "Desde $400/mes",
  },
  {
    id: "campanas-ads",
    title: "Campañas y Ads",
    description:
      "Diseñamos y ejecutamos campañas publicitarias digitales altamente efectivas en Google Ads, Facebook Ads, Instagram y otras plataformas para maximizar tu ROI.",
    icon: <Target className="w-full h-full" />,
    features: [
      "Google Ads",
      "Facebook e Instagram Ads",
      "Campañas de remarketing",
      "Optimización de ROI",
    ],
    gradient: "from-[#ff4081] to-[#ff6b9d]",
    price: "Desde $800/mes + presupuesto publicitario",
  },
  {
    id: "diseno-grafico",
    title: "Creación de Contenido",
    description: "Contenido creativo para redes sociales",
    icon: <Keyboard className="w-full h-full" />,
    features: [
      "Publicaciones estáticas atractivas",
      "Historias animadas",
      "Videos cortos (Reels, TikToks)",
      "Carruseles informativos",
      "Edición profesional de imágenes y videos",
    ],
    gradient: "from-[#ff4081] to-[#00b2ff]",
    price: "Desde $150/publicación",
  },
];

export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <EnhancedContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nuestros{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  Servicios
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Soluciones integrales de marketing digital diseñadas para hacer
                crecer tu negocio y maximizar tu presencia online
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.id} delay={index * 100}>
                  <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div
                        className={`bg-gradient-to-br ${service.gradient} p-6 text-white`}
                      >
                        <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm opacity-90">{service.price}</p>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-gray-800">
                            Incluye:
                          </h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-center"
                              >
                                <div className="w-1.5 h-1.5 bg-[#ff4081] rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={`/services/${service.id}`}
                          className="mt-auto"
                        >
                          <Button
                            variant="outline"
                            className="w-full group/btn border-gray-300 hover:border-[#ff4081] hover:text-[#ff4081] transition-all"
                          >
                            Ver detalles
                            <ArrowRight
                              size={16}
                              className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                            />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={[
            {
              question:
                "¿Cuánto tiempo toma ver resultados en marketing digital?",
              answer:
                "Los resultados varían según el servicio. En redes sociales puedes ver engagement en 2-4 semanas, SEO toma 3-6 meses, mientras que la publicidad pagada puede generar resultados inmediatos.",
            },
            {
              question:
                "¿Ofrecen contratos a largo plazo o trabajo por proyecto?",
              answer:
                "Ofrecemos ambas opciones. Tenemos contratos mensuales flexibles para servicios continuos como redes sociales y SEO, así como proyectos únicos para branding y desarrollo web.",
            },
            {
              question: "¿Qué incluyen sus reportes de resultados?",
              answer:
                "Nuestros reportes incluyen métricas clave como tráfico web, engagement en redes sociales, conversiones, ROI y recomendaciones de optimización. Los enviamos mensualmente con reuniones de revisión.",
            },
            {
              question: "¿Trabajan con empresas de todos los tamaños?",
              answer:
                "Sí, trabajamos desde startups y pequeñas empresas hasta corporaciones grandes. Adaptamos nuestras estrategias y presupuestos a las necesidades específicas de cada cliente.",
            },
            {
              question: "¿Qué pasa si no estoy satisfecho con los resultados?",
              answer:
                "Ofrecemos garantía de satisfacción. Si no estás conforme en los primeros 30 días, trabajamos juntos para ajustar la estrategia o te devolvemos tu inversión.",
            },
          ]}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Creamos soluciones personalizadas para cada cliente. Contáctanos
                y cuéntanos sobre tu proyecto.
              </p>
              <Button
                size="lg"
                className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 transform hover:scale-105 transition-all"
                onClick={() => setIsContactModalOpen(true)}
              >
                Solicitar cotización personalizada
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
