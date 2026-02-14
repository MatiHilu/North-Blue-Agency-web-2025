import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";

import Script from "next/script";
import { BASE_URL } from "@/lib/jsonld";
import EnhancedContactModal from "@/components/enhanced-contact-modal";
import type { Metadata } from "next";
import QuoteSection from "@/components/quote-section";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Discover our successful digital marketing, branding, and web development projects",
  alternates: { canonical: "/portfolio" },
  publisher: "North Blue Agency",
  keywords: [
    "portfolio",
    "case studies",
    "projects",
    "digital marketing",
    "branding",
    "web development",
  ],
  openGraph: {
    title: "Portfolio | North Blue Agency",
    description:
      "Discover our successful digital marketing, branding, and web development projects",
    url: "https://northblueagency.com/portfolio",
    type: "website",
  },
};

const projects = [
  {
    id: "ecommerce-fashion",
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    client: "Fashion Forward",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Complete development of online store with payment integration and inventory management.",
    results: [
      "300% increase in online sales",
      "50% reduction in bounce rate",
      "95% customer satisfaction",
    ],
    services: ["Web Development", "E-commerce", "SEO"],
    featured: true,
  },
  {
    id: "restaurant-branding",
    title: "Gourmet Restaurant Rebranding",
    category: "Branding",
    client: "Sabores del Mar",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Complete visual identity renewal and digital marketing strategy.",
    results: [
      "200% increase in reservations",
      "85% improvement in brand recognition",
      "150% growth in social media",
    ],
    services: ["Branding", "Social Media", "Ads Campaigns"],
    featured: true,
  },
  {
    id: "tech-startup",
    title: "Tech Startup Launch",
    category: "Digital Marketing",
    client: "InnovateTech",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Comprehensive market launch and positioning strategy.",
    results: [
      "500+ leads in first month",
      "40% conversion rate",
      "1M+ impressions on social media",
    ],
    services: ["Digital Marketing", "Web Development", "Branding"],
    featured: true,
  },
  {
    id: "fitness-app",
    title: "Fitness and Wellness App",
    category: "Web Development",
    client: "FitLife Pro",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Progressive web app development for exercise tracking.",
    results: [
      "10,000+ active users",
      "4.8/5 store rating",
      "60% monthly retention",
    ],
    services: ["Web Development", "UX/UI", "Digital Marketing"],
    featured: false,
  },
  {
    id: "real-estate",
    title: "Real Estate Portal",
    category: "Web Development",
    client: "PropiedadesPro",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Complete platform for real estate property search and management.",
    results: [
      "2,000+ properties listed",
      "80% increase in inquiries",
      "45% improvement in sale time",
    ],
    services: ["Web Development", "SEO", "Digital Marketing"],
    featured: false,
  },
  {
    id: "beauty-salon",
    title: "Premium Beauty Salon",
    category: "Branding",
    client: "Bella Vita Spa",
    year: "2022",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Complete visual identity and marketing strategy for beauty salon.",
    results: [
      "180% increase in appointments",
      "70% improvement in client retention",
      "250% growth on Instagram",
    ],
    services: ["Branding", "Social Media", "Ads Campaigns"],
    featured: false,
  },
];

const categories = [
  "All",
  "E-commerce",
  "Branding",
  "Digital Marketing",
  "Web Development",
];

export default function PortfolioPage() {
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
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  Portfolio
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Discover the projects that have transformed our clients' digital presence
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Proyectos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                  Destacados
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Casos de éxito que demuestran nuestro compromiso con la
                excelencia
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <AnimatedSection key={project.id} delay={index * 100}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden h-full">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Calendar size={14} className="mr-1" />
                            {project.year}
                            <span className="mx-2">•</span>
                            {project.client}
                          </div>

                          <h3 className="text-xl font-bold mb-3">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1">
                            {project.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Resultados:</h4>
                            <ul className="space-y-1">
                              {project.results
                                .slice(0, 2)
                                .map((result, idx) => (
                                  <li
                                    key={idx}
                                    className="text-sm text-gray-600 flex items-center"
                                  >
                                    <div className="w-1.5 h-1.5 bg-[#ff4081] rounded-full mr-2"></div>
                                    {result}
                                  </li>
                                ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.services.map((service, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                              >
                                {service}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/portfolio/${project.id}`}
                            className="mt-auto"
                          >
                            <Button
                              variant="outline"
                              className="w-full group/btn border-gray-300 hover:border-[#ff4081] hover:text-[#ff4081] transition-all"
                            >
                              Ver caso completo
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

        {/* All Projects */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Todos los Proyectos
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 50}>
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <Calendar size={12} className="mr-1" />
                          {project.year}
                        </div>

                        <h3 className="font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {project.description}
                        </p>

                        <Link href={`/portfolio/${project.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#ff4081] hover:text-[#ff4081] hover:bg-[#ff4081]/10 p-0"
                          >
                            Ver más
                            <ExternalLink size={14} className="ml-1" />
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

        {/* CTA Section */}
        <QuoteSection
          title="¿Listo para ser nuestro próximo caso de éxito?"
          subtitle="Trabajemos juntos para transformar tu presencia digital y
                alcanzar resultados extraordinarios"
          buttonText="Comenzar mi proyecto"
        />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
