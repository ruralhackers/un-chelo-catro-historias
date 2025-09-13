import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'typewriter';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} ${durationClass} opacity-0`;
        case 'slideUp':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case 'slideDown':
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
        case 'slideLeft':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
        case 'slideRight':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
        case 'scale':
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        case 'typewriter':
          return `${baseClasses} ${durationClass} opacity-0`;
        default:
          return `${baseClasses} ${durationClass} opacity-0`;
      }
    } else {
      return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
  };

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
