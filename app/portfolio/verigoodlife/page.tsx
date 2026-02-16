import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, TrendingUp, Zap, Award } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";
import { BASE_URL } from "@/lib/jsonld";
import type { Metadata } from "next";

// =======================
// Metadata (igual que Analytics)
// =======================
const pageData = {
  title: "Caso de Estudio — VeriGoodLife",
  subtitle: "Branding, E-commerce y Soporte Técnico Continuo",
  description:
    "Branding, E-commerce y Soporte Técnico Continuo para la plataforma de bienestar VeriGoodLife. Diseño de identidad, WordPress + WooCommerce, hosting administrado y soporte permanente orientados a conversión y performance.",
  ogImage: `${BASE_URL}/images/og/portfolio-verigoodlife.png`, // ajusta el path si usás otro
  canonical: `${BASE_URL}/portfolio/verigoodlife`,
  keywords: [
    "caso de estudio",
    "branding",
    "woocommerce",
    "wordpress",
    "ecommerce",
    "desarrollo web",
    "soporte técnico",
    "north blue agency",
    "VeriGoodLife",
  ],
};

export const metadata: Metadata = {
  title: {
    default: pageData.title,
    template: "%s | North Blue Agency",
  },
  description: pageData.description,
  alternates: { canonical: pageData.canonical },
  keywords: pageData.keywords,
  openGraph: {
    title: `${pageData.title} - North Blue Agency`,
    description: pageData.description,
    url: pageData.canonical,
    type: "website",
    images: [
      {
        url: pageData.ogImage,
        alt: `${pageData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageData.title} - North Blue Agency`,
    description: pageData.description,
    images: [pageData.ogImage],
  },
  publisher: "North Blue Agency",
};

// =======================
// Tipados locales
// =======================
type HeroMetric = {
  icon: ComponentType<{ size?: number }>;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

type ProposalPoint = {
  title: string;
  content: string;
};

type ChallengeBlock = {
  description: string;
  metrics: string[];
};

type AchievementsBlock = {
  description: string;
  metrics: string[];
};

type ConclusionBlock = {
  text: string;
  ongoing?: boolean;
};

type CaseStudy = {
  title: string;
  client: string;
  description: string;
  category: string;
  year: string;
  services: string[];
  images: string[];
  summary?: string;
  heroMetrics?: HeroMetric[];
  aboutClient?: {
    logo?: string;
    description: string;
    industry: string;
  };
  challenge?: ChallengeBlock | string;
  proposal?: {
    description: string;
    points: ProposalPoint[];
  };
  objectives?: string[];
  whatWeDid?: Record<string, string>;
  stack?: string[];
  achievements?: AchievementsBlock;
  conclusion?: ConclusionBlock;
  duration?: string;
  budget?: string;
  technologies?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  solution?: string;
  results?: string[];
};

type DetailedCaseStudy = CaseStudy & {
  summary: string;
  heroMetrics: HeroMetric[];
  aboutClient: {
    logo?: string;
    description: string;
    industry: string;
  };
  challenge: ChallengeBlock;
  proposal: {
    description: string;
    points: ProposalPoint[];
  };
  achievements: AchievementsBlock;
  conclusion: ConclusionBlock;
};

const isDetailedCaseStudy = (
  project: CaseStudy
): project is DetailedCaseStudy =>
  Boolean(
    project.summary &&
      project.heroMetrics &&
      project.aboutClient &&
      project.challenge &&
      typeof project.challenge !== "string" &&
      project.proposal &&
      project.achievements &&
      project.conclusion
  );

// =======================
// Data (igual que tu versión)
// =======================
const projectData: Record<string, CaseStudy> = {
  verigoodlife: {
    title: "Caso de Estudio — VeriGoodLife",
    client: "VeriGoodLife",
    summary:
      "VeriGoodLife es la plataforma de bienestar de Veri Bianco. Desde North Blue abordamos branding (logo y paleta), sitio web + e-commerce, hosting y dominio, y brindamos soporte técnico continuo.",
    heroMetrics: [
      {
        icon: TrendingUp,
        value: 800,
        suffix: "%",
        prefix: "+",
        label: "Aumento de ventas mensuales",
        decimals: 0,
      },
      {
        icon: Zap,
        value: 1.2,
        suffix: "s",
        prefix: "~",
        label: "Performance móvil",
        decimals: 1,
      },
      {
        icon: Award,
        value: 100,
        suffix: "%",
        prefix: "",
        label: "Hosting Uptime",
        decimals: 0,
      },
    ],
    images: [
      "/verigood/Veri Bianco.jpg",
      "/verigood/VerigoodLife Tech Card.png",
      "/verigood/Verigood Desktop.png",
    ],
    aboutClient: {
      logo: "/verigood/VeryGoodLife-logo-final.svg",
      description:
        "VeriGoodLife es la plataforma de bienestar creada por Veri Bianco, enfocada en ofrecer programas de alimentación saludable, recetarios y sesiones personalizadas. Se dedican a mejorar la calidad de vida de sus clientes a través de contenido accesible y profesional.",
      industry: "Bienestar y Salud",
    },
    challenge: {
      description:
        "El principal desafío era profesionalizar la marca personal de Veri Bianco, que hasta el momento operaba de manera informal. Necesitaban una identidad visual coherente, una plataforma de e-commerce robusta para vender sus productos digitales y una operación técnica simplificada que no dependiera de procesos manuales.",
      metrics: [
        "Falta de un canal de ventas automatizado.",
        "Identidad visual inconsistente y poco profesional.",
        "Baja performance y experiencia de usuario en su sitio anterior.",
        "Procesos manuales para la entrega de productos y gestión de clientes.",
      ],
    },
    proposal: {
      description:
        "Propusimos una solución integral para construir una presencia digital sólida y autónoma. Nuestro enfoque se centró en tres pilares:",
      points: [
        {
          title: "Identidad & Sistema Visual",
          content:
            "Crear un logo, paleta cromática y criterios tipográficos que reflejaran profesionalismo y calidez.",
        },
        {
          title: "Plataforma E-commerce",
          content:
            "Desarrollar un sitio en WordPress + WooCommerce enfocado en la conversión, con flujos de compra y entrega de productos 100% automatizados.",
        },
        {
          title: "Infraestructura y Soporte",
          content:
            "Gestionar el hosting, dominio, seguridad (SSL, backups) y ofrecer soporte técnico continuo para garantizar la estabilidad y evolución de la plataforma.",
        },
      ],
    },
    objectives: [
      "Profesionalizar la marca con identidad coherente y legible en mobile.",
      "Vender online programas, recetarios y sesiones 1:1.",
      "Simplificar la operación (pagos, entregas, mantenimiento).",
      "Optimizar performance: carga rápida y disponibilidad alta.",
    ],
    whatWeDid: {
      "Identidad & Sistema Visual":
        "Logo y paleta cromática; criterios de uso tipográfico.",
      "Sitio Web + E-commerce (WordPress + WooCommerce)":
        "Arquitectura enfocada en conversión (home → catálogo → checkout). Productos descargables y sesiones/planes. Flujos de confirmación y entrega automática.",
      "Hosting, Dominio y Seguridad":
        "Gestión de dominio/DNS, SSL y backups. Mantenimiento y actualizaciones continuas.",
      "Soporte Técnico":
        "Altas de productos, ajustes menores de UX/SEO técnico y compatibilidades.",
    },
    stack: [
      "CMS: WordPress",
      "Comercio: WooCommerce (descargables + services)",
      "Infra: Hosting administrado (SSL + backups + hardening básico)",
      "Automatización: correos transaccionales y entrega inmediata de materiales",
    ],
    achievements: {
      description:
        "La implementación de la nueva plataforma y estrategia de marca generó resultados excepcionales en un corto período, validando el enfoque y la inversión.",
      metrics: [
        "Aumento de ventas mensuales superior al +800%.",
        "Tiempo de carga en móviles de ~1.2 segundos.",
        "100% de uptime del hosting desde el lanzamiento.",
      ],
    },
    conclusion: {
      text: "El caso de VeriGoodLife demuestra cómo una estrategia digital integral puede transformar una marca personal en un negocio online rentable y escalable. La combinación de un branding sólido, una plataforma tecnológica eficiente y un soporte confiable fue clave para superar los objetivos.",
      ongoing: true,
    },
    category: "Branding, E-commerce y Soporte Técnico Continuo",
    year: "2025",
    services: ["Branding", "E-commerce", "Desarrollo Web", "Soporte Técnico"],
    description:
      "Branding, E-commerce y Soporte Técnico Continuo para la plataforma de bienestar VeriGoodLife.",
  },
};

// =======================
// Page
// =======================
export default function ProjectDetailPage() {
  const slug = "verigoodlife";
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-[95vh] pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Proyecto no encontrado
          </h1>
          <Link href="/portfolio">
            <Button variant="secondary">Volver al portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isDetailedCaseStudy(project)) {
    const {
      summary,
      heroMetrics,
      aboutClient,
      challenge,
      proposal,
      achievements,
      conclusion,
    } = project;

    // Diseño V2 (sin <Script> de schema; Metadata API como en Analytics)
    return (
      <>
        <main className="bg-gray-900 text-white">
          {/* Hero */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-28">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-black opacity-90"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
              <AnimatedSection>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
                >
                  <ArrowLeft size={18} className="mr-2" />
                  Volver al portfolio
                </Link>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {project.client}
                </h1>
                <p className="mb-2">
                  Branding, E-commerce y Soporte Técnico Continuo
                </p>
                <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/70 mb-12">
                  {summary}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {heroMetrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div
                        key={metric.label}
                        className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-center text-cyan-300 mb-3">
                          <Icon size={28} />
                        </div>
                        <p className="text-4xl font-bold text-center">
                          {metric.prefix}
                          {metric.value}
                          {metric.suffix}
                        </p>
                        <p className="text-center text-white/60 text-sm">
                          {metric.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>
          </section>

          <div className="bg-white text-gray-800">
            <div className="container mx-auto px-4 space-y-24 pb-24">
              {/* Quién es el cliente */}
              <section className="py-16 sm:py-24 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <AnimatedSection className="md:col-span-1 flex flex-col items-center text-center">
                  {aboutClient.logo && (
                    <img
                      src={aboutClient.logo}
                      title={`${project.client} logo`}
                      alt={`${project.client} logo`}
                      className="h-20 mb-6"
                    />
                  )}
                  <p className="text-gray-600">{aboutClient.industry}</p>
                </AnimatedSection>
                <AnimatedSection className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-4">
                    Quién es el cliente
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {aboutClient.description}
                  </p>
                </AnimatedSection>
              </section>

              {/* Cuál es el desafío */}
              <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white px-8 sm:px-12 py-16">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                  <AnimatedSection className="space-y-8">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/80">
                      Diagnóstico inicial
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
                        Cuál es el desafío
                      </h2>
                      <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {challenge.metrics.map((metric, index) => (
                        <li
                          key={index}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/30"
                        >
                          <div className="absolute inset-px opacity-0 group-hover:opacity-100 rounded-[18px] bg-gradient-to-br from-white/10 to-transparent" />
                          <div className="relative flex items-start gap-3">
                            <span className="text-sm sm:text-base text-white/90 leading-relaxed">
                              {metric}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                  <AnimatedSection className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-70 blur-2xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-[0_35px_60px_-15px_rgba(15,55,122,0.6)]">
                      <img
                        src={project.images[0]}
                        title="Visual del desafío del proyecto"
                        alt="Visual del desafío del proyecto"
                        className="w-full object-cover"
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </section>

              {/* Qué propusimos */}
              <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-8 sm:px-12 py-16">
                <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full bg-sky-200/40 blur-2xl lg:block" />
                <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-cyan-100/60 blur-3xl" />
                <AnimatedSection className="relative text-center max-w-3xl mx-auto space-y-5">
                  <div className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
                    Ruta estratégica
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                    Qué propusimos
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    {project.proposal!.description}
                  </p>
                </AnimatedSection>
                <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {project.proposal!.points.map((point, index) => (
                    <AnimatedSection key={point.title} delay={index * 120}>
                      <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(15,64,128,0.25)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_-20px_rgba(12,74,110,0.35)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/0 via-white/0 to-sky-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative space-y-4">
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-lg">
                            {index + 1}
                          </span>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {point.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {point.content}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </section>

              {/* Qué se logró */}
              <section className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 sm:px-12 py-16 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_55%)]" />
                <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
                  <AnimatedSection>
                    <div className="overflow-hidden rounded-3xl border border-white/10">
                      <img
                        src={project.images[1]}
                        title="Resultados del proyecto"
                        alt="Resultados del proyecto"
                        className="w-full object-cover"
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection className="space-y-8">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/80">
                      Impacto en números
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold">
                        Qué se logró
                      </h2>
                      <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                        {project.achievements!.description}
                      </p>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {project.achievements!.metrics.map((metric, index) => (
                        <li
                          key={index}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200/60"
                        >
                          <div className="absolute inset-px rounded-[18px] bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative flex items-start gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-300" />
                            <span className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                              {metric}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                </div>
              </section>

              {/* Conclusiones */}
              <section className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 px-8 sm:px-12 py-16 text-white">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_55%)]" />
                <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
                  <AnimatedSection className="relative max-w-4xl lg:max-w-3xl mx-auto lg:mx-0 space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                      Conclusiones
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed text-white/90">
                      {project.conclusion!.text}
                    </p>
                    {project.conclusion!.ongoing && (
                      <div className="mx-auto lg:mx-0 inline-flex items-center gap-3 rounded-md lg:rounded-full border border-white/30 bg-white/20 px-2 lg:px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-lg backdrop-blur">
                        <span className="inline-flex h-3 w-3 rounded-full bg-emerald-300 animate-pulse" />
                        Hasta hoy, siguen confiando en nosotros para el soporte
                        y la evolución de su plataforma.
                      </div>
                    )}
                  </AnimatedSection>
                  {project.images[2] && (
                    <AnimatedSection className="relative">
                      <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-white/40 via-transparent to-purple-400/30 opacity-80 blur-2xl" />
                      <div className="relative overflow-hidden rounded-[30px] border border-white/30 bg-white/10 shadow-[0_35px_80px_-25px_rgba(26,15,112,0.65)] backdrop-blur">
                        <img
                          src={project.images[2]}
                          title="Material adicional del proyecto"
                          alt="Material adicional del proyecto"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-purple-500/30 mix-blend-screen" />
                      </div>
                      <div className="absolute bottom-4 left-1/2 flex w-[85%] -translate-x-1/2 items-center justify-between rounded-full border border-white/40 bg-white/15 px-5 py-3 text-xs sm:text-sm font-semibold text-white/90 shadow-xl backdrop-blur">
                        <span className="flex items-center gap-2 text-black">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 animate-pulse " />
                          En evolución constante
                        </span>
                        <span className="hidden sm:inline-flex text-black">
                          Soporte continuo
                        </span>
                      </div>
                    </AnimatedSection>
                  )}
                </div>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <QuoteSection
            title="¿Te gustó este proyecto?"
            subtitle="Trabajemos juntos para transformar tu presencia digital y alcanzar resultados extraordinarios"
            buttonText="Comenzar mi proyecto"
          />

          {/* Contact Section */}
          <ContactSection />
        </main>
      </>
    );
  }

  // Fallback por si no es DetailedCaseStudy (no debería ocurrir)
  return (
    <div className="min-h-[95vh] pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Proyecto</h1>
        <Link href="/portfolio">
          <Button variant="secondary">Volver al portfolio</Button>
        </Link>
      </div>
    </div>
  );
}
