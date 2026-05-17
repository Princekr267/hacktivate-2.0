"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  { date: "Aug 15, 2025", title: "Registrations Open", desc: "Form your team of 2-4 members and register." },
  { date: "Sep 5, 2025", title: "Team Finalization", desc: "Last day to invite members or merge teams." },
  { date: "Sep 10, 2025", title: "Problem Statements", desc: "Themes are announced. Start brainstorming." },
  { date: "Sep 18, 10:00 AM", title: "Hackathon Begins 🚀", desc: "Opening ceremony and coding starts!" },
  { date: "Sep 19, 10:00 AM", title: "Submissions Close", desc: "Pencils down! Submit your projects on Devfolio." },
  { date: "Sep 19, 04:00 PM", title: "Winners Announced 🏆", desc: "Closing ceremony, pitches, and prize distribution." },
];

import TimelineBackground from "@/components/backgrounds/TimelineBackground";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-32 px-6 bg-black relative z-0 overflow-hidden">
      <TimelineBackground />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-fredoka text-cream"
            style={{ fontSize: "clamp(38px, 5vw, 60px)", textShadow: "4px 4px 0 #B36A04" }}
          >
            Timeline
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Spine */}
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[5px] -translate-x-1/2 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #EFD844, #D89202)",
              boxShadow: "0 0 15px rgba(239, 216, 68, 0.4)"
            }}
          />

          {/* Nodes */}
          <div className="flex flex-col gap-12 md:gap-24">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isLast = idx === TIMELINE.length - 1;

              return (
                <div key={idx} className={`relative flex items-center md:justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Desktop Empty Space */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Center Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 z-20 flex items-center justify-center">
                    <motion.div 
                      className={`w-full h-full rounded-full border-4 border-black ${isLast ? 'bg-gold-mid' : 'bg-gold'}`}
                      style={{ boxShadow: isLast ? "0 0 30px #D89202" : "0 0 15px #EFD844" }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Card Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="w-full md:w-[45%] pl-20 md:pl-0"
                  >
                    <div className="bg-purple-mid border-[3px] border-gold rounded-2xl p-6 shadow-offset relative">
                      {/* Arrow tail for desktop */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-6 h-[3px] bg-gold ${isEven ? '-left-6' : '-right-6'}`} />
                      
                      <span className="font-nunito font-black text-gold-mid uppercase tracking-widest text-xs mb-2 block">
                        {item.date}
                      </span>
                      <h3 className="font-fredoka text-gold text-2xl mb-2">{item.title}</h3>
                      <p className="font-nunito font-semibold text-cream opacity-90 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
