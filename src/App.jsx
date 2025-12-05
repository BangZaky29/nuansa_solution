import React from 'react';


// Import Components
import Header from './header';
import Hero from './hero';
import TeamSection from './TeamSection';
import Features from './features';
import Pricing from './pricing';
import Footer from './footer';

// Import Styles
import './styles/main.css';
import './styles/components.css';
import './styles/TeamSection.css';
import './App.css';

const App = () => {
  return (
    <div className="app-opening">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default App;
