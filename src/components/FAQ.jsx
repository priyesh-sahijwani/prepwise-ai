import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is PrepWise.AI?",
    answer: "PrepWise.AI is an AI-powered platform designed to help tech professionals prepare for coding interviews through personalized practice, mock interviews, and progress tracking."
  },
  {
    question: "How does the AI generate coding challenges?",
    answer: "Our AI analyzes your skill level, target role, and learning goals to create tailored coding challenges that match real-world interview scenarios."
  },
  {
    question: "Can I practice for specific companies or roles?",
    answer: "Yes, you can customize your learning path to focus on specific companies, roles, or technologies you're interested in."
  },
  {
    question: "How realistic are the AI-powered mock interviews?",
    answer: "Our mock interviews simulate real interview conditions, including technical questions, problem-solving scenarios, and behavioral assessments, providing a highly realistic experience."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial for new users to explore our platform and experience the benefits of AI-powered interview preparation."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;