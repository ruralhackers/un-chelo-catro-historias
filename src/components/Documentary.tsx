import React from 'react';
import { Play, Film } from 'lucide-react';
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
            O proceso de creación do chelo documentado en toda a súa extensión. 
            Desde os bosques ata o taller, cada paso da xornada creativa.
          </p>
        </div>

        {/* Main Video Section */}
        <div className="mb-16">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-caliz-plata">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-amber-100 to-amber-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-amber-600/20 backdrop-blur-sm rounded-full p-6 mb-4 mx-auto w-fit">
                  <Play size={48} className="text-amber-600" />
                </div>
                <p className="text-lg font-sans text-mine-shaft">
                  Documental principal - Próximamente
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Documentary;