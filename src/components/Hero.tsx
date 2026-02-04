import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-xs md:text-sm font-medium text-blue-400 uppercase tracking-[0.6em] mb-8 opacity-80" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Building the Digital Future
                    </h2>
                    <h1 className="text-6xl md:text-[7rem] font-medium mb-12 leading-[1.1] tracking-tight text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-blue-500/50">
                            Harsha P
                        </span>
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1.5 }}
                        className="max-w-2xl mx-auto mb-16"
                    >
                        <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                            A Full Stack Java Developer dedicated to creating
                            seamless, global-scale web experiences with precision and passion.
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <a href="#projects" className="group relative px-10 py-4 rounded-full bg-white text-black font-medium overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <span className="relative z-10">Explore Projects</span>
                        </a>
                        <a href="#contact" className="px-10 py-4 rounded-full border border-white/10 hover:border-white/20 text-white font-light transition-all backdrop-blur-sm tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Get in Touch
                        </a>
                    </div>
                </motion.div>

                {/* Decorative text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className="absolute bottom-12 left-12 hidden lg:block text-[9px] uppercase tracking-[0.8em] text-gray-500 vertical-text"
                    style={{ writingMode: 'vertical-rl', fontFamily: "'Inter', sans-serif" }}
                >
                    Sandhill Inspired Design • 2026
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
