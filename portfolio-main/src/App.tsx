import { useState, lazy, Suspense } from 'react';
import { Github, Linkedin, Mail, Moon, Sun, Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'dark bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800' : 'bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20'} ${mobileMenuOpen ? 'overflow-hidden lg:overflow-auto' : ''}`}>
      <AnimatedBackground />

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Enhanced Navigation */}
      <nav className="fixed w-full glass-effect glass-effect-dark backdrop-blur-xl z-50 py-2 sm:py-3 border-b border-white/20 dark:border-purple-500/20">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <Logo size="md" animated={true} />
            <span className="text-lg sm:text-xl font-bold gradient-text">Aniket Gaikwad</span>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {['About', 'Experience', 'Projects', 'Research', 'Achievements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
            {/* Desktop Social Icons */}
            <div className="hidden lg:flex items-center gap-2">
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

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="lg:hidden p-2 rounded-lg glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 glass-effect glass-effect-dark backdrop-blur-xl border-t border-white/20 dark:border-purple-500/30 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          }`}>
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 gap-3">
              {['About', 'Experience', 'Projects', 'Research', 'Achievements', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/20 dark:hover:bg-purple-900/30 hover:shadow-glow"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex justify-center gap-4 mt-6 pt-4 border-t border-white/20 dark:border-purple-500/30">
              <a
                href="https://github.com/Aniket17200"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
              >
                <Github className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-gaikwad-804096234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:aniketgaikwad72002@gmail.com"
                className="p-2 rounded-lg glass-effect glass-effect-dark hover:shadow-glow transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 relative">
        <section id="hero">
          <Hero />
        </section>

        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="animate-pulse text-blue-600 dark:text-purple-300 font-semibold">Loading...</div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-slate-800 dark:via-purple-800 dark:to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Aniket Gaikwad</h3>
            <p className="text-blue-100 text-sm sm:text-base">Software Engineer & AI Enthusiast</p>
          </div>
          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
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
          <div className="border-t border-white/30 dark:border-purple-300/30 pt-4 sm:pt-6">
            <p className="text-blue-100 dark:text-purple-100 text-sm sm:text-base">© 2024 Aniket Gaikwad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;