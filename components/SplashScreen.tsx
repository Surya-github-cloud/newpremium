
import React from 'react';
import { motion } from 'framer-motion';
import { MartexIcon } from './Icons';

const SplashScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black"
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
    >
      <motion.div
        className="absolute inset-0 bg-gray-50 flex items-center justify-center"
        initial={{ clipPath: 'circle(5% at 50% 50%)' }}
        animate={{ clipPath: 'circle(75% at 50% 50%)' }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      >
         <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
         >
            <MartexIcon className="h-24 w-24 text-black mb-4" />
            <span className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600">
                Martex
            </span>
         </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
