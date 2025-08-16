import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Search, Sparkles } from 'lucide-react';

const SearchCircle = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [circlePosition, setCirclePosition] = useState<{ x: number; y: number; radius: number } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const startX = e.clientX - rect.left;
      const startY = e.clientY - rect.top;
      setCirclePosition({ x: startX, y: startY, radius: 0 });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing || !circlePosition) return;
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      const radius = Math.sqrt(
        Math.pow(currentX - circlePosition.x, 2) + Math.pow(currentY - circlePosition.y, 2)
      );
      setCirclePosition({ ...circlePosition, radius });
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    if (circlePosition && circlePosition.radius > 20) {
      // Simulate AI landmark detection
      setTimeout(() => {
        alert('🏛️ Landmark detected: Ancient Roman Colosseum\n📍 Built in 80 AD\n🎯 UNESCO World Heritage Site');
      }, 1000);
    }
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-card border-0 shadow-medium">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="relative p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Search className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Smart Landmark Search</h3>
            <p className="text-sm text-muted-foreground">Circle objects to identify landmarks</p>
          </div>
        </div>

        <div className="relative bg-muted/30 rounded-xl overflow-hidden mb-4">
          <canvas
            ref={canvasRef}
            width={400}
            height={250}
            className="w-full h-auto cursor-crosshair"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
              background: 'linear-gradient(135deg, hsl(215 20% 95%), hsl(215 15% 90%))',
            }}
          />
          
          {circlePosition && (
            <div
              className="absolute border-2 border-primary rounded-full bg-primary/10 animate-pulse"
              style={{
                left: circlePosition.x - circlePosition.radius,
                top: circlePosition.y - circlePosition.radius,
                width: circlePosition.radius * 2,
                height: circlePosition.radius * 2,
                pointerEvents: 'none',
              }}
            />
          )}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-muted-foreground/60">
              <Camera className="h-8 w-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">Draw a circle around landmarks</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="hero" className="flex-1">
            <Sparkles className="h-4 w-4" />
            Start Detection
          </Button>
          <Button variant="glass" size="icon">
            <Camera className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SearchCircle;