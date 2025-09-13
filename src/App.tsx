import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import MainStories from './components/MainStories';
import AdditionalStories from './components/AdditionalStories';
import Documentary from './components/Documentary';
import Collaborations from './components/Collaborations';
import Contact from './components/Contact';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation
          onScrollToSection={scrollToSection}
        />
        <main>
          <Home />
          <MainStories />
          <AdditionalStories />
          <Documentary />
          <Collaborations />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;