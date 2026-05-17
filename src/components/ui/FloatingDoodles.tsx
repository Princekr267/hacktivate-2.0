"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ----- TINY SVG DOODLES -----
const DoodleStar = ({ color = "#EFD844" }: { color?: string }) => (
  <svg viewBox="0 0 30 30" width="30" height="30">
    <polygon points="15,2 18,11 28,11 20,17 23,27 15,21 7,27 10,17 2,11 12,11" fill={color} stroke="#080511" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const DoodleLightning = ({ color = "#EFD844" }: { color?: string }) => (
  <svg viewBox="0 0 22 36" width="22" height="36">
    <polygon points="12,2 4,20 11,20 8,34 20,14 13,14 18,2" fill={color} stroke="#080511" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const DoodleDiamond = ({ color = "#D89202" }: { color?: string }) => (
  <svg viewBox="0 0 28 28" width="28" height="28">
    <polygon points="14,2 26,14 14,26 2,14" fill={color} stroke="#080511" strokeWidth="2" strokeLinejoin="round"/>
    <polygon points="14,7 21,14 14,21 7,14" fill="#FFFCF3" opacity="0.3"/>
  </svg>
);

const DoodleCircuit = ({ color = "#79359C" }: { color?: string }) => (
  <svg viewBox="0 0 50 40" width="50" height="40" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 20 H15 V10 H25 V20 H35 V30 H45"/>
    <circle cx="15" cy="20" r="3" fill={color}/>
    <circle cx="35" cy="20" r="3" fill={color}/>
    <circle cx="25" cy="10" r="2" fill={color}/>
  </svg>
);

const DoodleCross = ({ color = "#B36A04" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <rect x="9" y="2" width="6" height="20" rx="2" fill={color} stroke="#080511" strokeWidth="2"/>
    <rect x="2" y="9" width="20" height="6" rx="2" fill={color} stroke="#080511" strokeWidth="2"/>
  </svg>
);

const DoodleRobot = () => (
  <svg viewBox="0 0 40 50" width="40" height="50">
    <rect x="10" y="10" width="20" height="18" rx="4" fill="#43186B" stroke="#080511" strokeWidth="2"/>
    <rect x="13" y="14" width="6" height="5" rx="2" fill="#EFD844"/>
    <rect x="21" y="14" width="6" height="5" rx="2" fill="#EFD844"/>
    <rect x="14" y="22" width="12" height="4" rx="1" fill="#291648"/>
    <rect x="6" y="12" width="5" height="10" rx="3" fill="#79359C" stroke="#080511" strokeWidth="1.5"/>
    <rect x="29" y="12" width="5" height="10" rx="3" fill="#79359C" stroke="#080511" strokeWidth="1.5"/>
    <rect x="14" y="28" width="12" height="16" rx="4" fill="#79359C" stroke="#080511" strokeWidth="2"/>
    <rect x="16" y="31" width="8" height="3" rx="1" fill="#EFD844" opacity="0.6"/>
    <rect x="10" y="30" width="5" height="12" rx="3" fill="#43186B" stroke="#080511" strokeWidth="1.5"/>
    <rect x="25" y="30" width="5" height="12" rx="3" fill="#43186B" stroke="#080511" strokeWidth="1.5"/>
    <rect x="13" y="44" width="6" height="5" rx="2" fill="#291648" stroke="#080511" strokeWidth="1.5"/>
    <rect x="21" y="44" width="6" height="5" rx="2" fill="#291648" stroke="#080511" strokeWidth="1.5"/>
    <rect x="17" y="4" width="6" height="8" rx="2" fill="#D89202" stroke="#080511" strokeWidth="1.5"/>
  </svg>
);

const DoodleGear = ({ color = "#B36A04" }: { color?: string }) => (
  <svg viewBox="0 0 40 40" width="40" height="40">
    <circle cx="20" cy="20" r="8" fill={color} stroke="#080511" strokeWidth="2"/>
    <circle cx="20" cy="20" r="4" fill="#080511"/>
    {[0,45,90,135,180,225,270,315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 20 + 13 * Math.cos(rad);
      const y = 20 + 13 * Math.sin(rad);
      return <rect key={i} x={x - 3} y={y - 3} width="6" height="6" rx="1" fill={color} stroke="#080511" strokeWidth="1.5" transform={`rotate(${angle} ${x} ${y})`}/>;
    })}
  </svg>
);

const DoodlePixelHeart = () => (
  <svg viewBox="0 0 20 20" width="24" height="24">
    <rect x="2" y="6" width="4" height="4" fill="#EFD844"/>
    <rect x="6" y="2" width="4" height="4" fill="#EFD844"/>
    <rect x="10" y="2" width="4" height="4" fill="#EFD844"/>
    <rect x="14" y="6" width="4" height="4" fill="#EFD844"/>
    <rect x="2" y="10" width="4" height="4" fill="#EFD844"/>
    <rect x="6" y="10" width="4" height="4" fill="#EFD844"/>
    <rect x="10" y="10" width="4" height="4" fill="#EFD844"/>
    <rect x="14" y="10" width="4" height="4" fill="#EFD844"/>
    <rect x="6" y="14" width="4" height="4" fill="#EFD844"/>
    <rect x="10" y="14" width="4" height="4" fill="#EFD844"/>
    <rect x="8" y="17" width="4" height="3" fill="#EFD844"/>
  </svg>
);

const DoodleCode = () => (
  <svg viewBox="0 0 50 30" width="60" height="36" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="14,5 4,15 14,25" stroke="#EFD844" strokeWidth="3"/>
    <polyline points="36,5 46,15 36,25" stroke="#EFD844" strokeWidth="3"/>
    <line x1="30" y1="5" x2="20" y2="25" stroke="#79359C" strokeWidth="2.5"/>
  </svg>
);

const DoodleCrystal = () => (
  <svg viewBox="0 0 24 36" width="20" height="30">
    <polygon points="12,2 22,12 12,34 2,12" fill="#a855c8" stroke="#080511" strokeWidth="2"/>
    <polygon points="12,8 18,14 12,26 6,14" fill="#FFFCF3" opacity="0.25"/>
    <line x1="12" y1="2" x2="12" y2="34" stroke="#FFFCF3" strokeWidth="1" opacity="0.4"/>
  </svg>
);

// All doodle types to scatter
const DOODLE_TYPES = [
  DoodleStar,
  DoodleLightning,
  DoodleDiamond,
  DoodleCircuit,
  DoodleCross,
  DoodleRobot,
  DoodleGear,
  DoodlePixelHeart,
  DoodleCode,
  DoodleCrystal,
];

interface Doodle {
  id: number;
  Component: (typeof DOODLE_TYPES)[number];
  x: number;
  y: number;
  delay: number;
  duration: number;
  amplitude: number;
  rotation: number;
  rotDir: number;
  scale: number;
  opacity: number;
}

export default function FloatingDoodles() {
  const [doodles, setDoodles] = useState<Doodle[]>([]);

  useEffect(() => {
    // Spawn 28 doodles spread across the full page height
    const generated: Doodle[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      Component: DOODLE_TYPES[i % DOODLE_TYPES.length],
      x: 3 + Math.random() * 94,       // % of viewport width
      y: 2 + (i / 28) * 98,            // evenly distributed vertically
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 4,
      amplitude: 14 + Math.random() * 20,
      rotation: Math.random() * 360,
      rotDir: Math.random() > 0.5 ? 1 : -1,
      scale: 0.55 + Math.random() * 0.65,
      opacity: 0.12 + Math.random() * 0.18,
    }));
    setDoodles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {doodles.map((d) => (
        <motion.div
          key={d.id}
          className="absolute"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            opacity: d.opacity,
            transform: `scale(${d.scale}) rotate(${d.rotation}deg)`,
          }}
          animate={{
            y: [-d.amplitude, d.amplitude, -d.amplitude],
            rotate: [d.rotation, d.rotation + 20 * d.rotDir, d.rotation],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <d.Component />
        </motion.div>
      ))}

      {/* Extra large background doodles (very faint, purely decorative) */}
      <motion.div
        className="absolute -left-16 top-[15%] opacity-[0.06]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <DoodleGear color="#EFD844" />
      </motion.div>
      <motion.div
        className="absolute -right-12 top-[50%] opacity-[0.07]"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{ scale: 3 }}
      >
        <DoodleGear color="#79359C" />
      </motion.div>
      <motion.div
        className="absolute left-[8%] top-[75%] opacity-[0.06]"
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        style={{ scale: 2.5 }}
      >
        <DoodleCircuit color="#EFD844" />
      </motion.div>
    </div>
  );
}
