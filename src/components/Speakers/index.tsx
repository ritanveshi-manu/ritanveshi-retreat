import React from "react";
import { SpeakersWrapper, Title, SpeakerList, SpeakerItem, SpeakerName, SpeakerDescription, SpeakerExpertise, SpeakerImage, SpeakerLocation } from "./styles";
import { SpeakersProps } from "./types";

const Speakers: React.FC<SpeakersProps> = ({ title, speakers }) => {
  return (
    <SpeakersWrapper>
      <Title>{title}</Title>
      <SpeakerList>
        {speakers.map((speaker, index) => (
          <SpeakerItem key={index}>
            <SpeakerImage src={`${process.env.PUBLIC_URL}/${speaker.imageUrl}`} alt={speaker.name} />
            <SpeakerName>{speaker.name}</SpeakerName>
            <SpeakerExpertise>{speaker.expertise}</SpeakerExpertise>
            <SpeakerLocation>{speaker.location}</SpeakerLocation>
            <SpeakerDescription>{speaker.description}</SpeakerDescription>
          </SpeakerItem>
        ))}
      </SpeakerList>
    </SpeakersWrapper>
  );
};

export default Speakers;