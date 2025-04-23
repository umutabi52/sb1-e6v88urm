import React, { useState } from 'react';
import { priceOptions } from '../data/priceOptions';
import { Calculator } from 'lucide-react';

const PriceCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState(priceOptions[0].id);
  const [quantity, setQuantity] = useState(2);
  
  const selectedOption = priceOptions.find(option => option.id === selectedService);
  const totalPrice = selectedOption ? selectedOption.basePrice * quantity : 0;
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preiskalkulator</h2>
            <p className="text-gray-600">
              Berechnen Sie einen ungefähren Preis für unsere Reinigungsleistungen. 
              Für ein genaues Angebot kontaktieren Sie uns bitte.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-semibold mb-4">Wählen Sie einen Service</h3>
                <div className="space-y-3">
                  {priceOptions.map(option => (
                    <div 
                      key={option.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedService === option.id 
                          ? 'border-blue-600 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedService(option.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{option.name}</p>
                          <p className="text-sm text-gray-500">€{option.basePrice} {option.unit}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border ${
                          selectedService === option.id 
                            ? 'border-blue-600 bg-blue-600' 
                            : 'border-gray-300'
                        }`}>
                          {selectedService === option.id && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Menge</h3>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">
                      {selectedOption?.id === 'window' ? 'Anzahl der Fenster' : 'Stunden'}
                    </span>
                    <span className="font-medium">{quantity}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max={selectedOption?.id === 'window' ? "20" : "8"} 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>{selectedOption?.id === 'window' ? "20" : "8"}</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Calculator size={20} className="text-blue-600 mr-2" />
                    <h4 className="font-semibold">Ihre Schätzung</h4>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Service:</span>
                      <span>{selectedOption?.name}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Menge:</span>
                      <span>{quantity} {selectedOption?.id === 'window' ? 'Fenster' : 'Stunden'}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-4">
                      <span>Geschätzter Preis:</span>
                      <span>€{totalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      *Dies ist nur eine Schätzung. Der endgültige Preis kann je nach spezifischen Anforderungen variieren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors text-lg font-medium inline-block"
              >
                Genaues Angebot anfordern
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;