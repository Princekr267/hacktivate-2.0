"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import TracksBackground from "@/components/backgrounds/TracksBackground";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import TiltCard from "@/components/ui/TiltCard";
import { useRipple } from "@/hooks/useRipple";

export interface FocusArea {
  name: string;
  icon: string;
}

export interface TrackItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
  badge?: string;
  perk?: string;
  focusAreas: FocusArea[];
}

const TRACKS: TrackItem[] = [
  {
    id: "asi-one",
    icon: "🤖",
    title: "ASI:ONE",
    badge: "ASI:ONE",
    perk: "Internship Opportunity for Winning Team",
    desc: "Create an innovative AI agent or multi-agent system that solves a real-world problem using autonomous planning, reasoning, and execution. Your solution must be discoverable through ASI:ONE and capable of completing meaningful tasks beyond simple chat interactions.",
    focusAreas: [
      { name: "Autonomous AI Agents", icon: "🤖" },
      { name: "Multi-Agent Collaboration", icon: "🤝" },
      { name: "Workflow Automation", icon: "⚡" },
      { name: "Tool & API Integration", icon: "🔌" },
      { name: "Decision Making & Planning", icon: "🧠" },
      { name: "AI for Real-World Applications", icon: "🌐" },
      { name: "Intelligent Recommendations", icon: "💡" },
      { name: "Data Analysis & Action Execution", icon: "📊" },
      { name: "Scalable AI Systems", icon: "🚀" },
    ],
  },
  {
    id: "sports-tech",
    icon: "🏆",
    title: "Sports-Tech",
    desc: "Innovate at the intersection of sports and technology. Build solutions for performance tracking, fan engagement, and athlete wellness.",
    focusAreas: [
      { name: "Wearable Sensors & IoT", icon: "⌚" },
      { name: "Athlete Performance Analytics", icon: "📊" },
      { name: "AR/VR Fan Engagement", icon: "🥽" },
      { name: "Injury Prevention & Recovery", icon: "🏥" },
      { name: "Smart Stadium & Venue Tech", icon: "🏟️" },
      { name: "Tactical Playbook AI", icon: "🎯" },
    ],
  },
  {
    id: "cloud-computing",
    icon: "☁️",
    title: "Cloud Computing",
    desc: "Harness the power of the cloud to build scalable, resilient, and intelligent applications for the modern world.",
    focusAreas: [
      { name: "Serverless Architectures", icon: "⚡" },
      { name: "DevOps & CI/CD Pipelines", icon: "🛠️" },
      { name: "Multi-Cloud & Hybrid Cloud", icon: "🌐" },
      { name: "Cloud Security & Governance", icon: "🛡️" },
      { name: "Containerization & Kubernetes", icon: "📦" },
      { name: "Edge Computing Infrastructure", icon: "📡" },
    ],
  },
  {
    id: "disaster-management",
    icon: "🚨",
    title: "Disaster Management",
    desc: "Build systems that save lives. Create tools for early warning, real-time coordination, and rapid disaster response.",
    focusAreas: [
      { name: "Early Warning & Sensor Grids", icon: "📡" },
      { name: "GIS & Crisis Mapping", icon: "🗺️" },
      { name: "Emergency Coordination Tools", icon: "🚑" },
      { name: "Relief Supply Chain Optimization", icon: "📦" },
      { name: "Mesh & Offline Communications", icon: "📶" },
      { name: "Drone Reconnaissance & Search", icon: "🛸" },
    ],
  },
  {
    id: "road-safety",
    icon: "🛣️",
    title: "Road Safety",
    desc: "Make roads smarter and safer. Develop solutions for accident prevention, traffic intelligence, and pedestrian protection.",
    focusAreas: [
      { name: "Computer Vision Collision Avoidance", icon: "👁️" },
      { name: "Smart Traffic Automation", icon: "🚦" },
      { name: "Pedestrian Hazard Detection", icon: "🚶" },
      { name: "Driver Alertness Monitoring", icon: "😴" },
      { name: "Connected Vehicle (V2X) Comms", icon: "🚗" },
      { name: "Automated Road Defect Audit", icon: "🛣️" },
    ],
  },
  {
    id: "agriculture",
    icon: "🌾",
    title: "Agriculture",
    desc: "Empower farmers with technology. Build solutions for crop monitoring, precision farming, and agricultural supply chains.",
    focusAreas: [
      { name: "Drone Imagery & Crop Analytics", icon: "🛸" },
      { name: "Soil & Climate Moisture IoT", icon: "🌿" },
      { name: "Crop Yield & Pest Forecasting", icon: "📈" },
      { name: "Smart Irrigation Automation", icon: "🚜" },
      { name: "Farm-to-Market Supply Chain", icon: "🔗" },
      { name: "Produce Quality Grading AI", icon: "🍎" },
    ],
  },
  {
    id: "healthcare-management",
    icon: "❤️",
    title: "HealthCare Management",
    desc: "Transform how healthcare is delivered and managed. Innovate for patient care, diagnostics, and medical record systems.",
    focusAreas: [
      { name: "AI-Assisted Diagnostics", icon: "🧬" },
      { name: "Remote Patient Telehealth", icon: "📱" },
      { name: "Secure Health Records & EHR", icon: "🔒" },
      { name: "Digital Mental Wellbeing", icon: "🧠" },
      { name: "Medication Adherence Tools", icon: "💊" },
      { name: "Accessible Assistive Tech", icon: "♿" },
    ],
  },
  {
    id: "environment-management",
    icon: "🌱",
    title: "Environment Management",
    desc: "Protect our planet through technology. Create tools for pollution monitoring, waste reduction, and ecological preservation.",
    focusAreas: [
      { name: "Air & Water Pollution Monitoring", icon: "💨" },
      { name: "AI-Powered Waste Sorting", icon: "♻️" },
      { name: "Carbon Footprint Audit Tools", icon: "📊" },
      { name: "Renewable Energy Smart Grid", icon: "☀️" },
      { name: "Biodiversity & Wildlife Tech", icon: "🌲" },
      { name: "Marine & Ocean Conservation", icon: "🌊" },
    ],
  },
  {
    id: "best-use-of-n8n",
    icon: "⚡",
    title: "Best Use of n8n",
    desc: "Build powerful workflow automations and integrations using n8n. Connect APIs, automate tasks, or design AI-powered workflows.",
    focusAreas: [
      { name: "Multi-App API Orchestration", icon: "🔄" },
      { name: "AI Agent & LLM Workflow Chains", icon: "🤖" },
      { name: "Real-Time Webhook Automation", icon: "⚡" },
      { name: "Automated Data Pipelines", icon: "📊" },
      { name: "Multi-Channel Bot Workflows", icon: "💬" },
      { name: "Custom n8n Node Extensions", icon: "🛠️" },
    ],
  },
  {
    id: "open-innovation",
    icon: "💡",
    title: "Open Innovation",
    desc: "Got an idea that doesn't fit the box? Good. Build it anyway. Open Innovation is for the ones who see a problem nobody else is solving yet.",
    focusAreas: [
      { name: "Breakthrough Emerging Tech", icon: "🚀" },
      { name: "Decentralized Web3 & Crypto", icon: "⛓️" },
      { name: "AR / VR & Spatial Computing", icon: "🕶️" },
      { name: "Next-Gen Interactive Media", icon: "🎮" },
      { name: "Experimental Domain Crossovers", icon: "🧪" },
      { name: "Self-Defined Impact Projects", icon: "💡" },
    ],
  },
];

