"use client";

import { motion } from "framer-motion";
import { useRipple } from "@/hooks/useRipple";

const TEAM = [
  {
    name: "Anwesha Sen",
    avatar: "/data/team_photos/anwesha.jpg",
    twitter: "https://www.instagram.com/anwesha_sen9405?igsh=MW9jbTlpd2xxbWJiNw==",
    linkedin: "https://www.linkedin.com/in/anwesha-sen-97170227b",
    github: "https://github.com/anwesha1367",
  },
  {
    name: "M. Abdullah Meraj",
    avatar: "/data/team_photos/abdullah.jpg",
    twitter: "https://www.instagram.com/mohdabdullahmeraj/",
    linkedin: "https://www.linkedin.com/in/mohdabdullahmeraj/",
    github: "https://github.com/mohdabdullahmeraj",
  },
  {
    name: "Priyal Jain",
    avatar: "/data/team_photos/priyal.jpg",
    twitter: "https://www.instagram.com/priyal2936?igsh=MW92ZDIzNW5wcnZjNA==",
    linkedin: "https://www.linkedin.com/in/priyal-jain-92863b282",
    github: "https://github.com/pihu404",
  },
  {
    name: "Vanshika S.",
    avatar: "/data/team_photos/vanshika.jpg",
    twitter: "https://www.instagram.com/vannssszzz/",
    linkedin: "https://www.linkedin.com/in/vanshikasrivastava79",
    github: "https://github.com/Vanshika-Srivastava79",
  },
  {
    name: "Ayush Kumar S.",
    avatar: "/data/team_photos/ayush.jpg",
    twitter: "https://www.instagram.com/ayush.feb14/",
    linkedin: "https://www.linkedin.com/in/ayush-kumar-singh-7ba5862ba",
    github: "https://github.com/ayushkumarsingh14",
  },
  {
    name: "Ankit Choudhary",
    avatar: "/data/team_photos/ankit.jpg",
    twitter: "https://www.instagram.com/ankitchoudhary4141/",
    linkedin: "https://www.linkedin.com/in/ankit-choudhary-978a11266/",
    github: "https://github.com/ankit77003",
  },
  {
    name: "Avishka Bhardwaj",
    avatar: "/data/team_photos/avishka.jpg",
    twitter: "https://www.instagram.com/avishka.20?utm_source=qr&igsh=MTNzZ2I3cDdsYWV2NQ==",
    linkedin: "https://www.linkedin.com/in/avishka-bhardwaj-091807327",
    github: "https://github.com/avishkabhardwaj",
  },
  {
    name: "Anantabh Kashyap",
    avatar: "",
    twitter: "https://www.instagram.com/arxnkshyp/",
    linkedin: "https://www.linkedin.com/in/arin-kashyap/",
    github: "https://github.com/arxnkshyp/",
  },
  {
    name: "Atulya Mukesh",
    avatar: "",
    twitter: "https://www.instagram.com/atulya.mukesh/profilecard/?igsh=MThyenFxOTEydWZ5Zw==",
    linkedin: "https://www.linkedin.com/in/atulya-mukesh-12716a2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/atulya-mukesh",
  },
  {
    name: "Akshat Jain",
    avatar: "/data/team_photos/akshat.jpg",
    twitter: "https://www.instagram.com/akshatjain2411",
    linkedin: "https://www.linkedin.com/in/Akshatjain",
    github: "https://github.com/Akshatjain2411",
  },
  {
    name: "Shreya Sai",
    avatar: "/data/team_photos/shreya.png",
    twitter: "https://www.instagram.com/l_.shreya._l",
    linkedin: "https://www.linkedin.com/in/shreya-sai-thanikella/",
    github: "https://github.com/sst2105",
  },
  {
    name: "Rimi Kumari",
    avatar: "",
    twitter: "https://www.instagram.com/rimikumari.tech/",
    linkedin: "https://www.linkedin.com/in/rimi-kumari-technical/",
    github: "https://github.com/rimikumari",
  },
  {
    name: "Pratyush Patwal",
    avatar: "/data/team_photos/pratyush.jpg",
    twitter: "https://www.instagram.com/ohhpratyush?igsh=MWl3bDJjNnowdjQ4ZQ==",
    linkedin: "https://www.linkedin.com/in/pratyush-patwal-198144333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/pratyush1279",
  },
  {
    name: "Ayush Parashar",
    avatar: "/data/team_photos/ayush_parashar.jpg",
    twitter: "https://www.instagram.com/ayushparashar19",
    linkedin: "https://www.linkedin.com/in/ayush-parashar-49a596213",
    github: "https://github.com/ayushparashar91",
  },
  {
    name: "Amisha",
    avatar: "/data/team_photos/amisha.jpg",
    twitter: "https://www.instagram.com/amixh.aa?igsh=MTFjaHMwemZ2dmw3eA==",
    linkedin: "https://www.linkedin.com/in/amisha-kumari-04bb10328",
    github: "https://github.com/Amisha1kumari",
  },
  {
    name: "Kartik Mishra",
    avatar: "/data/team_photos/kartik.jpg",
    twitter: "https://www.instagram.com/kartikkmishraaa",
    linkedin: "https://www.linkedin.com/in/kartik-mishra-6139b9335",
    github: "https://github.com/codelawyer-max",
  },
  {
    name: "Prince Kumar",
    avatar: "/data/team_photos/prince.jpg",
    twitter: "https://www.instagram.com/princekrr267",
    linkedin: "https://www.linkedin.com/in/prince-kumar-27a12b315",
    github: "https://github.com/Princekr267",
  },
  {
    name: "Dilawar Ali",
    avatar: "/data/team_photos/dilawar.jpg",
    twitter: "https://www.instagram.com/dilawarzaidi._?igsh=N3ZkdXhhNDZjNHpl",
    linkedin: "https://www.linkedin.com/in/dilawar-ali-4533ab335",
    github: "https://github.com/Dilawar-ali313",
  },
  {
    name: "Suhani Mittal",
    avatar: "/data/team_photos/suhani.jpg",
    twitter: "https://www.instagram.com/suuhanii__m?igsh=MWljZWE0djNoaXJ5aw==",
    linkedin: "https://www.linkedin.com/in/suhani-mittal-a650a2381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/suhani-ux123",
  },
  {
    name: "Kushagra Pandey",
    avatar: "/data/team_photos/kushagra.jpg",
    twitter: "https://www.instagram.com/its_kushagra_pandey",
    linkedin: "https://www.linkedin.com/in/its-kushagra-pandey",
    github: "https://github.com/kushagra0333",
  },
  {
    name: "Tanvi Salhotra",
    avatar: "/data/team_photos/tanvi.png",
    twitter: "https://www.instagram.com/nikoniko_7t",
    linkedin: "http://www.linkedin.com/in/tanvi7709",
    github: "https://github.com/tan07vi",
  },
  {
    name: "Anushka Dua",
    avatar: "/data/team_photos/anushka.jpg",
    twitter: "https://www.instagram.com/anushkaa_dua?igsh=NHllZGZzM2RzNTAx&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/anushka-dua-06427131a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    github: "https://github.com/anushkadua23",
  },
  {
    name: "Rimjhim Shukla",
    avatar: "/data/team_photos/rimjhim.jpg",
    twitter: "https://www.instagram.com/_rimjhimshuklaa_",
    linkedin: "https://www.linkedin.com/in/rimjhim-shukla-a264203a8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/shuklarimjhim87-a11y",
  },
  {
    name: "Bhumika Dobha",
    avatar: "/data/team_photos/bhumika.jpg",
    twitter: "https://www.instagram.com/bhumika_dobhal?igsh=MXBkb3g3NmNtdzBhbg==",
    linkedin: "https://www.linkedin.com/in/bhumika-dobhal-06118b381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/dobhalbhumikaaa",
  },
];

