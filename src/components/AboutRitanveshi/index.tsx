import React from "react";
import { AboutRitanveshiWrapper, Title, Text, VideoWrapper } from "./styles";
import AboutRitanveshiContent from "../../content/AboutRitanveshiContent.json";

interface AboutRitanveshiProps {
  id: string;
}

const AboutRitanveshi: React.FC<AboutRitanveshiProps> = ({ id }) => {
  const { title, text } = AboutRitanveshiContent;

  return (
    <AboutRitanveshiWrapper id={id}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <VideoWrapper>
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/MD6V-nAFbAM?si=UYFiJk5DhYr-0jZT"
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </AboutRitanveshiWrapper>
  );
};

export default AboutRitanveshi;