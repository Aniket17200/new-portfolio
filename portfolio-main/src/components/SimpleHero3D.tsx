import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

function SimpleHero3D() {
  return (
    <motion.div
      className="w-full h-[500px] relative rounded-3xl overflow-hidden glass-effect glass-effect-dark shadow-glow-purple"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        backdropFilter: 'blur(8px)',
        willChange: 'transform',
      }}
    >
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ contain: 'layout style paint' }}>
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
            <div className="text-center">
              <div className="animate-pulse rounded-full h-16 w-16 bg-blue-200 dark:bg-blue-800 mx-auto mb-4"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Loading 3D Scene...</p>
            </div>
          </div>
        }>
          <Spline
            scene="https://prod.spline.design/RDbpkIpK-kbosnSg/scene.splinecode"
            style={{
              width: '120%',
              height: '120%',
              borderRadius: '1.5rem',
              transform: 'scale(0.8) translate(-10%, -10%)',
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          />
        </Suspense>
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <motion.div
          className="text-center glass-effect glass-effect-dark rounded-2xl p-4 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.p
            className="gradient-text font-bold text-xl mb-1"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Software Engineer
          </motion.p>
          <motion.p
            className="text-blue-600/80 dark:text-blue-400/80 font-medium text-sm"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            AI & Machine Learning
          </motion.p>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-blue-400/30 rounded-tl-lg z-10" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-purple-400/30 rounded-tr-lg z-10" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-purple-400/30 rounded-bl-lg z-10" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-blue-400/30 rounded-br-lg z-10" />
    </motion.div>
  );
}

export default SimpleHero3D;