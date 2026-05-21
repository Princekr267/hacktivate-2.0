"use client";

import { motion } from "framer-motion";
import { useRipple } from "@/hooks/useRipple";

const TEAM = [
  { name: "Arjun Verma",  role: "Lead Organizer",     avatar: "⚙️", twitter: "#", linkedin: "#", email: "#" },
  { name: "Priya Singh",  role: "Design Head",         avatar: "🎨", twitter: "#", linkedin: "#", email: "#" },
  { name: "Rohan Gupta",  role: "Tech Head",           avatar: "💻", twitter: "#", linkedin: "#", email: "#" },
  { name: "Sneha Patel",  role: "Marketing Head",      avatar: "📢", twitter: "#", linkedin: "#", email: "#" },
  { name: "Rahul Sharma", role: "Sponsor Relations",   avatar: "🤝", twitter: "#", linkedin: "#", email: "#" },
  { name: "Ananya Joshi", role: "Events Coordinator",  avatar: "🎤", twitter: "#", linkedin: "#", email: "#" },
];

const SOCIAL = [
  { icon: "𝕏",  label: "Twitter"  },
  { icon: "in", label: "LinkedIn" },
  { icon: "✉",  label: "Email"    },
];

export default function TeamSection() {
  const ripple = useRipple();

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-purple-bg"
      style={{ paddingTop: "90px", paddingBottom: "90px" }}
    >
      {/* ── Top wavy divider (gold) ── */}
      <svg className="w-full h-8 sm:h-12 md:h-16 absolute top-0 left-0 text-gold fill-current" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
      </svg>

      {/* ── Bottom wavy divider (gold) ── */}
      <svg className="w-full h-8 sm:h-12 md:h-16 absolute bottom-0 left-0 text-gold fill-current rotate-180" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path d="M0,48 C240,48 240,0 480,0 C720,0 720,48 960,48 C1200,48 1200,0 1440,0 L1440,48 Z" />
      </svg>

      {/* Ambient glows */}
      <div className="section-glow absolute top-1/3 left-[-8%] w-[500px] h-[500px]"
        style={{ background: "rgba(121,53,156,0.15)", filter: "blur(120px)" }} />
      <div className="section-glow absolute bottom-1/4 right-[-6%] w-[400px] h-[400px]"
        style={{ background: "rgba(239,216,68,0.08)", filter: "blur(100px)", animationDelay: '3s' }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* ── Section header ── */}
        <div className="flex flex-col items-center text-center mb-14" style={{ gap: "14px" }}>

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.35 }}
            className="font-fredoka"
            style={{
              background: "#EFD844",
              color: "#291648",
              border: "2.5px solid #000",
              borderRadius: 30,
              padding: "5px 20px",
              fontSize: 13,
              boxShadow: "3px 3px 0 #B36A04",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            👾 The Masterminds
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.3, delay: 0.08 }}
            className="font-fredoka"
            style={{
              fontSize: "clamp(38px, 5vw, 58px)",
              textShadow: "3px 3px 0 #B36A04",
              color: "#EFD844",
              lineHeight: 1.15,
            }}
          >
            Meet The{" "}
            <span style={{ color: "#FFFCF3" }}>Team</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.25, delay: 0.15 }}
            className="font-nunito font-bold"
            style={{
              fontSize: 15,
              color: "#FFFCF3",
              opacity: 0.7,
              maxWidth: 500,
            }}
          >
            The ones who stayed up way too late to make this possible.
          </motion.p>
        </div>

        {/* ── Team grid ── */}
        <div className="team-grid grid">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", bounce: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -6, boxShadow: "10px 10px 0 #B36A04" }}
              onClick={(e) => ripple.onClick(e as React.MouseEvent<HTMLElement>)}
              className="ripple-element"
              style={{
                background: "#1a0832",
                border: "3px solid #EFD844",
                borderRadius: 20,
                boxShadow: "6px 6px 0 #B36A04",
                overflow: "hidden",
                cursor: "default",
                transition: "box-shadow 0.2s ease",
              }}
            >
              {/* Gold crown band */}
              <div style={{ height: 6, background: "#EFD844", width: "100%" }} className="team-card-band" />

              {/* Card content */}
              <div style={{ padding: "24px 20px 22px", textAlign: "center" }}>

                {/* Avatar with double-ring + glow */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 4px #291648, 0 0 10px rgba(239,216,68,0.2)",
                      "0 0 0 4px #291648, 0 0 30px rgba(239,216,68,0.6)",
                      "0 0 0 4px #291648, 0 0 10px rgba(239,216,68,0.2)",
                    ],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto flex items-center justify-center"
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #291648, #43186B)",
                    border: "3px solid #EFD844",
                    marginBottom: 16,
                    fontSize: 44,
                  }}
                >
                  {member.avatar}
                </motion.div>

                {/* Name */}
                <p className="font-fredoka" style={{ fontSize: 21, color: "#EFD844", marginBottom: 4 }}>
                  {member.name}
                </p>

                {/* Role pill */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <span
                    className="font-nunito font-bold"
                    style={{
                      background: "#291648",
                      border: "1.5px solid #D89202",
                      borderRadius: 20,
                      padding: "3px 12px",
                      fontSize: 12,
                      color: "#D89202",
                      display: "inline-block",
                    }}
                  >
                    {member.role}
                  </span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "rgba(239,216,68,0.15)",
                    width: "60%",
                    margin: "0 auto 14px",
                  }}
                />

                {/* Social icons */}
                <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
                  {SOCIAL.map((s) => (
                    <motion.a
                      key={s.label}
                      href={
                        s.label === "Twitter"
                          ? member.twitter
                          : s.label === "LinkedIn"
                          ? member.linkedin
                          : member.email
                      }
                      aria-label={s.label}
                      whileHover={{ y: -2, background: "#EFD844", color: "#291648" }}
                      transition={{ duration: 0.18 }}
                      className="font-fredoka"
                      style={{
                        width: 34,
                        height: 34,
                        background: "#291648",
                        border: "2px solid #EFD844",
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        color: "#EFD844",
                        boxShadow: "2px 2px 0 #000",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>


    </section>
  );
}
