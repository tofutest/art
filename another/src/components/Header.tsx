import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-10 bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-xl font-medium">Étienne Marc de Fromageville</div>
      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>
      {/* Desktop navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <a href="#work" className="hover:text-gray-600">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
    {/* Mobile navigation */}
    {isMenuOpen && <nav className="md:hidden bg-white py-4 px-4 shadow-md">
      <ul className="flex flex-col space-y-4">
        <li>
          <a href="#work" className="block py-2" onClick={() => setIsMenuOpen(false)}>
            Work
          </a>
        </li>
        <li>
          <a href="#about" className="block py-2" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="block py-2" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>}
  </header>;
}