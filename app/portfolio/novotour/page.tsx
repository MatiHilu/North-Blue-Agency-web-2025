import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Globe,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";
import { BASE_URL, caseStudySchema, breadcrumbSchema } from "@/lib/jsonld";
import type { Metadata } from "next";

const pageData = {
  title: "Novo Tour Case Study",
  subtitle: "Full Website Rebuild, Rebranding & SEO for a Travel Agency",
  description:
    "Full website rebuild, rebranding, SEO, and performance optimization for Novo Tour, an Argentine travel agency. Built on WordPress with Advanced Custom Fields. Conversions skyrocketed.",
  ogImage: `${BASE_URL}/images/og/portfolio-novotour.png`,
  canonical: `${BASE_URL}/portfolio/novotour`,
  keywords: [
    "case study",
    "wordpress",
    "acf",
    "travel agency",
    "rebranding",
    "seo",
    "performance",
    "north blue agency",
    "Novo Tour",
  ],
};

export const metadata: Metadata = {
  title: {
    default: pageData.title,
    template: "%s | North Blue Agency",
  },
  description: pageData.description,
  alternates: { canonical: pageData.canonical },
  keywords: pageData.keywords,
  openGraph: {
    title: `${pageData.title} | North Blue Agency`,
    description: pageData.description,
    url: pageData.canonical,
    type: "website",
    images: [
      { url: pageData.ogImage, alt: `${pageData.title} - North Blue Agency` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageData.title} | North Blue Agency`,
    description: pageData.description,
    images: [pageData.ogImage],
  },
  publisher: "North Blue Agency",
};

// =======================
// Local types
// =======================
type HeroMetric = {
  icon: ComponentType<{ size?: number }>;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

type ProposalPoint = { title: string; content: string };
type ChallengeBlock = { description: string; metrics: string[] };
type AchievementsBlock = { description: string; metrics: string[] };
type ConclusionBlock = { text: string; ongoing?: boolean };

type DetailedCaseStudy = {
  title: string;
  client: string;
  summary: string;
  category: string;
  year: string;
  services: string[];
  images: string[];
  heroMetrics: HeroMetric[];
  aboutClient: { logo?: string; description: string; industry: string };
  challenge: ChallengeBlock;
  proposal: { description: string; points: ProposalPoint[] };
  achievements: AchievementsBlock;
  conclusion: ConclusionBlock;
};

// =======================
// Data
// =======================
const project: DetailedCaseStudy = {
  title: "Novo Tour Case Study",
  client: "Novo Tour",
  summary:
    "Novo Tour is an Argentine travel agency. We rebuilt their entire digital presence from scratch: new brand identity, a fully custom WordPress site powered by ACF, and a focused SEO and performance strategy that drove conversions through the roof.",
  heroMetrics: [
    {
      icon: TrendingUp,
      value: 3,
      suffix: "x",
      prefix: "+",
      label: "Conversion rate growth",
      decimals: 0,
    },
    {
      icon: Globe,
      value: 90,
      suffix: "+",
      prefix: "",
      label: "PageSpeed score",
      decimals: 0,
    },
    {
      icon: BarChart3,
      value: 200,
      suffix: "%",
      prefix: "+",
      label: "Organic traffic increase",
      decimals: 0,
    },
  ],
  images: ["/novotour/Novotour.png"],
  aboutClient: {
    logo: "/novotour/NOVOTOUR-logo.png",
    description:
      "Novo Tour is a travel agency based in Argentina, specializing in national and international travel packages, custom itineraries, and group tours. They operate in a highly competitive market where trust, design, and search visibility are critical to standing out.",
    industry: "Travel & Tourism",
  },
  challenge: {
    description:
      "Novo Tour came to us with an outdated website that failed to convey trust or drive bookings. Their brand had no consistent identity, their site was slow and not mobile-friendly, and they had virtually no organic search presence. Leads were low and conversion was suffering.",
    metrics: [
      "Outdated design with no clear brand identity.",
      "Poor mobile experience and slow load times.",
      "No SEO strategy, nearly invisible on search engines.",
      "Low conversion rate from visitors to inquiries.",
    ],
  },
  proposal: {
    description:
      "We designed a complete solution covering every layer of their digital presence: how the brand looks and feels, how fast the site loads, and how it ranks on Google.",
    points: [
      {
        title: "Rebranding",
        content:
          "New logo, color palette, typography, and visual language that conveys professionalism, adventure, and trust. Built to convert browsers into buyers.",
      },
      {
        title: "WordPress + ACF Development",
        content:
          "Fully custom WordPress site with Advanced Custom Fields, giving the client complete control over content. Flexible page templates built for clarity and conversion.",
      },
      {
        title: "SEO & Performance",
        content:
          "On-page SEO strategy, technical optimization, Core Web Vitals tuning, and structured data implementation to maximize organic visibility and site speed.",
      },
    ],
  },
  achievements: {
    description:
      "After launch, the results were immediate and measurable. A faster, more trustworthy website with strong SEO foundations translated directly into more inquiries and revenue.",
    metrics: [
      "Conversion rate more than tripled post-launch.",
      "PageSpeed score improved to 90+ on mobile and desktop.",
      "Organic traffic grew by over 200% within months.",
      "Significant reduction in bounce rate across all pages.",
    ],
  },
  conclusion: {
    text: "The Novo Tour project is a clear example of what happens when branding, development, and SEO are treated as one unified strategy rather than separate tasks. A coherent identity, a fast and intuitive site, and strong search visibility created a virtuous cycle that multiplied their results.",
    ongoing: false,
  },
  category: "Web Development & Rebranding",
  year: "2025",
  services: ["Rebranding", "WordPress", "ACF", "SEO", "Performance"],
};

// =======================
// Page
// =======================
export default function NovotourPage() {
  const schemaArticle = caseStudySchema({
    name: pageData.title,
    description: pageData.description,
    url: "/portfolio/novotour",
    client: "Novo Tour",
    datePublished: "2023-06-01",
  });
  const schemaBreadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Novo Tour", url: "/portfolio/novotour" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <main className="bg-gray-900 text-white">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-black opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05]"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to portfolio
              </Link>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {project.client}
              </h1>
              <p className="mb-2 text-white/60 text-lg">{project.category}</p>
              <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/70 mb-12">
                {project.summary}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {project.heroMetrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div
                      key={metric.label}
                      className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-center text-cyan-300 mb-3">
                        <Icon size={28} />
                      </div>
                      <p className="text-4xl font-bold text-center">
                        {metric.prefix}
                        {metric.value}
                        {metric.suffix}
                      </p>
                      <p className="text-center text-white/60 text-sm">
                        {metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div className="bg-white text-gray-800">
          <div className="container mx-auto px-4 space-y-24 pb-24">
            {/* About the client */}
            <section className="py-16 sm:py-24 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <AnimatedSection className="md:col-span-1 flex flex-col items-center text-center">
                {project.aboutClient.logo && (
                  <img
                    src={project.aboutClient.logo}
                    title={`${project.client} logo`}
                    alt={`${project.client} logo`}
                  />
                )}

                <p className="text-gray-600 font-semibold">
                  {project.aboutClient.industry}
                </p>
              </AnimatedSection>
              <AnimatedSection className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">About the Client</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.aboutClient.description}
                </p>
              </AnimatedSection>
            </section>

            {/* The Challenge */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white px-8 sm:px-12 py-16">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="relative space-y-8 max-w-4xl m-auto">
                <AnimatedSection>
                  <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/80">
                    Initial Diagnosis
                  </div>
                  <h2 className="mt-6 text-3xl sm:text-4xl font-bold leading-snug">
                    The Challenge
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                    {project.challenge.description}
                  </p>
                </AnimatedSection>
                <AnimatedSection>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {project.challenge.metrics.map((metric, index) => (
                      <li
                        key={index}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/30"
                      >
                        <div className="absolute inset-px opacity-0 group-hover:opacity-100 rounded-[18px] bg-gradient-to-br from-white/10 to-transparent" />
                        <span className="relative text-sm sm:text-base text-white/90 leading-relaxed">
                          {metric}
                        </span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            </section>

            {/* Our Proposal */}
            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-8 sm:px-12 py-16">
              <div className="absolute right-10 top-10 hidden h-32 w-32 rounded-full bg-sky-200/40 blur-2xl lg:block" />
              <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-cyan-100/60 blur-3xl" />
              <AnimatedSection className="relative text-center max-w-3xl mx-auto space-y-5">
                <div className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
                  Strategic Route
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Our Proposal
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {project.proposal.description}
                </p>
              </AnimatedSection>
              <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                {project.proposal.points.map((point, index) => (
                  <AnimatedSection key={point.title} delay={index * 120}>
                    <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-20px_rgba(15,64,128,0.25)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_-20px_rgba(12,74,110,0.35)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/0 via-white/0 to-sky-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative space-y-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-lg">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {point.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {point.content}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>

            {/* Results */}
            <section className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 sm:px-12 py-16 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_55%)]" />

              <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
                <AnimatedSection>
                  <div className="overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={project.images[0]}
                      title="Project results"
                      alt="Project results"
                      className="w-full object-cover"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection className="space-y-8">
                  <AnimatedSection>
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/80">
                      Impact in Numbers
                    </div>
                    <h2 className="mt-6 text-3xl sm:text-4xl font-bold">
                      Results
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                      {project.achievements.description}
                    </p>
                  </AnimatedSection>
                  <AnimatedSection>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {project.achievements.metrics.map((metric, index) => (
                        <li
                          key={index}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200/60"
                        >
                          <div className="absolute inset-px rounded-[18px] bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <div className="relative flex items-start gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-300" />
                            <span className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                              {metric}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                </AnimatedSection>
              </div>
            </section>

            {/* Conclusion */}
            <section className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 px-8 sm:px-12 py-16 text-white">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_55%)]" />
              <AnimatedSection className="relative max-w-3xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold">Conclusion</h2>
                <p className="text-base sm:text-lg leading-relaxed text-white/90">
                  {project.conclusion.text}
                </p>
                <div className="flex flex-wrap gap-3 justify-center mt-6">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="bg-white/20 border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <QuoteSection
          title="Like what you see?"
          subtitle="Let's work together to transform your digital presence and achieve extraordinary results"
          buttonText="Start my project"
        />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
}
