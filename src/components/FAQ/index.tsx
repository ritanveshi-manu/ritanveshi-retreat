import React, { useState } from "react";
import { FAQItem, FAQProps } from "./types";
import {
  FAQSection,
  FAQTitle,
  FAQItemWrapper,
  Question,
  Answer,
  FAQRow,
  FAQListWrapper,
} from "./styles"; // Import the new styled components

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      <FAQListWrapper>
        {faqs.map((faq, index) => (
          <FAQItemWrapper key={index}>
            <Question onClick={() => toggleAccordion(index)}>
              {faq.question}
            </Question>
            {activeIndex === index && <Answer>{faq.answer}</Answer>}
          </FAQItemWrapper>
        ))}
      </FAQListWrapper>
    </FAQSection>
  );
};

export default FAQ;
