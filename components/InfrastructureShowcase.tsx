import React from 'react';
import { Tag, Zap, MessageSquare, Database, ArrowRight, UserPlus, CheckCircle2, Clock } from 'lucide-react';

export const InfrastructureShowcase: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 border-t border-b border-slate-200">
      
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">The GoHighLevel Engine</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          We turn chaos into a predictable machine. Here is exactly how a stranger becomes a booked appointment in your calendar.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* STEP 1: CAPTURE & TAG */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
           <div className="order-2 md:order-1 relative">
              {/* Abstract Visual of Lead Entry */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative overflow-hidden">
                 <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        <UserPlus size={24} />
                    </div>
                    <div>
                        <div className="font-bold text-navy-900">New Lead Detected</div>
                        <div className="text-xs text-slate-500">Source: Facebook Ad #4 (Miami Luxury)</div>
                    </div>
                    <div className="ml-auto text-xs text-slate-400">Just now</div>
                 </div>

                 <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-500">Name</span>
                        <span className="text-sm font-bold text-navy-900">Michael Rivera</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium text-slate-500">Timeline</span>
                        <span className="text-sm font-bold text-navy-900">1-3 Months (ASAP)</span>
                    </div>
                 </div>

                 {/* The Tagging Animation Visual */}
                 <div className="mt-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Applying Logic Tags...</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200 flex items-center gap-1 animate-fade-in-up">
                            <Tag size={12} /> SELLER_LEAD
                        </span>
                        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full border border-red-200 flex items-center gap-1 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                            <Tag size={12} /> HOT_TIMELINE
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full border border-blue-200 flex items-center gap-1 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                            <Tag size={12} /> SOURCE_FB
                        </span>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-navy-900 text-white rounded-xl flex items-center justify-center font-serif font-bold text-xl mb-6">1</div>
              <h3 className="text-3xl font-serif font-bold text-navy-900 mb-4">Lead Capture & Smart Tagging</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                 The moment someone fills out that form, they aren't just a "contact." They are a data point. 
              </p>
              <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                      <span className="text-slate-700"><strong>Instant Ingestion:</strong> Data flows from the landing page to GHL in 0.4 seconds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                      <span className="text-slate-700"><strong>Behavioral Tagging:</strong> We automatically tag them based on their answers. "Timeline: ASAP" triggers the <span className="font-mono text-red-600 bg-red-50 px-1 rounded">HOT</span> tag.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                      <span className="text-slate-700"><strong>Pipeline Movement:</strong> The system automatically moves them to the "New Opportunity" stage.</span>
                  </li>
              </ul>
           </div>
        </div>

        {/* STEP 2: AUTOMATION FLOW */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-navy-900 text-white rounded-xl flex items-center justify-center font-serif font-bold text-xl mb-6">2</div>
              <h3 className="text-3xl font-serif font-bold text-navy-900 mb-4">The Automation Workflow</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                 Once tagged, the "Hot Lead" workflow fires. You don't lift a finger until they reply.
              </p>
              <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                      <span className="text-slate-700"><strong>Immediate SMS:</strong> A personalized text goes out instantly (e.g., "Hi Michael, saw you're interested in your home's value...").</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                      <span className="text-slate-700"><strong>The Wait Step:</strong> The system listens. If they reply, the bot takes over. If not, it follows up the next day.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold-500 mt-1" size={20} />
                      <span className="text-slate-700"><strong>Notification:</strong> You get a push notification only when action is required.</span>
                  </li>
              </ul>
            </div>

            <div className="relative">
                {/* Visual Workflow Diagram */}
                <div className="bg-navy-950 rounded-2xl p-8 border border-navy-800 shadow-2xl relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Zap size={100} className="text-white" />
                    </div>

                    {/* Nodes */}
                    <div className="space-y-6 relative z-10">
                        {/* Trigger */}
                        <div className="flex items-center justify-center">
                            <div className="bg-slate-800 text-white px-6 py-2 rounded-lg border border-slate-600 text-sm font-mono shadow-lg">
                                Trigger: Tag added "HOT_LEAD"
                            </div>
                        </div>
                        
                        <div className="h-6 w-px bg-slate-700 mx-auto"></div>

                        {/* Action 1 */}
                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-green-500 flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                                <MessageSquare size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-navy-900">SMS 1</div>
                                <div className="text-xs text-slate-500">"Hi {`{contact.first_name}`}..."</div>
                            </div>
                        </div>

                        <div className="h-6 w-px bg-slate-700 mx-auto"></div>

                        {/* Condition */}
                        <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-gold-500 flex items-center gap-4">
                            <div className="w-10 h-10 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center shrink-0">
                                <Clock size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-navy-900">Wait for Reply</div>
                                <div className="text-xs text-slate-500">Timeout: 24 Hours</div>
                            </div>
                        </div>

                        <div className="h-6 w-px bg-slate-700 mx-auto"></div>

                        {/* Path Split */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-red-50 p-3 rounded-lg border border-red-100 text-center opacity-50">
                                <div className="text-xs font-bold text-red-800">No Reply</div>
                                <div className="text-[10px] text-red-600">Send Email 1</div>
                            </div>
                            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-center transform scale-105 shadow-md">
                                <div className="text-xs font-bold text-emerald-800">Replied!</div>
                                <div className="text-[10px] text-emerald-600">Alert Agent</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};