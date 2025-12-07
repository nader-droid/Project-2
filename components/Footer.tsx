import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-500 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© {new Date().getFullYear()} EstateGrowth Infrastructure. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
