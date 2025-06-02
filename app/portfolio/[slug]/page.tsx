"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";

const projectData: Record<string, any> = {
  "ecommerce-fashion": {
    title: "Tienda Online de Moda",
    client: "Fashion Forward",
    category: "E-commerce",
    year: "2024",
    duration: "4 meses",
    budget: "$15,000 - $25,000",
    description:
      "Fashion Forward necesitaba una presencia online robusta para competir en el mercado digital de la moda. Desarrollamos una tienda online completa con funcionalidades avanzadas de e-commerce.",
    challenge:
      "El cliente tenía una tienda física exitosa pero carecía de presencia online. Necesitaban una plataforma que reflejara la calidad de sus productos y proporcionara una experiencia de compra excepcional.",
    solution:
      "Desarrollamos una tienda online moderna con diseño responsivo, integración de pagos múltiples, gestión de inventario en tiempo real y sistema de recomendaciones personalizadas.",
    results: [
      "300% aumento en ventas online en los primeros 6 meses",
      "50% reducción en tasa de rebote",
      "95% satisfacción del cliente según encuestas",
      "40% de las ventas totales ahora provienen del canal online",
      "Tiempo de carga de página reducido a 2.1 segundos",
    ],
    services: ["Desarrollo Web", "E-commerce", "SEO", "UX/UI Design"],
    technologies: ["Next.js", "Shopify", "Stripe", "Google Analytics"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonial: {
      text: "North Blue Agency transformó completamente nuestro negocio. La tienda online que desarrollaron superó todas nuestras expectativas y los resultados hablan por sí solos.",
      author: "María Fernández",
      role: "CEO, Fashion Forward",
    },
  },
  "restaurant-branding": {
    title: "Rebranding Restaurante Gourmet",
    client: "Sabores del Mar",
    category: "Branding",
    year: "2024",
    duration: "3 meses",
    budget: "$8,000 - $12,000",
    description:
      "Renovación completa de la identidad visual y estrategia de marketing digital para un restaurante gourmet especializado en mariscos.",
    challenge:
      "El restaurante tenía una imagen desactualizada que no reflejaba la calidad de su cocina. Necesitaban modernizar su marca y aumentar su presencia digital.",
    solution:
      "Creamos una nueva identidad visual elegante y sofisticada, desarrollamos una estrategia de contenido para redes sociales y implementamos un sistema de reservas online.",
    results: [
      "200% aumento en reservas online",
      "85% mejora en reconocimiento de marca",
      "150% crecimiento en seguidores de redes sociales",
      "4.8/5 rating promedio en plataformas de reseñas",
      "60% aumento en ventas durante los primeros 6 meses",
    ],
    services: ["Branding", "Redes Sociales", "Fotografía", "Desarrollo Web"],
    technologies: [
      "Adobe Creative Suite",
      "WordPress",
      "Instagram API",
      "OpenTable",
    ],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    testimonial: {
      text: "El rebranding que hizo North Blue Agency nos ayudó a posicionarnos como el restaurante gourmet de referencia en la ciudad. Los resultados fueron inmediatos.",
      author: "Carlos Mendoza",
      role: "Propietario, Sabores del Mar",
    },
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
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

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Organization",
      name: "North Blue Agency",
    },
    dateCreated: project.year,
    genre: project.category,
    client: {
      "@type": "Organization",
      name: project.client,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Volver al portfolio
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <div className="flex items-center text-white/80">
                      <Calendar size={16} className="mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {project.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-6">{project.client}</p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="relative">
                  <img
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <h2 className="text-3xl font-bold mb-6">El Desafío</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {project.challenge}
                  </p>

                  <h2 className="text-3xl font-bold mb-6">Nuestra Solución</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {project.solution}
                  </p>

                  <h2 className="text-3xl font-bold mb-6">
                    Resultados Obtenidos
                  </h2>
                  <div className="space-y-4 mb-8">
                    {project.results.map((result: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle
                          className="text-green-500 flex-shrink-0 mt-1"
                          size={20}
                        />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              <div>
                <AnimatedSection delay={200}>
                  <Card className="border-0 shadow-lg mb-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Detalles del Proyecto
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <span className="font-semibold text-gray-800">
                            Cliente:
                          </span>
                          <p className="text-gray-600">{project.client}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Duración:
                          </span>
                          <p className="text-gray-600">{project.duration}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Presupuesto:
                          </span>
                          <p className="text-gray-600">{project.budget}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Servicios:
                          </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.services.map(
                              (service: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                                >
                                  {service}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-800">
                            Tecnologías:
                          </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map(
                              (tech: string, idx: number) => (
                                <span
                                  key={idx}
                                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {project.testimonial && (
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-[#ff4081]/5 to-[#00b2ff]/5">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">
                          Testimonio del Cliente
                        </h3>
                        <blockquote className="text-gray-700 italic mb-4">
                          "{project.testimonial.text}"
                        </blockquote>
                        <div>
                          <p className="font-semibold">
                            {project.testimonial.author}
                          </p>
                          <p className="text-sm text-gray-600">
                            {project.testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        {project.images.length > 1 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Galería del Proyecto
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.images.slice(1).map((image: string, index: number) => (
                  <AnimatedSection key={index} delay={index * 100}>
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Imagen ${index + 2}`}
                      className="rounded-lg shadow-lg w-full"
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Te gustó este proyecto?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Podemos crear algo igual de impactante para tu negocio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 transform hover:scale-105 transition-all"
                  onClick={() => (window.location.href = "#contact")}
                >
                  Comenzar mi proyecto
                </Button>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="btn-white-hover border-white text-white hover:bg-white hover:text-[#ff4081]"
                  >
                    Ver más proyectos
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
