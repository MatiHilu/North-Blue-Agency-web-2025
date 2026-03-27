import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import FAQSection from "@/components/faq-section";
import QuoteSection from "@/components/quote-section";
import { BASE_URL, serviceSchema, breadcrumbSchema } from "@/lib/jsonld";

function normalizeLocation(value: string) {
  return value
    .replace(/-/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

const serviceData = {
  title: "Web Development",
  subtitle: "Websites that convert visitors into customers",
  description:
    "We create modern, fast, and conversion-oriented sites. We apply UX/UI best practices and technical SEO to maximize results.",
  gradient: "from-[#ff4081] to-[#00b2ff]",
  price: "From: USD 1500",
  duration: "6–12 weeks",
  features: [
    "Responsive design (mobile-first)",
    "Speed optimization (Core Web Vitals)",
    "Technical SEO implemented (schema, sitemaps, metas, indexing)",
    "Analytics/Tag Manager integration",
    "Advanced contact forms",
    "Easy-to-use CMS (visual editor + quick guide)",
  ],
  process: [
    { title: "Planning", description: "Architecture, scope, and KPIs" },
    { title: "UX/UI Design", description: "Wireframes and conversion-oriented visual design" },
    { title: "Development", description: "Clean code and reusable components" },
    { title: "Launch", description: "QA, production deployment, and initial optimization" },
  ],
  benefits: [
    "Increased conversions",
    "Better Google ranking",
    "Superior user experience",
    "Reduced bounce rate",
    "Increased sales and average ticket",
    "Optimized checkout for e-commerce",
  ],
};

const faqs = [
  {
    question: "What e-commerce platform do you recommend?",
    answer:
      "It depends on the context: Shopify to launch quickly with a solid ecosystem; WooCommerce if you want to integrate it into your WordPress and have more flexibility. For high performance or complex integrations, we can propose headless architecture with Next.js.",
  },
  {
    question: "What payment methods do you integrate?",
    answer:
      "We integrate gateways like Mercado Pago, Stripe, and PayPal, as well as local methods depending on your country.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We work with modern technologies: Next.js, React, TypeScript, and Tailwind on the frontend; WordPress by default for CMS; or Node.js on the backend if the project requires it.",
  },
  {
    question: "Will the site be responsive?",
    answer: "Yes. We develop with a mobile-first approach and test on multiple devices.",
  },
  {
    question: "Does it include hosting and domain?",
    answer:
      "We include hosting for the first year and assist you with the domain. Then you can continue with us or your own provider.",
  },
  {
    question: "Can you take over my current site even if it's not on WordPress?",
    answer:
      "Yes. We take on legacy sites in Shopify, Wix, Webflow, etc., or custom code. We can maintain, optimize, or migrate them.",
  },
  {
    question: "Why WordPress by default?",
    answer:
      "Because it offers development speed, ease of editing for your team, a mature ecosystem, and an excellent SEO base. If your project requires another architecture, we propose the best option and a custom quote.",
  },
  {
    question: "What are the timelines and how is the final price defined?",
    answer:
      "Typical timeline is 6–12 weeks. The final cost depends on scope, integrations, and deliverables. We start from USD 1500 and adjust according to your project.",
  },
];

export default function DesarrolloWebTemplate({ locationSlug }: { locationSlug: string }) {
  const locationText = normalizeLocation(locationSlug);
  const pageUrl = `/services/desarrollo-web/${locationSlug}`;

  const schemaService = serviceSchema({
    name: `${serviceData.title} - ${locationText}`,
    description: serviceData.description,
    url: pageUrl,
  });
  const schemaBreadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: serviceData.title, url: "/services/desarrollo-web" },
    { name: locationText, url: pageUrl },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />
      <div className="min-h-screen">
        <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <section className={`py-20 bg-gradient-to-br ${serviceData.gradient} text-white relative overflow-hidden`}>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                Back to services
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {serviceData.title} - {locationText}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">{serviceData.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <span className="font-semibold">{serviceData.duration}</span>
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection animation="fadeInLeft">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What does this service include in {locationText}?</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{serviceData.description}</p>
                <div className="space-y-4">
                  {serviceData.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200/70 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceData.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="text-white" size={12} />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the path that best suits your project. We take care of the rest.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="h-full p-8 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-3">Projects from Scratch</h3>
                  <p className="text-gray-700 mb-4">
                    For corporate sites, landings, blogs, and catalogs, we work by default with <strong>WordPress</strong> for its flexibility and ease of use.
                  </p>
                  <div className="space-y-3">
                    {["Easy-to-use CMS and visual editor", "Quick guide and training included"].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-6 h-6 ${i === 0 ? "bg-gradient-to-r from-[#ff4081] to-[#00b2ff]" : "bg-gray-200"} rounded-full flex items-center justify-center`}>
                          <Check className={i === 0 ? "text-white" : "text-gray-700"} size={12} />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    For advanced solutions (headless, apps, large-scale e-commerce), we evaluate other technologies: Next.js, Shopify, etc.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="h-full p-8 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-3">Legacy Sites & Migrations</h3>
                  <p className="text-gray-700 mb-4">
                    We take on projects in WordPress, Shopify, (others) or custom code. We maintain, optimize, or migrate while preserving SEO and analytics.
                  </p>
                  <div className="space-y-3">
                    {["Migration without traffic or data loss", "Optimization and maintenance on your current stack"].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-6 h-6 ${i === 0 ? "bg-gradient-to-r from-[#ff4081] to-[#00b2ff]" : "bg-gray-200"} rounded-full flex items-center justify-center`}>
                          <Check className={i === 0 ? "text-white" : "text-gray-700"} size={12} />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="ecommerce" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce that Sells</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fast, secure, and ready-to-scale online stores. Designed to convert and built for real operations.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="h-full p-8 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-md">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Catalog with variants, stock, SKUs, and attributes",
                      "Optimized checkout and payment methods (Mercado Pago, Stripe, PayPal)",
                      "Shipping integrations and rate calculation by zones",
                      "Transactional emails and cart recovery",
                      "Search with filters, sorting, and wishlist",
                      "Product SEO (rich snippets, schema, sitemap)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#ff4081] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="h-full p-8 rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-md">
                  <h3 className="text-2xl font-bold mb-4">Platforms & Stack</h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "WooCommerce: total flexibility on WordPress",
                      "Shopify: fast time-to-market and app ecosystem",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-[#00b2ff] rounded-full flex items-center justify-center">
                          <Check className="text-white" size={12} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a href="#contact">
                      <Button size="lg" className="btn-white-hover bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:opacity-90">
                        I want to sell online
                      </Button>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Work Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Clear methodology focused on results.</p>
            </AnimatedSection>
            <div className="relative">
              <div className="hidden lg:block absolute left-0 right-0 top-6 h-0.5 bg-gradient-to-r from-[#ff4081] via-[#ff83ab] to-[#00b2ff] rounded-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {serviceData.process.map((step: any, index: number) => (
                  <AnimatedSection key={index} delay={index * 120}>
                    <div className="flex lg:block items-start gap-4">
                      <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm max-w-sm">{step.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQSection title={`Questions about ${serviceData.title} in ${locationText}`} faqs={faqs} />

        <QuoteSection
          title="Ready to get started?"
          subtitle="Contact us today and discover how we can transform your digital presence"
          buttonText="Request Quote"
        />

        <ContactSection />
      </div>
    </>
  );
}
