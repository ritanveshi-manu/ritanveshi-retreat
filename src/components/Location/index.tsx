import React, { useEffect } from "react";
import Slider from "react-slick";
import { LocationWrapper, LocationTitle, LocationDescription, ImageSliderWrapper, ImageSlide, MapWrapper } from "./styles";
import { LocationProps } from "./types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Location: React.FC<LocationProps> = ({
  title,
  description,
  images,
  googleMapUrl,
  id,
}) => {
  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      <LocationTitle>{title}</LocationTitle>
      <LocationDescription>{description}</LocationDescription>

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
        <h3>Find us on the Map</h3>
        <iframe
          title="Rishikesh Location"
          src={googleMapUrl}
          width="100%"
          height="450"
          frameBorder="0"
          style={{
            border: 0,
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          allowFullScreen
        />
      </MapWrapper>
    </LocationWrapper>
  );
};

export default Location;