import { motion } from 'framer-motion';

const skills = [
    { name: 'Java', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Spring Security', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3', category: 'Frontend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Docker', category: 'Cloud/DevOps' },
    { name: 'GitHub Actions', category: 'Cloud/DevOps' },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24 px-6 bg-white/[0.01]">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Expertise
                    </h3>
                    <h2 className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Technical Stack
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group cursor-default"
                        >
                            <span className="text-xs text-blue-400/50 block mb-2 font-mono">{String(index + 1).padStart(2, '0')}</span>
                            <h4 className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                {skill.name}
                            </h4>
                            <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-blue-400/60 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {skill.category}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
