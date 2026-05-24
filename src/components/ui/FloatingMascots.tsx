"use client";

import { motion } from "framer-motion";
import { memo } from "react";

// --- Mascot: Hacker Cat ---
export const HackerCat = memo(() => (
  <svg viewBox="0 0 120 140" width="110" height="128">
    {/* Ears */}
    <polygon points="22,30 10,2 42,18" fill="#79359C" stroke="#080511" strokeWidth="2.5"/>
    <polygon points="98,30 110,2 78,18" fill="#79359C" stroke="#080511" strokeWidth="2.5"/>
    <polygon points="26,27 18,10 38,20" fill="#a855c8" stroke="none"/>
    <polygon points="94,27 102,10 82,20" fill="#a855c8" stroke="none"/>
    {/* Head */}
    <ellipse cx="60" cy="60" rx="48" ry="44" fill="#291648" stroke="#080511" strokeWidth="3"/>
    {/* Hoodie */}
    <path d="M18,90 Q12,130 20,138 L100,138 Q108,130 102,90 Q80,105 60,105 Q40,105 18,90Z" fill="#43186B" stroke="#080511" strokeWidth="2.5"/>
    {/* Hood opening */}
    <path d="M35,92 Q60,115 85,92 Q80,108 60,108 Q40,108 35,92Z" fill="#291648" stroke="#080511" strokeWidth="2"/>
    {/* Screen glow on face */}
    <ellipse cx="60" cy="62" rx="34" ry="30" fill="#1a0a2e"/>
    {/* Eyes - glowing green like terminal */}
    <ellipse cx="44" cy="56" rx="9" ry="10" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
    <ellipse cx="76" cy="56" rx="9" ry="10" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
    <ellipse cx="44" cy="57" rx="4" ry="5" fill="#080511"/>
    <ellipse cx="76" cy="57" rx="4" ry="5" fill="#080511"/>
    <circle cx="46" cy="54" r="2" fill="#FFFCF3" opacity="0.8"/>
    <circle cx="78" cy="54" r="2" fill="#FFFCF3" opacity="0.8"/>
    {/* Nose */}
    <polygon points="60,66 56,72 64,72" fill="#a855c8" stroke="#080511" strokeWidth="1.5"/>
    {/* Smirk */}
    <path d="M52,76 Q60,82 70,76" fill="none" stroke="#FFFCF3" strokeWidth="2" strokeLinecap="round"/>
    {/* Whiskers */}
    <line x1="14" y1="64" x2="50" y2="68" stroke="#FFFCF3" strokeWidth="1.5" opacity="0.6"/>
    <line x1="14" y1="72" x2="50" y2="72" stroke="#FFFCF3" strokeWidth="1.5" opacity="0.6"/>
    <line x1="106" y1="64" x2="70" y2="68" stroke="#FFFCF3" strokeWidth="1.5" opacity="0.6"/>
    <line x1="106" y1="72" x2="70" y2="72" stroke="#FFFCF3" strokeWidth="1.5" opacity="0.6"/>
    {/* Laptop */}
    <rect x="22" y="118" width="76" height="16" rx="4" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
    <rect x="26" y="108" width="68" height="14" rx="3" fill="#43186B" stroke="#080511" strokeWidth="2"/>
    <text x="32" y="119" fontFamily="monospace" fontSize="7" fill="#EFD844">&gt;_hack</text>
  </svg>
));
HackerCat.displayName = "HackerCat";

