// pages/thanks.tsx
import React from 'react';

const Thanks = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white shadow rounded">
        <h1 className="text-3xl font-bold mb-4">Vielen Dank!</h1>
        <p className="text-gray-700">
          Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.
        </p>
      </div>
    </section>
  );
};

export default Thanks;
