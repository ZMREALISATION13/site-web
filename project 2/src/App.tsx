import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;