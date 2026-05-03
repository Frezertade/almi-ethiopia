import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import { I18nProvider } from "@/components/i18n-provider";
import { Analytics } from "@vercel/analytics/next";

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
  title: {
    default: "ALMI Ethiopia - Agroforestry & Agricultural Land Management",
    template: "%s | ALMI Ethiopia",
  },
  description:
    "Agroforestry and Agricultural Land Management Initiative in Ethiopia (ALMI Ethiopia). Empowering communities with sustainable agriculture, agroforestry, and land management practices.",
  keywords: [
    "ALMI Ethiopia",
    "agroforestry",
    "sustainable agriculture",
    "Ethiopia",
    "land management",
    "soil conservation",
    "urban agriculture",
    "community empowerment",
  ],
  openGraph: {
    title: "ALMI Ethiopia - Agroforestry & Agricultural Land Management",
    description:
      "Empowering communities with sustainable agriculture and land management practices in Ethiopia.",
    url: "https://almiethiopia.org",
    siteName: "ALMI Ethiopia",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen flex flex-col">
        <I18nProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
