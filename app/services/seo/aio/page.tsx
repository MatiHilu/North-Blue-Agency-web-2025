import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, Check, Radar, Workflow } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import InlineCTA from "@/components/inline-cta";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";

const serviceData = {
  title: "AIO (Artificial Intelligence Optimization)",
  subtitle:
    "Scale your ranking with artificial intelligence applied to SEO research, production, and optimization",
  description:
    "Scale your SEO with Artificial Intelligence. AIO accelerates analysis and content through intelligent automation, prioritizing quality and fast results.",
  gradient: "from-[#22d3ee] to-[#ec4899]",
  price: "From $900/month",
  duration: "3-6 months",
  features: [
    "Automation and data audit",
    "Custom models for keyword clustering",
    "Smart briefs and guidelines by intent",
    "Early detection of trends and gaps",
    "Opportunity scoring systems",
    "Reporting and alert automation",
    "QA and human editorial validation",
    "Integration with existing SEO tools",
  ],
  process: [
    {
      title: "Process Mapping",
      description:
        "We identify repetitive tasks and bottlenecks to prioritize automations with real impact.",
    },
    {
      title: "Model Design",
      description:
        "We select models and templates, defining critical prompts and evaluation criteria.",
    },
    {
      title: "Assisted Implementation",
      description:
        "We integrate AI workflows into your SEO stack and coordinate with your team for adoption.",
    },
    {
      title: "Scaling & QA",
      description:
        "We monitor outputs, perform manual QA, and continuously optimize based on results.",
    },
  ],
  benefits: [
    "Faster and more consistent SEO processes",
    "Data-driven insights in less time",
    "Scalable content production capacity",
    "Intelligent prioritization of actions",
    "Human validation to maintain quality",
  ],
};

const faqs = [
  {
    question: "What tools or models do you use for AIO?",
    answer:
      "We work with leading models (OpenAI, Anthropic, open-source models) combined with proprietary data and existing SEO tools to generate actionable insights.",
  },
  {
    question: "Do I need an in-house team to implement AIO?",
    answer:
      "We can operate autonomously or collaborate with your marketing, content, and technology teams to integrate intelligent workflows.",
  },
  {
    question: "How do you ensure the quality of assisted outputs?",
    answer:
      "We design QA checklists, validate factuality, tone of voice, and strategic alignment before publishing or implementing.",
  },
  {
    question: "Can you adapt AIO to different industries?",
    answer:
      "Yes, we train prompts and specific data collections for your vertical, ensuring relevance and contextual precision.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/services/seo/aio` },
  keywords: [
    "AIO",
    "Artificial Intelligence Optimization",
    "AI SEO",
    "SEO Automation",
    "AI Models for SEO",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/services/seo/aio`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/services-aio.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/services-aio.png`],
  },
  publisher: "North Blue Agency",
};

export default function AIOPage() {
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
                  <Workflow size={20} />
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Radar size={20} />
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
                AI + SEO: the duo that accelerates results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#22d3ee] to-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <InlineCTA
                  title="Diagnose your AIO maturity"
                  description="Identify processes ready for automation and boost SEO content production"
                  primaryLabel="Evaluate my strategy"
                  type="quote"
                  accentColor="pink"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Capabilities enabled by AIO
                  </h3>
                  <div className="space-y-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-r from-pink-50 to-cyan-50 border border-pink-200/50 rounded-xl p-6 my-10 shadow-sm">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Responsible automation</strong>. Every delivery passes
                  through human QA. We document critical prompts, evaluation
                  criteria, and workflows to ensure consistency and
                  transparency.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-12 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How we integrate AI into your SEO stack
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We govern the full cycle: strategy, prompts, QA, and continuous
              improvement. These are the pillars of our AIO approach.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-slate-800 min-h-[250px]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#22d3ee] to-[#ec4899] rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
              Actionable metrics in near real-time
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We integrate performance dashboards that combine search signals,
              assisted production, and conversion results so you can make
              decisions with full context.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Prioritized opportunities
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Impact/effort matrices with dynamic scoring to choose
                    actions that generate better short-term results.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Audited assisted production
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Version control, editorial checklist, and performance
                    metrics for each piece generated or optimized with AI.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Monitored automations
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Early warnings of ranking drops, intent changes, and
                    performance of prioritized URLs.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <InlineCTA
              title="I want to activate AIO in my team"
              description="Schedule a strategic session and receive a personalized implementation plan"
              primaryLabel="Design AI flow"
              type="contact"
              accentColor="blue"
              centered
            />
          </div>
        </div>
      </section>

      <FAQSection title="Questions about AIO" faqs={faqs} />

      <QuoteSection
        title="Activate intelligence in your SEO"
        subtitle="We build AIO flows that combine automation, data, and human supervision"
        buttonText="Request a quote"
      />

      <ContactSection />
    </div>
  );
}
