import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '$19',
    features: [
      '50 AI-generated coding challenges',
      '5 mock interviews per month',
      'Basic progress tracking',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '$49',
    features: [
      'Unlimited AI-generated coding challenges',
      '15 mock interviews per month',
      'Advanced progress tracking',
      'Priority email support',
      'Personalized learning path'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Unlimited mock interviews',
      'Custom challenge creation',
      'Dedicated account manager',
      'API access for integration'
    ]
  }
];

const PricingPlans = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
              <ul className="text-left mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;