import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Documentary: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="documentary" className="min-h-screen bg-white text-negro py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl mb-6 text-negro">
            {t.documentaryTitle}
          </h2>
          <p className="text-lg font-sans text-mine-shaft max-w-3xl mx-auto leading-relaxed">
            {t.documentaryDescription}
          </p>
        </div>

        {/* Main Video Section */}
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-caliz-plata">
            <div className="aspect-w-16 aspect-h-9 h-[600px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/yHwthqyMGI8"
                title={t.documentaryTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Documentary Team Credits */}
        <div className="bg-caliz-plata/10 rounded-2xl p-8">
          <h3 className="text-2xl font-serif text-negro mb-6 text-center">
            {t.documentaryTeam.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="font-serif font-bold text-negro mb-2">Arián Quinteiro</h4>
              <p className="text-sm text-roca mb-2">{t.documentaryTeam.roles.direction}</p>
              <a href="https://arianquinteiro.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 text-sm">
                arianquinteiro.com
              </a>
            </div>
            <div className="text-center">
              <h4 className="font-serif font-bold text-negro mb-2">Borja Freire</h4>
              <p className="text-sm text-roca mb-2">{t.documentaryTeam.roles.soundPost}</p>
              <a href="https://www.borjafreiresonido.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 text-sm">
                borjafreiresonido.com
              </a>
            </div>
            <div className="text-center">
              <h4 className="font-serif font-bold text-negro mb-2">Martín F. Gamarra</h4>
              <p className="text-sm text-roca mb-2">{t.documentaryTeam.roles.editing}</p>
              <a href="https://martinfgamarra.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 text-sm">
                martinfgamarra.com
              </a>
            </div>
            <div className="text-center">
              <h4 className="font-serif font-bold text-negro mb-2">Thomas Schwarz</h4>
              <p className="text-sm text-roca mb-2">{t.documentaryTeam.roles.secondCamera}</p>
              <a href="https://www.instagram.com/thomasinho.schwarz/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 text-sm">
                @thomasinho.schwarz
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Documentary;