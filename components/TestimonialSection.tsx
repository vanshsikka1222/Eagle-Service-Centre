"use client";
import { useRef } from "react";
import Badge from "./Badge";
import { useScrollRevealAnimation } from "@/hooks/useScrollRevealAnimation";

const TestimonialSection = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useScrollRevealAnimation({ badgeRef, headingRef });
  return (
    <div
      id="testimonials"
      className="scroll-mt-24 mt-20 md:mt-40 w-full h-full flex flex-col justify-center items-center gap-4"
    >
      <div ref={badgeRef}>
        <Badge text={"Clients That Believe in Us"} />
      </div>
      <h2
        ref={headingRef}
        className="text-center w-full uppercase text-[#2C2C2C] font-semibold font-geist text-[20px] md:text-[32px] lg:text-[36px] lg:w-[800px]"
      >
        Leading Brands That Trust Our Craft
      </h2>
    </div>
  );
};

export default TestimonialSection;
