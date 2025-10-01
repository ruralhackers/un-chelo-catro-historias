import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { mainStories, additionalStories } from '../data/stories';
import { useStoryTranslations } from '../hooks/useStoryTranslations';

interface StoryModalProps {
  storyId: string;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ storyId, onClose }) => {
  const { t } = useLanguage();
  const { getStoryText } = useStoryTranslations();
  
  const allStories = [...mainStories, ...additionalStories];
  const story = allStories.find(s => s.id === storyId);
  const isAdditionalStory = additionalStories.some(s => s.id === storyId);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!story) {
    return null;
  }

  const bgClass = isAdditionalStory ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const accentClass = isAdditionalStory ? 'text-amber-300' : 'text-amber-700';

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`${bgClass} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
        {/* Header */}
        <div className="sticky top-0 bg-inherit p-6 border-b border-gray-200/20 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold">{story.name}</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full hover:bg-gray-100/10 transition-colors ${accentClass}`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="relative">
              <img
                src={story.image}
                alt={story.name}
                className={`w-full h-80 object-cover rounded-xl shadow-lg ${
                  isAdditionalStory ? 'grayscale' : ''
                }`}
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white p-3 rounded-lg shadow-lg">
                <p className="font-sans font-bold text-sm">{story.province}</p>
              </div>
            </div>

            <div>
              <div className={`inline-block px-4 py-2 rounded-full ${
                isAdditionalStory ? 'bg-amber-300 text-gray-900' : 'bg-amber-100 text-amber-800'
              } text-sm font-sans font-medium mb-6`}>
                {story.wood}
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg font-sans leading-relaxed mb-6">
                  {getStoryText(story, 'fullStory')}
                </p>
              </div>

              <div className={`border-l-4 ${
                isAdditionalStory ? 'border-amber-300' : 'border-amber-600'
              } pl-6 py-4`}>
                <blockquote className="text-lg font-serif italic opacity-90">
                  "{getStoryText(story, 'preview')}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`mt-12 p-6 rounded-xl ${
            isAdditionalStory ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <h3 className="text-xl font-serif font-bold mb-4">{t.storyModal.aboutWood}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className={`font-sans font-bold mb-2 ${accentClass}`}>{t.storyModal.type}</h4>
                <p className="font-sans">{story.wood}</p>
              </div>
              <div>
                <h4 className={`font-sans font-bold mb-2 ${accentClass}`}>{t.storyModal.origin}</h4>
                <p className="font-sans">{story.province}</p>
              </div>
              <div>
                <h4 className={`font-sans font-bold mb-2 ${accentClass}`}>{t.storyModal.artisan}</h4>
                <p className="font-sans">{story.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;