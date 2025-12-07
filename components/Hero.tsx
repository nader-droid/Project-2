import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center bg-navy-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-gold-500/50 bg-gold-500/10 text-gold-400 text-sm font-semibold tracking-wider uppercase animate-fade-in-up">
          For Top 1% Real Estate Agents
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          Stop Chasing Leads.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">
            Let Them Chase You.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
          The all-in-one Growth Infrastructure that captures, qualifies, and books appointments on your calendar while you sleep.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a href="#demo" className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
            See the System in Action <ArrowRight size={20} />
          </a>
          <a href="#roi" className="px-8 py-4 border border-slate-600 hover:border-white text-white rounded-lg transition-all hover:bg-white/5 font-semibold">
            Calculate Your ROI
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