const SOCIAL = [
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,  label: "Instagram"  },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, label: "LinkedIn" },
  { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>, label: "GitHub" },
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
      <div 
        className="absolute -left-[20%] top-[20%] w-[800px] h-[800px] rounded-full pointer-events-none z-0 ambient-blob"
        style={{ background: "radial-gradient(circle, rgba(121,53,156,0.15) 0%, transparent 70%)" }} />
      <div 
        className="absolute -right-[10%] bottom-[10%] w-[600px] h-[600px] rounded-full pointer-events-none z-0 ambient-blob"
        style={{ background: "radial-gradient(circle, rgba(239,216,68,0.08) 0%, transparent 70%)", animationDelay: '3s' }} />

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
        <div className="team-grid flex flex-wrap justify-center gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.35, delay: idx * 0.08 } }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6, boxShadow: "10px 10px 0 #B36A04", transition: { type: "spring", stiffness: 400, damping: 17 } }}
              onClick={(e) => ripple.onClick(e as React.MouseEvent<HTMLElement>)}
              className="ripple-element w-full sm:w-[310px]"
              style={{
                background: "#1a0832",
                border: "3px solid #EFD844",
                borderRadius: 20,
                boxShadow: "6px 6px 0 #B36A04",
                overflow: "hidden",
                cursor: "default",
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
                  className="mx-auto flex items-center justify-center relative overflow-hidden"
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #291648, #43186B)",
                    border: "3px solid #EFD844",
                    marginBottom: 16,
                  }}
                >
                  {member.avatar !== "" ? (
                    <>
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center rounded-full"
                        style={{ imageRendering: "high-quality", transform: "translateZ(0)", backfaceVisibility: "hidden" }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      <span 
                        className="font-fredoka" 
                        style={{ display: 'none', fontSize: 36, color: "#EFD844" }}
                      >
                        {member.name.charAt(0).toUpperCase()}
                      </span>
                    </>
                  ) : (
                    <span 
                      className="font-fredoka" 
                      style={{ fontSize: 36, color: "#EFD844" }}
                    >
                      {member.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </motion.div>

                {/* Name */}
                <p className="font-fredoka" style={{ fontSize: 21, color: "#EFD844", marginBottom: 16 }}>
                  {member.name}
                </p>

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
                        s.label === "Instagram"
                          ? member.twitter
                          : s.label === "LinkedIn"
                          ? member.linkedin
                          : member.github || "https://github.com"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      whileHover={{ y: -2, background: "#EFD844", color: "#291648" }}
                      transition={{ duration: 0.18 }}
                      className="font-fredoka"
                      style={{
                        width: 40,
                        height: 40,
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
