import type React from "react";
import AnimatedSection from "@/components/animated-section";
import WhatsAppCTA from "@/components/whatsapp-cta";

interface QuoteSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#ff4081] to-[#00b2ff]">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCTA
              message={`Hi! I'm interested in: ${title}`}
              size="lg"
              className="btn-white-hover bg-white text-[#ff4081] hover:bg-gray-100 transform hover:scale-105 transition-all"
            >
              {buttonText}
            </WhatsAppCTA>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default QuoteSection;
