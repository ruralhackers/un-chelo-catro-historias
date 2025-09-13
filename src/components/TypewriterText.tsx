import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  threshold?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  threshold = 0.1,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold });

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText('');
      setCurrentIndex(0);
      return;
    }

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, isVisible]);

  return (
    <div ref={ref} className={className}>
      {displayedText}
      {isVisible && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};

export default TypewriterText;
