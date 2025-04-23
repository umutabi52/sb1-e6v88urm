import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 md:pt-0"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professionelle Reinigungsdienstleistungen für Ihr Zuhause & Büro
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Wir bieten maßgeschneiderte Reinigungslösungen, die Ihren Raum 
            strahlend sauber und einladend machen. Verlassen Sie sich auf unser 
            erfahrenes Team für zuverlässige und gründliche Reinigungsservices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center justify-center transition-colors text-lg font-medium"
            >
              Kostenlos anfragen
              <ArrowRight size={20} className="ml-2" />
            </button>
            <a 
              href="tel:+4915735996323" 
              className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-full flex items-center justify-center transition-colors text-lg font-medium"
            >
              Jetzt anrufen
            </a>
            <a 
              href="/preisliste.zip" 
              download
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center transition-colors text-lg font-medium"
            >
              Preisliste herunterladen
              <Download size={20} className="ml-2" />
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Zuverlässig</p>
              <p className="text-xs opacity-75">Pünktlich & professionell</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Gründlich</p>
              <p className="text-xs opacity-75">Detailorientierte Reinigung</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg sm:col-span-1 col-span-2">
              <p className="text-sm font-medium mb-1">Flexibel</p>
              <p className="text-xs opacity-75">Anpassbare Leistungen</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"/>
    </section>
  );
};

export default Hero;