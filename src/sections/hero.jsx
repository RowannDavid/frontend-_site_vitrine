import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen scroll-mt-20 flex items-center justify-center bg-gray-50"
    >
      <div className="max-w-2xl text-center px-6">

        {/* Badge */}
        <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          👋 Bienvenue sur mon portfolio
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Je suis <span className="text-blue-600">David</span>, développeur web
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg">
          Je conçois des sites web modernes, rapides et performants pour
          aider les entreprises et particuliers à réussir leur présence en ligne.
        </p>

        {/* Boutons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Me contacter
          </a>

          <a
            href="#portfolio"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Voir mes projets
          </a>
        </div>

        {/* Social Links */}
          <div className="flex gap-6 justify-center pt-8">
            <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              <FaMailBulk size={24} />
            </a>
          </div>
      </div>
    </section>
  );
}

export default Hero;