import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Background from "@/components/layout/Background";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NVLD",
  description: "NVLD Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        {children}
      </body>
    </html>
  );
}
