"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Tracks", href: "#tracks" },
  { name: "Timeline", href: "#timeline" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);

    // Simple scroll spy
    const sections = NAV_LINKS.map(link => link.href.substring(1));
    let current = "";
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && latest >= element.offsetTop - 200) {
        current = section;
      }
    }
    if (current) {
      setActiveSection(current);
    } else if (latest < 200) {
      setActiveSection("home");
    }
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 68,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[76px] border-b border-gold/35 bg-purple-bg/78 backdrop-blur-xl transition-all duration-300 ${scrolled ? 'shadow-[0_10px_30px_rgba(8,5,17,0.4)]' : ''}`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-4">
        {/* Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 order-2 mx-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative px-5 py-2 font-nunito font-bold text-[15px] uppercase tracking-wider transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className={`relative z-10 ${activeSection === link.href.substring(1) ? 'text-black' : 'text-cream hover:text-gold'}`}>
                {link.name}
              </span>
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gold rounded-full border-2 border-black shadow-[0_4px_0_rgba(8,5,17,1)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className="flex items-center justify-center h-full order-1 shrink-0">
          <Image
            src="/logo.png"
            alt="Hacktivate Logo"
            width={240}
            height={80}
            priority
            className="w-[180px] md:w-[220px] h-auto object-contain scale-[1.15] origin-left drop-shadow-[0_0_14px_rgba(239,216,68,0.18)]"
          />
        </div>

        {/* CTA */}
        <motion.button
          whileTap={{
            scale: 0.95,
            backgroundColor: "#a855c8",
            color: "#ffffff",
            borderColor: "#a855c8",
            boxShadow: "none"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="order-3 shrink-0 bg-gold hover:bg-gold-mid text-black font-fredoka uppercase px-6 py-2 rounded-xl border-[3px] border-black shadow-offset-black hover:shadow-offset-black-hover transition-all flex items-center gap-2"
        >
          Register <Zap size={18} fill="currentColor" />
        </motion.button>
      </div>
    </header>
  );
}
