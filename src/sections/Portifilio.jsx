import React from 'react'
import { ExternalLink , Github } from 'lucide-react'

const portifilio = [
  {
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    image: '#',
    skill: [ 'React', 'Tailwindcss', 'Next.js'],
    liveDemo: '#',
    Github: '#',
  },
  {
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    image: '',
    skill: [ 'React', 'Tailwindcss', 'Next.js'],
    liveDemo: '#',
    Github: '#',
  },
  {
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    image: '',
    skill: [ 'React', 'Tailwindcss', 'Next.js'],
    liveDemo: '#',
    Github: '#',
  },
 {
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    image: '',
    skill: [ 'React', 'Tailwindcss', 'Next.js'],
    liveDemo: '#',
    Github: '#',
  },
  {
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    image: '',
    skill: [ 'React', 'Tailwindcss', 'Next.js'],
    liveDemo: '#',
    Github: '#',
  },
  {
    title:  'site web',
    description: 'Création de sites vitrines modernes et responsive',
    image: '',
    skill: [ 'React', 'Tailwindcss', 'Next.js'],
    liveDemo: '#',
    Github: '#',
  }
]
function Portifilio() {
  return (
    <section
      id="portifolio"
      className="py-20 bg-gray-50"
    >
      <h2 className='text-center text-4xl md:text-5xl font-bold'>
        Portfolio
      </h2>

      <h5 className='text-center text-lg md:text-xl italic my-12'>
        Quelques projets sur lesquels j'ai travaillé
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        
        {portifilio.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'
          >
            
            {/* Image */}
            <div className='h-48 bg-gradient-to-br from-blue-600 to-purple-600'>
              {item.image ? (
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white text-xl">
                  Projet
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className='text-lg font-bold mb-2'>
                {item.title}
              </h3>

              <p className='text-gray-500 text-sm mb-4'>
                {item.description}
              </p>

              {/* Skills */}
              <div className='flex gap-2 flex-wrap'>
                {item.skill.map((skill, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-gray-200 rounded-full text-gray-600 text-xs'
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <a href={item.liveDemo} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>

                <a href={item.github} className="flex items-center gap-2 text-gray-600 hover:text-black">
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default Portifilio
