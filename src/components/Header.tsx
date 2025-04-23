import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-blue-600">ReinigungsGenie</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Leistungen
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Über uns
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Kontakt
          </button>
          <a 
            href="tel:+4915751527729" 
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 transition-colors"
          >
            <Phone size={18} className="mr-2" />
            <span>+49 157 51527729</span>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Über uns
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Kontakt
            </button>
            <a 
              href="tel:+4915751527729" 
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span>+49 157 51527729</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;