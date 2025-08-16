import React from 'react';
import HeroSection from '@/components/HeroSection';
import SearchCircle from '@/components/SearchCircle';
import MoodDestinations from '@/components/MoodDestinations';
import VehicleBooking from '@/components/VehicleBooking';
import PersonalizedDining from '@/components/PersonalizedDining';
import ARHistorical from '@/components/ARHistorical';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
      </div>

      {/* Feature Sections */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            AI-Powered Travel Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of travel with cutting-edge AI technology that understands 
            your needs and enhances every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Smart Search */}
          <SearchCircle />
          
          {/* Mood Destinations */}
          <MoodDestinations />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Vehicle Booking */}
          <VehicleBooking />
          
          {/* Personalized Dining */}
          <PersonalizedDining />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* AR Historical */}
          <ARHistorical />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              Powered by advanced AI • Computer Vision • Natural Language Processing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;