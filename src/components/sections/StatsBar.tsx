"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

const STATS = [
  { num: 9,                  label: "Tracks"    },
  { num: 36,  suffix: "h",  label: "Non-Stop"  },
  { num: 1,   prefix: "₹", suffix: "L+", label: "Prize Pool" },
];

export default function StatsBar() {
  return (
    <div className="relative w-full z-10 mb-10 mt-0">

      {/* Top Wavy SVG — seamless, no stroke */}
      <svg
        className="w-full h-[calc(2rem+2px)] sm:h-[calc(3rem+2px)] absolute -top-8 sm:-top-12 left-0 text-gold fill-current"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
      >
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
      </svg>

      <section className="bg-gold py-10 sm:py-12 px-6 relative">
        <div className="stats-grid max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-0">
          {STATS.map((stat, idx) => (
            <React.Fragment key={idx}>
              {/* Stat block — perfectly self-centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center text-center px-2 flex-1"
              >
                <AnimatedNumber
                  value={stat.num}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-fredoka text-purple-bg text-5xl sm:text-5xl md:text-6xl mb-1"
                  style={{ textShadow: "3px 3px 0 #B36A04" }}
                />
                <span className="font-nunito font-black text-black uppercase tracking-widest text-base mt-2">
                  {stat.label}
                </span>
              </motion.div>

              {/* Divider — horizontal on mobile, vertical on desktop */}
              {idx < STATS.length - 1 && (
                <div className="stats-divider w-24 h-[3px] sm:w-[3px] sm:h-16 bg-purple-bg rounded-full opacity-30 mix-blend-overlay shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Bottom Wavy SVG — seamless, no stroke */}
      <svg
        className="w-full h-[calc(2rem+2px)] sm:h-[calc(3rem+2px)] absolute -bottom-8 sm:-bottom-12 left-0 text-gold fill-current rotate-180"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
      >
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
      </svg>
    </div>
  );
}
