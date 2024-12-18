import styled from "styled-components";
import { Row } from "antd";

export const ContactContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem; /* Space between content and form */
  max-width: 100%;
  margin: 0 auto; /* Center the container */

`;

export const StyledRow = styled(Row)`
  width: 100%;
  margin: 2rem 0; /* Add top and bottom margin */
  padding: 2rem 1rem; /* Add top and bottom padding */
  background-color: #fdd0ec; /* Set background color */
  display: flex;
  align-items: stretch; /* Ensure children stretch to the same height */

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentWrapper = styled("div")`
  width: 100%;
  background-color: #f7f9fc;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  height: 830px; /* Set a fixed height */
`;

export const Highlight = styled("p")`
  font-weight: 700;
  color: #ff825c;
  margin-bottom: 1rem;
`;

export const FormContainer = styled("div")`
  width: 100%;
  background-color: #f7f9fc;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  height: 500px; /* Set a fixed height */
`;

export const ButtonWrapper = styled("div")`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
`;