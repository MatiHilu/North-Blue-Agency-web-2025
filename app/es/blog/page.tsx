"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";

const blogPosts = [
  {
    id: "tendencias-marketing-digital-2024",
    title: "Las 10 Tendencias de Marketing Digital que Dominarán 2024",
    excerpt:
      "Descubre las estrategias y tecnologías que están revolucionando el marketing digital este año.",
    content: "El marketing digital evoluciona constantemente...",
    author: "María González",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Marketing Digital",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Tendencias", "Marketing Digital", "2024", "Estrategia"],
    featured: true,
  },
  {
    id: "guia-completa-seo-2024",
    title: "Guía Completa de SEO para 2024: Todo lo que Necesitas Saber",
    excerpt:
      "Una guía exhaustiva sobre las mejores prácticas de SEO y cómo implementarlas en tu sitio web.",
    content: "El SEO sigue siendo fundamental...",
    author: "Carlos Rodríguez",
    date: "2024-01-10",
    readTime: "12 min",
    category: "SEO",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["SEO", "Google", "Posicionamiento", "Guía"],
    featured: true,
  },
  {
    id: "redes-sociales-pequeñas-empresas",
    title: "Cómo las Pequeñas Empresas Pueden Triunfar en Redes Sociales",
    excerpt:
      "Estrategias efectivas y económicas para que las PYMES destaquen en redes sociales.",
    content: "Las redes sociales ofrecen oportunidades únicas...",
    author: "Ana Martínez",
    date: "2024-01-05",
    readTime: "6 min",
    category: "Redes Sociales",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Redes Sociales", "PYMES", "Estrategia", "Social Media"],
    featured: true,
  },
  {
    id: "diseño-web-conversiones",
    title: "Diseño Web que Convierte: Principios y Mejores Prácticas",
    excerpt:
      "Aprende cómo diseñar sitios web que no solo se ven bien, sino que también generan conversiones.",
    content: "Un buen diseño web va más allá de la estética...",
    author: "Diego López",
    date: "2023-12-28",
    readTime: "10 min",
    category: "Desarrollo Web",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Diseño Web", "UX/UI", "Conversiones", "CRO"],
    featured: false,
  },
  {
    id: "email-marketing-efectivo",
    title: "Email Marketing Efectivo: Cómo Crear Campañas que Funcionan",
    excerpt:
      "Descubre las claves para crear campañas de email marketing que generen resultados reales.",
    content: "El email marketing sigue siendo uno de los canales...",
    author: "María González",
    date: "2023-12-20",
    readTime: "7 min",
    category: "Email Marketing",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Email Marketing", "Automatización", "Conversiones"],
    featured: false,
  },
  {
    id: "branding-digital-marca-personal",
    title: "Branding Digital: Cómo Construir una Marca Personal Sólida",
    excerpt:
      "Guía paso a paso para desarrollar y fortalecer tu marca personal en el entorno digital.",
    content: "En la era digital, tu marca personal es tu activo más valioso...",
    author: "Carlos Rodríguez",
    date: "2023-12-15",
    readTime: "9 min",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Branding", "Marca Personal", "Identidad Digital"],
    featured: false,
  },
];

const categories = [
  "Todos",
  "Marketing Digital",
  "SEO",
  "Redes Sociales",
  "Desarrollo Web",
  "Branding",
  "Email Marketing",
];

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog - North Blue Agency",
    description:
      "Artículos y guías sobre marketing digital, SEO, redes sociales y desarrollo web",
    url: "https://northblueagency.com/blog",
    publisher: {
      "@type": "Organization",
      name: "North Blue Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://northblueagency.com/North-Blue-Agency.svg",
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished: post.date,
      url: `https://northblueagency.com/blog/${post.id}`,
      image: `https://northblueagency.com${post.image}`,
      publisher: {
        "@type": "Organization",
        name: "North Blue Agency",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

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
                Nuestro{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  Blog
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Insights, tendencias y guías prácticas sobre marketing digital,
                SEO y desarrollo web
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Artículos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                  Destacados
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los contenidos más populares y actuales de nuestro blog
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, index) => (
                  <AnimatedSection key={post.id} delay={index * 100}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden h-full">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <User size={14} className="mr-1" />
                            {post.author}
                            <span className="mx-2">•</span>
                            <Calendar size={14} className="mr-1" />
                            {new Date(post.date).toLocaleDateString("es-ES")}
                            <span className="mx-2">•</span>
                            <Clock size={14} className="mr-1" />
                            {post.readTime}
                          </div>

                          <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff4081] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <Link href={`/blog/${post.id}`} className="mt-auto">
                            <Button
                              variant="outline"
                              className="w-full group/btn border-gray-300 hover:border-[#ff4081] hover:text-[#ff4081] transition-all"
                            >
                              Leer artículo completo
                              <ArrowRight
                                size={16}
                                className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                              />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Todos los Artículos
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 50}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <Calendar size={12} className="mr-1" />
                          {new Date(post.date).toLocaleDateString("es-ES")}
                          <span className="mx-2">•</span>
                          <Clock size={12} className="mr-1" />
                          {post.readTime}
                        </div>

                        <h3 className="font-bold mb-2 group-hover:text-[#ff4081] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <Link href={`/blog/${post.id}`}>
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
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿No te quieres perder nada?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe los mejores contenidos
                sobre marketing digital
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 px-6">
                  Suscribirse
                </Button>
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
