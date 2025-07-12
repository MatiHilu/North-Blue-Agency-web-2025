import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
//import CustomCursor from "@/components/custom-cursor";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "North Blue Agency - Marketing Digital Profesional",
  description:
    "Agencia de marketing digital especializada en redes sociales, branding y desarrollo web. Transformamos tu presencia digital.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <CustomCursor /> */}
        <ScrollToTop />
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
