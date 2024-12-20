import styled from "styled-components";

export const LocationWrapper = styled.div`
  padding: 50px 20px;
  text-align: center;
  border-radius: 10px;
  background-color: #FEDEC8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;


export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

export const ImageSliderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageSlide = styled.div`
  img {
    width: 100%;
    height: 500px; /* Set a fixed height for all images */
    object-fit: cover; /* Ensure the image covers the entire area */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const MapWrapper = styled.div`
  margin-top: 40px;
  h3 {
    margin-bottom: 20px;
  }
  width: 100%;
`;