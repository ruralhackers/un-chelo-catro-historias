export interface Story {
  id: string;
  name: string;
  wood: string;
  province: string;
  preview: string;
  fullStory: string;
  image: string;
}

export interface Collaboration {
  name: string;
  role?: string;
}

export type Language = 'gl' | 'es' | 'en';

export interface TranslationContent {
  title: string;
  synopsis: string;
  navigation: {
    home: string;
    mainStories: string;
    additionalStories: string;
    documentary: string;
    collaborations: string;
  };
  mainStoriesTitle: string;
  additionalStoriesTitle: string;
  documentaryTitle: string;
  collaborationsTitle: string;
  readMore: string;
  backToHome: string;
}