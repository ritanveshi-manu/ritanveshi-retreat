import React, { useState } from "react";
import { FAQItem, FAQProps } from "./types";
import {
  FAQSection,
  FAQTitle,
  FAQItemWrapper,
  Question,
  Answer,
  FAQListWrapper,
  IconWrapper,
} from "./styles"; // Import the new styled components
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons
import ReactMarkdown from "react-markdown";

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
              <IconWrapper>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </IconWrapper>
            </Question>
            {activeIndex === index && (
              <Answer>
                <ReactMarkdown>{faq.answer}</ReactMarkdown>
              </Answer>
            )}
          </FAQItemWrapper>
        ))}
      </FAQListWrapper>
    </FAQSection>
  );
};

export default FAQ;