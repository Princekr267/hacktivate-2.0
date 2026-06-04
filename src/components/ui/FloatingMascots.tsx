"use client";

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
