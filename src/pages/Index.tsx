import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import AuthModal from "@/components/AuthModal";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [authModal, setAuthModal] = useState<{isOpen: boolean, type: 'login' | 'signup'}>({
    isOpen: false,
    type: 'login'
  });

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, type });
  };

  const handleCloseModal = () => {
    setAuthModal({ isOpen: false, type: 'login' });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onAuthClick={handleAuthClick} />
      <MapSection />
      <HowItWorks />
      <ContactForm />
      <AuthModal 
        isOpen={authModal.isOpen}
        onClose={handleCloseModal}
        defaultTab={authModal.type}
      />
    </div>
  );
};

export default Index;