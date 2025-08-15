import React from 'react';
export function Hero() {
  return <section className="bg-gray-50 py-20 md:py-32">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Étienne Marc de Fromageville</h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
        Contemporary artist exploring the intersection of great art and pure garbage
      </p>
    </div>
  </section>;
}