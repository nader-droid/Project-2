import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { AiDemo } from './components/AiDemo';
import { RoiCalculator } from './components/RoiCalculator';
import { Features } from './components/Features';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  
  // Basic scroll spy for nav interactions (optional enhancement)
  useEffect(() => {
    const handleScroll = () => {
      // Logic to highlight nav if we had a sticky nav
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/10 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="text-gold-500">Estate</span>Growth
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
            <a href="#demo" className="hover:text-white transition-colors">AI Demo</a>
            <a href="#roi" className="hover:text-white transition-colors">ROI</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
          </div>
          <button className="px-5 py-2 bg-gold-500 hover:bg-gold-400 text-navy-900 text-sm font-bold rounded transition-colors">
            Book Demo
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <ProblemSolution />
        <AiDemo />
        <RoiCalculator />
        <Features />
        <Cta />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
