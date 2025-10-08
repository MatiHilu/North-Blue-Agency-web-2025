"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Calculator } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
        setShowSuccess(false);
      }, 300);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, url: window.location.href }),
      });
      if (!res.ok) throw new Error("Error enviando cotización");
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          timeline: "",
          description: "",
        });
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Error al solicitar cotización");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 pt-[20vw] md:pt-4 transition-all duration-300 text-black ${
        isAnimating
          ? "bg-black/50 backdrop-blur-sm"
          : "bg-black/0 backdrop-blur-none"
      }`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="modal-particle"></div>
        <div className="modal-particle"></div>
        <div className="modal-particle"></div>
      </div>

      <div
        className={`relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out max-h-[90vh] overflow-y-auto ${
          isAnimating
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 p-[2px] rounded-2xl">
          <div className="bg-white rounded-2xl h-full w-full"></div>
        </div>

        <div className="relative p-6 md:p-8">
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>

          {!showSuccess ? (
            <>
              <div
                className={`text-center mb-8 transform transition-all duration-300 delay-100 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="text-white" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff4081] to-[#00b2ff] bg-clip-text text-transparent">
                  Solicitar Cotización
                </h2>
                <p className="text-gray-600 mt-2">
                  Cuéntanos sobre tu proyecto y te enviaremos una propuesta
                  personalizada
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`transform transition-all duration-300 delay-200 ${
                      isAnimating
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre *
                    </label>
                    <Input
                      id="name"
                      placeholder="Tu nombre completo"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div
                    className={`transform transition-all duration-300 delay-250 ${
                      isAnimating
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-300 delay-300 ${
                    isAnimating
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Empresa
                  </label>
                  <Input
                    id="company"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`transform transition-all duration-300 delay-350 ${
                      isAnimating
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Servicio de interés *
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="border-gray-300 focus:border-[#ff4081]">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="redes-sociales">
                          Redes Sociales
                        </SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="desarrollo-web">
                          Desarrollo Web
                        </SelectItem>
                        <SelectItem value="marketing-digital">
                          Marketing Digital
                        </SelectItem>
                        <SelectItem value="seo">SEO</SelectItem>
                        <SelectItem value="multiple">
                          Múltiples servicios
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div
                    className={`transform transition-all duration-300 delay-400 ${
                      isAnimating
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Presupuesto aproximado
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger className="border-gray-300 focus:border-[#ff4081]">
                        <SelectValue placeholder="Rango de presupuesto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">
                          $1,000 - $2,500
                        </SelectItem>
                        <SelectItem value="2500-5000">
                          $2,500 - $5,000
                        </SelectItem>
                        <SelectItem value="5000-10000">
                          $5,000 - $10,000
                        </SelectItem>
                        <SelectItem value="10000+">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-300 delay-450 ${
                    isAnimating
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Timeline del proyecto
                  </label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) =>
                      setFormData({ ...formData, timeline: value })
                    }
                  >
                    <SelectTrigger className="border-gray-300 focus:border-[#ff4081]">
                      <SelectValue placeholder="¿Cuándo necesitas comenzar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inmediato">Inmediatamente</SelectItem>
                      <SelectItem value="1-2-semanas">
                        En 1-2 semanas
                      </SelectItem>
                      <SelectItem value="1-mes">En 1 mes</SelectItem>
                      <SelectItem value="2-3-meses">En 2-3 meses</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div
                  className={`transform transition-all duration-300 delay-500 ${
                    isAnimating
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Descripción del proyecto *
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Describe tu proyecto, objetivos, audiencia objetivo y cualquier detalle relevante..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div
                  className={`transform transition-all duration-300 delay-550 ${
                    isAnimating
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 py-3 rounded-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando cotización...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Calculator size={18} />
                        <span>Solicitar cotización</span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ¡Cotización enviada!
              </h3>
              <p className="text-gray-600 mb-4">
                Hemos recibido tu solicitud. Te enviaremos una propuesta
                personalizada en las próximas 24 horas.
              </p>
              <div className="flex justify-center">
                <div className="w-8 h-1 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
