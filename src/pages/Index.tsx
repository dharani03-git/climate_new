import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ElectricVehicleSection from "@/components/ElectricVehicleSection";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ElectricVehicleSection />
      <ServicesSection />
      <CapabilitiesSection />
      <SolutionsSection />
      <IndustriesSection />
      <PartnersSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
