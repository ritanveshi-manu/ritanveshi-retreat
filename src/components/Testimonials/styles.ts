import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
  padding: 50px 0;
  text-align: center;
  background-color: #FFF3EB;
  margin: 2rem auto;

`;

export const TestimonialsContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  padding-bottom: 20px; /* Add some padding to avoid scrollbar overlap */
  -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
  gap: 16px; /* Add some gap between items */
`;

export const TestimonialItem = styled.div`
  flex: 0 0 auto; /* Prevent items from shrinking or growing */
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 300px; /* Set a fixed width for each testimonial item */
  height: auto; /* Ensure the height adjusts based on content */
`;

export const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 10px;
`;

export const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #555;
`;

export const TestimonialDate = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

export const TestimonialRating = styled.p`
  font-size: 1rem;
  color: #ffcc00;
`;

export const TestimonialImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const TestimonialLocation = styled.p`
  font-size: 0.9rem;
  color: #888;
`;