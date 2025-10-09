import type { ReactNode } from "react";
import SEOSuiteLinks from "@/components/seo-service-links";

export default function SEOServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <SEOSuiteLinks />
    </>
  );
}
