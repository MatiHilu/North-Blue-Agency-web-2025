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
  alternates: { canonical: "/contacto" },
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
    url: "https://northblueagency.com/contacto",
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
            name: "Contacto - North Blue Agency",
            url: `${BASE_URL}/contacto`,
            description:
              "Ponte en contacto con North Blue Agency para iniciar tu proyecto.",
            keywords:
              "contacto, agencia de marketing, North Blue Agency, consultoría",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: BASE_URL,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contacto",
                  item: `${BASE_URL}/contacto`,
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
                Hablemos de tu{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  próximo proyecto
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Estamos aquí para ayudarte a transformar tu visión en realidad.
                Contáctanos y comencemos a construir algo extraordinario juntos.
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
                        Cuéntanos sobre tu proyecto
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Completa el formulario y nos pondremos en contacto
                        contigo en menos de 24 horas.
                      </p>
                    </div>

                    {isSubmitted && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                        <CheckCircle className="text-green-600" size={24} />
                        <div>
                          <p className="font-semibold text-green-800">
                            ¡Mensaje enviado con éxito!
                          </p>
                          <p className="text-green-600">
                            Nos pondremos en contacto contigo pronto.
                          </p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre *
                          </label>
                          <Input
                            name="name"
                            placeholder="Tu nombre completo"
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
                            placeholder="tu@email.com"
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
                            Teléfono
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
                            Empresa
                          </label>
                          <Input
                            name="company"
                            placeholder="Nombre de tu empresa"
                            value={formData.company}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-[#ff4081] h-12"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Servicio de interés
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4081] focus:border-[#ff4081]"
                          >
                            <option value="">Selecciona un servicio</option>
                            <option value="redes-sociales">
                              Redes Sociales
                            </option>
                            <option value="branding">Branding</option>
                            <option value="desarrollo-web">
                              Desarrollo Web
                            </option>
                            <option value="marketing-digital">
                              Marketing Digital
                            </option>
                            <option value="seo">SEO</option>
                            <option value="campanas-ads">
                              Campañas de Ads
                            </option>
                            <option value="diseno-grafico">
                              Diseño Gráfico
                            </option>
                            <option value="analytics">Analytics</option>
                            <option value="otro">Otro</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Presupuesto estimado
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4081] focus:border-[#ff4081]"
                          >
                            <option value="">Selecciona un rango</option>
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
                          Mensaje *
                        </label>
                        <Textarea
                          name="message"
                          placeholder="Cuéntanos más detalles sobre tu proyecto, objetivos y cualquier información relevante que nos ayude a entender mejor tus necesidades..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-[#ff4081]"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all h-12 text-lg"
                        >
                          Enviar mensaje
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
                      Información de contacto
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
                          <p className="font-semibold">Teléfono</p>
                          <p className="text-gray-600">+1 (555) 123-4567</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Ubicación</p>
                          <p className="text-gray-600">Ciudad, País</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">Horario</p>
                          <p className="text-gray-600">
                            Lun - Vie: 9:00 - 18:00
                          </p>
                          <p className="text-gray-600">Sáb: 10:00 - 14:00</p>
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
                    ¿Por qué elegirnos?
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#ff4081] flex-shrink-0"
                        size={20}
                      />
                      <span>Estrategias personalizadas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#00b2ff] flex-shrink-0"
                        size={20}
                      />
                      <span>Resultados medibles</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle
                        className="text-[#ff4081] flex-shrink-0"
                        size={20}
                      />
                      <span>Equipo experto</span>
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
              Preguntas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                frecuentes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatedSection delay={100}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    ¿Cuánto tiempo toma ver resultados?
                  </h3>
                  <p className="text-gray-600">
                    Los resultados varían según el servicio, pero generalmente
                    puedes esperar ver mejoras en 2-4 semanas para redes
                    sociales y 3-6 meses para SEO y estrategias a largo plazo.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    ¿Ofrecen contratos flexibles?
                  </h3>
                  <p className="text-gray-600">
                    Sí, ofrecemos tanto contratos mensuales como proyectos
                    únicos. Nos adaptamos a las necesidades específicas de cada
                    cliente.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    ¿Trabajan con empresas de todos los tamaños?
                  </h3>
                  <p className="text-gray-600">
                    Absolutamente. Trabajamos con startups, pequeñas empresas y
                    grandes corporaciones. Cada estrategia se personaliza según
                    el tamaño y objetivos del negocio.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    ¿Cómo miden el éxito de las campañas?
                  </h3>
                  <p className="text-gray-600">
                    Utilizamos KPIs específicos para cada proyecto: tráfico web,
                    conversiones, engagement en redes sociales, ROI, y más.
                    Proporcionamos reportes detallados mensuales.
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
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
