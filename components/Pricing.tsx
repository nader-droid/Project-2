import React from 'react';
import { CheckCircle, Zap, Handshake } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-navy-900 mb-6">
              Investment
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A partnership model designed for scale.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
            
            {/* Card 1: Setup */}
            <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 left-0 w-full h-2 bg-navy-900"></div>
                 
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-navy-100 text-navy-900 rounded-xl flex items-center justify-center">
                        <Zap size={24} />
                    </div>
                    <div className="text-sm font-bold text-navy-900 uppercase tracking-wider">
                        Phase One
                    </div>
                 </div>
                 
                 <h3 className="text-3xl font-serif font-bold text-navy-900 mb-4">Infrastructure Setup</h3>
                 <p className="text-slate-600 mb-8">
                    Complete "Done-For-You" installation of your new growth engine.
                 </p>
                 
                 <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-5xl font-bold text-navy-900 tracking-tight">$5,000</span>
                    <span className="text-slate-500 font-medium">/ one-time</span>
                 </div>

                 <ul className="space-y-4 mb-10 flex-1">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="text-gold-500 shrink-0 mt-1" size={18} />
                        <span className="text-navy-900 font-bold">Includes 3 GHL Sub-Accounts</span>
                    </li>
                    {[
                        "High-Intent Landing Page Funnels",
                        "Smart Tagging & Automation Workflows",
                        "Sales Psychology Integration",
                        "Complete System Training"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 pl-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2"></div>
                            <span className="text-slate-600">{item}</span>
                        </li>
                    ))}
                 </ul>
                 
                 <button className="w-full py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-all shadow-lg text-lg">
                    Get Started
                 </button>
            </div>

            {/* Card 2: Monthly */}
            <div className="bg-navy-950 border border-navy-800 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col text-white">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gold-500"></div>
                 <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full filter blur-3xl opacity-20"></div>

                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/10 text-gold-400 rounded-xl flex items-center justify-center">
                        <Handshake size={24} />
                    </div>
                    <div className="text-sm font-bold text-gold-400 uppercase tracking-wider">
                        Phase Two
                    </div>
                 </div>
                 
                 <h3 className="text-3xl font-serif font-bold text-white mb-4">Monthly Management</h3>
                 <p className="text-slate-400 mb-8">
                    Ongoing optimization, support, and scaling strategies.
                 </p>
                 
                 <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-4xl font-bold text-white tracking-tight">Let's Discuss</span>
                 </div>

                 <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-10 flex-1">
                     <p className="text-slate-300 italic leading-relaxed">
                        "We will tailor the ongoing monthly package based on your specific team size, ad spend volume, and support needs. This is about partnership, not just a subscription."
                     </p>
                 </div>
                 
                 <button className="w-full py-4 bg-transparent border-2 border-gold-500 text-gold-500 font-bold rounded-xl hover:bg-gold-500 hover:text-navy-950 transition-all text-lg">
                    Discuss Requirements
                 </button>
            </div>
        </div>
      </div>
    </section>
  );
};