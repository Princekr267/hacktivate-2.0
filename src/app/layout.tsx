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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${fredoka.variable} ${nunito.variable} antialiased`} suppressHydrationWarning>
        <CanvasParticles />
        <CustomCursor />
        {/* Cybernetic backgrounds */}
        <div className="bg-grid fixed inset-0 opacity-[0.08] pointer-events-none z-0 mix-blend-screen" />
        <div className="bg-circuit fixed inset-0 opacity-[0.06] pointer-events-none z-0 text-purple-accent mix-blend-screen" />
        {children}
      </body>
    </html>
  );
}
