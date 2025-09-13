import { useEffect, useState } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  offset?: number;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', offset = 0 } = options;
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const multiplier = direction === 'up' ? -1 : 1;
      setOffsetY(scrollY * speed * multiplier + offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, offset]);

  return offsetY;
};

export default useParallax;
