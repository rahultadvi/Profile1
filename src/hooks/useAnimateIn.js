// hooks/useAnimateIn.js
import { useState, useEffect } from 'react';

export const useAnimateIn = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const fadeInUpClass = (customDelay = 0) =>
    `transition-all duration-700 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }` + (customDelay ? ` delay-${customDelay}` : '');

  return { isVisible, fadeInUpClass };
};