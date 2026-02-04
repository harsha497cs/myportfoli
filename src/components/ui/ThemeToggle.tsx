import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-8 right-8 z-50 p-3 rounded-full border border-white/10 bg-black/20 backdrop-blur-md hover:bg-white/10 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400 group-hover:rotate-90 transition-transform duration-500" />
            ) : (
                <Moon size={20} className="text-blue-400 group-hover:-rotate-90 transition-transform duration-500" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
