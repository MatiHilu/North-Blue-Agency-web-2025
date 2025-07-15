"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Award,
  Heart,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import ContactSection from "@/components/contact-section";
import { useState } from "react";
import EnhancedContactModal from "@/components/enhanced-contact-modal";

const teamMembers = [
  {
    name: "María González",
    role: "CEO & Fundadora",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Con más de 10 años de experiencia en marketing digital, María fundó North Blue Agency con la visión de transformar la presencia digital de las empresas.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "maria@northblueagency.com",
    },
  },
  {
    name: "Carlos Rodríguez",
    role: "Director Creativo",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Especialista en branding y diseño visual, Carlos lidera nuestro equipo creativo para crear identidades visuales únicas y memorables.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "carlos@northblueagency.com",
    },
  },
  {
    name: "Ana Martínez",
    role: "Head of Strategy",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Experta en estrategias de marketing digital y análisis de datos, Ana se encarga de desarrollar campañas que generan resultados medibles.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ana@northblueagency.com",
    },
  },
  {
    name: "Diego López",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Desarrollador full-stack con experiencia en tecnologías modernas, Diego crea sitios web rápidos, seguros y optimizados para conversión.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "diego@northblueagency.com",
    },
  },
];

const values = [
  {
    icon: <Target className="w-full h-full" />,
    title: "Orientados a Resultados",
    description:
      "Cada estrategia que desarrollamos está diseñada para generar resultados medibles y un ROI positivo para nuestros clientes.",
  },
  {
    icon: <Users className="w-full h-full" />,
    title: "Trabajo en Equipo",
    description:
      "Creemos en la colaboración estrecha con nuestros clientes, trabajando juntos como un equipo para alcanzar los objetivos.",
  },
  {
    icon: <Award className="w-full h-full" />,
    title: "Excelencia",
    description:
      "Nos comprometemos a entregar trabajo de la más alta calidad, superando las expectativas en cada proyecto.",
  },
  {
    icon: <Heart className="w-full h-full" />,
    title: "Pasión",
    description:
      "Amamos lo que hacemos y esa pasión se refleja en cada campaña, diseño y estrategia que desarrollamos.",
  },
];

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "North Blue Agency",
    description:
      "Agencia de marketing digital especializada en redes sociales, branding y desarrollo web",
    url: "https://northblueagency.com",
    logo: "https://northblueagency.com/North-Blue-Agency.svg",
    foundingDate: "2019",
    founder: {
      "@type": "Person",
      name: "María González",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "info@northblueagency.com",
    },
    sameAs: [
      "https://www.facebook.com/northblueagency",
      "https://www.instagram.com/northblueagency",
      "https://www.linkedin.com/company/northblueagency",
    ],
  };

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "North Blue Agency",
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      email: member.social.email,
    })),
  };

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <EnhancedContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

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
                Conoce a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  North Blue
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Somos un equipo apasionado de profesionales dedicados a
                transformar la presencia digital de las empresas
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
                  Nuestra{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-y">
                    Historia
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  North Blue Agency nació en 2019 con una misión clara:
                  democratizar el marketing digital y hacer que las mejores
                  estrategias estén al alcance de empresas de todos los tamaños.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Comenzamos como un pequeño equipo de especialistas apasionados
                  por el marketing digital. Hoy, somos una agencia reconocida
                  que ha ayudado a más de 150 empresas a transformar su
                  presencia online.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nuestro enfoque se basa en la combinación perfecta entre
                  creatividad, estrategia y tecnología, siempre con el objetivo
                  de generar resultados medibles para nuestros clientes.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={200}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff4081]/20 to-[#00b2ff]/20 rounded-3xl transform rotate-6"></div>
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Equipo North Blue Agency"
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestros{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                  Valores
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían nuestro trabajo y definen nuestra
                cultura empresarial
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Nuestro{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
                  Equipo
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conoce a los profesionales que hacen posible el éxito de
                nuestros clientes
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-[#ff4081] font-semibold mb-3">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {member.bio}
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href={member.social.linkedin}
                            className="text-gray-400 hover:text-[#00b2ff] transition-colors"
                          >
                            <Linkedin size={18} />
                          </a>
                          <a
                            href={member.social.twitter}
                            className="text-gray-400 hover:text-[#ff4081] transition-colors"
                          >
                            <Twitter size={18} />
                          </a>
                          <a
                            href={`mailto:${member.social.email}`}
                            className="text-gray-400 hover:text-[#00b2ff] transition-colors"
                          >
                            <Mail size={18} />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                ¿Quieres formar parte de nuestro equipo?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Estamos siempre buscando talento apasionado por el marketing
                digital
              </p>
              <Button
                size="lg"
                className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 transform hover:scale-105 transition-all"
                onClick={() => setIsContactModalOpen(true)}
              >
                Ver oportunidades laborales
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}
