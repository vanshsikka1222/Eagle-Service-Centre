"use client"
import React, { useRef } from "react";
import Badge from "./Badge";
import FeatureCard from "./FeatureCard";
import { useScrollRevealAnimation } from "@/hooks/useScrollRevealAnimation";

const AboutSection = () => {

    const badgeRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)

    useScrollRevealAnimation({badgeRef,headingRef})
  return (
    <div
      id={"about"}
      className="mt-[80px] lg:mt-[160px] w-full h-full flex flex-col lg:flex-row  gap-10 md:gap-12 scroll-mt-24"
    >
      <div className="lg:w-[30%] flex flex-col">
        <div ref={badgeRef}>
        <Badge text={"Who We Are"} />
        </div>
        <h2 ref={headingRef} className="mt-4 w-full text-left uppercase text-[#2C2C2C] font-semibold font-geist text-[20px] md:text-[32px] lg:text-[36px] ">
          Precision. Performance. Partnership. Progress.
        </h2>
        <p className="mt-[40px] md:mt-[48px] font-light text-[16px] md:text-[18px]">
        With decades of excellence, Eagle Service Centre is a trusted name in high-frequency PVC welding machines—renowned for durability, precision, unmatched customer satisfaction, innovative solutions, global reach, and superior after-sales service.
        </p>

        <div className="mt-[40px] md:mt-[48px] font-light text-[16px] md:text-[18px] grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(2,1fr)] w-full gap-[24px]">
          <div className="w-[140px] flex flex-col gap-1 text-[#2C2C2C] font-geist">
            <p className="text-4xl md:text-5xl  font-light relative">
              1977
              <span className="absolute top-0 text-3xl md:text-4xl"></span>
            </p>
            <p className="text-[14px] lg:text-[14px]">Established Since</p>
          </div>
          
          <div className="w-[140px] flex flex-col gap-1 text-[#2C2C2C] font-geist">
            <p className="text-4xl md:text-5xl  font-light relative">
              20
              <span className="absolute top-0 text-3xl md:text-4xl">+</span>
            </p>
            <p className="text-[14px] lg:text-[14px]">Industries Served Across Sectors</p>
          </div>
          
          <div className="w-[140px] flex flex-col gap-1 text-[#2C2C2C] font-geist">
            <p className="text-4xl md:text-5xl  font-light relative">
              97
              <span className="absolute top-0 text-3xl md:text-4xl">%</span>
            </p>
            <p className="text-[14px] lg:text-[14px]">Client Retention Rate</p>
          </div>

          <div className="w-[140px] flex flex-col gap-1 text-[#2C2C2C] font-geist">
            <p className="text-4xl md:text-5xl  font-light relative">
              24/7
              <span className="absolute top-0 text-3xl md:text-4xl"></span>
            </p>
            <p className="text-[14px] lg:text-[14px]">Customer Support</p>
          </div>
        </div>
      </div>

      <div className="lg:w-[70%] flex flex-col gap-6">
        <div className="max-h-[400px] overflow-hidden rounded-[32px]">
          <img
            src="/who-we-are01.jpg"
            alt="who-we-are"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,1fr)] gap-[24px]">
          <FeatureCard
            icon={"/eye.svg"}
            heading={"Our Vision"}
            desc={
              "To lead with innovation, engineering excellence, and build lasting partnerships through trust and quality."
            }
          />
          <FeatureCard
            icon={"/mission.svg"}
            heading={"Our Mission"}
            desc={
              "To deliver reliable, top-quality machines and services that help industries achieve long term efficiency and consistent performance."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
