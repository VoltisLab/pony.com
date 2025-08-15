import DatingSection from "@/components/home/DatingSection";
import HeroSection from "@/components/home/HeroSection";
import VibeSection from "@/components/home/VibeSection";
import ConnectionSection from "@/components/home/ConnectionSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import AwkwardToEffortlessSection from "@/components/home/AwkwardToEffortlessSection";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
     <HeroSection />
     <DatingSection />
     <VibeSection />
     <ConnectionSection />
     <TestimonialSection />
     <AwkwardToEffortlessSection />
    </div>
  );
}
