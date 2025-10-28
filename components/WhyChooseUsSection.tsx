
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTime, useTransform } from 'framer-motion';

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const cardHoverVariant = {
  y: -8,
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  transition: { type: 'spring', stiffness: 300 }
};




const benefitVisuals: { [key: string]: React.ElementType } = {
    'Design With Purpose, Not Just Pixels': () => {
        const src = "/design%20with%20purpose.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Design With Purpose, Not Just Pixels" />;
        } else {
            return (
                <video
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={src} type="video/mp4" />
                </video>
            );
        }
    },
    'Creating Experiences That Feel Alive': () => {
        const src = "/creative experiences.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Creating Experiences That Feel Alive" />;
        } else {
            return (
                <video
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={src} type="video/mp4" />
                </video>
            );
        }
    },
    'Technology That Talks to You': () => {
        const src = "/Technology That Talks to You2.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Technology That Talks to You" />;
        } else {
            return (
                <video
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={src} type="video/mp4" />
                </video>
            );
        }
    },
    'Proactive Support & Maintenance': () => {
        const src = "/Proactive Support & Maintenance.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Proactive Support & Maintenance" />;
        } else {
            return (
                <video
                    className="w-full h-full object-cover rounded-2xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={src} type="video/mp4" />
                </video>
            );
        }
    },
};

const BenefitCard: React.FC<{ title: string, description: string, className?: string }> = ({ title, description, className }) => {
    const Visual = benefitVisuals[title];
    return (
        <motion.div 
            className={`bg-white p-6 rounded-3xl border border-gray-200 flex flex-col overflow-hidden group ${className}`}
            variants={{...itemVariants, hover: cardHoverVariant}}
            whileHover="hover"
        >
            <div className="h-48 mb-6 rounded-2xl">
                {Visual && <Visual />}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 flex-grow">{description}</p>
        </motion.div>
    );
};


interface WhyChooseUsSectionProps {
  onCalendarOpen?: () => void;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onCalendarOpen }) => {
    const benefits = [
        { title: 'Design With Purpose, Not Just Pixels', description: 'Before jumping into design or development, we dive deep into your goals. We focus on why it matters — and build from there.', className: 'md:col-span-3' },
        { title: 'Creating Experiences That Feel Alive', description: 'Our solutions go beyond static pages. We build user-friendly, intuitive, adaptive interfaces with easy navigation and premium UI/UX that feel natural and engaging, making every interaction a pleasure for your users.', className: 'md:col-span-2' },
        { title: 'Technology That Talks to You', description: 'We design AI-powered conversational systems that understand, respond, and assist in real time.', className: 'md:col-span-2' },
        { title: 'Proactive Support & Maintenance', description: 'We keep your digital assets secure, updated, and performing at their peak, so you can focus on your business.', className: 'md:col-span-3' },
    ];

  return (
    <motion.section 
      id="about-us"
      className="py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
            <span className="mr-2">💡</span>
            OUR APPROACH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">What Makes Us Different?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            We don’t just build websites or apps; we craft immersive, intelligent, and interactive experiences with user-friendly interfaces, easy navigation, and premium UI/UX that connect brands with users meaningfully.
          </p>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto"
            variants={sectionVariants}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard 
                key={index} 
                title={benefit.title} 
                description={benefit.description} 
                className={benefit.className}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
