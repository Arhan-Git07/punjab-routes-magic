import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, MapPin, Bell, Route } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Download & Register",
    description: "Sign up for free and create your personalized transport profile",
    step: "01"
  },
  {
    icon: <MapPin className="h-12 w-12 text-secondary" />,
    title: "Find Your Route",
    description: "Search for buses, routes, and stops using our smart location finder",
    step: "02"
  },
  {
    icon: <Bell className="h-12 w-12 text-accent" />,
    title: "Track in Real-Time",
    description: "Get live updates on bus locations, delays, and arrival times",
    step: "03"
  },
  {
    icon: <Route className="h-12 w-12 text-primary" />,
    title: "Smart Travel",
    description: "Receive notifications and plan your journey with confidence",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with Punjab's smartest public transport tracking system in just four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden shadow-card border-0 bg-gradient-card hover:shadow-primary transition-all duration-500 transform hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step number background */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    Step {step.step}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {step.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <CardDescription className="text-base leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-0 left-0 w-full h-1 flex items-center justify-center">
            <div className="flex items-center justify-between w-full max-w-4xl mx-auto px-20">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div className="w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30"></div>
                  <div className="w-2 h-2 bg-primary rounded-full mx-2 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white shadow-primary">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Join thousands of smart commuters who are already saving time with real-time bus tracking
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                Create Free Account
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;