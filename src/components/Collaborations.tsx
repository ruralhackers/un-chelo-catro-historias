import React from 'react';
import { Users, Heart, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { collaborations } from '../data/stories';

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
            Un proxecto desta magnitude só é posible grazas ao talento e dedicación 
            dun equipo multidisciplinario comprometido coa excelencia cultural.
          </p>
        </div>

        {/* Collaborations Grid - Layout 2-3-2 con 3 grids separados */}
        <div className="space-y-8 mb-16">
          {/* Primera fila: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborations.slice(0, 2).map((collaboration, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-caliz-plata">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-caliz-plata/30 rounded-full p-4 group-hover:bg-caliz-plata/50 transition-colors">
                      <Star size={32} className="text-mine-shaft" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-serif font-bold text-negro mb-2 group-hover:text-mine-shaft transition-colors">
                      {collaboration.name}
                    </h3>
                    {collaboration.role && (
                      <p className="text-roca font-sans font-medium mb-4">
                        {collaboration.role}
                      </p>
                    )}
                    {collaboration.description && (
                      <p className="text-sm text-mine-shaft mb-4 leading-relaxed">
                        {collaboration.description}
                      </p>
                    )}
                    {collaboration.website && (
                      <a 
                        href={collaboration.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                      >
                        Ver máis
                      </a>
                    )}
                    <div className="w-12 h-1 bg-mine-shaft rounded-full mx-auto group-hover:w-16 transition-all duration-300 mt-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.slice(2, 5).map((collaboration, index) => (
              <div key={index + 2} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-caliz-plata">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-caliz-plata/30 rounded-full p-4 group-hover:bg-caliz-plata/50 transition-colors">
                      <Star size={32} className="text-mine-shaft" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-serif font-bold text-negro mb-2 group-hover:text-mine-shaft transition-colors">
                      {collaboration.name}
                    </h3>
                    {collaboration.role && (
                      <p className="text-roca font-sans font-medium mb-4">
                        {collaboration.role}
                      </p>
                    )}
                    {collaboration.description && (
                      <p className="text-sm text-mine-shaft mb-4 leading-relaxed">
                        {collaboration.description}
                      </p>
                    )}
                    {collaboration.website && (
                      <a 
                        href={collaboration.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                      >
                        Ver máis
                      </a>
                    )}
                    <div className="w-12 h-1 bg-mine-shaft rounded-full mx-auto group-hover:w-16 transition-all duration-300 mt-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tercera fila: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborations.slice(5, 7).map((collaboration, index) => (
              <div key={index + 5} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-caliz-plata">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-caliz-plata/30 rounded-full p-4 group-hover:bg-caliz-plata/50 transition-colors">
                      <Star size={32} className="text-mine-shaft" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-serif font-bold text-negro mb-2 group-hover:text-mine-shaft transition-colors">
                      {collaboration.name}
                    </h3>
                    {collaboration.role && (
                      <p className="text-roca font-sans font-medium mb-4">
                        {collaboration.role}
                      </p>
                    )}
                    {collaboration.description && (
                      <p className="text-sm text-mine-shaft mb-4 leading-relaxed">
                        {collaboration.description}
                      </p>
                    )}
                    {collaboration.website && (
                      <a 
                        href={collaboration.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                      >
                        Ver máis
                      </a>
                    )}
                    <div className="w-12 h-1 bg-mine-shaft rounded-full mx-auto group-hover:w-16 transition-all duration-300 mt-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Collaborations;