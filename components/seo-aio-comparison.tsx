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
    aspect: "Focus",
    seo: "Manual optimization based on experience and best practices",
    aio: "Continuous AI-assisted optimization with pattern analysis, emerging opportunities, and signals for answer engines (AEO) and generative experiences (GEO)",
  },
  {
    aspect: "Implementation Speed",
    seo: "Monthly/weekly iterations",
    aio: "Near real-time iterations thanks to automations and predictive models",
  },
  {
    aspect: "Keyword Research",
    seo: "Prioritized lists and periodic review",
    aio: "Dynamic discovery + intelligent semantic clustering, rich entities, and optimized prompts for SGE and chatbots",
  },
  {
    aspect: "Content",
    seo: "Manually optimized writing",
    aio: "Smart briefs, gap analysis, and generative suggestions optimized for direct answers (always with human review)",
  },
  {
    aspect: "Trend Prediction",
    seo: "Reactive: acts when demand changes",
    aio: "Proactive: models detect trends before they scale and anticipate changes in generative engines",
  },
  {
    aspect: "Technical Automation",
    seo: "Spot audits",
    aio: "Continuous monitoring + intelligent alerts for critical issues",
  },
  {
    aspect: "Decision Making",
    seo: "Based on historical reports",
    aio: "Based on predictive data and algorithmic prioritization",
  },
  {
    aspect: "UX Personalization",
    seo: "Limited A/B testing and manual adjustments",
    aio: "Dynamic recommendations based on intent and behavioral segmentation",
  },
  {
    aspect: "Scalability",
    seo: "Dependent on team time",
    aio: "Processes and analysis scale with automation and trained models",
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
                    Traditional SEO
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
