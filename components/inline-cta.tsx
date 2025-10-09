import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

type CTAType = "quote" | "contact" | "link";

interface InlineCTAProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  type?: CTAType;
  className?: string;
  href?: string;
  accentColor?: "pink" | "blue" | "purple";
  centered?: boolean;
}

export default function InlineCTA({
  title,
  description,
  primaryLabel = "Comenzar",
  className = "",
  href = "/contacto",
  accentColor = "pink",
  centered = false,
}: InlineCTAProps) {
  const accentColors = {
    pink: "border-l-pink-500 hover:border-l-pink-600 bg-pink-50/50",
    blue: "border-l-blue-500 hover:border-l-blue-600 bg-blue-50/50",
    purple: "border-l-purple-500 hover:border-l-purple-600 bg-purple-50/50",
  };

  const buttonColors = {
    pink: "bg-pink-500 hover:bg-pink-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    purple: "bg-purple-500 hover:bg-purple-600",
  };

  return (
    <div
      className={`group relative border-l-4 ${
        accentColors[accentColor]
      } rounded-lg p-5 transition-all duration-200 hover:shadow-md ${className} max-w-[700px] ${
        centered ? "mx-auto" : ""
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex flex-col lg:flex-row  lg:items-center gap-4 flex-1">
          <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center shadow-sm">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-white-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
        <Link href={href}>
          <button
            className={`shrink-0 group/btn inline-flex items-center gap-2 px-5 py-2.5 ${buttonColors[accentColor]} text-white text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105`}
          >
            <span>{primaryLabel}</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
