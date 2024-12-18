import React from "react";
import Slider from "react-slick";
import { SpeakersWrapper, Title, SpeakerItem, SpeakerName, SpeakerDescription, SpeakerExpertise, SpeakerImage, SpeakerLocation } from "./styles";
import { SpeakersProps } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Speakers: React.FC<SpeakersProps> = ({ title, speakers }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <SpeakersWrapper>
      <Title>{title}</Title>
      <Slider {...settings}>
        {speakers.map((speaker, index) => (
          <SpeakerItem key={index}>
            <SpeakerImage src={`${process.env.PUBLIC_URL}/${speaker.imageUrl}`} alt={speaker.name} />
            <SpeakerName>{speaker.name}</SpeakerName>
            <SpeakerExpertise>{speaker.expertise}</SpeakerExpertise>
            <SpeakerLocation>{speaker.location}</SpeakerLocation>
            <SpeakerDescription>{speaker.description}</SpeakerDescription>
          </SpeakerItem>
        ))}
      </Slider>
    </SpeakersWrapper>
  );
};

export default Speakers;