import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden sagen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Erfahren Sie, was unsere zufriedenen Kunden über unsere Reinigungsleistungen zu berichten haben.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg shadow-sm p-6 transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="border-t pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Überzeugen Sie sich selbst von unserer Qualität</h3>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors text-lg font-medium inline-block"
          >
            Kostenlos anfragen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;