"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Send, Sparkles } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Prevent body scroll when modal is open
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
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, url: window.location.href }),
      });
      if (!res.ok) throw new Error("Error enviando mensaje");
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Error al enviar mensaje");
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
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 pt-[20vw] md:pt-4 transition-all duration-300 ${
        isAnimating
          ? "bg-black/50 backdrop-blur-sm"
          : "bg-black/0 backdrop-blur-none"
      }`}
      onClick={handleClose}
    >
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="modal-particle"></div>
        <div className="modal-particle"></div>
        <div className="modal-particle"></div>
        <div className="modal-particle"></div>
        <div className="modal-particle"></div>
      </div>

      <div
        className={`relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${
          isAnimating
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] p-[2px] rounded-2xl">
          <div className="bg-white rounded-2xl h-full w-full"></div>
        </div>

        <div className="relative p-6 md:p-8">
          {/* Close button - Tamaño corregido */}
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            aria-label="Cerrar"
          >
            <X size={16} color="#000" />
          </button>

          {!showSuccess ? (
            <>
              {/* Header */}
              <div
                className={`text-center mb-8 transform transition-all duration-300 delay-100 ${
                  isAnimating
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff4081] to-[#00b2ff] bg-clip-text text-transparent">
                  Hablemos sobre tu proyecto
                </h2>
                <p className="text-gray-600 mt-2">
                  Estamos aquí para hacer realidad tus ideas
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="modal-input-focus">
                    <Input
                      id="name"
                      placeholder="¿Cómo te llamas?"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20 transition-all duration-200 rounded-lg"
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
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <div className="modal-input-focus">
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20 transition-all duration-200 rounded-lg"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-300 delay-400 ${
                    isAnimating
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje *
                  </label>
                  <div className="modal-input-focus">
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20 transition-all duration-200 resize-none rounded-lg"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-300 delay-500 ${
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
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send size={18} />
                        <span>Enviar mensaje</span>
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
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
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-600 mb-4">
                Gracias por contactarnos. Te responderemos en las próximas 24
                horas.
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
