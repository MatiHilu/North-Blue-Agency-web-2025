import type { Metadata } from "next";
import ContactClientPage from "../contact/contact-client";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctate con North Blue Agency para comenzar tu proyecto de marketing digital. Respondemos en menos de 24 horas.",
  keywords: ["contacto", "agencia de marketing digital", "North Blue Agency", "consultoría", "iniciar proyecto"],
  alternates: {
    canonical: "https://northblueagency.com/contacto",
    languages: {
      "es": "https://northblueagency.com/contacto",
      "en": "https://northblueagency.com/contact",
    }
  },
  openGraph: {
    title: "Contacto | North Blue Agency",
    description: "Contáctate con North Blue Agency para comenzar tu proyecto de marketing digital.",
    url: "https://northblueagency.com/contacto",
    type: "website",
    locale: "es_AR",
    images: [{ url: "https://northblueagency.com/North-Blue-Agency.png", width: 1200, height: 630, alt: "North Blue Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | North Blue Agency",
    description: "Contáctate con North Blue Agency para comenzar tu proyecto de marketing digital.",
    images: ["https://northblueagency.com/North-Blue-Agency.png"],
  },
};

export default function ContactoPage() {
  return <ContactClientPage />;
}
