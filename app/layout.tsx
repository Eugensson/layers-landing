import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Layers - Modern Web Experiences",
    template: "%s | Layers",
  },
  description:
    "Layers is a cutting-edge landing platform built with Next.js 16, Tailwind 4, ShadCN, and Framer Motion, delivering seamless animations, responsive design, and an intuitive user experience for modern web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
