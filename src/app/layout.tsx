import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/json-ld";
import { HapticProvider } from "@/components/haptic-provider";
import { PrivacyAnalytics } from "@/components/privacy-analytics";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heizungjob.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Heizung Jobs Schweiz | Stellen für Heizungs-Fachkräfte",
    template: "%s | heizungjob.ch",
  },
  description:
    "Finde Stellen für Heizungsinstallateurinnen und Heizungsinstallateure, Heizungsmonteure, Servicetechnik, Planung und Projektleitung Heizung in der Schweiz.",
  keywords: [
    "Heizungjobs",
    "Heizungjobs Schweiz",
    "Heizungsinstallateur Jobs",
    "Projektleiter Heizung",
    "Heizungsmonteur",
    "Heizungsplaner Jobs",
    "Servicetechniker Heizung",
    "Stellen Heizungsbranche Schweiz",
    "Heizung Job Schweiz",
    "Heizung Stellen Schweiz",
    "Heizungsinstallateur Stellenangebote",
    "Heizungsmonteur Jobs Schweiz",
    "Heizungsinstallateur Temporär",
    "Heizung Festanstellung",
    "Heizungsinstallateur Lohn Schweiz",
  ],
  openGraph: {
    title: "Heizung Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Heizungsinstallateur EFZ, Heizungsmonteur, Servicetechnik, Planung und Projektleitung Heizung.",
    type: "website",
    url: "/",
    siteName: "heizungjob.ch",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heizung Jobs Schweiz | Stellenangebote",
    description:
      "Finde Stellenangebote für Heizungsinstallateur EFZ, Heizungsmonteur, Servicetechnik, Planung und Projektleitung Heizung.",
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-CH": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "el7V2RsquLlGsWyjTfpIu0taGlVTafpyDuinuMxx_Tc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "heizungjob.ch",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    "heizungjob.ch bündelt Stellenangebote mit klarem Bezug zum Heizungsgewerk in der Schweiz.",
  areaServed: {
    "@type": "Country",
    name: "Switzerland",
    alternateName: "Schweiz",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "German",
    url: `${SITE_URL}/kontakt`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "heizungjob.ch",
  url: SITE_URL,
  description:
    "Die spezialisierte Jobbörse für Heizungs-Fachkräfte in der Schweiz.",
  inLanguage: "de-CH",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body lang="de-CH" className="antialiased font-sans">
        <a className="skip-link" href="#main-content">
          Zum Inhalt
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <HapticProvider>{children}</HapticProvider>
        <PrivacyAnalytics />
      </body>
    </html>
  );
}
