"use client";
import { usePopUpAnimation } from "@/hooks/usePopUpAnimation";
import React, { useRef } from "react";

const TestimonialCard = ({
  ratings,
  review,
  avatarUrl,
  testimonialName,
  designation,
}: {
  ratings: number;
  review: string;
  avatarUrl: string;
  testimonialName: string;
  designation: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  usePopUpAnimation(cardRef);

  return (
    <div
      ref={cardRef}
      className="
        rounded-2xl md:rounded-[32px] 
        flex flex-col 
        p-4 sm:p-6 md:p-8 
        gap-4 sm:gap-6 md:gap-8  
        bg-[#F3F3F3] 
        w-full md:h-full
        min-w-[85%] sm:min-w-[60%] md:min-w-0
         sm:min-h-[260px] md:min-h-[270px]
        h-[350px]
      "
    >
      {/* Top: rating + review */}
      <div className="flex flex-col gap-2 sm:gap-3 overflow-hidden">
        <div className="flex gap-1 sm:gap-2">
          {[...Array(ratings)].map((_, idx) => (
            <img
              key={idx}
              src="/star-black.svg"
              alt="star-rating"
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
          ))}
        </div>
        <p className="text-[#2C2C2C] font-geist font-light text-sm sm:text-base md:text-[16px] leading-relaxed line-clamp-5">
          {review}
        </p>
      </div>

      {/* Bottom: avatar + name + role */}
      <div className="flex gap-3 items-center">
        <img
          src={avatarUrl}
          alt={`${testimonialName}-avatar`}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover aspect-square"
        />
        <div className="flex flex-col">
          <p className="font-geist font-semibold text-[#2C2C2C] text-sm sm:text-base md:text-[16px]">
            {testimonialName}
          </p>
          <p className="font-geist font-light text-[#888888] text-xs sm:text-sm md:text-[15px]">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
