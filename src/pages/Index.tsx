
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
