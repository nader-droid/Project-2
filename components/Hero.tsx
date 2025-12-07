import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-navy-950 text-white overflow-hidden">
      {/* Real Estate Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/70 to-navy-950/90 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-8 px-5 py-2 rounded-full border border-gold-400/30 bg-navy-900/50 text-gold-300 text-sm font-semibold tracking-[0.2em] uppercase backdrop-blur-md animate-fade-in-up shadow-lg">
          Real Estate Scaling System
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight animate-fade-in-up delay-100 drop-shadow-2xl">
          Growth<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-400 to-gold-600">
            Infrastructure
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 animate-fade-in-up delay-200 font-light leading-relaxed">
          The complete ecosystem for capturing, qualifying, and closing high-net-worth clients on autopilot.
        </p>
        
        <div className="animate-fade-in-up delay-300">
          <button className="px-12 py-5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-gold-500/20 tracking-wide uppercase border border-gold-400">
            Explore the System
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gold-500/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};