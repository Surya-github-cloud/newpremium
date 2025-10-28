
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatbotIcon, CloseIcon, FaqIcon, PhoneIcon, MartexIcon, UserIcon, SendIcon } from './Icons';

type View = 'menu' | 'chat' | 'faq' | 'callback';
type Message = {
    role: 'user' | 'model';
    text: string;
};

// --- FAQ Data ---
const faqs = [
    { q: "What services do you offer?", a: "We specialize in Website Development, AI Chatbots, Fashion & Brand Websites, UI/UX Design, and E-commerce Solutions." },
    { q: "What makes you different from other agencies?", a: "We focus on crafting immersive, intelligent, and interactive experiences. Our approach combines deep understanding of your goals with technical and creative excellence to deliver results that matter." },
    { q: "How long does a project typically take?", a: "Project timelines vary depending on the scope and complexity. We follow agile workflows to ensure faster delivery without compromising quality. Contact us for a detailed estimate for your project." },
    { q: "Do you offer website maintenance?", a: "Yes, we provide proactive support and maintenance services to keep your digital assets secure, updated, and performing at their peak." },
    { q: "Who is a good fit to work with you?", a: "We work best with serious founders who have a clear business idea, understand their target audience, and are committed to a collaborative and transparent partnership." }
];

interface ChatWidgetProps {
  onCalendarOpen?: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onCalendarOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<View>('menu');
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // --- State for Callback Form ---
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const [consent, setConsent] = useState(false);
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    // --- State for FAQ Search ---
    const [searchTerm, setSearchTerm] = useState('');

