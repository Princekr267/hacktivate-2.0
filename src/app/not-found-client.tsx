"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HackerCat, PixelAlien } from "@/components/ui/FloatingMascots";

const ERROR_CODES = [
  { text: "ERROR", top: "15%", left: "10%", delay: "0s", duration: "4s" },
  { text: "0x404", top: "20%", left: "80%", delay: "1.2s", duration: "6s" },
  { text: "NULL", top: "45%", left: "5%", delay: "0.5s", duration: "5s" },
  { text: "undefined", top: "50%", left: "85%", delay: "2s", duration: "7s" },
  { text: "NaN", top: "80%", left: "15%", delay: "1.5s", duration: "4.5s" },
  { text: "SEGFAULT", top: "75%", left: "75%", delay: "0.8s", duration: "5.5s" },
];

export default function NotFoundClient() {
  return (
    <main className="min-h-screen bg-[#130522] relative flex flex-col items-center justify-center overflow-hidden">

      {/* Large radial purple glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[80px] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(121,53,156,0.3) 0%, transparent 60%)" }}
      />

      {/* Floating Error Codes (Pure CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {ERROR_CODES.map((err, i) => (
          <span
            key={i}
            className="absolute font-monospace text-[rgba(239,216,68,0.18)] select-none"
            style={{
              top: err.top,
              left: err.left,
              fontSize: "clamp(10px, 1.5vw, 14px)",
              animation: `float-chip ${err.duration} ease-in-out infinite`,
              animationDelay: err.delay,
            }}
          >
            {err.text}
          </span>
        ))}
      </div>

      {/* Ambient floating mini-mascots */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <motion.div
          className="absolute top-[30%] left-[8%] hidden md:block"
          animate={{ y: [-15, 15, -15], rotate: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <HackerCat />
        </motion.div>

        <motion.div
          className="absolute top-[25%] right-[8%] hidden md:block"
          animate={{ y: [-20, 20, -20], rotate: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <PixelAlien />
        </motion.div>


      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* Robot Mascot (Confused) */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[160px] h-[200px] md:w-[220px] md:h-[280px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/web_elements/confused-mascot.png"
            alt="Confused Robot Mascot"
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(239,216,68,0.2)]"
          />
        </motion.div>

        {/* Text Block */}
        <h1
          className="font-fredoka text-[#EFD844] mt-6 leading-tight select-none"
          style={{ fontSize: "clamp(38px, 6vw, 64px)", textShadow: "4px 4px 0 #080511" }}
        >
          Page Not Found
        </h1>

        <p className="font-nunito font-bold text-[#FFFCF3] text-[16px] opacity-70 mt-2.5 max-w-md select-none">
          Looks like this page got lost in the hackathon chaos.
        </p>

        <div className="font-fredoka text-[11px] bg-[rgba(239,216,68,0.1)] border-[1.5px] border-[rgba(239,216,68,0.3)] rounded-[30px] px-[14px] py-[4px] text-[#EFD844] mt-4 select-none">
          ERR_404
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Link href="/">
            <motion.button
              whileHover={{ y: -3, x: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#EFD844] hover:bg-purple-mid text-[#080511] hover:text-[#EFD844] hover:border-[#EFD844] font-fredoka uppercase px-[36px] py-[14px] rounded-xl border-[3px] border-black shadow-[6px_6px_0_#080511] transition-colors text-[18px]"
            >
              🚀 Return to Base
            </motion.button>
          </Link>
        </div>

      </div>
    </main>
  );
}
