import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import AnimatedSection from './AnimatedSection';
import TypewriterText from './TypewriterText';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // En mobile, mostrar contenido completo después de 50px de scroll
      if (window.innerWidth < 768) {
        setShowFullContent(scrollY > 50);
      } else {
        setShowFullContent(true);
      }
    };

    // Verificar estado inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-b from-caliz-plata to-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-negro/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6032500/pexels-photo-6032500.jpeg)'
          }}
          role="img"
          aria-label="Paisaje rural gallego con violonchelo, representando la conexión entre la tradición artesanal y la música"
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="typewriter" delay={500}>
            <TypewriterText 
              text={t.title}
              speed={80}
              delay={1000}
              className="text-4xl md:text-6xl mb-6 leading-tight"
            />
          </AnimatedSection>
          
          {/* Texto que aparece al hacer scroll en mobile */}
          <AnimatedSection animation="slideUp" delay={2000}>
            <div className={`transition-all duration-500 ${
              showFullContent 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4 md:opacity-100 md:translate-y-0'
            }`}>
              <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto opacity-90">
                {t.synopsis}
              </p>
            </div>
          </AnimatedSection>
          
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-500 ${
          showFullContent 
            ? 'opacity-0 md:opacity-70' 
            : 'opacity-70 md:opacity-70'
        }`}>
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Home;