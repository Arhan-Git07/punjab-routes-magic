import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import AuthForms from "@/components/AuthForms";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AuthForms />
      <MapSection />
      <HowItWorks />
      <ContactForm />
    </div>
  );
};

export default Index;