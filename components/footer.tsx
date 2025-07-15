import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/North-Blue-Agency-Light.svg"
              alt="North Blue Agency"
              width={200}
              height={45}
              className="h-12 w-auto "
            />
            <p className="text-gray-400">
              Transformamos tu presencia digital con estrategias innovadoras y
              resultados medibles.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff4081] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ff4081] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00b2ff] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00b2ff] transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/redes-sociales"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Redes Sociales
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/desarrollo-web"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing-digital"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Marketing Digital
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#ff4081]" />
                <span className="text-gray-400">info@northblueagency.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#00b2ff]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#ff4081]" />
                <span className="text-gray-400">Ciudad, País</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 North Blue Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
