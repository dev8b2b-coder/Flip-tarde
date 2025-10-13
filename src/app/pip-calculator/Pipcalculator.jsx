'use client'
import React, { useRef } from "react";
import Pipbanner from "../Components/Pagecomponents/Pipbanner";
import Pipworkstep from "../Components/Pagecomponents/Pipworkstep";
import Pipuse from "../Components/Pagecomponents/Pipuse";
import Pipvalue from "../Components/Pagecomponents/Pipvalue";
import Pipcalculator from "../Components/Pagecomponents/Pipcalculator";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";


const faqData = [
  {
    question: "What is a pip?",
    answer:
      "A pip is the smallest price movement in a currency pair, used to measure changes in forex trading."
  },
  {
    question: "Why do I need a pip calculator?",
    answer:
      "A pip calculator helps you quickly determine pip values, so you can manage risk and position sizes accurately."
  },
  {
    question: "How do I use the calculator?",
    answer:
      "Simply enter your currency pair, lot size, and account currency, and the calculator will show the pip value instantly."
  },
  {
    question: "Does the pip value change for different currency pairs?",
    answer:
      "Yes, pip values vary depending on the currency pair and your account’s base currency."
  },
  {
    question: "Is this calculator suitable for all account types?",
    answer:
      "Yes, the calculator works for standard, mini, and micro accounts, making it useful for all traders."
  }
];

function Pipcalculatormain() {
  const calculatorRef = useRef(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth",top: '0' });
  };
  return (
    <div>
      <Pipbanner onScrollClick={scrollToCalculator}/>
      <Pipworkstep />
      <div ref={calculatorRef}>
       <Pipcalculator />
      </div>
      <Pipuse />
      <Pipvalue onScrollClick={scrollToCalculator}/>
      <div className="bg-white pb-12 md:pb-18 lg:py-24">
        <div className="inn_container">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color="text-secondary"
            />
          </div>
          <div>
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pipcalculatormain;
