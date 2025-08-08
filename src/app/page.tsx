import DatingSection from "@/components/home/DatingSection";
import HeroSection from "@/components/home/HeroSection";
import VibeSection from "@/components/home/VibeSection";

export default function Home() {
  return (
    <div className="max-w-[1920px] mx-auto">
     <HeroSection />
     <DatingSection />
     <VibeSection />
    </div>
  );
}
