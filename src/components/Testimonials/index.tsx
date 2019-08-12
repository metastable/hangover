import React from 'react';
interface TestimonialsProps {
  testimonials?: {
    quote?: string;
    author?: string;
  }[];
}
const Testimonials: React.FunctionComponent<TestimonialsProps> = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial, id) => (
      <article className="message" key={id}>
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);
export default Testimonials;
