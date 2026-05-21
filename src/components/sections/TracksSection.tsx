"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TracksBackground from "@/components/backgrounds/TracksBackground";
import TiltCard from "@/components/ui/TiltCard";
import { useRipple } from "@/hooks/useRipple";

const TRACKS = [
  {
    icon: "🏆",
    title: "Sports-Tech",
    desc: "Innovate at the intersection of sports and technology. Build solutions for performance tracking, fan engagement, and athlete wellness.",
    tags: ["Wearables", "Analytics", "AR/VR"],
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    desc: "Harness the power of the cloud to build scalable, resilient, and intelligent applications for the modern world.",
    tags: ["AWS", "Azure", "Serverless"],
  },
  {
    icon: "🚨",
    title: "Disaster Management",
    desc: "Build systems that save lives. Create tools for early warning, real-time coordination, and rapid disaster response.",
    tags: ["IoT", "GIS", "Real-time"],
  },
  {
    icon: "🛣️",
    title: "Road Safety",
    desc: "Make roads smarter and safer. Develop solutions for accident prevention, traffic intelligence, and pedestrian protection.",
    tags: ["Computer Vision", "IoT", "Maps"],
  },
  {
    icon: "🌾",
    title: "Agriculture",
    desc: "Empower farmers with technology. Build solutions for crop monitoring, precision farming, and agricultural supply chains.",
    tags: ["Drones", "ML", "IoT"],
  },
  {
    icon: "❤️",
    title: "HealthCare Management",
    desc: "Transform how healthcare is delivered and managed. Innovate for patient care, diagnostics, and medical record systems.",
    tags: ["MedTech", "AI", "Accessibility"],
  },
  {
    icon: "🌱",
    title: "Environment Management",
    desc: "Protect our planet through technology. Create tools for pollution monitoring, waste reduction, and ecological preservation.",
    tags: ["Sustainability", "Sensors", "Data"],
  },
];

/** Single track card with cursor-following radial glow overlay */
function TrackCard({ track, idx }: { track: typeof TRACKS[number]; idx: number }) {
  const [glow, setGlow] = useState<{ x: number; y: number } | null>(null);
  const ripple = useRipple();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[320px] flex"
    >
      <TiltCard
        className="card-hover scan-shimmer gold-pulse ripple-element w-full bg-purple-mid border-[3px] border-gold rounded-[20px] p-6 pt-8 relative group shadow-offset flex flex-col justify-center"
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onClick={(e) => ripple.onClick(e as React.MouseEvent<HTMLElement>)}
        onMouseLeave={() => setGlow(null)}
      >
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-6 right-6 h-[5px] bg-gold rounded-b-md" />

        {/* Cursor-following radial glow overlay (Change 4B) */}
        {glow && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[20px] transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle at ${glow.x}px ${glow.y}px, rgba(239,216,68,0.14) 0%, rgba(168,85,200,0.06) 50%, transparent 70%)`,
            }}
          />
        )}

        {/* Icon Box */}
        <div className="w-[68px] h-[68px] bg-black border-2 border-gold rounded-2xl shadow-offset-black flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
          {track.icon}
        </div>

        {/* Content */}
        <h3 className="font-fredoka text-gold text-[21px] mb-3 relative z-10">{track.title}</h3>
        <p className="font-nunito font-semibold text-cream opacity-90 mb-6 text-sm leading-relaxed flex-1 relative z-10">
          {track.desc}
        </p>

        {/* Tags removed as requested */}
      </TiltCard>
    </motion.div>
  );
}

export default function TracksSection() {
  return (
    <section id="tracks" className="py-32 px-6 bg-purple-bg relative z-0 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(168,85,200,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(239,216,68,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" style={{ animationDelay: '3s' }} />
      <TracksBackground />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black text-gold font-nunito font-black uppercase text-sm px-4 py-1.5 rounded-full border-2 border-gold shadow-offset-black mb-6 inline-block"
          >
            The Challenge
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-fredoka text-cream neon-gold"
            style={{ fontSize: "clamp(38px, 5vw, 60px)", textShadow: "4px 4px 0 #080511" }}
          >
            Tracks &amp; Themes
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="tracks-grid flex flex-wrap justify-center items-stretch gap-8">
          {TRACKS.map((track, idx) => (
            <TrackCard key={idx} track={track} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
