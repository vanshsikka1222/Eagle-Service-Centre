import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "@/public/data/testimonials";

const Testimonial = () => {
  return (
    <div
      className="
        w-full lg:w-[70%] 
        flex gap-6 overflow-x-auto md:overflow-x-visible 
        md:grid md:grid-cols-[repeat(2,1fr)] 
        scroll-smooth
      "
    >
      {testimonials?.map((testimonial, i) => (
        <TestimonialCard
          key={i}
          ratings={5}
          review={testimonial.review}
          avatarUrl={testimonial.image}
          testimonialName={testimonial.name}
          designation={testimonial.designation}
        />
      ))}
    </div>
  );
};

export default Testimonial;
