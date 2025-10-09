import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import { BASE_URL } from "@/lib/jsonld";
import SEOAIOComparison from "@/components/seo-aio-comparison";
import InlineCTA from "@/components/inline-cta";
// Migrado a Metadata API
import type { Metadata } from "next";

const serviceData = {
  title: "SEO y Ranking (con AIO, AEO y GEO)",
  subtitle:
    "Domina los primeros lugares de Google con SEO potenciado por AIO, AEO y GEO (Artificial, Answer & Generative Engine Optimization)",
  description:
    "Nuestro servicio integra SEO tradicional + AIO (Artificial Intelligence Optimization) + AEO (Answer Engine Optimization) y GEO (Generative Engine Optimization). No solo optimizamos tu sitio para los motores de búsqueda tradicionales: también preparamos tus activos para motores de respuesta y experiencias generativas, utilizando modelos y automatizaciones inteligentes para acelerar la investigación, detectar oportunidades emergentes, priorizar acciones con impacto y generar contenidos estratégicos con supervisión humana. El resultado: más tráfico orgánico sostenible, presencia destacada en experiencias AI-first y decisiones basadas en datos predictivos.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "Desde $1200/mes",
  duration: "3-12 meses",
  features: [
    "Auditoría SEO completa",
    "Investigación de palabras clave",
    "Optimización on-page",
    "Optimización técnica",
    "Creación de contenido SEO",
    "Link building estratégico",
    "SEO local y Google My Business",
    "Reportes mensuales detallados",
    "Optimización para Answer Engines (AEO)",
    "Generative Engine Optimization (GEO) y SGE",
  ],
  process: [
    {
      title: "Auditoría inicial",
      description: "Análisis completo de tu sitio web y competencia",
    },
    {
      title: "Estrategia",
      description: "Definimos keywords y plan de optimización",
    },
    {
      title: "Optimización",
      description: "Implementamos mejoras técnicas y de contenido",
    },
    {
      title: "Monitoreo",
      description: "Seguimiento de rankings y ajustes continuos",
    },
  ],
  benefits: [
    "Aumento del tráfico orgánico",
    "Mejora en rankings de keywords objetivo",
    "Mayor autoridad de dominio",
    "Visibilidad en motores de respuesta y experiencias generativas",
    "ROI superior al marketing SEM",
  ],
};

