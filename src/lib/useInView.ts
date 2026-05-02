/**
 * Custom hook for detecting when elements come into view
 * Useful for scroll-triggered animations
 */

import { useEffect, useRef, useState } from "react";

export const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Optional: stop observing after first view for performance
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
};
