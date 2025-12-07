import React from 'react';
import { Mail, Mic2, Video, ArrowUpRight } from 'lucide-react';

export const FutureScaling: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">For Future Scaling</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Once your infrastructure is solid, we unlock the next level of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Email Marketing */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">Email Marketing</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Complete database reactivation and weekly newsletters. We turn your "dead" list into a goldmine of referrals and repeat business.
            </p>
            <div className="flex items-center text-blue-600 font-bold text-sm">
              <span>Nurture Sequence</span>
              <ArrowUpRight size={16} className="ml-1" />
            </div>
          </div>

          {/* Card 2: AI Agent Setter */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center text-gold-600 mb-6 group-hover:scale-110 transition-transform">
              <Mic2 size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">AI Agent Setter</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Voice AI that calls leads within 2 minutes. It qualifies, handles objections, and books appointments on your calendar—completely hands-free.
            </p>
            <div className="flex items-center text-gold-600 font-bold text-sm">
              <span>Outbound Voice</span>
              <ArrowUpRight size={16} className="ml-1" />
            </div>
          </div>

          {/* Card 3: Content Creation */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
              <Video size={28} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-purple-600 transition-colors">Content Creation</h3>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Viral short-form content strategy. We help you script, edit, and distribute reels that position you as the undeniable local celebrity authority.
            </p>
            <div className="flex items-center text-purple-600 font-bold text-sm">
              <span>Brand Authority</span>
              <ArrowUpRight size={16} className="ml-1" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};