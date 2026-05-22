"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home",      href: "#home"      },
  { name: "Tracks",    href: "#tracks"    },
  { name: "Timeline",  href: "#timeline"  },
  { name: "Team",      href: "#team"      },
  { name: "Sponsors",  href: "#sponsors"  },
  { name: "FAQ",       href: "#faq"       },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
    const sections = NAV_LINKS.map(l => l.href.substring(1));
    let current = "";
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el && latest >= el.offsetTop - 200) current = section;
    }
    if (current) setActiveSection(current);
    else if (latest < 200) setActiveSection("home");
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: (el as HTMLElement).offsetTop - 68, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] bg-purple-bg/78 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "border-b border-gold/35 shadow-[0_10px_30px_rgba(8,5,17,0.4)]" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center justify-center h-full order-1 shrink-0">
            <a href="#home" onClick={(e) => scrollToSection(e, "#home")} aria-label="Go to home">
              <Image
                src="/logo.png"
                alt="Hacktivate Logo"
                width={200}
                height={70}
                priority
                className="w-[148px] md:w-[175px] h-auto object-contain origin-left drop-shadow-[0_0_14px_rgba(239,216,68,0.18)]"
              />
            </a>
          </div>

          {/* Nav links — desktop only */}
          <nav className="hidden md:flex items-center gap-2 order-2 mx-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative px-5 py-2 font-nunito font-bold text-[15px] uppercase tracking-wider transition-transform duration-200 hover:-translate-y-0.5 group"
              >
                <span
                  className={`relative z-10 ${
                    activeSection === link.href.substring(1)
                      ? "text-black"
                      : "text-cream hover:text-gold"
                  }`}
                >
                  {link.name}
                </span>
                {/* Animated underline on hover (non-active) */}
                {activeSection !== link.href.substring(1) && (
                  <span className="absolute bottom-0.5 left-2 right-2 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                )}
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

          {/* CTA — desktop */}
          <motion.button
            whileTap={{ scale: 0.95, backgroundColor: "#a855c8", color: "#EFD844", borderColor: "#EFD844", boxShadow: "none" }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="hidden md:flex order-3 shrink-0 bg-gold hover:bg-purple-mid text-black hover:text-gold hover:border-gold font-fredoka uppercase px-6 py-2 rounded-xl border-[3px] border-black shadow-offset-black transition-all items-center gap-2"
          >
            Register <Zap size={18} fill="currentColor" />
          </motion.button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden order-3 text-gold p-2 rounded-lg border-2 border-gold/40"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed top-[68px] left-0 right-0 z-50 overflow-hidden border-b-[3px] border-gold/40 md:hidden"
            style={{ background: "#291648", transformOrigin: "top" }}
          >
            <nav className="flex flex-col relative z-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-fredoka text-[18px] text-cream hover:text-gold hover:bg-black/20 transition-colors border-b border-gold/15 cursor-pointer" 
                  style={{ padding: "14px 24px" }}
                >
                  {link.name}
                </a>
              ))}
              <div className="p-4">
                <button className="w-full bg-gold hover:bg-purple-mid text-black hover:text-gold hover:border-gold font-fredoka uppercase px-6 py-3 rounded-xl border-[3px] border-black shadow-offset-black flex items-center justify-center gap-2 transition-colors">
                  Register <Zap size={18} fill="currentColor" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
