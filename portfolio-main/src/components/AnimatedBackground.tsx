import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    const debouncedResize = debounce(updateDimensions, 250);
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  // Reduced and optimized elements for better performance
  const orbs = useMemo(() => 
    Array.from({ length: 2 }, (_, index) => ({
      id: index,
      background: index === 0 
        ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 80%)'
        : 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 80%)',
      size: 250 + index * 100,
      duration: 30 + index * 10,
    })), []
  );

  const particles = useMemo(() => 
    Array.from({ length: 4 }, (_, index) => ({
      id: index,
      size: 2,
      duration: 6,
      delay: 0,
    })), []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Optimized Gradient Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl gpu-accelerated"
          style={{
            background: orb.background,
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            x: [
              dimensions.width * 0.1,
              dimensions.width * 0.9,
              dimensions.width * 0.1,
            ],
            y: [
              dimensions.height * 0.2,
              dimensions.height * 0.8,
              dimensions.height * 0.2,
            ],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Optimized Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/15 gpu-accelerated"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${20 + particle.id * 10}%`,
            top: `${30 + (particle.id % 2) * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Simplified Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </div>
  );
};

// Debounce utility function
function debounce(func: Function, wait: number) {
  let timeout: number;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
  };
}

export default AnimatedBackground;