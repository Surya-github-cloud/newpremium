
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MartexIcon, ArrowRightIcon } from './Icons';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};


interface FooterProps {
  onCalendarOpen?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onCalendarOpen }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const yLogo = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerNav = [
        { name: 'About', id: 'about-us' },
        { name: 'Services', id: 'services' },
        { name: 'Why Us', id: 'why-us' },
    ];

    return (
        <motion.footer 
            ref={ref}
            id="contact"
            className="py-24 text-center overflow-hidden"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="relative z-10 container mx-auto px-4">
                <motion.button style={{ y: yLogo }} onClick={scrollToTop} className="relative inline-block mb-8 group">
                    <div className="absolute -inset-2 bg-black/5 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative flex items-center justify-center h-24 w-24 mx-auto bg-white rounded-full border border-gray-200 shadow-2xl shadow-black/5">
                        <MartexIcon className="h-12 w-12 text-black" />
                    </div>
                </motion.button>

                <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600">
                    Let's Build Together
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                    Let’s craft something that speaks your brand’s story — beautifully, intelligently, and boldly.
                </motion.p>

                <motion.div variants={itemVariants} className="flex justify-center mb-12">
                     <motion.button
                        onClick={onCalendarOpen || (() => handleScroll('contact'))}
                        className="group inline-flex items-center justify-center bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex justify-center space-x-8 mb-12">
                     {footerNav.map(item => (
                        <button key={item.name} onClick={() => handleScroll(item.id)} className="text-gray-600 hover:text-black">{item.name}</button>
                     ))}
                </motion.div>
                
                <motion.div variants={itemVariants} className="border-t border-gray-200 pt-8">
                     <p className="text-sm text-gray-500">
                        Martex © 2025 &bull; A unit of Martex &bull; 
                    </p>
                </motion.div>

            </div>
        </motion.footer>
    );
};

export default Footer;
