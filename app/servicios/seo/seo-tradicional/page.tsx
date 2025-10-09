import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BarChart3, Check, Gauge, Scale } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import InlineCTA from "@/components/inline-cta";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";

const serviceData = {
  title: "SEO Tradicional 360°",
  subtitle:
    "Fortalece tu posicionamiento orgánico con una estrategia integral de SEO técnico, on-page y de contenido",
  description:
    "Nuestro servicio de SEO Tradicional 360° aborda cada elemento fundamental del posicionamiento orgánico: arquitectura web, señales técnicas, relevancia semántica y autoridad. Auditamos tu sitio de punta a punta, priorizamos oportunidades con impacto y ejecutamos acciones continuas para sostener tu crecimiento en las SERPs.",
  gradient: "from-[#6366f1] to-[#ec4899]",
  price: "Desde $750/mes",
  duration: "3-9 meses",
  features: [
    "Auditoría integral SEO",
    "Investigación y clústeres de keywords",
    "Optimización on-page (titles, meta, contenidos)",
    "Mejoras de arquitectura e interlinking",
    "Planes editoriales SEO",
    "Link building ético",
    "Dashboards personalizados",
    "Alineación con Core Web Vitals",
  ],
  process: [
    {
      title: "Descubrimiento & Auditoría",
      description:
        "Mapeamos tu ecosistema digital, analizamos competencia y priorizamos quick wins técnicos y semánticos.",
    },
    {
      title: "Blueprint SEO",
      description:
        "Diseñamos líneas editoriales, taxonomías, mejoras técnicas y plan incremental de autoridad.",
    },
    {
      title: "Implementación",
      description:
        "Ejecutamos optimizaciones on-page, mejoras de performance y automatizamos reporting.",
    },
    {
      title: "Iteración",
      description:
        "Monitoreamos rankings, medimos impacto en conversiones y ajustamos backlog trimestral.",
    },
  ],
  benefits: [
    "Estructura SEO sólida y escalable",
    "Incremento progresivo de tráfico orgánico",
    "Mejor posicionamiento en keywords estratégicas",
    "Mayor relevancia temática y autoridad",
    "Sitio preparado para integraciones SEO avanzadas",
  ],
};

const faqs = [
  {
    question: "¿Cada cuánto revisan la estrategia SEO?",
    answer:
      "Realizamos chequeos técnicos mensuales, ajustes editoriales continuos y revisiones estratégicas trimestrales para asegurar que el roadmap siga alineado a tus objetivos.",
  },
  {
    question: "¿Qué herramientas utilizan para la investigación y monitoreo?",
    answer:
      "Trabajamos con Search Console, GA4, herramientas de crawling y suites como Semrush/Ahrefs. Complementamos con dashboards propios para reportes accionables.",
  },
  {
    question:
      "¿Pueden trabajar con equipos internos de contenido o desarrollo?",
    answer:
      "Sí. Coordinamos con tus equipos para alinear entregables, proveer guías de implementación y priorizar tareas según su complejidad e impacto.",
  },
  {
    question: "¿Incluyen soporte para migraciones o rediseños?",
    answer:
      "Acompañamos procesos de migración con auditorías pre y post lanzamiento, redirecciones, ajustes de arquitectura y monitoreo intensivo.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/servicios/seo/seo-tradicional` },
  keywords: [
    "SEO",
    "SEO técnico",
    "Optimización on-page",
    "Link building",
    "Investigación de palabras clave",
    "Core Web Vitals",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/servicios/seo/seo-tradicional`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/servicios-seo-tradicional.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/servicios-seo-tradicional.png`],
  },
  publisher: "North Blue Agency",
};

export default function SEOTradicionalPage() {
  return (
    <div className="min-h-screen">
      <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <section
        className={`py-20 bg-gradient-to-br ${serviceData.gradient} text-white relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <Link
              href="/servicios/seo"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Volver a SEO 360°
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
                  <Gauge size={20} />
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Scale size={20} />
                  <span className="font-semibold">{serviceData.price}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Funda tu crecimiento orgánico en bases sólidas
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <InlineCTA
                  title="Solicita tu auditoría SEO técnica"
                  description="Detecta oportunidades prioritarias y construye un roadmap accionable"
                  primaryLabel="Auditar mi sitio"
                  type="quote"
                  accentColor="purple"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Características principales
                  </h3>
                  <div className="space-y-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#6366f1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-r from-indigo-50 to-pink-50 border border-indigo-200/50 rounded-xl p-6 my-10 shadow-sm">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>¿Por qué SEO Tradicional 360°?</strong> Porque es la
                  base que sostiene cada iniciativa avanzada de posicionamiento.
                  Sin una infraestructura técnica y contenidos alineados a
                  intención de búsqueda, cualquier estrategia basada en IA o
                  automatización se queda corta.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Del diagnóstico a la ejecución sostenida
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Conectamos datos, insights competitivos y experiencia editorial
              para acelerar tu posicionamiento. Así es nuestra metodología
              completa.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-slate-800 min-h-[250px]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg text-gray-300 font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mx-auto text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">
              Resultados confiables, reportes accionables
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Medimos y comunicamos el impacto de cada iteración. Te entregamos
              dashboards claros para evaluar rendimiento según tus KPI críticos
              y ajustar decisiones sin perder momentum.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Visibilidad & Rankings
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Seguimiento continuo de posiciones, share of voice y
                    búsquedas de marca para validar el impacto en la percepción
                    del mercado.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Tráfico & Conversión
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Configuramos objetivos, conversiones y funnels en GA4 para
                    medir el valor real del tráfico orgánico.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">Salud Técnica</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Monitorizamos Core Web Vitals, crawling, indexación y
                    errores críticos para mantener tu sitio optimizado.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <InlineCTA
              title="Quiero reforzar mi SEO tradicional"
              description="Agenda una sesión estratégica y recibe un roadmap de mejoras prioritarias"
              primaryLabel="Agendar consultoría"
              type="contact"
              accentColor="purple"
              centered
            />
          </div>
        </div>
      </section>

      <FAQSection title="Preguntas sobre SEO Tradicional" faqs={faqs} />

      <QuoteSection
        title="Escala tu posicionamiento orgánico"
        subtitle="Deja que nuestro equipo te acompañe con una estrategia SEO integral y accionable"
        buttonText="Solicitar cotización"
      />

      <ContactSection />
    </div>
  );
}
