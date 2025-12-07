import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DollarSign, Calculator } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [leads, setLeads] = useState(50);
  const [commission, setCommission] = useState(10000);
  const [manualConv, setManualConv] = useState(1.5); // 1.5%
  const [infraConv, setInfraConv] = useState(4.5); // 4.5%

  const data = useMemo(() => {
    const manualRevenue = leads * (manualConv / 100) * commission;
    const infraRevenue = leads * (infraConv / 100) * commission;
    const extra = infraRevenue - manualRevenue;

    return [
      { name: 'Current Way', revenue: manualRevenue, color: '#94a3b8' },
      { name: 'With Infrastructure', revenue: infraRevenue, color: '#f59e0b' },
    ];
  }, [leads, commission, manualConv, infraConv]);

  const extraRevenue = data[1].revenue - data[0].revenue;

  return (
    <section id="roi" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4 flex items-center justify-center gap-3">
            <Calculator className="text-gold-500" /> 
            Calculate Your Potential
          </h2>
          <p className="text-slate-600">See exactly how much revenue you're leaving on the table.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Monthly Leads Generated</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" min="10" max="500" step="10" 
                    value={leads} onChange={(e) => setLeads(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <span className="w-16 text-right font-mono font-bold text-lg">{leads}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy-900 mb-2">Avg Commission ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="number" 
                    value={commission} onChange={(e) => setCommission(Number(e.target.value))}
                    className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-500 mb-2">Manual Conv. Rate (%)</label>
                  <input 
                    type="number" step="0.1"
                    value={manualConv} onChange={(e) => setManualConv(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg outline-none font-mono text-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gold-600 mb-2">Infra Conv. Rate (%)</label>
                  <input 
                    type="number" step="0.1"
                    value={infraConv} onChange={(e) => setInfraConv(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-gold-50 border border-gold-200 rounded-lg outline-none font-mono text-navy-900 font-bold"
                  />
                </div>
              </div>
              
              <div className="p-6 bg-navy-900 text-white rounded-xl mt-6">
                <p className="text-slate-400 text-sm mb-1">Additional Annual Revenue</p>
                <p className="text-4xl font-bold text-gold-400">
                  +${(extraRevenue * 12).toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 mt-2">*Based on improved conversion rates alone.</p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[400px] w-full">
              <h3 className="text-center font-bold text-navy-900 mb-6">Projected Monthly Revenue</h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 14}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Bar dataKey="revenue" radius={[8, 8, 0, 0]} animationDuration={1000}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
