import styled from "styled-components";
import { keyframes } from "styled-components";

// Define keyframes for animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutRetreatWrapper = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #DCFFF1; /* Remove the off-white background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  border-radius: 10px;
`;


export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease-in-out; /* Add animation */
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  animation: ${fadeInUp} 1s ease-in-out; /* Add animation */
`;

export const ImageSliderWrapper = styled.div`
  width: 80%;
  margin: 0 auto 40px;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  animation: ${fadeInUp} 1s ease-in-out; /* Add animation */
`;

export const ImageSlide = styled.div`
  img {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  animation: ${fadeInUp} 1s ease-in-out; /* Add animation */
`;

export const SectionItem = styled.div`
  flex: 1 1 calc(33.333% - 20px);
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center; /* Center the text */
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  animation: ${fadeInUp} 1s ease-in-out; /* Add animation */
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const SectionContent = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const SectionIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;