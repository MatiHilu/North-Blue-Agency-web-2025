"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import { ArrowRight } from "lucide-react";

const seoSuiteLinks = [
  {
    title: "SEO + AIO + AEO + GEO",
    description:
      "Discover our comprehensive solution combining traditional SEO with optimization for assisted and generative engines.",
    href: "/services/seo",
    accentFrom: "from-[#ff4081]",
    accentTo: "to-[#00b2ff]",
  },
  {
    title: "Traditional SEO",
    description:
      "Complete audits, technical optimization, and content that reinforce your sustainable organic positioning.",
    href: "/services/seo/seo-tradicional",
    accentFrom: "from-[#6366f1]",
    accentTo: "to-[#ec4899]",
  },
  {
    title: "AIO (Artificial Intelligence Optimization)",
    description:
      "We apply AI to detect opportunities, automate keyword insights, and accelerate strategic execution.",
    href: "/services/seo/aio",
    accentFrom: "from-[#22d3ee]",
    accentTo: "to-[#ec4899]",
  },
  {
    title: "AEO (Answer Engine Optimization)",
    description:
      "Prepare your brand for answer engines, rich snippets, and conversational experiences.",
    href: "/services/seo/aeo",
    accentFrom: "from-[#2213e5]",
    accentTo: "to-[#ff4081]",
  },
  {
    title: "GEO (Generative Engine Optimization)",
    description:
      "Gain visibility in generative experiences with semantic content, structured data, and curated prompts.",
    href: "/services/seo/geo",
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
            Explore our SEO + AI Ecosystem
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Each service addresses a key dimension of modern positioning.
            Connect traditional strategies, artificial intelligence, and
            optimization for answer engines and generative experiences.
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
                    View service
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
