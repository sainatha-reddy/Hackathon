import React from 'react';
import Hero from './components/Hero';
import PrizePool from './components/PrizePool';
import CallToAction from './components/CallToAction';
import PastEvents from './components/PastEvents';

function App() {
  return (
    <div className="min-h-screen bg-midnight text-text">
      <Hero />
      <PrizePool />
      <CallToAction />
      <PastEvents />
    </div>
  );
}

export default App;