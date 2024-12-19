import styled from "styled-components";

export const SpeakersWrapper = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #FFF7D6;
  margin: 2rem auto; /* Center the wrapper and add top and bottom margin */
  width: 70%; /* Set the width to 70% of the parent container */
  max-width: 800px; /* Set a maximum width */
  border-radius: 8px; /* Optional: Add border radius for rounded corners */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Optional: Add box shadow for better appearance */

  @media only screen and (max-width: 768px) {
    width: 90%; /* Adjust width for mobile devices */
    padding: 30px 10px; /* Adjust padding for mobile devices */
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for mobile devices */
  }
`;

export const SpeakerList = styled.div`
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  padding-bottom: 20px; /* Add some padding to avoid scrollbar overlap */
  -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
  gap: 20px; /* Add some gap between items */
  width: 100%; /* Make the wrapper fill the available space */
  justify-content: flex-start; /* Align items to the start */
  padding-left: 20px; /* Add padding to the left to ensure the first item is visible */
`;

export const SpeakerItem = styled.div`
  flex: 0 0 50%; /* Set the width to 50% of the container */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: auto; /* Ensure the height adjusts based on content */
  text-align: center; /* Center align text */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items */

  @media only screen and (max-width: 768px) {
    flex: 0 0 100%; /* Adjust width for mobile devices */
    padding: 15px; /* Adjust padding for mobile devices */
  }
`;

export const SpeakerName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 1.25rem; /* Adjust font size for mobile devices */
  }
`;

export const SpeakerExpertise = styled.p`
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile devices */
  }
`;

export const SpeakerLocation = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for mobile devices */
  }
`;

export const SpeakerDescription = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: justify; /* Justify the text */

  @media only screen and (max-width: 768px) {
    font-size: 0.9rem; /* Adjust font size for mobile devices */
  }
`;

export const SpeakerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
  margin: 0 auto; /* Center the image */
`;