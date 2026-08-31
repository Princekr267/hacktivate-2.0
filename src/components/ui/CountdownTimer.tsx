"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "countdown" | "started" | "ended";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [phase, setPhase]       = useState<Phase>("countdown");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const startDate = new Date("2026-09-11T10:00:00").getTime();
    const endDate   = new Date("2026-09-12T22:00:00").getTime(); // start + 36h

    const updateTimer = () => {
      const now  = Date.now();
      const diff = startDate - now;

      if (now >= endDate) {
        setPhase("ended");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else if (diff <= 0) {
        setPhase("started");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setPhase("countdown");
        setTimeLeft({
          days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  /* ── Hackathon has started ── */
  if (phase === "started") {
    return (
      <AnimatePresence>
        <motion.div
          key="started"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-3 relative z-20"
        >
          <motion.div
            animate={{ boxShadow: ["0 0 0px rgba(239,216,68,0)", "0 0 32px rgba(239,216,68,0.7)", "0 0 0px rgba(239,216,68,0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-purple-mid border-2 border-gold rounded-2xl px-8 py-4 flex items-center gap-3 shadow-[5px_5px_0_#B36A04]"
          >
            <span className="text-3xl">🚀</span>
            <span className="font-fredoka text-gold text-2xl sm:text-3xl tracking-wide">
              Hackathon Has Started!
            </span>
          </motion.div>
          <span className="font-nunito text-cream/70 text-sm uppercase tracking-widest">
            Hacking in progress ⚡
          </span>
        </motion.div>
      </AnimatePresence>
    );
  }

  /* ── Hackathon ended ── */
  if (phase === "ended") {
    return (
      <AnimatePresence>
        <motion.div
          key="ended"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-3 relative z-20"
        >
          <div className="bg-purple-mid border-2 border-gold/50 rounded-2xl px-8 py-4 flex items-center gap-3 shadow-[5px_5px_0_#080511]">
            <span className="text-3xl">🏁</span>
            <span className="font-fredoka text-cream/80 text-2xl sm:text-3xl tracking-wide">
              Hackathon Has Ended
            </span>
          </div>
          <span className="font-nunito text-cream/50 text-sm uppercase tracking-widest">
            Thank you for participating 🙌
          </span>
        </motion.div>
      </AnimatePresence>
    );
  }

  /* ── Countdown ── */
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2.5 sm:gap-4 lg:gap-6 justify-center text-gold font-fredoka relative z-20"
    >
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-14 h-14 lg:w-16 lg:h-16 bg-purple-mid border-2 border-gold rounded-xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl shadow-[4px_4px_0_#B36A04] sm:shadow-[5px_5px_0_#B36A04]">
            {value.toString().padStart(2, "0")}
          </div>
          <span className="text-[10px] lg:text-xs uppercase tracking-widest mt-2 sm:mt-3 text-cream font-nunito">{unit}</span>
        </div>
      ))}
    </motion.div>
  );
}
