"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Palette,
  Globe,
  Megaphone,
  Search,
  BarChart3,
  Target,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnhancedContactModal from "@/components/enhanced-contact-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isServicesClosing, setIsServicesClosing] = useState(false);

  const services = [
    {
      title: "Redes Sociales",
      href: "/services/redes-sociales",
      icon: <Smartphone size={20} />,
      description: "Gestión completa de redes sociales",
    },
    {
      title: "Branding",
      href: "/services/branding",
      icon: <Palette size={20} />,
      description: "Identidades visuales únicas",
    },
    {
      title: "Desarrollo Web",
      href: "/services/desarrollo-web",
      icon: <Globe size={20} />,
      description: "Sitios web modernos y responsivos",
    },
    {
      title: "Marketing Digital",
      href: "/services/marketing-digital",
      icon: <Megaphone size={20} />,
      description: "Estrategias integrales de marketing",
    },
    {
      title: "SEO",
      href: "/services/seo",
      icon: <Search size={20} />,
      description: "Posicionamiento en buscadores",
    },
    {
      title: "Analytics",
      href: "/services/analytics",
      icon: <BarChart3 size={20} />,
      description: "Análisis y reportes detallados",
    },
    {
      title: "Campañas y Ads",
      href: "/services/campanas-ads",
      icon: <Target size={20} />,
      description: "Publicidad digital estratégica",
    },
    {
      title: "Diseño Gráfico",
      href: "/services/diseno-grafico",
      icon: <PenTool size={20} />,
      description: "Piezas gráficas impactantes",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    // Initialize scroll state after mounting
    if (typeof window !== "undefined") {
      setIsScrolled(window.scrollY > 50);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    if (isMenuOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restaurar el scroll
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
      }
      // Resetear el estado de servicios móviles cuando se cierra el menú
      setIsMobileServicesOpen(false);
      setIsServicesClosing(false);
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
      }
    };
  }, [isMenuOpen, isMounted]);

  // Función para cerrar el menú con animación
  const closeMenu = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
      setIsMobileServicesOpen(false);
      setIsServicesClosing(false);
    }, 500); // Duración de la animación de salida
  };

  // Función para cerrar servicios con animación
  const closeMobileServices = () => {
    setIsServicesClosing(true);
    setTimeout(() => {
      setIsMobileServicesOpen(false);
      setIsServicesClosing(false);
    }, 300); // Duración de la animación de salida
  };

  // Función para toggle de servicios móviles
  const toggleMobileServices = () => {
    if (isMobileServicesOpen) {
      closeMobileServices();
    } else {
      setIsMobileServicesOpen(true);
      setIsServicesClosing(false);
    }
  };

  // No renderizar hasta que esté montado para evitar hidratación
  if (!isMounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 w-full">
            <div className="flex-shrink-0">
              <Image
                src="/North-Blue-Agency-Light.svg"
                alt="North Blue Agency"
                width={180}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </div>
            <div className="flex-shrink-0 lg:hidden">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#ff4081]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4081]/20"
                aria-label="Abrir menú"
              >
                <Menu size={24} className="text-[#ff4081]" />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      {/* Contact Modal */}
      <EnhancedContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 cursor-none ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 w-full">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={
                    isScrolled
                      ? "/North-Blue-Agency.svg"
                      : "/North-Blue-Agency-Light.svg"
                  }
                  alt="North Blue Agency"
                  width={180}
                  height={40}
                  priority
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link href="/services">
                  <button
                    className={`flex items-center transition-colors font-medium ${
                      isScrolled
                        ? "text-gray-700 hover:text-[#ff4081]"
                        : "text-[#ff4081] hover:text-[#ff4081]/80"
                    }`}
                  >
                    Servicios
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </Link>

                {/* Desktop Dropdown con animación */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 z-50 services-dropdown transition-all duration-300 ease-out ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="grid grid-cols-4 gap-6">
                    {services.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`group p-4 rounded-xl hover:bg-gradient-to-br hover:from-[#ff4081]/5 hover:to-[#00b2ff]/5 transition-all duration-200 transform hover:scale-105 ${
                          isServicesOpen ? "animate-fadeInUp" : ""
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-[#ff4081] transition-colors">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <Link
                      href="/services"
                      className="inline-flex items-center text-[#ff4081] hover:text-[#ff4081]/80 font-medium"
                    >
                      Ver todos los servicios
                      <ChevronDown size={16} className="ml-1 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={`transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#ff4081]"
                    : "text-[#00b2ff] hover:text-[#00b2ff]/80"
                }`}
                onClick={() => {
                  closeMenu();
                }}
              >
                Nosotros
              </Link>
              <Link
                href="/portfolio"
                className={`transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#ff4081]"
                    : "text-[#ff4081] hover:text-[#ff4081]/80"
                }`}
                onClick={() => {
                  closeMenu();
                }}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className={`transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#ff4081]"
                    : "text-[#00b2ff] hover:text-[#00b2ff]/80"
                }`}
                onClick={() => {
                  closeMenu();
                }}
              >
                Blog
              </Link>
              <Link href="/contact">
                <Button
                  className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => {
                    closeMenu();
                  }}
                >
                  Contactar
                </Button>
              </Link>
            </nav>

            {/* Botón hamburguesa fijo */}
            <div className="flex-shrink-0 lg:hidden">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#ff4081]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff4081]/20"
                onClick={() => {
                  if (isMenuOpen) {
                    closeMenu();
                  } else {
                    setIsMenuOpen(true);
                  }
                }}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 text-[#ff4081] transition-all duration-300 ${
                      isMenuOpen
                        ? "opacity-0 rotate-180 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 text-[#ff4081] transition-all duration-300 ${
                      isMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 rotate-180 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#ff4081] via-purple-600 to-[#00b2ff] ${
              isMenuClosing ? "mobile-menu-exit" : "mobile-menu-enter"
            }`}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col h-full text-white px-4 pt-20 pb-20">
              <div className="flex-1 flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center space-y-6 text-center w-full max-w-sm">
                  <Link
                    href="/"
                    className={`text-3xl font-bold hover:scale-110 transition-transform duration-300 ${
                      isMenuClosing
                        ? "mobile-menu-item-exit"
                        : "mobile-menu-item"
                    }`}
                    style={{ animationDelay: isMenuClosing ? "0s" : "0.1s" }}
                    onClick={closeMenu}
                  >
                    Inicio
                  </Link>

                  {/* Mobile Services Dropdown */}
                  <div
                    className={`w-full ${
                      isMenuClosing
                        ? "mobile-menu-item-exit"
                        : "mobile-menu-item"
                    }`}
                    style={{ animationDelay: isMenuClosing ? "0.1s" : "0.2s" }}
                  >
                    <button
                      className="text-3xl font-bold hover:scale-110 transition-transform duration-300 flex items-center justify-center w-full"
                      onClick={toggleMobileServices}
                    >
                      Servicios
                      <ChevronDown
                        size={24}
                        className={`ml-2 transition-transform duration-300 ${
                          isMobileServicesOpen && !isServicesClosing
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isMobileServicesOpen && !isServicesClosing
                          ? "opacity-100 mt-6"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div
                        className={`bg-white/10 rounded-xl p-6 backdrop-blur-sm mx-auto max-w-sm transition-all duration-300 ${
                          isServicesClosing
                            ? "transform scale-95 opacity-0 translate-y-4"
                            : "transform scale-100 opacity-100 translate-y-0"
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {services.map((service, index) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`block text-base text-white/90 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/10 text-center transform hover:scale-105 border border-white/20 hover:border-white/40 ${
                                isMobileServicesOpen && !isServicesClosing
                                  ? "animate-fadeInUp"
                                  : ""
                              }`}
                              style={{ animationDelay: `${index * 50}ms` }}
                              onClick={closeMenu}
                            >
                              <div className="flex flex-col items-center space-y-2">
                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                  {service.icon}
                                </div>
                                <span className="text-sm font-medium leading-tight">
                                  {service.title}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/20 text-center">
                          <Link
                            href="/services"
                            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                            onClick={closeMenu}
                          >
                            Ver todos los servicios →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/about"
                    className={`text-3xl font-bold hover:scale-110 transition-transform duration-300 ${
                      isMenuClosing
                        ? "mobile-menu-item-exit"
                        : "mobile-menu-item"
                    }`}
                    style={{ animationDelay: isMenuClosing ? "0.2s" : "0.3s" }}
                    onClick={closeMenu}
                  >
                    Nosotros
                  </Link>
                  <Link
                    href="/portfolio"
                    className={`text-3xl font-bold hover:scale-110 transition-transform duration-300 ${
                      isMenuClosing
                        ? "mobile-menu-item-exit"
                        : "mobile-menu-item"
                    }`}
                    style={{ animationDelay: isMenuClosing ? "0.3s" : "0.4s" }}
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className={`text-3xl font-bold hover:scale-110 transition-transform duration-300 ${
                      isMenuClosing
                        ? "mobile-menu-item-exit"
                        : "mobile-menu-item"
                    }`}
                    style={{ animationDelay: isMenuClosing ? "0.4s" : "0.5s" }}
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                  <Link href="/contact">
                    <Button
                      className={`btn-white-hover bg-white text-[#ff4081] hover:text-white text-xl px-8 py-4 mt-8 ${
                        isMenuClosing
                          ? "mobile-menu-item-exit"
                          : "mobile-menu-item"
                      }`}
                      style={{
                        animationDelay: isMenuClosing ? "0.5s" : "0.6s",
                      }}
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      Contactar
                    </Button>
                  </Link>
                </nav>
              </div>

              {/* Social Links */}
              <div
                className={`flex justify-center space-x-6 pb-8 ${
                  isMenuClosing ? "mobile-menu-item-exit" : "mobile-menu-item"
                }`}
                style={{ animationDelay: isMenuClosing ? "0.6s" : "0.7s" }}
              >
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-bold">FB</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-bold">IG</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-bold">LI</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
