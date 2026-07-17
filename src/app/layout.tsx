import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";

import "./globals.css";
import Background from "@/components/layout/Background";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nvld.my.id"),
  manifest: "/site.webmanifest",

  title: {
    default: "Vijjay Novaldi | Software Engineer",
    template: "%s | Vijjay Novaldi",
  },

  description:
    "Official portfolio of Vijjay Novaldi, a Software Engineer specializing in Android Development, Web Development, Backend Architecture, and AI Integration.",

  keywords: [
    "Vijjay",
    "Vijjay Novaldi",
    "Vijjay Portfolio",
    "Software Engineer",
    "Software Engineer Indonesia",
    "Android Developer",
    "Web Developer",
    "Backend Developer",
    "Full Stack Developer",
    "AI Integration",
    "Next.js Portfolio",
    "NVLD",
    "nvld.my.id",
  ],

  authors: [
    {
      name: "Vijjay Novaldi",
      url: "https://nvld.my.id",
    },
  ],

  creator: "Vijjay Novaldi",
  publisher: "Vijjay Novaldi",

  alternates: {
    canonical: "https://nvld.my.id",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  applicationName: "NVLD Portfolio",
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nvld.my.id",
    siteName: "Vijjay Novaldi",
    title: "Vijjay Novaldi | Software Engineer",
    description:
      "Official portfolio of Vijjay Novaldi, showcasing software engineering projects, Android development, web applications, backend architecture, and AI integration.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Vijjay Novaldi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vijjay Novaldi | Software Engineer",
    description:
      "Official portfolio of Vijjay Novaldi, Software Engineer specializing in Android, Web Development, Backend Architecture, and AI Integration.",
    images: ["/images/og-image.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        <Background />
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vijjay Novaldi",
              url: "https://nvld.my.id",
              image: "https://nvld.my.id/images/profile.webp",
              jobTitle: "Software Engineer",
              description:
                "Software Engineer specializing in Android Development, Web Development, Backend Architecture, and AI Integration.",
              sameAs: ["https://github.com/nvld-dev"],
            }),
          }}
        />
      </body>
    </html>
  );
}
