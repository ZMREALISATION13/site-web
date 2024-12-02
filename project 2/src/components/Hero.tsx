import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          ZM Réalisation
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Capturant vos moments les plus précieux
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
        >
          Découvrir mon travail
        </a>
      </div>
    </section>
  );
}