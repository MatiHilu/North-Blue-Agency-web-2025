import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, Compass, MicVocal, Speech } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import InlineCTA from "@/components/inline-cta";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";

const serviceData = {
  title: "AEO (Answer Engine Optimization)",
  subtitle:
    "Optimize your brand to be the preferred answer in conversational engines and assisted experiences",
  description:
    "Become the preferred answer for voice assistants and chatbots. Our AEO strategy optimizes your brand for Siri, Alexa, and Bing Copilot.",
  gradient: "from-[#2213e5] to-[#ff4081]",
  price: "From $850/month",
  duration: "3-6 months",
  features: [
    "Conversational intent audit",
    "Entity and structured data optimization",
    "Scripts for voice search and chatbots",
    "Design of concise and rich answers",
    "Experimentation with prompts and formats",
    "Visibility monitor in answer engines",
    "Integration with knowledge graphs",
    "QA for multichannel consistency",
  ],
  process: [
    {
      title: "Conversational Research",
      description:
        "We investigate frequent questions, voice patterns, and user needs in assisted contexts.",
    },
    {
      title: "Semantic Architecture",
      description:
        "We define key entities, schema, and formats that maximize eligibility in answers.",
    },
    {
      title: "Production & Tests",
      description:
        "We create persuasive content, rich snippets, and guides for assistants.",
    },
    {
      title: "Monitoring & Optimization",
      description:
        "We measure positioning in answer engines and adjust prompts, entities, and formats.",
    },
  ],
  benefits: [
    "Greater presence in conversational experiences",
    "Consistent response in voice search and assistants",
    "Content ready for AI-first engines",
    "Greater thematic authority in key entities",
    "Robust and updated structured data",
  ],
};

const faqs = [
  {
    question: "Which engines do you cover with AEO?",
    answer:
      "We work with Google SGE, Bing Copilot, voice assistants (Alexa, Siri), Gemini, and emerging conversational engines.",
  },
  {
    question: "How is success measured in AEO?",
    answer:
      "We analyze presence in answer panels, snippets, voice search, and share of voice in conversational searches.",
  },
  {
    question: "Does AEO replace traditional SEO?",
    answer:
      "No. It complements it. Solid SEO is the foundation for AEO to amplify your results in answer engines.",
  },
  {
    question: "What role does content production play?",
    answer:
      "We design synthesized answers, thematic sheets, and Q&A structures that adapt to different assistants.",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${serviceData.title}`,
    template: "%s | North Blue Agency",
  },
  description: serviceData.description,
  alternates: { canonical: `${BASE_URL}/services/seo/aeo` },
  keywords: [
    "AEO",
    "Answer Engine Optimization",
    "Motores de respuesta",
    "Voice search",
    "Datos estructurados",
    "North Blue Agency",
  ],
  openGraph: {
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    url: `${BASE_URL}/services/seo/aeo`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og/services-aeo.png`,
        alt: `${serviceData.title} - North Blue Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${serviceData.title} - North Blue Agency`,
    description: serviceData.description,
    images: [`${BASE_URL}/images/og/services-aeo.png`],
  },
  publisher: "North Blue Agency",
};

export default function AEOPage() {
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
                  <Speech size={20} />
                  <span className="font-semibold">{serviceData.duration}</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Compass size={20} />
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
                Be the Immediate and Reliable Answer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {serviceData.description}
              </p>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#2213e5] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <InlineCTA
                  title="Evaluate your presence in answer engines"
                  description="Detect opportunities to win featured answers and optimize your conversational coverage"
                  primaryLabel="I want to diagnose"
                  type="quote"
                  accentColor="blue"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Key AEO Capabilities
                  </h3>
                  <div className="space-y-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#2213e5] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gradient-to-r from-cyan-50 to-sky-50 border border-cyan-200/50 rounded-xl p-6 my-10 shadow-sm">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Consistent Experiences</strong>. We believe in coordinated responses between engines, chatbots, and your own channels. That's why we document key messages, entities, and verified sources.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/20 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Methodology to Master Assisted Answers
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Our AEO methodology combines semantic strategy, prompt engineering, and multichannel testing to ensure consistent presence.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-slate-800 min-h-[250px]">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#2213e5] to-[#ff4081] rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#2213e5] to-[#ff4081] bg-clip-text text-transparent">
              Metrics and Conversational Monitoring
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We configure dashboards that combine visibility data in engines, snippet performance, and user feedback to keep optimizing every iteration.
            </p>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Conversational Share of Voice
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We identify how much your brand appears as an answer compared to the competition in strategic queries.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Response Quality
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We evaluate clarity, factuality, and tone in each monitored response.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3">
                    Semantic Integrity
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We monitor entities, relationships, and consistency with your knowledge base.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          <div className="mt-14">
            <InlineCTA
              title="I want to master conversational responses"
              description="Schedule a session and receive a personalized AEO roadmap"
              primaryLabel="Optimize for AEO"
              type="contact"
              accentColor="blue"
              centered
            />
          </div>
        </div>
      </section>

      <FAQSection title="AEO Questions" faqs={faqs} />

      <QuoteSection
        title="Be the Featured Answer"
        subtitle="We accompany your brand to lead in SGE, voice search, and chatbots"
        buttonText="Request Quote"
      />

      <ContactSection />
    </div>
  );
}
