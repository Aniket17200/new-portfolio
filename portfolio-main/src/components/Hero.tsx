import { ArrowRight, Download, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import SimpleHero3D from './SimpleHero3D';

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] flex items-center relative overflow-hidden py-8 sm:py-12">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 space-y-6 sm:space-y-8 text-center md:text-left"
        >
          {/* Profile Image with Enhanced Styling */}
          <motion.div
            className="relative w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src="https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1//aniket.jpg"
                alt="Aniket Gaikwad"
                className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white dark:border-purple-300 shadow-2xl mx-auto md:mx-0"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20" />
            </div>
          </motion.div>

          {/* Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Hi, I'm{' '}
              <motion.span
                className="gradient-text block md:inline"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Aniket Gaikwad
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Bridging AI & Reality: A Developer Crafting{' '}
              <span className="gradient-text font-semibold">Intelligent Solutions</span>
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href="https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1/newresume17.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View My Resume</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="https://github.com/Aniket17200"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 sm:gap-3 glass-effect glass-effect-dark border-2 border-blue-500/30 dark:border-purple-500/40 hover:border-blue-500/60 dark:hover:border-purple-400/70 text-blue-600 dark:text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-glow transition-all duration-300 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore GitHub</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced 3D Hero Section */}
        <motion.div
          className="hidden md:block relative z-10"
          initial={{ opacity: 0, x: 30, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <SimpleHero3D />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;