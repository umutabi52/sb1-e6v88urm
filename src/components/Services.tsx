import React from 'react';
import { services } from '../data/services';
import { Home, Sparkles, CheckSquare, Truck, Briefcase, Layers, Construction, Users, Snowflake, Flower2, Stars as Stairs } from 'lucide-react';

const Services: React.FC = () => {
  // Map service icons to Lucide components
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'Home': return <Home size={size} className="text-blue-600" />;
      case 'Sparkles': return <Sparkles size={size} className="text-blue-600" />;
      case 'CheckSquare': return <CheckSquare size={size} className="text-blue-600" />;
      case 'Truck': return <Truck size={size} className="text-blue-600" />;
      case 'Briefcase': return <Briefcase size={size} className="text-blue-600" />;
      case 'Layers': return <Layers size={size} className="text-blue-600" />;
      case 'Construction': return <Construction size={size} className="text-blue-600" />;
      case 'Users': return <Users size={size} className="text-blue-600" />;
      case 'Snowflake': return <Snowflake size={size} className="text-blue-600" />;
      case 'Flower2': return <Flower2 size={size} className="text-blue-600" />;
      case 'Stairs': return <Stairs size={size} className="text-blue-600" />;
      default: return <Home size={size} className="text-blue-600" />;
    }
  };

  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < description.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältigen Reinigungsdienstleistungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                {getIcon(service.icon, 28)}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow whitespace-pre-line">
                {formatDescription(service.description)}
              </p>
              
              <div className="flex justify-end items-center mt-auto">
                <span className="font-bold text-blue-600">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Nicht sicher, welchen Service Sie benötigen? Kontaktieren Sie uns für eine kostenlose Beratung.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors text-lg font-medium inline-block"
          >
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;