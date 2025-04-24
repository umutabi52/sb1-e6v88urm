import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    'Qualifiziertes und erfahrenes Personal',
    'Umweltfreundliche Reinigungsmittel',
    'Flexible Terminplanung',
    'Maßgeschneiderte Reinigungspläne',
    'Vollständig versichert',
    'Kundenorientierter Service',
    'Zufriedenheitsgarantie',
    'Günstig & Nachhaltig'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Über ReinigungsGenie</h2>
              <p className="text-gray-600 mb-6">
                Seit unserer Gründung haben wir uns einen Ruf für hervorragende Reinigungsdienstleistungen 
                in Kiel und Umgebung aufgebaut. Unser Ziel ist es, jedem Kunden ein sauberes, 
                gesundes und angenehmes Umfeld zu bieten.
              </p>
              <p className="text-gray-600 mb-8">
                Mit unserer Leidenschaft für Sauberkeit und unserem Engagement für Kundenzufriedenheit 
                liefern wir zuverlässige und hochwertige Reinigungsdienstleistungen für Privathaushalte 
                und Unternehmen.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                      <Check size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors text-lg font-medium inline-block"
              >
                Kontaktieren Sie uns
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg" 
                alt="Cleaning professional" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-lg shadow-lg max-w-xs hidden md:block">
              <p className="font-medium">
                "Wir glauben, dass jeder Kunde ein sauberes und gesundes Umfeld verdient. Unser Team gibt jeden Tag sein Bestes, um dieses Ziel zu erreichen."
              </p>
              <p className="mt-2 font-bold">- Das ReinigungsGenie Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;