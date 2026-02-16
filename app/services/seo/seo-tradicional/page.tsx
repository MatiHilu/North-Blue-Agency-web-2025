import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BarChart3, Check, Gauge, Scale } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import InlineCTA from "@/components/inline-cta";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";

const serviceData = {
  title: "Traditional SEO 360°",
  subtitle:
    "Strengthen your organic visibility with an end-to-end SEO strategy across technical, on-page, and content pillars",
  description:
    "Strengthen your organic position with our 360° SEO strategy. We optimize technical health, content, and authority to guarantee sustained growth in search.",
  gradient: "from-[#6366f1] to-[#ec4899]",
  price: "From $750/mo",
  duration: "3-9 months",
  features: [
    "Comprehensive SEO audit",
    "Keyword research and clustering",
    "On-page optimization (titles, meta, content)",
    "Architecture and interlinking improvements",
    "SEO editorial roadmaps",
    "Ethical link building",
    "Custom dashboards",
    "Aligned with Core Web Vitals",
  ],
  process: [
    {
      title: "Discovery & Audit",
      description:
        "We map your digital ecosystem, analyze competitors, and prioritize technical and semantic quick wins.",
    },
    {
      title: "SEO Blueprint",
      description:
        "We design editorial lines, taxonomies, technical upgrades, and an incremental authority plan.",
    },
    {
      title: "Implementation",
      description:
        "We execute on-page optimizations, performance improvements, and automate reporting.",
    },
    {
      title: "Iteration",
      description:
        "We monitor rankings, measure conversion impact, and adjust the quarterly backlog.",
    },
  ],
  benefits: [
    "Solid, scalable SEO structure",
    "Progressive organic traffic growth",
    "Better positioning for strategic keywords",
    "Greater topical relevance and authority",
    "Site ready for advanced SEO integrations",
  ],
};

const faqs = [
  {
    question: "How often do you review the SEO strategy?",
    answer:
      "We run monthly technical checks, continuous editorial adjustments, and quarterly strategic reviews to keep the roadmap aligned with your goals.",
  },
  {
    question: "What tools do you use for research and monitoring?",
    answer:
      "We work with Search Console, GA4, crawling tools, and suites like Semrush/Ahrefs. We complement them with proprietary dashboards for actionable reporting.",
  },
  {
    question:
      "Can you collaborate with internal content or development teams?",
    answer:
      "Yes. We coordinate with your teams to align deliverables, provide implementation guides, and prioritize tasks by complexity and impact.",
  },
  {
    question: "Do you include support for migrations or redesigns?",
    answer:
      "We guide migration processes with pre- and post-launch audits, redirects, architecture adjustments, and intensive monitoring.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/services/seo/seo-tradicional` },
  keywords: [
    "SEO",
    "Technical SEO",
    "On-page optimization",
    "Link building",
    "Keyword research",
    "Core Web Vitals",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/services/seo/seo-tradicional`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/services-seo-tradicional.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/services-seo-tradicional.png`],
  },
  publisher: "North Blue Agency",
};

export default function SEOTradicionalPage() {
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
                  <Gauge size={20} />
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Scale size={20} />
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
                Ground your organic growth on solid fundamentals
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <InlineCTA
                  title="Request your technical SEO audit"
                  description="Surface priority opportunities and build an actionable roadmap"
                  primaryLabel="Audit my site"
                  type="quote"
                  accentColor="purple"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Core capabilities
                  </h3>
                  <div className="space-y-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#6366f1] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-r from-indigo-50 to-pink-50 border border-indigo-200/50 rounded-xl p-6 my-10 shadow-sm">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Why Traditional SEO 360°?</strong> Because it is the
                  foundation that supports every advanced positioning initiative.
                  Without technical infrastructure and content aligned to search
                  intent, any AI- or automation-led strategy falls short.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              From diagnosis to sustained execution
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We connect data, competitive insights, and editorial expertise to
              accelerate your positioning. This is our full methodology.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-slate-800 min-h-[250px]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">
              Reliable results, actionable reporting
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We measure and communicate the impact of every iteration. You get
              clear dashboards to assess performance against your critical KPIs
              and adjust decisions without losing momentum.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Visibility & Rankings
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ongoing tracking of positions, share of voice, and branded
                    searches to validate impact on market perception.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Traffic & Conversion
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We configure goals, conversions, and funnels in GA4 to
                    measure the real value of organic traffic.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">Salud Técnica</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We monitor Core Web Vitals, crawling, indexation, and
                    critical errors to keep your site optimized.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <InlineCTA
              title="I want to strengthen my traditional SEO"
              description="Schedule a strategic session and receive a roadmap of priority improvements"
              primaryLabel="Schedule consult"
              type="contact"
              accentColor="purple"
              centered
            />
          </div>
        </div>
      </section>

      <FAQSection title="Questions about Traditional SEO" faqs={faqs} />

      <QuoteSection
        title="Scale your organic visibility"
        subtitle="Let our team support you with a comprehensive, actionable SEO strategy"
        buttonText="Request quote"
      />

      <ContactSection />
    </div>
  );
}
