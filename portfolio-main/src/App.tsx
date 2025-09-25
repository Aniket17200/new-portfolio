import { useState, lazy, Suspense } from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import Logo from './components/Logo';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const WorkExperience = lazy(() => import('./components/WorkExperience'));
const Projects = lazy(() => import('./components/Projects'));
const Research = lazy(() => import('./components/Research'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900' : 'bg-gradient-to-br from-white via-blue-50/20 to-white'}`}>
      <AnimatedBackground />
      
      {/* Enhanced Navigation */}
      <nav className="fixed w-full glass-effect glass-effect-dark backdrop-blur-xl z-50 py-3 border-b border-white/10 dark:border-gray-700/20">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo size="md" animated={true} />
            <span className="text-xl font-bold gradient-text">Aniket Gaikwad</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Experience', 'Projects', 'Research', 'Achievements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </button>
            <a
              href="https://github.com/Aniket17200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-gaikwad-804096234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:aniketgaikwad72002@gmail.com"
              className="p-3 rounded-xl glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-20 relative">
        <section id="hero">
          <Hero />
        </section>
        
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="animate-pulse text-blue-600 dark:text-blue-400">Loading...</div>
          </div>
        }>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <WorkExperience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="research">
            <Research />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative container mx-auto px-6 py-12 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Aniket Gaikwad</h3>
            <p className="text-blue-100">Software Engineer & AI Enthusiast</p>
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Aniket17200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-gaikwad-804096234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:aniketgaikwad72002@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          <div className="border-t border-white/20 pt-6">
            <p className="text-blue-100">© 2024 Aniket Gaikwad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;