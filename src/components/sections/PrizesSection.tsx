"use client";

import { motion, useMotionValue, useMotionTemplate, useReducedMotion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { useRipple } from "@/hooks/useRipple";

export interface Prize {
  id: string;
  title: string;
  iconType: "trophy" | "briefcase" | "gift";
  amount?: string;
  winners: string;
  description: string;
}

const PRIZES: Prize[] = [
  {
    id: "first-prize",
    title: "First Prize",
    iconType: "trophy",
    amount: "₹ 20,000 cash",
    winners: "1 winner",
    description: "₹20000 Cash",
  },
  {
    id: "second-prize",
    title: "Second Prize",
    iconType: "trophy",
    amount: "₹ 12,000 cash",
    winners: "1 winner",
    description: "₹12000 Cash",
  },
  {
    id: "third-prize",
    title: "Third Prize",
    iconType: "trophy",
    amount: "₹ 8,000 cash",
    winners: "1 winner",
    description: "₹8000 Cash",
  },
  {
    id: "asi-one-track",
    title: "ASI ONE Track Prize",
    iconType: "briefcase",
    winners: "1 winner",
    description: "Internship opportunity for the winning team of ASI One Track",
  },
  {
    id: "best-beginners",
    title: "Best Beginners Team",
    iconType: "gift",
    amount: "₹ 1,000",
    winners: "1 winner",
    description: "₹1000 worth of goodies, gifts, swag, etc",
  },
  {
    id: "best-female",
    title: "Best All Female Team",
    iconType: "gift",
    amount: "₹ 1,000",
    winners: "1 winner",
    description: "₹1000 worth of goodies, gifts, swag, etc",
  },
];

function TrophyIcon({ className = "w-14 h-14 sm:w-16 sm:h-16" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_12px_rgba(239,216,68,0.4)]">
        <defs>
          <linearGradient id="trophyGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF48F" />
            <stop offset="40%" stopColor="#EFD844" />
            <stop offset="80%" stopColor="#D89202" />
            <stop offset="100%" stopColor="#B36A04" />
          </linearGradient>
          <linearGradient id="trophyCup" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8B3" />
            <stop offset="50%" stopColor="#EFD844" />
            <stop offset="100%" stopColor="#C47E02" />
          </linearGradient>
          <linearGradient id="trophyBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43186B" />
            <stop offset="100%" stopColor="#1E0A33" />
          </linearGradient>
        </defs>
        <path d="M18 52H46V58H18V52Z" fill="url(#trophyBase)" stroke="#EFD844" strokeWidth="2" />
        <path d="M22 46H42V52H22V46Z" fill="url(#trophyGold)" />
        <path d="M28 36H36V46H28V36Z" fill="url(#trophyGold)" />
        <path d="M14 16C8 16 8 28 16 30M50 16C56 16 56 28 48 30" stroke="url(#trophyGold)" strokeWidth="4" strokeLinecap="round" />
        <path d="M16 12H48C48 26 40 36 32 36C24 36 16 26 16 12Z" fill="url(#trophyCup)" stroke="#B36A04" strokeWidth="1.5" />
        <path d="M32 18L33.5 21.5L37 22L34.5 24.5L35 28L32 26L29 28L29.5 24.5L27 22L30.5 21.5L32 18Z" fill="#FFF" />
      </svg>
    </div>
  );
}

function BriefcaseIcon({ className = "w-14 h-14 sm:w-16 sm:h-16" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_12px_rgba(34,211,238,0.35)]">
        <defs>
          <linearGradient id="briefcaseCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0E7490" />
          </linearGradient>
          <linearGradient id="briefcaseHandle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#CFFAFE" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <path d="M24 16V12C24 10.3431 25.3431 9 27 9H37C38.6569 9 40 10.3431 40 12V16" stroke="url(#briefcaseHandle)" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="8" y="16" width="48" height="38" rx="6" fill="url(#briefcaseCyan)" stroke="#22D3EE" strokeWidth="2" />
        <rect x="28" y="16" width="8" height="38" fill="rgba(255,255,255,0.15)" />
        <rect x="27" y="30" width="10" height="8" rx="2" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
        <circle cx="48" cy="44" r="8" fill="#22C55E" stroke="#080511" strokeWidth="2" />
        <path d="M44.5 44L47 46.5L51.5 41.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function GiftIcon({ className = "w-14 h-14 sm:w-16 sm:h-16" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_4px_12px_rgba(168,85,247,0.4)]">
        <defs>
          <linearGradient id="giftBox" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#581C87" />
          </linearGradient>
          <linearGradient id="giftRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF48F" />
            <stop offset="50%" stopColor="#EFD844" />
            <stop offset="100%" stopColor="#D89202" />
          </linearGradient>
        </defs>
        <rect x="10" y="24" width="44" height="32" rx="4" fill="url(#giftBox)" stroke="#A855F7" strokeWidth="2" />
        <rect x="7" y="18" width="50" height="9" rx="3" fill="#A855F7" stroke="#E9D5FF" strokeWidth="1.5" />
        <rect x="27" y="18" width="10" height="38" fill="url(#giftRibbon)" />
        <rect x="10" y="34" width="44" height="8" fill="url(#giftRibbon)" />
        <path d="M32 18C26 12 18 10 18 15C18 18 24 18 32 18Z" fill="url(#giftRibbon)" stroke="#B36A04" strokeWidth="1" />
        <path d="M32 18C38 12 46 10 46 15C46 18 40 18 32 18Z" fill="url(#giftRibbon)" stroke="#B36A04" strokeWidth="1" />
        <circle cx="32" cy="18" r="3.5" fill="#FFF48F" stroke="#B36A04" strokeWidth="1" />
      </svg>
    </div>
  );
}

