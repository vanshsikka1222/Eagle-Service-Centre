"use client";
import React, { useRef } from "react";
import Badge from "./Badge";
import FaqAccordion from "./FaqAccordion";
import { useScrollRevealAnimation } from "@/hooks/useScrollRevealAnimation";

const FAQSection = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useScrollRevealAnimation({ badgeRef, headingRef });
  return (
    <div className="px-[16px] md:px-[32px] lg:px-[80px]">
      <div className="mt-[80px] lg:mt-[160px] h-full w-full flex flex-col lg:flex-row gap-10 md:gap-12 relative">
        {/* LEFT COLUMN - STICKY */}

        <div className="force-tablet-pro-faq-width lg:w-[20%]">
          <div className="flex flex-col lg:sticky lg:top-28">
            <div ref={badgeRef}>

            <Badge text={"Solutions & Support"} />
            </div>
            <h2 ref={headingRef} className="mt-4 w-full text-left uppercase text-[#2C2C2C] font-semibold font-geist text-[20px] md:text-[32px] lg:text-[36px]">
              Frequently asked questions
            </h2>
          </div>
        </div>

        {/* RIGHT COLUMN - SCROLLABLE CONTENT */}
        <div className=" lg:w-[70%] overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-hide overflow-x-hidden flex justify-center">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
