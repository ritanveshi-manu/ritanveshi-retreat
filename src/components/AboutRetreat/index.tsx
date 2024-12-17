import React from "react";
import Slider from "react-slick";
import { AboutRetreatWrapper, Title, Text, SectionWrapper, SectionItem, SectionTitle, SectionContent, SectionIcon, ImageSliderWrapper, ImageSlide } from "./styles";
import { AboutRetreatProps } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SvgIcon } from "../../common/SvgIcon";

const AboutRetreat: React.FC<AboutRetreatProps> = ({ id, title, text, sections, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <AboutRetreatWrapper id={id}>
      <Title>{title}</Title>
      <Text>{text}</Text>

      {images && images.length > 0 && (
        <ImageSliderWrapper>
          <Slider {...settings}>
            {images.map((image, index) => (
              <ImageSlide key={index}>
                <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`Slide ${index + 1}`} />
              </ImageSlide>
            ))}
          </Slider>
        </ImageSliderWrapper>
      )}

      <SectionWrapper>
        {sections.map((section, index) => (
          <SectionItem key={index}>
            <SvgIcon src={section.icon} width="60px" height="60px" />
            <SectionTitle>{section.title}</SectionTitle>
            <SectionContent>{section.content}</SectionContent>
          </SectionItem>
        ))}
      </SectionWrapper>
    </AboutRetreatWrapper>
  );
};

export default AboutRetreat;