function PrizeCard({ prize, idx }: { prize: Prize; idx: number }) {
  const ripple = useRipple();
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  }

  const spotlightMask = useMotionTemplate`
    radial-gradient(
      280px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 255, 255, 1) 0%,
      transparent 80%
    )
  `;

  const spotlightBg = useMotionTemplate`
    radial-gradient(
      320px circle at ${mouseX}px ${mouseY}px,
      rgba(239, 216, 68, 0.22),
      rgba(152, 60, 176, 0.12) 50%,
      transparent 85%
    )
  `;

  const renderIcon = () => {
    switch (prize.iconType) {
      case "trophy":
        return <TrophyIcon />;
      case "briefcase":
        return <BriefcaseIcon />;
      case "gift":
        return <GiftIcon />;
    }
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: prefersReducedMotion ? 0 : Math.min(idx * 0.08, 0.4),
        duration: 0.45,
        ease: "easeOut",
      }}
      whileHover={prefersReducedMotion ? {} : { y: -6 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
      onMouseMove={handleMouseMove}
      tabIndex={0}
      aria-label={`${prize.title}: ${prize.amount ? prize.amount + ',' : ''} ${prize.winners}, ${prize.description}`}
      className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 bg-purple-mid/90 backdrop-blur-md border-[3px] border-gold/40 hover:border-gold rounded-[24px] p-6 sm:p-7 shadow-offset-black transition-colors duration-300 overflow-hidden ripple-element focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-purple-bg cursor-pointer"
      onClick={ripple.onClick}
    >
      {/* Hardware-Accelerated GPU Radial Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{ background: spotlightBg }}
      />

      {/* Hardware-Accelerated GPU Dot Matrix Reveal Masked Under Cursor */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            backgroundImage: `radial-gradient(rgba(239, 216, 68, 0.45) 1.2px, transparent 1.2px)`,
            backgroundSize: "16px 16px",
            maskImage: spotlightMask,
            WebkitMaskImage: spotlightMask,
          }}
        />
      )}

      {/* Top Accent Bar */}
      <div className="absolute top-0 left-6 right-6 h-[4px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Animated Icon Container */}
      <div className="group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out shrink-0 relative z-10">
        {renderIcon()}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 min-w-0 relative z-10">
        <h3 className="font-fredoka text-xl sm:text-2xl text-cream group-hover:text-gold transition-colors duration-300 mb-2.5 tracking-wide">
          {prize.title}
        </h3>

        {/* Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
          {prize.amount && (
            <motion.span
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              className="inline-flex items-center gap-1.5 bg-gold text-black font-fredoka font-bold text-xs sm:text-sm px-3 py-1 rounded-lg border border-black/20 shadow-[0_0_12px_rgba(239,216,68,0.35)] group-hover:shadow-[0_0_18px_rgba(239,216,68,0.65)] transition-all duration-300"
            >
              {prize.amount}
            </motion.span>
          )}

          <span className="inline-flex items-center bg-purple-accent/60 text-cream/90 font-nunito font-semibold text-xs sm:text-sm px-3 py-1 rounded-lg border border-gold/20">
            {prize.winners}
          </span>
        </div>

        {/* Description */}
        <p className="font-nunito text-cream/80 text-sm sm:text-base leading-relaxed">
          {prize.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function PrizesSection() {
  return (
    <section id="prizes" className="relative w-full py-20 sm:py-28 px-6 bg-purple-bg overflow-hidden z-0">
      {/* Ambient background glow blobs */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(239,216,68,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(121,53,156,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <AnimatedHeading text="Prizes" shadowColor="#080511" />
          <p className="font-nunito text-cream/90 text-center text-base sm:text-lg max-w-2xl mx-auto mt-4 tracking-wide leading-relaxed">
            Compete for a <span className="text-gold font-bold">₹15L+</span> prize pool with <span className="text-gold font-bold">₹48K in cash</span> and <span className="text-gold font-bold">₹2K of other prizes</span>
          </p>
        </div>

        {/* Prizes 2-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {PRIZES.map((prize, idx) => (
            <PrizeCard key={prize.id} prize={prize} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
