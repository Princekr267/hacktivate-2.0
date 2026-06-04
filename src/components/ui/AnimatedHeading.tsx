"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  shadowColor?: string;
}

export default function AnimatedHeading({
  text,
  className = "",
  shadowColor = "#080511",
}: AnimatedHeadingProps) {
  return (
    <div className={`relative inline-block ${className}`} style={{ overflow: "visible" }}>
      {/* Base Layer: Outline Text */}
      <h2
        className="font-fredoka uppercase text-transparent tracking-wide select-none"
        style={{
          fontSize: "clamp(34px, 5vw, 60px)",
          WebkitTextStroke: "2.5px #EFD844",
          textShadow: `4px 4px 0 ${shadowColor}`,
          margin: 0,
        }}
      >
        {text}
      </h2>

      {/* Filled overlay and scan line animated together when in view */}
      <motion.div
        className="absolute inset-0 pointer-events-none select-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {/* Filled text layer that reveals via clip-path */}
        <motion.h2
          variants={{
            hidden: { clipPath: "inset(0 100% 0 0)" },
            visible: { 
              clipPath: "inset(0 0% 0 0)",
              transition: { duration: 0.9, ease: "easeOut" } 
            }
          }}
          className="font-fredoka uppercase text-gold tracking-wide absolute inset-0"
          style={{
            fontSize: "clamp(34px, 5vw, 60px)",
            textShadow: `0 0 10px #EFD844, 0 0 30px rgba(239, 216, 68, 0.6), 4px 4px 0 ${shadowColor}`,
            margin: 0,
          }}
        >
          {text}
        </motion.h2>

        {/* Scan line sweeping left to right */}
        <motion.div
          variants={{
            hidden: { left: "0%", opacity: 0 },
            visible: { 
              left: "100%",
              opacity: [0, 1, 1, 0],
              transition: { duration: 0.9, ease: "easeOut" }
            }
          }}
          className="absolute top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_12px_#EFD844]"
          style={{
            height: "100%",
            transform: "translateX(-50%)",
          }}
        />
      </motion.div>
    </div>
  );
}
