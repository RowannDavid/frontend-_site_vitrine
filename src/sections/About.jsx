import React from 'react'
import { Award, BookOpen, Code, Target } from 'lucide-react';


const highlights = [
    {
      icon: Code,
      title: 'Développement',
      description: '+1 ans d\'expérience en développement web'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Code propre et bonnes pratiques'
    },
    {
      icon: BookOpen,
      title: 'Veille tech',
      description: 'Toujours à jour sur les nouvelles technologies'
    },
    {
      icon: Target,
      title: 'Orienté résultats',
      description: 'Livraison dans les délais'
    }
  ];



function About() {
  return (
      <section
  id="about"
  className="py-20 bg-gray-50"
>
  <h2 className='text-center text-4xl md:text-5xl font-bold mb-10'>
    À propos de moi
  </h2>

  <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[80vh]'>

    {/* Image */}
    <div className='relative'>
      <div className="flex justify-center">
        <img
          src="/src/assets/logo.jpg"
          alt="developer"
          className="w-full max-w-md mx-auto"
        />
      </div>

      <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-6 rounded-xl shadow-lg">
        <p className="text-3xl font-bold text-blue-600">+1</p>
        <p className="text-gray-600">Années d'expérience</p>
      </div>
    </div>

    {/* Texte */}
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
        Passionné par la création d'expériences web exceptionnelles
      </h3>

      <p className="text-gray-600">
        Développeur Fullstack basé en Côte d'Ivoire, je me spécialise dans la création d'applications web modernes et performantes.
      </p>

      <p className="text-gray-600">
        Mon objectif est de fournir des solutions techniques de qualité.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
        {highlights.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              <item.icon size={24} />
            </div>

            <h4 className="font-semibold text-gray-900">
              {item.title}
            </h4>

            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}

export default About
