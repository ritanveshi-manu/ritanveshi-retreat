import styled from "styled-components";

export const SpeakersWrapper = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #FFF7D6;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
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
  flex: 0 0 auto; /* Prevent items from shrinking or growing */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px; /* Increase the width for each speaker item */
  height: auto; /* Ensure the height adjusts based on content */
  text-align: left;
`;

export const SpeakerName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: justify; /* Justify the text */
`;

export const SpeakerExpertise = styled.p`
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 10px;
  text-align: justify; /* Justify the text */
`;

export const SpeakerLocation = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 10px;
  text-align: justify; /* Justify the text */
`;

export const SpeakerDescription = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: justify; /* Justify the text */
`;

export const SpeakerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
`;