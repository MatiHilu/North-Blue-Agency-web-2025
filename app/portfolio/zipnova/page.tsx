import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, TrendingUp, Zap, Code2 } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";
import { BASE_URL, caseStudySchema, breadcrumbSchema } from "@/lib/jsonld";
import type { Metadata } from "next";

const pageData = {
  title: "Zipnova Case Study",
  subtitle: "Next.js Frontend + Headless WordPress, Rebranding & SEO",
  description:
    "Next.js + headless WordPress rebuild for Zipnova logistics. Complete rebranding, performance optimization, and SEO strategy that drove measurable growth.",
  ogImage: `${BASE_URL}/images/og/portfolio-zipnova.png`,
  canonical: `${BASE_URL}/portfolio/zipnova`,
  keywords: [
    "case study",
    "nextjs",
    "wordpress",
    "headless cms",
    "acf",
    "logistics",
    "ecommerce",
    "rebranding",
    "seo",
    "north blue agency",
    "Zipnova",
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
  stack: string[];
  heroMetrics: HeroMetric[];
  images: string[];
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
  title: "Zipnova Case Study",
  client: "Zipnova",
  summary:
    "Zipnova is an integrated logistics platform for e-commerce businesses. We rebuilt their entire digital presence: new brand identity, a blazing-fast Next.js frontend powered by a headless WordPress + ACF backend, paired with a full SEO and performance strategy.",
  heroMetrics: [
    {
      icon: Zap,
      value: 95,
      suffix: "+",
      prefix: "",
      label: "PageSpeed score",
      decimals: 0,
    },
    {
      icon: TrendingUp,
      value: 250,
      suffix: "%",
      prefix: "+",
      label: "Organic traffic growth",
      decimals: 0,
    },
    {
      icon: Code2,
      value: 40,
      suffix: "+",
      prefix: "",
      label: "Carrier integrations",
      decimals: 0,
    },
  ],
  stack: [
    "Frontend: Next.js (App Router)",
    "CMS: WordPress (Headless) + Advanced Custom Fields",
    "API: WPGraphQL / REST",
    "Hosting: Managed cloud infrastructure",
    "SEO: On-page, technical, structured data",
  ],
  images: ["/zipnova/Zipnova.png"],
  aboutClient: {
    logo: "/zipnova/zipnova-logo.svg",
    description:
      "Zipnova is an integrated logistics platform designed for e-commerce businesses. It connects merchants with 40+ carriers, offering inventory control, route optimization, warehousing, and automated order processing, all from a single dashboard. Their mission is to simplify fulfillment at any scale.",
    industry: "Logistics & E-commerce",
  },
  challenge: {
    description:
      "Zipnova had a powerful product but a digital presence that didn't reflect it. Their brand felt generic, the site was slow and hard to navigate, and their SEO was essentially non-existent. A platform built for scale deserved a website built for performance.",
    metrics: [
      "No coherent brand identity or visual system.",
      "Slow, outdated website with poor UX.",
      "No SEO presence, missing out on high-intent traffic.",
      "Content was hard to update and maintain without developers.",
    ],
  },
  proposal: {
    description:
      "We architected a modern stack that gave Zipnova the best of both worlds: the raw performance of Next.js on the frontend, and the editorial flexibility of WordPress with ACF on the backend, all wrapped in a completely new brand identity.",
    points: [
      {
        title: "Rebranding",
        content:
          "Complete visual identity overhaul: logo, color system, typography, and UI components, crafted to communicate trust, speed, and technical authority in the logistics space.",
      },
      {
        title: "Next.js + Headless WordPress",
        content:
          "Next.js frontend (App Router) consuming a headless WordPress backend via WPGraphQL. Advanced Custom Fields powers all flexible content types, giving the client full editorial control without touching code.",
      },
      {
        title: "SEO & Performance",
        content:
          "Technical SEO audit and implementation, Core Web Vitals optimization, structured data, sitemap strategy, and on-page content architecture, all tuned for maximum organic visibility.",
      },
    ],
  },
  achievements: {
    description:
      "The new stack delivered exceptional performance numbers from day one, and the SEO strategy began compounding results within weeks of launch.",
    metrics: [
      "PageSpeed score of 95+ on mobile and desktop.",
      "Organic traffic grew by over 250% within the first quarter.",
      "Content team can now update pages without developer involvement.",
      "Core Web Vitals all green across the entire site.",
    ],
  },
  conclusion: {
    text: "The Zipnova project showcases what a modern headless architecture can unlock: a site that's fast by default, editorially flexible, and built to scale. Combined with a strong rebrand and a grounded SEO strategy, the result is a digital presence that finally matches the quality of the product behind it.",
    ongoing: false,
  },
  category: "Web Development & Rebranding",
  year: "2025",
  services: [
    "Rebranding",
    "Next.js",
    "Headless WordPress",
    "ACF",
    "SEO",
    "Performance",
  ],
};

// =======================
// Page
// =======================
export default function ZipnovaPage() {
  const schemaArticle = caseStudySchema({
    name: pageData.title,
    description: pageData.description,
    url: "/portfolio/zipnova",
    client: "Zipnova",
    datePublished: "2024-01-01",
  });
  const schemaBreadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Zipnova", url: "/portfolio/zipnova" },
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
                    className="w-[300px] my-5"
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

            {/* Tech Stack */}
            <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white px-8 sm:px-12 py-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.15),_transparent_55%)]" />
              <AnimatedSection className="relative text-center max-w-3xl mx-auto space-y-5">
                <div className="inline-flex items-center rounded-full bg-cyan-500/20 border border-cyan-400/30 px-4 py-1.5 text-sm font-semibold text-cyan-300">
                  Tech Stack
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Built for Performance
                </h2>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  A modern headless architecture combining the best frontend and
                  backend tools available.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className="relative mt-10 flex flex-wrap justify-center gap-4">
                  {project.stack.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm text-white/80 font-mono backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </section>

            {/* The Challenge */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white px-8 sm:px-12 py-16">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="relative space-y-8 max-w-4xl">
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
                
                  <ul className="grid gap-4 sm:grid-cols-2 mt-8">
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
