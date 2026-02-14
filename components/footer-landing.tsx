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
      <div className="container mx-auto px-4 pt-16 pb-8">
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
              We transform your digital presence with innovative strategies and measurable results.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/north.blue.agency/"
                className="text-gray-400 hover:text-[#ff4081] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/north.blue.agency/"
                className="text-gray-400 hover:text-[#00b2ff] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/northblue-agency/"
                className="text-gray-400 hover:text-[#ff4081] transition-colors mt-[1px]"
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
              {/*  <a
                href="https://x.com/northblueagency"
                className="text-gray-400 hover:text-[#00b2ff] transition-colors mt-[1px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a> */}
            </div>
          </div>

          <div className="pl-20"></div>

          <div className="pl-20"></div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#ff4081]" />
                <span className="text-gray-400">info@northblueagency.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#00b2ff]" />
                <span className="text-gray-400">
                  <a
                    href="tel:+541130545828"
                    className="hover:underline"
                    aria-label="Llamar a +54 11 3054 5828"
                  >
                    +54 11 3054 5828
                  </a>

                  {" / "}
                  <a
                    href="tel:+541153248376"
                    className="hover:underline"
                    aria-label="Llamar a +54 11 5324 8376"
                  >
                    +54 11 5324 8376
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#ff4081]" />
                <span className="text-gray-400">
                  CABA, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="mb-2">
            &copy; 2026 North Blue Agency. Todos los derechos reservados.
          </p>
          <p className="text-sm">
            <Link
              href="/politica-privacidad"
              className="hover:text-white underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
