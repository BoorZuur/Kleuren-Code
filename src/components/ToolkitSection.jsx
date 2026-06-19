import React from 'react';
import { motion } from 'framer-motion';
import { Link, Monitor, Server, FileText } from 'lucide-react';

const skills = [
  {
    semester: "TLE3",
    title: "Externe APIs Integratie",
    description: "Koppelen met Spotify en Deezer APIs voor het ophalen en analyseren van muziekdata. Hierbij leerde ik omgaan met authenticatie, rate limits en complexe JSON responses.",
    icon: <Link className="w-6 h-6 text-blue-400" />,
  },
  {
    semester: "TLE3",
    title: "SonarPoppy AI",
    description: "Data verwerking met behulp van het SonarPoppy AI-algoritme. Ontdekken van patronen in datasets en het bouwen van een ontwerp voor verantwoorde AI.",
    icon: <Monitor className="w-6 h-6 text-blue-400" />,
  },
  {
    semester: "TLE4",
    title: "Full-Stack Architectuur",
    description: "Het bouwen van een veilige Laravel back-end en deze verbinden met een interactieve React front-end.",
    icon: <Server className="w-6 h-6 text-blue-400" />,
  },
  {
    semester: "TLE4",
    title: "Automatische API Documentatie",
    description: "Genereren van interactieve OpenAPI documentatie met Scribe. Dit verbeterde de samenwerking tussen front-end en back-end.",
    icon: <FileText className="w-6 h-6 text-blue-400" />,
  }
];

const ToolkitSection = () => {
  return (
    <section id="toolkit" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[80px] opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 tracking-tight">
            Mijn Technische <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Toolkit</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Een overzicht van de theorieën, methoden en technische skills die ik heb opgedaan tijdens TLE3 en TLE4.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-900/50 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-blue-950 rounded-xl flex items-center justify-center border border-blue-900/50 group-hover:bg-blue-900/50 group-hover:border-blue-500/30 transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="px-3 py-1 bg-blue-950 text-blue-400 text-xs font-bold rounded-full border border-blue-900 shadow-sm">
                  {skill.semester}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
