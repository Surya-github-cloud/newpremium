
import React from 'react';
import { motion } from 'framer-motion';
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

interface GoodFitSectionProps {
  onCalendarOpen?: () => void;
}

const GoodFitSection: React.FC<GoodFitSectionProps> = ({ onCalendarOpen }) => {
    const criteria = [
        { text: "Have a visionary idea and a passion for your users", color: "bg-yellow-50" },
        { text: "Value a true partnership built on trust and transparency", color: "bg-cyan-50" },
        { text: "Are ready to challenge assumptions and embrace new possibilities", color: "bg-green-50" },
        { text: "Appreciate that great products are built through iteration and feedback", color: "bg-yellow-50" },
        { text: "Are excited to collaborate and create something truly impactful", color: "bg-cyan-50" },
    ];
    
    // Duplicate the criteria for a seamless marquee effect
    const allCriteria = [...criteria, ...criteria];

    const handleScroll = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    const marqueeVariants = {
      animate: {
        x: [0, -1120], // Adjust this based on card width (224px * 5)
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      },
    };

    return (
        <motion.section 
            className="py-20 md:py-24 overflow-hidden" // Hide overflow for marquee
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4 text-center">
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                    What Makes a Great Partnership?
                </motion.h2>

                <motion.div variants={itemVariants} className="text-gray-600 space-y-2 max-w-2xl mx-auto mb-20">
                    <p>We're looking for ambitious partners ready to build something exceptional.</p>
                    <p>Our best work happens when we combine our expertise with your passion.</p>
                    <p className="font-semibold text-gray-800 text-lg mt-2">We're a perfect match if you:</p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto group">
                    <motion.div
                        className="flex"
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        {allCriteria.map((item, index) => (
                            <div key={index} className="flex-shrink-0 w-56 px-4">
                                <div className={`w-full h-full p-6 rounded-2xl ${item.color} text-gray-800 border border-gray-900/5`}>
                                    <p className="font-medium text-sm leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                    className="mt-20"
                    variants={itemVariants}
                >
                    <motion.button
                      onClick={onCalendarOpen || (() => handleScroll('contact'))}
                      className="group inline-flex items-center justify-center space-x-3 bg-black text-white font-semibold py-3 px-5 rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:bg-gray-800"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Book a Discovery Call</span>
                      <div className="bg-white rounded-full p-0.5 transition-transform duration-300 group-hover:rotate-45">
                          <CallToActionArrowIcon className="h-5 w-5 text-black" />
                      </div>
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default GoodFitSection;
