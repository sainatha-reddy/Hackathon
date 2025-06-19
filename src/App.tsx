import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CallToAction from './components/CallToAction';
import PastEvents from './components/PastEvents';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-midnight text-text">
      <Navbar />
      <Hero />
      <AboutUs/>
      {/* <PrizePool /> */}
      <CallToAction />
      <PastEvents />
    </div>
  );
}

export default App;