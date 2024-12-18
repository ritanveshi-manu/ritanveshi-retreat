import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 30px; /* Adjust the position to move it slightly left */
  background-color: #DFD8FD; /* Make the background transparent */
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const FloatingButton = () => {
  const scrollToContactForm = () => {
    const formElement = document.getElementById("contact");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button onClick={scrollToContactForm}>
      <img src={`${process.env.PUBLIC_URL}/img/svg/book_now.png`} alt="Book Now" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
    </Button>
  );
};

export default FloatingButton;