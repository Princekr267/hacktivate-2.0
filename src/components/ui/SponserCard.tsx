"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRipple } from "@/hooks/useRipple";

interface SponsorCardProps {
  title: string;
  image: string;
  alt: string;
  accent: "cyan" | "gold" | "pink" | "purple";
  delay?: number;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
}

const accentStyles = {
  cyan: {
    line: "to-cyan-400/60",
    text: "text-cyan-300",
    border: "border-cyan-400/40",
    bg: "bg-cyan-400/10",
    cardBorder: "border-cyan-400/40 hover:border-cyan-400/80",
    glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]",
  },
  gold: {
    line: "to-gold/60",
    text: "text-gold",
    border: "border-gold/40",
    bg: "bg-gold/10",
    cardBorder: "border-gold/50 hover:border-gold/90",
    glow: "hover:shadow-[0_0_30px_rgba(239,216,68,0.25)]",
  },
  pink: {
    line: "to-pink-400/60",
    text: "text-pink-300",
    border: "border-pink-400/40",
    bg: "bg-pink-400/10",
    cardBorder: "border-pink-400/40 hover:border-pink-400/80",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]",
  },
  purple: {
    line: "to-purple-400/60",
    text: "text-purple-300",
    border: "border-purple-400/40",
    bg: "bg-purple-400/10",
    cardBorder: "border-purple-400/40 hover:border-purple-400/80",
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
  },
};

export default function SponsorCard({
  title,
  image,
  alt,
  accent,
  delay = 0,
  imageClassName,
  imageStyle,
}: SponsorCardProps) {
  const ripple = useRipple();
  const style = accentStyles[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 120, damping: 20 }}
      className="w-full flex flex-col items-center gap-3"
    >
      {/* Tier label */}
      <div className="flex items-center justify-center gap-2 w-full">
        <div className={`h-[1px] flex-1 max-w-[3rem] bg-gradient-to-r from-transparent ${style.line}`} />
        <span
          className={`font-nunito font-black text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-full px-2.5 sm:px-3 py-1 whitespace-nowrap border ${style.text} ${style.border} ${style.bg}`}
        >
          {title}
        </span>
        <div className={`h-[1px] flex-1 max-w-[3rem] bg-gradient-to-l from-transparent ${style.line}`} />
      </div>

      {/* Card — aspect-ratio-based so it scales at every viewport width */}
      <div className="w-full">
        <div
          {...ripple}
          className={`
            ripple-element w-full aspect-[16/7] sm:aspect-[16/8] lg:aspect-[16/9]
            bg-[rgba(20,12,40,0.85)] rounded-2xl border-2
            ${style.cardBorder} flex items-center justify-center
            px-6 sm:px-8 overflow-hidden
            relative transition-all duration-300 hover:bg-[rgba(40,20,70,0.9)]
            hover:-translate-y-1 shadow-lg ${style.glow}
          `}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={image}
              alt={alt}
              width={320}
              height={128}
              draggable={false}
              className={`
                max-w-[65%] max-h-[55%] w-auto h-auto
                object-contain object-center select-none pointer-events-none
                drop-shadow-md
                ${imageClassName || ""}
              `}
              style={imageStyle}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}