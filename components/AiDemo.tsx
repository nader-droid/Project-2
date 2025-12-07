import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw, MessageSquare } from 'lucide-react';
import { sendLeadMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hi! This is Sarah with Elite Realty. I saw you were looking at homes in the downtown area. Are you looking to make a move soon, or just browsing?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Create history for API
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      
      const responseText = await sendLeadMessage(history, userMsg.text);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI Error", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I'm having a little trouble connecting to the scheduling system. Could you try asking again?"
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetDemo = () => {
    setMessages([{
      id: '1',
      role: 'model',
      text: "Hi! This is Sarah with Elite Realty. I saw you were looking at homes in the downtown area. Are you looking to make a move soon, or just browsing?"
    }]);
    setLoading(false);
  };

  return (
    <section id="demo" className="py-24 bg-navy-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold-500 rounded-lg text-navy-900">
                <Bot size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Meet Your New ISA</h2>
            </div>
            <p className="text-lg text-slate-300 mb-8">
              Experience the "AI Brain" of our infrastructure. This isn't a basic chatbot. It's a trained Inside Sales Agent that works 24/7/365.
            </p>
            <ul className="space-y-6 text-slate-300">
              <li className="flex gap-4">
                <div className="bg-navy-800 p-2 rounded shrink-0 h-fit border border-navy-700">
                  <MessageSquare size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Instant Qualification</h4>
                  <p className="text-sm">Determines timeframe, budget, and motivation before you ever speak to them.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-navy-800 p-2 rounded shrink-0 h-fit border border-navy-700">
                  <RefreshCw size={20} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Perfect Hand-off</h4>
                  <p className="text-sm">Once qualified, the bot books an appointment directly on your calendar.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10 p-6 bg-navy-800/50 rounded-xl border border-navy-700">
              <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-2">Try it yourself</p>
              <p className="text-slate-300">
                Type in the chat box as if you were a lead. Try to be difficult, vague, or eager. See how "Sarah" handles it.
              </p>
            </div>
          </div>

          {/* Phone/Chat Simulator Side */}
          <div className="flex justify-center">
            <div className="w-[380px] h-[650px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
              {/* Phone Header */}
              <div className="bg-slate-800 p-4 pt-8 text-center border-b border-slate-700">
                <p className="text-xs text-slate-400 mb-1">Incoming Message</p>
                <p className="font-bold text-white">Sarah (AI Assistant)</p>
              </div>

              {/* Chat Area */}
              <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white text-slate-500 p-3 rounded-2xl rounded-tl-none border border-slate-200 text-sm flex gap-1 items-center">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="bg-white p-3 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Reply as a lead..."
                    className="flex-1 bg-slate-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </div>
                <button 
                  onClick={resetDemo}
                  className="w-full mt-2 text-xs text-slate-400 hover:text-slate-600 flex items-center justify-center gap-1"
                >
                  <RefreshCw size={12} /> Reset Demo
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
