"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TICKER_ITEMS = [
  "24 HOURS", "✦", "NON-STOP CODING", "✦", "500+ HACKERS", "✦", "FREE FOOD", "✦", "₹2L+ PRIZE POOL", "✦", 
  "24 HOURS", "✦", "NON-STOP CODING", "✦", "500+ HACKERS", "✦", "FREE FOOD", "✦", "₹2L+ PRIZE POOL", "✦",
  "24 HOURS", "✦", "NON-STOP CODING", "✦", "500+ HACKERS", "✦", "FREE FOOD", "✦", "₹2L+ PRIZE POOL", "✦",
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black">
      
      {/* Top Wavy SVG — no stroke, seamless gold */}
      <svg className="w-full h-[calc(2rem+2px)] sm:h-[calc(3rem+2px)] absolute -top-8 sm:-top-12 left-0 text-gold fill-current" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
      </svg>

      {/* Ticker Bar (Forward) */}
      <div className="bg-gold overflow-hidden relative flex py-3">
        <motion.div 
          className="flex whitespace-nowrap gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {TICKER_ITEMS.map((item, idx) => (
            <span key={idx} className={`font-fredoka text-xl ${item === "✦" ? "text-purple-bg" : "text-black"}`}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Ticker Bar (Reverse) */}
      <div className="bg-purple-mid overflow-hidden relative flex py-3">
        <motion.div 
          className="flex whitespace-nowrap gap-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {TICKER_ITEMS.map((item, idx) => (
            <span key={idx} className={`font-fredoka text-xl ${item === "✦" ? "text-gold" : "text-cream"}`}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wavy SVG for Purple Strip — seamless purple flow into black */}
      <svg className="w-full h-8 sm:h-12 text-purple-mid fill-current rotate-180 mb-8" viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ marginTop: "-1px" }}>
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-[140px] md:pb-16 relative z-10">
        
        {/* Top Row */}
        <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Hacktivate Logo"
                width={180}
                height={56}
                priority
                className="w-[150px] md:w-[170px] h-auto object-contain"
              />
            </div>
            <p className="font-nunito text-cream/60 text-sm max-w-[250px] leading-relaxed">
              The ultimate 24-hour hackathon at JIMSEMTC. Build the future, break the limits, and have fun doing it.
            </p>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-3">
            <h4 className="font-fredoka text-gold mb-2 text-lg">Navigate</h4>
            {["Home", "Tracks", "Timeline", "Team", "Sponsors", "FAQ"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-nunito font-semibold text-cream/60 hover:text-gold transition-colors text-sm w-fit">
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-fredoka text-gold mb-2 text-lg">Contact</h4>
            <a href="mailto:hello@hacktivate.com" className="font-nunito font-semibold text-cream/60 hover:text-gold transition-colors text-sm w-fit">
              hello@hacktivate.com
            </a>
            <a href="mailto:sponsors@hacktivate.com" className="font-nunito font-semibold text-cream/60 hover:text-gold transition-colors text-sm w-fit">
              sponsors@hacktivate.com
            </a>
            <a href="https://maps.google.com" className="font-nunito font-semibold text-cream/60 hover:text-gold transition-colors text-sm w-fit mt-2">
              JIMSEMTC Campus<br/>
              Greater Noida, UP
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="font-fredoka text-gold mb-2 text-lg">Follow Us</h4>
            <div className="footer-social flex gap-3">
              <motion.a href="#" whileHover={{ rotate: 15, y: -2 }} className="w-[38px] h-[38px] bg-purple-mid border-2 border-gold rounded-lg flex items-center justify-center text-gold shadow-offset-black hover:bg-gold hover:text-black transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </motion.a>
              <motion.a href="#" whileHover={{ rotate: 15, y: -2 }} className="w-[38px] h-[38px] bg-purple-mid border-2 border-gold rounded-lg flex items-center justify-center text-gold shadow-offset-black hover:bg-gold hover:text-black transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </motion.a>
              <motion.a href="#" whileHover={{ rotate: 15, y: -2 }} className="w-[38px] h-[38px] bg-purple-mid border-2 border-gold rounded-lg flex items-center justify-center text-gold shadow-offset-black hover:bg-gold hover:text-black transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </motion.a>
              <motion.a href="#" whileHover={{ rotate: 15, y: -2 }} className="w-[38px] h-[38px] bg-purple-mid border-2 border-gold rounded-lg flex items-center justify-center text-gold shadow-offset-black hover:bg-gold hover:text-black transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </motion.a>
            </div>
          </div>
          
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col justify-center items-center gap-2 z-20 w-full mt-12 md:mt-16 relative">
          <p className="font-nunito font-semibold text-cream/60 text-xs text-center">
            © 2025 Hacktivate. All rights reserved.
          </p>
          <p className="font-nunito font-bold text-cream/60 text-xs flex items-center gap-1 justify-center">
            Made with <span className="text-gold">⚡</span> by the Hacktivate Team
          </p>
        </div>

      </div>

      {/* Corner Elements */}
      <img src="/corner%20element%20robo.png" alt="Corner Element Robo" className="absolute bottom-0 left-0 w-[140px] md:w-[250px] pointer-events-none z-0" />
      <img src="/corner%20element%20bar.png" alt="Corner Element Bar" className="absolute bottom-0 right-0 w-[180px] md:w-[340px] pointer-events-none z-0" />

    </footer>
  );
}
