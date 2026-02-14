import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import { BASE_URL } from "@/lib/jsonld";
import type { Metadata } from "next";
// SEOHead eliminado: migraremos a Metadata API

const serviceData = {
  title: "Desarrollo Web",
  subtitle: "Sitios web que convierten visitantes en clientes",
  description:
    "Creamos sitios modernos, rápidos y orientados a la conversión. Aplicamos mejores prácticas de UX/UI y SEO técnico para maximizar resultados.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "Desde: USD 1500",
  duration: "6–12 semanas",
  features: [
    "Diseño responsivo (mobile-first)",
    "Optimización de velocidad (Core Web Vitals)",
    "SEO técnico implementado (schema, sitemaps, metas, indexación)",
    "Integración con Analytics/Tag Manager",
    "Formularios de contacto avanzados",
    "CMS fácil de usar (editor visual + guía rápida)",
  ],
  process: [
    { title: "Planificación", description: "Arquitectura, alcance y KPIs" },
    {
      title: "Diseño UX/UI",
      description: "Wireframes y diseño visual orientado a conversión",
    },
    {
      title: "Desarrollo",
      description: "Código limpio y componentes reutilizables",
    },
    {
      title: "Lanzamiento",
      description: "QA, puesta en producción y optimización inicial",
    },
  ],
  benefits: [
    "Aumento de conversiones",
    "Mejor posicionamiento en Google",
    "Experiencia de usuario superior",
    "Reducción de la tasa de rebote",
    "Incremento de ventas y ticket promedio",
    "Checkout optimizado para e‑commerce",
  ],
};

const faqs = [
  {
    question: "¿Qué plataforma de e‑commerce recomiendan?",
    answer:
      "Depende del contexto: Shopify para salir rápido y con ecosistema sólido; WooCommerce si querés integrarlo a tu WordPress y tener más flexibilidad. Para alto rendimiento o integraciones complejas, podemos plantear arquitectura headless con Next.js.",
  },
  {
    question: "¿Qué medios de pago integran?",
    answer:
      "Integramos pasarelas como Mercado Pago, Stripe y PayPal, además de métodos locales según tu país.",
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer:
      "Trabajamos con tecnologías modernas: Next.js, React, TypeScript y Tailwind en frontend; WordPress por defecto para CMS; o Node.js en backend si el proyecto lo requiere.",
  },
  {
    question: "¿El sitio será responsivo?",
    answer:
      "Sí. Desarrollamos con enfoque mobile-first y probamos en múltiples dispositivos.",
  },
  {
    question: "¿Incluye hosting y dominio?",
    answer:
      "Incluimos hosting el primer año y te asistimos con el dominio. Luego podés continuar con nosotros o con tu proveedor.",
  },
  {
    question: "¿Pueden tomar mi sitio actual aunque no esté en WordPress?",
    answer:
      "Sí. Tomamos sitios heredados en Shopify, Wix, Webflow, etc o código a medida. Podemos mantenerlos, optimizarlos o migrarlos.",
  },
  {
    question: "¿Por qué WordPress por defecto?",
    answer:
      "Porque ofrece rapidez de desarrollo, facilidad de edición para tu equipo, ecosistema maduro y excelente base SEO. Si tu proyecto requiere otra arquitectura, te proponemos la mejor opción y un presupuesto a medida.",
  },
  {
    question: "¿Qué plazos manejan y cómo se define el precio final?",
    answer:
      "El plazo típico es 6–12 semanas. El costo final depende de alcance, integraciones y entregables. Partimos desde USD 1200 y ajustamos según tu proyecto.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/services/desarrollo-web` },
  keywords: [
    "desarrollo web",
    "sitios web",
    "diseño web",
    "desarrollo frontend",
    "e‑commerce",
    "next.js",
    "wordpress",
    "seo técnico",
    "agencia digital",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/services/desarrollo-web`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/services-desarrollo-web.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/services-desarrollo-web.png`],
  },
  publisher: "North Blue Agency",
};

