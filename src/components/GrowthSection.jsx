import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Flag } from 'lucide-react';

const GrowthSection = () => {
  const timelineItems = [
    {
      icon: Target,
      title: "Het Begin",
      description: "In het begin van het project was ik soms te stil en deelde ik mijn mening onvoldoende proactief, waardoor mijn inbreng niet altijd volledig tot zijn recht kwam.",
      delay: 0.2,
    },
    {
      icon: TrendingUp,
      title: "De Groei",
      description: "Tijdens TLE4 heb ik een grote stap gezet door de leiding te nemen over de API architectuur (met behulp van Scribe).",
      delay: 0.4,
    },
    {
      icon: Flag,
      title: "SMART Doel voor de Toekomst",
      description: '"Vanaf de allereerste sprint van mijn volgende project, deel ik wekelijks proactief minstens twee eigen technische meningen of inzichten ongevraagd in de daily stand-up, zodat mijn stem direct vanaf de start meegenomen wordt."',
      delay: 0.6,
      highlight: true,
    }
  ];

  return (
    <section className="py-20 bg-brand-red/10" id="groei">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-brand-red">Groei</span> als Professional
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Van een afwachtende houding naar het nemen van technische leiding. Een reflectie op mijn ontwikkeling als professional.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-red/30 rounded-full"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'}`}>
                    <div className={`p-6 rounded-2xl shadow-lg w-full max-w-md ${item.highlight ? 'bg-brand-red text-white' : 'bg-gray-800'}`}>
                      <h3 className={`text-2xl font-bold mb-3 flex items-center gap-3 text-white`}>
                        <span className="md:hidden">
                          <Icon className={`w-6 h-6 ${item.highlight ? 'text-white' : 'text-brand-red'}`} />
                        </span>
                        {item.title}
                      </h3>
                      <p className={`leading-relaxed ${item.highlight ? 'text-white/95 font-medium italic' : 'text-gray-300'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Marker for Desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-14 h-14 bg-gray-900 rounded-full border-4 border-brand-red shadow-md z-10">
                    <Icon className="w-6 h-6 text-brand-red" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
