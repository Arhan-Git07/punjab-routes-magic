import { Button } from "@/components/ui/button";
import { MapPin, Clock, Bus, User, LogIn } from "lucide-react";

interface HeroSectionProps {
  onAuthClick: (type: 'login' | 'signup') => void;
}

const HeroSection = ({ onAuthClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Top Right Auth Buttons */}
      <div className="absolute top-8 right-8 flex gap-3 z-20">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => onAuthClick('login')}
          className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
        >
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </Button>
        <Button 
          size="sm"
          onClick={() => onAuthClick('signup')}
          className="bg-gradient-button hover:shadow-primary transition-all duration-300"
        >
          <User className="mr-2 h-4 w-4" />
          Sign Up
        </Button>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Punjab Public Transport
          <span className="block text-accent-light">Tracker</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
          Smart Travel, On Time – Every Time!
        </p>
        
        <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
          Track buses, schedules, routes, and fares in real time. Making public transport 
          smarter and more reliable for everyone in Punjab.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-button hover:shadow-primary transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-xl font-semibold"
          >
            <Bus className="mr-2 h-5 w-5" />
            Track Your Bus Now
          </Button>
          
          <Button 
            size="lg"
            className="bg-gradient-button hover:shadow-primary transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-xl font-semibold"
          >
            <MapPin className="mr-2 h-5 w-5" />
            View Live Map
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Clock className="h-12 w-12 mb-4 text-accent-light" />
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="opacity-80">Live bus locations and accurate arrival times</p>
          </div>
          
          <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <MapPin className="h-12 w-12 mb-4 text-accent-light" />
            <h3 className="text-xl font-semibold mb-2">Route Planning</h3>
            <p className="opacity-80">Find the best routes and stops near you</p>
          </div>
          
          <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Bus className="h-12 w-12 mb-4 text-accent-light" />
            <h3 className="text-xl font-semibold mb-2">Smart Tracking</h3>
            <p className="opacity-80">Know exactly when your bus will arrive</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;