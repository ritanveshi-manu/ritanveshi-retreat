import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 50px 20px;
  background-color: #E7F9FF;
  box-sizing: border-box; /* Ensures padding doesn't overflow */
  border-radius: 10px;
  @media only screen and (max-width: 1024px) {
    padding: 10rem 2rem 10rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  padding: 2rem; /* Added padding for better spacing */

  @media only screen and (max-width: 575px) {
    padding: 1.5rem;
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 1.5rem; /* Added padding for spacing */
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 1rem; /* Added margin for spacing above buttons */

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
