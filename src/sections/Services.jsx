import React from 'react'
import { Code2, Database, Globe, Smartphone, Wrench, Zap } from 'lucide-react';


const services = [
  {
    icon: Globe,
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    skill: [ 'React', 'Tailwindcss', 'Next.js']
  },
  {
    icon: Code2,
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    skill: [ 'React', 'Tailwindcss', 'Next.js']
  },
  {
    icon: Globe,
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    skill: [ 'React', 'Tailwindcss', 'Next.js']
  },
  {
    icon: Globe,
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    skill: [ 'React', 'Tailwindcss', 'Next.js']
  },
  {
    icon: Globe,
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    skill: [ 'React', 'Tailwindcss', 'Next.js']
  },
  {
    icon: Globe,
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    skill: [ 'React', 'Tailwindcss', 'Next.js']
  }
]

function Services() {
  return (
    <section
  id="services"
  className="py-20 bg-gray-50"
>
  <h2 className='text-center text-4xl md:text-5xl font-bold'>
    Services
  </h2>

  <h5 className='text-center text-lg md:text-xl italic my-12'>
    Des solutions complètes pour concrétiser vos projets digitaux
  </h5>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    {services.map((service, index) => (
      <div
        key={index}
        className='bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all'
      >
        <div className='w-16 h-16 bg-blue-100 rounded-xl flex justify-center items-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition'>
          <service.icon size={30} />
        </div>

        <h3 className='text-xl text-black font-bold mb-2'>
          {service.title}
        </h3>

        <p className='text-gray-500 mb-4'>
          {service.description}
        </p>

        <div className='flex gap-2 flex-wrap'>
          {service.skill.map((skill, i) => (
            <span
              key={i}
              className='px-3 py-1 bg-gray-200 rounded-full text-gray-600 text-sm'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
  )
}

export default Services
