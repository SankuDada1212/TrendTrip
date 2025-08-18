import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Smile, Zap, Coffee, Plane, MapPin, Sparkles } from 'lucide-react';
import destinationImage from '@/assets/destination-beach.jpg';

const MoodDestinations = () => {
  const [mood, setMood] = useState('');
  const [analyzedMood, setAnalyzedMood] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const moodOptions = [
    { icon: Heart, label: 'Romantic', color: 'bg-pink-500' },
    { icon: Zap, label: 'Adventurous', color: 'bg-orange-500' },
    { icon: Coffee, label: 'Relaxed', color: 'bg-green-500' },
    { icon: Smile, label: 'Joyful', color: 'bg-yellow-500' },
  ];

  const analyzeMood = () => {
    // Simulate AI mood analysis
    const moods = ['Relaxed', 'Adventurous', 'Romantic', 'Energetic'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setAnalyzedMood(randomMood);
    
    // Simulate destination recommendations
    const destinations = [
      {
        name: 'Bali, Indonesia',
        description: 'Perfect for relaxation with pristine beaches',
        mood: 'Relaxed',
        image: destinationImage,
        price: '$1,200'
      },
      {
        name: 'Swiss Alps',
        description: 'Adventure awaits in the mountains',
        mood: 'Adventurous',
        image: destinationImage,
        price: '$2,100'
      }
    ];
    
    setRecommendations(destinations.slice(0, 2));
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-medium">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-accent/10 rounded-xl">
            <Heart className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Mood-Based Destinations</h3>
            <p className="text-sm text-muted-foreground">AI-powered travel recommendations</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              How are you feeling today?
            </label>
            <Textarea
              placeholder="I'm feeling adventurous and want to explore new cultures..."
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="bg-background/50 border-border resize-none"
              rows={3}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {moodOptions.map((option) => (
              <Button
                key={option.label}
                variant="glass"
                size="sm"
                onClick={() => setMood(`I'm feeling ${option.label.toLowerCase()}`)}
                className="h-8"
              >
                <option.icon className="h-3 w-3" />
                {option.label}
              </Button>
            ))}
          </div>

          <Button 
            variant="accent" 
            onClick={analyzeMood}
            disabled={!mood.trim()}
            className="w-full"
          >
            <Sparkles className="h-4 w-4" />
            Analyze & Recommend
          </Button>

          {analyzedMood && (
            <div className="mt-6 space-y-4 animate-fade-in">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Mood: {analyzedMood}
                </Badge>
              </div>

              <div className="grid gap-4">
                {recommendations.map((dest, index) => (
                  <div key={index} className="relative group">
                    <div 
                      className="h-32 rounded-xl bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-overlay" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-end justify-between">
                          <div>
                            <h4 className="text-white font-semibold text-sm">{dest.name}</h4>
                            <p className="text-white/80 text-xs">{dest.description}</p>
                          </div>
                          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                            {dest.price}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="glass" 
                      size="sm" 
                      className="absolute top-2 right-2 h-8 w-8 p-0"
                    >
                      <Plane className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MoodDestinations;