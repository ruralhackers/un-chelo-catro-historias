import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

interface NavigationProps {
  onScrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection }) => {
  const { language, setLanguage } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = React.useState(false);

 
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLanguageDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('.language-dropdown')) {
          setIsLanguageDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageDropdownOpen]);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'gl', label: 'Galego', flag: '🏴󠁥󠁳󠁧󠁡󠁿' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' }
  ];


  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
  };

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-caliz-plata z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div 
            className="text-xl font-bold text-negro cursor-pointer hover:text-mine-shaft transition-colors"
            onClick={() => handleNavClick('home')}
          >
            <span className="hidden sm:inline">Un chelo, catro historias</span>
            <span className="sm:hidden">UC4H</span>
          </div>


          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            {/* Custom Language Selector */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-roca bg-white border border-caliz-plata rounded-lg hover:bg-caliz-plata/10 focus:outline-none focus:ring-2 focus:ring-mine-shaft focus:border-transparent transition-all duration-200"
              >
                <span className="text-lg">{currentLanguage?.flag}</span>
                <span>{currentLanguage?.label}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-caliz-plata rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-sm text-left hover:bg-caliz-plata/10 transition-colors duration-150 ${
                          language === lang.code ? 'bg-caliz-plata/20 text-mine-shaft' : 'text-roca'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.label}</span>
                        {language === lang.code && (
                          <svg className="w-4 h-4 ml-auto text-mine-shaft" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>  
        </div>

      </div>
    </nav>
  );
};

export default Navigation;