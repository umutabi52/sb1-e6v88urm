import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import PriceCalculator from './components/PriceCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'ReinigungsGenie | Professionelle Reinigungsdienstleistungen';
    
    // Add a favicon if needed
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧹</text></svg>';
    }
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <PriceCalculator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;