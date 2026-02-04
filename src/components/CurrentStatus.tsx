import { motion } from 'framer-motion';

const CurrentStatus = () => {
    return (
        <section id="status" className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex-1"
                    >
                        <h3 className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-8 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Current Focus
                        </h3>
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-3xl font-medium text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                    Final Year Project
                                </h4>
                                <p className="text-gray-400 font-light leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Dedicated to architecting a robust graduation project with a focus on
                                    scalable backend systems and interactive frontend components.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-medium text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                    Diploma Full-Stack
                                </h4>
                                <p className="text-gray-400 font-light leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Currently deep-diving into the nuances of full-cycle development,
                                    bridging the gap between complex Java backends and modern React interfaces.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle background number like in luxury sites */}
            <div className="absolute -bottom-20 -right-20 text-[20rem] font-bold text-white/5 pointer-events-none select-none" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                26
            </div>
        </section>
    );
};

export default CurrentStatus;
