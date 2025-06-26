
import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Admission requirements vary by program, but generally include: Completed application form with personal statement, Official transcripts from previous institutions, Standardized test scores (SAT, ACT, GRE, GMAT as applicable), Letters of recommendation from academic or professional references, English proficiency test scores for international students. Visit our admissions office or schedule a consultation to discuss specific program requirements.'
    },
    {
      question: 'What financial aid options are available?',
      answer: ''
    },
    {
      question: 'What housing options are available for students?',
      answer: ''
    },
    {
      question: 'What support services are available for students?',
      answer: ''
    },
    {
      question: 'How can I schedule a campus visit?',
      answer: ''
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about joining our university community</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                  <span className="text-blue-600">+</span>
                </div>
              </button>
              {faq.answer && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
