import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import TracksSection from "@/components/sections/TracksSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FaqSection from "@/components/sections/FaqSection";
import TeamSection from "@/components/sections/TeamSection";
import PageFadeIn from "@/components/ui/PageFadeIn";

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ overflowX: 'clip' }}>
      <PageFadeIn>
        {/* Aurora Borealis Background Blobs — 3 blobs, translate-only for GPU compositing */}
        <div className="aurora-blob top-[0%] left-[30%] w-[700px] h-[700px] opacity-[0.45]" style={{ background: "radial-gradient(circle, #43186B 0%, #291648 50%, transparent 75%)", animation: "aurora-drift-1 28s ease-in-out infinite" }} />
        <div className="aurora-blob top-[35%] right-[-12%] w-[650px] h-[650px] opacity-[0.4]" style={{ background: "radial-gradient(circle, #79359C 0%, #43186B 45%, transparent 75%)", animation: "aurora-drift-2 34s ease-in-out infinite" }} />
        <div className="aurora-blob top-[65%] left-[-8%] w-[700px] h-[700px] opacity-[0.38]" style={{ background: "radial-gradient(circle, #43186B 0%, #291648 50%, transparent 75%)", animation: "aurora-drift-3 30s ease-in-out infinite" }} />

        <Navbar />
        <HeroSection />
        <StatsBar />
        <TracksSection />
        <TimelineSection />
        <SponsorsSection />
        <TeamSection />
        <FaqSection />
        <Footer />
      </PageFadeIn>
    </main>
  );
}
