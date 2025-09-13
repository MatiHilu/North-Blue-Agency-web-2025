import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Award,
  Heart,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import EnhancedContactModal from "@/components/enhanced-contact-modal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo de North Blue Agency y nuestra misión: marketing digital, redes sociales y desarrollo web.",
  keywords: [
    "agencia de marketing digital",
    "sobre nosotros",
    "equipo",
    "North Blue Agency",
    "marketing",
    "desarrollo web",
    "redes sociales",
  ],
  alternates: { canonical: "https://northblueagency.com/nosotros" },
  authors: [
    { name: "Abril Lespade" },
    { name: "Matías Hilú" },
    { name: "North Blue Agency", url: "https://northblueagency.com" },
  ],
  publisher: "North Blue Agency",
  openGraph: {
    title: "Nosotros",
    description:
      "Conoce al equipo de North Blue Agency y nuestra misión: marketing digital, redes sociales y desarrollo web.",
    url: "https://northblueagency.com/nosotros",
    siteName: "North Blue Agency",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "https://northblueagency.com/North-Blue-Agency.png",
        width: 1200,
        height: 630,
        alt: "Equipo de North Blue Agency",
      },
      {
        url: "https://northblueagency.com/North-Blue-Agency.svg",
        alt: "Logo North Blue Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros",
    description:
      "Conoce al equipo de North Blue Agency y nuestra misión: marketing digital, redes sociales y desarrollo web.",
    images: ["https://northblueagency.com/North-Blue-Agency.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// JSON-LD schemas exportados para reutilizar/incluir en <head> o en scripts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "North Blue Agency",
  description:
    "Agencia de marketing digital especializada en redes sociales, branding y desarrollo web",
  url: "https://northblueagency.com",
  logo: "https://northblueagency.com/North-Blue-Agency.svg",
  foundingDate: "2019",
  keywords:
    "agencia de marketing digital, sobre nosotros, equipo, North Blue Agency",
  founder: [
    {
      "@type": "Person",
      name: "Abril Lespade",
    },
    {
      "@type": "Person",
      name: "Matías Hilú",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54*9-11-3054-5828",
    contactType: "customer service",
    email: "info@northblueagency.com",
  },
  sameAs: [
    "https://www.facebook.com/northblueagency",
    "https://www.instagram.com/northblueagency",
    "https://www.linkedin.com/company/northblueagency",
  ],
} as const;

export const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "North Blue Agency",
  employee: [
    {
      "@type": "Person",
      name: "Abril Lespade",
      jobTitle: "Gerenta de Marketing",
      description:
        "Lidera la estrategia de redes sociales: contenidos, tono, comunidad y crecimiento.",
      sameAs: ["https://www.linkedin.com/in/abril-lespade/"],
    },
    {
      "@type": "Person",
      name: "Matías Hilú",
      jobTitle: "CEO & Gerente de Desarrollo Web",
      description:
        "Encargado del desarrollo web: performance, SEO técnico y optimización de conversión.",
      sameAs: ["https://www.linkedin.com/in/matias-hilu/"],
    },
  ],
} as const;

const teamMembers = [
  {
    name: "Abril Lespade",
    role: "Gerenta de Marketing",
    image: "/Abirl-Lespade-NorthBlue-Agency.jpg?height=300&width=300",
    bio: "Lidera la estrategia de redes sociales: contenidos, tono, comunidad y crecimiento. Su enfoque se centra en construir relaciones auténticas y duraderas con la audiencia. Al comprender las necesidades y las formas de las redes logra resultados significativos.",
    social: {
      // TODO: Actualizar URL de LinkedIn si corresponde
      linkedin: "https://www.linkedin.com/in/abril-lespade/",
    },
  },
  {
    name: "Matías Hilú",
    role: "CEO & Gerente de Desarrollo Web",
    image: "/Matías-Hilú-NorthBlue-Agency.png?height=300&width=300",
    bio: "Encargado del desarrollo web: performance, SEO técnico y optimización de conversión. Su enfoque está en crear sitios web rápidos, seguros y optimizados que no solo atraen tráfico, sino que también convierten visitantes en clientes. Con su experiencia técnica, garantiza que cada proyecto no solo cumpla con los estándares de la industria, sino que también ofrezca una experiencia de usuario excepcional.",
    social: {
      // TODO: Actualizar URL de LinkedIn si corresponde
      linkedin: "https://www.linkedin.com/in/matias-hilu/",
    },
  },
];

const values = [
  {
    icon: Target,
    title: "Orientados a Resultados",
    description:
      "Cada estrategia que desarrollamos está diseñada para generar resultados medibles y un ROI positivo para nuestros clientes.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description:
      "Creemos en la colaboración estrecha con nuestros clientes, trabajando juntos como un equipo para alcanzar los objetivos.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description:
      "Nos comprometemos a entregar trabajo de la más alta calidad, superando las expectativas en cada proyecto.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description:
      "Amamos lo que hacemos y esa pasión se refleja en cada campaña, diseño y estrategia que desarrollamos.",
  },
];

// Proceso general basado en las páginas de servicios (SEO, Desarrollo Web, etc.)
const processSteps = [
  {
    title: "Descubrimiento y diagnóstico",
    description:
      "Reunión inicial para entender objetivos, analizar tu presencia actual y el contexto competitivo.",
  },
  {
    title: "Estrategia y planificación",
    description:
      "Definimos el plan de acción: roadmap, prioridades, KPIs y responsables.",
  },
  {
    title: "Producción e implementación",
    description:
      "Diseño, contenido y desarrollo. Ejecutamos las mejoras técnicas y creativas.",
  },
  {
    title: "Lanzamiento",
    description:
      "QA y puesta en marcha controlada para minimizar riesgos y maximizar impacto.",
  },
  {
    title: "Medición y optimización",
    description:
      "Monitoreo continuo, reportes claros y mejoras iterativas para escalar resultados.",
  },
];

export default function AboutPage() {
  return (
    <>
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
                Conoce a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  North Blue
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Somos un equipo apasionado de profesionales dedicados a
                transformar la presencia digital
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Nuestra{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                    Historia
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed md:pe-16">
                  North Blue Agency nació en 2019 con una misión clara:
                  democratizar el marketing digital y hacer que las mejores
                  estrategias estén al alcance de empresas de todos los tamaños.
                </p>
                {/* <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Comenzamos como un pequeño equipo de especialistas apasionados
                  por el marketing digital. Hoy, somos una agencia reconocida
                  que ha ayudado a más de 75 empresas a transformar su presencia
                  online.
                </p> */}
                <p className="text-lg text-gray-600 leading-relaxed md:pe-20">
                  Nuestro enfoque se basa en la combinación perfecta entre
                  creatividad, estrategia y tecnología, siempre con el objetivo
                  de generar resultados medibles para nuestros clientes.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="relative flex justify-center">
                  <div className="w-[350px] absolute translate-x-[58%] inset-0 bg-gradient-to-r from-[#ff4081]/20 to-[#00b2ff]/20 rounded-3xl transform rotate-6"></div>
                  <img
                    src="/NorthBlue-Agency.png?height=400&width=400"
                    alt="Equipo North Blue Agency"
                    className="relative rounded-3xl shadow-2xl w-[320px]"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            {/* Shared gradient defs for icon strokes */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient
                  id="nb-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ff4081" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#00b2ff" />
                </linearGradient>
              </defs>
            </svg>
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestros{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                  Valores
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían nuestro trabajo y definen nuestra
                cultura empresarial
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon as React.ElementType;
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <Card className="text-center border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="mx-auto mb-6 flex items-center justify-center">
                          <Icon
                            className="w-12 h-12"
                            strokeWidth={2}
                            color="url(#nb-gradient)"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nuestro Proceso (timeline) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                NUESTRO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  PROCESO
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Así trabajamos de principio a fin para lograr resultados
                medibles
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Conector */}
              <div className="hidden lg:block absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-[#ff4081] via-[#ff83ab] to-[#00b2ff] rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {processSteps.map((step, index) => (
                  <AnimatedSection key={index} delay={index * 120}>
                    <div className="flex lg:block items-start gap-4">
                      <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm max-w-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Co-founders Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestros{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  Co‑fundadores
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conoce a quienes lideran North Blue Agency: dos miradas
                complementarias que impulsan la visión, la estrategia y el
                crecimiento del negocio.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="group relative rounded-2xl">
                    {/* Hover glow */}
                    <div
                      className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#00b2ff] via-purple-500 to-[#ff4081] opacity-0 blur transition-opacity duration-300 group-hover:opacity-40 "
                      aria-hidden="true"
                    />
                    {/* Gradient border wrapper */}
                    <div className="relative rounded-2xl p-px bg-gradient-to-r from-[#00b2ff] via-purple-500 to-[#ff4081] min-h-[500px]">
                      <Card className="rounded-[14px] border-0 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-transform duration-300 group-hover:-translate-y-1 min-h-[500px]">
                        <CardContent className="p-8">
                          {/* Top-right quick action */}
                          <div className="absolute right-4 top-4">
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5]/15 transition-colors"
                              aria-label={`LinkedIn de ${member.name}`}
                            >
                              <Linkedin size={18} />
                            </a>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            {/* Avatar with gradient ring */}
                            <div className="relative">
                              <div className="rounded-full p-[3px] bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff]">
                                <img
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover bg-gray-100"
                                />
                              </div>
                            </div>

                            <h3 className="mt-5 text-2xl font-bold tracking-tight">
                              {member.name}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff]">
                              {member.role}
                            </p>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed min-h-[130px]">
                              {member.bio}
                            </p>

                            <div className="mt-6">
                              <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 transition-colors"
                              >
                                Conectar en LinkedIn
                                <ArrowUpRight size={16} />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Quieres formar parte de nuestro equipo?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Estamos siempre buscando talento apasionado por el marketing
                digital
              </p>
              <a
                href="https://www.linkedin.com/company/northblue-agency/jobs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 transform hover:scale-105 transition-all"
                >
                  Ver oportunidades laborales
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
