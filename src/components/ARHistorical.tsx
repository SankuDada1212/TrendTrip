import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Download, Smartphone, RotateCcw, Layers3 } from 'lucide-react';

const ARHistorical = () => {
  const [selectedLandmark, setSelectedLandmark] = useState(0);

  const landmarks = [
    {
      name: 'Roman Colosseum',
      period: '80 AD',
      description: 'Experience the grandeur of ancient Rome',
      reconstructed: '3D Model Ready',
      size: '45 MB'
    },
    {
      name: 'Great Wall of China',
      period: '7th Century BC',
      description: 'Walk along the ancient fortification',
      reconstructed: '3D Model Ready', 
      size: '67 MB'
    },
    {
      name: 'Machu Picchu',
      period: '1450 AD',
      description: 'Explore the lost city of the Incas',
      reconstructed: '3D Model Ready',
      size: '52 MB'
    }
  ];

  return (
    <Card className="bg-gradient-card border-0 shadow-medium">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Layers3 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">3D Historical Reconstruction</h3>
            <p className="text-sm text-muted-foreground">AR-ready 3D models for offline viewing</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3">
            {landmarks.map((landmark, index) => (
              <div 
                key={index}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  selectedLandmark === index 
                    ? 'border-primary bg-primary/5 shadow-soft' 
                    : 'border-border hover:border-primary/50 hover:bg-muted/30'
                }`}
                onClick={() => setSelectedLandmark(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-foreground">{landmark.name}</h4>
                      <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                        {landmark.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{landmark.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <RotateCcw className="h-3 w-3" />
                        {landmark.reconstructed}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {landmark.size}
                      </span>
                    </div>
                  </div>
                  {selectedLandmark === index && (
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <Button variant="hero" className="w-full">
              <Eye className="h-4 w-4" />
              View in AR
            </Button>
            
            <div className="grid grid-cols-2 gap-2">
              <Button variant="glass" size="sm">
                <Download className="h-4 w-4" />
                Download Model
              </Button>
              <Button variant="glass" size="sm">
                <Smartphone className="h-4 w-4" />
                Mobile AR
              </Button>
            </div>
          </div>

          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground">
              💡 <strong>AR Ready:</strong> Models are optimized for mobile AR viewing. 
              Download for offline access and immersive historical exploration.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ARHistorical;