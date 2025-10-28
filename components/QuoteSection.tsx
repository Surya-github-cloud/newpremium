
import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const QuoteSection: React.FC = () => {
  return (
    <motion.section 
      className="py-20 md:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <p className="text-lg text-gray-500 mb-4">Here’s a Thought:</p>
        <blockquote className="text-3xl md:text-4xl leading-snug text-gray-700">
          "Great digital experiences don’t start with code — they start with <span className="text-black">understanding people.</span>"
        </blockquote>
      </div>
    </motion.section>
  );
};

export default QuoteSection;
