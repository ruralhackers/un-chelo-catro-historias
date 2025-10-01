import React from 'react';
import { Collaboration } from '../types';
import { useStoryTranslations } from '../hooks/useStoryTranslations';
import { useLanguage } from '../context/LanguageContext';

interface CollaborationCardProps {
  collaboration: Collaboration;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({ collaboration }) => {
  const { getCollaborationDescription } = useStoryTranslations();
  const { t } = useLanguage();
  
  return (
    <div className="group cursor-pointer relative h-80 perspective-1000">
      {/* Flip Container */}
      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-x-180">
        {/* Front Side - Photo or Icon */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg bg-white">
          {collaboration.image ? (
            <>
              <img
                src={collaboration.image}
                alt={`${collaboration.name} - ${collaboration.role}`}
                className="w-full h-full object-cover"
                style={{ 
                  objectPosition: collaboration.name === 'Laura Calvo' 
                    ? 'center 10%' 
                    : 'center 30%' 
                }}
                loading="lazy"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-serif font-bold text-lg mb-1">{collaboration.name}</h3>
                {collaboration.role && (
                  <p className="text-sm font-sans opacity-90">{collaboration.role}</p>
                )}
              </div>
            </>
          ) : (
            /* Fallback to icon when no image */
            <div className="flex flex-col items-center justify-center h-full p-6">
              <div className="bg-caliz-plata/30 rounded-full p-6 mb-4 group-hover:bg-caliz-plata/50 transition-colors">
                <svg className="w-12 h-12 text-mine-shaft" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-negro mb-2 group-hover:text-mine-shaft transition-colors">
                {collaboration.name}
              </h3>
              {collaboration.role && (
                <p className="text-roca font-sans font-medium">{collaboration.role}</p>
              )}
            </div>
          )}
        </div>
        
        {/* Back Side - Content */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-x-180 rounded-2xl shadow-lg bg-white text-negro flex items-center justify-center p-6">
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold mb-3">{collaboration.name}</h3>
            {collaboration.role && (
              <div className="inline-block px-3 py-1 rounded-full text-xs font-sans font-medium mb-4 bg-caliz-plata/30 text-mine-shaft">
                {collaboration.role}
              </div>
            )}
            {getCollaborationDescription(collaboration) && (
              <p className="text-sm font-sans leading-relaxed mb-4">{getCollaborationDescription(collaboration)}</p>
            )}
            {collaboration.website && (
              <a 
                href={collaboration.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-700 text-sm font-medium"
              >
{t.collaborationCard.seeMore}
              </a>
            )}
            <div className="w-12 h-1 bg-mine-shaft rounded-full mx-auto group-hover:w-16 transition-all duration-300 mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCard;
