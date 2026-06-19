import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-20 pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Hi, ik ben <span className="text-brand-green">Martijn Tas</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          >
            Tech Lead & Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl text-lg text-gray-400 mb-12 leading-relaxed"
          >
            Mijn rol binnen het team staat voor stabiliteit. Zaken die anderen over het hoofd zien heb ik al opgelost voordat ze erachter komen dat het te laat is. Met mijn positieve instelling is het altijd gezellig en ligt de productiviteit soms wat lager.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#toolkit"
              className="px-8 py-3 rounded-lg bg-brand-green text-gray-900 font-semibold hover:bg-brand-green/90 transition-colors shadow-lg shadow-brand-green/20"
            >
              Ontdek mijn expertise
            </a>
            <a
              href="#groei"
              className="px-8 py-3 rounded-lg border border-gray-700 text-white hover:border-brand-green hover:text-brand-green transition-colors bg-gray-800/50 backdrop-blur-sm"
            >
              Bekijk mijn groei
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-brand-green rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
