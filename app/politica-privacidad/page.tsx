// Página server component (no 'use client'): SEO manejado con Metadata API
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Uso de datos para Meta Ads, Google Ads, LinkedIn Ads y Email Marketing. No compartimos datos con terceros fuera de estas plataformas.",
  alternates: { canonical: "/politica-privacidad" },
  keywords: [
    "política de privacidad",
    "privacy policy",
    "protección de datos",
    "cookies",
    "Meta Ads",
    "Google Ads",
    "LinkedIn Ads",
    "email marketing",
  ],
  publisher: "North Blue Agency",
  openGraph: {
    title: "Política de Privacidad | North Blue Agency",
    description:
      "Uso de datos para Meta Ads, Google Ads, LinkedIn Ads y Email Marketing. No compartimos datos con terceros fuera de estas plataformas.",
    url: "https://northblueagency.com/politica-privacidad",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | North Blue Agency",
    description:
      "Uso de datos para Meta Ads, Google Ads, LinkedIn Ads y Email Marketing. No compartimos datos con terceros fuera de estas plataformas.",
  },
};

export default function PoliticaPrivacidadPage() {
  const updated = new Date("2025-09-04");
  const updatedStr = updated.toLocaleDateString("es-AR", {
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
              Última actualización: {updatedStr}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Política de Privacidad
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Cómo recopilamos, usamos y compartimos tu información cuando
              visitás nuestro sitio o interactuás con nuestras campañas.
            </p>
          </div>
        </div>
      </section>

      {/* Body simple */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-gray-800 leading-7 space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Datos que podemos recopilar
          </h3>
          <p>
            <strong>Datos de contacto:</strong> nombre, email, teléfono y
            empresa.
          </p>
          <p>
            <strong>Datos de navegación y medición:</strong> páginas visitadas,
            fuentes de tráfico, eventos de conversión y cookies/identificadores.
          </p>
          <p>
            <strong>Preferencias de comunicación:</strong> interés comercial,
            idioma y suscripciones.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Finalidades del tratamiento
          </h3>
          <p>
            Respondemos consultas y elaboramos presupuestos; enviamos
            comunicaciones comerciales mediante <strong>email marketing</strong>
            ; medimos y optimizamos campañas publicitarias en plataformas de
            terceros; y mejoramos nuestro sitio y servicios a través de
            analítica.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Publicidad y plataformas utilizadas
          </h3>
          <p>
            Utilizamos <strong>Meta (Facebook e Instagram) Ads</strong>,{" "}
            <strong>Google Ads</strong> y <strong>LinkedIn Ads</strong>, además
            de herramientas de email marketing. Estas plataformas pueden
            procesar datos técnicos y de conversión. Podemos usar públicos
            personalizados o listas de emails, respetando sus términos y la
            normativa aplicable.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Con quién compartimos tus datos
          </h3>
          <p>
            <strong>Solo</strong> compartimos datos para ejecutar y medir
            campañas con <strong>Meta Ads</strong>, <strong>Google Ads</strong>,{" "}
            <strong>LinkedIn Ads</strong> y nuestro proveedor de{" "}
            <strong>email marketing</strong>. No vendemos ni cedemos tu
            información a otros terceros fuera de estos casos.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Bases legales
          </h3>
          <p>
            Tratamos tus datos sobre la base de tu{" "}
            <strong>consentimiento</strong>, la{" "}
            <strong>ejecución de una solicitud o contrato</strong>, y el{" "}
            <strong>interés legítimo</strong> en mejorar nuestros servicios y
            marketing, cuando corresponda.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Cookies y tecnologías similares
          </h3>
          <p>
            Usamos cookies y píxeles de medición (por ejemplo,{" "}
            <strong>Google Tag Manager</strong> y <strong>Meta Pixel</strong>).
            Podés gestionar tus preferencias desde el navegador. Si bloqueás
            ciertas cookies, algunas funciones pueden verse afectadas.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Conservación
          </h3>
          <p>
            Conservamos los datos por el tiempo necesario para las finalidades
            indicadas o para cumplir obligaciones legales.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Tus derechos
          </h3>
          <p>
            Podés solicitar acceso, rectificación, actualización o eliminación
            de tus datos, así como oponerte o limitar ciertos tratamientos.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">Contacto</h3>
          <p>
            Para consultas sobre privacidad, escribí a
            <a
              className="underline ml-1"
              href="mailto:info@northblueagency.com"
            >
              info@northblueagency.com
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8">
            Cambios en esta política
          </h3>
          <p>
            Podemos actualizar esta política para reflejar cambios legales u
            operativos. Publicaremos la versión vigente en esta página.
          </p>
        </div>
      </section>
    </div>
  );
}