    // Set initial message for chat showcase
    useEffect(() => {
        if (isOpen && view === 'chat' && messages.length === 0) {
            setMessages([{ role: 'model', text: "Hello! I'm Martex AI. How can I help you today? (This is a UI demo)" }]);
        }
        // Reset chat when widget is closed
        if (!isOpen) {
            setMessages([]);
        }
    }, [isOpen, view]);


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        if (formSuccess) {
            const timer = window.setTimeout(() => {
                setFormSuccess('');
                setView('menu');
            }, 3000);
            return () => window.clearTimeout(timer);
        }
    }, [formSuccess]);


    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Simulate AI thinking and responding
        setTimeout(() => {
            const cannedResponse: Message = {
                role: 'model',
                text: "This is a simulated response. The live chat is currently for display purposes only."
            };
            setMessages(prev => [...prev, cannedResponse]);
            setIsLoading(false);
        }, 1500);
    };

    const handleCallbackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormError('');
        setFormSuccess('');

        // E.164 format validation
        const phoneRegex = /^\+[1-9]\d{1,14}$/;
        if (!name.trim()) {
            setFormError('Please enter your name.');
            return;
        }
        if (!phoneRegex.test(phone)) {
            setFormError('Please enter a valid phone number in E.164 format (e.g., +12125551234).');
            return;
        }
        if (!consent) {
            setFormError('You must consent to be contacted.');
            return;
        }

        // Simulate success
        console.log('Simulated call request submitted:', { name, phone, time });
        setFormSuccess('Thank you! We will call you back soon.');
        setName(''); setPhone(''); setTime(''); setConsent(false);
    };
    
    const filteredFaqs = faqs.filter(faq =>
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const MenuButton = ({ icon: Icon, text, onClick }: { icon: React.ElementType, text: string, onClick: () => void }) => (
        <button onClick={onClick} className="w-full flex items-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <Icon className="h-6 w-6 mr-4 text-gray-700" />
            <span className="font-semibold text-gray-800">{text}</span>
        </button>
    );

    const renderView = () => {
        switch (view) {
            case 'menu':
                return (
                    <div className="p-4 space-y-3">
                        <div className="text-center mb-4">
                            <h3 className="font-bold text-lg text-gray-900">Martex AI</h3>
                            <p className="text-sm text-gray-600">How can we assist you?</p>
                        </div>
                        <MenuButton icon={ChatbotIcon} text="Ask a question" onClick={() => setView('chat')} />
                        <MenuButton icon={FaqIcon} text="Search FAQs" onClick={() => setView('faq')} />
                        <MenuButton icon={PhoneIcon} text="Schedule Consultation" onClick={onCalendarOpen || (() => setView('callback'))} />
                    </div>
                );
            case 'chat':
                return (
                    <>
                        <div className="p-4 border-b border-gray-200">
                            <button onClick={() => setView('menu')} className="text-sm font-medium text-gray-600 hover:text-black mb-2">&larr; Back to menu</button>
                            <h3 className="font-bold text-lg text-gray-900">Chat with Martex AI</h3>
                        </div>
                        <div className="p-4 flex-grow overflow-y-auto space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'model' && <MartexIcon className="h-6 w-6 bg-gray-200 text-black rounded-full p-1 flex-shrink-0"/>}
                                    <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                                        msg.role === 'user' 
                                            ? 'bg-black text-white rounded-br-none' 
                                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                    }`}>
                                        {isLoading && index === messages.length -1 && msg.role === 'model' ? 
                                            <div className="flex items-center gap-1 py-1">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-0"></span>
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                                            </div> :
                                            msg.text
                                        }
                                    </div>
                                    {msg.role === 'user' && <UserIcon className="h-6 w-6 bg-gray-200 text-gray-500 rounded-full p-1 flex-shrink-0"/>}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                                disabled={isLoading}
                            />
                            <button type="submit" disabled={isLoading || !input.trim()} className="ml-3 p-2 bg-black rounded-full text-white disabled:bg-gray-300">
                                <SendIcon className="h-5 w-5" />
                            </button>
                        </form>
                    </>
                );
             case 'faq':
                return (
                    <>
                        <div className="p-4 border-b border-gray-200">
                            <button onClick={() => setView('menu')} className="text-sm font-medium text-gray-600 hover:text-black mb-2">&larr; Back to menu</button>
                            <h3 className="font-bold text-lg text-gray-900">FAQs</h3>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Search FAQs..."
                                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>
                        <div className="p-4 flex-grow overflow-y-auto space-y-4">
                            {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => (
                                <details key={index} className="group">
                                    <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                                        {faq.q}
                                        <span className="transform transition-transform duration-200 group-open:rotate-180">&darr;</span>
                                    </summary>
                                    <p className="text-gray-600 text-sm mt-2">{faq.a}</p>
                                </details>
                            )) : <p className="text-center text-gray-500">No results found.</p>}
                        </div>
                    </>
                );
            case 'callback':
                 return (
                    <>
                        <div className="p-4 border-b border-gray-200">
                            <button onClick={() => setView('menu')} className="text-sm font-medium text-gray-600 hover:text-black mb-2">&larr; Back to menu</button>
                            <h3 className="font-bold text-lg text-gray-900">Request a Callback</h3>
                            <p className="text-sm text-gray-600">Fill out the form and we'll call you back.</p>
                        </div>
                        <form onSubmit={handleCallbackSubmit} className="p-4 flex-grow overflow-y-auto space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (E.164 format)</label>
                                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+12125551234" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black" />
                            </div>
                            <div>
                                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Preferred Time (Optional)</label>
                                <input type="text" id="time" value={time} onChange={e => setTime(e.target.value)} placeholder="e.g., Weekday Afternoons" className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black" />
                            </div>
                             <div className="flex items-start">
                                <input id="consent" name="consent" type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black mt-0.5" />
                                <label htmlFor="consent" className="ml-2 block text-xs text-gray-700">I consent to being contacted at this number.</label>
                            </div>
                            {formError && <p className="text-xs text-red-600">{formError}</p>}
                            {formSuccess && <p className="text-xs text-green-600">{formSuccess}</p>}
                            <button type="submit" disabled={!consent} className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md shadow-sm hover:bg-gray-800 disabled:bg-gray-300">Submit Request</button>
                        </form>
                    </>
                );
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isOpen ? 'close' : 'chat'}
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <CloseIcon className="h-6 w-6" /> : <ChatbotIcon className="h-6 w-6" />}
                        </motion.div>
                    </AnimatePresence>
                </motion.button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden origin-bottom-right"
                    >
                        {renderView()}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;