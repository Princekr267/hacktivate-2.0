"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import FaqBackground from "@/components/backgrounds/FaqBackground";

const FAQS = [
  {
    q: "Who can participate?",
    a: "Any university student, recent graduate, or passionate developer can participate! You don't need to be from JIMSEMTC to join the hackathon."
  },
  {
    q: "How much does it cost?",
    a: "Absolutely nothing! Hacktivate 2.0 is 100% free for all selected participants. We'll provide the food, swag, and infrastructure."
  },
  {
    q: "Do I need a team?",
    a: "Yes, you can participate in a team of 2-4 members. If you don't have a team yet, don't worry! We'll have team-building sessions on our Discord before the event."
  },
  {
    q: "What if I'm a beginner?",
    a: "We love beginners! Hackathons are the best place to learn. We'll have mentors, workshops, and beginner-friendly tracks to help you build your first project."
  },
  {
    q: "Will hardware be provided?",
    a: "We provide basic infrastructure like power, internet, and desks. For specific hardware hacks (IoT, VR), please bring your own components."
  },
  {
    q: "What are the judging criteria?",
    a: "Projects will be judged on Innovation, Technical Complexity, UI/UX Design, Business/Practical Feasibility, and the quality of your final pitch."
  },
  {
    q: "Can I work on a past project?",
    a: "No, all code must be written during the 24-hour hackathon period. You can use open-source libraries and APIs, but the core logic must be built at the event."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-6 bg-purple-bg relative z-0 overflow-hidden">
      <FaqBackground />
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-fredoka text-cream"
            style={{ fontSize: "clamp(38px, 5vw, 60px)", textShadow: "4px 4px 0 #080511" }}
          >
            FAQ
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-6">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-purple-mid border-[3px] border-gold rounded-[18px] shadow-offset flex flex-col"
              >
                <button 
                  onClick={() => toggleOpen(idx)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <span className="font-fredoka text-gold text-xl pr-4">{faq.q}</span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="flex-shrink-0 w-[30px] h-[30px] bg-gold border-2 border-black rounded-full flex items-center justify-center text-black shadow-offset-black"
                  >
                    <Plus size={18} strokeWidth={3} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t-2 border-gold/30 mt-2 mx-6">
                        <p className="font-nunito text-cream opacity-90 pt-4 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
