import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Car, Shield, DollarSign, Clock, MapPin, Star } from 'lucide-react';
import vehicleImage from '@/assets/vehicle-booking.jpg';

const VehicleBooking = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [showPricing, setShowPricing] = useState(false);

  const vehicles = [
    {
      type: 'Economy',
      name: 'Toyota Corolla',
      price: 45,
      surge: 1.2,
      eta: '3 min',
      safety: 4.8,
      features: ['Air Conditioning', 'Bluetooth']
    },
    {
      type: 'Premium',
      name: 'Tesla Model 3',
      price: 75,
      surge: 1.1,
      eta: '5 min',
      safety: 4.9,
      features: ['Autopilot', 'Premium Sound']
    },
    {
      type: 'Luxury',
      name: 'Mercedes S-Class',
      price: 120,
      surge: 1.0,
      eta: '8 min',
      safety: 5.0,
      features: ['Chauffeur', 'Champagne Service']
    }
  ];

  const searchVehicles = () => {
    setShowPricing(true);
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-medium">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Car className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">AI Vehicle Booking</h3>
            <p className="text-sm text-muted-foreground">Smart pricing & safety verification</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
          </div>

          <Button 
            variant="hero" 
            onClick={searchVehicles}
            disabled={!pickup.trim() || !destination.trim()}
            className="w-full"
          >
            <DollarSign className="h-4 w-4" />
            Find Best Rates
          </Button>

          {showPricing && (
            <div className="mt-6 space-y-3 animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm text-muted-foreground">Route verified safe • Dynamic pricing active</span>
              </div>

              {vehicles.map((vehicle, index) => (
                <div key={index} className="relative group">
                  <div 
                    className="h-24 rounded-xl bg-cover bg-center relative overflow-hidden border border-border"
                    style={{ backgroundImage: `url(${vehicleImage})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-overlay" />
                    <div className="absolute inset-0 p-4 flex justify-between items-end">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                            {vehicle.type}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-white text-xs">{vehicle.safety}</span>
                          </div>
                        </div>
                        <h4 className="text-white font-medium text-sm">{vehicle.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3 text-white/80" />
                          <span className="text-white/80 text-xs">{vehicle.eta}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-lg">
                          ${Math.round(vehicle.price * vehicle.surge)}
                        </div>
                        <div className="text-white/80 text-xs">
                          {vehicle.surge > 1 && (
                            <span className="text-accent-glow">{vehicle.surge}x surge</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="accent" 
                    size="sm" 
                    className="absolute top-2 right-2 h-7 px-3 text-xs"
                  >
                    Book
                  </Button>
                </div>
              ))}

              <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  💡 <strong>AI Explanation:</strong> Premium vehicles cost more due to high demand. 
                  Economy option offers best value with 23% savings during off-peak hours.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default VehicleBooking;