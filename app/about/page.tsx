import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Award,
  Heart,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import EnhancedContactModal from "@/components/enhanced-contact-modal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the North Blue Agency team and our mission: digital marketing, social media, and web development.",
  keywords: [
    "digital marketing agency",
    "about us",
    "team",
    "North Blue Agency",
    "marketing",
    "web development",
    "social media",
  ],
  alternates: { canonical: "https://northblueagency.com/about" },
  authors: [
    { name: "Abril Lespade" },
    { name: "Matías Hilú" },
    { name: "North Blue Agency", url: "https://northblueagency.com" },
  ],
  publisher: "North Blue Agency",
  openGraph: {
    title: "About Us",
    description:
      "Meet the North Blue Agency team and our mission: digital marketing, social media, and web development.",
    url: "https://northblueagency.com/about",
    siteName: "North Blue Agency",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://northblueagency.com/North-Blue-Agency.png",
        width: 1200,
        height: 630,
        alt: "North Blue Agency Team",
      },
      {
        url: "https://northblueagency.com/North-Blue-Agency.svg",
        alt: "North Blue Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Meet the North Blue Agency team and our mission: digital marketing, social media, and web development.",
    images: ["https://northblueagency.com/North-Blue-Agency.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// JSON-LD schemas exported to reuse/include in <head> or scripts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "North Blue Agency",
  description:
    "Digital marketing agency specialized in social media, branding, and web development",
  url: "https://northblueagency.com",
  logo: "https://northblueagency.com/North-Blue-Agency.svg",
  foundingDate: "2019",
  keywords:
    "digital marketing agency, about us, team, North Blue Agency",
  founder: [
    {
      "@type": "Person",
      name: "Abril Lespade",
    },
    {
      "@type": "Person",
      name: "Matías Hilú",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54*9-11-3054-5828",
    contactType: "customer service",
    email: "info@northblueagency.com",
  },
  sameAs: [
    "https://www.facebook.com/northblueagency",
    "https://www.instagram.com/northblueagency",
    "https://www.linkedin.com/company/northblueagency",
  ],
} as const;

export const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "North Blue Agency",
  employee: [
    {
      "@type": "Person",
      name: "Abril Lespade",
      jobTitle: "Marketing Manager",
      description:
        "Leads social media strategy: content, tone, community, and growth.",
      sameAs: ["https://www.linkedin.com/in/abril-lespade/"],
    },
    {
      "@type": "Person",
      name: "Matías Hilú",
      jobTitle: "CEO & Web Development Manager",
      description:
        "In charge of web development: performance, technical SEO, and conversion optimization.",
      sameAs: ["https://www.linkedin.com/in/matias-hilu/"],
    },
  ],
} as const;

const teamMembers = [
  {
    name: "Matías Hilú",
    role: "CEO & Web Development Manager",
    image: "/Matías-Hilú-NorthBlue-Agency.png?height=300&width=300",
    bio: "In charge of web development: performance, technical SEO, and conversion optimization. His focus is on creating fast, secure, and optimized websites that not only attract traffic but also convert visitors into customers. With his technical expertise, he ensures that every project meets industry standards and offers an exceptional user experience.",
    social: {
      // TODO: Actualizar URL de LinkedIn si corresponde
      linkedin: "https://www.linkedin.com/in/matias-hilu/",
    },
  },
  {
    name: "Abril Lespade",
    role: "Marketing Manager",
    image: "/Abirl-Lespade-NorthBlue-Agency.jpg?height=300&width=300",
    bio: "Leads social media strategy: content, tone, community, and growth. Her focus is on building authentic and lasting relationships with the audience. By understanding social media needs and formats, she achieves significant results.",
    social: {
      // TODO: Actualizar URL de LinkedIn si corresponde
      linkedin: "https://www.linkedin.com/in/abril-lespade/",
    },
  },
];

const values = [
  {
    icon: Target,
    title: "Results Oriented",
    description:
      "Every strategy we develop is designed to generate measurable results and positive ROI for our clients.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We believe in close collaboration with our clients, working together as a team to achieve goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We commit to delivering work of the highest quality, exceeding expectations in every project.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We love what we do and that passion is reflected in every campaign, design, and strategy we develop.",
  },
];

// Proceso general basado en las páginas de servicios (SEO, Desarrollo Web, etc.)
const processSteps = [
  {
    title: "Discovery and Diagnosis",
    description:
      "Initial meeting to understand goals, analyze your current presence and competitive context.",
  },
  {
    title: "Strategy and Planning",
    description:
      "We define the action plan: roadmap, priorities, KPIs, and responsibilities.",
  },
  {
    title: "Production and Implementation",
    description:
      "Design, content, and development. We execute technical and creative improvements.",
  },
  {
    title: "Launch",
    description:
      "QA and controlled go-live to minimize risks and maximize impact.",
  },
  {
    title: "Measurement and Optimization",
    description:
      "Continuous monitoring, clear reports, and iterative improvements to scale results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Meet{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  North Blue
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                We are a passionate team of professionals dedicated to transforming digital presence
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                    Story
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed md:pe-16">
                  North Blue Agency was born in 2019 with a clear mission: democratize digital marketing and make the best strategies accessible to companies of all sizes.
                </p>
                {/* <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Comenzamos como un pequeño equipo de especialistas apasionados
                  por el marketing digital. Hoy, somos una agencia reconocida
                  que ha ayudado a más de 75 empresas a transformar su presencia
                  online.
                </p> */}
                <p className="text-lg text-gray-600 leading-relaxed md:pe-20">
                  Our approach is based on the perfect combination of creativity, strategy, and technology, always aiming to generate measurable results for our clients.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="relative flex justify-center">
                  <div className="w-[350px] absolute translate-x-[80%] inset-0 bg-gradient-to-r from-[#ff4081]/20 to-[#00b2ff]/20 rounded-3xl transform rotate-6"></div>
                  <img
                    src="/NorthBlue-Agency.png?height=400&width=400"
                    alt="Equipo North Blue Agency"
                    className="relative rounded-3xl shadow-2xl w-[320px]"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            {/* Shared gradient defs for icon strokes */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient
                  id="nb-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ff4081" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#00b2ff" />
                </linearGradient>
              </defs>
            </svg>
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles guiding our work and defining our business culture
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1640px] mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon as React.ElementType;
                return (
                  <AnimatedSection key={index} delay={index * 100}>
                    <Card className="text-center border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-8">
                        <div className="mx-auto mb-6 flex items-center justify-center">
                          <Icon
                            className="w-12 h-12"
                            strokeWidth={2}
                            color="url(#nb-gradient)"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="text-lg font-semibold mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Nuestro Proceso (timeline) */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                OUR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  PROCESS
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                How we work from start to finish to achieve measurable results
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Conector */}
              <div className="hidden lg:block absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-[#ff4081] via-[#ff83ab] to-[#00b2ff] rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {processSteps.map((step, index) => (
                  <AnimatedSection key={index} delay={index * 120}>
                    <div className="flex lg:block items-start gap-4">
                      <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm max-w-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Co-founders Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestros{" "}
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  Co‑founders
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet those who lead North Blue Agency: two complementary perspectives driving the vision, strategy, and business growth
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="group relative rounded-2xl">
                    {/* Hover glow */}
                    <div
                      className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#00b2ff] via-purple-500 to-[#ff4081] opacity-0 blur transition-opacity duration-300 group-hover:opacity-40 "
                      aria-hidden="true"
                    />
                    {/* Gradient border wrapper */}
                    <div className="relative rounded-2xl p-px bg-gradient-to-r from-[#00b2ff] via-purple-500 to-[#ff4081] min-h-[500px]">
                      <Card className="rounded-[14px] border-0 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-transform duration-300 group-hover:-translate-y-1 min-h-[500px]">
                        <CardContent className="p-8">
                          {/* Top-right quick action */}
                          <div className="absolute right-4 top-4">
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5]/15 transition-colors"
                              aria-label={`LinkedIn de ${member.name}`}
                            >
                              <Linkedin size={18} />
                            </a>
                          </div>

                          <div className="flex flex-col items-center text-center">
                            {/* Avatar with gradient ring */}
                            <div className="relative">
                              <div className="rounded-full p-[3px] bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff]">
                                <img
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover bg-gray-100"
                                />
                              </div>
                            </div>

                            <h3 className="mt-5 text-2xl font-bold tracking-tight">
                              {member.name}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff]">
                              {member.role}
                            </p>
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed min-h-[130px]">
                              {member.bio}
                            </p>

                            <div className="mt-6">
                              <a
                                href={member.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 transition-colors"
                              >
                                Conectar en LinkedIn
                                <ArrowUpRight size={16} />
                              </a>nect o
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
          <div className="container mx-auto px-4 text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Want to join our team?
              </h2>
            
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We are always looking for passionate digital marketing talent
              </p>
              <a
                href="https://www.linkedin.com/company/northblue-agency/jobs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 transform hover:scale-105 transition-all"
                >
                  View job opportunities
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
