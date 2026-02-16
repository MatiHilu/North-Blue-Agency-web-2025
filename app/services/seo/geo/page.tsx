import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Sparkle, SunMedium, Telescope } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import InlineCTA from "@/components/inline-cta";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";

const serviceData = {
  title: "GEO (Generative Engine Optimization)",
  subtitle:
    "Ensure visibility in generative experiences with semantic content, rich structures, and curated prompts",
  description:
    "Master generative search with GEO. We optimize your content for Google AI Overviews and multimodal assistants, ensuring visibility in the new AI era.",
  gradient: "from-[#a855f7] to-[#f97316]",
  price: "From $950/mo",
  duration: "4-8 months",
  features: [
    "GEO content and data audit",
    "Curatorial prompt guides",
    "Entity and knowledge graph optimization",
    "Multimodal structured content",
    "Playbooks for AI Overviews",
    "Generative coverage monitoring",
    "Asset scoring models",
    "Continuous update plans",
  ],
  process: [
    {
      title: "Semantic Discovery",
      description:
        "We analyze how generative engines interpret your brand, related entities, and available formats.",
    },
    {
      title: "GEO Architecture",
      description:
        "We define content structures, curatorial prompts, and priority assets by intent.",
    },
    {
      title: "Generative Production",
      description:
        "We create optimized content, enriched datasets, and visual/audio resources aligned with your goals.",
    },
    {
      title: "Continuous Optimization",
      description:
        "We monitor presence in generative experiences and adjust assets based on feedback and performance.",
    },
  ],
  benefits: [
    "Visibility in emerging generative experiences",
    "Content ready for AI Overviews",
    "Greater editorial control over AI responses",
    "Assets ready for multimodal contexts",
    "Robust and updated knowledge graph",
  ],
};

const faqs = [
  {
    question: "What platforms do you cover with GEO?",
    answer:
      "We focus on Google AI Overviews, Bing Copilot, Perplexity, marketplace engines, and multimodal assistants.",
  },
  {
    question: "How do you adapt existing content?",
    answer:
      "We audit your pieces and restructure them with semantic layers, structured data, and curatorial prompts to be readable by generative models.",
  },
  {
    question: "What role does new asset creation play?",
    answer:
      "We develop templates, datasets, and visual resources that feed generative responses and reinforce your brand narrative.",
  },
  {
    question: "How do you monitor GEO performance?",
    answer:
      "We combine scraping, APIs, and manual testing to evaluate appearance in generative summaries, response quality, and editorial consistency.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/services/seo/geo` },
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "AI Overviews",
    "Contenido generativo",
    "Knowledge graph",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/services/seo/geo`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/services-geo.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/services-geo.png`],
  },
  publisher: "North Blue Agency",
};

export default function GEOPage() {
  return (
    <div className="min-h-screen">
      <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <section
        className={`py-20 bg-gradient-to-br ${serviceData.gradient} text-white relative overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <Link
              href="/services/seo"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to SEO 360°
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {serviceData.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-8">
              {serviceData.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Sparkle size={20} />
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Telescope size={20} />
                  <span className="font-semibold">{serviceData.price}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lead in emerging generative results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#a855f7] to-[#f97316] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <InlineCTA
                  title="Diagnose your GEO potential"
                  description="Identify what assets your brand needs to stand out in AI Overviews and generative engines"
                  primaryLabel="Evaluate coverage"
                  type="quote"
                  accentColor="purple"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Essential GEO capabilities
                  </h3>
                  <div className="space-y-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#a855f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-r from-violet-50 to-orange-50 border border-violet-200/50 rounded-xl p-6 my-10 shadow-sm">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Editorial control in the generative era</strong>.
                  We document curatorial prompts, data sources, and guidelines so your internal teams can sustain the strategy long-term.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-12 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              GEO methodology centered on data and creativity
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We integrate semantic research, prompt engineering, and multimodal production to guarantee presence and consistency in generative experiences.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-slate-800 min-h-[250px]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#a855f7] to-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg text-gray-300 font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mx-auto text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#a855f7] to-[#f97316] bg-clip-text text-transparent">
              Visualize and measure your generative footprint
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We build indicators and dashboards combining generative visibility, engagement, and credibility signals to measure the real impact of the GEO strategy.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Coverage in AI Overviews
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We track the frequency and quality with which your brand appears in key generative summaries.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Multimodal consistency
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We evaluate coherence between texts, visuals, and structured data used by models.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Impact on demand
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We measure growth in brand searches, mentions, and traffic originated from generative experiences.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <InlineCTA
              title="I want to dominate generative engines"
              description="Schedule a strategic session and receive a GEO plan adapted to your goals"
              primaryLabel="Design GEO plan"
              type="contact"
              accentColor="purple"
              centered
            />
          </div>
        </div>
      </section>

      <FAQSection title="GEO FAQs" faqs={faqs} />

      <QuoteSection
        title="Turn generative AI into your ally"
        subtitle="We help you build a robust presence in generative experiences and AI Overviews"
        buttonText="Request a quote"
      />

      <ContactSection />
    </div>
  );
}
