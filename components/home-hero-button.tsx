"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import EnhancedContactModal from "@/components/enhanced-contact-modal";
import { ArrowRight } from "lucide-react";

export const HeroButtonModal: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <EnhancedContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <Button
        size="lg"
        className="bg-gradient-to-r from-[#ff4081] to-[#00b2ff] text-white hover:shadow-2xl transform hover:scale-105 transition-all text-lg px-8 py-4 w-[250px]"
        onClick={() => setIsContactModalOpen(true)}
      >
        Begin Your Project
        <ArrowRight className="ml-2" size={20} />
      </Button>
    </>
  );
};

export default HeroButtonModal;
