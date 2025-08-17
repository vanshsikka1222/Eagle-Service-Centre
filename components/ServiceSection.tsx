// WHAT WE OFFER

"use client";
import React from "react";
import FeatureService from "./FeatureService";
import Services from "./Services";
import Badge from "./Badge";
import { useRef } from "react";
import { useScrollRevealAnimation } from "../hooks/useScrollRevealAnimation";

const ServiceSection = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef1 = useRef<HTMLDivElement>(null);
  const headingRef1 = useRef<HTMLHeadingElement>(null);

  useScrollRevealAnimation({ badgeRef, headingRef });
  useScrollRevealAnimation({badgeRef:badgeRef1,headingRef:headingRef1 });

  return (
    <div id="services" className="scroll-mt-24">
      <section className="font-geist max-w-[780px] w-full h-fit mt-[72px] md:mt-[112px] lg:mt-[120px] flex flex-col flex-wrap gap-4">
        <div ref={badgeRef}>
          <Badge text={"Industries We Serve"} />
        </div>
        <h2
          ref={headingRef}
          className=" text-[22px] md:text-[32px] lg:text-[36px] font-semibold text-[#2C2C2C]"
        >
          DELIVERING PRECISION WELDING SOLUTIONS ACROSS DIVERSE SECTORS
        </h2>
        <p className="text-[16px] md:text-[18px] font-light text-[#2C2C2C]">
        From automotive to healthcare, packaging to fashion, our high-frequency PVC welding machines power a wide range of industries with precision, durability, and efficiency.
        </p>
      </section>

      {/* dynamic feature service section */}

      <FeatureService />

      <div className=" mt-[80px] lg:mt-[160px] w-full h-full flex flex-col gap-4">
        <div ref={badgeRef1}>
          <Badge text={"Why Choose Us"} className={"mx-auto"} />
        </div>
        <h2
          ref={headingRef1}
          className="w-full uppercase text-[#2C2C2C] font-semibold font-geist text-[20px] md:text-[32px] lg:text-[36px] text-center"
        >
          Built with quality, <br />
          Grown through trust..!!
        </h2>
        <Services />
      </div>
    </div>
  );
};

export default ServiceSection;
