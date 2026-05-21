import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import TracksSection from "@/components/sections/TracksSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FaqSection from "@/components/sections/FaqSection";
import FloatingMascots from "@/components/ui/FloatingMascots";
import TeamSection from "@/components/sections/TeamSection";
import PageFadeIn from "@/components/ui/PageFadeIn";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <PageFadeIn>
        {/* Background Glowing Blobs for Premium Depth */}
        <div className="absolute top-[8%] left-[-15%] w-[600px] h-[600px] rounded-full bg-purple-accent/15 blur-[150px] pointer-events-none z-0" />
        <div className="absolute top-[28%] right-[-15%] w-[700px] h-[700px] rounded-full bg-gold/5 blur-[180px] pointer-events-none z-0" />
        <div className="absolute top-[48%] left-[10%] w-[800px] h-[800px] rounded-full bg-purple-mid/20 blur-[200px] pointer-events-none z-0" />
        <div className="absolute top-[72%] right-[-10%] w-[650px] h-[650px] rounded-full bg-purple-accent/10 blur-[150px] pointer-events-none z-0" />
        <div className="absolute top-[88%] left-[2%] w-[550px] h-[550px] rounded-full bg-gold/5 blur-[130px] pointer-events-none z-0" />

        <FloatingMascots />
        <Navbar />
        <HeroSection />
        <StatsBar />
        <TracksSection />
        <TimelineSection />
        <TeamSection />
        <SponsorsSection />
        <FaqSection />
        <Footer />
      </PageFadeIn>
    </main>
  );
}
