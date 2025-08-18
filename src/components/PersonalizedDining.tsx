import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UtensilsCrossed, Star, Clock, TrendingUp, Sparkles } from 'lucide-react';
import diningImage from '@/assets/hotel-dining.jpg';

const PersonalizedDining = () => {
  const [energyLevel, setEnergyLevel] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const restaurants = [
    {
      name: 'Skyline Terrace',
      cuisine: 'Fine Dining',
      rating: 4.8,
      price: '$$$',
      energy: 'low',
      description: 'Intimate atmosphere with city views',
      features: ['Quiet ambiance', 'Window seating', 'Comfort food'],
      waitTime: '15 min',
      match: 92
    },
    {
      name: 'Vibrant Kitchen',
      cuisine: 'International Fusion',
      rating: 4.6,
      price: '$$',
      energy: 'high',
      description: 'Lively space with interactive dining',
      features: ['Live music', 'Social dining', 'Energy boosters'],
      waitTime: '25 min',
      match: 87
    },
    {
      name: 'Garden Café',
      cuisine: 'Healthy Wellness',
      rating: 4.7,
      price: '$$',
      energy: 'medium',
      description: 'Fresh, rejuvenating menu options',
      features: ['Organic ingredients', 'Mood-lifting foods', 'Natural setting'],
      waitTime: '10 min',
      match: 89
    }
  ];

  const getRecommendations = () => {
    setShowRecommendations(true);
  };

  const getMatchedRestaurants = () => {
    if (!energyLevel) return restaurants;
    return restaurants
      .filter(r => r.energy === energyLevel || r.energy === 'medium')
      .sort((a, b) => b.match - a.match);
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-medium">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-accent/10 rounded-xl">
            <UtensilsCrossed className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Personalized Hotel Dining</h3>
            <p className="text-sm text-muted-foreground">AI recommendations based on your mood</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Current energy level
            </label>
            <Select value={energyLevel} onValueChange={setEnergyLevel}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="How are you feeling?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">😴 Tired - Need comfort food</SelectItem>
                <SelectItem value="medium">😊 Balanced - Open to options</SelectItem>
                <SelectItem value="high">⚡ Energetic - Want something exciting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            variant="accent" 
            onClick={getRecommendations}
            disabled={!energyLevel}
            className="w-full"
          >
            <Sparkles className="h-4 w-4" />
            Get Personalized Recommendations
          </Button>

          {showRecommendations && (
            <div className="mt-6 space-y-4 animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Recommendations tailored to your energy level
                </span>
              </div>

              <div className="space-y-3">
                {getMatchedRestaurants().slice(0, 3).map((restaurant, index) => (
                  <div key={index} className="relative group">
                    <div 
                      className="h-28 rounded-xl bg-cover bg-center relative overflow-hidden border border-border"
                      style={{ backgroundImage: `url(${diningImage})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-overlay" />
                      <div className="absolute inset-0 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm text-xs">
                              {restaurant.match}% match
                            </Badge>
                            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                              {restaurant.price}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-white text-xs">{restaurant.rating}</span>
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <h4 className="text-white font-semibold text-sm">{restaurant.name}</h4>
                          <p className="text-white/80 text-xs mb-1">{restaurant.cuisine}</p>
                          <p className="text-white/70 text-xs">{restaurant.description}</p>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <Clock className="h-3 w-3 text-white/60" />
                            <span className="text-white/60 text-xs">{restaurant.waitTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="accent" 
                      size="sm" 
                      className="absolute top-2 right-2 h-7 px-3 text-xs"
                    >
                      Reserve
                    </Button>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {restaurant.features.slice(0, 3).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-accent/5 rounded-lg border border-accent/10">
                <p className="text-xs text-muted-foreground">
                  🤖 <strong>AI Insight:</strong> Based on your energy level, we prioritized restaurants with 
                  {energyLevel === 'low' ? ' comfortable, quiet atmospheres' : 
                   energyLevel === 'high' ? ' vibrant, energizing environments' : 
                   ' balanced ambiance options'} 
                  and mood-enhancing menu items.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PersonalizedDining;