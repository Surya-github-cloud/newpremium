import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { MartexIcon } from './Icons';

interface HeaderProps {
  onCalendarOpen?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCalendarOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navItems = [
    { name: 'About', id: 'about-us' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Results', id: 'results' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerVariants = {
    top: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(8px)',
      boxShadow: 'inset 0 0px 0 0 rgba(0, 0, 0, 0)',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(16px)',
      boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.05)',
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={headerVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        className="container mx-auto px-4 flex items-center justify-between"
        animate={{ height: scrolled ? '4.5rem' : '6rem' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <button onClick={scrollToTop} className="flex items-center cursor-pointer flex-shrink-0">
          <MartexIcon className="h-6 w-6 mr-2 flex-shrink-0" />
          <div className="flex flex-col items-start">
            <span className="font-bold text-lg leading-tight">Martex</span>
            <span className="text-xs text-gray-500 leading-tight">A unit of Martex</span>
          </div>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        <motion.button
          onClick={onCalendarOpen || (() => handleScroll('contact'))}
          className="bg-black text-white font-semibold text-sm py-2 px-4 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
          whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.header>
  );
};

export default Header;