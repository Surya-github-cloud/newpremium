
import React from 'react';
import { motion } from 'framer-motion';
import { RocketIcon, BuildingIcon, UsersIcon, CallToActionArrowIcon } from './Icons';

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

const cardHoverVariant = {
  y: -8,
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  transition: { type: 'spring', stiffness: 300 }
};


const BenefitCard: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode }> = ({ icon: Icon, title, children }) => {
    return (
        <motion.div 
            className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col h-full"
            variants={{...itemVariants, hover: cardHoverVariant}}
            whileHover="hover"
        >
            <div className="bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center mb-6">
                <Icon className="h-6 w-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow">{children}</p>
        </motion.div>
    );
};


interface WhoCanBenefitSectionProps {
  onCalendarOpen?: () => void;
}

const WhoCanBenefitSection: React.FC<WhoCanBenefitSectionProps> = ({ onCalendarOpen }) => {

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
        className="py-20 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
    >
        <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Who We Help Thrive</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We partner with visionary leaders at every stage of their journey.
                </p>
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                variants={sectionVariants}
            >
                <BenefitCard icon={RocketIcon} title="Ambitious Startups">
                    Launching a groundbreaking idea? We provide the technical and strategic firepower to build your MVP and find product-market fit.
                </BenefitCard>
                <BenefitCard icon={BuildingIcon} title="Growing Businesses">
                    Ready to scale? We enhance existing products, build new features, and optimize your platform for growth and engagement.
                </BenefitCard>
                <BenefitCard icon={UsersIcon} title="Established Enterprises">
                    Looking to innovate? We help large organizations modernize systems, explore new tech, and launch ventures with agility.
                </BenefitCard>

                <motion.div
                    className="bg-black p-8 rounded-3xl flex flex-col justify-between text-white"
                    variants={itemVariants}
                >
                    <div>
                        <h3 className="text-xl font-semibold mb-3">And Visionaries Like You</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Have an idea that doesn't fit a box? We love a good challenge.
                        </p>
                    </div>
                    <motion.button
                        onClick={onCalendarOpen || (() => handleScroll('contact'))}
                        className="group mt-8 inline-flex items-center justify-between w-full bg-white text-black font-semibold py-2 px-4 rounded-full"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Let's Talk</span>
                        <div className="bg-black rounded-full p-0.5 transform transition-transform duration-300 group-hover:rotate-45">
                            <CallToActionArrowIcon className="h-4 w-4 text-white" />
                        </div>
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    </motion.section>
  );
};

export default WhoCanBenefitSection;
