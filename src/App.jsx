import { motion } from 'framer-motion'
import IntroSection from './components/IntroSection'
import ToolkitSection from './components/ToolkitSection'
import GrowthSection from './components/GrowthSection'
import FutureSection from './components/FutureSection'

function App() {
  return (
    <div className="min-h-screen bg-[#111827] text-gray-200">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex space-x-4 md:space-x-8">
              <a href="#intro" className="p-3" title="Introductie">
                <div className="w-4 h-4 rounded-full bg-[var(--color-brand-green)] shadow-[0_0_10px_var(--color-brand-green)] hover:scale-125 transition-transform"></div>
              </a>
              <a href="#toolkit" className="p-3" title="Toolkit">
                <div className="w-4 h-4 rounded-full bg-[var(--color-brand-blue)] shadow-[0_0_10px_var(--color-brand-blue)] hover:scale-125 transition-transform"></div>
              </a>
              <a href="#groei" className="p-3" title="Groei">
                <div className="w-4 h-4 rounded-full bg-[var(--color-brand-red)] shadow-[0_0_10px_var(--color-brand-red)] hover:scale-125 transition-transform"></div>
              </a>
              <a href="#toekomst" className="p-3" title="Toekomst">
                <div className="w-4 h-4 rounded-full bg-[var(--color-brand-yellow)] shadow-[0_0_10px_var(--color-brand-yellow)] hover:scale-125 transition-transform"></div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <IntroSection />
        <ToolkitSection />
        <GrowthSection />
        <FutureSection />
      </main>
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>&copy; Martijn Tas</p>
      </footer>
    </div>
  )
}

export default App
