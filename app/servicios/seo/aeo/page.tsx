import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Compass, MicVocal, Speech } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import InlineCTA from "@/components/inline-cta";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";

const serviceData = {
  title: "AEO (Answer Engine Optimization)",
  subtitle:
    "Optimiza tu marca para ser la respuesta preferida en motores conversacionales y experiencias asistidas",
  description:
    "AEO adapta tu estrategia SEO para contextos donde las respuestas llegan directo a la voz o a la pantalla sin pasar por los tradicionales resultados orgánicos. Diseñamos contenidos, entidades y datos estructurados que conectan con motores como SGE, Bing Copilot y asistentes conversacionales.",
  gradient: "from-[#2213e5] to-[#ff4081]",
  price: "Desde $850/mes",
  duration: "3-6 meses",
  features: [
    "Auditoría de intención conversacional",
    "Optimización de entidades y datos estructurados",
    "Guiones para voice search y chatbots",
    "Diseño de respuestas concisas y ricas",
    "Experimentación con prompts y formatos",
    "Monitor de visibilidad en motores de respuesta",
    "Integración con knowledge graphs",
    "QA para consistencia multicanal",
  ],
  process: [
    {
      title: "Research conversacional",
      description:
        "Investigamos preguntas frecuentes, patrones de voz y necesidades del usuario en contextos asistidos.",
    },
    {
      title: "Arquitectura semántica",
      description:
        "Definimos entidades clave, schema y formatos que maximizan la elegibilidad en respuestas.",
    },
    {
      title: "Producción & tests",
      description:
        "Creamos contenidos persuasivos, snippets enriquecidos y guías para asistentes.",
    },
    {
      title: "Monitoreo & optimización",
      description:
        "Medimos posicionamiento en motores de respuesta y ajustamos prompts, entidades y formatos.",
    },
  ],
  benefits: [
    "Mayor presencia en experiencias conversacionales",
    "Respuesta consistente en voice search y asistentes",
    "Contenidos listos para motores IA-first",
    "Mayor autoridad temática en entidades clave",
    "Datos estructurados robustos y actualizados",
  ],
};

const faqs = [
  {
    question: "¿Qué motores cubren con AEO?",
    answer:
      "Trabajamos con Google SGE, Bing Copilot, asistentes de voz (Alexa, Siri), Gemini y motores conversacionales emergentes.",
  },
  {
    question: "¿Cómo se mide el éxito en AEO?",
    answer:
      "Analizamos presencia en paneles de respuesta, snippets, voice search y share of voice en búsquedas conversacionales.",
  },
  {
    question: "¿AEO reemplaza al SEO tradicional?",
    answer:
      "No. Lo complementa. El SEO sólido es la base para que AEO pueda amplificar tus resultados en motores de respuesta.",
  },
  {
    question: "¿Qué rol tiene la producción de contenido?",
    answer:
      "Diseñamos respuestas sintetizadas, fichas temáticas y estructuras Q&A que se adaptan a diferentes asistentes.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/servicios/seo/aeo` },
  keywords: [
    "AEO",
    "Answer Engine Optimization",
    "Motores de respuesta",
    "Voice search",
    "Datos estructurados",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/servicios/seo/aeo`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/servicios-aeo.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/servicios-aeo.png`],
  },
  publisher: "North Blue Agency",
};

export default function AEOPage() {
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
                  <Speech size={20} />
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Compass size={20} />
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
                Sé la respuesta inmediata y confiable
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#2213e5] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <InlineCTA
                  title="Evalúa tu presencia en motores de respuesta"
                  description="Detecta oportunidades para ganar respuestas destacadas y optimiza tu cobertura conversacional"
                  primaryLabel="Quiero diagnosticar"
                  type="quote"
                  accentColor="blue"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Capacidades AEO clave
                  </h3>
                  <div className="space-y-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#2213e5] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-200/50 rounded-xl p-6 my-10 shadow-sm">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Experiencias consistentes</strong>. Creemos en
                  respuestas coordinadas entre motores, chatbots y tus propios
                  canales. Por eso documentamos mensajes clave, entidades y
                  fuentes verificadas.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Metodología para dominar respuestas asistidas
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Nuestra metodología AEO combina estrategia semántica, ingeniería
              de prompts y pruebas multicanal para asegurar presencia
              consistente.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-slate-800 min-h-[250px]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2213e5] to-[#ff4081] rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#2213e5] to-[#ff4081] bg-clip-text text-transparent">
              Métricas y monitoreo conversacional
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Configuramos paneles que combinan datos de visibilidad en motores,
              rendimiento de snippets y feedback de usuarios para seguir
              optimizando cada iteración.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Share of Voice conversacional
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Identificamos cuánto aparece tu marca como respuesta frente
                    a la competencia en consultas estratégicas.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Calidad de respuesta
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Evaluamos claridad, factualidad y tono en cada respuesta
                    monitoreada.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Integridad semántica
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Supervisamos entidades, relaciones y consistencia con tu
                    knowledge base.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <InlineCTA
              title="Quiero dominar las respuestas conversacionales"
              description="Agenda una sesión y recibe un roadmap AEO personalizado"
              primaryLabel="Optimizar para AEO"
              type="contact"
              accentColor="blue"
              centered
            />
          </div>
        </div>
      </section>

      <FAQSection title="Preguntas sobre AEO" faqs={faqs} />

      <QuoteSection
        title="Sé la respuesta destacada"
        subtitle="Acompañamos a tu marca para liderar en SGE, voice search y chatbots"
        buttonText="Solicitar cotización"
      />

      <ContactSection />
    </div>
  );
}
