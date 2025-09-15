import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { mainStories } from '../data/stories';
import StoryCard from './StoryCard';
import StoryModal from './StoryModal';

const MainStories: React.FC = () => {
  const { t } = useLanguage();
  const [selectedStory, setSelectedStory] = React.useState<string | null>(null);

  return (
    <section id="main-stories" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-negro mb-6">
            {t.mainStoriesTitle}
          </h2>
          <p className="text-lg font-sans text-roca max-w-3xl mx-auto leading-relaxed mb-8">
            {t.mainStoriesIntro}
          </p>
          <p className="text-lg font-sans text-roca max-w-3xl mx-auto leading-relaxed">
            Catro provincias, catro madeiras, catro historias que se unen nun só instrumento. 
            Cada artesán achega a súa experiencia e a esencia da súa terra.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onClick={() => setSelectedStory(story.id)}
              isDark={false}
            />
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center bg-caliz-plata/20 rounded-2xl p-12">
          <h2 className="text-3xl font-serif text-negro mb-6">
            A harmonía das madeiras
          </h2>
          <p className="text-lg font-sans text-mine-shaft max-w-3xl mx-auto leading-relaxed">
            Cada madeira seleccionada non só aporta as súas propiedades acústicas únicas, 
            senón tamén a historia e tradición dos seus artesáns. Xuntas, crean un instrumento 
            que representa a diversidade e riqueza cultural de toda Galicia.
          </p>
        </div>
      </div>

      {selectedStory && (
        <StoryModal
          storyId={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </section>
  );
};

export default MainStories;