import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import PriceCalculator from './components/PriceCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Thanks from './components/Thanks';
import CookieBanner from './components/CookieBanner';

function App() {
  useEffect(() => {
    document.title = 'ReinigungsGenie | Professionelle Reinigungsdienstleistungen';

    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧹</text></svg>';
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen w-full overflow-x-hidden">
              <Header />
              <Hero />
              <Services />
              <About />
              <Testimonials />
              <PriceCalculator />
              <Contact />
              <Footer />
              <CookieBanner />
            </div>
          }
        />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;