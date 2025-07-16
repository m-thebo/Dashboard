'use client';

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a prop trading firm?",
    answer:
      "A firm that provides traders with capital to trade financial markets in exchange for a share of profits.",
  },
  {
    question: "How are ratings calculated?",
    answer: "Ratings are calculated based on a combination of user reviews, firm performance, and other key metrics.",
  },
  {
    question: "How do I choose the right firm?",
    answer: "Consider your trading style, risk tolerance, and the firm's terms. Use our comparison tools to find your best match.",
  },
  {
    question: "What platforms are best for prop trading?",
    answer: "Popular platforms include MetaTrader, cTrader, and TradingView. The best platform depends on your preferences and the firm's offerings.",
  },
  {
    question: "How often is the data updated?",
    answer: "Our data is updated regularly to ensure you have the most accurate and current information.",
  },
];

const FAQSection = () => {
  return (
    <section className="w-full py-16 px-4 lg:px-0 flex flex-col items-center relative justify-center">
      {/* Blue gradient background container */}
      <div className="faq-blue-gradient absolute top-1/2 left-1/2 w-[700px] h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] opacity-80 z-0 pointer-events-none" />
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-10 z-10">Frequently Asked Questions</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-2xl flex flex-col gap-4 z-10"
        defaultValue="item-0"
      >
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className={`transition-all duration-300 overflow-hidden border-0 shadow-none rounded-xl min-h-[64px] bg-[#23243a]/80 data-[state=open]:!bg-gradient-to-br data-[state=open]:!from-[#017AFF] data-[state=open]:!to-[#004AAC] data-[state=open]:!border-0 data-[state=open]:!shadow-[inset_0_1.2px_5px_0_#004AAC33,inset_0_1px_3px_0_#017AFF44,inset_0_-1.2px_5px_0_#004AAC22,0_1.2px_5px_0_#004AAC33,0_2px_8px_0_#017AFF22,0_4px_16px_0_#004AAC22,0_8px_32px_0_#017AFF11]`}
          >
            <AccordionTrigger
              className={`px-6 py-4 text-left font-normal text-base md:text-lg transition-colors duration-200 select-none text-white/90 data-[state=open]:!text-white border-0 no-underline hover:no-underline [&>svg]:hidden`}
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent
              className="px-6 pb-4 text-sm text-white/90 flex flex-col gap-2 transition-all duration-300 ease-in-out border-0"
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection; 