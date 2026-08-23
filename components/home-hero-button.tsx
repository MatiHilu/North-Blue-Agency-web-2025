import type React from "react";
import WhatsAppCTA from "@/components/whatsapp-cta";
import { ArrowRight } from "lucide-react";

export const HeroButtonModal: React.FC = () => {
  return (
    <WhatsAppCTA
      size="lg"
      className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-2xl transform hover:scale-105 transition-all text-lg px-8 py-4 w-[250px]"
    >
      Begin Your Project
      <ArrowRight className="ml-2" size={20} />
    </WhatsAppCTA>
  );
};

export default HeroButtonModal;
