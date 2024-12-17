import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 2rem 3rem; /* Added horizontal padding for spacing */
  text-align: center;
  display: flex;
  justify-content: center;
  box-sizing: border-box; /* Ensures padding stays within bounds */

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 2rem 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
  margin: 0; /* Reset default margin */
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;
  background-color: #FFF3EB;
  padding: 2rem; /* Added internal padding for better content spacing */
  border-radius: 8px; /* Optional: Soft border radius for improved visuals */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Subtle shadow for depth */
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem; /* Reduced padding for smaller screens */
  }
`;
