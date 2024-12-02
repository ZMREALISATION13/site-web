import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Nature',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
    category: 'Photo'
  },
  {
    id: 2,
    title: 'Portrait',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    category: 'Photo'
  },
  {
    id: 3,
    title: 'Événements',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80',
    category: 'Photo'
  },
  {
    id: 4,
    title: 'Court-métrage',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80',
    category: 'Vidéo'
  },
  {
    id: 5,
    title: 'Mariage',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    category: 'Photo & Vidéo'
  },
  {
    id: 6,
    title: 'Commercial',
    image: 'https://images.unsplash.com/photo-1559070169-a3077159ee16?auto=format&fit=crop&q=80',
    category: 'Vidéo'
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}