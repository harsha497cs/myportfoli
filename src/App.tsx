import EarthBackground from './components/ui/EarthBackground';
import ThemeToggle from './components/ui/ThemeToggle';
import Hero from './components/Hero';
import CurrentStatus from './components/CurrentStatus';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="relative text-white font-sans selection:bg-blue-500/30">
      <EarthBackground />
      <ThemeToggle />

      <div className="relative z-10 flex flex-col gap-0 pb-20">
        <Hero />
        <CurrentStatus />
        <TechStack />
        <Projects />
        <Contact />

        <footer className="py-8 text-center text-gray-400 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Harsha P. Built with React & Antigravity.</p>
        </footer>
      </div>
    </main>
  );
}

export default App;
