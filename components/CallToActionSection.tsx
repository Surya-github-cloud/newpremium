
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CallToActionArrowIcon } from './Icons';

const CTAIllustration = () => (
    <div className="relative w-64 h-48 lg:w-80 lg:h-64 flex items-center justify-center">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
        >
            {/* Main blank canvas card */}
            <motion.div 
                className="relative w-56 h-40 bg-white rounded-lg shadow-xl border border-gray-200"
                variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }}
            />
            
            {/* Floating UI card */}
            <motion.div
                className="absolute -top-8 right-12 w-32 h-20 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 flex flex-col gap-2"
                variants={{ hidden: { opacity: 0, x: 20, rotate: 15 }, visible: { opacity: 1, x: 0, rotate: 15 } }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <div className="w-full h-3 bg-blue-200 rounded" />
                <div className="w-2/3 h-3 bg-blue-200 rounded" />
            </motion.div>

             {/* Floating chart card */}
            <motion.div
                className="absolute -bottom-8 right-0 w-28 h-20 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 flex items-end gap-2"
                 variants={{ hidden: { opacity: 0, x: 20, rotate: -10 }, visible: { opacity: 1, x: 0, rotate: -10 } }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <div className="w-1/3 h-1/2 bg-green-200 rounded-sm" />
                <div className="w-1/3 h-full bg-green-200 rounded-sm" />
                <div className="w-1/3 h-1/3 bg-green-200 rounded-sm" />
            </motion.div>
        </motion.div>
    </div>
);


interface CallToActionSectionProps {
  onCalendarOpen?: () => void;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onCalendarOpen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nProject: ${project}`);
    // Reset form
    setName('');
    setEmail('');
    setProject('');
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
            <div className="md:w-3/5 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Ready to turn your vision into a remarkable product?
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  required
                />
                <textarea
                  placeholder="Tell us about your project..."
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 px-5 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </form>
              <motion.button
                onClick={onCalendarOpen || (() => handleScroll('contact'))}
                className="group inline-flex items-center justify-center space-x-3 bg-black text-white font-semibold py-3 px-5 rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:bg-gray-800"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <span>Book a Discovery Call</span>
                <div className="bg-white rounded-full p-0.5 transition-transform duration-300 group-hover:rotate-45">
                  <CallToActionArrowIcon className="h-5 w-5 text-black" />
                </div>
              </motion.button>
            </div>
            <div className="md:w-2/5 flex justify-center md:justify-end">
              <CTAIllustration />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
