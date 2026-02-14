"use client";

import { useState } from "react";
import Script from "next/script";
import { BASE_URL } from "@/lib/jsonld";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import EnhancedContactModal from "@/components/enhanced-contact-modal";
import type { Metadata } from "next";

/* export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con North Blue Agency para iniciar tu proyecto.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contacto",
    "agencia de marketing",
    "North Blue Agency",
    "consultoría",
  ],
  openGraph: {
    title: "Contacto | North Blue Agency",
    description:
      "Ponte en contacto con North Blue Agency para iniciar tu proyecto.",
    url: "https://northblueagency.com/contact",
    type: "website",
  },
}; */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    // Honeypot fields
    website: "",
    phone_number: "",
    url_field: "",
  });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Error enviando mensaje");
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        website: "",
        phone_number: "",
        url_field: "",
      });
    } catch (err: any) {
      console.error("Error en handleSubmit:", err);
      alert(err.message || "Error al enviar mensaje");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Metadata via export metadata */}
      <Script
        id="schema-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact - North Blue Agency",
            url: `${BASE_URL}/contact`,
            description:
              "Contact North Blue Agency to start your project.",
            keywords:
              "contact, marketing agency, North Blue Agency, consulting",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: BASE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: `${BASE_URL}/contact`,
                },
              ],
            },
            mainEntity: {
              "@type": "Organization",
              name: "North Blue Agency",
              url: BASE_URL,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "info@northblueagency.com",
                availableLanguage: ["es", "en"],
              },
            },
          }),
        }}
      />
      {/* Contact Modal */}
      <EnhancedContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Let's talk about your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  next project
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are here to help you turn your vision into reality. Contact us and let's start building something extraordinary together.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fadeInLeft">
                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8 md:p-12">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold mb-4">
                        Tell us about your project
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Fill out the form and we will get back to you within 24 hours.
                      </p>
                    </div>

                    {isSubmitted && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                        <CheckCircle className="text-green-600" size={24} />
                        <div>
                          <p className="font-semibold text-green-800">
                            Message sent successfully!
                          </p>
                          <p className="text-green-600">
                            We will contact you shortly.
                          </p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <Input
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-gray-300 focus:border-[#ff4081] h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <Input
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-gray-300 focus:border-[#ff4081] h-12"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-[#ff4081] h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <Input
                            name="company"
                            placeholder="Company name"
                            value={formData.company}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-[#ff4081] h-12"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service of interest
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4081] focus:border-[#ff4081]"
                          >
                            <option value="">Select a service</option>
                            <option value="redes-sociales">
                              Social Media
                            </option>
                            <option value="branding">Branding</option>
                            <option value="desarrollo-web">
                              Web Development
                            </option>
                            <option value="marketing-digital">
                              Digital Marketing
                            </option>
                            <option value="seo">SEO</option>
                            <option value="campanas-ads">
                              Ad Campaigns (Ads)
                            </option>
                            <option value="chatgpt-ads">
                              ChatGPT Ads & AI
                            </option>
                            <option value="diseno-grafico">
                              Graphic Design
                            </option>
                            <option value="analytics">Analytics</option>
                            <option value="otro">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Estimated budget
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4081] focus:border-[#ff4081]"
                          >
                            <option value="">Select a range</option>
                            <option value="500-1000">$500 - $1,000</option>
                            <option value="1000-2500">$1,000 - $2,500</option>
                            <option value="2500-5000">$2,500 - $5,000</option>
                            <option value="5000-10000">$5,000 - $10,000</option>
                            <option value="10000+">$10,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Tell us more details about your project, goals, and any relevant information to help us better understand your needs..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-[#ff4081]"
                        />
                      </div>

                      {/* Honeypot fields - hidden from users but visible to bots */}
                      <div style={{ display: "none" }} aria-hidden="true">
                        <label htmlFor="website">Website (do not fill)</label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                        <label htmlFor="phone_number">
                          Phone (do not fill)
                        </label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                        <label htmlFor="url_field">URL (do not fill)</label>
                        <input
                          type="url"
                          id="url_field"
                          name="url_field"
                          value={formData.url_field}
                          onChange={handleChange}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all h-12 text-lg"
                        >
                          Send message
                          <Send size={20} className="ml-2" />
                        </Button>
                        {/* <Button
                          type="button"
                          variant="outline"
                          className="border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white h-12"
                          onClick={() => setIsContactModalOpen(true)}
                        >
                          Solicitar llamada
                          <Phone size={16} className="ml-2" />
                        </Button> */}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Information & Additional Content */}
            <div className="space-y-8">
              <AnimatedSection animation="fadeInRight" delay={200}>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-gray-600">
                            info@northblueagency.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-gray-600">City, Country</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Hours</p>
                          <p className="text-gray-600">
                            Mon - Fri: 9:00 - 18:00
                          </p>
                          <p className="text-gray-600">Sat: 10:00 - 14:00</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* <AnimatedSection animation="fadeInRight" delay={300}>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-bold mb-4">
                      ¿Necesitas ayuda inmediata?
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Nuestro equipo está disponible para consultas urgentes.
                    </p>
                    <div className="space-y-4">
                      <Button
                        variant="outline"
                        className="w-full border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white"
                        onClick={() => setIsContactModalOpen(true)}
                      >
                        <MessageCircle size={16} className="mr-2" />
                        Chat en vivo
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-[#00b2ff] text-[#00b2ff] hover:bg-[#00b2ff] hover:text-white"
                        onClick={() => setIsContactModalOpen(true)}
                      >
                        <Calendar size={16} className="mr-2" />
                        Agendar reunión
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection> */}

              <AnimatedSection animation="fadeInRight" delay={400}>
                <div className="bg-gradient-to-br from-[#ff4081]/10 to-[#00b2ff]/10 p-8 rounded-xl">
                  <h4 className="font-bold text-xl mb-4">
                    Why choose us?
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#ff4081] flex-shrink-0"
                        size={20}
                      />
                      <span>Personalized strategies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#00b2ff] flex-shrink-0"
                        size={20}
                      />
                      <span>Measurable results</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#ff4081] flex-shrink-0"
                        size={20}
                      />
                      <span>Expert team</span>
                    </li>
                    {/* <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#00b2ff] flex-shrink-0"
                        size={20}
                      />
                      <span>Soporte 24/7</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#ff4081] flex-shrink-0"
                        size={20}
                      />
                      <span>Precios competitivos</span>
                    </li> */}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We answer the most common questions about our services
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatedSection delay={100}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    How long does it take to see results?
                  </h3>
                  <p className="text-gray-600">
                    Results vary by service, but generally you can expect improvements in 2-4 weeks for social media and 3-6 months for SEO and long-term strategies.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Do you offer flexible contracts?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer both monthly contracts and one-time projects. We adapt to the specific needs of each client.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Do you work with companies of all sizes?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We work with startups, small businesses, and large corporations. Each strategy is customized to the size and goals of the business.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    How do you measure campaign success?
                  </h3>
                  <p className="text-gray-600">
                    We use specific KPIs for each project: web traffic, conversions, social media engagement, ROI, and more. We provide detailed monthly reports.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para comenzar?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                No esperes más. Tu transformación digital comienza hoy.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#ff4081] hover:bg-gray-100 border-white text-lg px-8 py-4"
                onClick={() => setIsContactModalOpen(true)}
              >
                Hablar con un experto
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <EnhancedContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
