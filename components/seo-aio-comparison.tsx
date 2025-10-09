"use client";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";

interface ComparisonItem {
  aspect: string;
  seo: string;
  aio: string;
}

const comparison: ComparisonItem[] = [
  {
    aspect: "Enfoque",
    seo: "Optimización manual basada en experiencia y mejores prácticas",
    aio: "Optimización continua asistida por IA con análisis de patrones, oportunidades emergentes y señales para motores de respuesta (AEO) y experiencias generativas (GEO)",
  },
  {
    aspect: "Velocidad de implementación",
    seo: "Iteraciones mensuales/semanales",
    aio: "Iteraciones casi en tiempo real gracias a automatizaciones y modelos predictivos",
  },
  {
    aspect: "Investigación de Keywords",
    seo: "Listas priorizadas y revisión periódica",
    aio: "Descubrimiento dinámico + clustering semántico inteligente, entidades enriquecidas y prompts optimizados para SGE y chatbots",
  },
  {
    aspect: "Contenido",
    seo: "Redacción optimizada manualmente",
    aio: "Briefs inteligentes, gap analysis y sugerencias generativas optimizadas para respuestas directas (siempre con revisión humana)",
  },
  {
    aspect: "Predicción de Tendencias",
    seo: "Reactivo: se actúa cuando cambia la demanda",
    aio: "Proactivo: modelos detectan tendencias antes de que escalen y anticipan cambios en motores generativos",
  },
  {
    aspect: "Automatización Técnica",
    seo: "Auditorías puntuales",
    aio: "Monitoreo continuo + alertas inteligentes de problemas críticos",
  },
  {
    aspect: "Toma de Decisiones",
    seo: "Basada en reportes históricos",
    aio: "Basada en datos predictivos y priorización algorítmica",
  },
  {
    aspect: "Personalización de UX",
    seo: "Pruebas A/B limitadas y ajustes manuales",
    aio: "Recomendaciones dinámicas basadas en intención y segmentación comportamental",
  },
  {
    aspect: "Escalabilidad",
    seo: "Dependiente del tiempo del equipo",
    aio: "Procesos y análisis escalan con automatización y modelos entrenados",
  },
];

export default function SEOAIOComparison() {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {comparison.map((item, i) => (
        <AnimatedSection key={item.aspect + i} delay={i * 60}>
          <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <CardContent className="p-5 flex flex-col h-full">
              <h3 className="text-lg font-semibold mb-3 text-white">
                {item.aspect}
              </h3>
              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-white/80">
                <div className="py-2">
                  <span className="block text-xs uppercase tracking-wide text-pink-300 font-medium mb-1">
                    SEO Tradicional
                  </span>
                  <p className="leading-relaxed">{item.seo}</p>
                </div>
                <div className="py-2">
                  <span className="block text-xs uppercase tracking-wide text-cyan-300 font-medium mb-1">
                    SEO + AIO + AEO + GEO
                  </span>
                  <p className="leading-relaxed">{item.aio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}
