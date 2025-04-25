// src/pages/Thanks.tsx
import React from 'react';

const Thanks: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-10 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Vielen Dank!</h1>
        <p className="text-gray-700">Wir haben Ihre Nachricht erhalten und melden uns bald bei Ihnen.</p>
      </div>
    </div>
  );
};

export default Thanks;
