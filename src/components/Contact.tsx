import React from 'react';
import { Mail, Phone, MapPin, Calendar, Users, Music } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-white to-caliz-plata/10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-serif text-negro mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg font-sans text-mine-shaft max-w-3xl mx-auto leading-relaxed">
            {t.contact.intro}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-caliz-plata/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-caliz-plata" />
            </div>
            <h3 className="text-xl font-serif font-bold text-negro mb-4">{t.contact.services.talks.title}</h3>
            <p className="font-sans text-mine-shaft">
              {t.contact.services.talks.description}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-caliz-plata/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Music size={32} className="text-caliz-plata" />
            </div>
            <h3 className="text-xl font-serif font-bold text-negro mb-4">{t.contact.services.concerts.title}</h3>
            <p className="font-sans text-mine-shaft">
              {t.contact.services.concerts.description}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-caliz-plata/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calendar size={32} className="text-caliz-plata" />
            </div>
            <h3 className="text-xl font-serif font-bold text-negro mb-4">{t.contact.services.events.title}</h3>
            <p className="font-sans text-mine-shaft">
              {t.contact.services.events.description}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-negro mb-6">
              {t.contact.contactUs.title}
            </h2>
            <p className="text-lg font-sans text-mine-shaft max-w-2xl mx-auto">
              {t.contact.contactUs.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="bg-caliz-plata/30 rounded-full p-3">
                  <Mail size={24} className="text-caliz-plata" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-negro mb-1">{t.contact.contactInfo.email}</h3>
                  <p className="font-sans text-mine-shaft">info@chelocatrohistorias.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-caliz-plata/30 rounded-full p-3">
                  <Phone size={24} className="text-caliz-plata" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-negro mb-1">{t.contact.contactInfo.phone}</h3>
                  <p className="font-sans text-mine-shaft">+34 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-caliz-plata/30 rounded-full p-3">
                  <MapPin size={24} className="text-caliz-plata" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-negro mb-1">{t.contact.contactInfo.location}</h3>
                  <p className="font-sans text-mine-shaft">Galicia, España</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col justify-center">
              <div className="bg-caliz-plata/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-negro mb-4">
                  {t.contact.cta.title}
                </h3>
                <p className="font-sans text-mine-shaft mb-6">
                  {t.contact.cta.description}
                </p>
                <a 
                  href="mailto:info@chelocatrohistorias.com"
                  className="inline-block bg-caliz-plata text-negro px-8 py-3 rounded-full font-sans font-bold hover:bg-white transition-colors duration-300"
                >
                  {t.contact.cta.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
