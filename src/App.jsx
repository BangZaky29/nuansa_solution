import React from 'react';


// Import Components
import Header from './header';
import Hero from './components/hero';
import TeamSection from './components/TeamSection';
import Features from './components/features';
import Pricing from './components/pricing';
import Footer from './footer';

// Import Styles
import './styles/main.css';
import './styles/components.css';
import './styles/TeamSection.css';
import './styles/pricing.css';
import './App.css';

const App = () => {
  return (
    <div className="app-opening">
      <Header />
      <Hero />
      <Features />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default App;
