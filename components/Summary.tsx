import React from 'react';
import { TrendingUp, Clock, ShieldCheck, ArrowRight, Activity, Crown, Star } from 'lucide-react';

export const Summary: React.FC = () => {
  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
        {/* Background elements similar to CTA for consistency */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[100px] opacity-20 animate-blob"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Executive Summary
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* BENEFITS SECTION - Centered now that Goal is removed */}
        <div className="max-w-3xl mx-auto mb-24">
            <div className="space-y-10 bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl">
                <h3 className="text-3xl font-serif font-bold mb-8 flex items-center justify-center gap-3 text-center">
                    <Activity className="text-blue-400" /> Potential Benefits
                </h3>

                <div className="flex gap-5 group items-start">
                    <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center shrink-0 border border-navy-700 text-gold-400 group-hover:scale-110 transition-transform shadow-lg shadow-navy-950/50">
                        <Clock size={28} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Time Reclamation</h4>
                        <p className="text-slate-400 leading-relaxed">
                            Save 20+ hours per week by automating the "grunt work." No more manual data entry or chasing cold leads.
                        </p>
                    </div>
                </div>

                <div className="flex gap-5 group items-start">
                    <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center shrink-0 border border-navy-700 text-gold-400 group-hover:scale-110 transition-transform shadow-lg shadow-navy-950/50">
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Zero Lead Leakage</h4>
                        <p className="text-slate-400 leading-relaxed">
                            Every opportunity is captured, tagged, and nurtured. We eliminate the "I forgot to call them back" problem entirely.
                        </p>
                    </div>
                </div>

                <div className="flex gap-5 group items-start">
                    <div className="w-14 h-14 bg-navy-900 rounded-2xl flex items-center justify-center shrink-0 border border-navy-700 text-gold-400 group-hover:scale-110 transition-transform shadow-lg shadow-navy-950/50">
                        <TrendingUp size={28} />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">Predictable Revenue</h4>
                        <p className="text-slate-400 leading-relaxed">
                            Turn "feast or famine" months into a consistent pipeline. When you know your conversion metrics, you can scale with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* BRANDING SECTION - UPDATED */}
        <div className="max-w-4xl mx-auto text-center border-t border-white/10 pt-20">
            <div className="inline-block p-4 rounded-full bg-gold-500/10 mb-6">
                <Crown className="text-gold-400 w-12 h-12" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Become the Undisputed #1 in Your Field
            </h3>
            
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
                    <Star size={150} />
                </div>
                
                <p className="text-2xl text-slate-200 italic font-serif leading-relaxed relative z-10">
                    "You position yourself as the <span className="text-gold-400 font-bold not-italic">market leader</span>. Clients will skip the step of interviewing other agents and start engaging with you. They will trust in the quality you provide, recognizing you as one of the most experienced people in the field."
                </p>
            </div>
            
            <div className="mt-12 flex justify-center">
               <ArrowRight className="text-slate-500 animate-bounce" size={32} transform="rotate(90)" />
            </div>
        </div>
        
      </div>
    </section>
  );
};