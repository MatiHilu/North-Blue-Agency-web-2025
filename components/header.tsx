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
  Keyboard,
  Bot,
  Facebook,
  Instagram,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EnhancedContactModal from "@/components/enhanced-contact-modal";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isServicesClosing, setIsServicesClosing] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const supportedLocales = ["arg", "es", "uk", "us"];
  const localeCountryMap: Record<string, string> = {
    arg: "AR",
    es: "ES",
    uk: "GB",
    us: "US",
  };
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentLocale = supportedLocales.includes(segments[1])
    ? segments[1]
    : null;
  const basePath = currentLocale
    ? pathname.replace(`/${currentLocale}`, "")
    : pathname;

  const services = [
    {
      title: "Social Media",
      href: "/services/redes-sociales",
      icon: <Smartphone size={20} />,
      description: "Complete social media management",
    },
    {
      title: "Branding",
      href: "/services/branding",
      icon: <Palette size={20} />,
      description: "Unique visual identities",
    },
    {
      title: "Web Development",
      href: "/services/desarrollo-web",
      icon: <Globe size={20} />,
      description: "Modern and responsive websites",
    },
    {
      title: "Digital Marketing",
      href: "/services/marketing-digital",
      icon: <Megaphone size={20} />,
      description: "Comprehensive marketing strategies",
    },
    {
      title: "SEO",
      href: "/services/seo",
      icon: <Search size={20} />,
      description: "Search Engine Optimization",
    },
    {
      title: "Analytics",
      href: "/services/analytics",
      icon: <BarChart3 size={20} />,
      description: "Detailed analysis and reports",
    },
    {
      title: "Campaigns & Ads",
      href: "/services/campanas-ads",
      icon: <Target size={20} />,
      description: "Strategic digital advertising",
    },
    {
      title: "ChatGPT Ads",
      href: "/services/chatgpt-ads",
      icon: <Bot size={20} />,
      description: "AI-powered Ads",
    },
    {
      title: "Content Creation",
      href: "/services/creacion-contenido",
      icon: <Keyboard size={20} />,
      description: "For social media",
    },
  ];

  const seoServices = [
    {
      title: "Traditional SEO",
      href: "/services/seo/seo-tradicional",
      icon: <Search size={20} />,
      description: "Standard organic positioning",
    },
    {
      title: "AEO",
      href: "/services/seo/aeo",
      icon: <MessageSquare size={20} />,
      description: "Answer Engine Optimization",
    },
    {
      title: "AIO",
      href: "/services/seo/aio",
      icon: <Bot size={20} />,
      description: "AI Optimization",
    },
    {
      title: "GEO",
      href: "/services/seo/geo",
      icon: <Sparkles size={20} />,
      description: "Generative Engine Optimization",
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
      // Resetear el estado de services móviles cuando se cierra el menú
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

  // Función para cerrar services con animación
  const closeMobileServices = () => {
    setIsServicesClosing(true);
    setTimeout(() => {
      setIsMobileServicesOpen(false);
      setIsServicesClosing(false);
    }, 300); // Duración de la animación de salida
  };

  // Función para toggle de services móviles
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
                title="North Blue Agency logo"
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 w-full">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center"
                onClick={closeMenu} // <-- aquí cerramos el menú al clickar en el logo
              >
                <Image
                  src={
                    isScrolled
                      ? "/North-Blue-Agency.svg"
                      : "/North-Blue-Agency-Light.svg"
                  }
                  title="North Blue Agency logo"
                  alt="North Blue Agency"
                  width={180}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Desktop nav */}
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
                    Services
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </Link>

                {/* Desktop Dropdown con animación */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px]   py-2 z-50  transition-all duration-300 ease-out ${
                    isServicesOpen
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                  }`}
                >
                  <div
                    className={`bg-white border-gray-100 p-8 rounded-2xl shadow-2xl services-dropdown`}
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {services.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="group p-2 rounded-xl hover:bg-gradient-to-br hover:from-[#ff4081]/5 hover:to-[#00b2ff]/5 transition-all duration-200 transform hover:scale-100"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="w-10 aspect-square bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 group-hover:text-[#ff4081] transition-colors mt-1">
                              {service.title}
                            </p>
                            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                      <Link
                        href="/services"
                        className="inline-flex items-center text-[#ff4081] hover:text-[#ff4081]/80 font-medium"
                      >
                        View all services
                        <ChevronDown
                          size={16}
                          className="ml-1 rotate-[-90deg]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEO Dropdown */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsSeoOpen(true)}
                onMouseLeave={() => setIsSeoOpen(false)}
              >
                <Link href="/services/seo">
                  <button
                    className={`flex items-center transition-colors font-medium ${
                      isScrolled
                        ? "text-gray-700 hover:text-[#ff4081]"
                        : "text-[#ff4081] hover:text-[#ff4081]/80"
                    }`}
                  >
                    SEO
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </Link>

                {/* Invisible bridge to prevent closing when moving to dropdown */}
                <div className="absolute top-full left-0 w-full h-8 bg-transparent" />

                {/* Desktop Dropdown - Full Width Horizontal Bar */}
                <div
                  className={`fixed left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 transition-all duration-300 ease-out z-40 ${
                    isSeoOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ top: "80px" }}
                >
                  <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-4 gap-6">
                      {seoServices.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="group p-4 rounded-xl hover:bg-gradient-to-br hover:from-[#ff4081]/5 hover:to-[#00b2ff]/5 transition-all duration-200 flex items-center space-x-4 border border-transparent hover:border-gray-100"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-r from-[#ff4081] to-[#00b2ff] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md">
                            {service.icon}
                          </div>
                          <div>
                            <p className="font-bold text-lg text-gray-900 group-hover:text-[#ff4081] transition-colors">
                              {service.title}
                            </p>
                            <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors mt-1">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
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
                About Us
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
                  Contact
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

            <div className="relative z-10 flex flex-col h-full text-white px-4 pt-32 pb-20">
              <div className="flex-1 flex flex-col items-center justify-center">
                <nav className="flex flex-col items-center space-y-6 text-center w-full max-w-sm">
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
                      className="text-3xl font-bold hover:scale-110 transition-transform duration-300 flex items-center justify-center w-full ml-2"
                      onClick={toggleMobileServices}
                    >
                      Services
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
                              className={`block text-base text-white/90 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg hover:bg-white/10 text-start transform hover:scale-105 border border-white/20 hover:border-white/40`}
                              style={{ animationDelay: `${index * 50}ms` }}
                              onClick={closeMenu}
                            >
                              <div className="w-8 aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                                {service.icon}
                              </div>
                              <span className="text-sm block leading-tight mt-4">
                                {service.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/20 text-center">
                          <Link
                            href="/services"
                            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                            onClick={closeMenu}
                          >
                            View all services →
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
                    About Us
                  </Link>

                  <Link
                    href="/portfolio"
                    className={`text-3xl font-bold hover:scale-110 transition-transform duration-300 ${
                      isMenuClosing
                        ? "mobile-menu-item-exit"
                        : "mobile-menu-item"
                    }`}
                    style={{ animationDelay: isMenuClosing ? "0.5s" : "0.6s" }}
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
                    style={{ animationDelay: isMenuClosing ? "0.6s" : "0.7s" }}
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                  <Link href="/contact">
                    <Button
                      className={`btn-white-hover bg-white text-[#ff4081] hover:text-white text-xl px-8 py-4 mt-2 ${
                        isMenuClosing
                          ? "mobile-menu-item-exit"
                          : "mobile-menu-item"
                      }`}
                      style={{
                        animationDelay: isMenuClosing ? "0.7s" : "0.8s",
                      }}
                      onClick={() => {
                        closeMenu();
                      }}
                    >
                      Contact
                    </Button>
                  </Link>
                  {/* Language Selector Mobile */}
                  {/* <div className="mt-8 text-center">
                    <p className="text-xl font-semibold mb-2">Idioma</p>
                    <div className="flex justify-center space-x-4">
                      {supportedLocales.map((loc) => (
                        <Link
                          key={loc}
                          href={`/${loc}${basePath}`}
                          onClick={closeMenu}
                          className="text-3xl"
                        >
                          <ReactCountryFlag
                            countryCode={localeCountryMap[loc]}
                            svg
                            style={{ width: "1.5em", height: "1.5em" }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div> */}
                </nav>
              </div>

              {/* Social Links */}
              <div
                className={`flex justify-center space-x-6 pb-8 mt-8 ${
                  isMenuClosing ? "mobile-menu-item-exit" : "mobile-menu-item"
                }`}
                style={{ animationDelay: isMenuClosing ? "0.8s" : "0.9s" }}
              >
                <a
                  href="https://www.facebook.com/north.blue.agency/"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/north.blue.agency/"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/northblue-agency/"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
