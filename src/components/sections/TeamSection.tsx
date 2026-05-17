"use client";

import { motion } from "framer-motion";

const TEAM = [
  { name: "Alex Chen", role: "Lead Organizer", emoji: "👨‍💻" },
  { name: "Sarah Doe", role: "Tech Lead", emoji: "👩‍🚀" },
  { name: "Mike Ross", role: "Design Head", emoji: "👨‍🎨" },
  { name: "Emma Watson", role: "Marketing", emoji: "🦸‍♀️" },
  { name: "David Kim", role: "Sponsorships", emoji: "🥷" },
  { name: "Lisa Wang", role: "Operations", emoji: "🕵️‍♀️" },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-32 px-6 bg-purple-bg relative z-0">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-fredoka text-cream"
            style={{ fontSize: "clamp(38px, 5vw, 60px)", textShadow: "4px 4px 0 #080511" }}
          >
            Meet the Team
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Avatar Container */}
              <div className="relative mb-6">
                <motion.div 
                  className="absolute inset-0 bg-gold rounded-full blur-[20px] opacity-40 mix-blend-screen"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                />
                <div className="w-[86px] h-[86px] bg-black border-[3px] border-gold rounded-full flex items-center justify-center text-4xl shadow-offset-black relative z-10">
                  {member.emoji}
                </div>
              </div>

              {/* Info */}
              <h3 className="font-fredoka text-gold text-2xl mb-1 text-center">{member.name}</h3>
              <p className="font-nunito font-bold text-cream opacity-80 uppercase tracking-widest text-xs mb-5 text-center">
                {member.role}
              </p>

              {/* Socials */}
              <div className="flex gap-3">
                <a href="#" className="w-[30px] h-[30px] bg-purple-bg border-2 border-gold rounded-md flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors shadow-offset-black">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="w-[30px] h-[30px] bg-purple-bg border-2 border-gold rounded-md flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors shadow-offset-black">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="w-[30px] h-[30px] bg-purple-bg border-2 border-gold rounded-md flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors shadow-offset-black">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
