
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MartexIcon, ArrowRightIcon } from './Icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
};

interface HeroSectionProps {
  onCalendarOpen?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCalendarOpen }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yLogo = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="home" className="relative py-24 md:py-48 text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-no-repeat bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        style={{
          backgroundImage: 'url("https://uploads-ssl.webflow.com/646f65e37fe0473ce2d26189/646f66cde5629631d11a64f6_noise-light.png"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
          y: yBg,
        }}>
      </motion.div>
      <motion.div 
        className="relative z-10 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="relative inline-block mb-8">
            <div className="absolute -inset-2 bg-black/5 rounded-full blur-xl"></div>
            <motion.div style={{ y: yLogo }} className="relative flex items-center justify-center h-36 w-36 mx-auto bg-white rounded-full border border-gray-200 shadow-2xl shadow-black/5">
                <MartexIcon className="h-16 w-16 text-black" />
            </motion.div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600">
          Crafting Digital Experiences
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          We connect brands with users meaningfully through immersive, intelligent, and interactive websites and apps.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center items-center space-x-4">
          <motion.button
            onClick={onCalendarOpen || (() => handleScroll('contact'))}
            className="group inline-flex items-center justify-center bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <motion.button
            onClick={() => handleScroll('services')}
            className="bg-white border border-gray-200 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
            whileTap={{ scale: 0.95 }}
          >
            See Our Services
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;