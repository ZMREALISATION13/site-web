import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Contactez-moi</h3>
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail className="w-6 h-6" />
              <span>contact@zmrealisation.fr</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone className="w-6 h-6" />
              <span>+33 6 XX XX XX XX</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-6 h-6" />
              <span>Paris, France</span>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Votre message"
                className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}