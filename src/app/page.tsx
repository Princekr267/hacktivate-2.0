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
        <div className="absolute top-[8%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,200,0.15),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute top-[28%] right-[-15%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(239,216,68,0.05),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute top-[48%] left-[10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(121,53,156,0.2),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute top-[72%] right-[-10%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,200,0.1),transparent_70%)] pointer-events-none z-0" />
        <div className="absolute top-[88%] left-[2%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(239,216,68,0.05),transparent_70%)] pointer-events-none z-0" />

        <FloatingMascots />
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
