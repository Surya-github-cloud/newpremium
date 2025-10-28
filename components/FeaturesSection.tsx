
import React from 'react';
import { motion, useTime, useTransform } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
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



const featureVisuals: { [key: string]: React.ElementType } = {
    "Your Vision, Perfectly Built": () => {
        const src = "/Your Vision, Perfectly Built.gif";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Your Vision, Perfectly Built" />;
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
    "Smart Functionality": () => {
        const src = "/smart functionality.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Smart Functionality" />;
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
    "Faster Delivery, Zero Compromise": () => {
        const src = "/FASTER DELIVERY.mp4";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Faster Delivery, Zero Compromise" />;
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
    "Creative Meets Technical": () => {
        const src = "/creativity meets technical.gif";
        if (src.endsWith('.gif')) {
            return <img src={src} className="w-full h-full object-cover rounded-2xl" alt="Creative Meets Technical" />;
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

const FeatureCard: React.FC<{ title: string, description: string, className?: string }> = ({ title, description, className }) => {
    const Visual = featureVisuals[title];
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


interface FeaturesSectionProps {
  onCalendarOpen?: () => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCalendarOpen }) => {
const features = [
    {
        title: "Your Vision, Perfectly Built",
        description: "We translate your vision into a living digital experience. Every element is crafted with purpose, from effortless navigation to stunning visuals—no templates, just originality.",
        className: "md:col-span-3"
    },
    {
        title: "Smart Functionality",
        description: "Every feature is purposeful, scalable, and tailored to your needs.",
        className: "md:col-span-2"
    },
    {
        title: "Faster Delivery, Zero Compromise",
        description: "Get high-quality results with agile workflows and consistent updates.",
        className: "md:col-span-2"
    },
    {
        title: "Creative Meets Technical",
        description: "We blend artistry and logic to craft meaningful, interactive solutions.",
        className: "md:col-span-3"
    }
];

    return (
        <motion.section 
            id="why-us"
            className="py-20 md:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                        <span className="mr-2">🤝</span>
                        PARTNER WITH US
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Why Work With Us</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Drowning in data or afraid of falling behind? That’s where we come in. At Martex, we’re your innovation partner. We understand your real challenges before creating solutions that fit like a glove.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto"
                    variants={sectionVariants}
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            className={feature.className}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default FeaturesSection;
