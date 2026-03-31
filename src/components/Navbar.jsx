import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Dev&David
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-blue-500">Accueil</a>
          <a href="#about" className="hover:text-blue-500">À propos</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#portifolio" className="hover:text-blue-500">Portfolio</a>
          <a href="#competence" className="hover:text-blue-500">Compétence</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4 text-gray-700 font-medium">
          <a href="#hero" className="block" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#about" className="block" onClick={() => setIsOpen(false)}>À propos</a>
          <a href="#services" className="block" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#portifolio" className="block" onClick={() => setIsOpen(false)}>Portfolio</a>
          <a href="#competence" className="block" onClick={() => setIsOpen(false)}>Compétence</a>
          <a href="#contact" className="block" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

    </header>
  )
}

export default Navbar