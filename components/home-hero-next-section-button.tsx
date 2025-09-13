"use client";
import React from "react";

export const HeroButtonNext: React.FC = () => {
  return (
    <>
      <div
        className="absolute bottom-8 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default HeroButtonNext;
