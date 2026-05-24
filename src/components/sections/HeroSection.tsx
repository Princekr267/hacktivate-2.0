"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";
import HeroBackground from "@/components/backgrounds/HeroBackground";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { useRipple } from "@/hooks/useRipple";

export default function HeroSection() {
  const ripple = useRipple();

  const triggerConfetti = useCallback(() => {
    const colors = ["#EFD844", "#a855c8"];
    const end = Date.now() + 1500;
    const burst = () => {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
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
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden" style={{ paddingTop: "68px" }}>
      <HeroBackground />

      {/* Base layer */}
      <div className="absolute inset-0 bg-[#080511] pointer-events-none z-0" />
      
      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.22)_45%,rgba(8,5,17,0.65)_100%)] pointer-events-none z-10" />
      
      {/* Purple glow blob */}
      <div className="absolute left-1/2 top-[24%] -translate-x-1/2 -translate-y-[10%] w-[800px] h-[800px] sm:w-[1400px] sm:h-[1400px] bg-[radial-gradient(circle_50%_at_50%_50%,rgba(158,64,164,0.85)_0%,rgba(158,64,164,0.55)_35%,transparent_60%)] pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Top fold: Location Badge & Hero Image */}
        <motion.div
          className="relative flex flex-col items-center justify-center w-full min-h-[calc(100vh-68px)] px-4 py-8 sm:py-4 sm:px-8"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
        >
          {/* Location badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.35 } } }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2 bg-black/85 text-cream border-[1.5px] border-gold rounded-full px-3 py-1.5 sm:px-5 sm:py-2 font-nunito font-bold text-[9px] sm:text-xs md:text-sm shadow-[0_4px_25px_rgba(239,216,68,0.25)] mb-6 mx-auto relative z-20 text-center max-w-full w-fit"
          >
            <span className="text-gold animate-pulse shrink-0 text-[10px] sm:text-sm">✦</span>
            <span className="leading-none whitespace-nowrap pt-[2px]">11-12 SEP 2026 · JIMSEMTC · GREATER NOIDA</span>
          </motion.div>

          {/* Hero image */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } } }}
            className="relative w-full max-w-[340px] sm:max-w-[750px] md:max-w-[900px] mx-auto select-none -mt-4 sm:-mt-24 md:-mt-36"
          >
            {/* Oval background radial matching user's red oval */}
            <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[130%] h-[75%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(130,50,180,0.85)_0%,rgba(80,30,120,0.55)_45%,transparent_80%)] blur-[90px] pointer-events-none mix-blend-screen" />

            <div className="relative z-10 w-full mx-auto flex justify-center items-center mt-2 sm:mt-0">
              <Image
                src="/web_elements/hero-image.png"
                alt="Hacktivate Hero"
                width={1000}
                height={600}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(8,5,17,0.4)]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom fold: Tagline & CTA row (revealed when scrolling) */}
        <motion.div
          className="relative flex flex-col items-center justify-center w-full py-16 sm:py-24 z-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Tagline */}
          <div className="flex flex-col items-center justify-center relative z-20">
            <h2 className="font-fredoka text-4xl sm:text-5xl md:text-6xl text-center leading-tight mb-6 drop-shadow-md flex flex-col sm:flex-row items-center justify-center sm:gap-3">
              <span className="text-gold" style={{ textShadow: "3px 3px 0 #000" }}>Build Bold.</span>
              <span className="text-cream mt-1 sm:mt-0" style={{ textShadow: "3px 3px 0 #000" }}>Break Limits.</span>
            </h2>

            {/* Micro-line */}
            <div className="font-nunito font-bold text-cream/70 text-[10px] sm:text-xs tracking-wider uppercase text-center mb-2">
              ✦ 36 Hours · JIMSEMTC · Greater Noida ✦
            </div>
          </div>

          {/* CTA Row */}
          <div className="hero-cta-row flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 mt-8 sm:mt-10 pb-16 sm:pb-20 relative z-30 w-full px-2 sm:px-0">
            <motion.button
              onClick={handleRegister}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["6px 6px 0px #000", "6px 6px 0px #000, 0 0 20px rgba(239,216,68,0.6)", "6px 6px 0px #000"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="btn-shimmer ripple-element bg-gold hover:bg-purple-mid text-black hover:text-gold hover:border-gold font-fredoka uppercase text-lg sm:text-xl rounded-xl border-[3px] border-black hover:-translate-y-1 hover:-translate-x-1 transition-all flex items-center justify-center gap-3 relative overflow-hidden h-[60px] sm:h-[80px] w-full sm:w-[300px] max-w-[340px] sm:max-w-none mt-4 sm:mt-0"
              style={{ boxShadow: "6px 6px 0px #000" }}
            >
              Register Now <Zap fill="currentColor" size={22} className="animate-bounce" />
            </motion.button>
            <CountdownTimer />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
