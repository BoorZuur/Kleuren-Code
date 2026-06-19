import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const FutureSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const discTypes = [
    { color: 'bg-red-500', name: 'Rood', desc: 'Direct, resultaatgericht, dominant.' },
    { color: 'bg-yellow-400', name: 'Geel', desc: 'Inspirerend, sociaal, enthousiast.' },
    { color: 'bg-green-500', name: 'Groen', desc: 'Stabiel, geduldig, ondersteunend.' },
    { color: 'bg-blue-500', name: 'Blauw', desc: 'Analytisch, precies, taakgericht.' },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden" id="toekomst">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-brand-yellow/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
              <span className="text-brand-yellow">Toekomst</span> & Inspiratie
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
              Inzichten uit het nachtkastboek <span className="italic text-gray-300">"Omringd door idioten"</span> van Thomas Erikson en mijn visie voor de komende stage.
            </motion.p>
          </div>

          {/* Book & Core Lesson */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-brand-yellow/50 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-brand-yellow flex items-center gap-3">
                <BookOpen className="w-6 h-6" />
                De Kernles
              </h3>
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-brand-yellow pl-4 my-6">
                "Communicatie vindt plaats op de voorwaarden van de ontvanger."
              </blockquote>
              <p className="text-gray-400 leading-relaxed">
                Niet iedereen communiceert of verwerkt informatie op dezelfde manier. Door te begrijpen hoe verschillende persoonlijkheidstypen (volgens het DISC-model) werken, kunnen we onbegrip voorkomen en effectiever samenwerken.
              </p>
            </motion.div>

            {/* DISC Model */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {discTypes.map((type, index) => (
                <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 flex flex-col items-center text-center space-y-3 hover:bg-gray-800/50 transition-colors">
                  <div className={`w-12 h-12 rounded-full shadow-lg ${type.color} ring-4 ring-gray-900`} />
                  <h4 className="font-semibold text-lg text-gray-200">{type.name}</h4>
                  <p className="text-sm text-gray-400">{type.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Application in Future */}
          <motion.div variants={itemVariants} className="bg-brand-yellow/10 border border-brand-yellow/20 rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-yellow/5 blur-3xl rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Toepassing in mijn komende stage</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Tijdens mijn volgende stageperiode ga ik deze theorie actief toepassen. In plaats van te verwachten dat iedereen mijn manier van communiceren begrijpt, zal ik de 'kleur' van mijn collega's proberen te herkennen. 
                <br/><br/>
                Of het nu gaat om een korte, bondige update voor een <span className="text-red-400 font-semibold">rode</span> manager, of een gedetailleerde, analytische uitleg voor een <span className="text-blue-400 font-semibold">blauwe</span> developer: door mijn boodschap af te stemmen op de ontvanger, verwacht ik efficiënter te werken en sterkere professionele relaties op te bouwen.
              </p>
              <a href="https://martijn.tas.one" className="inline-flex items-center justify-center px-8 py-3 bg-brand-yellow text-gray-900 rounded-full font-bold shadow-[0_0_20px_rgba(255,200,0,0.3)] hover:scale-105 transition-transform duration-300">
                Klaar voor de toekomst
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;
