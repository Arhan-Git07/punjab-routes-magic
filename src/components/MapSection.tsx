import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus, Clock, MapPin, AlertTriangle, CheckCircle } from "lucide-react";

// Mock bus data with realistic delays and traffic
const mockBuses = [
  {
    id: "PB-101",
    route: "Chandigarh to Ludhiana",
    status: "On Time",
    eta: "2 min",
    nextStop: "Sector 17",
    fare: "₹45",
    passengers: 28,
    capacity: 40,
    delay: 0,
    coordinates: { lat: 30.7333, lng: 76.7794 }
  },
  {
    id: "PB-205",
    route: "Amritsar to Jalandhar", 
    status: "Delayed",
    eta: "8 min",
    nextStop: "GT Road Junction",
    fare: "₹35",
    passengers: 35,
    capacity: 40,
    delay: 5,
    coordinates: { lat: 31.6340, lng: 74.8723 }
  },
  {
    id: "PB-312",
    route: "Patiala to Mohali",
    status: "On Time", 
    eta: "1 min",
    nextStop: "Phase 7 Market",
    fare: "₹25",
    passengers: 22,
    capacity: 35,
    delay: 0,
    coordinates: { lat: 30.7046, lng: 76.7179 }
  },
  {
    id: "PB-418",
    route: "Bathinda to Mansa",
    status: "Heavy Traffic",
    eta: "15 min", 
    nextStop: "Bus Stand Main",
    fare: "₹40",
    passengers: 31,
    capacity: 40,
    delay: 10,
    coordinates: { lat: 30.2110, lng: 74.9455 }
  },
  {
    id: "PB-527",
    route: "Ferozepur to Fazilka",
    status: "Delayed",
    eta: "12 min",
    nextStop: "Civil Lines",
    fare: "₹30", 
    passengers: 18,
    capacity: 35,
    delay: 7,
    coordinates: { lat: 30.9287, lng: 74.6154 }
  },
  {
    id: "PB-634", 
    route: "Kapurthala to Nawanshahr",
    status: "On Time",
    eta: "4 min",
    nextStop: "Railway Crossing",
    fare: "₹20",
    passengers: 14,
    capacity: 30,
    delay: 0,
    coordinates: { lat: 31.3800, lng: 75.3849 }
  }
];

const MapSection = () => {
  const [selectedBus, setSelectedBus] = useState(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Time": return "bg-green-500/20 text-green-700 border-green-500/30";
      case "Delayed": return "bg-yellow-500/20 text-yellow-700 border-yellow-500/30";
      case "Heavy Traffic": return "bg-red-500/20 text-red-700 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-700 border-gray-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "On Time": return <CheckCircle className="h-4 w-4" />;
      case "Delayed": return <Clock className="h-4 w-4" />;
      case "Heavy Traffic": return <AlertTriangle className="h-4 w-4" />;
      default: return <Bus className="h-4 w-4" />;
    }
  };

  return (
    <section id="live-map" className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Live Bus Tracking</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time bus locations, routes, and schedules across Punjab with traffic updates
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Google Maps Iframe */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-card border-0 backdrop-blur-sm">
              <CardContent className="p-0 relative">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.2274042892!2d74.00218827226624!3d31.326982876336838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391963ae045abcd3%3A0x5b277d2682a23d47!2sPunjab%2C%20India!5e1!3m2!1sen!2sus!4v1647892358657!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Live Traffic Data
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bus List */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Bus className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Active Buses</h3>
              <Badge variant="outline" className="ml-auto">
                {mockBuses.length} Online
              </Badge>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              {mockBuses.map((bus, index) => (
                <Card 
                  key={bus.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-card hover:scale-[1.02] border-border/50 ${
                    selectedBus === bus.id ? 'ring-2 ring-primary shadow-card' : ''
                  }`}
                  onClick={() => setSelectedBus(selectedBus === bus.id ? null : bus.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Bus className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-sm">{bus.id}</span>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getStatusColor(bus.status)}`}
                      >
                        {getStatusIcon(bus.status)}
                        <span className="ml-1">{bus.status}</span>
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{bus.route}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>ETA: {bus.eta}</span>
                        </div>
                        <span className="font-semibold text-primary">{bus.fare}</span>
                      </div>

                      {selectedBus === bus.id && (
                        <div className="mt-4 pt-3 border-t border-border/50 space-y-2 animate-fade-in">
                          <div className="text-xs text-muted-foreground">
                            <strong>Next Stop:</strong> {bus.nextStop}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            <strong>Passengers:</strong> {bus.passengers}/{bus.capacity}
                          </div>
                          {bus.delay > 0 && (
                            <div className="text-xs text-orange-600">
                              <strong>Delay:</strong> {bus.delay} minutes
                            </div>
                          )}
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-500" 
                              style={{ width: `${(bus.passengers / bus.capacity) * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-center text-muted-foreground">
                            Occupancy: {Math.round((bus.passengers / bus.capacity) * 100)}%
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-4 border-t border-border/50">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Last updated:</span>
                <span className="font-medium">Just now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;