import React from "react";
import type { Metadata } from "next";
import { BASE_URL } from "@/lib/jsonld";
import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import ContactSection from "@/components/contact-section";
import {
  MapPin,
  Smartphone,
  Palette,
  Globe,
  Megaphone,
  Search,
  BarChart3,
  Target,
  Bot,
  Keyboard,
  Sparkles,
  MessageSquare,
  Brain,
  Users,
  Mail,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    default: "Services by Location",
    template: "%s | North Blue Agency",
  },
  description:
    "Find North Blue Agency digital marketing services available in your city or region. Campaigns, SEO, Social Media, Branding and more — tailored to your location.",
  alternates: {
    canonical: `${BASE_URL}/locations`,
    languages: { es: `${BASE_URL}/locations`, en: `${BASE_URL}/locations` },
  },
  openGraph: {
    title: "Services by Location | North Blue Agency",
    description:
      "Find North Blue Agency digital marketing services available in your city or region.",
    url: `${BASE_URL}/locations`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services by Location | North Blue Agency",
    description:
      "Find North Blue Agency digital marketing services available in your city or region.",
  },
  publisher: "North Blue Agency",
};

type LocationEntry = { slug: string; display: string };

const locationServices: { slug: string; title: string; icon: React.ReactNode; locations: LocationEntry[] }[] = [
  { slug: "campanas-ads", title: "Campaigns, Ads & Digital Advertising", icon: <Target size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "redes-sociales", title: "Social Media Management", icon: <Smartphone size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "branding", title: "Branding & Visual Identity", icon: <Palette size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "desarrollo-web", title: "Web Development", icon: <Globe size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "marketing-digital", title: "Holistic Digital Marketing", icon: <Megaphone size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "seo", title: "SEO & Ranking (with AIO, AEO & GEO)", icon: <Search size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "analytics", title: "Analytics - Web & Social Media Reports", icon: <BarChart3 size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "creacion-contenido", title: "Content Creation", icon: <Keyboard size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "chatgpt-ads", title: "ChatGPT Advertising", icon: <Bot size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "seo/aeo", title: "AEO (Answer Engine Optimization)", icon: <MessageSquare size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "seo/aio", title: "AIO (Artificial Intelligence Optimization)", icon: <Brain size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "seo/geo", title: "GEO (Generative Engine Optimization)", icon: <Sparkles size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
  { slug: "seo/seo-tradicional", title: "Traditional SEO 360°", icon: <Search size={20} />, locations: [{ slug: "caba", display: "CABA" }, { slug: "argentina", display: "Argentina" }, { slug: "uruguay", display: "Uruguay" }, { slug: "chile", display: "Chile" }, { slug: "paraguay", display: "Paraguay" }, { slug: "bolivia", display: "Bolivia" }, { slug: "peru", display: "Peru" }, { slug: "colombia", display: "Colombia" }, { slug: "venezuela", display: "Venezuela" }] },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <div className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#ff4081] to-[#00b2ff] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services by Location
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Explore all our digital marketing services tailored to your city or region. Click any location to see the full service page.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Browse by Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service is available in multiple locations. Select the combination that fits your business.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationServices.map((service, index) => (
              <AnimatedSection key={service.slug} delay={index * 50}>
                <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      {service.locations.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/services/${service.slug}/${loc.slug}`}
                          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 hover:border-[#ff4081] hover:bg-gradient-to-br hover:from-[#ff4081]/5 hover:to-[#00b2ff]/5 transition-all group"
                        >
                          <MapPin
                            size={14}
                            className="text-gray-400 group-hover:text-[#ff4081] transition-colors flex-shrink-0"
                          />
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[#ff4081] transition-colors">
                            {loc.display}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Pages Directory */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Pages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete directory of every page on our site.
            </p>
          </AnimatedSection>

          {/* Company Pages */}
          <AnimatedSection className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Company</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/nosotros", label: "Nosotros", icon: <Users size={18} /> },
                { href: "/contacto", label: "Contacto", icon: <Mail size={18} /> },
                { href: "/politica-privacidad", label: "Privacy Policy", icon: <Shield size={18} /> },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:border-[#ff4081] hover:bg-gradient-to-br hover:from-[#ff4081]/5 hover:to-[#00b2ff]/5 transition-all group"
                >
                  <span className="text-gray-400 group-hover:text-[#ff4081] transition-colors flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#ff4081] transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* English Service Pages */}
          <AnimatedSection className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Services (English)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/services/social-media-management", label: "Social Media Management", icon: <Smartphone size={18} /> },
                { href: "/services/web-development", label: "Web Development", icon: <Globe size={18} /> },
                { href: "/services/content-creation", label: "Content Creation", icon: <Keyboard size={18} /> },
                { href: "/services/digital-marketing", label: "Digital Marketing", icon: <Megaphone size={18} /> },
                { href: "/services/ads-campaigns", label: "Campaigns & Advertising", icon: <Target size={18} /> },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:border-[#ff4081] hover:bg-gradient-to-br hover:from-[#ff4081]/5 hover:to-[#00b2ff]/5 transition-all group"
                >
                  <span className="text-gray-400 group-hover:text-[#ff4081] transition-colors flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#ff4081] transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>

          {/* Special / Promotional Pages */}
          <AnimatedSection>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Special Pages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/mejora-tu-presencia-en-redes", label: "Mejora tu Presencia en Redes", icon: <Smartphone size={18} /> },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-5 py-4 rounded-lg border border-gray-200 bg-white hover:border-[#ff4081] hover:bg-gradient-to-br hover:from-[#ff4081]/5 hover:to-[#00b2ff]/5 transition-all group"
                >
                  <span className="text-gray-400 group-hover:text-[#ff4081] transition-colors flex-shrink-0">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#ff4081] transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
