import type { Metadata } from "next";
import {
  DM_Sans,
  Merriweather,
  Orbitron,
  Outfit,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-heading-smart",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const outfit = Outfit({
  variable: "--font-body-smart",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-heading-intl",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body-intl",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-heading-trust",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body-trust",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "School Website Demo Platform | Admissions-Focused Themes",
    template: "%s | School Website Demo Platform",
  },
  description:
    "Digital-marketing friendly school website demo: SEO-ready pages, admissions-first CTAs, and conversion-focused design across Smart, International, and Trust themes.",
  keywords: [
    "school website",
    "school admissions website",
    "education website design",
    "school digital marketing",
    "school SEO",
    "admissions funnel",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "School Website Demo Platform",
    title: "Admissions-Ready School Website Demo",
    description:
      "A production-grade Next.js demo tailored for school lead generation and admissions growth.",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "School Website Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions-Ready School Website Demo",
    description:
      "SEO + conversion-focused school website themes for better admissions outcomes.",
    images: ["/next.svg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme="international"
      className={`${orbitron.variable} ${outfit.variable} ${playfair.variable} ${dmSans.variable} ${merriweather.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
