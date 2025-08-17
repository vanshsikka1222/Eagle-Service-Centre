"use client";
import { usePopUpAnimation } from "@/hooks/usePopUpAnimation";
import React, { useRef } from "react";

const FeatureCard = ({
  icon,
  heading,
  desc,
}: {
  icon: String;
  heading: String;
  desc: String;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  usePopUpAnimation(cardRef);

  return (
    <div ref={cardRef} className="relative flex flex-col items-start justify-center md:items-start md:justify-center gap-[16px] md:gap-[32px] bg-[#F3F3F3] rounded-[32px] px-[24px] py-[24px] md:py-[32px] md:px-[24px] lg:py-[40px] lg:px-[32px] min-w-[200px] md:min-w-0">
      <div className="relative aspect-square p-[12px] md:p-[16px] w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full bg-white flex justify-center items-center">
        <img
          src={`${icon}`}
          alt={`${icon}-logo`}
          className="w-full h-full object-contain flex-1"
        />
      </div>

      <div className="flex flex-col gap-[16px] font-geist text-[#2C2C2C]">
        <p className="text-[18px] lg:text-[26px] font-semibold">{heading}</p>
        <p className="text-[10px] lg:text-[18px] font-light">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
