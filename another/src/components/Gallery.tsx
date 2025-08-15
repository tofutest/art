import React from 'react';
import pitchforkImage from '../assets/pitchfork.jpg';
import sonImage from '../assets/son.jpg';
import monaImage from '../assets/mona.jpg';

export function Gallery() {
  const artworks = [{
    id: 1,
    title: '2 People and a Pitchfork',
    image: pitchforkImage,
    year: '2023',
    fullView: true
  }, {
    id: 2,
    title: "Can't see",
    image: sonImage,
    year: '2022',
    fullView: true
  }, {
    id: 3,
    title: 'Sus Smile',
    image: monaImage,
    year: '2022',
    fullView: true
  }];
  return <section id="work" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map(artwork => <div key={artwork.id} className="group">
          <div className="overflow-hidden">
            <img
              src={artwork.image}
              alt={artwork.title}
              className={
                artwork.fullView
                  ? 'w-full object-contain'
                  : 'w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105'
              }
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">{artwork.title}</h3>
            <p className="text-sm text-gray-500">{artwork.year}</p>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
}