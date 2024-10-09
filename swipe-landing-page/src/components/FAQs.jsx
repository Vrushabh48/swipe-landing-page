import { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What can I do with Swipe?",
      answer:
        "With Swipe you can create all categories of Billing documents like Sales Invoices, Sales Returns, Purchase Invoices, Purchase Orders, Estimates, Manage Inventory in real time with Stock In & Stock Out options, and generate Delivery Challans for Invoices directly. Barcode Scanner and Thermal Print options are also available."
    },
    {
      question: "Is my data safe on Swipe?",
      answer: "Yes, Swipe ensures that your data is secure and private with encryption and secure access."
    },
    {
      question: "Can I add my Company’s details and logo on Swipe?",
      answer: "Yes, you can customize Swipe with your company’s details and logo for branding purposes."
    },
    {
      question: "Can I use Swipe for Free?",
      answer: "Swipe offers a free plan with essential features. You can upgrade for more advanced features."
    },
    {
      question: "Who all can use Swipe?",
      answer: "Swipe can be used by businesses of all sizes, from small businesses to enterprises."
    },
    {
      question: "Can I share my invoices or other documents with my customers?",
      answer: "Yes, Swipe allows you to easily share invoices and other documents directly with your customers."
    }
  ];

  return (
    <div className="container px-4 sm:px-8 md:px-12 lg:px-36 pt-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-4 text-base sm:text-lg md:text-xl font-semibold focus:outline-none"
            >
              {faq.question}
              <span className="text-xl sm:text-2xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
