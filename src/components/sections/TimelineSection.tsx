"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import TimelineBackground from "@/components/backgrounds/TimelineBackground";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const TIMELINE = [
  {
    date: "Jun 1 – Aug 15, 2026",
    title: "Registration 📝",
    desc: "Hackathon registration period. Sign up, form your team, and claim your spot at Hacktivate 2.0. Open from Jun 1 at 12:00 AM to Aug 15 at 11:59 PM.",
    tag: "Online",
  },
  {
    date: "Jun 1 – Aug 15, 2026",
    title: "Team Formation 🤝",
    desc: "Form teams and collaborate with other participants. Find your dream team before registrations close on Aug 15 at 11:59 PM.",
    tag: "Online",
  },
  {
    date: "Jun 1 – Aug 15, 2026",
    title: "Presentation Submission 📊",
    desc: "Submit your project idea presentation for evaluation. Window open from Jun 1 at 12:00 AM to Aug 15 at 11:59 PM.",
    tag: "Online",
  },
  {
    date: "To Be Announced",
    title: "Online Presentation Round 🖥️",
    desc: "Selected teams will showcase their ideas online to our panel of judges. Date and details to be announced soon.",
    tag: "Online",
  },
  {
    date: "To Be Announced",
    title: "Shortlisted Teams Announced 🎉",
    desc: "Teams selected for the offline hackathon at JIMSEMTC, Greater Noida are revealed. Date to be announced soon.",
  },
];


export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="timeline" className="py-20 px-6 bg-black relative z-0 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-[-8%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(168,85,200,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-8%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(239,216,68,0.08)_0%,transparent_70%)] rounded-full pointer-events-none" style={{ animationDelay: "2s" }} />
      <TimelineBackground />

      {/* Peeking Mascots */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
        className="hidden md:block absolute left-[-5px] top-[15%] z-[20]"
        style={{ willChange: "transform, opacity" }}
      >
        <motion.img
          src="/web_elements/peek-left.png"
          alt="Peek Left Mascot"
          className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[250px]"
          style={{ filter: "drop-shadow(10px 10px 20px rgba(0,0,0,0.5))", willChange: "transform", transform: "translateZ(0)" }}
          animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.8, delay: 0.15 }}
        className="hidden md:block absolute right-[-5px] bottom-[15%] z-[20]"
        style={{ willChange: "transform, opacity" }}
      >
        <motion.img
          src="/web_elements/peek-right.png"
          alt="Peek Right Mascot"
          className="w-[100px] sm:w-[130px] md:w-[160px] lg:w-[250px]"
          style={{ filter: "drop-shadow(-10px 10px 20px rgba(0,0,0,0.5))", willChange: "transform", transform: "translateZ(0)" }}
          animate={{ y: [0, 15, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <AnimatedHeading text="Timeline" shadowColor="#B36A04" />
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">

          {/* Vertical Spine Background (dimmed) */}
          <div
            className="absolute left-2 md:left-1/2 top-0 bottom-0 w-1 md:w-[5px] md:-translate-x-1/2 rounded-full bg-gold/15"
          />

          {/* Vertical Spine Foreground (progressive glow filling) */}
          <motion.div
            className="absolute left-2 md:left-1/2 top-0 bottom-0 w-1 md:w-[5px] md:-translate-x-1/2 rounded-full"
            style={{
              scaleY: scrollYProgress,
              originY: 0,
              background: "linear-gradient(to bottom, #EFD844, #D89202)",
              boxShadow: "0 0 15px rgba(239, 216, 68, 0.6)",
            }}
          />

          {/* Nodes */}
          <div className="flex flex-col gap-8 md:gap-10">
            {TIMELINE.map((item, idx) => {
              const isOdd = idx % 2 !== 0;
              const isLast = idx === TIMELINE.length - 1;

              return (
                <div key={idx} className={`relative flex items-center md:justify-between w-full ${isOdd ? "md:flex-row-reverse" : ""}`}>

                  {/* Desktop Empty Space */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 z-20 items-center justify-center">
                    <motion.div
                      className="w-full h-full rounded-full border-4 border-black"
                      style={{ background: isLast ? "#D89202" : "#EFD844", boxShadow: isLast ? "0 0 30px #D89202" : "0 0 15px #EFD844" }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-[3px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold" style={{ boxShadow: "0 0 8px #EFD844" }} />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="w-full md:w-[45%] pl-8 md:pl-0"
                  >
                    <div className="bg-purple-mid border-[3px] border-gold rounded-2xl p-4 shadow-offset relative flex flex-col gap-1.5">
                      {/* Arrow tail */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-[3px] bg-gold ${isOdd ? "-left-6" : "-right-6"}`} />

                      <div>
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="font-nunito font-black text-gold-mid uppercase tracking-widest text-[10px]">
                            {item.date}
                          </span>
                          {item.tag && (
                            <span className="font-nunito font-black text-[9px] uppercase tracking-widest bg-gold/20 text-gold border border-gold/40 rounded-full px-2 py-0.5">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <h3 className="font-fredoka text-gold text-xl leading-tight mb-2">{item.title}</h3>
                      </div>
                      <p className="font-nunito font-semibold text-cream/80 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-16 relative"
        >
          {/* Connector line from spine to banner */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-8 w-[5px] h-8 bg-gradient-to-b from-gold to-gold/30 rounded-full" />

          <div
            className="relative rounded-2xl border-[2.5px] border-dashed border-gold/50 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(41,22,72,0.9) 0%, rgba(20,10,40,0.95) 100%)" }}
          >
            {/* Subtle animated shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(239,216,68,0.06) 50%, transparent 100%)" }}
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-8 py-7 text-center sm:text-left">
              {/* Clock icon */}
              <div className="shrink-0 w-12 h-12 rounded-full border-2 border-gold/40 bg-gold/10 flex items-center justify-center text-2xl">
                🗓️
              </div>
              <div>
                <p className="font-fredoka text-gold text-xl sm:text-2xl leading-tight mb-1">
                  Offline Hackathon — Full Schedule Coming Soon
                </p>
                <p className="font-nunito font-semibold text-cream/60 text-xs sm:text-sm">
                  The detailed timeline for the offline rounds at JIMSEMTC, Greater Noida · <span className="text-gold/80">11–12 Sep 2026</span> · will be published here shortly. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
