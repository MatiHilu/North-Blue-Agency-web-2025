import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import { BASE_URL } from "@/lib/jsonld";
import SEOAIOComparison from "@/components/seo-aio-comparison";
import InlineCTA from "@/components/inline-cta";
// Migrado a Metadata API
import type { Metadata } from "next";

function normalizeLocation(value?: string) {
  if (!value) return undefined;
  const spaced = value.replace(/-/g, " ");
  return spaced
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const serviceData = {
  title: "SEO & Ranking (with AIO, AEO & GEO)",
  subtitle:
    "Dominate top Google spots with SEO powered by AIO, AEO & GEO (Artificial, Answer & Generative Engine Optimization)",
  description:
    "Boost rankings with our advanced SEO (AIO, AEO, GEO). We optimize for search engines and AI to drive sustainable traffic and future-proof results.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "From $1200/month",
  duration: "3-12 months",
  features: [
    "Complete SEO audit",
    "Keyword research",
    "On-page optimization",
    "Technical optimization",
    "SEO content creation",
    "Strategic link building",
    "Local SEO and Google My Business",
    "Detailed monthly reports",
    "Optimization for Answer Engines (AEO)",
    "Generative Engine Optimization (GEO) & SGE",
  ],
  process: [
    {
      title: "Initial Audit",
      description: "Complete analysis of your website and competition",
    },
    {
      title: "Strategy",
      description: "We define keywords and optimization plan",
    },
    {
      title: "Optimization",
      description: "We implement technical and content improvements",
    },
    {
      title: "Monitoring",
      description: "Rankings tracking and continuous adjustments",
    },
  ],
  benefits: [
    "Increase in organic traffic",
    "Improvement in target keyword rankings",
    "Higher domain authority",
    "Visibility in answer engines and generative experiences",
    "Superior ROI compared to SEM marketing",
  ],
};

const faqs = [
  {
    question: "How long to see results with SEO + AIO + AEO + GEO?",
    answer:
      "We detect quick wins in the first 30-60 days thanks to AI-assisted analysis, while sustainable growth arrives between 3-6 months depending on competition. The combination of traditional SEO with AIO, AEO, and GEO accelerates prioritization and expands your visibility on multiple surfaces.",
  },
  {
    question: "Do you guarantee first place in Google or SGE?",
    answer:
      "We cannot promise specific positions because algorithms of Google, SGE, and other generative engines change constantly. We do commit to measurable improvements in visibility, organic traffic, and presence in assisted responses, backed by continuous experimentation and transparent reporting.",
  },
  {
    question: "What does the comprehensive SEO + AIO + AEO + GEO audit include?",
    answer:
      "We audit technical, content, interlinking, Core Web Vitals, and backlink profile, but also evaluate entities, structured data, critical prompts, and readiness for answer engines. We deliver a prioritized roadmap with quick wins, quarterly backlog, and recommendations for internal teams.",
  },
  {
    question: "How do you integrate AIO, AEO, and GEO into the strategy?",
    answer:
      "We use models and automations to discover opportunities, classify intent, generate briefs, and optimize key snippets. Then we manually validate everything and design content with featured snippets, direct answers, chatbots, and generative experiences in mind, without losing brand coherence.",
  },
  {
    question: "Who produces and validates AI-assisted content?",
    answer:
      "Our team leads the research, writes strategic pieces, and uses AI as a copilot to accelerate repetitive tasks. Every delivery undergoes human review, factual checks, tone of voice alignment, and E-E-A-T compliance before publishing.",
  },
  {
    question: "How do you measure and report results?",
    answer:
      "We configure custom dashboards with Search Console, GA4, ranking tracking tools, visibility in SGE/AI Overviews, and share of voice in generative responses. We share monthly reports with KPIs, learnings, and next priority experiments.",
  },
];
export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const raw = searchParams?.Location;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const location = normalizeLocation(slug);
  const slugPart = slug ? `-${slug}` : "";
  const canonical = `${BASE_URL}/services/seo${slugPart}`;
  const canonicalEn = `${BASE_URL}/services/seo${slugPart}`;

  return {
    title: {
      default: `${serviceData.title}${location ? ` - ${location}` : ""}`,
      template: "%s | North Blue Agency",
    },
    description: serviceData.description,
    alternates: {
      canonical,
      languages: { es: canonical, en: canonicalEn },
    },
    keywords: [
      "SEO",
      "AIO",
      "Artificial Intelligence Optimization",
      "AI SEO",
      "AEO",
      "Answer Engine Optimization",
      "GEO",
      "Generative Engine Optimization",
      "E-E-A-T",
      "EEAT",
      "Google E-E-A-T",
      "SEO experience",
      "SEO authority",
      "SEO trust",
      "web positioning",
      "search engine optimization",
      "SEO audit",
      "link building",
      "local SEO",
      "keyword research",
      "North Blue Agency",
    ],
    openGraph: {
      title: `${serviceData.title}${
        location ? ` - ${location}` : ""
      } - North Blue Agency`,
      description: serviceData.description,
      url: canonical,
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/og/services-seo.png`,
          alt: `${serviceData.title} - North Blue Agency`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} - North Blue Agency`,
      description: serviceData.description,
      images: [`${BASE_URL}/images/og/services-seo.png`],
    },
    publisher: "North Blue Agency",
  };
}

