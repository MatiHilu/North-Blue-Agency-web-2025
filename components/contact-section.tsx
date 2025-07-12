"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimatedSection from "./animated-section";
import EnhancedContactModal from "./enhanced-contact-modal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <EnhancedContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-xy">
                transformar
              </span>{" "}
              tu negocio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contáctanos hoy y descubre cómo podemos llevar tu marca al
              siguiente nivel
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection animation="fadeInLeft">
              <Card className="h-full border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Envíanos un mensaje
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081]"
                    />
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081]"
                    />
                    <Textarea
                      placeholder="Cuéntanos sobre tu proyecto"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081]"
                    />
                    <Button
                      type="button"
                      className="w-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all"
                      onClick={() => setIsContactModalOpen(true)}
                    >
                      Enviar mensaje
                      <Send size={16} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Información de contacto
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center">
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
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Teléfono</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Ubicación</p>
                        <p className="text-gray-600">Ciudad, País</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#ff4081]/10 to-[#00b2ff]/10 p-6 rounded-lg">
                  <h4 className="font-bold mb-2">¿Por qué elegirnos?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Estrategias personalizadas</li>
                    <li>✓ Resultados medibles</li>
                    <li>✓ Equipo experto</li>
                    <li>✓ Soporte 24/7</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
