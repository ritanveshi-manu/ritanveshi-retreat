export interface Testimonial {
  name: string;
  content: string;
  date: string;
  rating: number;
  imageUrl?: string;
  location: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}