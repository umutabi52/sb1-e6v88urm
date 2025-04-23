import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.',
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontaktieren Sie uns</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Füllen Sie das Formular aus, 
            und wir werden uns umgehend bei Ihnen melden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-8">
              {formStatus && (
                <div className={`mb-6 p-4 rounded ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Gewünschter Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="regular">Regelmäßige Reinigung</option>
                    <option value="deep">Grundreinigung</option>
                    <option value="window">Fensterreinigung</option>
                    <option value="move">Umzugsreinigung</option>
                    <option value="office">Büroreinigung</option>
                    <option value="carpet">Teppichreinigung</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Ihre Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors text-lg font-medium inline-flex items-center"
                >
                  Nachricht senden
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 h-full">
              <h3 className="text-xl font-bold mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">Karlstal 27a, 24143 Kiel und Umgebung</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href="tel:+4915751527729" className="text-blue-600 hover:underline">
                      +49 157 51527729
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <a href="mailto:info@reinigungsgenie.de" className="text-blue-600 hover:underline">
                      info@reinigungsgenie.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Clock size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Geschäftszeiten</p>
                    <p className="text-gray-600">Mo - Fr: 8:00 - 20:00 Uhr</p>
                    <p className="text-gray-600">Sa: 9:00 - 18:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;