import React from 'react';
import { Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Camera className="w-6 h-6 text-white" />
            <span className="text-xl font-bold text-white">ZM Réalisation</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ZM Réalisation. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}