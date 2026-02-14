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
      description: "Social media content",
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
          </div>
        </div>
      </header>
    </>
  );
}
