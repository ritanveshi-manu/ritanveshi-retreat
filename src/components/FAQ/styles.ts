import styled from "styled-components";
import { Row } from "antd";

// General container for the FAQ section
export const FAQSection = styled.section`
  position: relative;
  padding: 10rem 0 8rem;
  background-color: #f9f9f9;
  margin: 4rem 0; /* Add top and bottom margin */

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
    margin: 2rem 0; /* Adjust margin for smaller screens */
  }
`;

// Title for the FAQ section
export const FAQTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-family: "Motiva Sans", sans-serif;
`;

// Wrapper for each FAQ item (question and answer)
export const FAQItemWrapper = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

// The clickable question styling
export const Question = styled.div`
  font-size: 1.25rem;
  padding: 1.2rem;
  cursor: pointer;
  color: #09326C;
  background-color: #f7f7f7;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e2e2e2;
    color: #09326C;
  }
`;

// The answer text styling
export const Answer = styled.div`
  padding: 1.2rem;
  font-size: 1rem;
  color: #555;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 1rem;
`;

// Row container for FAQ items (if you want to add grid structure later)
export const FAQRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

// A container for the FAQ list wrapper if you need a specific width
export const FAQListWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 0 2rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;