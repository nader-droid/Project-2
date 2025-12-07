import React from 'react';
import { XCircle, CheckCircle, Clock, Smartphone, TrendingUp, Users } from 'lucide-react';

const Card: React.FC<{ title: string; points: string[]; isBad?: boolean }> = ({ title, points, isBad }) => (
  <div className={`p-8 rounded-2xl border ${isBad ? 'border-red-200 bg-red-50' : 'border-emerald-200 bg-emerald-50'} shadow-xl transition-all duration-300 hover:shadow-2xl`}>
    <h3 className={`text-2xl font-serif font-bold mb-6 ${isBad ? 'text-red-800' : 'text-emerald-900'}`}>{title}</h3>
    <ul className="space-y-4">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start gap-3">
          {isBad ? <XCircle className="text-red-500 shrink-0 mt-1" size={20} /> : <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={20} />}
          <span className={isBad ? 'text-red-700' : 'text-emerald-800'}>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">The Market Has Shifted. Have You?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Speed to lead is everything. Most agents are losing 80% of their pipeline simply because they can't respond fast enough.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card 
            title="The Old Way (Manual)" 
            isBad={true}
            points={[
              "Chasing 'dead' leads manually for hours.",
              "Missed calls while at showings or closing deals.",
              "Inconsistent follow-up (leads fall through cracks).",
              "Expensive Zillow/Realtor.com leads with low conversion.",
              "Stressful rollercoaster income months."
            ]}
          />
          <Card 
            title="The Growth Infrastructure" 
            isBad={false}
            points={[
              "Instant SMS/Email response within 30 seconds.",
              "AI Assistant qualifies leads 24/7.",
              "Automated 12-month nurture campaigns.",
              "High-intent leads generated from custom Landing Pages.",
              "Predictable pipeline & consistent closings."
            ]}
          />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-navy-100 text-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">Save 20+ Hours/Week</h4>
            <p className="text-slate-600">Reclaim your time. Let the system handle the grunt work.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-navy-100 text-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">Instant Speed-to-Lead</h4>
            <p className="text-slate-600">Engage prospects the second they click "Learn More".</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-navy-100 text-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2">3x Your Conversion</h4>
            <p className="text-slate-600">Turn more lukewarm leads into hot appointments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