// --- Mascot: Pixel Alien ---
export const PixelAlien = memo(() => (
  <svg viewBox="0 0 100 120" width="90" height="108">
    {/* Antenna */}
    <line x1="50" y1="8" x2="50" y2="25" stroke="#EFD844" strokeWidth="3"/>
    <circle cx="50" cy="6" r="5" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
    {/* Head */}
    <rect x="20" y="22" width="60" height="50" rx="12" fill="#79359C" stroke="#080511" strokeWidth="3"/>
    {/* Eyes - big compound */}
    <ellipse cx="37" cy="40" rx="12" ry="14" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
    <ellipse cx="63" cy="40" rx="12" ry="14" fill="#EFD844" stroke="#080511" strokeWidth="2.5"/>
    <ellipse cx="37" cy="41" rx="6" ry="7" fill="#080511"/>
    <ellipse cx="63" cy="41" rx="6" ry="7" fill="#080511"/>
    <circle cx="39" cy="37" r="2.5" fill="#FFFCF3"/>
    <circle cx="65" cy="37" r="2.5" fill="#FFFCF3"/>
    {/* Mouth grille */}
    <rect x="30" y="60" width="40" height="8" rx="4" fill="#43186B" stroke="#080511" strokeWidth="2"/>
    <line x1="38" y1="60" x2="38" y2="68" stroke="#EFD844" strokeWidth="1.5"/>
    <line x1="46" y1="60" x2="46" y2="68" stroke="#EFD844" strokeWidth="1.5"/>
    <line x1="54" y1="60" x2="54" y2="68" stroke="#EFD844" strokeWidth="1.5"/>
    <line x1="62" y1="60" x2="62" y2="68" stroke="#EFD844" strokeWidth="1.5"/>
    {/* Body */}
    <rect x="28" y="70" width="44" height="38" rx="10" fill="#43186B" stroke="#080511" strokeWidth="2.5"/>
    {/* Badge */}
    <rect x="36" y="78" width="28" height="20" rx="4" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
    <text x="39" y="91" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#291648">HACK</text>
    {/* Arms */}
    <rect x="4" y="72" width="26" height="14" rx="7" fill="#79359C" stroke="#080511" strokeWidth="2.5"/>
    <rect x="70" y="72" width="26" height="14" rx="7" fill="#79359C" stroke="#080511" strokeWidth="2.5"/>
    {/* Legs */}
    <rect x="32" y="106" width="14" height="12" rx="4" fill="#79359C" stroke="#080511" strokeWidth="2"/>
    <rect x="54" y="106" width="14" height="12" rx="4" fill="#79359C" stroke="#080511" strokeWidth="2"/>
  </svg>
));
PixelAlien.displayName = "PixelAlien";

// --- Mascot: Ghost Coder ---
const GhostCoder = memo(() => (
  <svg viewBox="0 0 90 110" width="82" height="100">
    {/* Body */}
    <path d="M15,50 Q15,12 45,12 Q75,12 75,50 L75,95 Q65,85 55,95 Q45,105 35,95 Q25,85 15,95 Z" fill="#FFFCF3" stroke="#080511" strokeWidth="3"/>
    {/* Eyes */}
    <ellipse cx="32" cy="48" rx="11" ry="13" fill="#291648"/>
    <ellipse cx="58" cy="48" rx="11" ry="13" fill="#291648"/>
    <circle cx="35" cy="44" r="4" fill="#EFD844"/>
    <circle cx="61" cy="44" r="4" fill="#EFD844"/>
    {/* Code on belly */}
    <text x="20" y="72" fontFamily="monospace" fontSize="9" fill="#79359C" fontWeight="bold">{"{"}</text>
    <text x="28" y="72" fontFamily="monospace" fontSize="7" fill="#EFD844">code</text>
    <text x="56" y="72" fontFamily="monospace" fontSize="9" fill="#79359C" fontWeight="bold">{"}"}</text>
    {/* Arms */}
    <ellipse cx="8" cy="62" rx="7" ry="18" fill="#FFFCF3" stroke="#080511" strokeWidth="2.5"/>
    <ellipse cx="82" cy="62" rx="7" ry="18" fill="#FFFCF3" stroke="#080511" strokeWidth="2.5"/>
    {/* Halo */}
    <ellipse cx="45" cy="8" rx="22" ry="6" fill="none" stroke="#EFD844" strokeWidth="3"/>
    <ellipse cx="45" cy="6" rx="22" ry="6" fill="none" stroke="#EFD844" strokeWidth="2" opacity="0.4"/>
  </svg>
));
GhostCoder.displayName = "GhostCoder";

