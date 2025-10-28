
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import GoodFitSection from './components/GoodFitSection';
import ChatWidget from './components/ChatWidget';
import WhoCanBenefitSection from './components/WhoCanBenefitSection';
import PremiumUIUXSection from './components/PremiumUIUXSection';
import CalendarModal from './components/CalendarModal';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling while splash screen is active
    document.body.style.overflowY = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
      // Restore scrolling
      document.body.style.overflowY = 'auto';
    }, 2500); // This duration should be slightly longer than the splash screen animations

    return () => {
      clearTimeout(timer);
      document.body.style.overflowY = 'auto';
    };
  }, []);

  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  return (
    <div className="text-gray-900 relative">
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <AnimatePresence>
          {loading && <SplashScreen />}
        </AnimatePresence>

        <Header onCalendarOpen={openCalendar} />
        <main>
          <HeroSection onCalendarOpen={openCalendar} />
          <QuoteSection />
          <WhyChooseUsSection onCalendarOpen={openCalendar} />
          <FeaturesSection onCalendarOpen={openCalendar} />
          <GoodFitSection onCalendarOpen={openCalendar} />
          <ServicesSection onCalendarOpen={openCalendar} />
          <PremiumUIUXSection onCalendarOpen={openCalendar} />
          <TestimonialsSection />
          <ProjectsSection />
          <WhoCanBenefitSection onCalendarOpen={openCalendar} />
        </main>
        <Footer onCalendarOpen={openCalendar} />
        <ChatWidget onCalendarOpen={openCalendar} />
        <CalendarModal isOpen={isCalendarOpen} onClose={closeCalendar} />
      </div>
    </div>
  );
};

export default App;
