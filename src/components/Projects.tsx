import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A modern portfolio website showcasing front-end development skills with sections for projects, tech stack, and contact information.',
        tags: ['React', 'Portfolio', 'Vercel'],
        features: ['Responsive Design', 'Interactive UI', 'Project Showcase'],
        link: 'https://myapp-lilac-beta.vercel.app/',
        github: '#',
        image: '/project-portfolio-harsha.png'
    },
    {
        title: 'Triyatri Auto Booking',
        description: 'An automated booking platform for seamless travel and transport management.',
        tags: ['React', 'Auto-Booking', 'Vercel'],
        features: ['Automated Scheduling', 'Real-time Availability', 'Responsive Design'],
        link: 'https://triyatri-auto-booking.vercel.app/',
        github: '#',
        image: '/project-triyatri.png'
    },
    {
        title: 'SDM Polytechnic',
        description: 'A comprehensive web portal for SDM Polytechnic, providing students and faculty with easy access to institutional information and resources.',
        tags: ['React', 'Education', 'Vercel'],
        features: ['Institutional Info', 'Resource Management', 'Responsive UI'],
        link: 'https://sdmpcollegewebsite.vercel.app/',
        github: '#',
        image: '/project-sdm.png'
    },
    {
        title: 'Annual Sports Meet 2026',
        description: 'A comprehensive platform for managing and showcasing the SDM Polytechnic Annual Sports Meet, including game schedules and athlete registration.',
        tags: ['React', 'Sports Management', 'Vercel'],
        features: ['Games Schedule', 'Player Registration', 'Real-time Updates'],
        link: 'https://sdmcollegeevent.vercel.app/',
        github: '#',
        image: '/project-sports.png'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-xs uppercase tracking-[0.4em] text-blue-400 mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                        My Projects
                    </h3>
                    <h2 className="text-5xl md:text-6xl font-medium text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Selected Works
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative mb-6 overflow-hidden aspect-[16/9] bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-sm z-10">
                                    <div className="flex gap-4">
                                        <a href={project.github} className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"><Github size={20} /></a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                                {/* Project image or gradient placeholder */}
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                                )}
                            </div>

                            <div className="flex justify-between items-end mb-4">
                                <h3 className="text-3xl font-medium text-white group-hover:text-blue-400 transition-all duration-300" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm line-clamp-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {project.description}
                            </p>

                            <div className="h-px w-0 group-hover:w-full bg-blue-500/30 transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
