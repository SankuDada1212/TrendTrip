import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Camera, Brain } from 'lucide-react';
import heroImage from '@/assets/hero-landmark.jpg';

const HeroSection = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center overflow-hidden rounded-3xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-md">
          <Sparkles className="h-3 w-3 mr-1" />
          AI-Powered Travel Discovery
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Discover Landmarks
          <br />
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            with AI Vision
          </span>
        </h1>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience the future of travel with smart landmark recognition, mood-based 
          recommendations, and AR historical reconstructions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="min-w-[200px]">
            <Camera className="h-5 w-5" />
            Start Exploring
            <ArrowRight className="h-4 w-4" />
          </Button>
          
          <Button variant="glass" size="lg" className="min-w-[200px]">
            <Brain className="h-5 w-5" />
            AI Features
          </Button>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
            <span className="text-sm">Real-time Recognition</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-glow rounded-full animate-pulse" />
            <span className="text-sm">AR Reconstructions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" />
            <span className="text-sm">Smart Recommendations</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;