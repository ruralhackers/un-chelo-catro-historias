import React from 'react';
import { Story } from '../types';
import { useStoryTranslations } from '../hooks/useStoryTranslations';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
  isDark?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onClick, isDark = false }) => {
  const { getStoryText } = useStoryTranslations();

  return (
    <div
      className="group cursor-pointer relative h-96 perspective-1000"
      onClick={onClick}
    >
      {/* Flip Container */}
      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
        {/* Front Side - Photo */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
          <img
            src={story.image}
            alt={`${story.name} - Artesano especializado en ${story.wood} de ${story.province}, Galicia`}
            className={`w-full h-full object-cover ${isDark ? 'grayscale' : ''
              }`}
            loading="lazy"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="font-serif font-bold text-lg mb-1">{story.name}</h3>
            <p className="text-sm font-sans opacity-90">{story.wood}</p>
          </div>
        </div>

        {/* Back Side - Content */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg shadow-lg ${isDark
            ? 'bg-white text-negro'
            : 'bg-white text-negro'
          } flex items-center justify-center p-6`}>
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold mb-3">{story.name}</h3>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-sans font-medium mb-4 ${isDark ? 'bg-caliz-plata text-negro' : 'bg-caliz-plata/30 text-mine-shaft'
              }`}>
              {story.wood ? story.wood + ' - ' : ''}  {story.province}
            </div>
            <p className="text-sm font-sans leading-relaxed">{getStoryText(story, 'preview')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;