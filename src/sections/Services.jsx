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
        className="h-screen scroll-mt-20 bg-gray-50" 
      >

        <h2 className='text-center text-5xl font-bold mt-12'>Services</h2>
        <h5 className='text-center text-xl italic my-12'>Des solutions complètes pour concrétiser vos projets digitaux</h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className='bg-white p-8 rounded-2xl shadow-sm border border-gray-300 hover:shadow-lg  hover:border-blue-500 transition-all group'>
              <div className='w-14 h-14 bg-blue-100 rounded-lg flex justify-center items-center text-blue-600 mb-6 hover:bg-blue-600 hover:text-white transition-colors'>
                <service.icon size={28}/>
              </div>
              <h3 className='text-xl text-black font-bold mb-2'>{service.title}</h3>
              <p className='text-gray-400 mb-2'>{service.description}</p>
              <div className='flex gap-2'>
                {service.skill.map((skill, index) => (
                  <span 
                    key={index}
                    className='px-4 py-1 bg-gray-200 rounded-2xl text-gray-600 text-sm'
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
