"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import { ArrowRight } from "lucide-react";

const seoSuiteLinks = [
  {
    title: "SEO + AIO + AEO + GEO",
    description:
      "Descubre nuestra solución integral que combina SEO tradicional con optimización para motores asistidos y generativos.",
    href: "/servicios/seo",
    accentFrom: "from-[#ff4081]",
    accentTo: "to-[#00b2ff]",
  },
  {
    title: "SEO Tradicional 360°",
    description:
      "Auditorías completas, optimización técnica y contenidos que refuerzan tu posicionamiento orgánico sostenible.",
    href: "/servicios/seo/seo-tradicional",
    accentFrom: "from-[#6366f1]",
    accentTo: "to-[#ec4899]",
  },
  {
    title: "AIO (Artificial Intelligence Optimization)",
    description:
      "Aplicamos IA para detectar oportunidades, automatizar insights de keywords y acelerar la ejecución estratégica.",
    href: "/servicios/seo/aio",
    accentFrom: "from-[#22d3ee]",
    accentTo: "to-[#ec4899]",
  },
  {
    title: "AEO (Answer Engine Optimization)",
    description:
      "Prepara tu marca para motores de respuesta, snippets enriquecidos y experiencias conversacionales.",
    href: "/servicios/seo/aeo",
    accentFrom: "from-[#2213e5]",
    accentTo: "to-[#ff4081]",
  },
  {
    title: "GEO (Generative Engine Optimization)",
    description:
      "Gana visibilidad en experiencias generativas con contenido semántico, datos estructurados y prompts curados.",
    href: "/servicios/seo/geo",
    accentFrom: "from-[#a855f7]",
    accentTo: "to-[#f97316]",
  },
];

export default function SEOSuiteLinks() {
  return (
    <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 bg-pink-500/10 blur-3xl" />
        <div className="absolute bottom-12 right-14 w-80 h-80 bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explora nuestro ecosistema SEO + IA
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Cada servicio aborda una dimensión clave del posicionamiento
            moderno. Conecta estrategias tradicionales, inteligencia artificial
            y optimización para motores de respuesta y experiencias generativas.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {seoSuiteLinks.map((service, index) => (
            <AnimatedSection key={service.href} delay={index * 75}>
              <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors">
                <CardContent className="p-6 flex flex-col h-full">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${service.accentFrom} ${service.accentTo} mb-5`}
                  >
                    <span className="text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 flex-1 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    Ver servicio
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
