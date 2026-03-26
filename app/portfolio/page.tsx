import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
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
    id: "verigoodlife",
    title: "Verigoodlife: Health Coaching & Nutrition",
    category: "Branding & E-commerce",
    client: "Verigoodlife",
    url: "https://verigoodlife.com/",
    slug: "/portfolio/verigoodlife",
    year: "2025",
    image: "/verigood/Verigood Desktop.png",
    description:
      "Full branding, WordPress + WooCommerce e-commerce, managed hosting, and ongoing technical support for a certified health & wellness coach.",
    results: [
      "+800% increase in monthly sales",
      "~1.2s mobile load time",
      "100% hosting uptime since launch",
    ],
    services: ["Branding", "E-commerce", "Web Development", "Tech Support"],
    featured: true,
  },
  {
    id: "novotour",
    title: "Novo Tour: Travel Agency",
    category: "Web Development & Rebranding",
    client: "Novo Tour",
    url: "https://novotour.com.ar/",
    slug: "/portfolio/novotour",
    year: "2024",
    image: "/novotour/Novotour.png",
    description:
      "Full website rebuild on WordPress + ACF, complete rebranding, SEO, and performance optimization for an Argentine travel agency. Conversions skyrocketed.",
    results: [
      "+3x conversion rate growth",
      "90+ PageSpeed score",
      "+200% organic traffic",
    ],
    services: ["Rebranding", "WordPress", "ACF", "SEO", "Performance"],
    featured: true,
  },
  {
    id: "zipnova",
    title: "Zipnova: E-commerce Logistics",
    category: "Web Development & Rebranding",
    client: "Zipnova",
    url: "https://www.zipnova.com/",
    slug: "/portfolio/zipnova",
    year: "2025",
    image: "/zipnova/Zipnova.png",
    description:
      "Next.js frontend with headless WordPress + ACF backend, full rebranding, performance, and SEO for an integrated e-commerce logistics platform.",
    results: [
      "95+ PageSpeed score",
      "+250% organic traffic growth",
      "Core Web Vitals all green",
    ],
    services: ["Rebranding", "Next.js", "Headless WordPress", "ACF", "SEO"],
    featured: true,
  },
];

const categories = [
  "All",
  "Web Development",
  "Branding",
  "Digital Marketing",
  "E-commerce",
];

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio | North Blue Agency",
    description:
      "Discover our successful digital marketing, branding, and web development projects",
    url: `${BASE_URL}/portfolio`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Portfolio",
          item: `${BASE_URL}/portfolio`,
        },
      ],
    },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: `${BASE_URL}${project.slug}`,
      dateCreated: project.year,
      creator: {
        "@type": "Organization",
        name: "North Blue Agency",
        url: BASE_URL,
      },
      keywords: project.services.join(", "),
      about: {
        "@type": "Organization",
        name: project.client,
        url: project.url,
      },
    })),
  };

  return (
    <>
      <Script
        id="schema-portfolio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
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
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Success stories that demonstrate our commitment to excellence
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
                            <h4 className="font-semibold mb-2">Results:</h4>
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

                          <Link href={project.slug} className="mt-auto">
                            <Button
                              variant="outline"
                              className="w-full group/btn border-gray-300 hover:border-[#ff4081] hover:text-[#ff4081] transition-all"
                            >
                              View Case Study
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
                All Projects
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

                        <Link href={project.slug}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-[#ff4081] hover:text-[#ff4081] hover:bg-[#ff4081]/10 p-2 -m-2"
                          >
                            View case study
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

        {/* CTA Section */}
        <QuoteSection
          title="Ready to be our next success story?"
          subtitle="Let's work together to transform your digital presence and achieve extraordinary results"
          buttonText="Start my project"
        />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
