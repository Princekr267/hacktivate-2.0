"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

const STATS = [
  { num: 500, suffix: "+",  label: "Hackers"   },
  { num: 2,   prefix: "₹", suffix: "L+", label: "Prize Pool" },
  { num: 24,  suffix: "h",  label: "Non-Stop"  },
  { num: 6,                  label: "Tracks"    },
  { num: 30,  suffix: "+",  label: "Mentors"   },
];

export default function StatsBar() {
  return (
    <div className="relative w-full z-10 my-10">

      {/* Top Wavy SVG — seamless, no stroke */}
      <svg
        className="w-full h-[calc(2rem+2px)] sm:h-[calc(3rem+2px)] absolute -top-8 sm:-top-12 left-0 text-gold fill-current"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
      >
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
      </svg>

      <section className="bg-gold py-8 sm:py-12 px-6 relative">
        {/*
          Each stat gets its own flex-1 column that is independently centered.
          The dividers live BETWEEN columns (not inside them), so they
          never affect the centering of the number + label.
        */}
        <div className="stats-grid max-w-7xl mx-auto flex items-center justify-around">
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
                  className="font-fredoka text-purple-bg text-4xl sm:text-5xl md:text-6xl mb-1"
                  style={{ textShadow: "3px 3px 0 #B36A04" }}
                />
                <span className="font-nunito font-black text-black uppercase tracking-widest text-sm sm:text-base">
                  {stat.label}
                </span>
              </motion.div>

              {/* Vertical divider — outside the stat block, invisible on mobile */}
              {idx < STATS.length - 1 && (
                <div className="stats-divider hidden lg:block w-[3px] h-16 bg-purple-bg rounded-full opacity-30 mix-blend-overlay shrink-0" />
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
