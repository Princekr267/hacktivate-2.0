"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";
import HeroBackground from "@/components/backgrounds/HeroBackground";
import { useRipple } from "@/hooks/useRipple";

export default function HeroSection() {
  const ripple = useRipple();

  const triggerConfetti = useCallback(() => {
    const colors = ["#EFD844", "#a855c8"];
    const end = Date.now() + 1500;
    const burst = () => {
      confetti({ particleCount: 4, angle: 60,  spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(burst);
    };
    burst();
  }, []);

  const handleRegister = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    ripple.onClick(e as React.MouseEvent<HTMLElement>);
    triggerConfetti();
  }, [ripple, triggerConfetti]);

  return (
    <section id="home" className="relative min-h-screen w-full bg-transparent overflow-hidden flex items-center justify-center" style={{ paddingTop: "68px" }}>
      <HeroBackground />

      {/* Ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[760px] h-[760px] -translate-x-1/2 -translate-y-1/2 bg-purple-accent rounded-full blur-[150px] opacity-18 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,216,68,0.04),transparent_42%),radial-gradient(circle_at_center,rgba(168,85,200,0.14),transparent_58%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          className="relative flex flex-col items-center w-full px-4 py-8 sm:px-8 sm:py-8"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
        >
          {/* Location badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.35 } } }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 bg-black/85 text-cream border-[1.5px] border-gold rounded-full px-5 py-2 font-nunito font-bold text-xs sm:text-sm shadow-[0_4px_25px_rgba(239,216,68,0.25)] mb-10 sm:mb-4 relative z-20"
          >
            <span className="text-gold animate-pulse">✦</span> JIMSEMTC · GREATER NOIDA
          </motion.div>

          {/* Hero image */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } } }}
            className="relative w-full max-w-[800px] sm:max-w-[950px] md:max-w-[1050px] select-none mt-2 sm:-mt-12 md:-mt-32"
          >
            {/* Subtle decorative glows */}
            <div className="absolute inset-x-[5%] top-[10%] bottom-[20%] rounded-full bg-gold/15 blur-[60px] pointer-events-none animate-pulse" />
            <div className="absolute inset-[10%] rounded-full bg-purple-accent/25 blur-[80px] pointer-events-none" />

            <div className="relative z-10 w-full mx-auto flex justify-center items-center scale-150 sm:scale-100 mt-6 sm:mt-0">
              <Image
                src="/hero-image.png"
                alt="Hacktivate Hero"
                width={1200}
                height={700}
                priority
                className="w-full h-auto object-contain rounded-xl drop-shadow-[0_15px_40px_rgba(8,5,17,0.4)]"
              />
            </div>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.28 } } }}
            className="hero-cta-row flex flex-wrap items-center justify-center gap-4 mt-20 sm:mt-[calc(12vh-15px)] relative z-30"
          >
            <motion.button
              onClick={handleRegister}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["6px 6px 0px #000", "6px 6px 0px #000, 0 0 20px rgba(239,216,68,0.6)", "6px 6px 0px #000"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="btn-shimmer ripple-element bg-gold hover:bg-purple-mid text-black hover:text-gold hover:border-gold font-fredoka uppercase text-xl px-10 py-4 rounded-xl border-[3px] border-black hover:-translate-y-1 hover:-translate-x-1 transition-all flex items-center gap-3 relative overflow-hidden"
              style={{ boxShadow: "6px 6px 0px #000" }}
            >
              Register Now <Zap fill="currentColor" size={22} className="animate-bounce" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
