import React from "react";
import { TestimonialsWrapper, TestimonialsContainer, TestimonialItem, TestimonialText, TestimonialAuthor, TestimonialDate, TestimonialRating, TestimonialImage, TestimonialLocation } from "./styles";
import { TestimonialsProps } from "./types";

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <TestimonialsWrapper>
      <h2>Testimonials</h2>
      <TestimonialsContainer>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index}>
            <TestimonialImage
              src={testimonial.imageUrl || `${process.env.PUBLIC_URL}/img/svg/default_profile.svg`}
              alt={testimonial.name}
            />
            <TestimonialText>"{testimonial.content}"</TestimonialText>
            <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
            <TestimonialDate>{new Date(testimonial.date).toLocaleDateString()}</TestimonialDate>
            <TestimonialRating>Rating: {testimonial.rating} / 5</TestimonialRating>
            <TestimonialLocation>{testimonial.location}</TestimonialLocation>
          </TestimonialItem>
        ))}
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};

export default Testimonials;