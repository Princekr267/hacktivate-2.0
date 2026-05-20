"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";
import HeroBackground from "@/components/backgrounds/HeroBackground";

const TARGET_DATE = new Date("2026-09-18T10:00:00+05:30").getTime();

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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

  return (
    <section id="home" className="relative min-h-screen w-full bg-purple-bg overflow-hidden flex items-center pt-20 pb-10">
      <HeroBackground />

      {/* Ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 w-[760px] h-[760px] -translate-x-1/2 -translate-y-1/2 bg-purple-accent rounded-full blur-[150px] opacity-18 pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,216,68,0.04),transparent_42%),radial-gradient(circle_at_center,rgba(168,85,200,0.14),transparent_58%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 min-h-[calc(100vh-88px)] flex flex-col items-center justify-center text-center">
        <motion.div
          className="relative flex flex-col items-center gap-0 w-full px-4 py-6 sm:px-8 sm:py-8"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.35 } } }}
            className="inline-flex items-center gap-2 bg-black/85 text-cream border-2 border-gold rounded-full px-4 py-1.5 font-nunito font-bold text-sm shadow-offset"
          >
            <span className="text-gold">✦</span> JIMSEMTC · GREATER NOIDA
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.33 } } }}
            className="relative z-10 select-none w-full max-w-[840px]"
          >
            <Image
              src="/logo.png"
              alt="Hacktivate Logo"
              width={900}
              height={320}
              priority
              className="w-full h-auto object-contain mx-auto drop-shadow-[0_0_30px_rgba(239,216,68,0.32)]"
            />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 28, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.32 } } }}
            className="relative z-20 -mt-28 sm:-mt-36 md:-mt-44 w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] aspect-[4/5] sm:aspect-[5/4]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-x-1/2 top-0 h-14 w-[58%] -translate-x-1/2 rounded-full bg-gold/30 blur-3xl" />
              <div className="absolute inset-8 rounded-full bg-purple-accent/16 blur-[90px]" />
              <Image
                src="/mascot.png"
                alt="Hacktivate Mascot"
                fill
                priority
                sizes="(max-width: 640px) 92vw, 620px"
                className="object-contain object-top drop-shadow-[0_0_24px_rgba(121,53,156,0.48)]"
              />
            </div>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.25 } } }}
            className="max-w-2xl text-sm sm:text-base md:text-lg font-nunito font-bold text-cream/85 leading-relaxed"
          >
            A premium 24-hour hackathon where cartoon energy meets serious coding. Build, break, and create something unforgettable.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.28 } } }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <motion.button
              onClick={triggerConfetti}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#a855c8",
                color: "#ffffff",
                borderColor: "#a855c8",
                boxShadow: "none"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="btn-shimmer bg-gold text-black font-fredoka uppercase text-lg px-8 py-3.5 rounded-xl border-[3px] border-black shadow-offset-black hover:shadow-offset-black-hover hover:-translate-y-1 hover:-translate-x-1 transition-all flex items-center gap-2"
            >
              Register Now <Zap fill="currentColor" size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
