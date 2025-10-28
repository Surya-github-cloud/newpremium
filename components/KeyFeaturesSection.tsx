
import React from 'react';
import { motion } from 'framer-motion';
// FIX: Replaced non-existent NavigationIcon with WorkflowIcon.
import { UserIcon, WorkflowIcon, UIIcon } from './Icons';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FeatureCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <motion.div className="text-center" variants={itemVariants}>
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md">
            <Icon className="h-8 w-8 text-black" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const KeyFeaturesSection: React.FC = () => {
    const features = [
        {
            icon: UserIcon,
            title: 'User-Friendly Focus',
            description: 'We design intuitive interfaces that are a joy to use, ensuring a seamless and engaging experience for every visitor.',
        },
        {
            // FIX: Replaced non-existent NavigationIcon with WorkflowIcon.
            icon: WorkflowIcon,
            title: 'Effortless Navigation',
            description: 'Our websites have a clear, logical structure that guides users to what they need quickly and without confusion.',
        },
        {
            icon: UIIcon,
            title: 'Premium UI/UX Design',
            description: 'With a keen eye for aesthetics and functionality, we create polished, high-end designs that elevate your brand.',
        },
    ];

    return (
        <motion.section 
            className="py-20 md:py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4">
                <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                        With Us, It's Always...
                    </h2>
                    <p className="text-lg text-gray-600">
                        We build every digital experience on a foundation of three core principles, ensuring quality, clarity, and connection.
                    </p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto"
                    variants={sectionVariants}
                >
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default KeyFeaturesSection;