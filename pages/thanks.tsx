import React from 'react';

const Thanks = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Vielen Dank!</h1>
        <p className="text-gray-700 mb-2">
          Ihre Nachricht wurde erfolgreich übermittelt.
        </p>
        <p className="text-gray-600 mb-6">
          Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
        <a
          href="/"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Zur Startseite
        </a>
      </div>
    </div>
  );
};

export default Thanks;
