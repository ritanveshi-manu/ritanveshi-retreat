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

export const HeroBannerWrapper = styled.div`
  background: url('${process.env.PUBLIC_URL}/img/svg/banner_x4.jpg') no-repeat center center;
  background-size: cover;
  padding: 100px 20px;
  text-align: center;
  color: #fff; /* Set text color to white */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 2s ease-in-out;
  min-height: 500px; /* Ensure a minimum height */

  @media only screen and (max-width: 768px) {
    padding: 50px 10px; /* Adjust padding for mobile devices */
    min-height: 300px; /* Adjust minimum height for mobile devices */
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff; /* Ensure text color is white */

  @media only screen and (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for mobile devices */
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff; /* Ensure text color is white */

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for mobile devices */
  }
`;