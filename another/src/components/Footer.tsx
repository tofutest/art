import React from 'react';
export function Footer() {
  return <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="mb-2">
        © {new Date().getFullYear()} Étienne Marc de Fromageville. All rights reserved.
      </p>
      <p className="text-sm text-gray-400">
        All artwork displayed on this site is protected by copyright law.
      </p>
    </div>
  </footer>;
}