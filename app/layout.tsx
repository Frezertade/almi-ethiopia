import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import { I18nProvider } from "@/components/i18n-provider";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ALMI Ethiopia - Agroforestry & Agricultural Land Management",
    template: "%s | ALMI Ethiopia",
  },
  description: siteConfig.description,
  applicationName: "ALMI Ethiopia",
  authors: [{ name: "ALMI Ethiopia" }],
  creator: "ALMI Ethiopia",
  publisher: "ALMI Ethiopia",
  category: "nonprofit agriculture climate development",
  keywords: [
    "ALMI Ethiopia",
    "Agroforestry and Agricultural Land Management Initiative",
    "agroforestry Ethiopia",
    "sustainable agriculture Ethiopia",
    "urban agriculture Ethiopia",
    "soil conservation Ethiopia",
    "land management",
    "climate adaptation",
    "women livelihood opportunities",
    "youth employment Ethiopia",
    "community empowerment",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ALMI Ethiopia - Agroforestry & Agricultural Land Management",
    description: siteConfig.description,
    url: "/",
    siteName: "ALMI Ethiopia",
    images: [
      {
        url: "/tree-handshake.jpg",
        width: 1200,
        height: 630,
        alt: "ALMI Ethiopia partnership and sustainable growth visual",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALMI Ethiopia - Agroforestry & Agricultural Land Management",
    description: siteConfig.description,
    images: ["/tree-handshake.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/tree-handshake.jpg`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: "+1-610-301-2826",
    address: {
      "@type": "PostalAddress",
      streetAddress: "136 Werner St.",
      addressLocality: "Wernersville",
      addressRegion: "PA",
      postalCode: "19565",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "Ethiopia",
    },
    knowsAbout: [
      "Agroforestry",
      "Urban agriculture",
      "Soil conservation",
      "Agricultural land management",
      "Climate adaptation",
      "Community engagement",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <I18nProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
