import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-600">
          Dev&David
        </h1>

        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-blue-500">Accueil</a>
          <a href="#about" className="hover:text-blue-500">À propos</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#portifolio" className="hover:text-blue-500">Portfolio</a>
          <a href="#competence" className="hover:text-blue-500">Competence</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;