"use client";
import "../app/globals.css";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeaderLanding from "@/components/header-landing";
import FooterLanding from "@/components/footer-landing";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function LayoutShell({ children }: Props) {
  const pathname = usePathname() || "/";

  // list of segments (or paths) where we DON'T want the global shell
  const excludedPaths = ["/mejora-tu-presencia-en-redes"];

  const isExcluded = excludedPaths.some((p) => pathname.startsWith(p));

  if (isExcluded) {
    return (
      <>
        <ScrollToTop />
        <HeaderLanding />
        <Toaster />
        <main className="overflow-hidden">{children}</main>
        <FooterLanding />
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Toaster />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
