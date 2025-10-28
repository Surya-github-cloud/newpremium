
import React from 'react';
import { motion, useTime, useTransform } from 'framer-motion';
import { CallToActionArrowIcon } from './Icons';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AbstractVisual = () => {
    const time = useTime();
    const rotate = useTransform(time, t => (t / 20) % 360, { clamp: false });

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)] opacity-30">
            <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="gooey-blur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                <motion.g style={{ rotate }} filter="url(#gooey-blur)">
                    <motion.circle 
                        cx={useTransform(time, t => 400 + 150 * Math.sin(t / 2000))} 
                        cy={useTransform(time, t => 400 + 150 * Math.cos(t / 2000))} 
                        r="120" fill="#a5b4fc"
                    />
                    <motion.circle 
                        cx={useTransform(time, t => 400 + 250 * Math.cos(t / 2500))} 
                        cy={useTransform(time, t => 400 + 250 * Math.sin(t / 2500))} 
                        r="150" fill="#f87171"
                    />
                    <motion.circle 
                        cx={useTransform(time, t => 400 + 200 * Math.sin(t / 1500))} 
                        cy={useTransform(time, t => 400 - 200 * Math.cos(t / 1500))} 
                        r="100" fill="#60a5fa"
                    />
                </motion.g>
            </svg>
        </div>
    );
};


interface PremiumUIUXSectionProps {
  onCalendarOpen?: () => void;
}

const PremiumUIUXSection: React.FC<PremiumUIUXSectionProps> = ({ onCalendarOpen }) => {
    
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
        className="relative py-24 md:py-32 bg-black text-white overflow-hidden"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        <AbstractVisual />
        <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h2 
                variants={itemVariants} 
                className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
            >
                Elevate Your Brand with Premium UI/UX
            </motion.h2>
            <motion.p 
                variants={itemVariants} 
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            >
                We don't just design websites. We craft unforgettable digital experiences that captivate, convert, and leave a lasting impression.
            </motion.p>
            <motion.div variants={itemVariants}>
                <motion.button
                    onClick={onCalendarOpen || (() => handleScroll('contact'))}
                    className="group inline-flex items-center justify-center space-x-3 bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg shadow-white/20 transition-all duration-300 hover:bg-gray-200"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                    <span>Book a Design Consultation</span>
                    <div className="bg-black rounded-full p-0.5 transition-transform duration-300 group-hover:rotate-45">
                        <CallToActionArrowIcon className="h-5 w-5 text-white" />
                    </div>
                </motion.button>
            </motion.div>
        </div>
    </motion.section>
  );
};

export default PremiumUIUXSection;
