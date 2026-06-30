import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AI-Powered Digital Agency | InnovateAI",
  description: "Transform your brand with AI-driven digital solutions. Premium web design, branding, and marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="Rd37-qm7PcqAC5AkHSfOEDUCYyVY8EedadtID1LmYiA" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <LoadingScreen />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Default to dark as per plan
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
