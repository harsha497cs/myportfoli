import { motion } from 'framer-motion';
// No icons needed for the refined version

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border border-white/10 p-12 md:p-20 backdrop-blur-sm text-center relative z-10"
                >
                    <h3 className="text-[10px] uppercase tracking-[0.5em] text-blue-400 mb-8 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Inquire
                    </h3>
                    <h2 className="text-5xl md:text-7xl font-medium text-white mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Let's start a <br /><span className="italic font-light">Conversation</span>
                    </h2>
                    <p className="text-gray-400 mb-16 max-w-lg mx-auto font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Currently open to new opportunities and global collaborations.
                        Reach out to discuss your next digital project.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 text-left max-w-2xl mx-auto">
                        <div className="group">
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Email</span>
                            <a href="mailto:harsha497cs@gmail.com" className="text-2xl text-white hover:text-blue-400 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                harsha497cs@gmail.com
                            </a>
                        </div>
                        <div className="group">
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Location</span>
                            <p className="text-2xl text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                Karnataka, India
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 pt-12 border-t border-white/5 text-gray-500 text-[10px] uppercase tracking-[0.3em]">
                        <p>Available for Worldwide Collaboration • 2026</p>
                    </div>
                </motion.div>
            </div>

            {/* Background decorative text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Reach
            </div>
        </section>
    );
};

export default Contact;