const faqs = [
  {
    question: "¿Cuánto tiempo toma ver resultados con SEO + AIO + AEO + GEO?",
    answer:
      "Detectamos quick wins en los primeros 30-60 días gracias al análisis asistido por IA, mientras que el crecimiento sostenido llega entre 3-6 meses según la competencia. La combinación de SEO tradicional con AIO, AEO y GEO acelera la priorización y amplía tu visibilidad en múltiples superficies.",
  },
  {
    question: "¿Garantizan el primer lugar en Google o en SGE?",
    answer:
      "No podemos prometer posiciones específicas porque los algoritmos de Google, SGE y otros motores generativos cambian constantemente. Sí comprometemos mejoras medibles en visibilidad, tráfico orgánico y presencia en respuestas asistidas, respaldadas por experimentación continua y reporting transparente.",
  },
  {
    question: "¿Qué incluye la auditoría integral SEO + AIO + AEO + GEO?",
    answer:
      "Auditamos técnica, contenido, interlinking, Core Web Vitals y perfil de enlaces, pero también evaluamos entidades, datos estructurados, prompts críticos y readiness para motores de respuesta. Entregamos un roadmap priorizado con quick wins, backlog trimestral y recomendaciones para equipos internos.",
  },
  {
    question: "¿Cómo integran AIO, AEO y GEO dentro de la estrategia?",
    answer:
      "Usamos modelos y automatizaciones para descubrir oportunidades, clasificar intenciones, generar briefs y optimizar fragmentos clave. Luego validamos todo manualmente y diseñamos contenidos pensando en featured snippets, respuestas directas, chatbots y experiencias generativas, sin perder coherencia de marca.",
  },
  {
    question: "¿Quién produce y valida el contenido asistido por IA?",
    answer:
      "Nuestro equipo lidera la investigación, redacta piezas estratégicas y utiliza IA como copiloto para acelerar tareas repetitivas. Cada entrega pasa por revisión humana, controles de factualidad, tone of voice y cumplimiento E-E-A-T antes de publicarse.",
  },
  {
    question: "¿Cómo miden y reportan los resultados?",
    answer:
      "Configuramos dashboards personalizados con Search Console, GA4, herramientas de tracking de rankings, visibilidad en SGE/AI Overviews y share of voice en respuestas generativas. Compartimos reportes mensuales con KPIs, aprendizajes y próximos experimentos prioritarios.",
  },
];
export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/servicios/seo` },
  keywords: [
    "SEO",
    "AIO",
    "Artificial Intelligence Optimization",
    "SEO con IA",
    "AEO",
    "Answer Engine Optimization",
    "GEO",
    "Generative Engine Optimization",
    "E-E-A-T",
    "EEAT",
    "Google E-E-A-T",
    "experiencia SEO",
    "autoridad SEO",
    "confianza SEO",
    "posicionamiento web",
    "optimización en buscadores",
    "auditoría SEO",
    "link building",
    "SEO local",
    "investigación de palabras clave",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/servicios/seo`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/servicios-seo.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/servicios-seo.png`],
  },
  publisher: "North Blue Agency",
};

export default function SEOPage() {
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
                href="/servicios"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Volver a servicios
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {serviceData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-8">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Qué incluye este servicio (SEO + AIO + AEO + GEO)?
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
                <div className="mt-10">
                  <InlineCTA
                    title="Solicita tu auditoría SEO + AIO + AEO + GEO"
                    description="Análisis completo de tu sitio + quick wins implementables"
                    primaryLabel="Obtener auditoría"
                    type="quote"
                    accentColor="pink"
                  />
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
                <div className="bg-gradient-to-r from-pink-50 to-cyan-50 border border-pink-200/50 rounded-xl p-6 my-10 shadow-sm">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <strong>¿Qué es AIO, AEO y GEO?</strong> Artificial
                    Intelligence Optimization combina automatizaciones y modelos
                    para detectar gaps de contenido, agrupar keywords por
                    intención, anticipar tendencias, generar briefs inteligentes
                    y monitorear la salud técnica en tiempo (casi) real. AEO nos
                    permite optimizar tus experiencias para motores de respuesta
                    (como SGE y chatbots), mientras que GEO asegura presencia en
                    resultados generativos. <strong>Siempre</strong> con
                    revisión humana y alineado a tus objetivos de negocio.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SEO vs AIO Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                De SEO tradicional al SEO + AIO + AEO + GEO
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                No abandonamos las bases del SEO: las potenciamos. Sumamos capas
                de inteligencia artificial aplicada, optimización para motores
                de respuesta y señales generativas que nos permiten descubrir
                oportunidades antes que la competencia y ejecutar más rápido sin
                sacrificar calidad. Estas son algunas diferencias clave.
              </p>
            </AnimatedSection>
            <SEOAIOComparison />
            <div className="mt-14 text-center max-w-2xl mx-auto text-sm text-white/60">
              * AIO, AEO y GEO no reemplazan la estrategia humana ni la
              validación editorial. Complementan y amplifican nuestro proceso
              para ofrecerte crecimiento orgánico acelerado y sostenible en
              buscadores, motores de respuesta y experiencias generativas.
            </div>
            <div className="mt-16">
              <InlineCTA
                title="Implementa AIO, AEO y GEO en tu estrategia"
                description="Integra automatización inteligente y presencia en motores de respuesta sin perder control"
                primaryLabel="Comenzar ahora"
                type="contact"
                accentColor="blue"
                centered
              />
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

        {/* E-E-A-T Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] bg-clip-text text-transparent">
                Cumplimos con Google E-E-A-T
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                La calidad y credibilidad del contenido es clave para un SEO
                sostenible. Nuestro enfoque integra{" "}
                <strong>
                  E-E-A-T (Experience, Expertise, Authoritativeness,
                  Trustworthiness)
                </strong>{" "}
                en cada fase: desde la auditoría inicial hasta la creación y
                optimización continua de contenido.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedSection delay={0}>
                <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">Experience</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Reflejamos experiencia real del negocio: casos, procesos,
                      ejemplos de implementaciones y resultados tangibles
                      respaldados por datos internos.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">Expertise</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Investigación profunda de keywords, análisis semántico
                      avanzado y validación editorial humana sobre cualquier
                      output asistido por IA.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">
                      Authoritativeness
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Construimos autoridad combinando contenido profundo,
                      interlinking estratégico, menciones relevantes y
                      adquisición ética de enlaces.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">
                      Trustworthiness
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Transparencia en métricas, políticas claras, seguridad
                      técnica (Core Web Vitals, HTTPS) y revisión factual para
                      mantener confianza.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <AnimatedSection delay={400}>
                <div className="p-5 rounded-lg bg-gradient-to-r from-pink-50 to-white border border-pink-100">
                  <p className="text-sm text-gray-700">
                    Incorporamos <strong>autores verificables</strong> y
                    enriquecemos entidades para reforzar relevancia temática.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={450}>
                <div className="p-5 rounded-lg bg-gradient-to-r from-cyan-50 to-white border border-cyan-100">
                  <p className="text-sm text-gray-700">
                    Aplicamos <strong>auditorías periódicas</strong> de
                    precisión y actualización de contenido (freshness control).
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={500}>
                <div className="p-5 rounded-lg bg-gradient-to-r from-violet-50 to-white border border-violet-100">
                  <p className="text-sm text-gray-700">
                    Usamos <strong>datos estructurados</strong> y validación
                    técnica para mejorar elegibilidad en rich results.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="mt-14">
              <InlineCTA
                title="Optimiza tu contenido con E-E-A-T"
                description="Construye autoridad y confianza en tu nicho"
                primaryLabel="Mejorar ahora"
                type="quote"
                accentColor="purple"
                centered
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title={`Preguntas sobre ${serviceData.title}`}
          faqs={faqs}
        />

        {/* CTA Section */}
        <QuoteSection
          title="¿Listo para dominar Google?"
          subtitle="Contáctanos hoy y descubre cómo podemos posicionar tu sitio web
                en los primeros lugares"
          buttonText="Solicitar cotización"
        />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
