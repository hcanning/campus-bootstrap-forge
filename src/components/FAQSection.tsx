
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Admission requirements vary by program, but generally include: Completed application form with personal statement, Official transcripts from previous institutions, Standardized test scores (SAT, ACT, GRE, GMAT as applicable), Letters of recommendation from academic or professional references, English proficiency test scores for international students. Visit our admissions office or schedule a consultation to discuss specific program requirements.'
    },
    {
      question: 'What financial aid options are available?',
      answer: 'We offer various financial aid options including merit-based scholarships, need-based grants, work-study programs, and federal student loans. Our financial aid office works with students to create personalized funding packages to make education accessible and affordable.'
    },
    {
      question: 'What housing options are available for students?',
      answer: 'We provide on-campus residence halls, apartment-style housing, and assistance with off-campus housing options. All first-year students are guaranteed on-campus housing, and upperclass students have priority registration for campus housing.'
    },
    {
      question: 'What support services are available for students?',
      answer: 'Our comprehensive support services include academic tutoring centers, career counseling, mental health services, disability support services, international student services, and peer mentoring programs to ensure student success.'
    },
    {
      question: 'How can I schedule a campus visit?',
      answer: 'Campus visits can be scheduled through our admissions office. We offer guided tours, information sessions, and opportunities to meet with faculty and current students. Virtual tours are also available for those unable to visit in person.'
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about joining our university community</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-blue-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
