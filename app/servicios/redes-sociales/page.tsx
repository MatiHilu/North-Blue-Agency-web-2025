import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import { BASE_URL } from "@/lib/jsonld";
import QuoteSection from "@/components/quote-section";
// Migrado a Metadata API
import type { Metadata } from "next";

function normalizeLocation(value?: string) {
  if (!value) return undefined;
  const spaced = value.replace(/-/g, " ");
  return spaced
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const serviceData = {
  title: "Gestión de Redes Sociales",
  subtitle: "Construye una comunidad sólida y aumenta tu engagement",
  description:
    "Nuestro servicio de gestión de redes sociales está diseñado para transformar tu presencia digital en una herramienta poderosa de crecimiento. Creamos estrategias personalizadas que conectan con tu audiencia y generan resultados medibles.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
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

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const raw = searchParams?.Location;
  const locationRaw = Array.isArray(raw) ? raw[0] : raw;
  const location = normalizeLocation(locationRaw);
  const slugPart = locationRaw ? `-${locationRaw}` : "";
  const canonical = `${BASE_URL}/servicios/redes-sociales${slugPart}`;
  const canonicalEn = `${BASE_URL}/services/redes-sociales${slugPart}`;

  return {
    title: {
      default: `${serviceData.title}${location ? ` - ${location}` : ""}`,
      template: "%s | North Blue Agency",
    },
    description:
      "Nuestro servicio de gestión de redes sociales está diseñado para transformar tu presencia digital en una herramienta poderosa de crecimiento.",
    alternates: {
      canonical,
      languages: {
        es: canonical,
        en: canonicalEn,
      },
    },
    keywords: [
      "gestión de redes sociales",
      "community management",
      "marketing en redes sociales",
      "contenido para redes sociales",
      "estrategia de redes sociales",
      "publicidad en redes",
      "North Blue Agency",
    ],
    openGraph: {
      title: `${serviceData.title}${
        location ? ` - ${location}` : ""
      } - North Blue Agency`,
      description: serviceData.description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/og/servicios-redes-sociales.png`,
          alt: `${serviceData.title} - North Blue Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} - North Blue Agency`,
      description: serviceData.description,
      images: [`${BASE_URL}/images/og/servicios-redes-sociales.png`],
    },
    publisher: "North Blue Agency",
  };
}

type RedesSocialesPageProps = {
  Location?: string;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function RedesSocialesPage({
  Location,
  searchParams,
}: RedesSocialesPageProps) {
  const raw = searchParams?.Location;
  const locationRaw = Array.isArray(raw) ? raw[0] : raw;
  const effectiveLocation = Location ?? locationRaw;
  const locationText = normalizeLocation(effectiveLocation);
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div>
                  <Link
                    href="/servicios"
                    className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Volver a servicios
                  </Link>

                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    {serviceData.title}
                    {locationText ? ` - ${locationText}` : ""}
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
                        <span className="font-semibold">
                          {serviceData.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight">
                <Image
                  src="/gestion-redes-sociales.png"
                  title={serviceData.title}
                  alt={serviceData.title}
                  width={400}
                  height={400}
                  className="mx-auto"
                />
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
        <QuoteSection
          title="¿Listo para comenzar?"
          subtitle="Contáctanos hoy y descubre cómo podemos transformar tu presencia
                digital"
          buttonText="Solicitar cotización"
        />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
