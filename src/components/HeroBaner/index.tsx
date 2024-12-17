import React from "react";
import { HeroBannerWrapper, HeroTitle, HeroSubtitle, HeroDates, HeroLocation } from "./styles";

const HeroBaner = () => {
  return (
    <HeroBannerWrapper>
      <HeroTitle>Ritanveshi Yogayan Foundation Presents</HeroTitle>
      <HeroSubtitle>A Transformational Yoga Retreat in Rishikesh</HeroSubtitle>
      <HeroDates>Dates: January 29, 2025 – February 2, 2025</HeroDates>
      <HeroLocation>Location: The Spiritual Heart of Rishikesh</HeroLocation>
    </HeroBannerWrapper>
  );
};

export default HeroBaner;