/** Aceternity UI style Expandable Card item in grid */
function TrackCard({
  track,
  idx,
  onOpenModal,
}: {
  track: TrackItem;
  idx: number;
  onOpenModal: (track: TrackItem) => void;
}) {
  const ripple = useRipple();
  const cardRectRef = useRef<DOMRect | null>(null);

  return (
    <motion.div
      layoutId={`card-${track.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
        delay: Math.min(idx * 0.05, 0.3),
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="w-full h-[330px] flex cursor-pointer will-change-transform"
      onClick={(e) => {
        ripple.onClick(e as React.MouseEvent<HTMLElement>);
        onOpenModal(track);
      }}
    >
      <TiltCard
        className="track-card card-hover scan-shimmer gold-pulse ripple-element w-full h-full bg-purple-mid border-[3px] border-gold rounded-[20px] p-6 pt-7 relative group shadow-offset flex flex-col justify-between select-none"
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          if (!cardRectRef.current) {
            cardRectRef.current = e.currentTarget.getBoundingClientRect();
          }
          const rect = cardRectRef.current;
          e.currentTarget.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
          e.currentTarget.style.setProperty("--glow-opacity", "1");
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          cardRectRef.current = null;
          e.currentTarget.style.setProperty("--glow-opacity", "0");
        }}
      >
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-6 right-6 h-[5px] bg-gold rounded-b-md" />

        {/* Badge if available */}
        {track.badge && (
          <div className="absolute top-3 right-4 z-20">
            <span className="bg-black text-gold border border-gold font-nunito font-black uppercase text-[10px] px-2.5 py-0.5 rounded-full shadow-[2px_2px_0px_#080511] tracking-wider">
              {track.badge}
            </span>
          </div>
        )}

        {/* Cursor-following radial glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[20px] transition-opacity duration-200"
          style={{
            opacity: "var(--glow-opacity, 0)" as unknown as number,
            background: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(239,216,68,0.14) 0%, rgba(168,85,200,0.06) 50%, transparent 70%)`,
          }}
        />

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Icon Box with 3D Flip */}
          <motion.div
            layoutId={`icon-${track.id}`}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-[60px] h-[60px] mb-4 relative perspective-3d z-10 shrink-0"
          >
            <div className="w-full h-full preserve-3d relative">
              {/* Front */}
              <div className="absolute inset-0 bg-black border-2 border-gold rounded-2xl shadow-offset-black flex items-center justify-center text-2xl backface-hidden">
                {track.icon}
              </div>
              {/* Back */}
              <div className="absolute inset-0 bg-gold border-2 border-gold rounded-2xl flex items-center justify-center text-2xl backface-hidden rotate-y-180 shadow-[0_0_20px_rgba(239,216,68,0.7)] text-black">
                {track.icon}
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3
            layoutId={`title-${track.id}`}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-fredoka text-gold text-[20px] mb-2 relative z-10 leading-snug shrink-0 line-clamp-1"
          >
            {track.title}
          </motion.h3>

          {/* Description */}
          <motion.div
            layoutId={`desc-${track.id}`}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-nunito font-semibold text-cream opacity-90 text-xs sm:text-sm leading-relaxed relative z-10 line-clamp-4 flex-1"
          >
            {track.desc}
          </motion.div>
        </div>

        {/* Interactive Footer Button */}
        <div className="relative z-10 pt-3 border-t border-gold/20 flex items-center justify-between text-gold font-nunito font-black text-xs group-hover:text-yellow-300 transition-colors shrink-0">
          <span>Explore Details & Focus Areas</span>
          <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function TracksSection() {
  const [active, setActive] = useState<TrackItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll cleanly when modal is active
  useEffect(() => {
    if (active) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [active]);

  // Close card on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="tracks" className="py-24 sm:py-32 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-transparent relative z-0 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(168,85,200,0.15)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(239,216,68,0.1)_0%,transparent_70%)] rounded-full pointer-events-none"
        style={{ animationDelay: "3s" }}
      />
      <TracksBackground />

      <div className="max-w-[1360px] mx-auto relative z-10 px-2 sm:px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black text-gold font-nunito font-black uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full border-2 border-gold shadow-offset-black mb-4 sm:mb-6 inline-block"
          >
            The Challenge
          </motion.div>
          <AnimatedHeading text="Tracks & Themes" shadowColor="#080511" />
        </div>

        {/* Tracks Grid: 4 columns on PC (xl:grid-cols-4), 3 on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-[1400px] mx-auto">
          {TRACKS.map((track, idx) => (
            <TrackCard
              key={track.id}
              track={track}
              idx={idx}
              onOpenModal={(t) => setActive(t)}
            />
          ))}
        </div>
      </div>

      {/* Aceternity UI Expandable Modal Portal with Framer Motion shared layoutId morphing */}
      {isMounted &&
        createPortal(
          <AnimatePresence>
            {active && (
              <>
                {/* Smooth Fade Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[999998]"
                  onClick={() => setActive(null)}
                />

                {/* Expanded Card Modal Wrapper */}
                <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 pt-20 sm:pt-24 pb-6 overflow-y-auto pointer-events-none">
                  <motion.div
                    layoutId={`card-${active.id}`}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#240c3d] border-[3px] border-gold rounded-[24px] max-w-2xl w-full p-5 sm:p-8 relative shadow-[0_0_50px_rgba(239,216,68,0.35)] my-auto max-h-[82vh] flex flex-col pointer-events-auto will-change-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => setActive(null)}
                      className="absolute top-4 right-4 bg-black border-2 border-gold text-gold hover:bg-gold hover:text-black w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-colors shadow-[2px_2px_0px_#080511] z-30 shrink-0"
                      aria-label="Close card"
                    >
                      ✕
                    </motion.button>

                    {/* Scrollable Content Container */}
                    <div className="overflow-y-auto pr-1 sm:pr-3 custom-scrollbar flex-1">
                      {/* Modal Top Badges */}
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-wrap items-center gap-2 mb-3"
                      >
                        {active.badge && (
                          <span className="bg-gold text-black font-fredoka font-bold text-[11px] sm:text-xs px-3 py-0.5 rounded-full border border-black uppercase shadow-[2px_2px_0px_#080511]">
                            {active.badge}
                          </span>
                        )}
                        <span className="bg-black text-gold font-nunito font-bold text-[11px] sm:text-xs px-3 py-0.5 rounded-full border border-gold/60">
                          THEME: {active.title}
                        </span>
                      </motion.div>

                      {/* Header with shared layoutId icon and title */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <motion.div
                          layoutId={`icon-${active.id}`}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-black border-2 border-gold rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-[3px_3px_0px_#EFD844] shrink-0"
                        >
                          <div className="w-full h-full flex items-center justify-center">
                            {active.icon}
                          </div>
                        </motion.div>
                        <div>
                          <motion.h3
                            layoutId={`title-${active.id}`}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="font-fredoka text-gold text-xl sm:text-2xl md:text-3xl leading-tight"
                          >
                            {active.title}
                          </motion.h3>
                        </div>
                      </div>

                      {/* Perk highlight if available */}
                      {active.perk && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25, delay: 0.08 }}
                          className="bg-black/60 border-2 border-gold/60 text-cream p-3 sm:p-4 rounded-xl mb-5 flex items-center gap-3"
                        >
                          <span className="text-xl sm:text-2xl shrink-0">💼</span>
                          <div>
                            <div className="font-fredoka text-gold text-xs uppercase tracking-wider">
                              Special Track Perk
                            </div>
                            <div className="font-nunito font-bold text-xs sm:text-sm text-cream">
                              {active.perk}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* About Section */}
                      <div className="mb-5">
                        <h4 className="font-fredoka text-gold text-base sm:text-lg mb-1.5 flex items-center gap-2">
                          <span>💡</span> About Track
                        </h4>
                        <motion.p
                          layoutId={`desc-${active.id}`}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="font-nunito font-semibold text-cream/90 text-xs sm:text-sm leading-relaxed"
                        >
                          {active.desc}
                        </motion.p>
                      </div>

                      {/* Focus Areas List */}
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.12 }}
                      >
                        <h4 className="font-fredoka text-gold text-base sm:text-lg mb-3 flex items-center gap-2">
                          <span>🎯</span> Track Focus Areas ({active.focusAreas.length})
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {active.focusAreas.map((area, idx) => (
                            <div
                              key={idx}
                              className="bg-black/60 border border-gold/40 hover:border-gold p-2.5 sm:p-3 rounded-xl flex items-center gap-3 transition-colors"
                            >
                              <span className="text-lg sm:text-xl shrink-0">{area.icon}</span>
                              <span className="font-nunito font-bold text-cream text-xs sm:text-sm">
                                {area.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Modal Footer Action */}
                    <div className="mt-4 pt-3 border-t border-gold/20 flex justify-end shrink-0">
                      <button
                        onClick={() => setActive(null)}
                        className="bg-gold hover:bg-yellow-300 text-black font-nunito font-black uppercase text-xs sm:text-sm py-2 px-5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#080511] transition-transform active:scale-95"
                      >
                        Close Window
                      </button>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}






