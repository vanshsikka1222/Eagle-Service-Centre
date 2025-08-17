"use client";
import React, { useRef } from "react";
import Badge from "./Badge";
import Testimonial from "./Testimonial";
import { useScrollRevealAnimation } from "@/hooks/useScrollRevealAnimation";

const ReviewSection = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useScrollRevealAnimation({ badgeRef, headingRef });
  return (
    <div className="px-[16px] md:px-[32px] lg:px-[80px]">
      <div className="mt-[80px] lg:mt-[160px] w-full flex flex-col lg:flex-row gap-10 md:gap-12 relative">
        {/* LEFT COLUMN - STICKY */}
        <div className="force-tablet-pro-faq-width lg:w-[20%]">
          <div className="flex flex-col lg:sticky lg:top-28">
            <div ref={badgeRef}>
              <Badge text={"What Our Clients Say"} />
            </div>
            <h2
              ref={headingRef}
              className="mt-4 w-full text-left uppercase text-[#2C2C2C] font-semibold font-geist text-[20px] md:text-[32px] lg:text-[36px]"
            >
              Real Experiences. Proven Results.
            </h2>
            <p className="mt-[40px] md:mt-[48px] font-light text-[16px] md:text-[18px]">
            Our clients define our success. Discover what top brands and industry experts say about the quality, precision, and performance of our high frequency PVC welding machines.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - SCROLLABLE CONTENT */}
        <Testimonial />
      </div>
    </div>
  );
};

export default ReviewSection;
