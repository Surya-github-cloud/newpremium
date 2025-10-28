
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

const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.04,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const ProjectsSection: React.FC = () => {
    const line1 = "Whether it’s a fashion brand website that feels like a runway, a chatbot that turns visitors into customers, or a project that brings dreams into focus,";
    const line2 = "we don’t just build projects — we create experiences that move people.";

    return (
        <motion.section 
            id="results"
            className="py-20 md:py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                        <span className="mr-2">🏆</span>
                        RESULTS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Results That Matter</h2>
                </div>

                <div className="bg-white p-12 rounded-3xl border border-gray-200 max-w-4xl mx-auto text-center">
                    <motion.p 
                        className="text-2xl text-gray-700 leading-relaxed"
                        variants={sentence}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {line1.split(" ").map((word, index) => (
                            <motion.span
                                key={word + "-" + index}
                                variants={letter}
                                style={{ display: 'inline-block', marginRight: '0.25em' }}
                            >
                                {word}
                            </motion.span>
                        ))}
                        <br />
                        <span className="text-black mt-2 inline-block">
                             {line2.split(" ").map((word, index) => (
                                <motion.span
                                    key={word + "-" + index}
                                    variants={letter}
                                    style={{ display: 'inline-block', marginRight: '0.25em' }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    </motion.p>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;