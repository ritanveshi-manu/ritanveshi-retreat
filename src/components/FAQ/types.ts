// src/components/FAQ/types.ts

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  faqs: FAQItem[];
}
