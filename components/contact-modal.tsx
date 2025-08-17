"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Pequeño delay para permitir que el componente se monte antes de la animación
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Esperar a que termine la animación antes de ocultar
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Error enviando mensaje");
      // Opcional: mostrar notificación de éxito
      console.log("Mensaje enviado:", formData);
      onClose();
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error al enviar mensaje");
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
      onClick={() => onClose()}
    >
      <div
        className={`w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${
          isAnimating
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>

          <h2 className="text-2xl font-bold mb-6">
            Hablemos sobre tu proyecto
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div
              className={`transform transition-all duration-300 delay-100 ${
                isAnimating
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20 transition-all duration-200"
                required
              />
            </div>

            <div
              className={`transform transition-all duration-300 delay-200 ${
                isAnimating
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20 transition-all duration-200"
                required
              />
            </div>

            <div
              className={`transform transition-all duration-300 delay-300 ${
                isAnimating
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Cuéntanos sobre tu proyecto"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="border-gray-300 focus:border-[#ff4081] focus:ring-2 focus:ring-[#ff4081]/20 transition-all duration-200 resize-none"
                required
              />
            </div>

            <div
              className={`transform transition-all duration-300 delay-400 ${
                isAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Enviar mensaje
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
