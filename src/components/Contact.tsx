import React from 'react';
import { Mail, Phone, MapPin, Calendar, Users, Music } from 'lucide-react';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-white to-caliz-plata/10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-serif text-negro mb-6">
            Contacto
          </h2>
          <p className="text-lg font-sans text-mine-shaft max-w-3xl mx-auto leading-relaxed">
            ¿Queres que o equipo de Chelo Catro Historias vaia á túa organización? 
            Estamos dispostos a levar a nosa historia e música a calquera lugar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-caliz-plata/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-caliz-plata" />
            </div>
            <h3 className="text-xl font-serif font-bold text-negro mb-4">Charlas e Mesas Redondas</h3>
            <p className="font-sans text-mine-shaft">
              Compartimos a nosa experiencia e coñecemento sobre a artesanía e cultura galega
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-caliz-plata/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Music size={32} className="text-caliz-plata" />
            </div>
            <h3 className="text-xl font-serif font-bold text-negro mb-4">Conciertos e Demostracións</h3>
            <p className="font-sans text-mine-shaft">
              Mostramos o chelo en acción e interpretamos pezas da tradición musical galega
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="bg-caliz-plata/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calendar size={32} className="text-caliz-plata" />
            </div>
            <h3 className="text-xl font-serif font-bold text-negro mb-4">Eventos Personalizados</h3>
            <p className="font-sans text-mine-shaft">
              Adaptamos a nosa presentación ás necesidades específicas do teu evento
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-negro mb-6">
              Póñete en contacto con nós
            </h2>
            <p className="text-lg font-sans text-mine-shaft max-w-2xl mx-auto">
              Estamos abertos a colaboracións con centros culturais, escolas, universidades, 
              asociacións e calquera organización que queira coñecer a nosa historia.
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
                  <h3 className="text-lg font-serif font-bold text-negro mb-1">Email</h3>
                  <p className="font-sans text-mine-shaft">info@chelocatrohistorias.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-caliz-plata/30 rounded-full p-3">
                  <Phone size={24} className="text-caliz-plata" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-negro mb-1">Teléfono</h3>
                  <p className="font-sans text-mine-shaft">+34 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-caliz-plata/30 rounded-full p-3">
                  <MapPin size={24} className="text-caliz-plata" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-negro mb-1">Localización</h3>
                  <p className="font-sans text-mine-shaft">Galicia, España</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col justify-center">
              <div className="bg-caliz-plata/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-negro mb-4">
                  ¿Tés un proxecto en mente?
                </h3>
                <p className="font-sans text-mine-shaft mb-6">
                  Non dubides en contactar con nós. Estaremos encantados de falar contigo 
                  sobre como podemos colaborar no teu evento.
                </p>
                <a 
                  href="mailto:info@chelocatrohistorias.com"
                  className="inline-block bg-caliz-plata text-negro px-8 py-3 rounded-full font-sans font-bold hover:bg-white transition-colors duration-300"
                >
                  Enviar Mensaxe
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
