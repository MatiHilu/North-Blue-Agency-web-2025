"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import AnimatedSection from "./animated-section";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, url: window.location.href }),
      });
      if (!res.ok) throw new Error("Error enviando mensaje");
      toast({
        title: "¡Mensaje enviado!",
        description:
          "Gracias por contactarnos. Te responderemos en las próximas 24 horas.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error enviando mensaje:", error);
      toast({
        title: "Error",
        description: "Hubo un problema enviando tu mensaje. Intenta más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto text-black">
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
                      disabled={isSubmitting}
                    />
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081]"
                      disabled={isSubmitting}
                    />
                    <Textarea
                      placeholder="Cuéntanos sobre tu proyecto"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081]"
                      disabled={isSubmitting}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje
                          <Send size={16} className="ml-2" />
                        </>
                      )}
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
                        <p className="text-gray-600">
                          <a
                            href="tel:+541153248376"
                            className="hover:underline"
                            aria-label="Llamar a +54 11 5324 8376"
                          >
                            +54 11 5324 8376
                          </a>
                          {" / "}
                          <a
                            href="tel:+541130545828"
                            className="hover:underline"
                            aria-label="Llamar a +54 11 3054 5828"
                          >
                            +54 11 3054 5828
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#00b2ff] to-[#ff4081] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Horario</p>
                        <p className="text-gray-600">
                          Lun - Vie: 9:00 - 18:00 (GTM -3)
                        </p>
                        {/* <p className="text-gray-600">Sáb: 10:00 - 14:00</p> */}
                      </div>
                    </div>

                    {/* <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Ubicación</p>
                        <p className="text-gray-600">Ciudad, País</p>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#ff4081]/10 to-[#00b2ff]/10 p-6 rounded-lg">
                  <h4 className="font-bold mb-2">¿Por qué elegirnos?</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>✓ Estrategias personalizadas</li>
                    <li>✓ Resultados medibles</li>
                    <li>✓ Equipo experto</li>
                    {/* <li>✓ Soporte 24/7</li> */}
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
