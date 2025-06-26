
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HeroSection = () => {
  const heroSlides = [
    {
      title: "Excellence in Education",
      subtitle: "Shaping tomorrow's leaders through innovative learning, groundbreaking research, and transformative experiences.",
      background: "from-blue-900 via-blue-800 to-indigo-900"
    },
    {
      title: "Innovation & Research",
      subtitle: "Pioneering breakthrough discoveries and fostering the next generation of innovators and scholars.",
      background: "from-indigo-900 via-purple-800 to-blue-900"
    },
    {
      title: "Global Community",
      subtitle: "Building bridges across cultures and creating opportunities for students from around the world.",
      background: "from-purple-900 via-indigo-800 to-blue-900"
    }
  ];

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className={`min-h-screen flex items-center bg-gradient-to-br ${slide.background}`}>
                <div className="container mx-auto px-4">
                  <div className="text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto animate-fade-in">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                        Explore Programs
                      </button>
                      <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                        Virtual Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
