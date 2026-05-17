"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const SPONSORS = {
  gold: [
    { name: "TechCorp Global" },
    { name: "CloudWorks" },
  ],
  silver: [
    { name: "DevTools Inc" },
    { name: "NextGen Web" },
    { name: "DataFlow" },
  ],
  bronze: [
    { name: "StartupHub" },
    { name: "CodeSchool" },
    { name: "PixelPerfect" },
    { name: "LocalHost" },
  ]
};

import SponsorsBackground from "@/components/backgrounds/SponsorsBackground";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-32 px-6 bg-black relative z-0 overflow-hidden">
      <SponsorsBackground />
      
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-fredoka text-cream"
            style={{ fontSize: "clamp(38px, 5vw, 60px)", textShadow: "4px 4px 0 #B36A04" }}
          >
            Our Sponsors
          </motion.h2>
        </div>

        {/* Tiers */}
        <div className="flex flex-col gap-20">
          
          {/* Gold Tier */}
          <div className="flex flex-col items-center">
            <div className="flex items-center w-full mb-10 gap-4">
              <div className="h-[2px] flex-1 bg-gold opacity-50" />
              <div className="bg-[#FFD700] text-black font-fredoka uppercase text-sm px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                Gold Tier ⭐
              </div>
              <div className="h-[2px] flex-1 bg-gold opacity-50" />
            </div>
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {SPONSORS.gold.map((sponsor, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, x: -5 }}
                  className="w-full sm:w-[350px] h-[160px] bg-purple-mid border-[3px] border-gold rounded-2xl shadow-offset flex items-center justify-center transition-all hover:shadow-offset-hover"
                >
                  <span className="font-fredoka text-2xl text-cream opacity-50">{sponsor.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div className="flex flex-col items-center">
            <div className="flex items-center w-full mb-10 gap-4">
              <div className="h-[2px] flex-1 bg-gold opacity-30" />
              <div className="bg-[#C0C0C0] text-black font-fredoka uppercase text-sm px-6 py-2 rounded-full shadow-[0_0_15px_rgba(192,192,192,0.5)]">
                Silver Tier 🥈
              </div>
              <div className="h-[2px] flex-1 bg-gold opacity-30" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {SPONSORS.silver.map((sponsor, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, x: -5 }}
                  className="w-[250px] h-[120px] bg-purple-mid border-[3px] border-gold rounded-xl shadow-offset flex items-center justify-center transition-all hover:shadow-offset-hover"
                >
                  <span className="font-fredoka text-xl text-cream opacity-50">{sponsor.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="flex flex-col items-center">
            <div className="flex items-center w-full mb-10 gap-4">
              <div className="h-[2px] flex-1 bg-gold opacity-20" />
              <div className="bg-[#CD7F32] text-black font-fredoka uppercase text-sm px-6 py-2 rounded-full shadow-[0_0_15px_rgba(205,127,50,0.5)]">
                Bronze Tier 🥉
              </div>
              <div className="h-[2px] flex-1 bg-gold opacity-20" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {SPONSORS.bronze.map((sponsor, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, x: -5 }}
                  className="w-[180px] h-[90px] bg-purple-mid border-2 border-gold rounded-lg shadow-offset flex items-center justify-center transition-all hover:shadow-offset-hover"
                >
                  <span className="font-fredoka text-lg text-cream opacity-50">{sponsor.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-2xl mx-auto border-[3px] border-dashed border-gold rounded-3xl p-10 text-center bg-purple-bg/50 backdrop-blur-sm relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black border-2 border-gold px-4 py-1 rounded-full text-gold font-nunito font-bold text-sm">
            Partner With Us
          </div>
          <h3 className="font-fredoka text-gold text-3xl mb-4">Want to be a Sponsor? 🤝</h3>
          <p className="font-nunito text-cream opacity-90 mb-8 max-w-md mx-auto">
            Get your brand in front of 500+ passionate developers, designers, and creators. Help us build the future.
          </p>
          <a 
            href="mailto:sponsors@hacktivate.com"
            className="inline-flex items-center gap-2 bg-gold text-black font-fredoka uppercase px-8 py-3 rounded-xl border-[3px] border-black shadow-offset-black hover:shadow-offset-black-hover transition-all active:translate-y-1 active:translate-x-1 active:shadow-none"
          >
            <Mail size={18} /> Request Deck
          </a>
        </motion.div>

      </div>
    </section>
  );
}
