"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, CheckCircle2 } from "lucide-react";

const SPONSORS = [
  { name: "Lazer Crazer", logo: "/Sponser/lazer crazer.png" }
];

import { useRipple } from "@/hooks/useRipple";

export default function SponsorsSection() {
  const ripple = useRipple();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.append(
    "access_key",
    "68f7100c-97d3-47bc-b8b6-20cc83152b6b"
  );

  formData.append(
    "subject",
    "New Sponsorship Inquiry"
  );

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true);

      setTimeout(() => {
        setIsModalOpen(false);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 500);
      }, 2000);

    } else {
      console.error(data);
      alert("Failed to send request");
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <>
      <section id="sponsors" className="relative bg-purple-bg" style={{ paddingTop: "90px", paddingBottom: "90px" }}>
        {/* ── Top wavy divider (gold) ── */}
        <svg className="w-full h-8 sm:h-12 md:h-16 absolute -top-8 sm:-top-12 md:-top-16 left-0 text-gold fill-current z-20" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
        </svg>

        {/* ── Bottom wavy divider (gold) ── */}
        <svg className="w-full h-8 sm:h-12 md:h-16 absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-0 text-gold fill-current rotate-180 z-20" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
        </svg>

        {/* Ambient glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            className="absolute -left-[20%] top-[20%] w-[800px] h-[800px] rounded-full ambient-blob"
            style={{ background: "radial-gradient(circle, rgba(121,53,156,0.15) 0%, transparent 70%)" }} />
          <div
            className="absolute -right-[10%] bottom-[10%] w-[600px] h-[600px] rounded-full ambient-blob"
            style={{ background: "radial-gradient(circle, rgba(239,216,68,0.08) 0%, transparent 70%)", animationDelay: '3s' }} />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="flex flex-col items-center mb-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-fredoka text-cream"
              style={{ fontSize: "clamp(38px, 5vw, 60px)", textShadow: "4px 4px 0 #B36A04" }}
            >
              Our Sponsors
            </motion.h2>
          </div>

          {/* Unified Sponsors Grid */}
          <div className="flex flex-col gap-8">
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              {SPONSORS.map((sponsor, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, x: -5, boxShadow: '7px 7px 0 #B36A04' }}
                  onClick={(e) => ripple.onClick(e as React.MouseEvent<HTMLElement>)}
                  className="ripple-element"
                  style={{
                    background: '#43186B',
                    border: '3px solid #EFD844',
                    borderRadius: '16px',
                    boxShadow: '4px 4px 0 #B36A04',
                    padding: '24px 32px',
                    minHeight: '100px',
                    width: '240px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {sponsor.logo ? (
                    <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="font-fredoka text-[18px] text-gold" style={{ opacity: 0.6 }}>{sponsor.name}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 max-w-2xl mx-auto border-[3px] border-dashed border-gold rounded-3xl p-10 text-center bg-purple-bg/50 backdrop-blur-sm relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black border-2 border-gold px-4 py-1 rounded-full text-gold font-nunito font-bold text-sm">
              Partner With Us
            </div>
            <h3 className="font-fredoka text-gold text-3xl mb-4">Want to be a Sponsor? 🤝</h3>
            <p className="font-nunito text-cream opacity-90 mb-8 max-w-md mx-auto">
              Get your brand in front of 3000+ passionate developers, designers, and creators. Help us build the future.
            </p>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#a855c8",
                color: "#EFD844",
                borderColor: "#EFD844",
                boxShadow: "none"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-flex items-center gap-2 bg-gold hover:bg-purple-mid text-black hover:text-gold hover:border-gold font-fredoka uppercase px-8 py-3 rounded-xl border-[3px] border-black shadow-offset-black hover:shadow-offset-black-hover transition-all"
            >
              <Mail size={18} /> Request Deck
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Sponsor Deck Request Modal — outside <section> to escape stacking context */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center px-4" style={{ zIndex: 999999 }}>
            {/* Backdrop — full page blur */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0"
              style={{ background: "rgba(8, 5, 17, 0.75)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-md bg-purple-bg border-[3px] border-gold rounded-[24px] overflow-hidden"
              style={{ zIndex: 1000000, boxShadow: "8px 8px 0 #B36A04" }}
            >
              {/* Header */}
              <div className="bg-purple-mid border-b-2 border-gold/30 px-6 py-4 flex justify-between items-center">
                <h3 className="font-fredoka text-xl text-gold">Sponsorship Inquiry</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-cream/50 hover:text-gold transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <CheckCircle2 size={64} className="text-gold mb-4" />
                    <h4 className="font-fredoka text-2xl text-cream mb-2">Request Sent!</h4>
                    <p className="font-nunito text-cream/70">
                      We&apos;ll be in touch with our sponsor deck shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block font-nunito font-bold text-cream/80 text-sm mb-1.5">Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-black/50 border-2 border-cream/10 rounded-xl px-4 py-2.5 text-cream font-nunito focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-nunito font-bold text-cream/80 text-sm mb-1.5">Company</label>
                      <input
                        required
                        name="company"
                        type="text"
                        placeholder="Acme Corp"
                        className="w-full bg-black/50 border-2 border-cream/10 rounded-xl px-4 py-2.5 text-cream font-nunito focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-nunito font-bold text-cream/80 text-sm mb-1.5">Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="john@acme.com"
                        className="w-full bg-black/50 border-2 border-cream/10 rounded-xl px-4 py-2.5 text-cream font-nunito focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
  <label className="block font-nunito font-bold text-cream/80 text-sm mb-1.5">
    Phone Number
  </label>

  <input
    name="phone"
    type="tel"
    placeholder="+91 9876543210"
    className="w-full bg-black/50 border-2 border-cream/10 rounded-xl px-4 py-2.5 text-cream font-nunito focus:outline-none focus:border-gold transition-colors"
  />
</div>
                    <div>
  <label className="block font-nunito font-bold text-cream/80 text-sm mb-1.5">
    Message
  </label>

  <textarea
    name="message"
    placeholder="Optional"
    rows={4}
    className="w-full bg-black/50 border-2 border-cream/10 rounded-xl px-4 py-2.5 text-cream font-nunito focus:outline-none focus:border-gold transition-colors resize-none"
  />
</div>
                    <button
                      type="submit"
                      className="mt-2 w-full bg-gold hover:bg-purple-mid text-black hover:text-gold hover:border-gold font-fredoka uppercase px-6 py-3 rounded-xl border-[3px] border-black shadow-offset-black transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#080511]"
                    >
                      Send Request
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
