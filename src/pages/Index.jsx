import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PictorialTutorial from '../components/PictorialTutorial';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <PictorialTutorial />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;