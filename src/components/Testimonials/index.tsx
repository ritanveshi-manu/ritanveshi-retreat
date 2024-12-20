import React, { useState } from "react";
import { Modal } from "antd";
import {
  TestimonialsWrapper,
  TestimonialsContainer,
  TestimonialItem,
  TestimonialText,
  TestimonialAuthor,
  TestimonialDate,
  TestimonialRating,
  TestimonialImage,
  TestimonialLocation,
  Title,
} from "./styles";
import { TestimonialsProps } from "./types";

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleMoreClick = (content: string) => {
    setModalContent(content);
    setModalVisible(true);
  };

  return (
    <TestimonialsWrapper>
      <Title>Testimonials</Title>
      <TestimonialsContainer>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index}>
            <TestimonialImage
              src={testimonial.imageUrl || `${process.env.PUBLIC_URL}/img/svg/default_profile.svg`}
              alt={testimonial.name}
            />
            <TestimonialText data-fulltext={testimonial.content}>
              {testimonial.content}
            </TestimonialText>
            <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
            <TestimonialDate>{new Date(testimonial.date).toLocaleDateString()}</TestimonialDate>
            <TestimonialRating>Rating: {testimonial.rating} / 5</TestimonialRating>
            <TestimonialLocation>{testimonial.location}</TestimonialLocation>
          </TestimonialItem>
        ))}
      </TestimonialsContainer>
      <Modal
        visible={modalVisible}
        title="Testimonial"
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <p>{modalContent}</p>
      </Modal>
    </TestimonialsWrapper>
  );
};

export default Testimonials;