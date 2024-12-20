import styled from "styled-components";

export const TestimonialsWrapper = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #FFF3EB;
  margin: 2rem auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  padding: 20px; /* Add padding */
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
  width: 350px; /* Increase the width for each testimonial item */
  height: 350px; /* Increase the height to make it square */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute space between items */
`;

export const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 10px;
  flex-grow: 1; /* Allow text to grow and take available space */
  overflow: hidden; /* Hide overflow content */
  text-overflow: ellipsis; /* Add ellipsis for overflow text */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  white-space: normal; /* Allow text to wrap */
  position: relative;

  &:hover::after {
    content: attr(data-fulltext);
    position: absolute;
    left: 0;
    top: 100%;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    white-space: normal;
    z-index: 10;
    width: 300px;
  }
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

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;