"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  ArrowLeft,
  Search,
  RefreshCw,
  Compass,
  AlertTriangle,
} from "lucide-react";
import AnimatedSection from "@/components/animated-section";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    {
      title: "Inicio",
      href: "/",
      icon: <Home size={20} />,
      description: "Volver a la página principal",
    },
    {
      title: "Servicios",
      href: "/servicios",
      icon: <Compass size={20} />,
      description: "Explora nuestros servicios",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      icon: <Search size={20} />,
      description: "Ve nuestros trabajos",
    },
    {
      title: "Contacto",
      href: "/contacto",
      icon: <RefreshCw size={20} />,
      description: "Ponte en contacto con nosotros",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4081]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b2ff]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#ff4081]/10 to-[#00b2ff]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <AnimatedSection>
            {/* 404 Number with Brand Styling */}
            <div className="mb-8">
              <h1
                className={`text-8xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 transform scale-100"
                    : "opacity-0 transform scale-75"
                }`}
              >
                404
              </h1>
              <div
                className={`flex items-center justify-center mb-6 transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                <AlertTriangle className="text-[#ff4081] mr-3" size={32} />
                <h2 className="text-2xl md:text-4xl font-bold">
                  Página no encontrada.
                </h2>
              </div>
            </div>

            {/* Description */}
            <div
              className={`mb-12 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                Oops! Parece que la página que buscas no existe o ha sido
                movida.
                {/* <br />
                Pero no te preocupes, podemos ayudarte a encontrar lo que
                necesitas. */}
              </p>
            </div>

            {/* Brand Logo */}
            {/* <div
              className={`mb-12 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 transform scale-100"
                  : "opacity-0 transform scale-75"
              }`}
            >
              <Link href="/" className="inline-block">
                <Image
                  src="/North-Blue-Agency-Light.svg"
                  alt="North Blue Agency"
                  width={250}
                  height={60}
                  className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div> */}

            {/* Action Buttons */}
            <div
              className={`mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <Link href="/">
                <Button className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg">
                  <ArrowLeft size={20} className="mr-2" />
                  Volver al Inicio
                </Button>
              </Link>
              {/* <Link href="/contacto">
                <Button
                  variant="outline"
                  className="border-2 border-[#ff4081] text-[#ff4081] hover:bg-[#ff4081] hover:text-white transition-all duration-300 px-8 py-3 text-lg"
                >
                  Contactar Soporte
                </Button>
              </Link> */}
            </div>

            {/* Quick Links */}
            <div
              className={`transition-all duration-1000 delay-1100 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold mb-8 text-gray-200">
                O explora estas secciones:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {quickLinks.map((link, index) => (
                  <Link key={link.href} href={link.href}>
                    <Card
                      className={`min-h-[190px] bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#ff4081]/50 transition-all duration-300 hover:scale-105 hover:bg-white/20 group cursor-pointer transform ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{
                        transitionDelay: `${1200 + index * 100}ms`,
                      }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-lg flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                          {link.icon}
                        </div>
                        <h4 className="font-semibold text-white mb-2 group-hover:text-[#ff4081] transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                          {link.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Search Suggestion */}
            <div
              className={`mt-16 transition-all duration-1000 delay-1500 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <p className="text-gray-400 text-sm">
                ¿Necesitas ayuda específica?{" "}
                <Link
                  href="/contacto"
                  className="text-[#ff4081] hover:text-[#ff4081]/80 underline transition-colors"
                >
                  Contáctanos
                </Link>{" "}
                y te ayudaremos a encontrar lo que buscas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
