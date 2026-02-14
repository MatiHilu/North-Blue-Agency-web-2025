// Página server component (no 'use client'): SEO manejado con Metadata API
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Data usage for Meta Ads, Google Ads, LinkedIn Ads, and Email Marketing. We do not share data with third parties outside these platforms.",
  alternates: { canonical: "/politica-privacidad" },
  keywords: [
    "privacy policy",
    "data protection",
    "cookies",
    "Meta Ads",
    "Google Ads",
    "LinkedIn Ads",
    "email marketing",
  ],
  publisher: "North Blue Agency",
  openGraph: {
    title: "Privacy Policy | North Blue Agency",
    description:
      "Data usage for Meta Ads, Google Ads, LinkedIn Ads, and Email Marketing. We do not share data with third parties outside these platforms.",
    url: "https://northblueagency.com/politica-privacidad",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | North Blue Agency",
    description:
      "Data usage for Meta Ads, Google Ads, LinkedIn Ads, and Email Marketing. We do not share data with third parties outside these platforms.",
  },
};

export default function PoliticaPrivacidadPage() {
  const updated = new Date("2025-09-04");
  const updatedStr = updated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // (No agregar llaves extra aquí)
  return (
    <div className="min-h-screen bg-white">
      {/* Metadata provista por generateMetadata */}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-[#ff4081]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#00b2ff]/20 blur-3xl" />
        <div className="relative container mx-auto px-4 py-20 text-white">
          <div className="max-w-3xl mt-10">
            <span className="inline-block px-3 py-1 text-xs tracking-wide rounded-full bg-white/10 ring-1 ring-white/20 mb-4">
              Last updated: {updatedStr}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              How we collect, use, and share your information when you visit our site or interact with our campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Body simple */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-gray-800 leading-7 space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Data we may collect
          </h3>
          <p>
            <strong>Contact data:</strong> name, email, phone, and company.
          </p>
          <p>
            <strong>Navigation & measurement data:</strong> pages visited, traffic sources, conversion events, and cookies/identifiers.
          </p>
          <p>
            <strong>Communication preferences:</strong> commercial interest, language, and subscriptions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Purposes of processing
          </h3>
          <p>
            We answer queries and create quotes; send commercial communications via <strong>email marketing</strong>; measure and optimize advertising campaigns on third-party platforms; and improve our site and services through analytics.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Advertising and platforms used
          </h3>
          <p>
            We use <strong>Meta (Facebook and Instagram) Ads</strong>,{" "}
            <strong>Google Ads</strong>, and <strong>LinkedIn Ads</strong>, as well as email marketing tools. These platforms may process technical and conversion data. We may use custom audiences or email lists, respecting their terms and applicable regulations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Who we share your data with
          </h3>
          <p>
            <strong>We only</strong> share data to execute and measure campaigns with <strong>Meta Ads</strong>, <strong>Google Ads</strong>,{" "}
            <strong>LinkedIn Ads</strong>, and our <strong>email marketing</strong> provider. We do not sell or transfer your information to other third parties outside these cases.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Legal Bases
          </h3>
          <p>
            We process your data based on your <strong>consent</strong>, the <strong>execution of a request or contract</strong>, and the <strong>legitimate interest</strong> in improving our services and marketing, when applicable.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Cookies and similar technologies
          </h3>
          <p>
            We use cookies and measurement pixels (e.g., <strong>Google Tag Manager</strong> and <strong>Meta Pixel</strong>). You can manage your preferences from the browser. If you block certain cookies, some functions may be affected.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Retention
          </h3>
          <p>
            We retain data for the time necessary for the purposes indicated or to comply with legal obligations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Your Rights
          </h3>
          <p>
            You can request access, rectification, update, or deletion of your data, as well as oppose or limit certain processing.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">Contact</h3>
          <p>
            For privacy inquiries, write to
            <a
              className="underline ml-1"
              href="mailto:info@northblueagency.com"
            >
              info@northblueagency.com
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Changes to this policy
          </h3>
          <p>
            We may update this policy to reflect legal or operational changes. We will publish the current version on this page.
          </p>
        </div>
      </section>
    </div>
  );
}