// --- Mascot: Coffee Bot ---
const CoffeeBot = memo(() => (
  <svg viewBox="0 0 100 130" width="88" height="116">
    {/* Antenna */}
    <rect x="46" y="2" width="8" height="16" rx="3" fill="#D89202" stroke="#080511" strokeWidth="2"/>
    <circle cx="50" cy="4" r="5" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
    {/* Head */}
    <rect x="20" y="16" width="60" height="48" rx="12" fill="#B36A04" stroke="#080511" strokeWidth="3"/>
    {/* Face screen */}
    <rect x="26" y="22" width="48" height="34" rx="8" fill="#080511" stroke="#291648" strokeWidth="2"/>
    {/* Eyes - LEDs */}
    <circle cx="38" cy="36" r="8" fill="#EFD844"/>
    <circle cx="62" cy="36" r="8" fill="#EFD844"/>
    <circle cx="38" cy="36" r="4" fill="#080511"/>
    <circle cx="62" cy="36" r="4" fill="#080511"/>
    <circle cx="40" cy="33" r="2" fill="#FFFCF3"/>
    <circle cx="64" cy="33" r="2" fill="#FFFCF3"/>
    {/* Smile LED */}
    <path d="M35,48 Q50,56 65,48" fill="none" stroke="#EFD844" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Body */}
    <rect x="18" y="62" width="64" height="50" rx="12" fill="#D89202" stroke="#080511" strokeWidth="3"/>
    {/* Coffee cup on chest */}
    <rect x="32" y="72" width="36" height="28" rx="6" fill="#080511" stroke="#EFD844" strokeWidth="2"/>
    <path d="M39,76 Q50,92 61,76" fill="none" stroke="#EFD844" strokeWidth="2"/>
    <text x="38" y="94" fontFamily="monospace" fontSize="7" fill="#EFD844">☕ brew</text>
    {/* Arms */}
    <rect x="2" y="65" width="18" height="34" rx="9" fill="#B36A04" stroke="#080511" strokeWidth="2.5"/>
    <rect x="80" y="65" width="18" height="34" rx="9" fill="#B36A04" stroke="#080511" strokeWidth="2.5"/>
    {/* Legs */}
    <rect x="26" y="110" width="18" height="18" rx="6" fill="#B36A04" stroke="#080511" strokeWidth="2"/>
    <rect x="56" y="110" width="18" height="18" rx="6" fill="#B36A04" stroke="#080511" strokeWidth="2"/>
  </svg>
));
CoffeeBot.displayName = "CoffeeBot";

// --- Mascot: Pixel Skull (spooky hacker) ---
const PixelSkull = memo(() => (
  <svg viewBox="0 0 80 90" width="72" height="82">
    <rect x="12" y="6" width="56" height="52" rx="20" fill="#79359C" stroke="#080511" strokeWidth="3"/>
    {/* Eyes */}
    <ellipse cx="28" cy="28" rx="12" ry="13" fill="#080511"/>
    <ellipse cx="52" cy="28" rx="12" ry="13" fill="#080511"/>
    <circle cx="28" cy="28" r="5" fill="#EFD844"/>
    <circle cx="52" cy="28" r="5" fill="#EFD844"/>
    {/* Nose */}
    <ellipse cx="40" cy="44" rx="5" ry="4" fill="#43186B"/>
    {/* Jaw */}
    <rect x="14" y="50" width="52" height="28" rx="8" fill="#79359C" stroke="#080511" strokeWidth="3"/>
    {/* Teeth */}
    <rect x="20" y="54" width="10" height="16" rx="2" fill="#FFFCF3" stroke="#080511" strokeWidth="1.5"/>
    <rect x="35" y="54" width="10" height="16" rx="2" fill="#FFFCF3" stroke="#080511" strokeWidth="1.5"/>
    <rect x="50" y="54" width="10" height="16" rx="2" fill="#FFFCF3" stroke="#080511" strokeWidth="1.5"/>
    {/* Crown */}
    <polygon points="20,8 28,0 36,8" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
    <polygon points="36,6 44,0 52,6" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
    <polygon points="52,8 60,0 68,8" fill="#EFD844" stroke="#080511" strokeWidth="2"/>
  </svg>
));
PixelSkull.displayName = "PixelSkull";

// --- Mascot: Rocket ---
export const Rocket = memo(() => (
  <svg viewBox="0 0 70 110" width="62" height="98">
    {/* Flame */}
    <ellipse cx="35" cy="102" rx="14" ry="12" fill="#EFD844" opacity="0.9"/>
    <ellipse cx="35" cy="100" rx="8" ry="8" fill="#FFFCF3"/>
    {/* Body */}
    <rect x="20" y="38" width="30" height="58" rx="6" fill="#79359C" stroke="#080511" strokeWidth="3"/>
    {/* Nose cone */}
    <polygon points="35,4 52,40 18,40" fill="#EFD844" stroke="#080511" strokeWidth="3"/>
    {/* Window */}
    <circle cx="35" cy="60" r="10" fill="#080511" stroke="#EFD844" strokeWidth="2.5"/>
    <circle cx="35" cy="60" r="6" fill="#291648"/>
    <circle cx="37" cy="57" r="2.5" fill="#FFFCF3" opacity="0.7"/>
    {/* Fins */}
    <polygon points="20,62 6,90 20,86" fill="#D89202" stroke="#080511" strokeWidth="2.5"/>
    <polygon points="50,62 64,90 50,86" fill="#D89202" stroke="#080511" strokeWidth="2.5"/>
  </svg>
));
Rocket.displayName = "Rocket";

