"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Zap } from "lucide-react";

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
    <header className={`fixed top-0 left-0 right-0 z-50 h-[68px] bg-purple-bg border-b-[3px] border-gold transition-all duration-300 ${scrolled ? 'shadow-offset' : ''}`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <h1 className="font-fredoka text-2xl text-cream tracking-wide">HACKTIVATE</h1>
          <span className="font-fredoka text-sm bg-purple-mid text-cream px-3 py-1 rounded-full border-2 border-black shadow-offset-black">
            2.0
          </span>
        </div>

        {/* Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative px-5 py-2 font-nunito font-bold text-[15px] uppercase tracking-wider transition-colors"
            >
              <span className={`relative z-10 ${activeSection === link.href.substring(1) ? 'text-black' : 'text-cream hover:text-gold'}`}>
                {link.name}
              </span>
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-gold rounded-full border-2 border-black"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button className="bg-gold hover:bg-gold-mid text-black font-fredoka uppercase px-6 py-2 rounded-xl border-[3px] border-black shadow-offset-black hover:shadow-offset-black-hover transition-all active:translate-y-1 active:translate-x-1 active:shadow-none flex items-center gap-2">
          Register <Zap size={18} fill="currentColor" />
        </button>
      </div>
    </header>
  );
}
