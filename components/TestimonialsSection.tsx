import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from './Icons';

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


const testimonials = [
    {
        name: 'Brendan',
        title: 'Marketing Director at StratIQ',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        quote: "We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us.",
        rating: 4,
    },
    {
        name: 'Lena M',
        title: 'Manager at NovaTech',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        quote: "Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We're already seeing results.",
        rating: 5,
    },
    {
        name: 'Eli R',
        title: 'COO at GridFrame',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        quote: "From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction.",
        rating: 4,
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`h-5 w-5 ${i < rating ? 'text-black' : 'text-gray-300'}`} />
        ))}
    </div>
);

const TestimonialsSection: React.FC = () => {
    return (
        <motion.section 
            id="testimonials"
            className="py-20 md:py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                        <span className="mr-2">💬</span>
                        TESTIMONIALS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real stories from partners who have transformed their businesses with us.
                    </p>
                </motion.div>

                <motion.div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8 max-w-6xl mx-auto" variants={itemVariants}>
                    <motion.div 
                        className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-center lg:col-span-3"
                        whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <p className="text-2xl text-gray-700 leading-relaxed">
                            Their <span className="text-black font-semibold">AI-driven approach</span> helped us reach the right audience and <span className="text-black font-semibold">grow faster</span> with smarter insights—streamlining our strategy, improving engagement, and <span className="text-black font-semibold">delivering results</span> we couldn't achieve before.
                        </p>
                        <span className="text-6xl text-gray-200 mt-6 self-start">”</span>
                    </motion.div>
                    <motion.div 
                        className="lg:col-span-2 rounded-3xl overflow-hidden"
                         whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <img src="https://images.unsplash.com/photo-1618151313441-37c78494de1c?q=80&w=1964&auto=format&fit=crop" alt="Client" className="object-cover w-full h-full min-h-[300px]" />
                    </motion.div>
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" variants={sectionVariants}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col"
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <StarRating rating={testimonial.rating} />
                            <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
                            <div className="flex items-center mt-auto">
                                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full mr-4 object-cover"/>
                                <div className="border-l border-gray-200 pl-4">
                                    <p className="font-semibold text-black">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;