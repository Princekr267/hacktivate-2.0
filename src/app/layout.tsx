import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-fredoka'
});

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-nunito'
});

export const metadata: Metadata = {
  title: "Hacktivate 2.0 | JIMSEMTC Greater Noida",
  description: "A premium 24-hour hackathon at JIMSEMTC. Join 500+ hackers for non-stop coding, amazing prizes, and the ultimate tech showdown.",
};

import CustomCursor from "@/components/ui/CustomCursor";
import CanvasParticles from "@/components/backgrounds/CanvasParticles";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${fredoka.variable} ${nunito.variable} antialiased`} suppressHydrationWarning>
        <CanvasParticles />
        <CustomCursor />
        {/* Subtle grid overlay for depth */}
        <div className="bg-grid fixed inset-0 opacity-[0.06] pointer-events-none z-0 mix-blend-screen" />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
