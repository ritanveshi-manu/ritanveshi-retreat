import styled, { keyframes } from "styled-components";

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const HeroBannerWrapper = styled.div`
  background: url('${process.env.PUBLIC_URL}/img/svg/banner.jpg') no-repeat center center;
  background-size: cover;
  padding: 100px 20px;
  text-align: center;
  color: #fff; /* Set text color to white */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 2s ease-in-out;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  animation: ${slideInFromLeft} 1s ease-in-out;
  color: #fff; /* Ensure text color is white */
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  animation: ${slideInFromRight} 1s ease-in-out;
  color: #fff; /* Ensure text color is white */
`;

export const HeroDates = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;
  animation: ${slideInFromLeft} 1.5s ease-in-out;
  color: #fff; /* Ensure text color is white */
`;

export const HeroLocation = styled.p`
  font-size: 1.5rem;
  animation: ${slideInFromRight} 1.5s ease-in-out;
  color: #fff; /* Ensure text color is white */
`;