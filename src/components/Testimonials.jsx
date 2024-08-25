import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer at Google',
    content: 'PrepWise.AI helped me ace my Google interview. The AI-generated challenges were spot-on, and the mock interviews boosted my confidence tremendously.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Frontend Developer at Facebook',
    content: "I can't thank PrepWise.AI enough. The personalized learning path and real-time feedback on my coding solutions were game-changers in my interview prep.",
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Data Scientist at Amazon',
    content: 'The AI interviewer in PrepWise.AI is incredibly realistic. It helped me identify my weak areas and improve rapidly. I landed my dream job thanks to this platform!',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    name: 'Alex Thompson',
    role: 'Backend Developer at Microsoft',
    content: 'PrepWise.AI's comprehensive coverage of data structures and algorithms was instrumental in my interview success. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    name: 'Olivia Wang',
    role: 'Full Stack Developer at Netflix',
    content: 'The platform's adaptive learning system helped me focus on my weak areas. It's like having a personal interview coach available 24/7.',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
  },
  {
    name: 'David Kim',
    role: 'Mobile Developer at Uber',
    content: 'PrepWise.AI's mock interviews are incredibly realistic. They helped me overcome my interview anxiety and perform confidently.',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const scrollAnimation = async () => {
      await controls.start({ x: '-100%', transition: { duration: 20, ease: 'linear' } });
      controls.set({ x: '0%' });
      scrollAnimation();
    };

    scrollAnimation();
  }, [controls]);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <motion.div
          ref={scrollRef}
          animate={controls}
          className="flex space-x-8"
          style={{ width: `${testimonials.length * 400}px` }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md flex-shrink-0"
              style={{ width: '350px' }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;