import React from 'react';
import { Layout, MessageCircle, Calendar, Database, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: <Layout className="text-blue-500" size={32} />,
    title: "High-Converting Landing Pages",
    desc: "Custom-built funnels designed specifically for buyer/seller intent. No generic website fluff."
  },
  {
    icon: <MessageCircle className="text-green-500" size={32} />,
    title: "Omni-Channel Automation",
    desc: "SMS, Email, and Voicemail drops happen automatically. Never let a lead go cold."
  },
  {
    icon: <Calendar className="text-purple-500" size={32} />,
    title: "Smart Calendar Booking",
    desc: "Leads book directly into your schedule only after they are qualified."
  },
  {
    icon: <Database className="text-orange-500" size={32} />,
    title: "CRM & Pipeline Management",
    desc: "Visualize your deals. Drag and drop leads from 'New' to 'Closing' to 'Sold'."
  },
  {
    icon: <ShieldCheck className="text-indigo-500" size={32} />,
    title: "Reputation Management",
    desc: "Automatically request Google Reviews from happy clients to boost your SEO."
  },
  {
    icon: <Zap className="text-yellow-500" size={32} />,
    title: "Instant Lead Notifications",
    desc: "Get pinged on your phone the moment a high-value lead enters the system."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-bold uppercase tracking-wider mb-2">What's Included</p>
          <h2 className="text-4xl font-serif font-bold text-navy-900">Complete Growth Infrastructure</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-xl hover:shadow-xl transition-shadow bg-slate-50 hover:bg-white group">
              <div className="mb-6 bg-white w-16 h-16 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
