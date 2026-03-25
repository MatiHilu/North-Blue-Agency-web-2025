"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./animated-section";
import { faqSchema } from "@/lib/jsonld";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
      {/* FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4081] via-purple-500 to-[#00b2ff] animate-gradient-x">
              {title}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We answer the most common questions about our services
          </p>
        </AnimatedSection>

        <dl className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden bg-white">
                  <dt>
                    <button
                      id={questionId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4081] focus-visible:ring-inset"
                      onClick={() => toggleItem(index)}
                    >
                      <span className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`text-[#ff4081] flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        size={20}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <dd
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    hidden={!isOpen}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </dd>
                </div>
              </AnimatedSection>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