// --- Mascot: Star badge ---
const StarBadge = memo(() => (
  <svg viewBox="0 0 80 80" width="68" height="68">
    <polygon points="40,4 50,28 76,28 54,46 62,72 40,56 18,72 26,46 4,28 30,28" fill="#EFD844" stroke="#080511" strokeWidth="3" strokeLinejoin="round"/>
    <polygon points="40,14 47,32 66,32 52,43 57,62 40,50 23,62 28,43 14,32 33,32" fill="#D89202"/>
    <text x="30" y="44" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#080511">★</text>
  </svg>
));
StarBadge.displayName = "StarBadge";

// Fixed positions across the full page (as viewport % of total page height)
const MASCOTS: { Component: React.ComponentType; x: number; yPct: number; delay: number; amp: number; rot: number; rotDir: number; scale: number; skipHero?: boolean }[] = [
  // Hero section edges
  { Component: HackerCat,  x: 3,   yPct: 4,   delay: 0,   amp: 18, rot: -8,  rotDir:  1, scale: 1.1, skipHero: true },
  { Component: PixelAlien, x: 87,  yPct: 6,   delay: 1,   amp: 20, rot: 6,   rotDir: -1, scale: 1.0, skipHero: true },
  // Stats bar
  { Component: StarBadge,  x: 88,  yPct: 18,  delay: 0.4, amp: 12, rot: 20,  rotDir:  1, scale: 1.0 },
  { Component: Rocket,     x: 2,   yPct: 20,  delay: 0.8, amp: 24, rot: -12, rotDir: -1, scale: 1.1 },
  // Tracks section
  { Component: CoffeeBot,  x: 2,   yPct: 32,  delay: 2,   amp: 16, rot: -5,  rotDir: -1, scale: 1.0 },
  { Component: GhostCoder, x: 88,  yPct: 35,  delay: 1.5, amp: 22, rot: 8,   rotDir:  1, scale: 1.0 },
  // Timeline section  
  { Component: PixelSkull, x: 2,   yPct: 50,  delay: 2.5, amp: 18, rot: -10, rotDir:  1, scale: 0.95 },
  { Component: HackerCat,  x: 89,  yPct: 52,  delay: 1.2, amp: 20, rot: 5,   rotDir: -1, scale: 0.9 },
  // Sponsors section
  { Component: Rocket,     x: 2,   yPct: 67,  delay: 0.3, amp: 22, rot: -15, rotDir:  1, scale: 0.9 },
  { Component: PixelAlien, x: 88,  yPct: 70,  delay: 1.8, amp: 16, rot: 10,  rotDir: -1, scale: 0.9 },
  // FAQ section
  { Component: StarBadge,  x: 3,   yPct: 84,  delay: 0.6, amp: 14, rot: 25,  rotDir:  1, scale: 1.0 },
  { Component: CoffeeBot,  x: 87,  yPct: 86,  delay: 2.2, amp: 18, rot: -8,  rotDir: -1, scale: 0.85 },
];

export default function FloatingMascots() {
  return (
    <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {MASCOTS.filter(m => !m.skipHero).map((m, i) => (
        <motion.div
          key={i}
          className="absolute font-sans"
          style={{ 
            left: `${m.x}%`, 
            top: `${m.yPct}%`, 
            opacity: 0.85, 
            scale: m.scale, 
            rotate: m.rot 
          }}
          animate={{ y: [-m.amp, m.amp, -m.amp], rotate: [m.rot, m.rot + 8 * m.rotDir, m.rot] }}
          transition={{ duration: 5 + i * 0.7, delay: m.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="scale-[1.6] sm:scale-100 origin-center">
            <m.Component />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
