import styled from "styled-components";

export const PolicyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Large = styled.a`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-decoration: none; /* Remove underline on hover */
  }
`;

export const MarkdownContent = styled.div`
  h3 {
    font-size: 1.5rem;
    color: #18216d; /* Change subheader color */
    margin-top: 1rem;
  }

  p, li {
    font-size: 1rem;
    color: #555; /* Set text color */
    line-height: 1.5;
  }

  ul {
    padding-left: 1.5rem;
    color: #555; /* Set bullet points color */
  }

  strong {
    font-weight: bold;
    color: #18216d; /* Change subheader color */
  }
`;