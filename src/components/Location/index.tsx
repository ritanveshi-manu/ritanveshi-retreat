import React, { useEffect } from "react";
import Slider from "react-slick";
import { LocationWrapper, Title, Description, ImageSliderWrapper, ImageSlide, MapWrapper } from "./styles";
import { LocationProps } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Location: React.FC<LocationProps> = ({
  title,
  description,
  images,
  id,
}) => {
  // Scroll to section function
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  useEffect(() => {
    // Optionally scroll to this section on component mount (if necessary)
    // scrollToSection(id);
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <LocationWrapper id={id}>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <ImageSliderWrapper>
        <Slider {...settings}>
          {images.map((image, index) => (
            <ImageSlide key={index}>
              <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`Location Image ${index + 1}`} />
            </ImageSlide>
          ))}
        </Slider>
      </ImageSliderWrapper>

      <MapWrapper>
        <Title>Find us on the Map</Title>
        <iframe 
        title="Auroville Ashram, Rishikesh, Uttarakhand"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110548.00008964975!2d78.13076119711461!3d30.018922273819804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093f33bab68a9d%3A0x2b8e46e26418955c!2sAuro%20Valley%20Ashram%20Raiwala%20Rishikesh!5e0!3m2!1sen!2sin!4v1734542238156!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{ border: "1px" }} 
        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </MapWrapper>
    </LocationWrapper>
  );
};

export default Location;