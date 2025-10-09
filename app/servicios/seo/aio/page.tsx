import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Check, Radar, Workflow } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import InlineCTA from "@/components/inline-cta";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";

const serviceData = {
  title: "AIO (Artificial Intelligence Optimization)",
  subtitle:
    "Escala tu posicionamiento con inteligencia artificial aplicada a la investigación, producción y optimización SEO",
  description:
    "Potenciamos tu estrategia SEO tradicional con flujos inteligentes que priorizan oportunidades, automatizan análisis repetitivos y aceleran la creación de contenidos estratégicos. AIO combina modelos, automatizaciones y validación humana para ejecutar a mayor velocidad sin comprometer calidad ni factualidad.",
  gradient: "from-[#22d3ee] to-[#ec4899]",
  price: "Desde $900/mes",
  duration: "3-6 meses",
  features: [
    "Auditoría de automatización y datos",
    "Modelos personalizados para clustering de keywords",
    "Briefs inteligentes y guidelines por intención",
    "Detección temprana de tendencias y gaps",
    "Sistemas de scoring de oportunidades",
    "Automatización de reportes y alertas",
    "QA y validación editorial humana",
    "Integración con herramientas SEO existentes",
  ],
  process: [
    {
      title: "Mapeo de procesos",
      description:
        "Identificamos tareas repetitivas y cuellos de botella para priorizar automatizaciones con impacto real.",
    },
    {
      title: "Diseño de modelos",
      description:
        "Seleccionamos modelos y templates, definimos prompts críticos y criterios de evaluación.",
    },
    {
      title: "Implementación asistida",
      description:
        "Integramos flujos de IA en tu stack SEO y coordinamos con tu equipo para la adopción.",
    },
    {
      title: "Escalado & QA",
      description:
        "Monitoreamos outputs, realizamos QA manual y optimizamos continuamente según resultados.",
    },
  ],
  benefits: [
    "Procesos SEO más rápidos y consistentes",
    "Insights basados en datos en menos tiempo",
    "Capacidad de producción de contenido escalable",
    "Priorización inteligente de acciones",
    "Validación humana para mantener calidad",
  ],
};

const faqs = [
  {
    question: "¿Qué herramientas o modelos utilizan para AIO?",
    answer:
      "Trabajamos con modelos líderes (OpenAI, Anthropic, modelos open-source) combinados con data propia y herramientas SEO existentes para generar insights accionables.",
  },
  {
    question: "¿Necesito un equipo interno para implementar AIO?",
    answer:
      "Podemos operar de forma autónoma o colaborar con tus equipos de marketing, contenido y tecnología para integrar flujos inteligentes.",
  },
  {
    question: "¿Cómo aseguran la calidad de los outputs asistidos?",
    answer:
      "Diseñamos checklists de QA, validamos factualidad, tone of voice y alineación estratégica antes de publicar o implementar.",
  },
  {
    question: "¿Pueden adaptar AIO a diferentes industrias?",
    answer:
      "Sí, entrenamos prompts y colecciones de datos específicas para tu vertical, asegurando relevancia y precisión contextual.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/servicios/seo/aio` },
  keywords: [
    "AIO",
    "Artificial Intelligence Optimization",
    "SEO con IA",
    "Automatización SEO",
    "Modelos de IA para SEO",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/servicios/seo/aio`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/servicios-aio.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/servicios-aio.png`],
  },
  publisher: "North Blue Agency",
};

export default function AIOPage() {
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
                  <Workflow size={20} />
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Radar size={20} />
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
                IA + SEO: la dupla que acelera resultados
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#22d3ee] to-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <InlineCTA
                  title="Diagnostica tu madurez AIO"
                  description="Identifica procesos listos para automatizar y potencia la producción de contenidos SEO"
                  primaryLabel="Evaluar mi estrategia"
                  type="quote"
                  accentColor="pink"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Capacidades habilitadas por AIO
                  </h3>
                  <div className="space-y-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-r from-pink-50 to-cyan-50 border border-pink-200/50 rounded-xl p-6 my-10 shadow-sm">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Automatización responsable</strong>. Cada entrega pasa
                  por QA humano. Documentamos prompts críticos, criterios de
                  evaluación y flujos para garantizar consistencia y
                  transparencia.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-12 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cómo integramos IA en tu stack SEO
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Gobernamos el ciclo completo: estrategia, prompts, QA y mejora
              continua. Estos son los pilares de nuestro enfoque AIO.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-slate-800 min-h-[250px]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#22d3ee] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
              Métricas accionables en tiempo casi real
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Integramos dashboards de desempeño que combinan señales de
              búsqueda, producción asistida y resultados de conversión para que
              tomes decisiones con contexto completo.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Oportunidades priorizadas
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Matrices de impacto/esfuerzo con scoring dinámico para
                    escoger las acciones que generan mejores resultados a corto
                    plazo.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Producción asistida auditada
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Control de versiones, checklist editorial y métricas de
                    performance para cada pieza generada o optimizada con IA.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Automatizaciones monitoreadas
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Alertas tempranas de caídas en rankings, cambios de
                    intención y rendimiento de URLs priorizadas.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <InlineCTA
              title="Quiero activar AIO en mi equipo"
              description="Agenda una sesión estratégica y recibe un plan de implementación personalizado"
              primaryLabel="Diseñar flujo IA"
              type="contact"
              accentColor="blue"
              centered
            />
          </div>
        </div>
      </section>

      <FAQSection title="Preguntas sobre AIO" faqs={faqs} />

      <QuoteSection
        title="Activa la inteligencia en tu SEO"
        subtitle="Construimos flujos AIO que combinan automatización, datos y supervisión humana"
        buttonText="Solicitar cotización"
      />

      <ContactSection />
    </div>
  );
}