export default function SEOPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const raw = searchParams?.Location;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const locationText = normalizeLocation(slug);
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <section
          className={`py-20 bg-gradient-to-br ${serviceData.gradient} text-white relative overflow-hidden`}
        >
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <Link
                href="/services"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to services
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {serviceData.title}
                {locationText ? ` - ${locationText}` : ""}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-8">
                {serviceData.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span className="font-semibold">
                      {serviceData.duration}
                    </span>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp size={20} />
                    <span className="font-semibold">{serviceData.price}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What does this service include (SEO + AIO + AEO + GEO)?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {serviceData.description}
                </p>

                <div className="space-y-4">
                  {serviceData.benefits.map(
                    (benefit: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="text-white" size={14} />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="mt-10">
                  <InlineCTA
                    title="Request your SEO + AIO + AEO + GEO audit"
                    description="Complete site analysis + implementable quick wins"
                    primaryLabel="Get Audit"
                    type="quote"
                    accentColor="pink"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Included Features
                    </h3>
                    <div className="space-y-4">
                      {serviceData.features.map(
                        (feature: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="text-white" size={12} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
                <div className="bg-gradient-to-r from-pink-50 to-cyan-50 border border-pink-200/50 rounded-xl p-6 my-10 shadow-sm">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <strong>What is AIO, AEO & GEO?</strong> Artificial
                    Intelligence Optimization combines automations and models
                    to detect content gaps, group keywords by intent, anticipate trends,
                    generate intelligent briefs, and monitor technical health in (almost) real-time. AEO
                    allows us to optimize your experiences for answer engines
                    (like SGE and chatbots), while GEO ensures presence in
                    generative results. <strong>Always</strong> with
                    human supervision and aligned with your business goals.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SEO vs AIO Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Traditional SEO to SEO + AIO + AEO + GEO
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                We don’t abandon SEO basics: we empower them. We add layers of
                applied artificial intelligence, optimization for answer engines,
                and generative signals that allow us to discover opportunities before
                the competition and execute faster without sacrificing quality.
                Here are some key differences.
              </p>
            </AnimatedSection>
            <SEOAIOComparison />
            <div className="mt-14 text-center max-w-2xl mx-auto text-sm text-white/60">
              * AIO, AEO, and GEO do not replace human strategy or editorial validation.
              They complement and amplify our process to offer you accelerated and
              sustainable organic growth in search engines, answer engines, and
              generative experiences.
            </div>
            <div className="mt-16">
              <InlineCTA
                title="Implement AIO, AEO & GEO in your strategy"
                description="Integrate intelligent automation and presence in answer engines without losing control"
                primaryLabel="Start Now"
                type="contact"
                accentColor="blue"
                centered
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Work Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven methodology to ensure exceptional results
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceData.process.map((step: any, index: number) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 max-w-[200px] mx-auto text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* E-E-A-T Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] bg-clip-text text-transparent">
                We Comply with Google E-E-A-T
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Quality and credibility of content are key for sustainable SEO.
                Our approach integrates{" "}
                <strong>
                  E-E-A-T (Experience, Expertise, Authoritativeness,
                  Trustworthiness)
                </strong>{" "}
                in every phase: from initial audit to specific content creation
                and optimization.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <AnimatedSection delay={0}>
                <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">Experience</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We reflect real business experience: cases, processes,
                      implementation examples, and tangible results backed by internal data.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">Expertise</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Deep keyword research, advanced semantic analysis, and human
                      editorial validation on any AI-assisted output.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">
                      Authoritativeness
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We build authority combining deep content, strategic
                      interlinking, relevant mentions, and ethical link acquisition.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <Card className="h-full shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-3">
                      Trustworthiness
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Transparency in metrics, clear policies, technical security
                      (Core Web Vitals, HTTPS), and factual review to maintain trust.
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <AnimatedSection delay={400}>
                <div className="p-5 rounded-lg bg-gradient-to-r from-pink-50 to-white border border-pink-100">
                  <p className="text-sm text-gray-700">
                    We incorporate <strong>verifiable authors</strong> and
                    enrich entities to reinforce thematic relevance.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={450}>
                <div className="p-5 rounded-lg bg-gradient-to-r from-cyan-50 to-white border border-cyan-100">
                  <p className="text-sm text-gray-700">
                    We apply <strong>periodic audits</strong> of
                    accuracy and content updates (freshness control).
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={500}>
                <div className="p-5 rounded-lg bg-gradient-to-r from-violet-50 to-white border border-violet-100">
                  <p className="text-sm text-gray-700">
                    We use <strong>structured data</strong> and technical validation
                    to improve eligibility in rich results.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="mt-14">
              <InlineCTA
                title="Optimize your content with E-E-A-T"
                description="Build authority and trust in your niche"
                primaryLabel="Improve Now"
                type="quote"
                accentColor="purple"
                centered
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          title={`Questions about ${serviceData.title}`}
          faqs={faqs}
        />

        {/* CTA Section */}
        <QuoteSection
          title="Ready to dominate Google?"
          subtitle="Contact us today and discover how we can position your website in the top spots"
          buttonText="Request Quote"
        />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
