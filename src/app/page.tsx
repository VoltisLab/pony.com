import DatingSection from "@/components/home/DatingSection";
import HeroSection from "@/components/home/HeroSection";
import VibeSection from "@/components/home/VibeSection";
import ConnectionSection from "@/components/home/ConnectionSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import AwkwardToEffortlessSection from "@/components/home/AwkwardToEffortlessSection";
import FooterSection from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="max-w-[1920px] mx-auto">
     <HeroSection />
     <DatingSection />
     <VibeSection />
     <ConnectionSection />
     <TestimonialSection />
     <AwkwardToEffortlessSection />
     <FooterSection />
    </div>
  );
}