export default function DesarrolloWebPage() {
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
                href="/services"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Volver a servicios
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {serviceData.title}
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
                    <span className="font-semibold">{serviceData.price}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Descripción y beneficios (más limpio, sin cards) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Qué incluye este servicio?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
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
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200/70 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Características</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceData.features.map(
                      (feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="text-white" size={12} />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Soluciones (consolidado, menos cards) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Soluciones a tu medida
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Elegí el camino que mejor se adapte a tu proyecto. Nosotros nos
                encargamos del resto.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="h-full p-8 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-3">
                    Proyectos desde cero
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Para sitios corporativos, landings, blogs y catálogos
                    trabajamos por defecto con
                    <strong> WordPress</strong> por su flexibilidad y facilidad
                    de uso.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-gray-700">
                        CMS fácil de usar y editor visual
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <Check className="text-gray-700" size={12} />
                      </div>
                      <span className="text-gray-700">
                        Guía rápida y capacitación incluida
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Para soluciones avanzadas (headless, apps, e‑commerce a gran
                    escala) evaluamos otras tecnologías: Next.js, Shopify, etc.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="h-full p-8 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-3">
                    Sitios heredados y migraciones
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Tomamos proyectos en WordPress, Shopify, (otros) o código a
                    medida. Mantenemos, optimizamos o migramos conservando SEO y
                    analíticas.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-gray-700">
                        Migración sin pérdida de tráfico ni datos
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <Check className="text-gray-700" size={12} />
                      </div>
                      <span className="text-gray-700">
                        Optimización y mantenimiento sobre tu stack actual
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* E‑commerce focus */}
        <section id="ecommerce" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                E‑commerce que vende
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tiendas online rápidas, seguras y listas para escalar. Diseñadas
                para convertir y pensadas para operaciones reales.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="h-full p-8 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-md">
                  <h3 className="text-2xl font-bold mb-4">
                    Características clave
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Catálogo con variantes, stock, SKUs y atributos
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Checkout optimizado y medios de pago (Mercado Pago,
                        Stripe, PayPal)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Integraciones de envío y cálculo de tarifas por zonas
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Emails transaccionales y recuperación de carrito
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>Búsqueda con filtros, orden y wishlist</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        SEO para productos (rich snippets, schema, sitemap)
                      </span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="h-full p-8 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-md">
                  <h3 className="text-2xl font-bold mb-4">
                    Plataformas y stack
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#00b2ff] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        WooCommerce: flexibilidad total sobre WordPress
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#00b2ff] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Shopify: time‑to‑market rápido y ecosistema de apps
                      </span>
                    </li>

                    {/* <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#00b2ff] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Headless con Next.js para performance y control avanzado
                      </span>
                    </li> */}
                    {/* <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#00b2ff] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Integraciones: CRM/ERP, Meta & Google Ads, Analytics 4,
                        Tag Manager
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#00b2ff] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Reporting: dashboards de ventas, embudos y cohortes
                      </span>
                    </li> */}
                  </ul>

                  <div className="mt-6">
                    <a href="#contact">
                      <Button
                        size="lg"
                        className="btn-white-hover bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:opacity-90"
                      >
                        Quiero vender online
                      </Button>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Servicios complementarios (unificado, sin cards) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Servicios complementarios
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Te acompañamos después del lanzamiento para que tu web se
                mantenga segura, rápida y al día.
              </p>
            </AnimatedSection>

            <div className="grid gap-10 md:grid-cols-3">
              <AnimatedSection>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Mantenimiento & Soporte
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Planes para mantener tu sitio seguro y actualizado.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>Actualizaciones seguras y backups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>Monitoreo 24/7 y parches de seguridad</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>Soporte por tickets/WhatsApp y SLA</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Actualizaciones & Mejoras
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Rediseños, landings y nuevas integraciones.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>Rediseños y landings de campaña</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>Integraciones (CRM, pagos, chat)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>Accesibilidad, multilenguaje y optimizaciones</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Hosting & Puesta en marcha
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Primer año incluido. También trabajamos con tu proveedor.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>SSL, backups automáticos y seguridad</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>Optimización de caché / CDN</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                        <Check className="text-white" size={12} />
                      </div>
                      <span>
                        Opcional: staging, servidores dedicados y CI/CD
                      </span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Tecnologías y entregables (banda simple) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="p-8 md:p-10 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-sm">
              <div className="grid gap-8 md:grid-cols-2">
                <AnimatedSection>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Tecnologías de proyectos más complejos
                    </h3>
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">
                          Frontend: Next.js, React, TypeScript, Tailwind
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">
                          Backend: WordPress
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">
                          E‑commerce: WooCommerce o Shopify
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Entregables</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span>Sitio listo para producción + accesos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span>
                          Manual rápido del CMS + sesión de capacitación
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span>
                          Matriz de métricas (Analytics/Tag Manager configurado)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span>Plan de mantenimiento recomendado</span>
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso (timeline simple, sin cards) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestro proceso de trabajo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Metodología clara y enfocada en resultados.
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Line connector */}
              <div className="hidden lg:block absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-[#ff4081] via-[#ff83ab] to-[#00b2ff] rounded-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {serviceData.process.map((step: any, index: number) => (
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
