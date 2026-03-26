import type { Metadata } from "next";
import ContactClientPage from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with North Blue Agency to start your digital marketing project. We respond within 24 hours.",
  keywords: ["contact", "digital marketing agency", "North Blue Agency", "consulting", "get in touch"],
  alternates: {
    canonical: "https://northblueagency.com/contact",
    languages: {
      "es": "https://northblueagency.com/contacto",
      "en": "https://northblueagency.com/contact",
    }
  },
  openGraph: {
    title: "Contact | North Blue Agency",
    description: "Get in touch with North Blue Agency to start your digital marketing project.",
    url: "https://northblueagency.com/contact",
    type: "website",
    images: [{ url: "https://northblueagency.com/North-Blue-Agency.png", width: 1200, height: 630, alt: "North Blue Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | North Blue Agency",
    description: "Get in touch with North Blue Agency to start your digital marketing project.",
    images: ["https://northblueagency.com/North-Blue-Agency.png"],
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
