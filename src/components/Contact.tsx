import React from 'react';
import { Send, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => void;
  }
}

const Contact: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    "Hallo Reinigungsgenie-Team\n" +
    "ich interessiere mich für eine Reinigung und möchte gerne ein unverbindliches Angebot anfragen.\n\n" +
    "Die Reinigung betrifft:\n" +
    "– Art der Reinigung: [z. B. Grundreinigung, Fensterreinigung, etc.]\n" +
    "– Fläche/Größe/Zimmer: \n" +
    "– Ort: \n\n" +
    "Ich freue mich auf Ihre Rückmeldung. Vielen Dank im Voraus!"
  );

  return (
    <>
      {/* Hinweis-Banner oben */}
      <div className="bg-red-600 text-white px-4 py-3 rounded mb-6 text-center font-semibold shadow">
        📩⚠️ Es kann aktuell vereinzelt zu Übermittlungsproblemen bei Formularanfragen kommen. <br />
        Um sicherzugehen, dass Ihre Nachricht bei uns ankommt, kontaktieren Sie uns gerne zusätzlich per <br />
        <a href="tel:+4915751527729" className="underline">Telefon oder WhatsApp: +49 1575 1527729</a>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/4915751527729?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="hidden md:inline">WhatsApp Chat</span>
      </a>

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
              <form
                name="contact"
                method="POST"
                action="/thanks"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="bg-white rounded-lg shadow-sm p-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2">Gewünschter Service *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

              {/* Hinweis-Banner unten */}
              <div className="bg-red-600 text-white px-4 py-3 rounded mt-6 text-center font-semibold shadow">
                📩⚠️ Hinweis: In seltenen Fällen kann es zu Übermittlungsproblemen kommen. <br />
                Um auf Nummer sicher zu gehen, kontaktieren Sie uns gerne zusätzlich per <br />
                <a href="tel:+4915751527729" className="underline">Telefon oder WhatsApp: +49 1575 1527729</a>
              </div>
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
                      <a href="mailto:info@reinigungsgenie.com" className="text-blue-600 hover:underline">
                        info@reinigungsgenie.com
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
    </>
  );
};

export default Contact;