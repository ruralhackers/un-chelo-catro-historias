import { useLanguage } from '../context/LanguageContext';
import { Story, Collaboration } from '../types';

export const useStoryTranslations = () => {
  const { language } = useLanguage();

  const getStoryText = (story: Story, field: 'preview' | 'fullStory'): string => {
    return story[field][language];
  };

  const getCollaborationDescription = (collaboration: Collaboration): string | undefined => {
    if (!collaboration.description) return undefined;
    return collaboration.description[language];
  };

  return {
    getStoryText,
    getCollaborationDescription,
    language
  };
};
