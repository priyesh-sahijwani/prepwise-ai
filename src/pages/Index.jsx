import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PictorialTutorial from '../components/PictorialTutorial';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Features />
        <PictorialTutorial />
        <PricingPlans />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;