
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MartexIcon, UserIcon, SendIcon } from './Icons';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15
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




const serviceVisuals: { [key: string]: React.ElementType } = {
    "Website Development": () => {
        const src = "/card videos/webdevelopment.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Website Development" />;
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
    "AI Chatbots": () => {
        const src = "/card videos/ai chatbots.gif";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="AI Chatbots" />;
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
    "Fashion & Brand Websites": () => {
        const src = "/card videos/Fashion & Brand Websites.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Fashion & Brand Websites" />;
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
    "UI / UX Design": () => {
        const src = "/card videos/uiux.gif";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="UI / UX Design" />;
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
    "E-commerce Solutions": () => {
        const src = "/card videos/e_commerce.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="E-commerce Solutions" />;
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

const ServiceCard: React.FC<{
    title: string;
    description: string;
    className?: string;
}> = ({ title, description, className }) => {
    const VisualComponent = serviceVisuals[title];
    return (
        <motion.div 
            className={`bg-white p-6 rounded-3xl border border-gray-200 flex flex-col overflow-hidden group ${className}`}
            variants={{...itemVariants, hover: cardHoverVariant}}
            whileHover="hover"
        >
            <div className="h-48 mb-6 rounded-2xl">
               {VisualComponent && <VisualComponent />}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 flex-grow">{description}</p>
        </motion.div>
    );
};


interface ServicesSectionProps {
  onCalendarOpen?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onCalendarOpen }) => {
    const services = [
        { title: "Website Development", description: "Beautiful, fast, and responsive websites crafted for seamless performance and modern appeal, including ongoing website maintenance.", className: "md:col-span-3" },
        { title: "AI Chatbots", description: "Smart, conversational assistants that handle your customers with precision and personality.", className: "md:col-span-2" },
        { title: "Fashion & Brand Websites", description: "Elegant, trend-driven designs that highlight products with class and simplicity.", className: "md:col-span-2" },
        { title: "UI / UX Design", description: "Premium interfaces built with empathy, clarity, and balance. We believe every pixel has a purpose, creating a polished, high-end design that elevates your brand.", className: "md:col-span-3" },
        { title: "E-commerce Solutions", description: "Scalable online stores that convert visitors into loyal customers, complete with seamless checkout experiences.", className: "md:col-span-5" },
    ];
    
    return (
        <motion.section 
            id="services"
            className="py-20 md:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                        <span className="mr-2">🔧</span>
                        SERVICES
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We offer a range of services including website maintenance to bring your digital vision to life.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto"
                    variants={sectionVariants}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            className={service.className}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesSection;
