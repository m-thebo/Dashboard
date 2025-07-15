'use client';

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

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
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section className="w-full py-16 px-2 flex flex-col items-center relative justify-center">
      {/* Blue gradient background container */}
      <div className="faq-blue-gradient absolute top-1/2 left-1/2 w-[700px] h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] opacity-80 z-0 pointer-events-none" />
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-10 z-10">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl flex flex-col gap-4 z-10">
        {faqs.map((faq, i) => (
          <Card
            key={i}
            className={`transition-all duration-300 overflow-hidden border-0 shadow-none rounded-xl cursor-pointer min-h-[64px] ${
              openIndex === i ? "ftmo-card-bg" : "bg-[#23243a]/80"
            }`}
            onClick={() => setOpenIndex(i)}
          >
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div
                  className={`px-6 py-4 text-left font-normal text-base md:text-lg transition-colors duration-200 select-none ${
                    openIndex === i ? "text-white" : "text-white/90"
                  }`}
                >
                  {faq.question}
                </div>
                <div
                  className={`px-6 pb-4 text-sm text-white/90 transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                  style={{
                    marginTop: openIndex === i ? 0 : -8,
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 