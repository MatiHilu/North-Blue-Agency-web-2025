"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";

const blogPostData: Record<string, any> = {
  "tendencias-marketing-digital-2024": {
    title: "Las 10 Tendencias de Marketing Digital que Dominarán 2024",
    excerpt:
      "Descubre las estrategias y tecnologías que están revolucionando el marketing digital este año.",
    author: "María González",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Marketing Digital",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Tendencias", "Marketing Digital", "2024", "Estrategia"],
    content: `
      <p>El marketing digital evoluciona constantemente, y 2024 no es la excepción. Este año está marcado por innovaciones tecnológicas y cambios en el comportamiento del consumidor que están redefiniendo las estrategias de marketing.</p>

      <h2>1. Inteligencia Artificial y Automatización</h2>
      <p>La IA está transformando la forma en que las empresas interactúan con sus clientes. Desde chatbots más sofisticados hasta personalización de contenido en tiempo real, la inteligencia artificial se ha convertido en una herramienta indispensable.</p>

      <h2>2. Marketing de Voz y Búsquedas por Voz</h2>
      <p>Con el crecimiento de los asistentes virtuales, optimizar para búsquedas por voz se ha vuelto crucial. Las empresas deben adaptar su SEO para consultas conversacionales y preguntas directas.</p>

      <h2>3. Contenido Interactivo</h2>
      <p>Los usuarios buscan experiencias más inmersivas. Encuestas, quizzes, videos interactivos y realidad aumentada están ganando terreno como formas efectivas de engagement.</p>

      <h2>4. Marketing de Influencers Micro y Nano</h2>
      <p>Aunque los mega-influencers siguen siendo relevantes, las empresas están descubriendo el valor de trabajar con micro y nano-influencers que tienen audiencias más específicas y comprometidas.</p>

      <h2>5. Privacidad y Marketing Ético</h2>
      <p>Con regulaciones más estrictas sobre privacidad de datos, las empresas deben adoptar prácticas de marketing más transparentes y éticas, construyendo confianza con sus audiencias.</p>

      <h2>Conclusión</h2>
      <p>El marketing digital en 2024 se caracteriza por la personalización, la automatización inteligente y un enfoque más humano y ético. Las empresas que adopten estas tendencias estarán mejor posicionadas para el éxito.</p>
    `,
    relatedPosts: [
      "guia-completa-seo-2024",
      "redes-sociales-pequeñas-empresas",
    ],
  },
  "guia-completa-seo-2024": {
    title: "Guía Completa de SEO para 2024: Todo lo que Necesitas Saber",
    excerpt:
      "Una guía exhaustiva sobre las mejores prácticas de SEO y cómo implementarlas en tu sitio web.",
    author: "Carlos Rodríguez",
    date: "2024-01-10",
    readTime: "12 min",
    category: "SEO",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["SEO", "Google", "Posicionamiento", "Guía"],
    content: `
      <p>El SEO sigue siendo fundamental para el éxito online, pero las reglas del juego han cambiado significativamente. Esta guía te ayudará a navegar el panorama SEO de 2024.</p>

      <h2>Fundamentos del SEO Moderno</h2>
      <p>El SEO ya no se trata solo de palabras clave. Google ahora prioriza la experiencia del usuario, la autoridad del contenido y la relevancia contextual.</p>

      <h2>Core Web Vitals y Experiencia de Usuario</h2>
      <p>Los Core Web Vitals se han convertido en factores de ranking cruciales. Velocidad de carga, interactividad y estabilidad visual son métricas que no puedes ignorar.</p>

      <h2>SEO para Búsquedas por Voz</h2>
      <p>Optimizar para búsquedas por voz requiere un enfoque diferente. Concéntrate en preguntas naturales y respuestas concisas.</p>

      <h2>Contenido de Calidad y E-A-T</h2>
      <p>Expertise, Authoritativeness, y Trustworthiness (E-A-T) son más importantes que nunca. Crea contenido que demuestre conocimiento y autoridad en tu campo.</p>

      <h2>SEO Técnico Avanzado</h2>
      <p>Desde la implementación de datos estructurados hasta la optimización para dispositivos móviles, el SEO técnico sigue siendo la base de una estrategia exitosa.</p>

      <h2>Herramientas Esenciales</h2>
      <p>Google Search Console, SEMrush, Ahrefs y otras herramientas te ayudarán a monitorear y mejorar tu rendimiento SEO constantemente.</p>
    `,
    relatedPosts: [
      "tendencias-marketing-digital-2024",
      "diseño-web-conversiones",
    ],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostData[slug];

  if (!post) {
    return (
      <div className="min-h-[95vh] pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Artículo no encontrado
          </h1>
          <Link href="/blog">
            <Button variant="secondary">Volver al blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "North Blue Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://northblueagency.com/North-Blue-Agency.svg",
      },
    },
    image: `https://northblueagency.com${post.image}`,
    url: `https://northblueagency.com/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://northblueagency.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
                href="/blog"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Volver al blog
              </Link>

              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center text-white/80 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString("es-ES")}
                  </div>
                  <div className="flex items-center text-white/80 text-sm">
                    <Clock size={16} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-white/90 mb-8">{post.excerpt}</p>

                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center text-white/80">
                    <User size={16} className="mr-2" />
                    Por {post.author}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Share2 size={16} className="text-white/80" />
                    <span className="text-white/80 text-sm">Compartir:</span>
                    <button className="text-white/80 hover:text-white transition-colors">
                      <Facebook size={16} />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors">
                      <Twitter size={16} />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors">
                      <Linkedin size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full rounded-lg shadow-lg mb-12"
                />
              </AnimatedSection>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3">
                  <AnimatedSection>
                    <div
                      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#ff4081] prose-a:no-underline hover:prose-a:underline"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </AnimatedSection>

                  <AnimatedSection delay={200}>
                    <div className="mt-12 pt-8 border-t border-gray-200">
                      <h3 className="text-xl font-bold mb-4">Tags:</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#ff4081] hover:text-white transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                <div className="lg:col-span-1">
                  <AnimatedSection delay={300}>
                    <Card className="border-0 shadow-lg sticky top-24">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-4">
                          Sobre el Autor
                        </h3>
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src="/placeholder.svg?height=60&width=60"
                            alt={post.author}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-sm text-gray-600">
                              Marketing Specialist
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          Especialista en marketing digital con más de 5 años de
                          experiencia ayudando a empresas a crecer online.
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white"
                        >
                          Ver más artículos
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {post.relatedPosts && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Artículos{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                    Relacionados
                  </span>
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {post.relatedPosts.map((relatedSlug: string, index: number) => {
                  const relatedPost = blogPostData[relatedSlug];
                  if (!relatedPost) return null;

                  return (
                    <AnimatedSection key={relatedSlug} delay={index * 100}>
                      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <img
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-2 group-hover:text-[#ff4081] transition-colors">
                              {relatedPost.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              {relatedPost.excerpt}
                            </p>
                            <Link href={`/blog/${relatedSlug}`}>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-[#ff4081] hover:text-[#ff4081] hover:bg-[#ff4081]/10 p-0"
                              >
                                Leer más
                                <ArrowRight size={14} className="ml-1" />
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
