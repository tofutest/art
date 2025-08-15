import React from 'react';
import meImage from '../assets/me.jpg'; // adjust the path if needed
export function About() {
  return <section id="about" className="py-16 md:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img
              src={meImage}
              alt="Étienne Marc de Fromageville"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 space-y-4 text-lg">
            <p>
              I am a contemporary artist based in New York City, specializing in the bold
              and unrefined medium of stick figure illustration. My work delves into the
              nuanced relationship between the human form, minimalistic expression.
            </p>
            <p>
              After graduating from the School of Visual Arts in 2015, I’ve exhibited my
              stick figure series in coffee shops, yoga studios, and the occasional dentist’s
              office across the United States and Europe.
            </p>
            <p>
              When I’m not in the studio, I teach workshops on stick figure anatomy (to the blind).
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>;
}