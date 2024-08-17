import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const tutorialSteps = [
  {
    title: "Sign Up",
    description: "Create your account to get started with PrepWise.AI. Our simple sign-up process takes just a few minutes, allowing you to dive into interview preparation quickly and efficiently.",
    imageSrc: "/images/signup.png"
  },
  {
    title: "Choose Your Path",
    description: "Select your desired tech role and skill level. PrepWise.AI tailors your learning experience based on your specific career goals and current expertise, ensuring a personalized preparation journey.",
    imageSrc: "/images/choose-path.png"
  },
  {
    title: "Practice Coding",
    description: "Solve AI-generated coding challenges tailored to your needs. Our platform provides a wide range of problems, from basic algorithms to complex system designs, all customized to match your target role and company.",
    imageSrc: "/images/practice-coding.png"
  },
  {
    title: "Mock Interviews",
    description: "Participate in AI-powered mock interviews to hone your skills. Experience realistic interview scenarios that simulate the pressure and expectations of actual tech interviews, helping you build confidence and improve your performance.",
    imageSrc: "/images/mock-interview.png"
  },
  {
    title: "Track Progress",
    description: "Monitor your improvement and receive personalized recommendations. Our advanced analytics provide insights into your strengths and areas for improvement, guiding your preparation strategy for optimal results.",
    imageSrc: "/images/track-progress.png"
  }
];

const PictorialTutorial = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How PrepWise.AI Works</h2>
        {tutorialSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center mb-20 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={step.imageSrc} alt={step.title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 md:px-8">
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <Button variant="outline">Learn More</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PictorialTutorial;