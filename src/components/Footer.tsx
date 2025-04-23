import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">ReinigungsGenie</h3>
            <p className="text-gray-400 mb-6">
              Professionelle Reinigungsdienstleistungen für Privathaushalte und Unternehmen in Kiel und Umgebung.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@reinigungsgenie.de" className="bg-gray-800 hover:bg-blue-600 transition-colors p-2 rounded-full">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Unsere Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Regelmäßige Reinigung</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Grundreinigung</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Fensterreinigung</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Umzugsreinigung</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Büroreinigung</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Teppichreinigung</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Umut Toprak<br />
                Karlstal 27a, 24143 Kiel und Umgebung
              </li>
              <li>
                <a href="tel:+4915751527729" className="text-gray-400 hover:text-white transition-colors">
                  +49 157 51527729
                </a>
              </li>
              <li>
                <a href="mailto:info@reinigungsgenie.de" className="text-gray-400 hover:text-white transition-colors">
                  info@reinigungsgenie.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Gebiete</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">24103 Kiel (Altstadt, Schreventeich, Vorstadt, Exerzierplatz, Damperhof)</li>
              <li className="text-gray-400">24105 Kiel (Blücherplatz, Ravensberg, Brunswik, Düsternbrook)</li>
              <li className="text-gray-400">24106 Kiel (Wik, Ravensberg)</li>
              <li className="text-gray-400">24109 Kiel (Russee, Hasseldieksdamm, Mettenhof)</li>
              <li className="text-gray-400">24111 Kiel (Russee)</li>
              <li className="text-gray-400">24113 Kiel (Südfriedhof, Gaarden-Süd, Hassee)</li>
              <li className="text-gray-400">24114 Kiel (Südfriedhof, Vorstadt)</li>
              <li className="text-gray-400">24116 Kiel (Schreventeich)</li>
              <li className="text-gray-400">24118 Kiel (Wik, Ravensberg)</li>
              <li className="text-gray-400">24143 Kiel (Ellerbek, Gaarden-Süd, Gaarden-Ost)</li>
              <li className="text-gray-400">24145 Kiel (Wellsee, Gaarden-Süd)</li>
              <li className="text-gray-400">24146 Kiel (Elmschenhagen-Süd)</li>
              <li className="text-gray-400">24147 Kiel (Elmschenhagen-Nord)</li>
              <li className="text-gray-400">24148 Kiel (Wellingdorf, Ellerbek, Gaarden-Ost)</li>
              <li className="text-gray-400">24149 Kiel (Neumühlen-Dietrichsdorf)</li>
              <li className="text-gray-400">24159 Kiel (Wik, Friedrichsort)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} ReinigungsGenie. Alle Rechte vorbehalten.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-white transition-colors mx-2">Impressum</a>
            <a href="#" className="hover:text-white transition-colors mx-2">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors mx-2">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;