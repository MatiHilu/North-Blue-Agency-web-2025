import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import LayoutShell from "@/components/layout-shell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "North Blue Agency - Marketing Digital Profesional",
  description:
    "Agencia de marketing digital especializada en redes sociales, branding y desarrollo web. Transformamos tu presencia digital.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/browserconfig.xml",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCWT9RJD');
          `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Meta Pixel Code --> */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1091881779764699');
      fbq('track', 'PageView');
    `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1091881779764699&ev=PageView&noscript=1"/>
    `,
          }}
        />
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body className={inter.className}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TCWT9RJD}"
                      height="0" width="0"
                      style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* <CustomCursor /> */}
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
