import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { collaborations } from '../data/stories';
import CollaborationCard from './CollaborationCard';

const Collaborations: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="collaborations" className="min-h-screen bg-gradient-to-br from-negro to-gris-bacalao text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            {t.collaborationsTitle}
          </h2>
          <p className="text-lg font-sans text-caliz-plata max-w-3xl mx-auto leading-relaxed">
            {t.collaborationsIntro}
          </p>
        </div>

        {/* Collaborations Grid - Layout 2-3-2 con 3 grids separados */}
        <div className="space-y-8 mb-16">
          {/* Primera fila: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborations.slice(0, 2).map((collaboration, index) => (
              <CollaborationCard key={index} collaboration={collaboration} />
            ))}
          </div>

          {/* Segunda fila: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.slice(2, 5).map((collaboration, index) => (
              <CollaborationCard key={index + 2} collaboration={collaboration} />
            ))}
          </div>

          {/* Tercera fila: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborations.slice(5, 7).map((collaboration, index) => (
              <CollaborationCard key={index + 5} collaboration={collaboration} />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Collaborations;