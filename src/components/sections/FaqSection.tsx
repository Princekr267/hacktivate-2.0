"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import FaqBackground from "@/components/backgrounds/FaqBackground";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

const FAQS = [
  {
    q: "Who can participate in Hacktivate 2.0?",
    a: "Hacktivate 2.0 is a pan-India hackathon open to all undergraduate and postgraduate students currently enrolled at any recognized college or university across India. You do not need to be from JIMSEMTC ,participants from all institutions are welcome."
  },
  {
    q: "Was registration free?",
    a: "Yes, registration for Hacktivate 2.0 was completely free. Registration is now closed."
  },
  {
    q: "Can I still register for the hackathon?",
    a: "No. Hacktivate 2.0 has ended and registration is closed. Visit the event page for information and updates."
  },
  {
    q: "Do I need a team to participate?",
    a: "Teams can have 2 to 4 members. Solo participation is not allowed."
  },
  {
    q: "Can team members be from different colleges?",
    a: "Yes! Cross-college teams are allowed and encouraged. All members just need to be currently enrolled students."
  },
  {
    q: "What is the format of Hacktivate 2.0?",
    a: "Hacktivate 2.0 was a two-round hackathon. The first round was online, followed by an in-person 36-hour hackathon at JIMSEMTC Campus, Greater Noida on September 11–12, 2026."
  },
  {
    q: "What do I need to bring on the day?",
    a: (
      <>
        Participants were expected to bring a laptop, charger, student ID for verification, and any hardware or equipment their project required. Power outlets were available at the venue, and bringing an extension cord was recommended.
      </>
    )
  },
  {
    q: "Will food and accommodation be provided?",
    a: "Yes, meals and snacks were provided throughout the 36-hour event. Overnight stay arrangements were available on campus. Accommodation outside the venue remained the participant's own responsibility."
  },
  {
    q: "Do I need to be an expert to participate?",
    a: "Absolutely not. Beginners were welcome, with mentors available throughout the event to guide participants at all skill levels."
  },
  {
    q: "Could I start working on my project before the hackathon?",
    a: "No. All code and design work had to begin after the opening ceremony on September 11. Research, documentation, and planning were allowed beforehand, but pre-written code and pre-built prototypes were not."
  },
  {
    q: "Can I work on a past or existing project?",
    a: "No. Submissions had to be entirely original work built during the hackathon. Repurposing an old project led to disqualification, while open-source libraries, public APIs, and free frameworks were allowed."
  },
  {
    q: "Will all participants receive certificates?",
    a: "Yes. Participants who submitted a project by the deadline received a digital participation certificate. Finalists and winners received additional certificates reflecting their achievement."
  },
  {
    q: "How can I stay updated about Hacktivate announcements?",
    a: "Follow us on our social media handles linked at the bottom of this website for real-time updates, announcements, and more."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-6 bg-transparent relative z-0 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(239,216,68,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(168,85,200,0.2)_0%,transparent_70%)] rounded-full pointer-events-none" style={{ animationDelay: '3s' }} />
      <FaqBackground />
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <AnimatedHeading text="FAQ" shadowColor="#080511" />
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
                className="faq-item bg-purple-mid border-[3px] border-gold rounded-[18px] shadow-offset flex flex-col"
              >
                <button 
                  onClick={() => toggleOpen(idx)}
                  className="flex items-center justify-between w-full p-4 sm:p-6 text-left focus:outline-none"
                >
                  <span className="faq-question font-fredoka text-gold text-base sm:text-xl pr-4">{faq.q}</span>
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
                      <div className="p-4 sm:p-6 pt-0 border-t-2 border-gold/30 mt-2 mx-4 sm:mx-6">
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
