import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Grocery Compass - Stop Overpaying for Groceries",
  description: "Compare prices across local stores and find the cheapest option automatically. Join the waitlist for early access.",
  openGraph: {
    title: "Grocery Compass - Stop Overpaying for Groceries",
    description: "Compare prices across local stores and find the cheapest option automatically.",
    type: "website",
    locale: "en_US",
    siteName: "Grocery Compass",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery Compass",
    description: "Stop overpaying for groceries. Compare prices instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
