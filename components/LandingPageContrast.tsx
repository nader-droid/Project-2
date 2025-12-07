import React from 'react';
import { Check, MousePointer, Shield, Star, ArrowRight, Filter } from 'lucide-react';

export const LandingPageContrast: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold-100 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-wider mb-4">
            The Front Door
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
            The "High-Intent" Qualification Funnel
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            We don't just capture leads; we <span className="text-navy-900 font-semibold">audit</span> them. 
            Our forms use conditional logic to separate serious investors from window shoppers instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase - The Funnel Anatomy */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-900 bg-white transform hover:scale-[1.01] transition-transform duration-500 group">
              
              {/* Fake Browser Bar */}
              <div className="bg-navy-950 h-8 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 flex-1 bg-navy-800 h-5 rounded-md flex items-center px-3 text-[10px] text-slate-400 font-mono">
                  access.exclusive-portfolio.com/investor-access
                </div>
              </div>

              {/* Page Content Visual */}
              <div className="p-8 md:p-12 bg-slate-50 relative">
                
                {/* Element 1: The Headline */}
                <div className="relative mb-8 border-2 border-dashed border-blue-400/50 p-2 rounded-lg bg-blue-50/50">
                  <div className="absolute -left-4 top-1/2 -translate-x-full -translate-y-1/2 hidden md:flex items-center gap-2">
                     <span className="text-sm font-bold text-blue-600 whitespace-nowrap">The Hook</span>
                     <div className="w-8 h-px bg-blue-400"></div>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-navy-900 leading-tight">
                    Unlock Access to <span className="text-gold-600">Off-Market</span> & High-Yield Assets
                  </h3>
                  <p className="text-slate-600 mt-2">Join our private list of verified investors. Strictly confidential.</p>
                </div>

                {/* Element 2: The Form */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gold-500 relative">
                  <div className="absolute -right-4 top-1/2 translate-x-full -translate-y-1/2 hidden md:flex items-center gap-2">
                     <div className="w-8 h-px bg-gold-500"></div>
                     <span className="text-sm font-bold text-gold-600 whitespace-nowrap">Logic Gate</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-bold text-navy-900 uppercase tracking-wide">Qualification Step 2 of 4</label>
                        <span className="text-xs text-slate-400 font-mono">Financial Audit</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full mb-4">
                      <div className="h-1.5 w-1/2 bg-gold-500 rounded-full"></div>
                    </div>
                    
                    {/* THE REQUESTED QUESTION */}
                    <h4 className="font-bold text-lg text-navy-900 mb-4 leading-snug">
                        To match you with the right asset class, what is your liquid investment capability?
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center p-3 border border-slate-200 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                         <div className="w-4 h-4 rounded-full border-2 border-slate-300 mr-3"></div>
                         <span className="text-slate-600">Under 18 Million</span>
                      </div>
                      
                      {/* Selected High Value Option */}
                      <div className="flex items-center p-3 border-2 border-gold-500 bg-gold-50/50 rounded-lg cursor-pointer shadow-sm">
                        <div className="w-4 h-4 rounded-full border-4 border-gold-500 flex items-center justify-center mr-3 bg-white">
                        </div>
                        <span className="font-bold text-navy-900">18 Million - 50 Million</span>
                      </div>

                      <div className="flex items-center p-3 border border-slate-200 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
                         <div className="w-4 h-4 rounded-full border-2 border-slate-300 mr-3"></div>
                         <span className="text-slate-600">50 Million +</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-navy-900 text-white font-bold rounded-lg shadow-md hover:bg-navy-800 transition-colors flex items-center justify-center gap-2">
                    Next Step <ArrowRight size={16} />
                  </button>
                </div>

                {/* Element 3: Security/Exclusivity */}
                <div className="mt-6 flex items-center justify-center gap-2 opacity-60">
                   <Shield size={14} className="text-slate-500"/>
                   <span className="text-xs text-slate-500 font-medium">Bank-Level Data Security • 256-bit SSL</span>
                </div>

              </div>
            </div>
          </div>

          {/* Explainer Side */}
          <div className="lg:col-span-5 space-y-10">
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center text-navy-900 shrink-0">
                <Filter size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">The "Velvet Rope" Strategy</h3>
                <p className="text-slate-600 leading-relaxed">
                  We stop asking "How can I help you?" and start asking "Are you a fit for us?". By requiring them to declare their budget (e.g., <span className="font-bold text-navy-900">18M+</span>), we psychologically position you as the prize.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center text-gold-600 shrink-0">
                <MousePointer size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Smart Logic Routing</h3>
                <p className="text-slate-600 leading-relaxed">
                  <span className="text-red-500 font-bold">If</span> they select "Under 18M" <span className="text-slate-400">→</span> They go to an automated email nurture list.
                  <br />
                  <span className="text-green-600 font-bold">If</span> they select "18M+" <span className="text-slate-400">→</span> You get an instant SMS: "VIP Lead Detected".
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wide">Standard Qualification Questions We Build:</h4>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-gold-500 mt-0.5" />
                        <span>"Are you ready to invest more than 18M?" (Budget)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-gold-500 mt-0.5" />
                        <span>"Are you looking for Capital Appreciation or Rental Yield?" (Goal)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                        <Check size={16} className="text-gold-500 mt-0.5" />
                        <span>"When are you looking to deploy funds?" (Timeline)</span>
                    </li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};