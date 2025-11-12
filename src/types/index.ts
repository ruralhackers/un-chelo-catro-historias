export interface Story {
  id: string;
  name: string;
  wood: string;
  province: string;
  preview: Record<Language, string>;
  fullStory: Record<Language, string>;
  image: string;
  website?: string;
}

export interface Collaboration {
  name: string;
  role?: string;
  description?: Record<Language, string>;
  website?: string;
  image?: string;
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
  languageLabels: {
    galego: string;
    español: string;
    english: string;
  };
  mainStoriesTitle: string;
  mainStoriesIntro: string;
  mainStoriesSubtext: string;
  mainStoriesHarmony: {
    title: string;
    description: string;
  };
  additionalStoriesTitle: string;
  additionalStoriesIntro: string;
  additionalStoriesVoices: {
    title: string;
    description: string;
  };
  documentaryTitle: string;
  documentaryDescription: string;
  documentaryTeam: {
    title: string;
    roles: {
      direction: string;
      soundPost: string;
      editing: string;
      secondCamera: string;
    };
  };
  collaborationsTitle: string;
  collaborationsIntro: string;
  contact: {
    title: string;
    intro: string;
    services: {
      talks: {
        title: string;
        description: string;
      };
      concerts: {
        title: string;
        description: string;
      };
      events: {
        title: string;
        description: string;
      };
    };
    contactUs: {
      title: string;
      description: string;
    };
    contactInfo: {
      email: string;
      phone: string;
      location: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };
  storyModal: {
    aboutWood: string;
    type: string;
    origin: string;
    artisan: string;
  };
  collaborationCard: {
    seeMore: string;
  };
  readMore: string;
  backToHome: string;
}