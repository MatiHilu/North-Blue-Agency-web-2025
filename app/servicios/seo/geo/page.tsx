import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Sparkle, SunMedium, Telescope } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import InlineCTA from "@/components/inline-cta";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";

const serviceData = {
  title: "GEO (Generative Engine Optimization)",
  subtitle:
    "Asegura visibilidad en experiencias generativas con contenido semántico, estructuras ricas y prompts curados",
  description:
    "GEO prepara a tu marca para destacar en resultados generativos como Google AI Overviews, Bing Copilot y asistentes multimodales. Diseñamos contenidos, entidades y assets que alimentan modelos, construimos prompts curatoriales y optimizamos tus datos para facilitar respuestas generativas precisas.",
  gradient: "from-[#a855f7] to-[#f97316]",
  price: "Desde $950/mes",
  duration: "4-8 meses",
  features: [
    "Auditoría GEO de contenido y datos",
    "Guías de prompts curatoriales",
    "Optimización de entidades y knowledge graphs",
    "Contenido estructurado multimodal",
    "Playbooks para AI Overviews",
    "Monitoreo de cobertura generativa",
    "Modelos de scoring de assets",
    "Planes de actualización continua",
  ],
  process: [
    {
      title: "Discovery semántico",
      description:
        "Analizamos cómo generative engines interpretan tu marca, entidades relacionadas y formatos disponibles.",
    },
    {
      title: "Arquitectura GEO",
      description:
        "Definimos estructuras de contenido, prompts curatoriales y assets prioritarios por intención.",
    },
    {
      title: "Producción generativa",
      description:
        "Creamos contenidos optimizados, datasets enriquecidos y recursos visuales sonoros alineados a tus objetivos.",
    },
    {
      title: "Optimización continua",
      description:
        "Monitorizamos la presencia en experiencias generativas y ajustamos assets según feedback y performance.",
    },
  ],
  benefits: [
    "Visibilidad en experiencias generativas emergentes",
    "Contenidos preparados para AI Overviews",
    "Mayor control editorial sobre respuestas IA",
    "Assets listos para contextos multimodales",
    "Knowledge graph robusto y actualizado",
  ],
};

const faqs = [
  {
    question: "¿Qué plataformas cubren con GEO?",
    answer:
      "Nos enfocamos en Google AI Overviews, Bing Copilot, Perplexity, motores en marketplaces y asistentes multimodales.",
  },
  {
    question: "¿Cómo adaptan el contenido existente?",
    answer:
      "Auditamos tus piezas y las reestructuramos con capas semánticas, datos estructurados y prompts curatoriales para que sean legibles por modelos generativos.",
  },
  {
    question: "¿Qué rol tiene la creación de nuevos assets?",
    answer:
      "Desarrollamos plantillas, datasets y recursos visuales que alimentan respuestas generativas y refuerzan tu narrativa de marca.",
  },
  {
    question: "¿Cómo monitorean el rendimiento GEO?",
    answer:
      "Combinamos scraping, APIs y pruebas manuales para evaluar aparición en resúmenes generativos, calidad de respuesta y consistencia editorial.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/servicios/seo/geo` },
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "AI Overviews",
    "Contenido generativo",
    "Knowledge graph",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/servicios/seo/geo`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/servicios-geo.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/servicios-geo.png`],
  },
  publisher: "North Blue Agency",
};

export default function GEOPage() {
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
                  <Sparkle size={20} />
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Telescope size={20} />
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
                Lidera en resultados generativos emergentes
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#a855f7] to-[#f97316] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <InlineCTA
                  title="Diagnostica tu potencial GEO"
                  description="Identifica qué assets necesita tu marca para destacar en AI Overviews y motores generativos"
                  primaryLabel="Evaluar cobertura"
                  type="quote"
                  accentColor="purple"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Capacidades GEO esenciales
                  </h3>
                  <div className="space-y-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#a855f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-r from-violet-50 to-orange-50 border border-violet-200/50 rounded-xl p-6 my-10 shadow-sm">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Control editorial en la era generativa</strong>.
                  Documentamos prompts curatoriales, fuentes de datos y pautas
                  para que tus equipos internos puedan sostener la estrategia a
                  largo plazo.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-12 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Metodología GEO centrada en datos y creatividad
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Integramos investigación semántica, ingeniería de prompts y
              producción multimodal para garantizar presencia y consistencia en
              experiencias generativas.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-slate-800 min-h-[250px]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#a855f7] to-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text text-transparent">
              Visualiza y mide tu huella generativa
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Construimos indicadores y dashboards que combinan visibilidad
              generativa, engagement y señales de credibilidad para medir el
              impacto real de la estrategia GEO.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Cobertura en AI Overviews
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Seguimos la frecuencia y calidad con la que tu marca aparece
                    en resúmenes generativos clave.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Consistencia multimodal
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Evaluamos coherencia entre textos, visuales y datos
                    estructurados utilizados por los modelos.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Impacto en demanda
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Medimos crecimiento en búsquedas de marca, menciones y
                    tráfico originado desde experiencias generativas.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <InlineCTA
              title="Quiero dominar los motores generativos"
              description="Agenda una sesión estratégica y recibe un plan GEO adaptado a tus objetivos"
              primaryLabel="Diseñar plan GEO"
              type="contact"
              accentColor="purple"
              centered
            />
          </div>
        </div>
      </section>

      <FAQSection title="Preguntas sobre GEO" faqs={faqs} />

      <QuoteSection
        title="Convierte la IA generativa en tu aliado"
        subtitle="Te ayudamos a construir una presencia robusta en experiencias generativas y AI Overviews"
        buttonText="Solicitar cotización"
      />

      <ContactSection />
    </div>
  );
}
