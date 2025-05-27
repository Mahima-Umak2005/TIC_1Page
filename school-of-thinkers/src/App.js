import React from 'react';
import './App.css';
import Header from './components/Header/header.js';
import HeroSection from './components/HeroSection/herosection.js';
import ValueProposition from './components/ValueProposition/ValueProposition.js';
import Products from './components/Products/products.js/index.js';
import ThinkersClub from './components/ThinkersClub/ThinkersClub.js';
import InvestorsTable from './components/InvestorsTable/InvestorsTable.js';
import Community from './components/Community/Community.js';
import Testimonials from './components/Testimonials/Testimonials.js';
import CTA from './components/CTA/CTA';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ValueProposition />
      <Products />
      <ThinkersClub />
      <InvestorsTable />
      <Community />
      <Testimonials />
      <CTA />
      <FAQ />
    </div>
  );
}

export default App;