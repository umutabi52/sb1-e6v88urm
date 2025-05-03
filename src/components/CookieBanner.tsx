import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Enable Google Analytics after consent
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    // Disable Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Wir respektieren Ihre Privatsphäre</h3>
          <p className="text-gray-600">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und Ihnen relevante Inhalte anzuzeigen. 
            Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzerklärung zu.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={acceptCookies}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            Akzeptieren
          </button>
        </div>
        <button
          onClick={declineCookies}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 md:hidden"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;