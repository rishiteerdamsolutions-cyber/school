import type { Metadata } from "next";
import { Inter, Instrument_Serif, Rubik } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-heading-smart",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading-intl",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-body-intl",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "e-School | 3 School Website Themes",
    template: "%s | e-School",
  },
  description:
    "Minimal, video-first school website themes with an instant toggle: Smart School, International School, and Regular School.",
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
    siteName: "e-School",
    title: "e-School Website Themes",
    description:
      "Three minimal video-first school website themes with instant switching.",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "e-School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "e-School Website Themes",
    description:
      "Minimal, video-first themes with instant switching for school websites.",
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
      className={`${rubik.variable} ${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
