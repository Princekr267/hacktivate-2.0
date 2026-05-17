"use client";

import { motion } from "framer-motion";

import AnimatedNumber from "@/components/ui/AnimatedNumber";

const STATS = [
  { num: 500, suffix: "+", label: "Hackers" },
  { num: 2, prefix: "₹", suffix: "L+", label: "Prize Pool" },
  { num: 24, suffix: "h", label: "Non-Stop" },
  { num: 6, label: "Tracks" },
  { num: 30, suffix: "+", label: "Mentors" },
];

export default function StatsBar() {
  return (
    <div className="relative w-full z-10 my-10">
      {/* Top Wavy SVG */}
      <svg className="w-full h-8 sm:h-12 absolute -top-8 sm:-top-12 left-0 text-gold fill-current" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" fill="none" stroke="#080511" strokeWidth="6" />
      </svg>

      <section className="bg-gold border-y-[3px] border-black py-8 sm:py-12 px-4 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-y-10 gap-x-6">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              className="flex items-center"
            >
              <div className="flex flex-col items-center text-center">
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
              </div>
              
              {/* Vertical Divider (hide on last item and on small screens if wrapped) */}
              {idx < STATS.length - 1 && (
                <div className="hidden lg:block w-[3px] h-16 bg-purple-bg ml-10 rounded-full opacity-40 mix-blend-overlay" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom Wavy SVG */}
      <svg className="w-full h-8 sm:h-12 absolute -bottom-8 sm:-bottom-12 left-0 text-gold fill-current rotate-180" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" fill="none" stroke="#080511" strokeWidth="6" />
      </svg>
    </div>
  );
}
