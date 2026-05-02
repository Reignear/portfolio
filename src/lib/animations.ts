/**
 * Animation variants for Framer Motion
 * Centralized, reusable animation definitions for consistent, performant animations
 */

export const pageVariants = {
  // Full page fade-in transition
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Staggered container for lists/grids
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Staggered child items
export const staggerChild = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Hover effects
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

export const hoverLift = {
  whileHover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
    },
  },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)",
    transition: {
      duration: 0.3,
    },
  },
};

// Icon hover animations
export const iconHover = {
  initial: { rotate: 0, scale: 1 },
  whileHover: {
    rotate: 12,
    scale: 1.15,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Button animations
export const buttonHover = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
  whileTap: {
    scale: 0.98,
  },
};

// Subtle pulse animation
export const pulse = {
  initial: { opacity: 1 },
  animate: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Badge/label entrance
export const badgeSlide = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Scroll animation - triggered by InView
export const scrollReveal = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
