import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', animated = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const LogoSVG = () => (
    <svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#gradient1)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={animated ? { 
          pathLength: 1, 
          rotate: 360 
        } : { pathLength: 1 }}
        transition={{
          pathLength: { duration: 2, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />
      
      {/* Inner Hexagon */}
      <motion.path
        d="M50 15 L75 30 L75 60 L50 75 L25 60 L25 30 Z"
        stroke="url(#gradient2)"
        strokeWidth="2"
        fill="url(#gradient3)"
        initial={{ pathLength: 0, scale: 0 }}
        animate={animated ? { 
          pathLength: 1, 
          scale: 1 
        } : { pathLength: 1, scale: 1 }}
        transition={{
          pathLength: { duration: 1.5, delay: 0.5, ease: "easeInOut" },
          scale: { duration: 0.8, delay: 0.3, ease: "backOut" }
        }}
      />
      
      {/* Center Code Symbol */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={animated ? { 
          opacity: 1, 
          scale: 1 
        } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
      >
        {/* Left Bracket */}
        <path
          d="M35 35 L30 40 L30 50 L35 55"
          stroke="url(#gradient4)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Right Bracket */}
        <path
          d="M65 35 L70 40 L70 50 L65 55"
          stroke="url(#gradient4)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Center Slash */}
        <path
          d="M45 35 L55 55"
          stroke="url(#gradient4)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </motion.g>
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        
        <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
        </radialGradient>
        
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer"
      >
        <LogoSVG />
      </motion.div>
    );
  }

  return <LogoSVG />;
};

export default Logo;