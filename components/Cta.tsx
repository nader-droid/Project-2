import React from 'react';
import { CheckCircle, Zap, Users } from 'lucide-react';

export const Cta: React.FC = () => {
  return (
    <section className="py-32 bg-navy-950 relative overflow-hidden">
        {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Pricing
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Simple, transparent investment to scale your real estate business.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Card 1: Setup + Courses */}
            <div className="bg-navy-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-10 hover:border-gold-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-900/20 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                 
                 <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider mb-6">
                    Infrastructure Build
                 </div>
                 
                 <h3 className="text-3xl font-serif font-bold text-white mb-4">Setup + Sales Psychology</h3>
                 <p className="text-slate-400 mb-8 min-h-[3rem]">
                    Complete "Done-For-You" installation of the Growth Infrastructure plus our exclusive sales mastery course.
                 </p>
                 
                 <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-6xl font-bold text-white tracking-tight">$5,000</span>
                    <span className="text-slate-500 font-medium">/ one-time</span>
                 </div>

                 <ul className="space-y-4 mb-10">
                    {[
                        "Complete GHL Sub-Account Setup",
                        "Custom Landing Page Funnels",
                        "Sales Psychology Masterclass",
                        "Automated SMS/Email Workflows"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-gold-500 shrink-0 mt-1" size={18} />
                            <span className="text-slate-300">{item}</span>
                        </li>
                    ))}
                 </ul>
                 
                 <button className="w-full py-4 bg-white text-navy-950 font-bold rounded-xl hover:bg-gold-400 transition-all shadow-lg text-lg">
                    Get Started
                 </button>
            </div>

            {/* Card 2: Weekly Calls */}
            <div className="bg-gradient-to-b from-navy-800 to-navy-900 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                 
                 <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                    Mentorship
                 </div>
                 
                 <h3 className="text-3xl font-serif font-bold text-white mb-4">Medhat's Inner Circle</h3>
                 <p className="text-slate-400 mb-8 min-h-[3rem]">
                    Direct access to Medhat and his expert team for weekly guidance, optimization, and roleplay.
                 </p>
                 
                 <div className="flex items-baseline gap-2 mb-10">
                    <span className="text-6xl font-bold text-white tracking-tight">$1,000</span>
                    <span className="text-slate-500 font-medium">/ month</span>
                 </div>

                 <ul className="space-y-4 mb-10">
                    {[
                        "Weekly Strategy Calls with Medhat",
                        "Live Q&A & Pipeline Review",
                        "Advanced Ad Strategy Updates",
                        "Team Roleplay Sessions",
                        "Priority Support Channel"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="text-blue-400 shrink-0 mt-1" size={18} />
                            <span className="text-slate-300">{item}</span>
                        </li>
                    ))}
                 </ul>
                 
                 <button className="w-full py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-blue-600 hover:border-blue-600 transition-all text-lg">
                    Join Inner Circle
                 </button>
            </div>
        </div>

        <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm">
                *Prices subject to change based on market availability. Secure your infrastructure today.
            </p>
        </div>

      </div>
    </section>
  );
};