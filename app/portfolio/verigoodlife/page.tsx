import type { ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, TrendingUp, Zap, Award } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";
import { BASE_URL, caseStudySchema, breadcrumbSchema } from "@/lib/jsonld";
import type { Metadata } from "next";

// =======================
// Metadata
// =======================
const pageData = {
  title: "VeriGoodLife Case Study",
  subtitle: "Branding, E-commerce & Ongoing Technical Support",
  description:
    "Branding, E-commerce & Ongoing Technical Support for the VeriGoodLife wellness platform. Identity design, WordPress + WooCommerce, managed hosting, and permanent support focused on conversion and performance.",
  ogImage: `${BASE_URL}/images/og/portfolio-verigoodlife.png`,
  canonical: `${BASE_URL}/portfolio/verigoodlife`,
  keywords: [
    "case study",
    "branding",
    "woocommerce",
    "wordpress",
    "ecommerce",
    "web development",
    "technical support",
    "north blue agency",
    "VeriGoodLife",
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
      {
        url: pageData.ogImage,
        alt: `${pageData.title} - North Blue Agency`,
      },
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

type ProposalPoint = {
  title: string;
  content: string;
};

type ChallengeBlock = {
  description: string;
  metrics: string[];
};

type AchievementsBlock = {
  description: string;
  metrics: string[];
};

type ConclusionBlock = {
  text: string;
  ongoing?: boolean;
};

type CaseStudy = {
  title: string;
  client: string;
  description: string;
  category: string;
  year: string;
  services: string[];
  images: string[];
  summary?: string;
  heroMetrics?: HeroMetric[];
  aboutClient?: {
    logo?: string;
    description: string;
    industry: string;
  };
  challenge?: ChallengeBlock | string;
  proposal?: {
    description: string;
    points: ProposalPoint[];
  };
  objectives?: string[];
  whatWeDid?: Record<string, string>;
  stack?: string[];
  achievements?: AchievementsBlock;
  conclusion?: ConclusionBlock;
  duration?: string;
  budget?: string;
  technologies?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  solution?: string;
  results?: string[];
};

type DetailedCaseStudy = CaseStudy & {
  summary: string;
  heroMetrics: HeroMetric[];
  aboutClient: {
    logo?: string;
    description: string;
    industry: string;
  };
  challenge: ChallengeBlock;
  proposal: {
    description: string;
    points: ProposalPoint[];
  };
  achievements: AchievementsBlock;
  conclusion: ConclusionBlock;
};

const isDetailedCaseStudy = (
  project: CaseStudy
): project is DetailedCaseStudy =>
  Boolean(
    project.summary &&
      project.heroMetrics &&
      project.aboutClient &&
      project.challenge &&
      typeof project.challenge !== "string" &&
      project.proposal &&
      project.achievements &&
      project.conclusion
  );

// =======================
// Data
// =======================
const projectData: Record<string, CaseStudy> = {
  verigoodlife: {
    title: "VeriGoodLife Case Study",
    client: "VeriGoodLife",
    summary:
      "VeriGoodLife is Veri Bianco's wellness platform. At North Blue we handled branding (logo and color palette), website + e-commerce, hosting and domain, and provide ongoing technical support.",
    heroMetrics: [
      {
        icon: TrendingUp,
        value: 800,
        suffix: "%",
        prefix: "+",
        label: "Increase in monthly sales",
        decimals: 0,
      },
      {
        icon: Zap,
        value: 1.2,
        suffix: "s",
        prefix: "~",
        label: "Mobile performance",
        decimals: 1,
      },
      {
        icon: Award,
        value: 100,
        suffix: "%",
        prefix: "",
        label: "Hosting Uptime",
        decimals: 0,
      },
    ],
    images: [
      "/verigood/Veri Bianco.jpg",
      "/verigood/VerigoodLife Tech Card.png",
      "/verigood/Verigood Desktop.png",
    ],
    aboutClient: {
      logo: "/verigood/VeryGoodLife-logo-final.svg",
      description:
        "VeriGoodLife is the wellness platform created by Veri Bianco, focused on offering healthy eating programs, recipe books, and personalized sessions. They are dedicated to improving their clients' quality of life through accessible and professional content.",
      industry: "Wellness & Health",
    },
    challenge: {
      description:
        "The main challenge was to professionalize Veri Bianco's personal brand, which until then had been operating informally. They needed a coherent visual identity, a robust e-commerce platform to sell their digital products, and a simplified technical operation that didn't depend on manual processes.",
      metrics: [
        "No automated sales channel in place.",
        "Inconsistent and unprofessional visual identity.",
        "Poor performance and user experience on the previous site.",
        "Manual processes for product delivery and client management.",
      ],
    },
    proposal: {
      description:
        "We proposed a comprehensive solution to build a solid and autonomous digital presence. Our approach centered on three pillars:",
      points: [
        {
          title: "Identity & Visual System",
          content:
            "Creating a logo, color palette, and typographic guidelines that reflected professionalism and warmth.",
        },
        {
          title: "E-commerce Platform",
          content:
            "Developing a WordPress + WooCommerce site focused on conversion, with 100% automated purchase flows and product delivery.",
        },
        {
          title: "Infrastructure & Support",
          content:
            "Managing hosting, domain, security (SSL, backups), and providing ongoing technical support to ensure platform stability and growth.",
        },
      ],
    },
    objectives: [
      "Professionalize the brand with a coherent, mobile-friendly identity.",
      "Sell programs, recipe books, and 1:1 sessions online.",
      "Simplify operations (payments, deliveries, maintenance).",
      "Optimize performance: fast load times and high availability.",
    ],
    whatWeDid: {
      "Identity & Visual System":
        "Logo and color palette; typographic usage guidelines.",
      "Website + E-commerce (WordPress + WooCommerce)":
        "Conversion-focused architecture (home → catalog → checkout). Downloadable products and sessions/plans. Automated confirmation and instant delivery flows.",
      "Hosting, Domain & Security":
        "Domain/DNS management, SSL and backups. Ongoing maintenance and updates.",
      "Technical Support":
        "Product uploads, minor UX/technical SEO adjustments, and compatibility fixes.",
    },
    stack: [
      "CMS: WordPress",
      "Commerce: WooCommerce (downloadables + services)",
      "Infra: Managed hosting (SSL + backups + basic hardening)",
      "Automation: transactional emails and immediate material delivery",
    ],
    achievements: {
      description:
        "The implementation of the new platform and brand strategy generated exceptional results in a short period, validating the approach and investment.",
      metrics: [
        "Monthly sales increase of over +800%.",
        "Mobile load time of ~1.2 seconds.",
        "100% hosting uptime since launch.",
      ],
    },
    conclusion: {
      text: "The VeriGoodLife case demonstrates how a comprehensive digital strategy can transform a personal brand into a profitable and scalable online business. The combination of solid branding, an efficient technology platform, and reliable support was key to exceeding the objectives.",
      ongoing: true,
    },
    category: "Branding & E-commerce",
    year: "2025",
    services: ["Branding", "E-commerce", "Web Development", "Tech Support"],
    description:
      "Branding, E-commerce & Ongoing Technical Support for the VeriGoodLife wellness platform.",
  },
};

// =======================
// Page
// =======================
export default function ProjectDetailPage() {
  const slug = "verigoodlife";
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-[95vh] pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Project not found
          </h1>
          <Link href="/portfolio">
            <Button variant="secondary">Back to portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isDetailedCaseStudy(project)) {
    const {
      summary,
      heroMetrics,
      aboutClient,
      challenge,
      proposal,
      achievements,
      conclusion,
    } = project;

    const schemaArticle = caseStudySchema({
      name: pageData.title,
      description: pageData.description,
      url: "/portfolio/verigoodlife",
      client: "VeriGoodLife",
      datePublished: "2023-01-01",
    });
    const schemaBreadcrumb = breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Portfolio", url: "/portfolio" },
      { name: "VeriGoodLife", url: "/portfolio/verigoodlife" },
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
                <p className="mb-2">
                  Branding, E-commerce & Ongoing Technical Support
                </p>
                <p className="max-w-3xl mx-auto text-lg sm:text-xl text-white/70 mb-12">
                  {summary}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {heroMetrics.map((metric) => {
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
                  {aboutClient.logo && (
                    <img
                      src={aboutClient.logo}
                      title={`${project.client} logo`}
                      alt={`${project.client} logo`}
                      className="h-20 mb-6"
                    />
                  )}
                  <p className="text-gray-600">{aboutClient.industry}</p>
                </AnimatedSection>
                <AnimatedSection className="md:col-span-2">
                  <h2 className="text-3xl font-bold mb-4">About the Client</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {aboutClient.description}
                  </p>
                </AnimatedSection>
              </section>

              {/* The Challenge */}
              <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white px-8 sm:px-12 py-16">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                  <AnimatedSection className="space-y-8">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/80">
                      Initial Diagnosis
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
                        The Challenge
                      </h2>
                      <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {challenge.metrics.map((metric, index) => (
                        <li
                          key={index}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/30"
                        >
                          <div className="absolute inset-px opacity-0 group-hover:opacity-100 rounded-[18px] bg-gradient-to-br from-white/10 to-transparent" />
                          <div className="relative flex items-start gap-3">
                            <span className="text-sm sm:text-base text-white/90 leading-relaxed">
                              {metric}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                  <AnimatedSection className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-70 blur-2xl" />
                    <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-[0_35px_60px_-15px_rgba(15,55,122,0.6)]">
                      <img
                        src={project.images[0]}
                        title="Project challenge visual"
                        alt="Project challenge visual"
                        className="w-full object-cover"
                      />
                    </div>
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
                    {proposal.description}
                  </p>
                </AnimatedSection>
                <div className="relative mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {proposal.points.map((point, index) => (
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
                        src={project.images[1]}
                        title="Project results"
                        alt="Project results"
                        className="w-full object-cover"
                      />
                    </div>
                  </AnimatedSection>
                  <AnimatedSection className="space-y-8">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-white/80">
                      Impact in Numbers
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold">
                        Results
                      </h2>
                      <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                        {achievements.description}
                      </p>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-2">
                      {achievements.metrics.map((metric, index) => (
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
                <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
                  <AnimatedSection className="relative max-w-4xl lg:max-w-3xl mx-auto lg:mx-0 space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                      Conclusion
                    </h2>
                    <p className="text-base sm:text-lg leading-relaxed text-white/90">
                      {conclusion.text}
                    </p>
                    {conclusion.ongoing && (
                      <div className="mx-auto lg:mx-0 inline-flex items-center gap-3 rounded-md lg:rounded-full border border-white/30 bg-white/20 px-2 lg:px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-lg backdrop-blur">
                        <span className="inline-flex h-3 w-3 rounded-full bg-emerald-300 animate-pulse" />
                        To this day, they continue to trust us for support and
                        platform evolution.
                      </div>
                    )}
                  </AnimatedSection>
                  {project.images[2] && (
                    <AnimatedSection className="relative">
                      <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-white/40 via-transparent to-purple-400/30 opacity-80 blur-2xl" />
                      <div className="relative overflow-hidden rounded-[30px] border border-white/30 bg-white/10 shadow-[0_35px_80px_-25px_rgba(26,15,112,0.65)] backdrop-blur">
                        <img
                          src={project.images[2]}
                          title="Additional project material"
                          alt="Additional project material"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-purple-500/30 mix-blend-screen" />
                      </div>
                      <div className="absolute bottom-4 left-1/2 flex w-[85%] -translate-x-1/2 items-center justify-between rounded-full border border-white/40 bg-white/15 px-5 py-3 text-xs sm:text-sm font-semibold text-white/90 shadow-xl backdrop-blur">
                        <span className="flex items-center gap-2 text-black">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 animate-pulse" />
                          Constantly evolving
                        </span>
                        <span className="hidden sm:inline-flex text-black">
                          Ongoing support
                        </span>
                      </div>
                    </AnimatedSection>
                  )}
                </div>
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

  // Fallback
  return (
    <div className="min-h-[95vh] pt-20 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Project</h1>
        <Link href="/portfolio">
          <Button variant="secondary">Back to portfolio</Button>
        </Link>
      </div>
    </div>
  );
}
