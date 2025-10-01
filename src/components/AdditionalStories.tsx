import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { additionalStories } from '../data/stories';
import StoryCard from './StoryCard';
import StoryModal from './StoryModal';
import AnimatedSection from './AnimatedSection';

const AdditionalStories: React.FC = () => {
  const { t } = useLanguage();
  const [selectedStory, setSelectedStory] = React.useState<string | null>(null);

  return (
    <section id="additional-stories" className="min-h-screen bg-gris-bacalao text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="slideUp" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              {t.additionalStoriesTitle}
            </h2>
            <p className="text-lg font-sans text-caliz-plata max-w-3xl mx-auto leading-relaxed">
              {t.additionalStoriesIntro}
            </p>
          </div>
        </AnimatedSection>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {additionalStories.map((story, index) => (
            <AnimatedSection 
              key={story.id}
              animation="scale" 
              delay={index * 150}
            >
              <StoryCard
                story={story}
                onClick={() => setSelectedStory(story.id)}
                isDark={true}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom section */}
        <AnimatedSection animation="slideUp" delay={800}>
          <div className="text-center bg-mine-shaft rounded-2xl p-12">
            <h2 className="text-3xl font-serif mb-6">
              {t.additionalStoriesVoices.title}
            </h2>
            <p className="text-lg font-sans text-caliz-plata max-w-3xl mx-auto leading-relaxed">
              {t.additionalStoriesVoices.description}
            </p>
          </div>
        </AnimatedSection>
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

export default AdditionalStories;