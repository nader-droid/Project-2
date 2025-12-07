import React from 'react';
import { Check } from 'lucide-react';

export const Cta: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
        {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
          Ready to Scale Your Real Estate Business?
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          We only work with one agent per territory to ensure exclusivity. Secure your zip codes before your competitor does.
        </p>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-lg mx-auto mb-12 text-left">
          <h3 className="text-gold-400 font-bold mb-4 uppercase text-sm tracking-wide">The Guarantee</h3>
          <ul className="space-y-3 text-white">
            <li className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={16} className="text-green-400" /></div>
              <span>Setup completed in 7 days or less</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={16} className="text-green-400" /></div>
              <span>10 qualified leads in your first month or we pay you</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-green-500/20 p-1 rounded-full"><Check size={16} className="text-green-400" /></div>
              <span>Full tech support - you never touch code</span>
            </li>
          </ul>
        </div>

        <button className="px-10 py-5 bg-gold-500 hover:bg-gold-400 text-navy-900 text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-gold-500/20">
          Claim Your Territory Now
        </button>
        <p className="mt-4 text-sm text-slate-500">No credit card required for consultation.</p>
      </div>
    </section>
  );
};
