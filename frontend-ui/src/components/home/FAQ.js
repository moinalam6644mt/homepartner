"use client";

import { useEffect } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of home cleaning services do you provide?",
      answer:
        "We provide a variety of cleaning services including full home cleaning, bathroom cleaning, sofa, carpet & mattress cleaning, and more.",
    },
    {
      question: "How can I book a service?",
      answer:
        "You can book a service by visiting our 'Services' page, selecting the desired service, and completing the booking process.",
    },
    {
      question: "Are the cleaning materials included in the service?",
      answer:
        "Yes, all necessary cleaning materials and equipment are provided by our professionals.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel or reschedule a booking up to 24 hours before the scheduled time without any charges.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team through the 'Help & Support' section on our website or by calling our support number.",
    },
  ];

  // Load Bootstrap JS dynamically for functionality
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <section className="py-5">
      <h2 className="mb-4 text-center">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse-${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
