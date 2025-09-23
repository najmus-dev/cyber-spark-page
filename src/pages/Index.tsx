import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MissionSection from "@/components/MissionSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <MissionSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Index;
