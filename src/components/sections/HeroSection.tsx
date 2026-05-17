"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Zap, Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";
import HeroBackground from "@/components/backgrounds/HeroBackground";
import { TerminalPanel, StatusBadge } from "@/components/ui/TerminalPanel";

const TARGET_DATE = new Date("2026-09-18T10:00:00+05:30").getTime();

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = TARGET_DATE - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days:  Math.floor(diff / 86400000),
          hours: Math.floor((diff % 86400000) / 3600000),
          mins:  Math.floor((diff % 3600000) / 60000),
          secs:  Math.floor((diff % 60000) / 1000),
        });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}

const CHIPS = [
  { icon: Calendar, text: "18-19 Sep" },
  { icon: Clock,    text: "24 Hours"  },
  { icon: MapPin,   text: "Greater Noida" },
  { icon: Users,    text: "500+ Hackers" },
];

const ITEMS = ["Days", "Hours", "Mins", "Secs"] as const;

const EMOJIS = [
  { emoji: "⚡", top: "18%", left: "10%", delay: 0    },
  { emoji: "✦", top: "60%", left: "14%", delay: 0.8  },
  { emoji: "★", top: "25%", left: "82%", delay: 0.4  },
  { emoji: "🔧", top: "72%", left: "78%", delay: 1.2  },
  { emoji: "👾", top: "50%", left: "6%",  delay: 1.8  },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const timeLeft = useCountdown();

  useEffect(() => { setMounted(true); }, []);

  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const mascotY = useTransform(scrollY, [0, 600], [0, -60]);

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
    <section id="home" className="relative min-h-screen w-full bg-purple-bg overflow-hidden flex items-center pt-16">
      <HeroBackground />

      {/* Ambient radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] -translate-y-1/2 bg-purple-accent rounded-full blur-[140px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 relative z-10 min-h-[calc(100vh-64px)] items-center py-6">

        {/* ── LEFT CONTENT ── */}
        <motion.div
          className="flex flex-col justify-center gap-4"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
        >
          {/* Pill tag */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }}
            className="self-start bg-black text-cream border-2 border-gold rounded-full px-4 py-1.5 font-nunito font-bold text-sm shadow-offset flex items-center gap-2 float-chip"
          >
            <span className="text-gold">✦</span> JIMSEMTC · GREATER NOIDA
          </motion.div>

          {/* Title */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.35 } } }}
            className="font-fredoka leading-none tracking-tight"
          >
            <h1 className="glitch text-gold leading-none" data-text="HACKTIVATE" style={{ fontSize: "clamp(40px,6.5vw,78px)", textShadow: "4px 4px 0 #080511" }}>HACKTIVATE</h1>
            <h1 className="text-purple-highlight mt-1 leading-none" style={{ fontSize: "clamp(34px,5vw,58px)", textShadow: "3px 3px 0 #080511" }}>2.0</h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 } } }}
            className="text-sm md:text-base font-nunito font-bold text-cream/85 max-w-md"
          >
            A premium 24-hour hackathon where cartoon energy meets serious coding. Build, break, and create something unforgettable.
          </motion.p>

          {/* Info chips — compact 2×2 grid */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 } } }}
            className="grid grid-cols-2 gap-2.5 max-w-xs"
          >
            {CHIPS.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="bg-purple-mid/60 border border-gold/35 text-gold font-nunito font-bold px-3 py-2 rounded-xl flex items-center gap-2 text-sm"
              >
                <Icon size={13} className="flex-shrink-0 opacity-80" /> {text}
              </div>
            ))}
          </motion.div>

          {/* Countdown */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3 } } }}
          >
            <div className="flex gap-2.5">
              {ITEMS.map((label) => {
                const key = label.toLowerCase() as keyof typeof timeLeft;
                const value = timeLeft[key];
                return (
                  <div key={label} className="flex flex-col items-center">
                    <div className="bg-purple-mid border-2 border-gold/60 rounded-lg w-[50px] h-[54px] flex items-center justify-center gold-pulse">
                      <span className="font-fredoka text-xl text-gold" style={{ textShadow: "2px 2px 0 #080511" }}>
                        {mounted ? String(value).padStart(2, "0") : "00"}
                      </span>
                    </div>
                    <span className="font-nunito font-bold text-[9px] uppercase text-cream/50 tracking-wider mt-1">{label}</span>
                  </div>
                );
              })}
              <div className="flex items-center ml-1">
                <span className="font-nunito text-[9px] uppercase text-gold/50 tracking-widest leading-tight">Until<br/>event</span>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.35 } } }}
            className="flex flex-wrap gap-4 pt-1"
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
            <motion.a
              href="#tracks"
              whileTap={{
                scale: 0.95,
                backgroundColor: "#a855c8",
                color: "#ffffff",
                borderColor: "#a855c8",
                boxShadow: "none"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="bg-transparent text-gold font-fredoka uppercase text-lg px-8 py-3.5 rounded-xl border-[3px] border-gold hover:bg-gold hover:text-black hover:-translate-y-1 hover:-translate-x-1 transition-all flex items-center gap-2"
            >
              Explore Tracks <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT CONTENT — Layered 3D Cyber Scene ── */}
        <div className="relative hidden lg:flex items-center justify-center w-full h-[560px]">

          {/* Floating emojis */}
          {EMOJIS.map((e, i) => (
            <div
              key={i}
              className="absolute text-2xl select-none float-chip pointer-events-none z-0"
              style={{ top: e.top, left: e.left, animationDelay: `${e.delay}s` }}
            >
              {e.emoji}
            </div>
          ))}

          {/* Terminal Panel — top-left */}
          <motion.div
            className="absolute left-[0%] top-[4%] w-[340px] z-10"
            initial={{ opacity: 0, x: -24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <TerminalPanel />
          </motion.div>

          {/* Samurai Mascot — foreground, bottom-right */}
          <div className="absolute right-[2%] bottom-[2%] z-20">
            {/* Rotating dashed ring */}
            <div
              className="absolute w-[280px] h-[280px] border border-dashed border-gold/15 rounded-full pointer-events-none starburst"
              style={{ top: "50%", left: "50%", translate: "-50% -50%" }}
            />
            {/* Animated glow platform — pulses in sync with mascot */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[190px] h-[22px] bg-gold rounded-[100%] mix-blend-screen pointer-events-none"
              animate={{ opacity: [0.2, 0.45, 0.2], scaleX: [1, 1.12, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "blur(28px)" }}
            />

            {/* Entrance: 3-D flip-in from right + scale spring */}
            <motion.div
              style={{ y: prefersReducedMotion ? 0 : mascotY, perspective: 900 }}
              initial={{ scale: 0.6, opacity: 0, rotateY: -55, y: 40 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.25 }}
            >
              {/* Continuous: float up/down + slight left-right tilt */}
              <motion.div
                animate={prefersReducedMotion ? {} : {
                  y:       [-7, 7, -7],
                  rotate:  [-1.5, 1.5, -1.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-[260px] h-[300px] relative"
              >
                {/* Glow halo behind mascot — pulses */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{ opacity: [0, 0.18, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ background: "radial-gradient(circle, rgba(239,216,68,0.55) 0%, transparent 70%)" }}
                />
                <Image
                  src="/mascot.png"
                  alt="Hacktivate Mascot"
                  fill
                  priority
                  sizes="260px"
                  className="object-contain"
                  style={{ filter: "drop-shadow(0 0 22px rgba(121,53,156,0.5))" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* HUD Badge — Status: top-left */}
          <motion.div
            className="absolute -left-3 -top-6 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div animate={{ y: [-4, 4, -4] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
              <StatusBadge label="Status" value="LIVE · OPEN" color="#4ade80" />
            </motion.div>
          </motion.div>

          {/* HUD Badge — Prize Pool: top-right */}
          <motion.div
            className="absolute right-[2%] top-[8%] z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            <motion.div animate={{ y: [4, -4, 4] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}>
              <StatusBadge label="Prize Pool" value="₹2L+" color="#EFD844" />
            </motion.div>
          </motion.div>

          {/* HUD Badge — Duration: bottom-left */}
          <motion.div
            className="absolute left-[2%] bottom-[8%] z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>
              <StatusBadge label="Duration" value="24 HRS" color="#a855c8" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
