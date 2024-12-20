import styled, { keyframes } from "styled-components";

// Define keyframes for animations if they are used
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
  }
  to {
    transform: translateX(0);
  }
`;

export const HeroBannerWrapper = styled.div`
  background: url('${process.env.PUBLIC_URL}/img/svg/banner_2.jpg') no-repeat center center;
  background-size: cover;
  padding: 100px 20px;
  text-align: center;
  color: #fff; /* Set text color to white */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 2s ease-in-out;
  // height: 100vh; /* Set the height to 100% of the viewport height */
  min-height: 500px; /* Ensure a minimum height */
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
  color: #fff; /* Ensure text color is white */
`;