import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tutorialSteps = [
  {
    title: "Sign Up",
    description: "Create your account to get started with PrepWise.AI",
    imageSrc: "/images/signup.png"
  },
  {
    title: "Choose Your Path",
    description: "Select your desired tech role and skill level",
    imageSrc: "/images/choose-path.png"
  },
  {
    title: "Practice Coding",
    description: "Solve AI-generated coding challenges tailored to your needs",
    imageSrc: "/images/practice-coding.png"
  },
  {
    title: "Mock Interviews",
    description: "Participate in AI-powered mock interviews to hone your skills",
    imageSrc: "/images/mock-interview.png"
  },
  {
    title: "Track Progress",
    description: "Monitor your improvement and receive personalized recommendations",
    imageSrc: "/images/track-progress.png"
  }
];

const PictorialTutorial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const steps = section.querySelectorAll('.tutorial-step');

    gsap.fromTo(steps, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How PrepWise.AI Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorialSteps.map((step, index) => (
            <div key={index} className="tutorial-step bg-white p-6 rounded-lg shadow-md">
              <img src={step.imageSrc} alt={step.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PictorialTutorial;