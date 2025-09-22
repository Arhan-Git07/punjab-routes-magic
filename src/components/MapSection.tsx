import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, DollarSign, Users, Navigation } from "lucide-react";

// Mock bus data
const mockBuses = [
  {
    id: "PB-001",
    route: "Chandigarh - Ludhiana",
    lat: 30.7333,
    lng: 76.7794,
    eta: "5 mins",
    nextStops: ["Sector 17", "ISBT", "Railway Station"],
    fare: "₹45",
    occupancy: 68,
    status: "On Time"
  },
  {
    id: "PB-042",
    route: "Amritsar - Jalandhar",
    lat: 31.6340,
    lng: 74.8723,
    eta: "12 mins",
    nextStops: ["Golden Temple", "Hall Gate", "Bus Stand"],
    fare: "₹35",
    occupancy: 45,
    status: "Delayed"
  },
  {
    id: "PB-089",
    route: "Patiala - Bathinda",
    lat: 30.3398,
    lng: 76.3869,
    eta: "8 mins",
    nextStops: ["Old Bus Stand", "Govt College", "Leela Bhawan"],
    fare: "₹55",
    occupancy: 82,
    status: "On Time"
  },
  {
    id: "PB-156",
    route: "Mohali - Ropar",
    lat: 30.7046,
    lng: 76.7179,
    eta: "3 mins",
    nextStops: ["Phase 8B", "Aerocity", "Kharar"],
    fare: "₹25",
    occupancy: 35,
    status: "On Time"
  }
];

const MapSection = () => {
  const [selectedBus, setSelectedBus] = useState<typeof mockBuses[0] | null>(null);

  const getStatusColor = (status: string) => {
    return status === "On Time" ? "bg-primary" : "bg-accent";
  };

  const getOccupancyColor = (occupancy: number) => {
    if (occupancy > 70) return "text-accent";
    if (occupancy > 40) return "text-secondary";
    return "text-primary";
  };

  return (
    <section id="map" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Live Bus Tracking</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time locations, routes, and schedules of all Punjab public transport buses
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="h-96 lg:h-[600px] shadow-card border-0 overflow-hidden animate-scale-in">
              <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                {/* Mock map with bus markers */}
                <div className="absolute inset-4 bg-gradient-to-br from-muted/30 to-background rounded-lg border border-border/50">
                  {/* Bus markers */}
                  {mockBuses.map((bus, index) => (
                    <div
                      key={bus.id}
                      className={`absolute w-8 h-8 bg-gradient-button rounded-full shadow-primary cursor-pointer transform transition-all duration-300 hover:scale-125 animate-bounce-gentle flex items-center justify-center`}
                      style={{
                        left: `${20 + (index * 20)}%`,
                        top: `${30 + (index * 15)}%`,
                        animationDelay: `${index * 0.5}s`
                      }}
                      onClick={() => setSelectedBus(bus)}
                    >
                      <Navigation className="h-4 w-4 text-white" />
                    </div>
                  ))}
                  
                  {/* Map overlay info */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-card">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-3 h-3 bg-gradient-button rounded-full animate-pulse"></div>
                      Live Tracking Active
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-card">
                    <h4 className="text-sm font-semibold mb-2">Legend</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>On Time</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Delayed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bus List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground mb-6 animate-slide-up">Active Buses</h3>
            {mockBuses.map((bus, index) => (
              <Card 
                key={bus.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-primary transform hover:scale-[1.02] border-0 shadow-card animate-slide-up ${
                  selectedBus?.id === bus.id ? 'ring-2 ring-primary shadow-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedBus(bus)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{bus.id}</CardTitle>
                    <Badge className={getStatusColor(bus.status)}>
                      {bus.status}
                    </Badge>
                  </div>
                  <CardDescription className="font-medium text-base">
                    {bus.route}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-semibold">ETA: {bus.eta}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4 text-secondary" />
                    <span>Fare: <span className="font-semibold">{bus.fare}</span></span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className={`h-4 w-4 ${getOccupancyColor(bus.occupancy)}`} />
                    <span>Occupancy: <span className="font-semibold">{bus.occupancy}%</span></span>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Next Stops:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {bus.nextStops.slice(0, 2).map((stop, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {stop}
                        </Badge>
                      ))}
                      {bus.nextStops.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{bus.nextStops.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button className="w-full mt-6 bg-gradient-accent hover:shadow-accent transition-all duration-300 transform hover:scale-[1.02] h-12 rounded-xl font-semibold">
              <MapPin className="mr-2 h-4 w-4" />
              Find Nearest Bus Stop
            </Button>
          </div>
        </div>

        {/* Selected bus popup */}
        {selectedBus && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="max-w-md w-full shadow-2xl border-0 animate-scale-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{selectedBus.id}</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedBus(null)}
                    className="h-8 w-8 p-0"
                  >
                    ✕
                  </Button>
                </div>
                <CardDescription className="text-base font-medium">
                  {selectedBus.route}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">ETA</p>
                      <p className="font-semibold">{selectedBus.eta}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Fare</p>
                      <p className="font-semibold">{selectedBus.fare}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Users className={`h-5 w-5 ${getOccupancyColor(selectedBus.occupancy)}`} />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Occupancy</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            selectedBus.occupancy > 70 ? 'bg-accent' : 
                            selectedBus.occupancy > 40 ? 'bg-secondary' : 'bg-primary'
                          }`}
                          style={{ width: `${selectedBus.occupancy}%` }}
                        ></div>
                      </div>
                      <span className="font-semibold text-sm">{selectedBus.occupancy}%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Upcoming Stops</span>
                  </div>
                  <div className="space-y-2">
                    {selectedBus.nextStops.map((stop, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{stop}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-button hover:shadow-primary transition-all duration-300 transform hover:scale-[1.02] h-12 rounded-xl font-semibold">
                  Set Reminder for This Bus
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default MapSection;