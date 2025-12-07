import React from 'react';
import { Hero } from './components/Hero';
import { LandingPageContrast } from './components/LandingPageContrast';
import { InfrastructureShowcase } from './components/InfrastructureShowcase';
import { FutureScaling } from './components/FutureScaling';
import { Summary } from './components/Summary';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* Navigation removed as requested */}

      <main>
        <Hero />
        <LandingPageContrast />
        <InfrastructureShowcase />
        <FutureScaling />
        <Summary />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;