import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyVigilSection from "@/components/WhyVigilSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MissionSection from "@/components/MissionSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main content with proper spacing for fixed header */}
      <main className="pt-16 md:pt-20">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="solutions">
          <FeaturesSection />
          <WhyVigilSection />
        </section>
        
        <TestimonialsSection />
        
        <section id="about">
          <MissionSection />
        </section>
        
        <CTASection />
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
