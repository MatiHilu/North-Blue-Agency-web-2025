"use client";

import type React from "react";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradient: "pink" | "blue";
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  gradient,
}: ServiceCardProps) {
  const gradientClass =
    gradient === "pink"
      ? "from-[#ff4081] to-[#00b2ff]"
      : "from-[#00b2ff] to-[#ff4081]";

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border overflow-hidden">
      <CardContent className="p-0">
        <div className={`bg-gradient-to-br ${gradientClass} p-6 text-white`}>
          <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
        </div>
        <div className="p-6 min-h-[200px] flex flex-col items-start justify-between">
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <Link href={href}>
            <Button
              variant="outline"
              className="group/btn border-gray-300 hover:border-[#ff4081] hover:text-[#ff4081] transition-all"
            >
              Know more
              <ArrowRight
                size={16}
                className="ml-2 group-hover/btn:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
