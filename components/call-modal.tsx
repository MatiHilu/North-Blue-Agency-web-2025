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
import { X, Phone, Calendar } from "lucide-react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallModal({ isOpen, onClose }: CallModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredDate: "",
    preferredTime: "",
    timezone: "",
    topic: "",
    notes: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
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

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        preferredDate: "",
        preferredTime: "",
        timezone: "",
        topic: "",
        notes: "",
      });
    }, 2000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 pt-[20vw] md:pt-4 transition-all duration-300 ${
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
                  <Phone className="text-white" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff4081] to-[#00b2ff] bg-clip-text text-transparent">
                  Agendar Consulta Gratuita
                </h2>
                <p className="text-gray-600 mt-2">
                  Reserva una llamada de 30 minutos para discutir tu proyecto
                  sin compromiso
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`transform transition-all duration-300 delay-300 ${
                      isAnimating
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div
                    className={`transform transition-all duration-300 delay-350 ${
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className={`transform transition-all duration-300 delay-400 ${
                      isAnimating
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Fecha preferida *
                    </label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preferredDate: e.target.value,
                        })
                      }
                      className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20"
                      required
                      disabled={isSubmitting}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div
                    className={`transform transition-all duration-300 delay-450 ${
                      isAnimating
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Hora preferida *
                    </label>
                    <Select
                      value={formData.preferredTime}
                      onValueChange={(value) =>
                        setFormData({ ...formData, preferredTime: value })
                      }
                    >
                      <SelectTrigger className="border-gray-300 focus:border-[#ff4081]">
                        <SelectValue placeholder="Selecciona hora" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">01:00 PM</SelectItem>
                        <SelectItem value="14:00">02:00 PM</SelectItem>
                        <SelectItem value="15:00">03:00 PM</SelectItem>
                        <SelectItem value="16:00">04:00 PM</SelectItem>
                        <SelectItem value="17:00">05:00 PM</SelectItem>
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
                      htmlFor="timezone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Zona horaria
                    </label>
                    <Select
                      value={formData.timezone}
                      onValueChange={(value) =>
                        setFormData({ ...formData, timezone: value })
                      }
                    >
                      <SelectTrigger className="border-gray-300 focus:border-[#ff4081]">
                        <SelectValue placeholder="Tu zona horaria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EST">EST (UTC-5)</SelectItem>
                        <SelectItem value="CST">CST (UTC-6)</SelectItem>
                        <SelectItem value="MST">MST (UTC-7)</SelectItem>
                        <SelectItem value="PST">PST (UTC-8)</SelectItem>
                        <SelectItem value="GMT">GMT (UTC+0)</SelectItem>
                        <SelectItem value="CET">CET (UTC+1)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-300 delay-550 ${
                    isAnimating
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tema principal de la consulta *
                  </label>
                  <Select
                    value={formData.topic}
                    onValueChange={(value) =>
                      setFormData({ ...formData, topic: value })
                    }
                  >
                    <SelectTrigger className="border-gray-300 focus:border-[#ff4081]">
                      <SelectValue placeholder="¿De qué quieres hablar?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="redes-sociales">
                        Estrategia de Redes Sociales
                      </SelectItem>
                      <SelectItem value="branding">
                        Branding e Identidad Visual
                      </SelectItem>
                      <SelectItem value="desarrollo-web">
                        Desarrollo Web
                      </SelectItem>
                      <SelectItem value="marketing-digital">
                        Marketing Digital Integral
                      </SelectItem>
                      <SelectItem value="seo">SEO y Posicionamiento</SelectItem>
                      <SelectItem value="general">Consulta General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div
                  className={`transform transition-all duration-300 delay-600 ${
                    isAnimating
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Notas adicionales
                  </label>
                  <Textarea
                    id="notes"
                    placeholder="Cuéntanos brevemente sobre tu negocio y qué te gustaría discutir en la llamada..."
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20 resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <div
                  className={`transform transition-all duration-300 delay-650 ${
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
                        <span>Agendando llamada...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Calendar size={18} />
                        <span>Agendar consulta gratuita</span>
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
                ¡Llamada agendada!
              </h3>
              <p className="text-gray-600 mb-4">
                Hemos recibido tu solicitud. Te enviaremos un enlace de
                confirmación y los detalles de la reunión por email.
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
