import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import VisualShowcase from "@/components/VisualShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import LogosSection from "@/components/LogosSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FireParticles from "@/components/FireParticles";
import ProjectsJsonLd from "@/components/ProjectsJsonLd";
import ScrollProgress from "@/components/ScrollProgress";
import BackgroundFX from "@/components/BackgroundFX";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ProjectsJsonLd />
      <BackgroundFX />
      <ScrollProgress />
      <CursorGlow />
      <FireParticles />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProjectsSection />
      <LogosSection />

      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
