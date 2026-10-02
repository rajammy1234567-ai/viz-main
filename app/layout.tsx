import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VIZ Digital | Business Consulting & Growth Solutions | Zirakpur, Punjab",
  description: "VIZ Digital helps businesses, entrepreneurs, and emerging brands turn ideas into strong, scalable, and sustainable ventures. Where Strategy Meets Innovation.",
  keywords: [
    "VIZ Digital",
    "business consulting",
    "growth solutions",
    "Zirakpur Punjab",
    "digital marketing",
    "information technology consulting",
    "brand management",
    "franchise consultancy",
    "restaurant setup consultancy",
  ],
  openGraph: {
    title: "VIZ Digital | Where Strategy Meets Innovation",
    description: "Premium business consulting and growth solutions for businesses, entrepreneurs, and emerging brands.",
    url: "https://vizdigital.com",
    siteName: "VIZ Digital",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light overflow-x-hidden">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden min-h-screen w-full max-w-full`}>
        <div className="flex min-h-screen flex-col overflow-x-hidden w-full max-w-full">
          <Navbar />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
